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
}

export interface GalleryItem {
  id: number;
  title: string;
  category: 'cultural' | 'stem' | 'green' | 'team';
  location: string;
  description: string;
  aspect: 'landscape' | 'portrait' | 'square';
  tag: string;
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
  disciplines: string;
  jobShadowingFocus: string;
}

export const PARTICIPATING_TEACHERS: ParticipatingTeacher[] = [
  {
    name: "Prof. Sîngerozan Varvara",
    title: "Director",
    role: "Director & Coordonator Instituțional",
    disciplines: "Management Educațional & Științe",
    jobShadowingFocus: "Management școlar european, bune practici instituționale și parteneriate internaționale Erasmus+"
  },
  {
    name: "Prof. Hodoroga Florin",
    title: "Profesor",
    role: "Profesor de Geografie",
    disciplines: "Geografie & Științele Mediului",
    jobShadowingFocus: "Geografie aplicată, orientare spațială la granița triplă Dreiländereck și educație ecologică Think Green"
  },
  {
    name: "Prof. Frunză Paul-Adrian",
    title: "Profesor",
    role: "Profesor de Matematică și Informatică",
    disciplines: "Matematică & Informatică",
    jobShadowingFocus: "Pedagogie digitală pe ecrane interactive, sisteme de ecuații în timp real și didactica hibridă STEM"
  },
  {
    name: "Prof. Petrașcu Traian",
    title: "Profesor",
    role: "Profesor de Fizică",
    disciplines: "Fizică & Științe Aplicate",
    jobShadowingFocus: "Didactica fizicii de laborator, experimente cu senzori, dinamica energiilor și tehnologii educaționale"
  }
];

export const PROJECT_METADATA = {
  title: "Think Green, Learn Digital, Act European",
  subtitle: "Proiect de Mobilitate Școlară Erasmus+ (KA122-SCH)",
  location: "Aachen, Germania",
  dates: "17 – 23 Mai 2026",
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
    days: 6,
    countries: 3,
    europassCertificates: 18,
    partnerSchool: "Geschwister-Scholl-Gymnasium"
  }
};

