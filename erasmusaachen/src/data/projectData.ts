/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DayPhoto {
  id: string;
  dayNumber: number;
  title: string;
  caption: string;
  location: string;
  category: 'shadowing' | 'cultural' | 'green' | 'community';
  imageSrc?: string; // Path for user to load in GitHub e.g. "/photos/day1-atomium.jpg"
  fallbackType: 'atomium' | 'cathedral' | 'classroom' | 'green' | 'nature' | 'cologne' | 'celebration' | 'gelateria' | 'dom';
  cameraMeta: string;
  authorCredit: string;
}

export interface DayJournal {
  id: number;
  dayNumber: number;
  date: string;
  title: string;
  subtitle: string;
  location: string;
  country: string;
  description: string;
  extendedText: string;
  focus: 'cultural' | 'stem' | 'green';
  tags: string[];
  schedule: { time: string; activity: string }[];
  takeaway: string;
  accentColor: string;
  photos: DayPhoto[];
  shadowingNotes?: {
    observers: string;
    focusArea: string;
    keyObservations: string[];
    pedagogicalApplication: string;
  };
}

export interface PedagogicalPillar {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  summary: string;
  highlights: string[];
  classroomObservation: string;
  transferToRomania: string;
  techStack: string[];
  observer: string;
}

export interface Testimonial {
  id: number;
  author: string;
  role: string;
  institution: string;
  quote: string;
  pillar: string;
}

export interface ParticipatingTeacher {
  name: string;
  title: string;
  role: string;
  roleType: 'coordinator' | 'escort' | 'shadowing';
  disciplines: string;
  jobShadowingFocus: string;
  description: string;
}

export const PARTICIPATING_TEACHERS: ParticipatingTeacher[] = [
  {
    name: "Prof. Sîngerozan Varvara",
    title: "Director",
    role: "Coordonator de Proiect & Director",
    roleType: "coordinator",
    disciplines: "Management Educațional & Științe",
    jobShadowingFocus: "Management strategic european, acreditare și parteneriate internaționale",
    description: "Coordonatorul proiectului Erasmus+, responsabilă de coordonarea generală a mobilității, relația instituțională cu Geschwister-Scholl-Gymnasium și integrarea rezultatelor la nivelul conducerii liceului."
  },
  {
    name: "Prof. Hodoroga Florin",
    title: "Profesor",
    role: "Profesor Însoțitor al Elevilor",
    roleType: "escort",
    disciplines: "Geografie & Științele Mediului",
    jobShadowingFocus: "Geografie aplicată, orientare la Dreiländereck și educație ecologică Think Green",
    description: "Profesorul însoțitor al grupului de 14 elevi, coordonator al activităților de teren, siguranței elevilor și atelierelor geografice și de mediu."
  },
  {
    name: "Prof. Frunză Paul-Adrian",
    title: "Profesor",
    role: "Participant Job Shadowing · Matematică & Informatică",
    roleType: "shadowing",
    disciplines: "Matematică & Informatică",
    jobShadowingFocus: "Pedagogie digitală pe ecrane interactive, rezolvarea ecuațiilor pas-cu-pas și metodologii hibride STEM",
    description: "Participant direct în programul de Job Shadowing. Prezentarea reflectă în profunzime asistența la orele de matematică și informatică, integrarea ecranelor interactive și transferul de metodologii moderne."
  },
  {
    name: "Prof. Petrașcu Traian",
    title: "Profesor",
    role: "Participant Job Shadowing · Fizică & Științe",
    roleType: "shadowing",
    disciplines: "Fizică & Științe Aplicate",
    jobShadowingFocus: "Experimente de laborator, didactica fizicii aplicate, senzori și modelare tehnologică",
    description: "Participant direct în programul de Job Shadowing. A analizat dotările laboratoarelor de științe germane, protocoalele de siguranță, utilizarea senzorilor digitali și conexiunea dintre fizică teoretică și experimentul practic."
  }
];

export const PROJECT_METADATA = {
  title: "Think Green, Learn Digital, Act European",
  subtitle: "Proiect de Mobilitate Școlară Erasmus+ (KA122-SCH)",
  location: "Aachen, Germania",
  dates: "19 – 23 Mai 2026",
  sendingSchool: "Liceul Teoretic „Solomon Haliță”",
  sendingAddress: "Strada Republicii nr. 40",
  sendingCity: "Sângeorz-Băi",
  sendingCounty: "Bistrița-Năsăud",
  sendingCountry: "România",
  hostSchool: "Geschwister-Scholl-Gymnasium",
  hostCity: "Aachen, Renania de Nord-Westfalia",
  hostCountry: "Germania",
  visitedCountries: ["Germania", "Belgia", "Olanda"],
  teachers: PARTICIPATING_TEACHERS,
  stats: {
    students: 14,
    teachers: 4,
    days: 5,
    countries: 3,
    europassCertificates: 18,
    partnerSchool: "Geschwister-Scholl-Gymnasium",
    shadowingHours: 32
  }
};

