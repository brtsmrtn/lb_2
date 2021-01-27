import { errorMessages, ErrorMessageMessage } from "../functions/errorMessages";

type TestItem = {
  id: number;
  url: string;
  date: string;
  status: boolean;
};
type TestScenario = [string, string, TestItem[], ErrorMessageMessage];
// "https://translate.google.com/?um=1&ie=UTF-8&hl=en&client=tw-ob&sl=de&tl=cs&text=Bibliometrische%20Analyseverfahren%20lassen%20sich%20nach%20verschiedenen%20Merkmalen%20differenzieren.%20Eine%20grundlegende%20Unterscheidung%20ist%20dabei%20jene%20zwischen%20evaluativer%20und%20deskriptiver%20Bibliometrie.%20Evaluative%20Bibliometrie%20konzentriert%20sich%20auf%20das%20Konzept%20der%0Awissenschaftlichen%20Qualit%C3%A4t%20und%20die%20Bewertung%20des%20Einflusses%20von%20Autoren%2C%20Zeitschriften%2C%20Institutionen%20und%20Nationen%2C%20deskriptive%20Bibliometrie%20auf%20die%20Beschreibung%20der%20Struktur%20und%20Entwicklung%20von%20Disziplinen%20und%20Fachgebieten%20(van%20Leeuwen%2C%202004%3B%20Morris%20und%20van%20der%20Veer%20Martens%2C%202008%2C%20215).%20In%20der%20vorliegenden%20Arbeit%20liegt%20dabei%20der%20Fokus%20nicht%20auf%20Fragestellungen%20der%20Forschungsevaluation%2C%20sondern%20auf%20der%20Deskription%20eines%20Forschungsfeldes.%0A%0AEine%20weitere%20Unterscheidung%20in%20bibliometrischen%20Analysen%20ist%20jene%20zwischen%20ein-%20und%20zweidimensionalen%20Techniken%20bzw.%20Indikatoren.%20Eindimensionale%20Indikatoren%20beruhen%20auf%20dem%20einfachen%20Z%C3%A4hlen%20von%20bibliographischen%20Elementen%2C%20zweidimensionale%20dagegen%20auf%20der%20Kookkurrenz%20von%20bestimmten%20Elementen%2C%20wie%20den%20Schlagw%C3%B6rtern%2C%20die%20Publikationen%20beschreiben%20(Vala%20et%20al.%2C%201996%2C%20846%3B%20Hornbostel%2C%201997%2C%20308).%20Dabei%20gilt%2C%20dass%20die%20Art%20der%20m%C3%B6glichen%20bibliometrischen%20Analysen%20auch%20vom%20verf%C3%BCgbaren%20Datenmaterial%20abh%C3%A4ngt%20(Weingart%20et%20al.%2C%201991%2C%20282).%20Dementsprechend%20liegt%20der%20Fokus%20in%20der%20vorliegenden%20Arbeit%20je%20nach%20Datenbasis%20zum%20einen%20auf%20eindimensionalen%20Indikatoren%20(im%20Fall%20der%20Referenzanalyse%20des%20Handbuchs%20Bildungsforschung)%20und%20zum%20anderen%20auf%20zweidimensionalen%20(im%20Falle%20der%20Kowortanalyse%20von%20Dokumenten%20aus%20der%20FIS%20Bildung%20Literaturdatenbank).%0A%0ANach%20van%20Leeuwen%20(2004%2C%20375)%20ist%20ein%20entscheidendes%20Unterscheidungskriterium%20zwischen%20evaluativer%20und%20deskriptiver%20Bibliometrie%20der%20Grad%20der%20Validit%C3%A4t%20und%20Reliabilit%C3%A4t%20der%20zugrundeliegenden%20Daten.%20Bei%20Evaluationen%20sollten%20in%20der%20Datenerhebungsphase%20die%20evaluierten%20Forscher%20in%20einem%20%C3%9Cberpr%C3%BCfungsschritt%20einbezogen%20werden%2C%20in%20dem%20sie%20ihren%20erfassten%20Publikationsoutput%20kontrollieren%20k%C3%B6nnen%20(ebd.%2C%20384).%20Allerdings%20wird%20diese%20M%C3%B6glichkeit%20nicht%20immer%20einger%C3%A4umt%20und%20umgekehrt%20sollten%20auch%20in%20deskriptiven%20Studien%20die%20Daten%20validiert%20und%20bereinigt%20werden%2C%20wenn%20auch%20dazu%20nicht%20alle%20untersuchten%20Forscher%20befragt%20werden%20k%C3%B6nnen.%0A%0A&op=translate";

export const scenariosToBeTested: TestScenario[] = [
  [
    "NONEMPTY_ITEMS-DUPLICATE_LINK",
    "https://www.dd.cz",
    [
      {
        id: 1,
        url: "https://www.dd.cz",
        date: "14. 1. 2021 17:40:45",
        status: true,
      },
      {
        id: 2,
        url: "https://www.ee.cz",
        date: "14. 1. 2021 17:43:57",
        status: true,
      },
    ],
    errorMessages.duplicate,
  ],
  [
    "NONEMPTY_ITEMS-GOOD_LINK",
    "https://www.ff.cz",
    [
      {
        id: 1,
        url: "https://www.dd.cz",
        date: "14. 1. 2021 17:40:45",
        status: true,
      },
      {
        id: 2,
        url: "https://www.ee.cz",
        date: "14. 1. 2021 17:43:57",
        status: true,
      },
    ],
    errorMessages.good,
  ],
  [
    "NONEMPTY_ITEMS-EMPTY_LINK",
    "",
    [
      {
        id: 1,
        url: "https://www.dd.cz",
        date: "14. 1. 2021 17:40:45",
        status: true,
      },
      {
        id: 2,
        url: "https://www.ee.cz",
        date: "14. 1. 2021 17:43:57",
        status: true,
      },
    ],
    undefined,
  ],
  [
    "NONEMPTY_ITEMS-WITHOUT_HTTPS_LINK",
    "loc",
    [
      {
        id: 1,
        url: "https://www.dd.cz",
        date: "14. 1. 2021 17:40:45",
        status: true,
      },
      {
        id: 2,
        url: "https://www.ee.cz",
        date: "14. 1. 2021 17:43:57",
        status: true,
      },
    ],
    errorMessages.missing_prefix,
  ],
  [
    "NONEMPTY_ITEMS-INVALID_LINK",
    "http://localhost:3000/",
    [
      {
        id: 1,
        url: "https://www.dd.cz",
        date: "14. 1. 2021 17:40:45",
        status: true,
      },
      {
        id: 2,
        url: "https://www.ee.cz",
        date: "14. 1. 2021 17:43:57",
        status: true,
      },
    ],
    errorMessages.invalid,
  ],
  ["EMPTY_ITEMS-GOOD_LINK", "https://www.ff.cz", [], errorMessages.good],
  ["EMPTY_ITEMS-EMPTY_LINK", "", [], undefined],
  ["EMPTY_ITEMS-WITHOUT_HTTPS_LINK", "loc", [], errorMessages.missing_prefix],
  [
    "EMPTY_ITEMS-INVALID_LINK",
    "http://localhost:3000/",
    [],
    errorMessages.invalid,
  ],
];
