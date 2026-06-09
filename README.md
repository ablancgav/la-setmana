Redisseny del web de La Setmana del Llibre en Català · README

## Descripció
Aquest projecte consisteix en la proposta de redisseny i el desenvolupament front-end adaptatiu de la plataforma digital per a “La Setmana del Llibre en Català”, l'esdeveniment de referència per a l'edició en llengua catalana. El treball s'ha estructurat seguint una metodologia professional de disseny interactiu per resoldre les mancances d'usabilitat i la fragmentació informativa de la interfície prèvia, transformant un programa complex en una agenda altament accessible, clara i funcional.


## Objectiu del projecte
L'objectiu principal és optimitzar l'experiència d'usuari (UX), millorar l'accessibilitat universal i actualitzar la línia gràfica de l'entorn digital de "La Setmana". Es busca plasmar el concepte de "descoberta pausada", utilitzant el buit i l'espai negatiu de manera estratègica per estructurar l'elevat volum de dades (més de 300 activitats i 200 expositors)i garantir una navegació intuïtiva per a totes les franges d'edat.


## Tecnologies utilitzades
	⁃	**HTML5** per a la construcció de l'estructura semàntica del contingut, validat sota els estàndards de l'auditoria oficial de la W3C.
	⁃	**CSS3** per al disseny visual editorial, l'escala d'espais centralitzada en custom properties (`:root`), els contrastos cromàtics accessibles i la maquetació responsiva.
	⁃	**JavaScript** (sense llibreries externes) per a la lògica d'interacció, el control dels components actius, l'auditoria de formularis i la gestió del DOM.


## Estructura principal de la pàgina
El lloc web s'organitza de forma modular a través dels següents blocs definits en l'arquitectura de la informació:
- **Capçalera:** Logotip institucional permanent, menú de navegació principal i component hamburguesa d'activació mòbil.
- **Hero:** Bloc d'impacte visual que destaca la imatge de campanya, el reclam de l'edició i l'accés directe a la programació.
- **Actualitat / Notícies:** Llistat amb les darreres novetats editorials i articles destacats del moment.
- **Expositors destacats:** Galeria contínua (marquee animat) amb els logotips de les editorials i llibreries participants.
- **Visita la fira:** Secció pràctica amb dades logístiques fonamentals (horaris, ubicació al Passeig Lluís Companys i accessos).
- **Podcast:** Espai dedicat a la reproducció i difusió dels episodis del programa cultural "TRAMES”.
- **Footer:** Tancament de la pàgina que unifica el formulari de subscripció a la newsletter, enllaços legals, recursos de premsa i dades de contacte de l'Associació d'Editors en Llengua Catalana.