export const DAILY_JOURNAL: DayJournal[] = [
  {
    id: 1,
    dayNumber: 1,
    date: "Marți, 19 Mai 2026",
    title: "Ziua 1: Aterizarea în Belgia și Descoperirea Capitalei Europene, Bruxelles",
    subtitle: "Grand Place, Structura Atomică Atomium și Designul European",
    location: "Bruxelles & Tranzit spre Aachen",
    country: "Belgia",
    description: "Mobilitatea a debutat cu zborul către Bruxelles. Delegația condusă de Director Prof. Sîngerozan Varvara (coordonator), alături de Prof. Hodoroga Florin (însoțitorul elevilor) și profesorii de Job Shadowing Prof. Frunză Paul-Adrian și Prof. Petrașcu Traian, a explorat rețeaua de transport a capitalei europene, centrul istoric Grand Place și impunătorul monument STEM Atomium.",
    extendedText: "O zi de coeziune și deschidere culturală. În Atomium, profesorii de științe Frunză Paul și Petrașcu Traian au explorat cu elevii reprezentarea spațială a celulei cristaline de fier mărită de 165 de miliarde de ori, realizând primele conexiuni dintre fizica atomului, geometrie spațială și arhitectură monumentală, înainte de sosirea în Aachen.",
    focus: "cultural",
    tags: ["Bruxelles", "Atomium STEM", "Grand Place", "Patrimoniu"],
    schedule: [
      { time: "07:30", activity: "Sosirea delegației pe aeroportul din Bruxelles la răsăritul soarelui" },
      { time: "10:00", activity: "Orientare logistică și deplasare cu metroul european spre centru" },
      { time: "11:45", activity: "Tur cultural: Grand Place, Manneken Pis și Galeriile Royale" },
      { time: "14:15", activity: "Explorarea structurii Atomium și Muzeului de Design (perspective STEM)" },
      { time: "17:30", activity: "Călătoria spre Aachen și cazarea în proximitatea Geschwister-Scholl" }
    ],
    takeaway: "Înțelegerea dimensiunii europene a patrimoniului științific și pregătirea spiritului de echipă.",
    accentColor: "from-blue-600 to-indigo-800",
    shadowingNotes: {
      observers: "Prof. Frunză Paul-Adrian & Prof. Petrașcu Traian",
      focusArea: "Pedagogie Muzeală & Vizualizare Spațială STEM",
      keyObservations: [
        "Capacitatea spațiilor muzeale interactive de a ancora concepte abstracte (rețea cristalică cub cu volum centrat)",
        "Interesul elevilor pentru instalațiile cinetice și vizuale ale Muzeului de Design",
        "Rolul orientării urbane autonome în dezvoltarea spiritului critic al tinerilor"
      ],
      pedagogicalApplication: "Utilizarea reprezentărilor 3D interactive în orele de geometrie spațială și fizică atomică la Sângeorz-Băi."
    },
    photos: [
      {
        id: "d1-1",
        dayNumber: 1,
        title: "Atomium – Simbolul Științelor Exacte",
        caption: "Sfera gigantică reprezentând cristalul de fier, prima lecție deschisă de geometrie și fizică a mobilității.",
        location: "Platoul Heysel, Bruxelles",
        category: "shadowing",
        imageSrc: "photos/day1_atomium.jpg",
        fallbackType: "atomium",
        cameraMeta: "Bruxelles · 24mm f/2.8 · 1/500s",
        authorCredit: "Prof. Frunză Paul-Adrian"
      },
      {
        id: "d1-2",
        dayNumber: 1,
        title: "Grand Place & Inima Arhitecturală a Europei",
        caption: "Explorarea fațadelor baroce și gotice din piața centrală a Bruxelles-ului cu grupul de 14 elevi.",
        location: "Grand Place, Bruxelles",
        category: "cultural",
        imageSrc: "photos/day1_grandplace.jpg",
        fallbackType: "cathedral",
        cameraMeta: "Bruxelles · 35mm f/3.2 · 1/250s",
        authorCredit: "Prof. Hodoroga Florin"
      },
      {
        id: "d1-3",
        dayNumber: 1,
        title: "Galeriile Royale Saint-Hubert",
        caption: "Pasaj istoric monumental, exercițiu de orientare și dinamică urbană în capitala europeană.",
        location: "Bruxelles Centru",
        category: "cultural",
        imageSrc: "photos/day1_galeries.jpg",
        fallbackType: "cathedral",
        cameraMeta: "Bruxelles · 50mm f/2.0 · 1/160s",
        authorCredit: "Prof. Sîngerozan Varvara"
      },
      {
        id: "d1-4",
        dayNumber: 1,
        title: "Sosirea în Aachen la Școala Parteneră",
        caption: "Primul contact vizual cu Geschwister-Scholl-Gymnasium și pregătirea programului de Job Shadowing.",
        location: "Aachen, Germania",
        category: "community",
        imageSrc: "photos/day1_aachen_arrival.jpg",
        fallbackType: "classroom",
        cameraMeta: "Aachen · 28mm f/2.8 · 1/200s",
        authorCredit: "Prof. Petrașcu Traian"
      }
    ]
  },
  {
    id: 2,
    dayNumber: 2,
    date: "Miercuri, 20 Mai 2026",
    title: "Ziua 2: Integrare, Sustenabilitate și Job Shadowing la Geschwister-Scholl-Gymnasium",
    subtitle: "Atelier Think Green de Reciclare a Lânii & Didactica Matematicii și Fizicii",
    location: "Geschwister-Scholl-Gymnasium, Aachen",
    country: "Germania",
    description: "Debutul activităților academice la școala gazdă din Aachen. Elevii au lucrat în atelierul ecologic „Think Green” valorificând lâna naturală, în timp ce profesorii Paul Frunză și Traian Petrașcu au efectuat primele asistențe la ore de matematică și fizică pe ecrane interactive.",
    extendedText: "Profesorii de Job Shadowing Paul Frunză și Traian Petrașcu au consemnat eficiența cu care colegii germani integrează tehnologia: ecrane interactive tactile de format mare conectate la platforme educaționale, unde profesorul și elevul construiesc simultan calculele fără a abandona rigoarea scrierii pe caiete tipărite.",
    focus: "green",
    tags: ["Geschwister-Scholl", "Think Green", "Job Shadowing", "Ecrane Interactive"],
    schedule: [
      { time: "08:30", activity: "Revedere cu partenerii germani și vizionarea vlogurilor realizate în România" },
      { time: "09:30", activity: "Atelier Think Green: reutilizarea lânii naturale pentru obiecte artizanale" },
      { time: "11:00", activity: "Job Shadowing Prof. Frunză: utilizarea ecranelor interactive la matematică" },
      { time: "12:30", activity: "Job Shadowing Prof. Petrașcu: laboratorul de științe și experimente didactice" },
      { time: "15:00", activity: "Sesiune metodică între cadrele didactice române și germane" }
    ],
    takeaway: "Armonia între tehnologia ecranelor interactive și rigoarea scrierii matematice pe caiete.",
    accentColor: "from-emerald-600 to-teal-800",
    shadowingNotes: {
      observers: "Prof. Frunză Paul-Adrian & Prof. Petrașcu Traian",
      focusArea: "Didactica Matematicii Digitale & Managementul Clasei",
      keyObservations: [
        "Folosirea ecranului interactiv cu fundal milimetric și raportor virtual dinamic",
        "Protocolul de lucru: profesorul schițează algoritmul la tablă, elevul completează la ecran și clasa rezolvă pe fișe",
        "Spațiul educațional aerisit, dulapuri individuale pentru elevi, eliminarea rucsacilor grei"
      ],
      pedagogicalApplication: "Implementarea la Colegiul Solomon Haliță a șabloanelor digitale de geometrie și organizarea caietului de clasă în paralel cu tabla inteligentă."
    },
    photos: [
      {
        id: "d2-1",
        dayNumber: 2,
        title: "Ore de Matematică pe Ecrane Interactive",
        caption: "Prof. Paul Frunză asistând la rezolvarea ecuațiilor și construirea figurilor geometrice dinamice.",
        location: "Sala 204, Geschwister-Scholl-Gymnasium",
        category: "shadowing",
        imageSrc: "photos/day2_math_interactive.jpg",
        fallbackType: "classroom",
        cameraMeta: "Geschwister-Scholl · 35mm f/2.0 · 1/125s",
        authorCredit: "Prof. Frunză Paul-Adrian"
      },
      {
        id: "d2-2",
        dayNumber: 2,
        title: "Atelierul Think Green: Reciclarea Lânii",
        caption: "Elevii noștri colaborând cu tinerii din Aachen la realizarea obiectelor durabile din resurse ecologice.",
        location: "Atelierul de Artă & Sustenabilitate",
        category: "green",
        imageSrc: "photos/day2_wool_workshop.jpg",
        fallbackType: "green",
        cameraMeta: "Aachen · 40mm f/2.5 · 1/180s",
        authorCredit: "Prof. Hodoroga Florin"
      },
      {
        id: "d2-3",
        dayNumber: 2,
        title: "Infrastructura Modernă a Școlii Gazdă",
        caption: "Holurile primitoare cu dulapuri individuale și panouri de vizibilitate Erasmus+.",
        location: "Corpul Central, Geschwister-Scholl",
        category: "shadowing",
        imageSrc: "photos/day2_school_hallway.jpg",
        fallbackType: "classroom",
        cameraMeta: "Aachen · 24mm f/3.5 · 1/90s",
        authorCredit: "Prof. Petrașcu Traian"
      },
      {
        id: "d2-4",
        dayNumber: 2,
        title: "Dezbatere Metodică Româno-Germană",
        caption: "Director Sîngerozan Varvara și profesorii în dialog profesional cu conducerea școlii partenere.",
        location: "Sala Profesorală, Aachen",
        category: "community",
        imageSrc: "photos/day2_teachers_meeting.jpg",
        fallbackType: "classroom",
        cameraMeta: "Aachen · 50mm f/1.8 · 1/200s",
        authorCredit: "Prof. Sîngerozan Varvara"
      }
    ]
  },
  {
    id: 3,
    dayNumber: 3,
    date: "Joi, 21 Mai 2026",
    title: "Ziua 3: Explorare Urbană, Istorie Interactivă și Vânătoare de Comori în Aachen",
    subtitle: "Aachen City Rallye, Domul UNESCO, Centre Charlemagne și Gelateria din 1995",
    location: "Centrul Vechi Aachen, Dom & Centre Charlemagne",
    country: "Germania",
    description: "Centrul istoric din Aachen a devenit un laborator deschis de învățare prin „Aachen City Rallye”. Elevii au investigat izvoarele termale Elisenbrunnen și Domul carolingian, iar după-amiaza a oferit o întâlnire surpriză cu o absolventă din 1995 a liceului nostru.",
    extendedText: "Profesorii Frunză Paul și Petrașcu Traian au urmărit modul în care muzeul Centre Charlemagne transpune cronologia istoriei locale în experiențe interactive prin holograme, proiecții cartografice și machete tactile.",
    focus: "cultural",
    tags: ["Aachen City Rallye", "Domul UNESCO", "Centre Charlemagne", "Comunitate Solomon Haliță"],
    schedule: [
      { time: "09:00", activity: "Start Aachen City Rallye: rezolvarea de indicii în echipe mixte" },
      { time: "11:00", activity: "Vizită la Domul din Aachen (primul sit UNESCO german, capodoperă carolingiană)" },
      { time: "13:30", activity: "Analiza apei termale la Elisenbrunnen și istoria geologică a zonei" },
      { time: "15:00", activity: "Explorarea instalațiilor multimedia la Centre Charlemagne" },
      { time: "17:00", activity: "Popas emoționant la gelateria administrată de absolventa Solomon Haliță (promoția 1995)" }
    ],
    takeaway: "Educația non-formală integrată în patrimoniul viu și legătura puternică între generațiile liceului nostru.",
    accentColor: "from-amber-600 to-orange-800",
    shadowingNotes: {
      observers: "Prof. Frunză Paul-Adrian & Prof. Petrașcu Traian",
      focusArea: "Pedagogie Outdoor & Instalații Interactive de Muzeu",
      keyObservations: [
        "Metoda 'Rallye' stimulează orientarea spațială, comunicarea în limba engleză și colaborarea între egali",
        "Modelul muzeal de la Centre Charlemagne: ecran tactil central corelat cu hărți luminate sincron",
        "Temperatura apei termale de 52°C ca punct de pornire pentru lecții practice de termodinamică și transfer termic"
      ],
      pedagogicalApplication: "Crearea unui traseu de orientare și aplicații outdoor de matematică și fizică în Sângeorz-Băi."
    },
    photos: [
      {
        id: "d3-1",
        dayNumber: 3,
        title: "Domul din Aachen – Capodopera Carolingiană",
        caption: "Catedrala imperială cu capela octogonală a lui Carol cel Mare și candelabrul istoric Barbarossa.",
        location: "Katschhof, Aachen",
        category: "cultural",
        imageSrc: "photos/day3_aachen_dom.jpg",
        fallbackType: "dom",
        cameraMeta: "Aachen Dom · 18mm f/4.0 · 1/320s",
        authorCredit: "Prof. Frunză Paul-Adrian"
      },
      {
        id: "d3-2",
        dayNumber: 3,
        title: "Izvoarele Termale Elisenbrunnen",
        caption: "Studiul apei sulfuroase calde (52°C) în colonada neoclasică, exercițiu de chimie și termodinamică.",
        location: "Friedrich-Wilhelm-Platz, Aachen",
        category: "green",
        imageSrc: "photos/day3_elisenbrunnen.jpg",
        fallbackType: "nature",
        cameraMeta: "Aachen · 35mm f/2.2 · 1/200s",
        authorCredit: "Prof. Petrașcu Traian"
      },
      {
        id: "d3-3",
        dayNumber: 3,
        title: "Muzeul Interactiv Centre Charlemagne",
        caption: "Machete digitale interactive și instalații tactile de predare a istoriei prin tehnologii moderne.",
        location: "Katschhof, Aachen",
        category: "shadowing",
        imageSrc: "photos/day3_centre_charlemagne.jpg",
        fallbackType: "classroom",
        cameraMeta: "Aachen · 24mm f/2.8 · 1/80s",
        authorCredit: "Prof. Frunză Paul-Adrian"
      },
      {
        id: "d3-4",
        dayNumber: 3,
        title: "Revedere de Suflet la Gelateria din 1995",
        caption: "Grupul felicitând o absolventă a Liceului Solomon Haliță stabilită de decenii în Aachen.",
        location: "Aachen Altstadt",
        category: "community",
        imageSrc: "photos/day3_gelateria.jpg",
        fallbackType: "gelateria",
        cameraMeta: "Aachen · 50mm f/1.8 · 1/120s",
        authorCredit: "Prof. Sîngerozan Varvara"
      }
    ]
  },
  {
    id: 4,
    dayNumber: 4,
    date: "Vineri, 22 Mai 2026",
    title: "Ziua 4: Inovație Didactică la Matematică și Simbolul European la „3 Country Point”",
    subtitle: "Sisteme de Ecuații prin Substituție, Ziua de Naștere & Dreiländereck",
    location: "Geschwister-Scholl-Gymnasium & Dreiländereck (DE-BE-NL)",
    country: "Germania · Belgia · Olanda",
    description: "Zi dedicată în profunzime Job Shadowing-ului didactic la matematică, urmată de o drumeție la punctul unde se întâlnesc trei națiuni: Germania, Belgia și Olanda, simbolizând Europa fără granițe.",
    extendedText: "Profesorul Frunză Paul-Adrian a asistat la o lecție magistrală despre rezolvarea sistemelor de ecuații prin metoda substituției. Profesorul german a demonstrat cum izolarea variabilei x și substituirea în a doua ecuație poate fi evidențiată prin culori dinamice pe tabla interactivă, elevii notând riguros fiecare pas în caiete. În a doua parte a zilei, comunitatea a urcat la Vaalserberg (Dreiländereck).",
    focus: "stem",
    tags: ["Job Shadowing Matematică", "3 Country Point", "Dreiländereck", "Act European"],
    schedule: [
      { time: "08:30", activity: "Job Shadowing Prof. Frunză: Sisteme de două ecuații cu două necunoscute" },
      { time: "10:30", activity: "Job Shadowing Prof. Petrașcu: Măsurători experimentale în laboratorul de fizică" },
      { time: "11:45", activity: "Moment festiv: sărbătorirea zilei de naștere a unei eleve din delegație" },
      { time: "13:30", activity: "Drumeție la Dreiländereck (Vaalserberg) – cel mai înalt punct din Olanda" },
      { time: "16:00", activity: "Exercițiu geografic ghidat de Prof. Hodoroga la granița triplă DE-BE-NL" }
    ],
    takeaway: "Rigoarea matematică ancorată digital și emoția de a păși peste frontiere libere într-o Europă unită.",
    accentColor: "from-blue-700 to-cyan-800",
    shadowingNotes: {
      observers: "Prof. Frunză Paul-Adrian & Prof. Petrașcu Traian",
      focusArea: "Metoda Substituției pe Ecrane Digitale & Fenomene Ondulatorii",
      keyObservations: [
        "Metoda substituției explicată prin coduri cromatice: variabila izolată apare în chenar galben, înlocuirea în ecuația a doua în chenar albastru",
        "Elevii au autonomie mare în verificarea soluțiilor prin calcul invers la tablă",
        "Trecerea fluidă de la teorie la aplicație practică în maximum 7-8 minute"
      ],
      pedagogicalApplication: "Crearea unui set de fișe metodice digitale cu coduri cromatice pentru ecuații la clasele a VII-a și a VIII-a."
    },
    photos: [
      {
        id: "d4-1",
        dayNumber: 4,
        title: "Metoda Substituției pe Ecranul Interactiv",
        caption: "Demonstrație pas cu pas a izolării variabilei x pe ecranul digital de la Geschwister-Scholl.",
        location: "Cabinetul de Matematică, Aachen",
        category: "shadowing",
        imageSrc: "photos/day4_math_system.jpg",
        fallbackType: "classroom",
        cameraMeta: "Aachen · 50mm f/2.0 · 1/150s",
        authorCredit: "Prof. Frunză Paul-Adrian"
      },
      {
        id: "d4-2",
        dayNumber: 4,
        title: "Monumentul Celor Trei Frontiere (Dreiländereck)",
        caption: "Simbolul 'Act European': elevii stând concomitent cu picioarele în Germania, Belgia și Olanda.",
        location: "Vaalserberg (DE-BE-NL)",
        category: "cultural",
        imageSrc: "photos/day4_dreilandereck.jpg",
        fallbackType: "nature",
        cameraMeta: "Dreiländereck · 24mm f/4.0 · 1/400s",
        authorCredit: "Prof. Hodoroga Florin"
      },
      {
        id: "d4-3",
        dayNumber: 4,
        title: "Sărbătorirea Zilei de Naștere în Echipă",
        caption: "Moment de căldură umană și prietenie: ecusoanele școlii purtate cu mândrie și tort festiv.",
        location: "Geschwister-Scholl-Gymnasium",
        category: "community",
        imageSrc: "photos/day4_birthday.jpg",
        fallbackType: "celebration",
        cameraMeta: "Aachen · 35mm f/2.2 · 1/100s",
        authorCredit: "Prof. Sîngerozan Varvara"
      },
      {
        id: "d4-4",
        dayNumber: 4,
        title: "Turnul Panoramic și Labirintul din Pădure",
        caption: "Lecție de geografie în aer liber ghidată de Prof. Hodoroga în rezervația naturală de la graniță.",
        location: "Pădurea Vaalserberg, Olanda",
        category: "green",
        imageSrc: "photos/day4_forest_tower.jpg",
        fallbackType: "nature",
        cameraMeta: "Vaals · 28mm f/3.2 · 1/300s",
        authorCredit: "Prof. Petrașcu Traian"
      }
    ]
  },
  {
    id: 5,
    dayNumber: 5,
    date: "Sâmbătă, 23 Mai 2026",
    title: "Ziua 5: Arhitectură Gotică, Artă Monumentală și Explorare Urbană în Köln",
    subtitle: "Parcul de Sculpturi, Catedrala Kölner Dom, Podul Hohenzollern și Telegondola peste Rin",
    location: "Köln (Parcul de Sculpturi, Kölner Dom & Fluviul Rin)",
    country: "Germania",
    description: "Excursie de studiu în metropola Köln. Ziua a debutat cu Parcul de Sculpturi moderne în aer liber, a continuat cu vizitarea uluitoarei Catedrale Kölner Dom (UNESCO) și urcarea în turn, finalizându-se cu traversarea fluviului Rin cu telegondola.",
    extendedText: "Kölner Dom, monument gotic magnific cu turle de 157 de metri, a oferit o veritabilă lecție de inginerie medievală și mecanică a structurilor. Profesorul de fizică Traian Petrașcu și profesorul de matematică Paul Frunză au discutat cu elevii despre forțele de descărcare prin arce butante și proporția secțiunii de aur în arhitectura sacră.",
    focus: "cultural",
    tags: ["Köln", "Parcul de Sculpturi", "Kölner Dom UNESCO", "Telegondola Rin"],
    schedule: [
      { time: "09:00", activity: "Deplasare la Köln și explorarea Parcului de Sculpturi (geometrie în natură)" },
      { time: "11:30", activity: "Promenada pe malul Rinului și Podul Hohenzollern cu lacătele prieteniei" },
      { time: "13:00", activity: "Vizită documentară în Kölner Dom: nava centrală, vitraliile și urcarea în turn" },
      { time: "15:30", activity: "Traversarea fluviului Rin cu telegondola aeriană (Kölner Seilbahn)" },
      { time: "18:00", activity: "Întoarcerea la Aachen și sinteza impresiilor de călătorie" }
    ],
    takeaway: "Ingineria gotică îmbinată cu arta modernă contemporană și forța peisajului fluvial al Rinului.",
    accentColor: "from-teal-600 to-indigo-800",
    shadowingNotes: {
      observers: "Prof. Frunză Paul-Adrian & Prof. Petrașcu Traian",
      focusArea: "Fizica Structurilor Monumentale & Tehnologia Transportului pe Cablu",
      keyObservations: [
        "Sistemul de arce butante și contraforturi gotice explicat ca echilibru de vectori de forță",
        "Traversarea cu telegondola: tensiunea în cabluri de oțel, forța de frecare și securitatea pasagerilor",
        "Instalațiile optice din Parcul de Sculpturi ca modele vizuale de refracție și reflexie a luminii"
      ],
      pedagogicalApplication: "Lecție integrată de fizică și matematică despre arce, parabole și distribuția greutății în construcții."
    },
    photos: [
      {
        id: "d5-1",
        dayNumber: 5,
        title: "Kölner Dom – Gigantul Gotic de pe Rin",
        caption: "Catedrala monumentală din Köln, capodoperă a proporțiilor matematice și a verticalității gotice.",
        location: "Domkloster 4, Köln",
        category: "cultural",
        imageSrc: "photos/day5_kolner_dom.jpg",
        fallbackType: "cologne",
        cameraMeta: "Köln · 16mm f/5.6 · 1/400s",
        authorCredit: "Prof. Frunză Paul-Adrian"
      },
      {
        id: "d5-2",
        dayNumber: 5,
        title: "Telegondola peste Fluviul Rin (Kölner Seilbahn)",
        caption: "Perspectivă aeriană spectaculoasă asupra Rinului și a metropolei Köln dintr-o cabină suspendată.",
        location: "Fluviul Rin, Köln",
        category: "shadowing",
        imageSrc: "photos/day5_cable_car.jpg",
        fallbackType: "cologne",
        cameraMeta: "Rhein Seilbahn · 28mm f/3.5 · 1/600s",
        authorCredit: "Prof. Petrașcu Traian"
      },
      {
        id: "d5-3",
        dayNumber: 5,
        title: "Parcul de Sculpturi Moderne (Skulpturenpark)",
        caption: "Instalații spațiale din oțel și oglinzi convexe în armonie deplină cu vegetația parcului.",
        location: "Riehler Str., Köln",
        category: "green",
        imageSrc: "photos/day5_sculpture_park.jpg",
        fallbackType: "nature",
        cameraMeta: "Köln · 40mm f/2.8 · 1/250s",
        authorCredit: "Prof. Hodoroga Florin"
      },
      {
        id: "d5-4",
        dayNumber: 5,
        title: "Podul Hohenzollern și Promenada Rinului",
        caption: "Traseul feroviar istoric și sutele de mii de mărturii ale prieteniei europene.",
        location: "Hohenzollernbrücke, Köln",
        category: "community",
        imageSrc: "photos/day5_bridge.jpg",
        fallbackType: "cathedral",
        cameraMeta: "Köln · 24mm f/4.0 · 1/350s",
        authorCredit: "Prof. Sîngerozan Varvara"
      }
    ]
  },
  {
    id: 6,
    dayNumber: 6,
    date: "Sâmbătă, 23 Mai 2026",
    title: "Ziua 6: Festivitatea de Încheiere, Job Shadowing și Înmânarea Certificatelor Europass",
    subtitle: "Origami Geometric, Derivate pe Table Interactive, Masa Festivă & Întoarcerea Acasă",
    location: "Geschwister-Scholl-Gymnasium, Aachen",
    country: "Germania",
    description: "Încununarea întregului proiect: ateliere creative de origami matematic, asistență finală la orele de calcul diferențial, ceremonia festivă de decernare a Certificatelor Erasmus+ Europass Mobilitate și drumul de întoarcere la Sângeorz-Băi.",
    extendedText: "Prof. Paul Frunză și Prof. Traian Petrașcu au consemnat în fișele de asistență modul în care profesorii germani folosesc origami și plierea hârtiei pentru a demonstra poliedre regulate și simetrii spațiale. La prânz, conducerea Geschwister-Scholl a oferit masa festivă tradițională și a înmânat solemn celor 14 elevi și 4 cadre didactice certificatele Europass Mobilitate semnate oficial.",
    focus: "cultural",
    tags: ["Festivitate Finală", "Certificate Europass", "Origami Geometric", "Geschwister-Scholl"],
    schedule: [
      { time: "08:30", activity: "Atelier interdisciplinar de origami matematic și construcție de poliedre" },
      { time: "10:30", activity: "Job Shadowing final: noțiunea de derivată și interpretarea geometrică" },
      { time: "12:00", activity: "Festivitatea solemnă de încheiere și înmânarea Certificatelor Europass" },
      { time: "13:30", activity: "Masa festivă oferită de gazdele germane, schimb de cadouri și mulțumiri" },
      { time: "16:00", activity: "Pregătirea călătoriei de întoarcere în România (22–23 Mai 2026)" }
    ],
    takeaway: "Validarea oficială a competențelor europene dobândite și temelia unui parteneriat educațional durabil.",
    accentColor: "from-indigo-600 to-emerald-700",
    shadowingNotes: {
      observers: "Prof. Frunză Paul-Adrian & Prof. Petrașcu Traian",
      focusArea: "Calcul Diferențial Didactic & Certificarea Competențelor Europass",
      keyObservations: [
        "Origami folosit ca punte între artă și rigoarea axiomatică a geometriei euclidiene",
        "Interpretarea pantei tangentei la curbă (derivata) prin mișcare continuă pe ecran tactil",
        "Procedura metodică de completare a portofoliului Europass Mobilitate pentru fiecare participant"
      ],
      pedagogicalApplication: "Organizarea unui cerc de origami geometric și aplicarea metodelor vizuale la analiza matematică de liceu."
    },
    photos: [
      {
        id: "d6-1",
        dayNumber: 6,
        title: "Ceremonia Certificatelor Erasmus+ Europass",
        caption: "Elevii și profesorii primind atestatele oficiale recunoscute la nivelul Uniunii Europene.",
        location: "Aula Festivă, Geschwister-Scholl",
        category: "community",
        imageSrc: "photos/day6_europass_ceremony.jpg",
        fallbackType: "celebration",
        cameraMeta: "Aachen · 35mm f/2.0 · 1/120s",
        authorCredit: "Director Prof. Sîngerozan Varvara"
      },
      {
        id: "d6-2",
        dayNumber: 6,
        title: "Atelierul de Origami Geometric & Poliedre",
        caption: "Elevii construind icosaedre și dodecaedre din hârtie sub coordonarea profesorilor de științe.",
        location: "Sala de Matematică, Aachen",
        category: "shadowing",
        imageSrc: "photos/day6_origami.jpg",
        fallbackType: "classroom",
        cameraMeta: "Aachen · 45mm f/2.5 · 1/160s",
        authorCredit: "Prof. Frunză Paul-Adrian"
      },
      {
        id: "d6-3",
        dayNumber: 6,
        title: "Masa Festivă cu Delicii și Schimb de Daruri",
        caption: "Bucuria împărtășită între elevii români și gazdele lor germane la finalul mobilității.",
        location: "Mensa Școlară, Aachen",
        category: "community",
        imageSrc: "photos/day6_festive_lunch.jpg",
        fallbackType: "celebration",
        cameraMeta: "Aachen · 28mm f/2.8 · 1/100s",
        authorCredit: "Prof. Hodoroga Florin"
      },
      {
        id: "d6-4",
        dayNumber: 6,
        title: "Poza Oficială a Delegației Solomon Haliță",
        caption: "Cei 14 elevi și cei 4 profesori în fața școlii partenere la încheierea mobilității 17–23 Mai 2026.",
        location: "Fațada Geschwister-Scholl-Gymnasium",
        category: "community",
        imageSrc: "photos/day6_group_photo.jpg",
        fallbackType: "celebration",
        cameraMeta: "Aachen · 24mm f/4.0 · 1/250s",
        authorCredit: "Prof. Petrașcu Traian"
      }
    ]
  }
];

