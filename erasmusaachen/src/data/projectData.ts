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
  mediaType?: 'image' | 'video'; // <-- NOU: Suport pentru videoclipuri
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

// ... Păstrăm restul interfețelor ...
export interface PedagogicalPillar { id: string; title: string; subtitle: string; iconName: string; summary: string; highlights: string[]; classroomObservation: string; transferToRomania: string; techStack: string[]; observer: string; }
export interface Testimonial { id: number; author: string; role: string; institution: string; quote: string; pillar: string; }
export interface ParticipatingTeacher { name: string; title: string; role: string; roleType: 'coordinator' | 'escort' | 'shadowing'; disciplines: string; jobShadowingFocus: string; description: string; }

export const PARTICIPATING_TEACHERS: ParticipatingTeacher[] = [
  { name: "Prof. Sîngerozan Varvara", title: "Director", role: "Coordonator de Proiect & Director", roleType: "coordinator", disciplines: "Management Educațional & Științe", jobShadowingFocus: "Management strategic european, acreditare și parteneriate internaționale", description: "Coordonatorul proiectului Erasmus+, responsabilă de coordonarea generală a mobilității, relația instituțională cu Geschwister-Scholl-Gymnasium și integrarea rezultatelor la nivelul conducerii liceului." },
  { name: "Prof. Hodoroga Florin", title: "Profesor", role: "Profesor Însoțitor al Elevilor", roleType: "escort", disciplines: "Geografie & Științele Mediului", jobShadowingFocus: "Geografie aplicată, orientare la Dreiländereck și educație ecologică Think Green", description: "Profesorul însoțitor al grupului de 14 elevi, coordonator al activităților de teren, siguranței elevilor și atelierelor geografice și de mediu." },
  { name: "Prof. Frunză Paul-Adrian", title: "Profesor", role: "Participant Job Shadowing · Matematică & Informatică", roleType: "shadowing", disciplines: "Matematică & Informatică", jobShadowingFocus: "Pedagogie digitală pe ecrane interactive, rezolvarea ecuațiilor pas-cu-pas și metodologii hibride STEM", description: "Participant direct în programul de Job Shadowing. Prezentarea reflectă în profunzime asistența la orele de matematică și informatică, integrarea ecranelor interactive și transferul de metodologii moderne." },
  { name: "Prof. Petrașcu Traian", title: "Profesor", role: "Participant Job Shadowing · Fizică & Științe", roleType: "shadowing", disciplines: "Fizică & Științe Aplicate", jobShadowingFocus: "Experimente de laborator, didactica fizicii aplicate, senzori și modelare tehnologică", description: "Participant direct în programul de Job Shadowing. A analizat dotările laboratoarelor de științe germane, protocoalele de siguranță, utilizarea senzorilor digitali și conexiunea dintre fizică teoretică și experimentul practic." }
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
  stats: { students: 14, teachers: 4, days: 5, countries: 3, europassCertificates: 18, partnerSchool: "Geschwister-Scholl-Gymnasium", shadowingHours: 32 }
};

// ============================================================================
// SISTEM AUTOMAT DE GENERARE MEDIA (1-72) CU SUPORT VIDEO
// ============================================================================