export const DAILY_JOURNAL: DayJournal[] = [
  {
    id: 1,
    dayNumber: 1,
    date: "Duminică, 17 Mai 2026",
    title: "Ziua 1: Aterizarea și Descoperirea Capitalei Europene, Bruxelles",
    subtitle: "Patrimoniu European, Metrou, Grand Place, Atomium și Muzeul de Design",
    location: "Bruxelles & Tranzit spre Aachen",
    country: "Belgia",
    description: "Prima zi a mobilității a debutat cu zborul către Belgia și răsăritul spectaculos pe pistă. Grupul celor 14 elevi și cei 4 profesori (Director Prof. Sîngerozan Varvara, Prof. Hodoroga Florin, Prof. Frunză Paul-Adrian, Prof. Petrașcu Traian) s-a adaptat rapid la rețeaua de metrou din Bruxelles. Am explorat centrul pe străduțe pietruite, Manneken Pis, Grand Place și Galeriile Royale Saint-Hubert. Au urmat obiectivele STEM: Atomium (cristalul gigantic de fier) și Muzeul de Design, înainte de transferul spre Geschwister-Scholl-Gymnasium din Aachen.",
    extendedText: "Odată ajunși, grupul nostru – format din 14 elevi și cei 4 profesori însoțitori – a experimentat dinamica unui mare oraș european prin deplasarea cu metroul, un exercițiu excelent de organizare și echipă. Chiar dacă ne-am deschis umbrelele pentru a ne feri de ploaia măruntă, am explorat Grand Place, fațadele baroce impresionante și Galeriile Royale Saint-Hubert. Vizita la Atomium ne-a purtat direct în universul disciplinelor STEM prin structura sa gigantică de cristal de fier, completată de experimentele vizuale și sculpturile de la Muzeul de Design unde estetica se îmbină cu tehnologia.",
    focus: "cultural",
    tags: ["Bruxelles", "Atomium STEM", "Grand Place", "Muzeul de Design"],
    schedule: [
      { time: "07:30", activity: "Zborul către Belgia și sosirea pe aeroport la răsărit de soare" },
      { time: "10:30", activity: "Orientare logistică și deplasare cu rețeaua de metrou din Bruxelles" },
      { time: "12:00", activity: "Tur pietonal: Manneken Pis, Grand Place și Galeriile Royale Saint-Hubert" },
      { time: "14:30", activity: "Vizită la Atomium (cristalul de fier mărit) și Muzeul de Design" },
      { time: "17:30", activity: "Călătoria spre școala parteneră Geschwister-Scholl-Gymnasium din Aachen" }
    ],
    takeaway: "Descoperirea valorilor europene, a patrimoniului științific comun și pregătirea spiritului de echipă pentru Aachen.",
    accentColor: "from-blue-600 to-indigo-800"
  },
  {
    id: 2,
    dayNumber: 2,
    date: "Luni, 18 Mai 2026",
    title: "Ziua 2: Integrare, Sustenabilitate și Job Shadowing la Geschwister-Scholl-Gymnasium",
    subtitle: "Atelier Think Green de Reciclare a Lânii & Didactica Matematicii și Fizicii",
    location: "Geschwister-Scholl-Gymnasium, Aachen",
    country: "Germania",
    description: "Începutul oficial al activităților la Geschwister-Scholl-Gymnasium din Aachen. Revederea caldă cu colegii germani care au vizitat anterior Sângeorz-Băi și vizionarea vlogurilor din România. Elevii au participat la un workshop ecologic „Think Green” cu lână naturală, iar profesorii au început programul de job shadowing la matematică, informatică, geografie și fizică (ecrane interactive, raportor virtual, fișe tipărite și tablete).",
    extendedText: "Revederea dintre elevii noștri și colegii lor germani a fost plină de căldură. În concordanță cu tema proiectului, „Think Green”, elevii au învățat tehnici creative de reutilizare a resurselor naturale, lucrând cu lână pentru a realiza obiecte hand-made. În paralel, profesorii au inițiat programul de job shadowing: au analizat infrastructura modernă a școlii, panourile Erasmus+, dulapurile individuale ale elevilor și mixul eficient între tehnologie (ecrane interactive pentru calculul ariei) și rigoarea calculelor pe caiete și fișe de lucru.",
    focus: "green",
    tags: ["Geschwister-Scholl", "Think Green", "Job Shadowing", "Ecrane Interactive"],
    schedule: [
      { time: "08:30", activity: "Revedere cu partenerii germani și vizionarea vlogurilor din Sângeorz-Băi" },
      { time: "09:30", activity: "Workshop practic „Think Green”: reutilizarea lânii naturale pentru obiecte hand-made" },
      { time: "11:00", activity: "Turul școlii: panouri Erasmus+, logistica dulapurilor individuale pe holuri" },
      { time: "12:15", activity: "Job Shadowing la matematică și fizică: ecrane interactive, raportor virtual, tablete" },
      { time: "15:00", activity: "Discuții metodice constructive între profesori și reflecție de grup" }
    ],
    takeaway: "Educația ecologică practică și armonia dintre tehnologia interactivă și calculul matematic riguros.",
    accentColor: "from-emerald-600 to-teal-800"
  },
  {
    id: 3,
    dayNumber: 3,
    date: "Marți, 19 Mai 2026",
    title: "Ziua 3: Explorare Urbană, Istorie Interactivă și Vânătoare de Comori în Aachen",
    subtitle: "Aachen City Rallye, Domul UNESCO, Centre Charlemagne și Gelateria din 1995",
    location: "Centrul Vechi Aachen, Dom & Centre Charlemagne",
    country: "Germania",
    description: "Străzile istorice din Aachen s-au transformat într-un mediu educațional deschis prin „Aachen City Rallye” (vânătoare de comori în echipe mixte). Elevii au analizat apa termală de la Elisenbrunnen, au explorat impunătorul Dom din Aachen (patrimoniu UNESCO) și Primăria (Rathaus). După-amiaza a adus o vizită multimedia la Centre Charlemagne și o întâlnire de suflet la gelateria administrată de o fostă elevă din Sângeorz-Băi (promoția 1995).",
    extendedText: "Vânătoarea de comori i-a provocat pe elevii români și germani să colaboreze prin tot orașul: au analizat apa termală caldă de la Elisenbrunnen, au inventat povești la fântânile emblematice și au vizitat Domul din Aachen – primul monument din Germania inclus în UNESCO, vestit prin arhitectura carolingiană și istoria încoronării regilor germani. La Centre Charlemagne am descoperit cum tehnologia modernă (sfere luminoase, ecrane tactile, audioghiduri) predă istoria interactiv. Punctul de maximă emoție a fost vizita la gelateria din Aachen deținută de o absolventă din 1995 a liceului nostru din Sângeorz-Băi!",
    focus: "cultural",
    tags: ["Aachen City Rallye", "Domul UNESCO", "Centre Charlemagne", "Comunitate Solomon Haliță"],
    schedule: [
      { time: "09:00", activity: "Start „Aachen City Rallye”: vânătoare de comori în echipe mixte româno-germane" },
      { time: "10:30", activity: "Studiul apei termale la Elisenbrunnen și explorarea fântânilor istorice" },
      { time: "11:45", activity: "Vizită la Domul din Aachen (UNESCO) și fotografii de grup la Primărie (Rathaus)" },
      { time: "14:00", activity: "Muzeul interactiv Centre Charlemagne: instalații multimedia și sfere luminoase" },
      { time: "16:00", activity: "Întâlnire emoționantă la gelateria absolventei Solomon Haliță (promoția 1995)" }
    ],
    takeaway: "Învățarea prin experiențe directe în orașul-laborator și forța legăturilor comunității noastre peste generații.",
    accentColor: "from-amber-600 to-orange-800"
  },
  {
    id: 4,
    dayNumber: 4,
    date: "Miercuri, 20 Mai 2026",
    title: "Ziua 4: Inovație Didactică, Spirit de Echipă și Simbolism European la „3 Country Point”",
    subtitle: "Metoda Substituției pe Ecrane Interactive, Ziua de Naștere & Dreiländereck",
    location: "Geschwister-Scholl-Gymnasium & Dreiländereck (DE-BE-NL)",
    country: "Germania · Belgia · Olanda",
    description: "Job shadowing axat pe sistemele de ecuații prin metoda substituției rezolvate pas cu pas pe ecrane interactive, menținând rigoarea scrierii pe caiete. Comunitatea Erasmus+ a sărbătorit ziua de naștere a unei eleve purtând ecusoanele școlii gazdă. După-amiaza „Think Green”: drumeție ghidată geografic la „3 Country Point” (Dreiländereck / Vaalserberg), cel mai înalt punct din Țările de Jos, unde am simțit „Act European” stând cu un picior într-o țară și altul în vecina ei.",
    extendedText: "Profesorii noștri au analizat cum colegii germani folosesc ecranul interactiv nu doar ca suport vizual, ci ca instrument dinamic de lucru pentru rezolvarea sistemelor de ecuații în timp real. După ore, grupul a trăit un moment cald de coeziune sărbătorind ziua de naștere a unei eleve. Drumeția în natură la „3 Country Point” (Dreiländereck), punctul de întâlnire al granițelor Germaniei, Belgiei și Olandei, a oferit simbolul cel mai puternic al mobilității: o Europă fără frontiere, unită prin educație și prietenie. Ziua s-a încheiat la lăsarea serii pe străzile pietruite de lângă Rathaus.",
    focus: "stem",
    tags: ["Job Shadowing Matematică", "3 Country Point", "Dreiländereck", "Act European"],
    schedule: [
      { time: "08:30", activity: "Job Shadowing: sisteme de ecuații pe ecrane interactive și activități colaborative" },
      { time: "11:00", activity: "Consolidarea comunității Erasmus+: sărbătorirea zilei de naștere a unei eleve" },
      { time: "13:30", activity: "Drumeție ecologică „Think Green” spre punctul tri-frontalier Dreiländereck" },
      { time: "15:00", activity: "Simbolul „Act European” la cota maximă a Țărilor de Jos: 3 țări traversate la pas" },
      { time: "18:00", activity: "Plimbare de seară pe străzile din Aachen și concluziile profesorilor la cafenea" }
    ],
    takeaway: "Echilibrul perfect între didactica digitală și libertatea unei Europe unite fără granițe.",
    accentColor: "from-blue-700 to-cyan-800"
  },
  {
    id: 5,
    dayNumber: 5,
    date: "Joi, 21 Mai 2026",
    title: "Ziua 5: Arhitectură, Artă și Explorare Urbană în Köln",
    subtitle: "Parcul de Sculpturi, Kölner Dom, Podul Hohenzollern și Telegondola peste Rin",
    location: "Köln (Parcul de Sculpturi, Kölner Dom & Fluviul Rin)",
    country: "Germania",
    description: "Călătorie dincolo de Aachen, în metropola Köln. Am început cu Parcul de Sculpturi – artă modernă în aer liber, sculpturi geometrice și instalații optice cu oglinzi („Think Green”). A urmat promenada Rinului și celebra Catedrală din Köln (Kölner Dom, UNESCO), unde am urcat sutele de trepte în turn pentru o panoramă uimitoare. Ziua s-a încheiat spectaculos cu traversarea fluviului Rin cu telegondola.",
    extendedText: "Parcul de Sculpturi din Köln ne-a oferit o conexiune creativă între natură și geometrie prin sculpturi masive și oglinzi optice. Ajunși pe promenada Rinului, am admirat traficul fluvial și Podul Hohenzollern. Kölner Dom, capodopera gotică protejată de UNESCO, ne-a copleșit prin nava centrală uriașă, altarul aurit și vitraliile vibrante; elevii și profesorii au urcat sutele de trepte în turn pentru o priveliște completă asupra Rinului. Traversarea râului cu telegondola a încoronat această zi de învățare non-formală.",
    focus: "cultural",
    tags: ["Köln", "Parcul de Sculpturi", "Kölner Dom UNESCO", "Telegondola Rin"],
    schedule: [
      { time: "09:00", activity: "Deplasare la Köln și explorarea Parcului de Sculpturi (instalații optice și natură)" },
      { time: "11:30", activity: "Plimbare pe promenada fluviului Rin și Podul istoric Hohenzollern" },
      { time: "13:00", activity: "Catedrala din Köln (Kölner Dom): arhitectură gotică, altar și urcarea în turn" },
      { time: "15:30", activity: "Traversarea fluviului Rin cu telegondola: panoramă aeriană asupra metropolei" },
      { time: "17:30", activity: "Întoarcerea la Aachen și pregătirile pentru festivitatea de încheiere" }
    ],
    takeaway: "Înțelegerea modului în care arta monumentală, patrimoniul gotic și peisajul urban al Rinului inspiră tinerii.",
    accentColor: "from-teal-600 to-indigo-800"
  },
  {
    id: 6,
    dayNumber: 6,
    date: "Vineri, 22 – Sâmbătă, 23 Mai 2026",
    title: "Ziua 6: Festivitatea de Încheiere, Job Shadowing și Înmânarea Certificatelor Europass",
    subtitle: "Ateliere de Origami Geometric, Derivate, Masa Festivă & Întoarcerea în România",
    location: "Geschwister-Scholl-Gymnasium, Aachen",
    country: "Germania",
    description: "Încheierea activităților la Geschwister-Scholl-Gymnasium. Elevii au lucrat în ateliere creative construind modele geometrice și origami din hârtie. Profesorii au asistat la ore de matematică și științe urmărind predarea derivatelor, funcțiilor și geometriei. Punctul culminant: festivitatea solemnă de încheiere cu înmânarea certificatelor Erasmus+ Europass Mobilitate, masa festivă pregătită de gazde, schimbul de cadouri și călătoria de întoarcere în România (23 Mai 2026).",
    extendedText: "Dimineața a combinat participarea directă a elevilor la ateliere creative de modele geometrice și origami cu asistența profesorilor la ore de matematică avansată (derivate și funcții pe table interactive). După-amiaza a fost marcată de emoția recunoașterii meritelor: elevii au primit certificatele oficiale Erasmus+ într-o atmosferă de bucurie și aplauze. Gazdele ne-au oferit o masă festivă cu fructe și delicii, iar schimbul de cadouri simbolice a încununat prietenia trainică stabilită între liceul nostru și comunitatea din Aachen.",
    focus: "cultural",
    tags: ["Festivitate Finală", "Certificate Europass", "Origami Geometric", "Geschwister-Scholl"],
    schedule: [
      { time: "08:30", activity: "Ateliere creative pentru elevi: modele geometrice și origami din hârtie" },
      { time: "10:00", activity: "Job Shadowing final la matematică și științe: derivate, funcții și geometrie" },
      { time: "12:00", activity: "Festivitatea solemnă de încheiere și înmânarea Certificatelor Erasmus+" },
      { time: "13:30", activity: "Masa festivă oferită de gazdele germane, schimb de cadouri și mulțumiri" },
      { time: "16:00", activity: "Finalizarea mobilității și pregătirea transferului spre România (22–23 Mai 2026)" }
    ],
    takeaway: "Recunoașterea oficială a competențelor europene dobândite și consolidarea unui parteneriat educațional de durată.",
    accentColor: "from-indigo-600 to-emerald-700"
  }
];

