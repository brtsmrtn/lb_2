type urls = [string, boolean];

export const urlsToBeTested: urls[] = [
  ["https://mail.google.com/mail/u/0/#inbox", true],
  ["localhost:3000", false],
  ["google.cz", true],
  ["www.google.cz", true],
  ["https://www.mediy.cz/link_biscuit/index.html", true],
  ["https://www.google.com/alerts?pli=1", true],
  ["https://www.social-searcher.com/settings/", true],
  ["https://www.vyzkum.cz/FrontClanek.aspx?idsekce=18750", true],
  ["https://wikisofia.cz/wiki/Hodnocen%C3%AD_v%C4%9Bdy_v_%C4%8CR", true],
  [
    "http://www.vyzkum.cz/storage/att/02DEC2B9388816B1F8DE2F9A17DA7374/Ro%c4%8denka%202000-2005.pdf",
    true,
  ],
  [
    "https://ikaros.cz/analyza-vedy-a-vyzkumu-na-zaklade-dat-z-databaze-riv",
    true,
  ],
  [
    "https://wikisofia.cz/wiki/Kategorie:Bibliometrie_a_scientometrie,_publika%C4%8Dn%C3%AD_a_cita%C4%8Dn%C3%AD_anal%C3%BDzy",
    true,
  ],
  [
    "https://dk.upce.cz/bitstream/handle/10195/67781/Vorel%204%202016%20shs.pdf?sequence=1&isAllowed=y",
    true,
  ],
  [
    "https://jcmf.cz/sites/default/files/AF-LXXIV_Z-3_J.Musilova_Hodnoceni%20vedy1.pdf",
    true,
  ],
  [
    "https://jcmf.cz/sites/default/files/AF-LXXIV_Z-4_J.Rakosnik_K%20perspektivam%20hodnoceni.pdf",
    true,
  ],
  [
    "https://vedavyzkum.cz/blogy-a-komentare/rozhovory/stepan-jurajda-dulezite-je-aby-humanitni-obory-vedely-ze-na-nich-zalezi",
    true,
  ],
  ["http://www.vyzkum.cz/FrontClanek.aspx?idsekce=272371", true],
  ["file:///C:/Users/brtsm/Desktop/Hodnocen%C3%AD_2006.pdf", false],
  [
    "https://is.muni.cz/publikace/publikace_sestava?vytvor_novou_sablonu=1;vysledek=76064",
    true,
  ],
  [
    "https://genderaveda.cz/akademicke-drahy-v-cr/?fbclid=IwAR15s4SlIz51mFM5TEsnAZDiMhNASE1GU3t7_7Bi7fKIN_2NgQMBzAyW6tc",
    true,
  ],
  ["https://sci-hub.se/https://doi.org/10.1002/ev.20160", true],
  ["https://sci-hub.se/https://doi.org/10.1002/ev.20156", true],
  ["https://sci-hub.se/https://doi.org/10.1002/ev.20154", true],
  ["https://sci-hub.se/https://doi.org/10.1002/ev.20153", true],
  ["https://sci-hub.se/10.1002/ev.20158", true],
  [
    "https://www.researchgate.net/publication/335490767_Persistent_Problems_for_a_Bibliometrics_of_Social_Sciences_and_Humanities_and_How_to_Overcome_Them",
    true,
  ],
  [
    "https://www.pedocs.de/volltexte/2015/10296/pdf/Dees_2015_Bildungsforschung_bibliometrische_Analyse.pdf",
    true,
  ],
  ["https://ideaapps.cerge-ei.cz/CZ_citations/", true],
  ["http://metodikahodnoceni.blogspot.com/", true],
  [
    "https://www.science-metrix.com/?q=publications%2Freports&title=social+sciences#/?q=en/publications/reports/the-limits-of-bibliometrics-for-the-analysis-of-the-social-sciences-and",
    true,
  ],
  [
    "https://www.science-metrix.com/?q=en/publications/conference-presentations#/?q=en/publications/conference-presentations/application-of-an-interdisciplinarity-metric-at-the-paper",
    true,
  ],
  [
    "https://www.science-metrix.com/?q=en/publications/reports#/?q=en/publications/reports/bibliometric-indicators-for-the-sei-2020-technical-documentation",
    true,
  ],
  [
    "https://www.science-metrix.com/?q=en/publications/reports#/?q=en/publications/reports/era-progress-report-2018",
    true,
  ],
  [
    "https://www.science-metrix.com/?q=en/publications/reports#/?q=en/publications/reports/bibliometric-study-on-cnbcs-scientific-publications-1980-2017",
    true,
  ],
  [
    "https://www.science-metrix.com/?q=en/publications/reports#/?q=en/gender-report",
    true,
  ],
  [
    "https://www.science-metrix.com/?q=en/publications/conference-presentations#/?q=en/publications/conference-presentations/impact-of-multidisciplinary-research-on-innovation",
    true,
  ],
  [
    "https://www.science-metrix.com/?q=en/publications/conference-presentations#/?q=en/publications/conference-presentations/influence-of-oa-gender-co-authorship-on-citation",
    true,
  ],
  [
    "https://www.science-metrix.com/?q=publications%2Fconference-presentations&title=humanities#/?q=en/publications/conference-presentations/the-outputs-and-impacts-of-social-sciences-and-humanities",
    true,
  ],
  [
    "https://www.science-metrix.com/?q=publications%2Fscientific-publications&title=humanities#/?q=en/publications/scientific-papers/benchmarking-scientific-output-in-the-social-sciences-and-humanities",
    true,
  ],
  [
    "https://www.science-metrix.com/?q=publications%2Fscientific-publications&title=humanities#/?q=en/publications/scientific-papers/canadian-collaboration-networks-a-comparative-analysis-of-the-natural",
    true,
  ],
  [
    "https://dl3.pushbulletusercontent.com/tbmbTpvYlPT58ohtEK2dsq4uayMA8lw3/Popis_udaju_dodavanych_do_IS_VaVaI_2._0____RIV_v_roce_2020.pdf",
    true,
  ],
  ["https://www.vyzkum.cz/FrontClanek.aspx?idsekce=799796", true],
  ["https://www.vyzkum.cz/FrontClanek.aspx?idsekce=905123", true],
  ["https://www.vyzkum.cz/FrontAktualita.aspx?aktualita=904058", true],
  ["https://hodnoceni18.rvvi.cz/www/biblio-obory", true],
  ["https://hodnoceni18.rvvi.cz/www/biblio-vo", true],
  [
    "http://files.upss.cz/200004720-103cc11370/Hodnocen%C3%AD%20v%C4%9Bdy%20a%20v%C3%BDzkumu.pdf",
    true,
  ],
  ["https://www.physics.muni.cz/~janam/download/rozhovor.pdf", true],
  [
    "https://vedavyzkum.cz/nazory-a-komentare/nazory-a-komentare/prirodni-a-socialni-vedy-v-cesku-podobny-pristup-k-hodnoceni-a-vedeni-lidi-ve-velmi-nepodobnych-podminkach",
    true,
  ],
  [
    "https://www.researchgate.net/publication/322757483_Department_heads_negotiating_emerging_managerialism_The_Central_Eastern_European_context",
    true,
  ],
  [
    "https://www.tandfonline.com/doi/abs/10.1080/03075079.2019.1706077?journalCode=cshe20&",
    true,
  ],
  [
    "https://vedavyzkum.cz/ze-zahranici/ze-zahranici/hon-na-body-jak-system-hodnoceni-ovlivnuje-vedeckou-praxi",
    true,
  ],
  [
    "https://www.researchgate.net/publication/251881022_Linkova_M_and_T_Stockelova_2012_Public_accountability_and_the_politicization_of_science_The_peculiar_journey_of_Czech_research_assessment_Science_and_Public_Policy_395618-629_Retrieved_July_16_2013_ht",
    true,
  ],
  [
    "https://vedavyzkum.cz/politika-vyzkumu-a-vyvoje/politika-vyzkumu-a-vyvoje/mezinarodni-hodnoceni-velkych-vyzkumnych-infrastruktur-cr-v-roce-2021",
    true,
  ],
  [
    "https://brno.eurocentra.cz/779/26460/clanek/co-prinesl-vii-cesko-nemecky-den/",
    true,
  ],
  ["file:///C:/Users/brtsm/Desktop/9780429276842.pdf", false],
  [
    "https://www.ff.cuni.cz/studium/bakalarske-a-magisterske-studium/statni-zaverecne-zkousky/zaverecne-prace/metodicke-pokyny-doporucena-formalni-uprava-zaverecne-kvalifikacni-prace/",
    true,
  ],
  ["https://is.muni.cz/th/bxo31/ADAMiSS__thesis_proposal.pdf", true],
  [
    "file:///C:/Users/brtsm/Desktop/DPTX_2018_1_11210_0_545145_0_211396.pdf",
    false,
  ],
  [
    "file:///C:/Users/brtsm/Desktop/DPTX_2018_1_11210_0_437096_0_211330.pdf",
    false,
  ],
  [
    "file:///C:/Users/brtsm/Desktop/DPTX_2015_2_11210_0_437654_0_128484.pdf",
    false,
  ],
  [
    "file:///C:/Users/brtsm/Desktop/DPTX_2016_2_11210_0_503809_0_190962.pdf",
    false,
  ],
  ["https://www.tc.cz/cs/projekty", true],
  [
    "https://www.tc.cz/cs/publikace/periodika/seznam-periodik/ergo?FfPeriodicalPublicationItem_page=3",
    true,
  ],
  [
    "https://www.tc.cz/cs/storage/1203312c15ab0023ac8baa9bea1f1b42adbb0341?uid=1203312c15ab0023ac8baa9bea1f1b42adbb0341",
    true,
  ],
  [
    "https://www.tc.cz/cs/storage/d9ec6b51f2ad74c57258f29cd8a79e1ce7b2c20b?uid=d9ec6b51f2ad74c57258f29cd8a79e1ce7b2c20b",
    true,
  ],
  [
    "https://www.tc.cz/cs/storage/789ffcc7c699b61d3544e991e90cd95d0591451c?uid=789ffcc7c699b61d3544e991e90cd95d0591451c",
    true,
  ],
  [
    "https://www.tc.cz/cs/storage/dc2b5fd0005564345a7d3e3ebe9eb96b8f5344f5?uid=dc2b5fd0005564345a7d3e3ebe9eb96b8f5344f5",
    true,
  ],
  [
    "https://www.tc.cz/cs/storage/eff6fe6138d1d9da99f89535f703da73ce46d451?uid=eff6fe6138d1d9da99f89535f703da73ce46d451",
    true,
  ],
  ["https://www.esfcr.cz/file/9000/", true],
  ["https://www.vyzkumne-infrastruktury.cz/humanitni-vedy/", true],
  ["https://asep.lib.cas.cz/arl-cav/cs/rozsirene-vyhledavani/", true],
  ["https://www.advojka.cz/archiv/2007/50/jak-hodnotit-spolecenske-vedy", true],
  [
    "https://www.tacr.cz/interni_projekty/zefektivneni/KA7.2/KA%207_O2%20Statistika,%20sb%C4%9Br%20dat%20pro%20tvorbu%20politik%20VaVaI%20-%20final.pdf",
    true,
  ],
  ["https://www.esfcr.cz/file/9000/", true],
  [
    "https://www.google.com/search?q=%C5%99%C3%ADjen+2007+dopis+d%C4%9Bkan%C5%AF+humanitn%C3%AD&newwindow=1&sxsrf=ALeKk02KTkG6CrzACirrgA1upTjHK2ORSQ:1599997912163&ei=2AdeX7GpCZKXkwWz5JuIDA&start=10&sa=N&ved=2ahUKEwix9cfZiObrAhWSy6QKHTPyBsEQ8tMDegQICxAu&biw=1920&bih=898",
    true,
  ],
  ["https://www.advojka.cz/archiv/2008/1/zrno-od-plev", true],
  [
    "https://www.ff.cuni.cz/2019/11/tricet-humanitnich-ved-ve-svobodne-spolecnosti-prohlaseni-asociace-dekanu-filozofickych-fakult-cr/",
    true,
  ],
  ["https://cuni.cz/UK-5810.html?event=6676&lang=CZ", true],
  ["http://www.vyzkum.cz/FrontClanek.aspx?idsekce=33458", true],
  ["https://www.vyzkum.cz/FrontClanek.aspx?idsekce=49456", true],
  [
    "file:///C:/Users/brtsm/Desktop/Stanovisko_Rady_k_dopisu_d%C4%9Bkan%C5%AF_filosofick%C3%BDch_fakult_%C4%8CR.pdf",
    false,
  ],
  ["https://www.vyzkum.cz/FrontClanek.aspx?idsekce=31543", true],
  ["http://www.vyzkum.cz/RedirectorSekce.aspx?idsekce=33458", true],
  [
    "http://www.michalstehlik.cz/v-mediich-4-dekani-filozofickych-fakult-Ceske-republiky-vyjadrili-sve-znepokojeni-nad-systematickym-podcenovanim-humanitnich-ved-v-Cr",
    true,
  ],
  [
    "http://www.michalstehlik.cz/v-mediich-57-vyznam-humanitnych-vied-sa-neda-vtesnat-do-ekonomickych-parametrov",
    true,
  ],
  [
    "https://www.google.com/search?q=hodnocen%C3%AD+v%C4%9Bdy+2004&oq=hodnocen%C3%AD+v%C4%9Bdy+2004&aqs=chrome..69i57.6647j0j1&sourceid=chrome&ie=UTF-8",
    true,
  ],
  [
    "https://renee.ujep.cz/imis/kontakty.php?dt=y&hledatpodle=pracoviste&pracoviste=22160#tabs-1",
    true,
  ],
  ["https://renee.ujep.cz/imis/kontakty.php", true],
  ["https://www.fse.ujep.cz/php/profil.php?id=149&lang=cz&typ=doporucit", true],
  [
    "https://www.itm-conferences.org/articles/itmconf/pdf/2020/03/itmconf_ictessh2020_02001.pdf",
    true,
  ],
  [
    "https://www.itm-conferences.org/articles/itmconf/pdf/2020/03/itmconf_ictessh2020_02002.pdf",
    true,
  ],
  [
    "https://www.itm-conferences.org/articles/itmconf/pdf/2020/03/itmconf_ictessh2020_02003.pdf",
    true,
  ],
  ["https://cuni.cz/UK-4058-version1-vedecka_cinnost_2004_2012.pdf", true],
  ["https://elogos.vse.cz/pdfs/elg/2012/01/03.pdf", true],
  [
    "https://jcmf.cz/sites/default/files/Z-9_H-Ulbrechtova_Specifika%20humanitnich_oboru.pdf",
    true,
  ],
  [
    "http://www.michalstehlik.cz/v-mediich-4-dekani-filozofickych-fakult-Ceske-republiky-vyjadri-%20li-sve-znepokojeni-nad-systematickym-podcenovanim-humanitnich-ved-v-Cr",
    true,
  ],
  ["file:///C:/Users/brtsm/Desktop/Narodni_politika_VaVaI_2021+.pdf", false],
  ["https://www.vyzkum.cz/FrontClanek.aspx?idsekce=913172", true],
  ["https://www.vyzkum.cz/FrontClanek.aspx?idsekce=5607", true],
  ["https://www.vyzkum.cz/FrontClanek.aspx?idsekce=876739", true],
  [
    "https://vedavyzkum.cz/politika-vyzkumu-a-vyvoje/politika-vyzkumu-a-vyvoje/metodika-2017-je-na-spravne-ceste",
    true,
  ],
  [
    "https://vedavyzkum.cz/politika-vyzkumu-a-vyvoje/politika-vyzkumu-a-vyvoje/stanovisko-msmt-k-hodnoceni-aplikovaneho-vyzkumu",
    true,
  ],
  [
    "https://vedavyzkum.cz/politika-vyzkumu-a-vyvoje/politika-vyzkumu-a-vyvoje/cast-rvvi-neni-spokojena-se-stavem-hodnoceni-aplikovaneho-vyzkumu",
    true,
  ],
  [
    "https://vedavyzkum.cz/politika-vyzkumu-a-vyvoje/politika-vyzkumu-a-vyvoje/analyza-vavai-v-roce-2018",
    true,
  ],
  [
    "https://vedavyzkum.cz/politika-vyzkumu-a-vyvoje/politika-vyzkumu-a-vyvoje/aktualizovana-aplikace-ukaze-publikacni-vykonnost-v-letech-2017-2018",
    true,
  ],
  [
    "https://vedavyzkum.cz/politika-vyzkumu-a-vyvoje/politika-vyzkumu-a-vyvoje/narodni-politika-vvi-navrhuje-27-opatreni-ke-zlepseni",
    true,
  ],
  [
    "https://vedavyzkum.cz/politika-vyzkumu-a-vyvoje/politika-vyzkumu-a-vyvoje/jaky-je-vedecky-vykon-akademie-ved-v-porovnani-s-nemeckymi-vyzkumnymi-spolecnostmi",
    true,
  ],
  [
    "https://vedavyzkum.cz/politika-vyzkumu-a-vyvoje/politika-vyzkumu-a-vyvoje/citacni-ohlas-publikaci-ceskych-vyzkumnych-pracovist-z-let-2015-2016",
    true,
  ],
  [
    "https://vedavyzkum.cz/politika-vyzkumu-a-vyvoje/politika-vyzkumu-a-vyvoje/dokumentace-k-hodnoceni-vyzkumnych-organizaci-v-segmentu-vysokych-skol-v-roce-2020",
    true,
  ],
  ["http://metodikahodnoceni.blogspot.com/?view=magazine", true],
  [
    "http://metodikahodnoceni.blogspot.com/2019/10/vysledky-bibliometrickeho-hodnoceni18.html",
    true,
  ],
  [
    "http://metodikahodnoceni.blogspot.com/2019/02/hodnoceni-2018-bibliometricke-zpravy.html",
    true,
  ],
  [
    "http://metodikahodnoceni.blogspot.com/2018/06/problemy-ceske-vedy-pohled-zvenci-3-dil.html",
    true,
  ],
  [
    "http://metodikahodnoceni.blogspot.com/2018/06/problemy-ceske-vedy-pohled-zvenci-2-dil.html",
    true,
  ],
  [
    "http://metodikahodnoceni.blogspot.com/2018/06/problemy-ceske-vedy-pohled-zvenci-1-dil.html",
    true,
  ],
  [
    "http://metodikahodnoceni.blogspot.com/2018/07/leidensky-manifest-cesku-6dil.html",
    true,
  ],
  [
    "http://metodikahodnoceni.blogspot.com/2017/10/male-udelatko-pro-velke-veci.html",
    true,
  ],
  [
    "http://metodikahodnoceni.blogspot.com/2017/10/spolecenske-vedy-rozpustene-vypustene.html",
    true,
  ],
  [
    "http://metodikahodnoceni.blogspot.com/2017/01/bilancovani-pokroku-v-hodnoceni-vyzkumu.html",
    true,
  ],
  [
    "http://metodikahodnoceni.blogspot.com/2019/11/nase-spolecenske-vedy-nevzkvetaji.html",
    true,
  ],
  [
    "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0221212",
    true,
  ],
  [
    "http://metodikahodnoceni.blogspot.com/search/label/spole%C4%8Densk%C3%A9%20v%C4%9Bdy",
    true,
  ],
  [
    "https://vedavyzkum.cz/blogy-a-komentare/daniel-m-nich/zatim-jednooka-hul-metodika-2017",
    true,
  ],
  [
    "https://app.powerbi.com/view?r=eyJrIjoiOGM3NTgwNjUtYmExZC00NGQ1LTgwZWYtZTg0ZjM5Zjc2YzVhIiwidCI6IjNiNTU0OGZkLTc2ZGEtNDI4Mi04MTYxLTI4NGNlMzNhYjJlNCIsImMiOjl9",
    true,
  ],
  ["https://inovacnipolitika.blogspot.com/", true],
  ["http://stistko.uiv.cz/proavs/provsass.asp", true],
  [
    "http://stistko.uiv.cz/proavs/pro1n.asp?typ=16&okres=CZ0+++&vnazvuv=&vnazvu=&vrid=&skupina=NIC&dalsi=&text=+vysok%E9+%9Akoly&SUB=HLEDEJ",
    true,
  ],
  ["https://ideaapps.cerge-ei.cz/Publication_trends/", true],
  ["https://www.vyzkum.cz/FrontAktualita.aspx?aktualita=887288", true],
  [
    "http://www.vyzkum.cz/storage/att/E6EF7938F0E854BAE520AC119FB22E8D/Prevodnik_oboru_Frascati.pdf",
    true,
  ],
  ["https://science.law.muni.cz/dokumenty/23023", true],
  [
    "https://www.ayming.cz/wp-content/uploads/sites/18/2019/05/Frascati_manual_2015_kapitola2_cz.pdf",
    true,
  ],
  [
    "https://dspace.vutbr.cz/bitstream/handle/11012/61751/otevreny-pristup.pdf?sequence=5&isAllowed=y",
    true,
  ],
  ["http://www.ucitelskenoviny.cz/?archiv&clanek=1788", true],
  ["https://iforum.cuni.cz/IFORUM-7109.html", true],
  [
    "https://denikreferendum.cz/clanek/25924-o-zbytecnosti-humanitnich-oboru-a-fikci",
    true,
  ],
  ["https://www.advojka.cz/archiv/2008/42/nad-zanikem-humanitnich-oboru", true],
  [
    "https://www.csvs.cz/wp-content/uploads/2019/01/10-2007-2-human-vedy.pdf",
    true,
  ],
  [
    "file:///C:/Users/brtsm/Desktop/DPTX_2014_2_11240_0_453980_0_165607.pdf",
    false,
  ],
  [
    "https://www.em.muni.cz/tema/1457-tema-soucasnost-a-budoucnost-humanitnich-oboru",
    true,
  ],
  [
    "https://alevia.cz/_files/200000787-b472db56ce/Ve%C5%99ejn%C3%A1%20politika%20v%20obasti%20v%C3%BDzkumu,%20v%C3%BDvoje%20a%20inovac%C3%AD%202018.pdf",
    true,
  ],
  [
    "https://www.amazon.co.uk/Open-Access-Theory-Practice-Theory-Practice/dp/0367227851/ref=sr_1_3?dchild=1&qid=1600268503&refinements=p_27%3ADavid+Bawden&s=books&sr=1-3",
    true,
  ],
  [
    "https://www.universitas.cz/tema/63-nova-metodika-hodnoceni-vedy-ma-obnovit-duraz-na-kvalitu",
    true,
  ],
  [
    "https://www.universitas.cz/tema/1122-podle-nove-metodiky-se-zacnou-rozdelovat-prvni-miliony-za-vedu",
    true,
  ],
  ["https://cuni.cz/UK-9969.html", true],
  ["file:///C:/Users/brtsm/Desktop/PrvodceVaV_elektronickverze.pdf", false],
  ["http://abicko.avcr.cz/2015/06/06/", true],
  [
    "https://www.slideshare.net/ipnmetodika/pilotn-oven-nvrhu-nov-metodiky-hodnocen-vzkumnch-organizac",
    true,
  ],
  [
    "https://www.slideshare.net/ipnmetodika/souhrnn-zprva-metodika-hodnocen-ve-vyzkumu-a-vyvoji-a-zsady-financovn",
    true,
  ],
  ["https://blocked.freedom.to/", true],
  [
    "https://is.ambis.cz/th/c4hfe/Programy_na_podporu_vedy_a_vyzkumu_v_CR_-_Fialova_Zdenka_-_uco_10771.pdf",
    true,
  ],
  ["https://www.zettlr.com/download", true],
  [
    "https://obd.upol.cz/no_s/verso.fpl/_TS_/1600332368?__p_ob=&_fltrok=ok&_repok=&__cntext__=&xls_num=&fname=obd_public&_druh_filtru=0&p_pohled_id=&public_id=&obd_public_bez_hlavicky=1&barva=&font=&obd_public_bez_hlavicky_seznam=0&obd_public_bez_filtru=0&obd_public_bez_volby_filtru=1&obd_public_sirka_seznamu=&nabizet_kosik=1&nabizet_lupu=1&nabizet_export=1&zobrazit_paticku=0&filtrovano=1&f_toto_fin=0&f_filtrovat=1&pocet_zaznamu=50&_report=0&__templ_max_pocet__=50&razeni_zaznamu=&_autor_presny_text=0&_diakritika=0&_v_ozn_public=&_a_jmeno=&_a_prijmeni=&_a_cis=&_autor_org_podriz=&f_v_tit=&vp_v_issn=&vp_v_isbn=&_v_rok=&vrdropinput2=--+nevybr%C3%A1no+--&f_fulltext=&filtr=&__idf=3B571EE8F8C211EAA12B56D65AE1D491",
    true,
  ],
  [
    "https://obd.upol.cz/no_s/verso.fpl/_TS_/1600332572?__p_ob=&_fltrok=ok&_repok=&__cntext__=&xls_num=&fname=obd_public&_druh_filtru=0&p_pohled_id=&public_id=&obd_public_bez_hlavicky=1&barva=&font=&obd_public_bez_hlavicky_seznam=0&obd_public_bez_filtru=0&obd_public_bez_volby_filtru=1&obd_public_sirka_seznamu=&nabizet_kosik=1&nabizet_lupu=1&nabizet_export=1&zobrazit_paticku=0&filtrovano=1&f_toto_fin=0&f_filtrovat=1&pocet_zaznamu=50&_report=0&__templ_max_pocet__=50&razeni_zaznamu=&_autor_presny_text=0&_diakritika=0&_v_ozn_public=&_a_jmeno=&_a_prijmeni=&_a_cis=&lov_value__a_cis=--+nevybr%C3%A1no+--&_autor_org_podriz=3&lov_value__autor_org_podriz=Filozofick%C3%A1+fakulta&f_v_tit=&vp_v_issn=&vp_v_isbn=&_v_rok=&vrdropinput2=--+vybr%C3%A1no+v%C5%A1e+--&_v_lit=73&_v_lit=17&_v_lit=57&_v_lit=63&_v_lit=67&_v_lit=127&_v_lit=190&_v_lit=86&_v_lit=159&_v_lit=126&_v_lit=184&_v_lit=108&_v_lit=129&_v_lit=81&_v_lit=109&_v_lit=148&_v_lit=70&_v_lit=142&_v_lit=158&_v_lit=123&_v_lit=83&_v_lit=122&_v_lit=128&_v_lit=77&_v_lit=136&_v_lit=143&_v_lit=194&_v_lit=151&_v_lit=149&_v_lit=147&_v_lit=145&_v_lit=144&_v_lit=201&_v_lit=189&_v_lit=152&_v_lit=153&_v_lit=154&_v_lit=156&_v_lit=155&f_fulltext=&filtr=Odeslat&__idf=2F139C74F8C211EAB3D471D95AE1D491",
    true,
  ],
  ["https://cuni.cz/UKEN-176.html", true],
  ["https://login-veda.is.cuni.cz/idp/Authn/UserPassword", true],
  ["https://obd.upol.cz/id_publ/333120577", true],
  [
    "https://obd.upol.cz/no_s/verso.fpl/_TS_/1600333136?__p_ob=&_fltrok=ok&_repok=&__cntext__=&xls_num=&fname=obd_public&_druh_filtru=0&p_pohled_id=&public_id=&obd_public_bez_hlavicky=1&barva=&font=&obd_public_bez_hlavicky_seznam=0&obd_public_bez_filtru=0&obd_public_bez_volby_filtru=1&obd_public_sirka_seznamu=&nabizet_kosik=1&nabizet_lupu=1&nabizet_export=1&zobrazit_paticku=0&filtrovano=1&f_toto_fin=0&f_filtrovat=1&pocet_zaznamu=5000&_report=0&__templ_max_pocet__=10&razeni_zaznamu=&_autor_presny_text=0&_diakritika=0&_v_ozn_public=&_a_jmeno=&_a_prijmeni=&_a_cis=&lov_value__a_cis=--+nevybr%C3%A1no+--&_autor_org_podriz=3&lov_value__autor_org_podriz=--+nevybr%C3%A1no+--&f_v_tit=&vp_v_issn=&vp_v_isbn=&_v_rok=&vrdropinput2=--+nevybr%C3%A1no+--&f_fulltext=&filtr=Odeslat&__idf=E2B05DD8F8B011EABAA0C9D95AE1D491",
    true,
  ],
  ["https://cuni.cz/UK-8621.html", true],
  [
    "https://www.google.com/search?q=Komise+pro+hodnocen%C3%AD+v%C3%BDsledk%C5%AF+v%C3%BDzkumn%C3%BDch+organizac%C3%AD+a+ukon%C4%8Den%C3%BDch+program%C5%AF&oq=Komise+pro+hodnocen%C3%AD+v%C3%BDsledk%C5%AF+v%C3%BDzkumn%C3%BDch+organizac%C3%AD+a+ukon%C4%8Den%C3%BDch+program%C5%AF&aqs=chrome..69i57.837j0j1&sourceid=chrome&ie=UTF-8",
    true,
  ],
  ["https://ropensci.org/technotes/2020/08/25/scientific-name-parsing/", true],
  ["https://github.com/jdobiasovsky/metric-test", true],
  [
    "https://discuss.ropensci.org/t/mapping-scientific-collaboration-about-the-anthropoce-with-refsplitr/2215",
    true,
  ],
  ["https://jcmf.cz/sites/default/files/osov/AF-XV_B-1_Musilova.pdf", true],
  [
    "https://www.dw.com/de/merkel-bew%C3%A4ltigung-der-corona-krise-jahrhundertaufgabe/av-56101102",
    true,
  ],
  ["https://www.tagesschau.de/", true],
  [
    "https://shop.hueber.de/de/sprache-lernen/deutsch-als-fremdsprache-daf-daz/pr-fung-express-sd-b2.html",
    true,
  ],
  ["https://www.testsam.at/produkt/osd-zb2-ubungsmaterialien/", true],
  ["https://www.piper.de/buecher/ostbewusstsein-isbn-978-3-492-06187-2", true],
  [
    "https://libmod.de/marko-martin-identitaetspolitik-die-allianz-der-opfer/",
    true,
  ],
  [
    "https://www.giessener-allgemeine.de/kultur/jammer-ossis-besser-wessis-13054661.html",
    true,
  ],
  ["https://www.youtube.com/watch?v=I9XTayF73ss", true],
  ["https://taz.de/Professorin-ueber-Identitaeten/!5501987/", true],
  ["https://coerll.utexas.edu/gg/gr/mis_04.html", true],
  ["https://www.dw.com/de/die-stadt-von-morgen/l-42867117", true],
  ["https://slideplayer.cz/slide/15372991/", true],
  ["http://kmvp.wz.cz/KMVP_opora07.pdf", true],
  ["https://iastat.vse.cz/regrese/Regrese2.htm", true],
  ["https://is.muni.cz/el/1421/podzim2009/PSA_004/um/t01/predn01.pdf", true],
  [
    "https://www.vutbr.cz/www_base/zav_prace_soubor_verejne.php?file_id=217271",
    true,
  ],
  ["https://cs.wikipedia.org/wiki/Psychologick%C3%BD_experiment", true],
  [
    "https://wikisofia.cz/wiki/7._Typy_prom%C4%9Bnn%C3%BDch_a_%C5%A1k%C3%A1lov%C3%A1n%C3%AD",
    true,
  ],
  ["https://wikisofia.cz/wiki/Experiment", true],
  ["https://keke.vse.cz/wp-content/uploads/page/246/5EN306-HW_MRDS.pdf", true],
  ["http://old.botany.upol.cz/prezentace/duch/statistika4.pdf", true],
  [
    "https://is.mendelu.cz/eknihovna/opory/zobraz_cast.pl?cast=54070;lang=cz",
    true,
  ],
  [
    "https://www.google.com/search?q=variance+%C4%8Desky&oq=variance+%C4%8Desky&aqs=chrome..69i57j0i22i30.2102j0j4&sourceid=chrome&ie=UTF-8",
    true,
  ],
  [
    "https://www.reddit.com/r/Slovenia/comments/dqxv8y/i_want_to_learn_slovenian_how_do_i_start_and_are/",
    true,
  ],
  [
    "https://breghouse.com/2019/02/21/learning-slovenian-tips-and-advice-from-8-foreigners-that-speak-slovene%ef%bb%bf/",
    true,
  ],
  ["https://howtobehuman.co/", true],
  ["https://www.slonline.si/", true],
  ["https://www.youtube.com/watch?v=Phrlqxje9eE", true],
  [
    "https://www.amazon.com/gp/product/1640181555?ie=UTF8&tag=goetheverlag-20",
    true,
  ],
  ["https://www.total-slovenia-news.com/", true],
  [
    "https://www.google.com/search?q=slovene+a+comprehensive+grammar&oq=slovene+a+com&aqs=chrome.0.0i355i457j46j0j69i57j69i60l3.2221j0j4&sourceid=chrome&ie=UTF-8",
    true,
  ],
  ["https://www.total-slovenia-news.com/tag/slovene-language", true],
  ["https://www.youtube.com/channel/UC-D2yB8YV7gbugKEeZNd6gQ", true],
  ["https://www.youtube.com/channel/UCOJtrKq-uTeuFbAqgp097-g", true],
  ["https://www.slovenology.co.uk/", true],
  [
    "https://app.memrise.com/course/2059404/1/garden/learn/?source_screen=onboarding",
    true,
  ],
  [
    "https://centerslo.si/en/books/textbooks-and-handbooks/beginner-level/a-b-c-1-2-3-gremo/",
    true,
  ],
  [
    "https://www.routledgetextbooks.com/textbooks/colloquial/language/slovene.php",
    true,
  ],
  [
    "https://www.jazyky-pro-samouky.cz/produkt/1057/slovinsky-xxl-sada#tabs-1",
    true,
  ],
  [
    "https://www.cupress.cuni.cz/ink2_ext/index.jsp?include=podrobnosti&id=247842",
    true,
  ],
  ["https://www.revolucni.com/slovinstina.php", true],
  [
    "https://www.alza.cz/media/slovinstina-konverzace-se-slovnikem-a-gramatikou-d5212614.htm?kampan=adwme_eo-a-knihy_pla_all_obecna-css_knihy_c__FKP238116_9062845&gclid=CjwKCAiAz4b_BRBbEiwA5XlVVuFbGeG_dYrsYfRLYV9Yl7V4ezx3-MGaGjkXBgjhevIwctmdSSU13RoCB_0QAvD_BwE",
    true,
  ],
  [
    "https://www.megaknihy.cz/cizi-jazyky/314320-slovinstina-konverzace.html?utm_si=RFlidjRTZUc2TXpFME16SXdNekUwTXpJdw==&utm_pab=&matchtype=&network=g&device=c&creative=63152076610&keyword=&placement=&param1=&param2=&adposition=&campaignid=193922770&adgroupid=19959225370&feeditemid=&targetid=pla-450238339162&loc_physical_ms=9062845&loc_interest_ms=&searchtype=search&gclid=CjwKCAiAz4b_BRBbEiwA5XlVVm-zyMKPbQexi_4sq-FMXr4fW9Do-aCDYSlBhq4vdo43e-84gFP-rRoCiEgQAvD_BwE",
    true,
  ],
  ["https://www.jezikovno-mesto.com/slovenscina", true],
  [
    "https://centerslo.si/en/courses-for-adults/online-courses/intensive-course-of-slovene-language-online/",
    true,
  ],
  ["https://www.pressreader.com/slovenia/delo-slovenia/20201228", true],
  ["https://github.com/brtsmrtn/link_biscuit/pull/20", true],
  [
    "https://medium.com/@edplatomail/js-double-bang-or-the-not-operator-part-40e55d089bf0",
    true,
  ],
  ["https://codepen.io/gaearon/pen/WZpxpz?editors=0010", true],
  [
    "https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-input?page=2&tab=votes#tab-top",
    true,
  ],
  ["https://www.npmjs.com/package/valid-input", true],
  ["https://mathiasbynens.be/demo/input-regex", true],
  ["https://developer.mozilla.org/en-US/docs/Web/API/input", true],
  ["https://emasuriano.com/blog/dynamic-types-validation-in-typescript", true],
  ["http://www.guido-flohr.net/the-gory-details-of-input-validation/", true],
  ["https://reactjs.org/docs/lifting-state-up.html", true],
  [
    "https://reactjs.org/tutorial/tutorial.html#before-we-start-the-tutorial",
    true,
  ],
  ["https://fettblog.eu/typescript-react/components/", true],
  [
    "https://stackoverflow.com/questions/46666036/typescript-react-setstate-with-user-input",
    true,
  ],
  [
    "https://stackoverflow.com/questions/40676343/typescript-input-onchange-event-target-value",
    true,
  ],
  [
    "https://dev.to/giselamd/creating-a-react-input-component-in-typescript-hai",
    true,
  ],
  [
    "https://www.carlrippon.com/building-super-simple-react-form-component-typescript-basics/",
    true,
  ],
  [
    "https://www.google.com/search?q=Parameter+%27props%27+implicitly+has+an+%27any%27+type.ts(7006)&oq=Parameter+%27props%27+implicitly+has+an+%27any%27+type.ts(7006)&aqs=chrome..69i57.1196j0j1&sourceid=chrome&ie=UTF-8",
    true,
  ],
  [
    "https://medium.com/codespace69/react-typescript-parameter-props-implicitly-has-an-any-type-error-653f224f6b9d",
    true,
  ],
  [
    "https://stackoverflow.com/questions/44748286/typescript-property-props-does-not-exist",
    true,
  ],
  [
    "https://stackoverflow.com/questions/48240449/type-is-not-assignable-to-type-intrinsicattributes-intrinsicclassattribu",
    true,
  ],
  ["https://reactjs.org/docs/uncontrolled-components.html", true],
  [
    "https://medium.com/capital-one-tech/how-to-work-with-forms-inputs-and-events-in-react-c337171b923b",
    true,
  ],
  [
    "https://stackoverflow.com/questions/47561848/property-value-does-not-exist-on-type-readonly",
    true,
  ],
  [
    "https://stackoverflow.com/questions/36773671/deactivate-input-in-react-with-a-button-click",
    true,
  ],
  [
    "https://www.pluralsight.com/guides/binding-functions-and-enabledisable-state-in-html-buttons-with-reactjs",
    true,
  ],
  ["https://gist.github.com/erikvanek/6bf283b7bf2f21de4bc5439df7724b08", true],
  [
    "https://stackoverflow.com/questions/44321326/property-value-does-not-exist-on-type-eventtarget-in-typescript",
    true,
  ],
  [
    "https://stackoverflow.com/questions/30187781/how-to-disable-a-button-when-an-input-is-empty",
    true,
  ],
  [
    "https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABAWwKYGd0FUAOAVAC1QEEAnUgQwE8AKC8gLkTMqoB50pSYwBzRAD6IwIZACNUpAHwBKJgDc4MACaIA3gFgAUPVIA6HCHQEaAZhkBubQF9tEBJ0SdufdExbUOXHrymIAvIgA2gDkwHBwIQA0iCFi9CEAulZaaJi4hCTk1DTOPuiWdg5QTkx5fAFO3q5BAEzJRWDocAA2qHotcLy5elBwADJwAO6SAMIU6Kg0MpZAA",
    true,
  ],
  ["https://web.dev/progressive-web-apps/", true],
  ["https://developer.mozilla.org/en-US/docs/Web/Manifest", true],
  ["http://www.robotstxt.org/robotstxt.html", true],
  [
    "https://www.typescriptlang.org/docs/handbook/jsx.html#the-as-operator",
    true,
  ],
  [
    "https://devblogs.microsoft.com/typescript/announcing-typescript-4-1/",
    true,
  ],
  [
    "https://docs.microsoft.com/cs-cz/learn/modules/introduction-to-github-visual-studio-code/",
    true,
  ],
  ["https://create-react-app.dev/docs/measuring-performance/", true],
  [
    "https://www.google.com/search?q=triple+slash+directives+typescript&oq=triple+slash+dire&aqs=chrome.0.0i457j69i57j69i60j0i22i30.2433j0j4&sourceid=chrome&ie=UTF-8",
    true,
  ],
  [
    "https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html",
    true,
  ],
  [
    "https://www.google.com/search?q=github+styled+components&oq=github+styled+com&aqs=chrome.0.0i457j69i57j0i22i30.3339j0j4&sourceid=chrome&ie=UTF-8",
    true,
  ],
  ["https://styled-components.com/docs/basics", true],
  ["http://localhost:3000/", false],
  [
    "https://www.google.com/search?q=components+and+props+react&oq=components+and+props+react&aqs=chrome..69i57j0i22i30.3675j0j4&sourceid=chrome&ie=UTF-8",
    true,
  ],
  [
    "https://www.digitalocean.com/community/tutorials/how-to-manage-state-on-react-class-components",
    true,
  ],
  ["https://jsfiddle.net/67675ag9/", true],
  [
    "https://charles-bryant.gitbook.io/hello-react-and-typescript/helloworld/componentpropsandstate",
    true,
  ],
  [
    "https://www.youtube.com/watch?v=R6zvdn40VfQ&list=PLYSZyzpwBEWSe71-aLlq71B2LPZzTNO8a&index=6",
    true,
  ],
  ["https://www.youtube.com/watch?v=I6ypD7qv3Z8", true],
  [
    "https://stackoverflow.com/questions/46987816/using-state-in-react-with-typescript/46987987",
    true,
  ],
  [
    "https://www.pluralsight.com/guides/render-a-react-component-with-state-and-props-using-typescript",
    true,
  ],
  [
    "https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/",
    true,
  ],
  [
    "https://medium.com/@rajat_m/understand-life-cycle-methods-in-react-js-71a5464867cf",
    true,
  ],
  ["https://reactjs.org/docs/state-and-lifecycle.html", true],
  ["https://www.youtube.com/watch?v=I6ypD7qv3Z8", true],
  [
    "https://stackoverflow.com/questions/61232067/print-count-value-in-geom-label",
    true,
  ],
  ["file:///C:/Users/brtsm/Desktop/datatable.pdf", false],
  [
    "http://www.sthda.com/english/wiki/ggplot2-legend-easy-steps-to-change-the-position-and-the-appearance-of-a-graph-legend-in-r-software",
    true,
  ],
  ["https://ggplot2.tidyverse.org/reference/geom_text.html", true],
  [
    "https://www.datanovia.com/en/blog/ggplot-legend-title-position-and-labels/",
    true,
  ],
  [
    "https://www.r-graph-gallery.com/48-grouped-barplot-with-ggplot2.html",
    true,
  ],
  [
    "http://www.sthda.com/english/wiki/ggplot2-line-plot-quick-start-guide-r-software-and-data-visualization",
    true,
  ],
  [
    "http://www.sthda.com/english/wiki/ggplot2-line-types-how-to-change-line-types-of-a-graph-in-r-software",
    true,
  ],
  [
    "https://stackoverflow.com/questions/18081746/controlling-both-the-major-and-minor-grid-lines-on-the-y-axis",
    true,
  ],
  [
    "https://stackoverflow.com/questions/54237572/how-to-get-a-common-legend-for-stacked-geom-bar-and-geom-point-in-ggplot2",
    true,
  ],
  ["https://ggplot2.tidyverse.org/reference/position_dodge.html", true],
  ["https://r4ds.had.co.nz/data-import.html", true],
  ["https://www.danielecook.com/speeding-up-reading-and-writing-in-r/", true],
  [
    "https://www.google.com/search?q=anova+in+r&oq=anova+in+R&aqs=chrome.0.0i67i457j0l2j0i20i263l2j0l3.1941j0j1&sourceid=chrome&ie=UTF-8",
    true,
  ],
  ["http://www.sthda.com/english/wiki/one-way-anova-test-in-r", true],
  [
    "https://www.google.com/search?q=repeated+measure+anova+in+r&oq=repeated+measure+anova+in+R&aqs=chrome.0.0i20i263i457j0l3j0i10j0l3.28760j0j1&sourceid=chrome&ie=UTF-8",
    true,
  ],
  [
    "https://www.uvm.edu/~statdhtx/StatPages/R/RepeatedMeasuresAnovaR.html",
    true,
  ],
  ["https://rcompanion.org/handbook/I_09.html", true],
  [
    "https://stats.idre.ucla.edu/r/seminars/repeated-measures-analysis-with-r/",
    true,
  ],
  [
    "http://rstudio-pubs-static.s3.amazonaws.com/6975_c4943349b6174f448104a5513fed59a9.html",
    true,
  ],
  [
    "https://courses.edx.org/courses/course-v1:MITx+14.310x+1T2020/16dd03e77a0846c1a4754b5660c9ce60/",
    true,
  ],
  ["http://www.sthda.com/english/wiki/normality-test-in-r", true],
  [
    "https://www.sheffield.ac.uk/polopoly_fs/1.885202!/file/95_Normality_Check.pdf",
    true,
  ],
  [
    "https://web.archive.org/web/20160312200601/https://personality-project.org/r/r.anova.html",
    true,
  ],
  ["https://davetang.org/muse/2016/10/13/using-dplyr-aggregate-r/", true],
  [
    "http://www.sthda.com/english/articles/40-regression-analysis/163-regression-with-categorical-variables-dummy-coding-essentials-in-r/",
    true,
  ],
  [
    "https://dnnt.mzk.cz/view/uuid:8e8e3610-2b42-11e7-9efd-005056827e52?page=uuid:e88dc6f0-4c5b-11e7-80b4-001018b5eb5c",
    true,
  ],
  [
    "https://www.zdrojak.cz/clanky/solid-single-responsibility-principle/",
    true,
  ],
  [
    "https://www.google.com/search?q=react+typescript+test+function&oq=react+typescript+test+function&aqs=chrome..69i57j33i22i29i30i395l9.7881j1j4&sourceid=chrome&ie=UTF-8",
    true,
  ],
  [
    "https://stackoverflow.com/questions/57349094/how-to-test-with-jest-and-typescript-with-types-a-basic-react-function-component",
    true,
  ],
  [
    "https://dev.to/wojciechmatuszewski/writing-unit-tests-with-react-typescript-and-react-testing-library-1nmg",
    true,
  ],
  [
    "https://dev.to/spacesnaill/react-and-typescript-testing-mocking-functions-with-jest-1pn8",
    true,
  ],
  [
    "https://www.google.com/search?q=jest+test&oq=jest+test&aqs=chrome..69i57j69i60l3j0i67j0i395l3.2411j1j4&sourceid=chrome&ie=UTF-8",
    true,
  ],
  ["https://jestjs.io/", true],
  [
    "https://www.google.com/search?q=input+validation+react&oq=input+validation+react&aqs=chrome..69i57j0i22i30l2j69i59.3279j1j4&sourceid=chrome&ie=UTF-8",
    true,
  ],
  [
    "https://stackoverflow.com/questions/41440825/react-native-javascript-validate-input",
    true,
  ],
  [
    "https://stackoverflow.com/questions/48280065/validate-input-in-redux-form/50456465",
    true,
  ],
  ["https://www.npmjs.com/package/validator", true],
  ["https://www.npmjs.com/package/redux-form-validators", true],
  [
    "https://www.google.com/search?q=validator%2Flib%2Fisinput&oq=validator%2Flib%2Fisinput&aqs=chrome..69i57j69i58.292j0j1&sourceid=chrome&ie=UTF-8",
    true,
  ],
  [
    "https://stackoverflow.com/questions/49117008/importing-from-validator-in-javascript",
    true,
  ],
  ["https://validatejs.org/", true],
  ["chrome-extension://djdmadneanknadilpjiknlnanaolmbfk/options.html", false],
];