## Característiques destacades
- **Menú hamburguesa fluid i reactiu:** Component mòbil animat verticalment (`opacity`, `visibility` i `translateY`) que commuta asíncronament els atributs `src` i `alt` de la icona personalitzada (hamburguesa/tancar). Disposa d'un script de detecció de clics exteriors (*click outside*) per recollir el menú automàticament si l'usuari toca fora.
- **Banners col·lapsables en carrusel mòbil:** Maquetació que aprofita la gràella nativa de 12 columnes a escriptori per estructurar "La Setmana Social" i "Llull Fellowship", i que es transforma de manera exclusiva en mòbil en un carrusel horitzontal net amb ancoratge magnètic (`scroll-snap-type: x mandatory`).
- **Sistema de modals unificat:** Estructura de codi reutilitzable per a diferents intencions (Formulari de contacte, Afegir al calendari i Lightbox d'imatges). El Lightbox detecta mitjançant JS el tipus de contingut i aplica la variant `.modal--map-variant` per encabir correctament els mapes de distribucions de casetes.
- **Filtratge de programació avançat:** Cercador i llistat interactiu optimitzat amb etiquetes actives per segmentar els actes per categories, tipus de format i públics objectiu (lector fidel, famílies i joves.
- **Acordió de cookies semàntic:** Gestió del consentiment legal integrat a la pàgina mitjançant el comportament natiu d'etiquetes `<details>` i `<summary>` sense JavaScript addicional, respectant la sintaxi HTML5 i incorporant els selectors de checkbox personalitzats de 24px.
- **Validació visual de formularis amb feedback de posició:** Intercepció del formulari per evitar la recàrrega que injecta de manera dinàmica la icona `error.svg` com a fons del camp. S'utilitza la propietat `background-position` per desplaçar i separar la icona de la vora d'acord amb el padding de seguretat de l'input.
- **Scrollspy i control de pàgina activa:** El menú de la capçalera detecta dinàmicament la ruta absoluta de la finestra per fixar l'estat `.is-active` a l'enllaç corresponent.
- **Reticula adaptativa responsive:** Maquetació fluida controlada completament per CSS Grid i Flexbox que reordena de forma automàtica els elements en 12 columnes (escriptori), 8 columnes (tauleta) i 4 columnes.
- **Semàntica d'accessibilitat protegida:** Ús correcte de la jerarquia de títols indexables per evitar salts de nivells, recolzada per la classe d'utilitat `.sr-only` per amagar text destinat exclusivament a lectors de pantalla de persones amb diversitat funcional o visual.


## Estructura de carpetes recomanada
Per al correcte funcionament dels enllaços i enrutaments relatius del projecte, cal respectar la següent disposició d'arxius:

```bash
/ (Arrel del projecte)
├── fonts/
│   ├── HelveticaNowText-Bold.ttf
│   ├── HelveticaNowText-Regular.ttf
│   ├── PPFragment-GlareExtraBold.otf
│   └── PPFragment-GlareRegular.otf
├── javascript/
│   └── main.js
├── media/
│   ├── icons/
│   │   ├── 3cat.svg
│   │   ├── accessibilitat.svg
│   │   ├── afegir.svg
│   │   ├── apple-calendar.svg
│   │   ├── calendari.svg
│   │   ├── cercar.svg
│   │   ├── checkbox-empty.svg
│   │   ├── checkbox-filled.svg
│   │   ├── eliminar.svg
│   │   ├── error.svg
│   │   ├── fitxer-ics.svg
│   │   ├── fletxa-amunt-curta.svg
│   │   ├── fletxa-avall-curta.svg
│   │   ├── fletxa-dreta-curta.svg
│   │   ├── fletxa-dreta.svg
│   │   ├── fletxa-dreta_blanca.svg
│   │   ├── fletxa-esquerra-curta.svg
│   │   ├── fletxa-esquerra.svg
│   │   ├── google-calendar.svg
│   │   ├── instagram.svg
│   │   ├── menu-hamburguesa.svg
│   │   ├── outlook.svg
│   │   ├── paperera.svg
│   │   ├── spotify.svg
│   │   ├── tancar.svg
│   │   ├── ubicacio.svg
│   │   ├── underline.svg
│   │   ├── user.svg
│   │   ├── yahoo.svg
│   │   └── youtube.svg
│   └── img/
│       ├── general/
│       │   ├── bg_la-setmana.png
│       │   └── logotip_la-setmana.svg
│       ├── inici/
│       │   ├── expositors/
│       │   │   ├── exportar (10).svg
│       │   │   ├── exportar (11).svg
│       │   │   ├── exportar (12).svg
│       │   │   ├── exportar (2).svg
│       │   │   ├── exportar (3).svg
│       │   │   ├── exportar (4).svg
│       │   │   ├── exportar (5).svg
│       │   │   ├── exportar (6).svg
│       │   │   ├── exportar (8).svg
│       │   │   ├── exportar (9).svg
│       │   │   ├── expositor-01.svg
│       │   │   ├── expositor-02.svg
│       │   │   ├── expositor-03.svg
│       │   │   ├── expositor-04.svg
│       │   │   ├── expositor-05.svg
│       │   │   ├── expositor-06.svg
│       │   │   ├── expositor-07.svg
│       │   │   ├── expositor-08.svg
│       │   │   ├── expositor-09.svg
│       │   │   ├── expositor-10.svg
│       │   │   ├── expositor-11.svg
│       │   │   ├── expositor-12.svg
│       │   │   ├── expositor-13.svg
│       │   │   ├── expositor-14.svg
│       │   │   ├── expositor-15.svg
│       │   │   ├── expositor-16.svg
│       │   │   ├── expositor-17.svg
│       │   │   ├── expositor-18.svg
│       │   │   ├── expositor-19.svg
│       │   │   ├── expositor-20.svg
│       │   │   ├── expositor-21.svg
│       │   │   ├── expositor-22.svg
│       │   │   └── expositor-23.svg
│       │   ├── bn_trames.jpg
│       │   ├── n1_La-Setmana-Familiar.jpg
│       │   ├── n2_Conclou-la-Fellowship.jpeg
│       │   ├── n3_Discurs-del-president.jpg
│       │   ├── n4_Converses-taules-rodones.jpg
│       │   ├── n5_Poesia-teatre.jpg
│       │   ├── n6_Carpa_llengua_estrena.jpg
│       │   ├── vlf_com-arribarhi.jpg
│       │   ├── vlf_horaris.jpg
│       │   └── vlf_ubicacio.jpg
│       ├── programacio/
│       │   ├── 18set-any-que-va.webp
│       │   ├── 18set-brosmind-bob-capgirat.jpg
│       │   ├── 18set-contacontes-jeff-i-pip.png
│       │   ├── 18set-mirar-be-veure-hi-millor.png
│       │   ├── 18set-premi-nuvol-contes.png
│       │   ├── 18set-tarda-jove-comic-km0.png
│       │   ├── 19set-atles-catalunya-nord.jpg
│       │   ├── 19set-celebrem-70-anys-miffy.png
│       │   ├── 19set-joana-bel.png
│       │   ├── 19set-jornada-astral.png
│       │   ├── 19set-magia-parles-magia.png
│       │   ├── 19set-mares-sense-filtres.png
│       │   ├── 19set-premi-illa-dels-llibres.png
│       │   ├── 19set-recital-virginia-woolf.png
│       │   ├── 20set-contes-montessori-emocions.png
│       │   ├── 20set-menuts-lectors.png
│       │   ├── 21set-configura-mobil-portatil-catala.png
│       │   ├── 21set-conquesta-catalana-mexic.png
│       │   ├── 21set-recital-joan-de-la-creu.png
│       │   ├── 22set-art-i-poesia.png
│       │   ├── 22set-lectura-facil.png
│       │   ├── 22set-sud-faulkner-mccullers.png
│       │   ├── 22set-veus-indispensables.jpg
│       │   ├── 23set-casa-en-flames.png
│       │   ├── 23set-literatura-postmoderna.png
│       │   ├── 23set-salvatge.png
│       │   ├── mapa-escenari-1.png
│       │   ├── mapa-exemple-1.svg
│       │   ├── mapa-exemple-2.svg
│       │   └── mapa.svg
│       └── qui-som/
│           ├── historia/
│           │   ├── 1983-cartell1-scaled.jpg
│           │   ├── 1984-cartell-scaled.jpg
│           │   ├── 1985-cartell2.webp
│           │   ├── 1986-cartell-scaled.jpg
│           │   ├── 1986-foto-scaled.jpg
│           │   ├── 1987-cartell-scaled.jpg
│           │   ├── 1988-cartell.jpg
│           │   ├── 1988-foto-scaled.jpg
│           │   ├── 1989-cartell-scaled.jpg
│           │   ├── 1989-foto-scaled.jpg
│           │   ├── 1990-cartell-1-scaled.jpg
│           │   ├── 1990-foto-scaled.jpg
│           │   ├── 1991-cartell-scaled.jpg
│           │   ├── 1991-foto-scaled-e1653120230905.jpg
│           │   ├── 1992-cartell-scaled.jpg
│           │   ├── 1993-cartell-scaled.jpg
│           │   ├── 1994-cartell-scaled.jpg
│           │   ├── 1995-cartell-scaled.jpg
│           │   ├── 1996-cartell2-scaled.jpg
│           │   ├── 1997-cartell2-scaled.jpg
│           │   ├── 1998-cartell-scaled.jpg
│           │   ├── 1999-cartell-scaled.jpg
│           │   ├── 2000-cartell-scaled.jpg
│           │   ├── 2006-INFANTIL.jpg
│           │   ├── 2006-LaSetmana-2006.png
│           │   ├── 2006-nen-llegint.jpg
│           │   ├── 2006-public-a-prop.jpg
│           │   ├── 2006-public-lluny.jpg
│           │   ├── 2006-retol-actes.jpg
│           │   ├── 2007-cartell-scaled.jpg
│           │   ├── 2008-CARTELL_SET_08-1.jpeg
│           │   ├── 2009-cartell.png
│           │   ├── 2010-LaSetmana-2010.png
│           │   ├── 2011-la-setmana-cartell-1.png
│           │   ├── 2012-LaSetmana-cartell-1.png
│           │   ├── 2013-LaSetmana-Cartell-1.png
│           │   ├── 2014-LaSetmana-Cartell-1.png
│           │   ├── 2015-biblioteques_cartell-1.jpg
│           │   ├── 2016-LaSetmana-Cartell.png
│           │   ├── 2017-LaSetmana-Cartell-e1651949351123.png
│           │   ├── 2018-LaSetmana-2018.cartell-scaled-e1651949771306.jpg
│           │   ├── 2019-LaSetmana-cartell-e1651949609723.png
│           │   ├── 2020-LaSetmana-Cartell.jpeg
│           │   ├── 2021-LaSetmana-cartell-e1651949234195.png
│           │   ├── 2022-cartell-lasetmana-a.jpg
│           │   ├── 2023-cartell-setmana-scaled.jpg
│           │   ├── 2024_AF_CARTELL-CONCURS_50x70_SENSE-LOGOS.jpg
│           │   └── 2025-AF_CARTELL-_scaled.jpg
│           ├── organitza/
│           │   ├── 1.1_editors.cat.jpg
│           │   ├── 2.10_institut-ramon-llull.svg
│           │   ├── 2.1_gremi-editors-de-catalunya.jpg
│           │   ├── 2.2_appec.png
│           │   ├── 2.3_gremi-llibreters-catalunya.jpg
│           │   ├── 2.4_gremi-distribuidors-publicacions-catalunya.png
│           │   ├── 2.5_icec.png
│           │   ├── 2.6_ICUB.jpg
│           │   ├── 2.7_biblioteques-barcelona.jpeg
│           │   ├── 2.7_biblioteques-barcelona.svg
│           │   ├── 2.8_xarxa-biblioteques-diba.svg
│           │   ├── 2.9_biblioteques-publiques-catalunya.svg
│           │   ├── 3.1_generalitat-departament-cultura.svg
│           │   ├── 3.2_ajuntament-barcelona.svg
│           │   ├── 3.3_onu-barcelona.jpg
│           │   ├── 4.1_diputacio-barcelona.svg
│           │   ├── 4.2_ministerio-cultura.svg
│           │   ├── 5.1_parlem.png
│           │   ├── 6.1_renfe.svg
│           │   ├── 7.1_caixa-guissona.svg
│           │   ├── 7.2_romanya-valls.png
│           │   ├── 7.3_coooc.jpg
│           │   ├── 7.4_estrella-damm.svg
│           │   ├── 7.5_facc.png
│           │   ├── 7.6_transloan.png
│           │   ├── 7.7_textura.svg
│           │   ├── 7.8_bonarea.svg
│           │   ├── 8.10_collegi_periodistes.svg
│           │   ├── 8.1_politica_linguistica.svg
│           │   ├── 8.2_cpnl.svg
│           │   ├── 8.3_omnium.png
│           │   ├── 8.4_cccb.jpg
│           │   ├── 8.5_fundacio_fcb.jpeg
│           │   ├── 8.6_educacio_gencat.svg
│           │   ├── 8.7_ateneu_bcn.jpg
│           │   ├── 8.8_ibbycat.svg
│           │   ├── 8.9_joves_lectors.png
│           │   ├── 9.1_3cat.svg
│           │   ├── 9.2_catradio.svg
│           │   ├── 9.3_lavanguardia.svg
│           │   ├── 9.4_flaixbac.svg
│           │   ├── 9.5_ara.svg
│           │   ├── 9.6_nuvol.jpg
│           │   ├── 9.6_nuvol.svg
│           │   ├── 9.7_catorze.png
│           │   ├── 9.8_timeout.png
│           │   └── 9.9_el_culturista.jpg
│           ├── ac_Antoni-Miro.jpg
│           ├── ac_Francesca-Llopis.jpg
│           ├── ac_Frederic-Amat.jpg
│           ├── ac_Ignasi-Aballi.jpg
│           ├── ac_Ivan-Forcadell.png
│           ├── ac_Jaume-Plensa.jpg
│           ├── ac_Joan-Pere-Viladecans.jpg
│           ├── ac_Perico-Pastor.jpg
│           ├── ac_Ramon-Enrich.jpg
│           ├── ac_Regina-Gimenez.jpg
│           ├── historia_prova-1.png
│           ├── llull-fellowship.jpg
│           ├── pic_andreu-martin.jpg
│           ├── pic_aparador.jpg
│           ├── pic_david-guzman.jpg
│           └── setmana-social.png
├── styles/
│   ├── base.css
│   ├── components.css
│   ├── inici.css
│   ├── legal.css
│   ├── programacio.css
│   └── qui-som.css
├── avis-legal.html
├── cookies.html
├── error404.html
├── index.html
├── noticia-1.html
├── politica-de-compres.html
├── premi-1.html
├── programacio.html
└── qui-som.html
```


## Com executar el projecte
	1	Descarrega o clona els arxius del repositori des de GitHub.
	2	Comprova que l'organització d'arxius coincideix exactament amb l'estructura de carpetes indicada.
	3	Executa l'arxiu index.html directament en un navegador web actualitzat o mitjançant l'extensió un servidor local com Live Server de Visual Studio Code per optimitzar la càrrega asíncrona d'imatges i recursos de fons.
El projecte s'executa de forma nativa en el front-end del navegador i no necessita cap tipus d'instal·lació, dependència externa o paquet de llibreries de tercers.


## Personalització
La maquetació modular del codi està dissenyada per facilitar les següents modificacions:
	•	Modificació dels valors de color, línies de text o valors d'escala d'espais editant les custom properties del bloc :root a base.css.
	•	Actualització o canvi de la font corporativa canviant les rutes dels arxius de tipografia interns a les regles @font-face.
	•	Adaptació dels textos descriptius de les iniciatives o de les fitxes dels actes de programació directament sobre el marcatge HTML.
	•	Canvi de les imatges de fons dels selectors modificant els enllaços SVG de la carpeta d'icones (media/icons/).


## Autoria
Projecte desenvolupat per:

Anna Blancafort Gaviña
Cicle Formatiu de Grau Superior en Gràfica Interactiva
Curs 2025-2026, Barcelona

## Llicència
Ús educatiu