export const PEDAGOGICAL_PILLARS: PedagogicalPillar[] = [
  {
    id: "interactive-tech",
    title: "Tehnologie Interactivă în Matematică & Informatică",
    subtitle: "Ecrane Interactive & Rezolvarea Sistemelor de Ecuații în Timp Real",
    iconName: "Variable",
    summary: "Asistența la orele de matematică de la Geschwister-Scholl-Gymnasium a evidențiat utilizarea ecranelor interactive nu doar ca suport vizual, ci ca instrument activ de lucru, demonstrând pas cu pas metode precum substituția și calculul geometric al ariei.",
    highlights: [
      "Rezolvarea sistemelor de ecuații în timp real cu implicarea directă a elevilor la tablă interactivă",
      "Utilizarea raportorului virtual și a instrumentelor dinamice pentru construirea figurilor geometrice",
      "Echilibru clar între explicația digitală și redactarea manuală pe caiete cu pași riguroși de calcul"
    ],
    classroomObservation: "Profesorii germani construiesc soluțiile ecuațiilor pas cu pas împreună cu clasa, îmbinând claritatea grafică a ecranului tactil cu rezolvările detaliate din caiete.",
    transferToRomania: "Integrarea instrumentelor geometrice interactive și a metodelor pas-cu-pas observate în Aachen la orele de algebră și geometrie de la Liceul Teoretic „Solomon Haliță”.",
    techStack: ["Ecrane Interactive", "Raportor Virtual", "GeoGebra", "Fișe Structurate"]
  },
  {
    id: "hybrid-learning",
    title: "Didactică STEM Hibridă & Fizică Aplicată",
    subtitle: "Rigoarea Calculelor Tradiționale Unită cu Resursele Digitale",
    iconName: "TabletSmartphone",
    summary: "Modelul observat în Aachen a demonstrat un echilibru sănătos: elevii utilizează tabletele pentru a accesa resurse și aplicații educaționale complementare, însă mențin o disciplină fermă a scrierii pe caiete tipărite și fișe de lucru.",
    highlights: [
      "Tablete individuale utilizate pentru explorare și consultarea materialelor didactice digitale",
      "Scrierea matematică riguroasă manuală menținută ca fundament esențial al învățării durabile",
      "Organizare logistică impecabilă cu orare transparente și dulapuri individuale pentru responsabilizare"
    ],
    classroomObservation: "Abordarea digitalizată nu exclude fundamentul scrierii tradiționale: elevii trasează grafice manual și notează fiecare etapă de calcul pe caiete.",
    transferToRomania: "Adoptarea modelului hibrid echilibrat în laboratoarele noastre de matematică și fizică din Sângeorz-Băi.",
    techStack: ["Tablete Individuale", "Manuale & Fișe Tipărite", "Dulapuri & Logistică", "Aplicații Didactice"]
  },
  {
    id: "collaborative-teamwork",
    title: "Lucru Colaborativ & Comunitate Erasmus+",
    subtitle: "Echipe Mixte, Ateliere de Origami Geometric & Sustenabilitate cu Lână",
    iconName: "Users2",
    summary: "Mobilitatea a pus un accent major pe cooperarea internațională: elevii au lucrat în echipe mixte la vânătoarea de comori Aachen City Rallye, au creat obiecte din lână la atelierul Think Green și au realizat modele geometrice și origami în ultima zi.",
    highlights: [
      "Sesiuni interactive de spargere a gheții prin vizionarea vlogurilor realizate anterior în România",
      "Workshop aplicat „Think Green” de reutilizare a lânii naturale pentru responsabilizare ecologică",
      "Coeziune și prietenie autentică: sărbătorirea zilei de naștere a unei eleve și masa festivă finală"
    ],
    classroomObservation: "Elevii români și germani au depășit orice barieră de limbă lucrând cot la cot, comunicând deschis în engleză și germană în timpul atelierelor practice.",
    transferToRomania: "Dezvoltarea atelierelor de învățare cooperativă pe proiecte practice și ecologice în cadrul liceului nostru.",
    techStack: ["Ateliere de Lână", "Origami Geometric", "Aachen City Rallye", "Ecusoane & Schimb Cultural"]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Atomium & Muzeul de Design",
    category: "cultural",
    location: "Bruxelles, Belgia",
    description: "Cristalul gigantic de fier de la Atomium, simbolizând științele STEM și deschiderea culturală a primei zile.",
    aspect: "landscape",
    tag: "Ziua 1 Bruxelles"
  },
  {
    id: 2,
    title: "Geschwister-Scholl-Gymnasium",
    category: "stem",
    location: "Aachen, Germania",
    description: "Revederea călduroasă cu colegii germani și primele ore de job shadowing la matematică și fizică.",
    aspect: "portrait",
    tag: "Ziua 2 Școală Gazdă"
  },
  {
    id: 3,
    title: "Workshop Think Green cu Lână",
    category: "green",
    location: "Atelier Sustenabilitate, Aachen",
    description: "Elevii învățând tehnici practice de reutilizare a resurselor naturale prin realizarea de obiecte hand-made.",
    aspect: "square",
    tag: "Ziua 2 Ecologie"
  },
  {
    id: 4,
    title: "Aachen City Rallye & Domul UNESCO",
    category: "cultural",
    location: "Centrul Vechi Aachen",
    description: "Vânătoarea de comori, apa termală de la Elisenbrunnen și explorarea impunătorului Dom carolingian.",
    aspect: "landscape",
    tag: "Ziua 3 Aachen"
  },
  {
    id: 5,
    title: "Gelateria Absolventei din 1995",
    category: "team",
    location: "Aachen, Germania",
    description: "Surpriză emoționantă: întâlnirea cu fosta elevă a liceului Solomon Haliță stabilită în Aachen.",
    aspect: "square",
    tag: "Ziua 3 Comunitate"
  },
  {
    id: 6,
    title: "Dreiländereck: 3 Country Point",
    category: "cultural",
    location: "Vaalserberg (DE-BE-NL)",
    description: "Punctul de întâlnire al granițelor Germaniei, Belgiei și Olandei: Act European fără frontiere.",
    aspect: "portrait",
    tag: "Ziua 4 Dreiländereck"
  },
  {
    id: 7,
    title: "Catedrala din Köln & Telegondola",
    category: "cultural",
    location: "Köln, Germania",
    description: "Kölner Dom, Parcul de Sculpturi și traversarea spectaculoasă a fluviului Rin cu telegondola.",
    aspect: "landscape",
    tag: "Ziua 5 Köln"
  },
  {
    id: 8,
    title: "Festivitatea Diplomelor Europass",
    category: "team",
    location: "Geschwister-Scholl-Gymnasium",
    description: "Înmânarea certificatelor Erasmus+, masa festivă și rămas-bun după o săptămână de neuitat.",
    aspect: "landscape",
    tag: "Ziua 6 Certificare"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    author: "Director Prof. Sîngerozan Varvara",
    role: "Director & Coordonator Instituțional",
    institution: "Liceul Teoretic „Solomon Haliță”",
    quote: "Proiectul Erasmus+ a deschis noi punți internaționale pentru Liceul Teoretic „Solomon Haliță”. Schimbul de bune practici cu partenerii de la Geschwister-Scholl-Gymnasium ne confirmă că performanța academică și responsabilitatea ecologică merg mână în mână cu valorile europene.",
    pillar: "Act European"
  },
  {
    id: 2,
    author: "Prof. Frunză Paul-Adrian",
    role: "Profesor de Matematică și Informatică",
    institution: "Liceul Teoretic „Solomon Haliță”",
    quote: "La Geschwister-Scholl-Gymnasium am remarcat echilibrul extraordinar între ecranele interactive pentru sisteme de ecuații în timp real și rigoarea scrierii manuale pe caiete. Această experiență ne oferă idei valoroase pentru optimizarea activității noastre didactice la Sângeorz-Băi.",
    pillar: "Learn Digital"
  },
  {
    id: 3,
    author: "Prof. Petrașcu Traian",
    role: "Profesor de Fizică",
    institution: "Liceul Teoretic „Solomon Haliță”",
    quote: "Observarea metodelor de laborator și a modului în care elevii germani combină experimentul practic cu modelarea digitală a fost deosebit de utilă. Vom valorifica aceste abordări în orele de fizică pentru a spori curiozitatea științifică a tinerilor noștri.",
    pillar: "Learn Digital"
  },
  {
    id: 4,
    author: "Prof. Hodoroga Florin",
    role: "Profesor de Geografie",
    institution: "Liceul Teoretic „Solomon Haliță”",
    quote: "Drumeția la Dreiländereck (punctul de confluență tri-frontalier DE-BE-NL) și raliul urban prin Aachen au ilustrat perfect conceptul de geografie vie și conștientizare a mediului. Este o experiență de neegalat pentru educația ecologică și cetățenească a elevilor.",
    pillar: "Think Green"
  }
];