// AICI SCRII NUMERELE FIȘIERELOR CARE SUNT VIDEOCLIPURI (.mp4)
// Ex: Dacă fișierul 12.mp4 și 45.mp4 sunt video, le scrii aici: [12, 45]
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
      imageSrc: `/${i}.${isVideo ? 'mp4' : 'jpg'}`, // Pune automat .mp4 dacă e în lista VIDEO_IDS, altfel .jpg
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
    description: "Mobilitatea a debutat cu zborul către Bruxelles. Delegația condusă de Director Prof. Sîngerozan Varvara, alături de Prof. Hodoroga Florin și profesorii de Job Shadowing Prof. Frunză Paul-Adrian și Prof. Petrașcu Traian, a explorat rețeaua de transport a capitalei europene, centrul istoric Grand Place și impunătorul monument STEM Atomium.",
    extendedText: "O zi de coeziune și deschidere culturală. În Atomium, profesorii au explorat cu elevii reprezentarea spațială a celulei cristaline de fier.",
    focus: "cultural",
    tags: ["Bruxelles", "Atomium STEM", "Grand Place", "Patrimoniu"],
    schedule: [
      { time: "07:30", activity: "Sosirea delegației pe aeroportul din Bruxelles" },
      { time: "11:45", activity: "Tur cultural: Grand Place, Manneken Pis și Galeriile Royale" },
      { time: "14:15", activity: "Explorarea structurii Atomium și Muzeului de Design" },
      { time: "17:30", activity: "Călătoria spre Aachen și cazarea" }
    ],
    takeaway: "Înțelegerea dimensiunii europene a patrimoniului științific și pregătirea spiritului de echipă.",
    accentColor: "from-blue-600 to-indigo-800",
    photos: generateMediaForDay(1, 1, 12) // Ziua 1: pozele de la 1 la 12
  },
  {
    id: 2,
    dayNumber: 2,
    date: "Miercuri, 20 Mai 2026",
    title: "Ziua 2: Integrare, Sustenabilitate și Job Shadowing",
    subtitle: "Atelier Think Green de Reciclare a Lânii & Didactica Matematicii și Fizicii",
    location: "Geschwister-Scholl-Gymnasium, Aachen",
    country: "Germania",
    description: "Debutul activităților academice la școala gazdă din Aachen. Elevii au lucrat în atelierul ecologic „Think Green”, în timp ce profesorii au efectuat asistențe la ore de matematică și fizică pe ecrane interactive.",
    extendedText: "S-a consemnat eficiența cu care colegii germani integrează tehnologia.",
    focus: "green",
    tags: ["Geschwister-Scholl", "Think Green", "Job Shadowing", "Ecrane Interactive"],
    schedule: [
      { time: "09:30", activity: "Atelier Think Green: reutilizarea lânii naturale" },
      { time: "11:00", activity: "Job Shadowing: utilizarea ecranelor interactive la matematică" },
      { time: "12:30", activity: "Job Shadowing: laboratorul de științe și experimente didactice" },
      { time: "15:00", activity: "Sesiune metodică între cadrele didactice" }
    ],
    takeaway: "Armonia între tehnologia ecranelor interactive și rigoarea scrierii matematice pe caiete.",
    accentColor: "from-emerald-600 to-teal-800",
    photos: generateMediaForDay(2, 13, 24) // Ziua 2: pozele de la 13 la 24
  },
  {
    id: 3,
    dayNumber: 3,
    date: "Joi, 21 Mai 2026",
    title: "Ziua 3: Explorare Urbană, Istorie Interactivă",
    subtitle: "Aachen City Rallye, Domul UNESCO, Centre Charlemagne",
    location: "Centrul Vechi Aachen",
    country: "Germania",
    description: "Centrul istoric din Aachen a devenit un laborator deschis de învățare prin „Aachen City Rallye”. Elevii au investigat izvoarele termale Elisenbrunnen și Domul carolingian.",
    extendedText: "Muzeul Centre Charlemagne transpune cronologia istoriei locale în experiențe interactive.",
    focus: "cultural",
    tags: ["Aachen City Rallye", "Domul UNESCO", "Centre Charlemagne"],
    schedule: [
      { time: "09:00", activity: "Start Aachen City Rallye" },
      { time: "11:00", activity: "Vizită la Domul din Aachen (UNESCO)" },
      { time: "13:30", activity: "Analiza apei termale la Elisenbrunnen" },
      { time: "15:00", activity: "Explorarea instalațiilor multimedia la Centre Charlemagne" }
    ],
    takeaway: "Educația non-formală integrată în patrimoniul viu.",
    accentColor: "from-amber-600 to-orange-800",
    photos: generateMediaForDay(3, 25, 36) // Ziua 3: pozele de la 25 la 36
  },
  {
    id: 4,
    dayNumber: 4,
    date: "Vineri, 22 Mai 2026",
    title: "Ziua 4: Simbolul European la „3 Country Point”",
    subtitle: "Sisteme de Ecuații, Ziua de Naștere & Dreiländereck",
    location: "Dreiländereck (DE-BE-NL)",
    country: "Germania · Belgia · Olanda",
    description: "Zi dedicată în profunzime Job Shadowing-ului didactic la matematică, urmată de drumeție la punctul unde se întâlnesc trei națiuni.",
    extendedText: "Profesorul a asistat la o lecție magistrală despre rezolvarea sistemelor de ecuații prin metoda substituției pe tabla interactivă.",
    focus: "stem",
    tags: ["Job Shadowing Matematică", "Dreiländereck", "Act European"],
    schedule: [
      { time: "08:30", activity: "Job Shadowing: Sisteme de două ecuații" },
      { time: "11:45", activity: "Moment festiv: sărbătorirea zilei de naștere" },
      { time: "13:30", activity: "Drumeție la Dreiländereck (Vaalserberg)" },
      { time: "16:00", activity: "Exercițiu geografic la granița triplă DE-BE-NL" }
    ],
    takeaway: "Rigoarea matematică ancorată digital și emoția unei Europe fără granițe.",
    accentColor: "from-blue-700 to-cyan-800",
    photos: generateMediaForDay(4, 37, 48) // Ziua 4: pozele de la 37 la 48
  },
  {
    id: 5,
    dayNumber: 5,
    date: "Sâmbătă, 23 Mai 2026",
    title: "Ziua 5: Arhitectură Gotică și Explorare Urbană",
    subtitle: "Parcul de Sculpturi, Kölner Dom, Telegondola peste Rin",
    location: "Köln",
    country: "Germania",
    description: "Excursie de studiu în Köln. Parcul de Sculpturi moderne, Catedrale Kölner Dom (UNESCO) și traversarea fluviului Rin.",
    extendedText: "O veritabilă lecție de inginerie medievală și mecanică a structurilor.",
    focus: "cultural",
    tags: ["Köln", "Parcul de Sculpturi", "Kölner Dom UNESCO"],
    schedule: [
      { time: "09:00", activity: "Explorarea Parcului de Sculpturi" },
      { time: "13:00", activity: "Vizită documentară în Kölner Dom" },
      { time: "15:30", activity: "Traversarea fluviului Rin cu telegondola" }
    ],
    takeaway: "Ingineria gotică îmbinată cu arta modernă contemporană.",
    accentColor: "from-teal-600 to-indigo-800",
    photos: generateMediaForDay(5, 49, 60) // Ziua 5: pozele de la 49 la 60
  },
  {
    id: 6,
    dayNumber: 6,
    date: "Sâmbătă, 23 Mai 2026",
    title: "Ziua 6: Festivitatea de Încheiere și Europass",
    subtitle: "Origami Geometric, Masa Festivă & Întoarcerea Acasă",
    location: "Geschwister-Scholl-Gymnasium, Aachen",
    country: "Germania",
    description: "Încununarea întregului proiect: ateliere creative de origami matematic, ceremonia festivă de decernare a Certificatelor Erasmus+ Europass Mobilitate și drumul de întoarcere.",
    extendedText: "Profesorii germani folosesc origami și plierea hârtiei pentru a demonstra poliedre regulate și simetrii spațiale.",
    focus: "cultural",
    tags: ["Festivitate Finală", "Certificate Europass", "Origami Geometric"],
    schedule: [
      { time: "08:30", activity: "Atelier interdisciplinar de origami matematic" },
      { time: "12:00", activity: "Festivitatea solemnă de încheiere și înmânarea Certificatelor" },
      { time: "13:30", activity: "Masa festivă oferită de gazdele germane" },
      { time: "16:00", activity: "Pregătirea călătoriei de întoarcere" }
    ],
    takeaway: "Validarea oficială a competențelor europene dobândite.",
    accentColor: "from-indigo-600 to-emerald-700",
    photos: generateMediaForDay(6, 61, 72) // Ziua 6: pozele de la 61 la 72
  }
];

export const ALL_PHOTOS: DayPhoto[] = DAILY_JOURNAL.flatMap((day) => day.photos);
export const PEDAGOGICAL_PILLARS: PedagogicalPillar[] = []; // Ascuns pentru a economisi spațiu aici, dar poți lăsa gol dacă nu folosești.
export const TESTIMONIALS: Testimonial[] = [];