// Flat list of all 24 curated photos across days 1 to 6
export const ALL_PHOTOS: DayPhoto[] = DAILY_JOURNAL.flatMap((day) => day.photos);

export const PEDAGOGICAL_PILLARS: PedagogicalPillar[] = [
  {
    id: "interactive-tech",
    title: "Ecrane Interactive & Rezolvarea Ecuațiilor în Timp Real",
    subtitle: "Didactica Matematicii Moderne Observată la Geschwister-Scholl",
    iconName: "Variable",
    observer: "Prof. Frunză Paul-Adrian (Matematică & Informatică)",
    summary: "Asistența la orele de matematică a demonstrat modul în care ecranele interactive mari facilitează învățarea activă: profesorul german utilizează coduri de culori pentru variabile, raportoare virtuale și softuri geometrice dinamice, păstrând în același timp rigoarea redactării integrale a pașilor pe caiet.",
    highlights: [
      "Rezolvarea sistemelor de ecuații prin metoda substituției cu coduri cromatice dinamice",
      "Utilizarea raportorului virtual și a grilelor dinamice milimetrice la geometrie",
      "Elevii sunt chemați frecvent la tablă pentru a manipula direct obiectele matematice",
      "Echilibru ferm între afișajul digital și verificarea scrisă pe caietele elevilor"
    ],
    classroomObservation: "Profesorul nu oferă soluția gata făcută, ci ghidează elevul la ecranul tactil prin întrebări socratice, timp în care toți colegii din clasă rezolvă pe fișe structurate.",
    transferToRomania: "Vom introduce la clasele noastre de la Liceul Teoretic „Solomon Haliță” fișe de lucru sincronizate cu ecranul interactiv și tehnici de evidențiere cromatică a termenilor în algebră.",
    techStack: ["Ecrane Interactive Tactile", "GeoGebra Classroom", "Raportor & Riglă Virtuală", "Caiete & Fișe Structurate"]
  },
  {
    id: "hybrid-learning",
    title: "Experimentul de Laborator & Fizică Asistată Digital",
    subtitle: "Didactica Științelor Naturale & Transfer Tehnologic",
    iconName: "Atom",
    observer: "Prof. Petrașcu Traian (Fizică)",
    summary: "În laboratoarele de științe din Aachen, tehnologia digitală este un instrument de măsură de mare precizie: senzorii digitali de temperatură, presiune și forță transmit date în timp real pe tablete, permițând elevilor să traseze grafice experimentale instantaneu.",
    highlights: [
      "Senzori digitali pentru măsurarea transferului termic și a forțelor elastice",
      "Tablete individuale utilizate pentru consultarea simulărilor PhET și notarea măsurătorilor",
      "Siguranță riguroasă în laborator: ochelari de protecție, mese modulare și truse dedicate",
      "Corelarea directă între noțiunea teoretică (de ex. căldura specifică) și aplicația din Aachen (apa termală 52°C)"
    ],
    classroomObservation: "Elevii lucrează în perechi de câte doi, au autonomie în calibrarea senzorilor și își compară datele brute cu modelele matematice teoretice.",
    transferToRomania: "Modernizarea demersului experimental în cabinetul de fizică de la Sângeorz-Băi prin utilizarea senzorilor mobili și a fișelor de laborator bazate pe investigație.",
    techStack: ["Senzori de Temperatură/Forță", "Tablete Didactice", "Software Măsurare Grafică", "Truse Modulare de Fizică"]
  },
  {
    id: "collaborative-teamwork",
    title: "Lucru Colaborativ & Cetățenie Europeană Activă",
    subtitle: "Ateliere Ecologice Think Green, Origami & Dreiländereck",
    iconName: "Users2",
    observer: "Prof. Hodoroga Florin & Director Prof. Sîngerozan Varvara",
    summary: "Dimensiunea colaborativă a mobilității a unit tinerii din România și Germania: de la atelierul practic de reciclare a lânii naturale și până la explorarea graniței comune la Dreiländereck și realizarea modelelor geometrice de origami.",
    highlights: [
      "Atelierul 'Think Green': responsabilizare ecologică prin refolosirea materialelor naturale",
      "Aachen City Rallye: rezolvarea de indicii în echipe mixte româno-germane în orașul vechi",
      "Drumeția geografică la Dreiländereck: conștientizarea Europei fără granițe fizice",
      "Construcția de poliedre regulate din hârtie (origami matematic) ca activitate de echipă"
    ],
    classroomObservation: "Bariera lingvistică a dispărut încă din primele ore, elevii comunicând fluent în engleză și germană prin prisma sarcinilor practice și a cooperării.",
    transferToRomania: "Organizarea la Sângeorz-Băi a unor ateliere transdisciplinare ecologice și de orientare geografică outdoor inspirate din experiența Aachen.",
    techStack: ["Ateliere de Lână Ecologică", "Origami Poliedric", "Orientare GPS & Hărți", "Parteneriat Școlar European"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    author: "Prof. Frunză Paul-Adrian",
    role: "Participant Job Shadowing · Matematică & Informatică",
    institution: "Liceul Teoretic „Solomon Haliță”",
    quote: "Asistența la orele de matematică de la Geschwister-Scholl-Gymnasium a fost o veritabilă revelație metodică. Modul în care colegii germani îmbină tabla interactivă cu rezolvările pas-cu-pas pe caiete, evidențiind metoda substituției prin coduri de culori, reprezintă un model de bune practici pe care îl voi aplica imediat la orele mele din Sângeorz-Băi.",
    pillar: "Learn Digital"
  },
  {
    id: 2,
    author: "Prof. Petrașcu Traian",
    role: "Participant Job Shadowing · Fizică & Științe",
    institution: "Liceul Teoretic „Solomon Haliță”",
    quote: "În Aachen am constatat cât de eficient poate deveni un laborator de fizică atunci când experimentul clasic este asistat de senzori digitali și modelare computerizată. Elevii înțeleg fenomenele mult mai profund când văd graficele formându-se în timp real pe ecran. Această experiență ne motivează să aducem aceeași rigoare aplicată la Solomon Haliță.",
    pillar: "Learn Digital"
  },
  {
    id: 3,
    author: "Director Prof. Sîngerozan Varvara",
    role: "Coordonator Proiect & Director",
    institution: "Liceul Teoretic „Solomon Haliță”",
    quote: "Proiectul Erasmus+ KA122-SCH confirmă deschiderea europeană a școlii noastre. Rezultatele Job Shadowing-ului realizat de colegii profesori, alături de evoluția celor 14 elevi participanți, certifică faptul că Liceul Teoretic „Solomon Haliță” din Sângeorz-Băi oferă standarde educaționale la nivelul celor mai prestigioase gimnazii germane.",
    pillar: "Act European"
  },
  {
    id: 4,
    author: "Prof. Hodoroga Florin",
    role: "Profesor Însoțitor al Elevilor · Geografie",
    institution: "Liceul Teoretic „Solomon Haliță”",
    quote: "Însoțirea elevilor la Dreiländereck (punctul tri-frontalier DE-BE-NL), în Parcul de Sculpturi din Köln și de-a lungul raliului urban prin Aachen a fost o experiență de neprețuit. Am văzut cum geografia, ecologia 'Think Green' și cetățenia europeană capătă sens viu în ochii tinerilor noștri.",
    pillar: "Think Green"
  }
];
