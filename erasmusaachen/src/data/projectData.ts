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
  imageSrc?: string;
  mediaType?: 'image' | 'video';
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

// ============================================================================
// SISTEM AUTOMAT DE GENERARE MEDIA (1-72) CU SUPORT VIDEO
// ============================================================================

// Dacă un fișier este videoclip (.mp4), adaugă numărul lui în lista de mai jos.
// Ex: const VIDEO_IDS: number[] = [15, 22, 45];
const VIDEO_IDS: number[] = []; 

const generateMediaForDay = (dayNumber: number, startId: number, endId: number): DayPhoto[] => {
  const mediaItems: DayPhoto[] = [];
  for (let i = startId; i <= endId; i++) {
    const isVideo = VIDEO_IDS.includes(i);
    mediaItems.push({
      id: `media-${i}`,
      dayNumber: dayNumber,
      title: `Moment ${i}`,
      caption: `Cadru documentar din Ziua ${dayNumber}`,
      location: "Erasmus+ Aachen",
      category: 'community',
      imageSrc: `/${i}.${isVideo ? 'mp4' : 'jpg'}`,
      mediaType: isVideo ? 'video' : 'image',
      fallbackType: 'nature',
      cameraMeta: "Arhiva Proiectului",
      authorCredit: "Liceul Teoretic Solomon Haliță"
    });
  }
  return mediaItems;
};
// ============================================================================

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
    photos: generateMediaForDay(1, 1, 12)
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
    photos: generateMediaForDay(2, 13, 24)
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
    photos: generateMediaForDay(3, 25, 36)
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
    photos: generateMediaForDay(4, 37, 48)
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
    photos: generateMediaForDay(5, 49, 60)
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
    photos: generateMediaForDay(6, 61, 72)
  }
];

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