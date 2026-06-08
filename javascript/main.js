document.addEventListener('DOMContentLoaded', () => {

    /* ---- 1. marcar pagina activa al menu ---- */
    const navLinks = document.querySelectorAll('.header__menu a');
    let rutaActual = window.location.pathname.split('/').pop();
    if (rutaActual === '') rutaActual = 'index.html';

    navLinks.forEach(enllac => {
        const rutaEnllac = enllac.getAttribute('href').split('/').pop();
        if (rutaEnllac === rutaActual) {
            enllac.classList.add('is-active');
        }
    });

    /* ---- 2. menu hamburguesa ---- */
    const botoMenu = document.querySelector('.header__toggle');
    const navContent = document.querySelector('.header__nav');
    
    if (botoMenu && navContent) {
        const enllacosMenu = navContent.querySelectorAll('a');
        const iconaMenu = botoMenu.querySelector('img'); /* capturem la imatge de dins del boto */
        const ampleMobilMax = 768;

        const alternarMenu = () => {
            navContent.classList.toggle('show');
            const estaObert = navContent.classList.contains('show');
            
            /* canviem l'atribut src de la icona depenent de si esta obert o tancat */
            if (iconaMenu) {
                iconaMenu.src = estaObert ? 'media/icons/tancar.svg' : 'media/icons/menu-hamburguesa.svg';
                iconaMenu.alt = estaObert ? 'tancar menú' : 'obrir menú';
            }
        };

        const tancaMenu = () => {
            navContent.classList.remove('show');
            /* ens assegurem que torni a l'hamburguesa al tancar */
            if (iconaMenu) {
                iconaMenu.src = 'media/icons/menu-hamburguesa.svg';
                iconaMenu.alt = 'obrir menú';
            }
        };

        botoMenu.addEventListener('click', alternarMenu);
        
        enllacosMenu.forEach(enllac => {
            enllac.addEventListener('click', () => {
                if (window.innerWidth <= ampleMobilMax) tancaMenu();
            });
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > ampleMobilMax) tancaMenu();
        });
    }

    /* ---- 3. clons per al marquee de la data i expositors ---- */
    const heroDateContainer = document.querySelector('.hero__date');
    if (heroDateContainer) {
        const baseSpan = heroDateContainer.querySelector('span');
        if (baseSpan) {
            const textContent = baseSpan.outerHTML;
            const textRepeated = textContent.repeat(2);
            heroDateContainer.innerHTML = `<div class="hero__date-track display-1">${textRepeated}${textRepeated}</div>`;
        }
    }
    
    const marqueeTrack = document.querySelector('.carrusel__track--marquee');
    if (marqueeTrack) {
        const items = marqueeTrack.innerHTML;
        marqueeTrack.innerHTML = items + items;
    }

    /* ---- 4. panells expandibles (accordio horitzontal) ---- */
    const panelsGrids = document.querySelectorAll('.panels__grid');
    panelsGrids.forEach(grid => {
        const panels = grid.querySelectorAll('.panel');
        panels.forEach(panel => {
            panel.addEventListener('click', () => {
                if (panel.classList.contains('is-expanded')) {
                    panel.classList.remove('is-expanded');
                    grid.classList.remove('has-expanded');
                } else {
                    panels.forEach(p => p.classList.remove('is-expanded'));
                    panel.classList.add('is-expanded');
                    grid.classList.add('has-expanded');
                }
            });
        });
    });

    /* ---- 5. sistema de modals unificat ---- */
    const modals = document.querySelectorAll('.modal');
    const closeBtns = document.querySelectorAll('.js-close-modal');

    const tancarModals = () => {
        modals.forEach(modal => {
            if (modal.classList.contains('is-active') && modal.classList.contains('modal--map-variant')) {
                document.querySelectorAll('.js-btn-ubicacio').forEach(btn => {
                    btn.classList.remove('is-active');
                });
            }
            modal.classList.remove('is-active');
            modal.classList.remove('modal--map-variant');
        });
        document.documentElement.style.overflow = ''; 
    };

    closeBtns.forEach(btn => btn.addEventListener('click', tancarModals));

    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) tancarModals();
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') tancarModals();
    });

    document.querySelectorAll('.js-open-contact').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const modalContact = document.getElementById('modal-contact');
            if (modalContact) {
                modalContact.classList.add('is-active');
                document.documentElement.style.overflow = 'hidden';
            }
        });
    });

    const imatgesClicables = '.activitat__img img, .history__carousel-track img, .card > img, .banner__img, .mapa-img';
    
    document.body.addEventListener('click', (e) => {
        if (e.target.matches(imatgesClicables)) {
            if (e.target.classList.contains('mapa-img') && window.innerWidth > 1100) {
                return;
            }
            e.preventDefault();
            const modalLightbox = document.getElementById('modal-lightbox');
            const modalImg = modalLightbox ? modalLightbox.querySelector('.modal__img') : null;
            
            if (modalLightbox && modalImg) {
                if (e.target.classList.contains('mapa-img')) {
                    modalLightbox.classList.add('modal--map-variant');
                } else {
                    modalLightbox.classList.remove('modal--map-variant');
                }
                modalImg.src = e.target.src;
                modalImg.alt = e.target.alt || "Imatge";
                modalLightbox.classList.add('is-active');
                document.documentElement.style.overflow = 'hidden';
            }
        }
    });

    /* ---- 6. programacio: filtres, interaccions i modals ---- */
    const filterToggleBtn = document.querySelector('.js-filter-toggle');
    const filterDropdown = document.getElementById('filter-dropdown');
    const filterTags = document.querySelectorAll('.filter-tag');
    const searchInput = document.querySelector('.search-bar input'); 
    const emptyState = document.getElementById('empty-state');
    const activitatsList = document.querySelector('.programacio__llistat');
    const activitatsNodes = document.querySelectorAll('.activitat');
    const diaGroups = document.querySelectorAll('.dia-group');
    const allClearBtns = document.querySelectorAll('.js-btn-clear');
    const mapaImgGlobal = document.querySelector('.mapa-img');

    if (activitatsNodes.length > 0) {
        const activitatsData = Array.from(activitatsNodes).map(activitat => ({
            element: activitat,
            formats: activitat.dataset.format ? activitat.dataset.format.split(' ') : [],
            publics: activitat.dataset.public ? activitat.dataset.public.split(' ') : [],
            titol: (activitat.querySelector('h4')?.textContent || '').toLowerCase()
        }));

        if (filterDropdown) {
            if (filterToggleBtn) {
                filterToggleBtn.addEventListener('click', () => {
                    filterDropdown.classList.toggle('is-open');
                    const icon = filterToggleBtn.querySelector('img');
                    if (icon) {
                        icon.src = filterDropdown.classList.contains('is-open') 
                            ? 'media/icons/fletxa-amunt-curta.svg' 
                            : 'media/icons/fletxa-avall-curta.svg';
                    }
                });
            }

            const aplicarFiltres = () => {
                const activeFormats = Array.from(document.querySelectorAll('.filter-list[data-group="format"] .filter-tag--active')).map(b => b.dataset.filter);
                const activePublics = Array.from(document.querySelectorAll('.filter-list[data-group="public"] .filter-tag--active')).map(b => b.dataset.filter);
                const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
                
                let activitatsVisibles = 0;

                activitatsData.forEach(item => {
                    const matchFormat = activeFormats.length === 0 || activeFormats.some(f => item.formats.includes(f));
                    const matchPublic = activePublics.length === 0 || activePublics.some(p => item.publics.includes(p));
                    const matchSearch = searchTerm === '' || item.titol.includes(searchTerm);

                    if (matchFormat && matchPublic && matchSearch) {
                        item.element.classList.remove('is-hidden');
                        activitatsVisibles++;
                    } else {
                        item.element.classList.add('is-hidden');
                    }
                });

                let primerDiaVisible = null;
                
                diaGroups.forEach(dia => {
                    const teActivitats = dia.querySelectorAll('.activitat:not(.is-hidden)').length > 0;
                    dia.classList.toggle('is-hidden', !teActivitats);
                    if (teActivitats && !primerDiaVisible) {
                        primerDiaVisible = dia;
                    }
                });
                
                diaGroups.forEach(dia => {
                    const icon = dia.querySelector('.dia-icon');
                    if (dia === primerDiaVisible) {
                        dia.classList.add('dia-group--active');
                        if (icon) icon.src = 'media/icons/fletxa-amunt-curta.svg';
                    } else {
                        dia.classList.remove('dia-group--active');
                        if (icon) icon.src = 'media/icons/fletxa-avall-curta.svg';
                    }
                });
                
                if (emptyState) emptyState.classList.toggle('is-hidden', activitatsVisibles > 0);
            };

            filterTags.forEach(tag => {
                tag.addEventListener('click', () => {
                    tag.classList.toggle('filter-tag--active');
                    aplicarFiltres();
                });
            });

            if (searchInput) {
                searchInput.addEventListener('input', aplicarFiltres);
            }

            allClearBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    filterTags.forEach(tag => tag.classList.remove('filter-tag--active'));
                    if (searchInput) searchInput.value = '';
                    document.querySelectorAll('.js-btn-ubicacio').forEach(btn => btn.classList.remove('is-active'));
                    aplicarFiltres(); 
                });
            });
        }
    }

    if (activitatsList) {
        activitatsList.addEventListener('click', (e) => {
            const diaHeader = e.target.closest('.dia-header');
            if (diaHeader) {
                const group = diaHeader.closest('.dia-group');
                const icon = diaHeader.querySelector('.dia-icon');
                group.classList.toggle('dia-group--active');
                const isExpanded = group.classList.contains('dia-group--active');
                if (icon) icon.src = isExpanded ? 'media/icons/fletxa-amunt-curta.svg' : 'media/icons/fletxa-avall-curta.svg';
                return;
            }

            const btnInfo = e.target.closest('.js-btn-info');
            if (btnInfo) {
                const activitat = btnInfo.closest('.activitat');
                const textSpan = btnInfo.querySelector('.link-text');
                const iconImg = btnInfo.querySelector('img');
                
                activitat.classList.toggle('activitat--expanded');
                const isExpanded = activitat.classList.contains('activitat--expanded');
                
                if (textSpan) textSpan.textContent = isExpanded ? 'Menys informació' : 'Més informació';
                if (iconImg) iconImg.src = isExpanded ? 'media/icons/fletxa-amunt-curta.svg' : 'media/icons/fletxa-avall-curta.svg';
                return;
            }

            const btnUbicacio = e.target.closest('.js-btn-ubicacio');
            if (btnUbicacio) {
                const rutaMapa = btnUbicacio.getAttribute('data-mapa');
                if (!rutaMapa) return;

                document.querySelectorAll('.js-btn-ubicacio').forEach(btn => {
                    btn.classList.remove('is-active');
                });
                btnUbicacio.classList.add('is-active');

                const ampleDesktop = 1100;
                if (window.innerWidth > ampleDesktop && mapaImgGlobal) {
                    mapaImgGlobal.src = rutaMapa; 
                } else {
                    const modalLightbox = document.getElementById('modal-lightbox');
                    const modalImg = modalLightbox ? modalLightbox.querySelector('.modal__img') : null;
                    if (modalLightbox && modalImg) {
                        
                        modalLightbox.classList.add('modal--map-variant'); 
                        
                        modalImg.src = rutaMapa;
                        modalImg.alt = "mapa de la ubicació";
                        modalLightbox.classList.add('is-active');
                        document.documentElement.style.overflow = 'hidden';
                    }
                }
                return;
            }

            const btnCalendari = e.target.closest('.js-btn-calendari');
            if (btnCalendari) {
                const modalCal = document.getElementById('modal-calendar');
                if (modalCal) {
                    modalCal.classList.add('is-active');
                    document.documentElement.style.overflow = 'hidden';
                }
                return;
            }
        });
    }

    /* ---- 7. pestanyes (tabs) - pagina qui som ---- */
    const tabsNav = document.querySelector('.tabs__nav');
    if (tabsNav) {
        const tabBtns = document.querySelectorAll('.tabs__nav .btn');
        const tabPanels = document.querySelectorAll('.tabs__panel');

        tabsNav.addEventListener('click', (e) => {
            const clickedBtn = e.target.closest('.btn');
            if (!clickedBtn) return; 

            tabBtns.forEach(btn => btn.classList.remove('btn--active'));
            tabPanels.forEach(panel => panel.classList.remove('tabs__panel--active'));

            clickedBtn.classList.add('btn--active');
            const targetId = clickedBtn.getAttribute('data-tab'); 
            const targetPanel = document.getElementById(targetId);
            
            if (targetPanel) {
                targetPanel.classList.add('tabs__panel--active');
            }
        });
    }

    /* ---- 8. carrusels d'historia (amb loop i mides variables) ---- */
    const carousels = document.querySelectorAll('.history__carousel');
    carousels.forEach(carousel => {
        const track = carousel.querySelector('.history__carousel-track');
        const btnPrev = carousel.querySelector('.btn-arrow:first-child');
        const btnNext = carousel.querySelector('.btn-arrow:last-child');

        if (!track || !btnPrev || !btnNext) return;

        btnNext.addEventListener('click', () => {
            const currentScroll = track.scrollLeft;
            if (currentScroll + track.clientWidth >= track.scrollWidth - 5) {
                track.scrollTo({ left: 0, behavior: 'smooth' });
                return; 
            }
            const images = Array.from(track.querySelectorAll('img'));
            const nextImage = images.find(img => img.offsetLeft > currentScroll + 5);
            if (nextImage) {
                track.scrollTo({ left: nextImage.offsetLeft, behavior: 'smooth' });
            } else {
                track.scrollTo({ left: 0, behavior: 'smooth' });
            }
        });

        btnPrev.addEventListener('click', () => {
            const currentScroll = track.scrollLeft;
            const images = Array.from(track.querySelectorAll('img'));
            if (currentScroll <= 5) {
                const lastImage = images[images.length - 1];
                if (lastImage) track.scrollTo({ left: lastImage.offsetLeft, behavior: 'smooth' });
                return; 
            }
            const prevImage = images.slice().reverse().find(img => img.offsetLeft < currentScroll - 5);
            if (prevImage) {
                track.scrollTo({ left: prevImage.offsetLeft, behavior: 'smooth' });
            }
        });
    });
    
    /* ---- 9. desplegable lateral de la cronologia a mobil (historia) ---- */
    const historyToggle = document.querySelector('.history__toggle');
    const historyNav = document.querySelector('.history__nav');

    if (historyToggle && historyNav) {
        historyToggle.addEventListener('click', () => {
            const estaObert = historyNav.style.display === 'flex';
            historyNav.style.display = estaObert ? 'none' : 'flex';
            
            const iconaFletxa = historyToggle.querySelector('img');
            if (iconaFletxa) {
                iconaFletxa.src = estaObert 
                    ? 'media/icons/fletxa-avall-curta.svg' 
                    : 'media/icons/fletxa-amunt-curta.svg';
            }
        });
        
        const historyLinks = historyNav.querySelectorAll('.history__link');
        historyLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    historyNav.style.display = 'none';
                    const iconaFletxa = historyToggle.querySelector('img');
                    if (iconaFletxa) iconaFletxa.src = 'media/icons/fletxa-avall-curta.svg';
                }
            });
        });
    }

    /* ---- 10. scrollspy historia (menu lateral) ---- */
    const eras = document.querySelectorAll('.history__era');
    const navLinksHistory = document.querySelectorAll('.history__link');

    if (eras.length > 0 && navLinksHistory.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '-30% 0px -50% 0px', 
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinksHistory.forEach(link => link.classList.remove('history__link--active'));
                    const activeLink = document.querySelector(`.history__link[href="#${entry.target.id}"]`);
                    if (activeLink) {
                        activeLink.classList.add('history__link--active');
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        eras.forEach(era => observer.observe(era));
    }
    
    /* ---- 11. intercepcio i sistema de validacio visual de formularis ---- */
    const formularis = document.querySelectorAll('.newsletter-form, .contact__form');

    formularis.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // evitem la recarrega brusca de la pagina

            // netegem completament els estats d'error i d'exit anteriors
            form.querySelectorAll('.has-error').forEach(el => el.classList.remove('has-error'));
            
            let statusDiv = form.querySelector('.form-status');
            if (!statusDiv) {
                statusDiv = document.createElement('div');
                statusDiv.classList.add('form-status');
                form.appendChild(statusDiv);
            }
            statusDiv.className = 'form-status'; // reiniciem classes secundaries

            let teErrors = false;
            let missatgesErrors = [];

            // 11.1 validacio de camps de text obligatoris
            const inputsText = form.querySelectorAll('input[type="text"], textarea');
            inputsText.forEach(input => {
                if (input.value.trim() === '') {
                    const inputGroup = input.closest('.input-group');
                    if (inputGroup) inputGroup.classList.add('has-error');
                    teErrors = true;
                }
            });

            // 11.2 validacio del format del correu electronic
            const inputEmail = form.querySelector('input[type="email"]');
            if (inputEmail) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(inputEmail.value.trim())) {
                    const inputGroup = inputEmail.closest('.input-group');
                    if (inputGroup) inputGroup.classList.add('has-error');
                    teErrors = true;
                    missatgesErrors.push('El format del correu electrònic no és vàlid. ');
                }
            }

            // 11.3 validacio del desplegable
            const selectMotiu = form.querySelector('select');
            if (selectMotiu) {
                if (selectMotiu.value === '') {
                    const inputGroup = selectMotiu.closest('.input-group');
                    if (inputGroup) inputGroup.classList.add('has-error');
                    teErrors = true;
                    missatgesErrors.push('Cal triar un motiu de contacte. ');
                }
            }

            // 11.4 validacio obligatoria del checkbox de la politica de privacitat
            const checkboxPrivacitat = form.querySelector('input[type="checkbox"]');
            if (checkboxPrivacitat) {
                if (!checkboxPrivacitat.checked) {
                    const checkboxLabel = checkboxPrivacitat.closest('.checkbox');
                    if (checkboxLabel) checkboxLabel.classList.add('has-error');
                    teErrors = true;
                    missatgesErrors.push('Cal acceptar la Política de Privacitat. ');
                }
            }

            // 11.5 renderitzat final del feedback visual
            if (teErrors) {
                statusDiv.classList.add('form-status--error');
                statusDiv.textContent = missatgesErrors.length > 0 
                    ? 'error: ' + missatgesErrors.join(' ') 
                    : 'Si us plau, omple tots els camps.';
            } else {
                statusDiv.classList.add('form-status--success');
                statusDiv.textContent = 'Enviat correctament! Moltes gràcies per col·laborar amb La Setmana.';
                form.reset();

                // si el formulari es troba dins d'un modal actiu, el tanquem despres de 2 segons
                const modalPare = form.closest('.modal.is-active');
                if (modalPare) {
                    setTimeout(() => {
                        modalPare.classList.remove('is-active');
                        document.documentElement.style.overflow = '';
                        statusDiv.className = 'form-status';
                    }, 2000);
                }
            }
        });
    });
});