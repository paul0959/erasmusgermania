/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DayPhoto { id: string; dayNumber: number; title: string; caption: string; location: string; category: 'shadowing' | 'cultural' | 'green' | 'community'; imageSrc?: string; mediaType?: 'image' | 'video'; fallbackType: 'atomium' | 'cathedral' | 'classroom' | 'green' | 'nature' | 'cologne' | 'celebration' | 'gelateria' | 'dom'; cameraMeta: string; authorCredit: string; }
export interface DayJournal { id: number; dayNumber: number; date: string; title: string; subtitle: string; location: string; country: string; description: string; extendedText: string; focus: 'cultural' | 'stem' | 'green'; tags: string[]; schedule: { time: string; activity: string }[]; takeaway: string; accentColor: string; photos: DayPhoto[]; shadowingNotes?: { observers: string; focusArea: string; keyObservations: string[]; pedagogicalApplication: string; }; }
export interface PedagogicalPillar { id: string; title: string; subtitle: string; iconName: string; summary: string; highlights: string[]; classroomObservation: string; transferToRomania: string; techStack: string[]; observer: string; }
export interface Testimonial { id: number; author: string; role: string; institution: string; quote: string; pillar: string; }
export interface ParticipatingTeacher { name: string; title: string; role: string; roleType: 'coordinator' | 'escort' | 'shadowing'; disciplines: string; jobShadowingFocus: string; description: string; }

export const PARTICIPATING_TEACHERS: ParticipatingTeacher[] = [
  { name: "Prof. Sîngerozan Varvara", title: "Director", role: "Coordonator Proiect", roleType: "coordinator", disciplines: "Management Educațional", jobShadowingFocus: "Analiza managementului școlar european și a strategiilor de internaționalizare.", description: "În calitate de coordonator al proiectului Erasmus+, am vizat stabilirea unui parteneriat educațional pe termen lung cu Geschwister-Scholl-Gymnasium și integrarea bunelor practici observate la nivelul managementului instituțional." },
  { name: "Prof. Hodoroga Florin", title: "Profesor", role: "Însoțitor Elevi", roleType: "escort", disciplines: "Geografie", jobShadowingFocus: "Integrarea metodelor de educație outdoor în studiul geografiei și ecologiei.", description: "Activitatea mea s-a concentrat pe organizarea și coordonarea aplicațiilor practice în teren, facilitând elevilor recunoașterea reperelor geografice și înțelegerea conceptelor de mediu din perspectivă practică." },
  { name: "Prof. Frunză Paul-Adrian", title: "Profesor", role: "Participant Job Shadowing", roleType: "shadowing", disciplines: "Matematică & Informatică", jobShadowingFocus: "Eficiența utilizării ecranelor interactive în predarea științelor exacte.", description: "Am asitat la orele de matematică pentru a documenta modalitățile prin care tehnologia tactilă poate sprijini rezolvarea exercițiilor la clasă, menținând în același timp rigoarea etapelor de calcul." },
  { name: "Prof. Petrașcu Traian", title: "Profesor", role: "Participant Job Shadowing", roleType: "shadowing", disciplines: "Fizică", jobShadowingFocus: "Digitalizarea experimentelor școlare și utilizarea senzorilor în laborator.", description: "Am urmărit integrarea instrumentelor de măsurare digitală în orele de fizică, analizând modul în care elevii generează și interpretează date experimentale utilizând tabletele și senzorii electronici." }
];

export const PROJECT_METADATA = {
  title: "Think Green, Learn Digital, Act European",
  subtitle: "Proiect Erasmus+ (KA122-SCH)",
  location: "Aachen, Germania",
  dates: "19 – 23 Mai 2026",
  sendingSchool: "Liceul Teoretic „Solomon Haliță”",
  sendingAddress: "Sângeorz-Băi",
  sendingCity: "Sângeorz-Băi",
  sendingCounty: "BN",
  sendingCountry: "România",
  hostSchool: "Geschwister-Scholl-Gymnasium",
  hostCity: "Aachen",
  hostCountry: "Germania",
  visitedCountries: ["Germania", "Belgia", "Olanda"],
  teachers: PARTICIPATING_TEACHERS,
  stats: { students: 14, teachers: 4, days: 5, countries: 3, europassCertificates: 18, partnerSchool: "Gymnasium Aachen", shadowingHours: 32 }
};

const VIDEO_IDS: number[] = []; 

const generateMediaForDay = (dayNumber: number, startId: number, endId: number): DayPhoto[] => {
  const mediaItems: DayPhoto[] = [];
  for (let i = startId; i <= endId; i++) {
    const isVideo = VIDEO_IDS.includes(i);
    mediaItems.push({
      id: `media-${i}`,
      dayNumber: dayNumber,
      title: `Activitate documentată`,
      caption: `Cadru preluat în timpul desfășurării activităților din program.`,
      location: "Aachen & Împrejurimi",
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

export const DAILY_JOURNAL: DayJournal[] = [
  {
    id: 1,
    dayNumber: 1,
    date: "Marți, 19 Mai 2026",
    title: "Ziua 1: Aterizarea în Belgia și Descoperirea Capitalei Europene, Bruxelles",
    subtitle: "Grand Place, Structura Atomică Atomium și Designul European",
    location: "Bruxelles",
    country: "Belgia",
    description: "Am debutat mobilitatea cu deplasarea spre Bruxelles, unde am realizat o primă activitate de recunoaștere culturală și științifică. Alături de grupul de elevi, am analizat arhitectura istorică din Grand Place și am explorat îndeaproape structura monumentală Atomium.",
    extendedText: "Observarea directă a modelului cristalin de fier mărit la scară gigantică ne-a permis să realizăm corelații imediate între conceptele de fizică atomică și arhitectură. Această primă experiență a consolidat coeziunea grupului și a setat un ritm excelent pentru activitățile didactice ce urmau să se desfășoare la școala gazdă din Aachen.",
    focus: "cultural",
    tags: ["Bruxelles", "Atomium", "Documentare Geografică"],
    schedule: [
      { time: "07:30", activity: "Aterizarea la Bruxelles și organizarea logisticii" },
      { time: "11:45", activity: "Parcurgerea unui traseu de recunoaștere în Grand Place" },
      { time: "14:15", activity: "Analiza spațială a structurii Atomium" },
      { time: "17:30", activity: "Deplasarea către Aachen și acomodarea" }
    ],
    takeaway: "Corelarea noțiunilor teoretice cu observațiile din teren facilitează o asimilare rapidă și profundă a informației.",
    accentColor: "from-blue-600 to-indigo-800",
    shadowingNotes: {
      observers: "Cadrele didactice însoțitoare",
      focusArea: "Utilizarea spațiilor neconvenționale ca resursă educațională",
      keyObservations: [
        "Analiza modelelor fizice de mari dimensiuni a facilitat conexiunile imediate cu noțiunile abstracte de la clasă.",
        "Am remarcat dezvoltarea abilităților de orientare spațială ale elevilor prin utilizarea hărților de transport urban.",
        "Activitățile de tip 'ice-breaking' desfășurate în mediul non-formal au asigurat o dinamică de grup excelentă."
      ],
      pedagogicalApplication: "Implementarea utilizării machetelor și modelelor fizice 3D în explicarea structurilor abstracte la clasă."
    },
    photos: generateMediaForDay(1, 1, 12)
  },
  {
    id: 2,
    dayNumber: 2,
    date: "Miercuri, 20 Mai 2026",
    title: "Ziua 2: Integrare, Sustenabilitate și Job Shadowing la Geschwister-Scholl-Gymnasium",
    subtitle: "Atelier Think Green de Reciclare a Lânii & Didactica Matematicii și Fizicii",
    location: "Geschwister-Scholl-Gymnasium",
    country: "Germania",
    description: "Am demarat activitățile oficiale în incinta școlii partenere. Elevii au participat la un atelier practic de prelucrare a lânii, iar noi am efectuat asistențe la orele de matematică și fizică.",
    extendedText: "Observațiile s-au axat pe modul în care cadrele didactice germane folosesc ecranele interactive. Am notat că acestea sunt utilizate ca suport grafic activ, în timp ce exercițiile sunt rezolvate concomitent și pe caietele de clasă ale elevilor.",
    focus: "green",
    tags: ["Job Shadowing", "Ecologie", "Integrare Tehnologică"],
    schedule: [
      { time: "08:30", activity: "Primirea oficială și ședința organizatorică" },
      { time: "09:30", activity: "Participarea elevilor la atelierul practic 'Think Green'" },
      { time: "11:00", activity: "Asistență la ora de matematică (utilizarea funcțiilor grafice)" },
      { time: "12:30", activity: "Asistență în laboratorul de fizică" },
      { time: "15:00", activity: "Sesiune de evaluare cu profesorii școlii gazdă" }
    ],
    takeaway: "Tehnologia reprezintă un instrument de sprijin vizual, neînlocuind fundamentul scris al învățării.",
    accentColor: "from-emerald-600 to-teal-800",
    shadowingNotes: {
      observers: "Catedra de Științe Exacte",
      focusArea: "Dinamica predării cu ajutorul instrumentelor digitale",
      keyObservations: [
        "Profesorul utilizează ecranul interactiv pentru a modifica în timp real parametrii geometrici.",
        "Elevii sunt implicați direct în operarea ecranului pentru a demonstra soluțiile găsite.",
        "Infrastructura școlară, incluzând dulapurile individuale, contribuie la ordinea și ergonomia spațiului."
      ],
      pedagogicalApplication: "Adoptarea fișelor de lucru structurate, sincronizate vizual cu materialul proiectat pe tabla inteligentă."
    },
    photos: generateMediaForDay(2, 13, 24)
  },
  {
    id: 3,
    dayNumber: 3,
    date: "Joi, 21 Mai 2026",
    title: "Ziua 3: Explorare Urbană, Istorie Interactivă și Vânătoare de Comori în Aachen",
    subtitle: "Aachen City Rallye, Domul UNESCO, Centre Charlemagne și Gelateria din 1995",
    location: "Aachen",
    country: "Germania",
    description: "Am transferat procesul educațional dincolo de pereții clasei, organizând o aplicație practică de tip 'City Rallye' în centrul istoric al orașului Aachen. Elevii au lucrat independent în echipe, documentând obiective de patrimoniu.",
    extendedText: "Traseul educativ ne-a purtat și la izvoarele termale Elisenbrunnen, unde am purtat discuții aplicate despre termodinamică și compoziție chimică. Ulterior, vizita la Centre Charlemagne ne-a demonstrat eficiența cu care muzeografia modernă și interfețele digitale pot face istoria și geografia extrem de atractive pentru noile generații.",
    focus: "cultural",
    tags: ["Orientare", "Aachen City Rallye", "Patrimoniu UNESCO"],
    schedule: [
      { time: "09:00", activity: "Startul aplicației practice de orientare urbană" },
      { time: "11:00", activity: "Documentare istorică la Domul din Aachen" },
      { time: "13:30", activity: "Analiza apei termale la complexul Elisenbrunnen" },
      { time: "15:00", activity: "Studiul hărților dinamice din interiorul Centre Charlemagne" },
      { time: "17:00", activity: "Întâlnire cu un membru al diasporei, absolventă a liceului nostru" }
    ],
    takeaway: "Abordarea interdisciplinară în spații publice facilitează asimilarea practică a conceptelor.",
    accentColor: "from-amber-600 to-orange-800",
    shadowingNotes: {
      observers: "Cadrele didactice însoțitoare",
      focusArea: "Eficiența sarcinilor de lucru în spații deschise",
      keyObservations: [
        "Sarcina de lucru în echipă a determinat comunicarea activă în limba engleză.",
        "Panourile interactive din muzeu au menținut un grad ridicat de atenție din partea elevilor.",
        "Alternarea sarcinilor cognitive cu deplasarea fizică a prevenit oboseala intelectuală."
      ],
      pedagogicalApplication: "Crearea unui circuit local de orientare și recunoaștere istorică/geografică în proximitatea liceului nostru."
    },
    photos: generateMediaForDay(3, 25, 36)
  },
  {
    id: 4,
    dayNumber: 4,
    date: "Vineri, 22 Mai 2026",
    title: "Ziua 4: Inovație Didactică la Matematică și Simbolul European la „3 Country Point”",
    subtitle: "Sisteme de Ecuații prin Substituție, Ziua de Naștere & Dreiländereck",
    location: "Aachen & Vaalserberg",
    country: "Germania · Belgia · Olanda",
    description: "Am continuat programul de Job Shadowing la disciplina matematică, analizând metoda substituției. În a doua parte a programului, am organizat o aplicație practică de geografie la Dreiländereck.",
    extendedText: "La clasă s-a observat eficiența utilizării codurilor cromatice pentru a diferenția variabilele în timpul calculelor. Deplasarea la granița dintre Germania, Belgia și Olanda a constituit un exercițiu practic de geografie politică și o demonstrație a liberei circulații europene.",
    focus: "stem",
    tags: ["Metodica Matematicii", "Geografie Aplicată", "Dreiländereck"],
    schedule: [
      { time: "08:30", activity: "Asistență la matematică: predarea sistemelor de ecuații" },
      { time: "11:45", activity: "Moment organizatoric în cadrul școlii" },
      { time: "13:30", activity: "Deplasare pe traseul montan către Vaalserberg" },
      { time: "16:00", activity: "Aplicație practică la punctul de intersecție a frontierelor" }
    ],
    takeaway: "Structurarea vizuală a informației matematice crește gradul de retenție al elevilor.",
    accentColor: "from-blue-700 to-cyan-800",
    shadowingNotes: {
      observers: "Cadrele didactice de la disciplinele exacte",
      focusArea: "Optimizarea explicațiilor algebrice",
      keyObservations: [
        "Identificarea vizuală a variabilelor prin culori (ex. x galben, y albastru) reduce confuzia în etapele de substituție.",
        "Timpul alocat predării frontale este minimizat, prioritate având exercițiul individual la clasă.",
        "Evaluarea formativă se face prin chemarea aleatorie la ecran a elevilor."
      ],
      pedagogicalApplication: "Utilizarea constantă a evidențierii cromatice pentru demonstrațiile algebrice de la tablă."
    },
    photos: generateMediaForDay(4, 37, 48)
  },
  {
    id: 5,
    dayNumber: 5,
    date: "Sâmbătă, 23 Mai 2026",
    title: "Ziua 5: Arhitectură Gotică, Artă Monumentală și Explorare Urbană în Köln",
    subtitle: "Parcul de Sculpturi, Catedrala Kölner Dom, Podul Hohenzollern și Telegondola peste Rin",
    location: "Köln",
    country: "Germania",
    description: "Am dedicat această zi studiului metropolei Köln. Am inițiat traseul cu o analiză a formelor geometrice expuse în aer liber în Parcul de Sculpturi moderne, continuând cu documentarea arhitecturală la Kölner Dom, monument UNESCO.",
    extendedText: "Măreția catedralei gotice ne-a oferit contextul perfect pentru a discuta aplicat despre distribuția forțelor fizice, centrul de greutate și rolul fundamental al arcelor de susținere. Ziua de studiu s-a încheiat cu o traversare a fluviului Rin cu telegondola, care a servit drept prilej pentru a face scurte explicații despre mecanica sistemelor de transport pe cablu.",
    focus: "cultural",
    tags: ["Fizica Structurilor", "Kölner Dom", "Mecanică Aplicată"],
    schedule: [
      { time: "09:00", activity: "Analiza geometriilor complexe din Parcul de Sculpturi" },
      { time: "11:30", activity: "Studiul rezistenței materialelor pe podul feroviar Hohenzollern" },
      { time: "13:00", activity: "Documentarea elementelor de susținere gotică la Catedrală" },
      { time: "15:30", activity: "Observarea mecanismelor de tensiune în timpul deplasării cu telegondola" }
    ],
    takeaway: "Conceptele teoretice de mecanică pot fi explicate eficient utilizând exemple din ingineria civilă.",
    accentColor: "from-teal-600 to-indigo-800",
    shadowingNotes: {
      observers: "Membrii delegației",
      focusArea: "Valorificarea mediului urban în educația științifică",
      keyObservations: [
        "Arhitectura monumentală a Catedralei ne-a oferit un material didactic real și de impact pentru explicarea staticii.",
        "Parcul de sculpturi a constituit un exercițiu excelent pentru identificarea formelor și simetriilor în spații neconvenționale.",
        "Experiențele de transport urban (telegondola) au fost convertite cu succes în mici secvențe de fixare a noțiunilor de mecanică."
      ],
      pedagogicalApplication: "Includerea imaginilor cu structuri inginerești reale în prezentările destinate explicării principiilor fizice la clasă."
    },
    photos: generateMediaForDay(5, 49, 60)
  },
  {
    id: 6,
    dayNumber: 6,
    date: "Sâmbătă, 23 Mai 2026",
    title: "Ziua 6: Festivitatea de Încheiere, Job Shadowing și Înmânarea Certificatelor Europass",
    subtitle: "Origami Geometric, Derivate pe Table Interactive, Masa Festivă & Întoarcerea Acasă",
    location: "Geschwister-Scholl-Gymnasium",
    country: "Germania",
    description: "Ultima sesiune în școala gazdă a fost dedicată unui atelier interdisciplinar. Elevii au aplicat concepte de geometrie spațială prin construirea poliedrelor regulate folosind tehnica origami.",
    extendedText: "La nivel administrativ, mobilitatea a fost concluzionată printr-o ședință de evaluare cu partenerii germani. Activitățile s-au finalizat cu acordarea oficială a Certificatelor Europass Mobilitate tuturor participanților, confirmând validitatea competențelor dobândite.",
    focus: "cultural",
    tags: ["Geometrie Aplicată", "Evaluare Finală", "Europass"],
    schedule: [
      { time: "08:30", activity: "Atelier tehnic de construcție a poliedrelor (Origami)" },
      { time: "10:30", activity: "Sesiune finală de asistență la clasă" },
      { time: "12:00", activity: "Decernarea Certificatelor Europass Mobilitate" },
      { time: "13:30", activity: "Prânz comun și formalitățile de încheiere a programului" }
    ],
    takeaway: "Certificarea formală a experienței consolidează profilul academic al participanților.",
    accentColor: "from-indigo-600 to-emerald-700",
    shadowingNotes: {
      observers: "Echipa de implementare a proiectului",
      focusArea: "Integrarea manualității în rezolvarea sarcinilor matematice",
      keyObservations: [
        "Construcția fizică a figurilor dezvoltă exponențial capacitatea de reprezentare tridimensională.",
        "Sarcina a impus rigoare, precizie și o abordare procedurală clară.",
        "Validarea instituțională (Europass) are un impact pozitiv semnificativ asupra motivației elevilor."
      ],
      pedagogicalApplication: "Introducerea unor ore de lucru manual cu hârtie pentru vizualizarea corpurilor rotunde și a poliedrelor."
    },
    photos: generateMediaForDay(6, 61, 72)
  }
];

export const ALL_PHOTOS: DayPhoto[] = DAILY_JOURNAL.flatMap((day) => day.photos);

export const PEDAGOGICAL_PILLARS: PedagogicalPillar[] = [
  {
    id: "interactive-tech",
    title: "Optimizarea utilizării ecranelor interactive",
    subtitle: "Analiza demersului didactic la disciplina Matematică",
    iconName: "Variable",
    observer: "Raport de observare a procesului de predare",
    summary: "În timpul asistențelor noastre, am documentat o utilizare fluentă și extrem de practică a echipamentelor tactile. Am remarcat că profesorul utilizează ecranul ca pe un instrument colaborativ: pașii de calcul sunt introduși direct pe suprafața digitală, păstrând o legătură permanentă cu ceea ce lucrează elevii la bănci.",
    highlights: [
      "Secvențele de calcul sunt dezvoltate incremental pe ecran, sprijinind ritmul propriu de înțelegere al elevilor.",
      "Se utilizează frecvent foi de fundal milimetric proiectate pentru o acuratețe superioară a desenului.",
      "Codificarea cromatică a variabilelor ajută enorm la diferențierea vizuală a termenilor în algebră.",
      "Aducerea elevilor la tablă are loc într-un climat relaxat, centrat pe înțelegere, nu pe sancționarea erorilor."
    ],
    classroomObservation: "Profesorul a acționat preponderent ca un facilitator. După expunerea problemei matematice, acesta a permis clasei să dezbată și să intervină activ pentru a propune direcțiile de rezolvare.",
    transferToRomania: "Ne propunem extinderea funcționalității tablelor interactive din dotare, transformându-le dintr-un simplu suport de proiecție într-un spațiu de operare directă și colaborativă.",
    techStack: ["Ecrane Tactile", "Diferențiere Cromatică", "Suport Geometrie Virtuală", "Colaborare"]
  },
  {
    id: "hybrid-learning",
    title: "Măsurători digitale integrate în laborator",
    subtitle: "Automatizarea colectării datelor experimentale",
    iconName: "Atom",
    observer: "Raport de observare a experimentelor fizice",
    summary: "Asistența la orele de științe ne-a demonstrat cât de eficientă este conectarea senzorilor fizici la terminalele mobile. Pe parcursul experimentelor, am văzut cum elevii au înregistrat variațiile de temperatură, iar dispozitivele au generat automat curbele grafice aferente pe tablete.",
    highlights: [
      "Infrastructura laboratorului asigură manevrarea rapidă și în siguranță a echipamentelor electronice.",
      "Transmisia datelor prin conexiuni wireless reduce semnificativ marja de eroare la preluarea valorilor numerice.",
      "Elevii accesează indicațiile experimentului direct de pe platforma școlii, eficientizând timpul de lucru.",
      "Graficele generate instant permit o corelare imediată și mult mai clară cu formulele teoretice."
    ],
    classroomObservation: "Am urmărit cum activitatea se desfășoară în perechi, elevii manifestând o autonomie deplină și o reală curiozitate în asamblarea și operarea truselor de senzori.",
    transferToRomania: "Considerăm necesară achiziționarea unor kit-uri de senzori wireless, compatibile cu telefoanele și tabletele, pentru a aduce această dinamică de lucru în laboratoarele noastre.",
    techStack: ["Senzori Wireless", "Afișaj Grafic pe Tablete", "Ergonomie", "Autonomie Elevi"]
  },
  {
    id: "collaborative-teamwork",
    title: "Valențele educației desfășurate în afara școlii",
    subtitle: "Învățarea prin sarcini de echipă și contexte reale",
    iconName: "Users2",
    observer: "Concluzii privind formarea transversală",
    summary: "Metodele non-formale aplicate pe parcursul mobilității ne-au demonstrat capacitatea de a consolida relațiile interpersonale și de a stimula abilitățile lingvistice. Activitățile de orientare în teren și atelierele au presupus o cooperare permanentă și esențială între elevii români și germani.",
    highlights: [
      "Atelierul de prelucrare a lânii a favorizat schimbul cultural și comunicarea informală între participanți.",
      "Aplicațiile de tip 'City Rallye' au solicitat capacități bune de planificare, decizie și orientare spațială.",
      "Parcurgerea pe jos a zonei de intersecție a celor trei granițe europene a fost un exercițiu civic profund.",
      "Activitățile practice interdisciplinare au dezvoltat vizibil spiritul de solidaritate al grupului."
    ],
    classroomObservation: "Am constatat cu bucurie că interacțiunea în limbile engleză și germană a devenit naturală tocmai datorită nevoii imediate de a finaliza o sarcină practică de echipă.",
    transferToRomania: "Planificăm structurarea unui calendar de activități extracurriculare care să pună accent pe orientarea în teren și pe exploatarea geografică a zonei noastre.",
    techStack: ["Educație Outdoor", "Planificare Strategică", "Colaborare Interculturală", "Abilități Civice"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    author: "Prof. Frunză Paul-Adrian",
    role: "Participant Job Shadowing",
    institution: "Catedra de Matematică & Informatică",
    quote: "Asistența la ore a evidențiat claritatea pe care o aduce instrumentarul digital atunci când este folosit metodic. Utilizarea asociațiilor cromatice pe ecranele tactile, pentru a clarifica metoda substituției în cadrul sistemelor de ecuații, este o practică deosebit de eficientă pe care intenționez să o adaptez pentru clasele gimnaziale din școala noastră.",
    pillar: "Didactica Matematicii"
  },
  {
    id: 2,
    author: "Prof. Petrașcu Traian",
    role: "Participant Job Shadowing",
    institution: "Catedra de Fizică & Științe",
    quote: "Posibilitatea de a urmări generarea graficelor în timp real pe o tabletă, sincron cu desfășurarea fizică a experimentului, transformă substanțial înțelegerea procesului de către elevi. Integrarea senzorilor digitali trebuie să devină o etapă prioritară în modernizarea propriului nostru demers didactic experimental.",
    pillar: "Fizică și Științe Aplicate"
  },
  {
    id: 3,
    author: "Director Prof. Sîngerozan Varvara",
    role: "Coordonator Proiect Erasmus+",
    institution: "Management Instituțional",
    quote: "Proiectul a certificat capacitatea elevilor și cadrelor noastre didactice de a se adapta și integra cu succes într-un sistem academic internațional. Calitatea colaborării directe pe care echipa noastră a avut-o cu reprezentanții școlii gazdă confirmă standardele solide ale educației oferite de Liceul Teoretic „Solomon Haliță”.",
    pillar: "Management și Colaborare"
  },
  {
    id: 4,
    author: "Prof. Hodoroga Florin",
    role: "Profesor Însoțitor",
    institution: "Catedra de Geografie",
    quote: "Studiul direct în teren, fie că analizăm reperele urbanistice din Köln, fie că documentăm configurația geografică de la Vaalserberg, garantează o asimilare vizuală mult superioară. Elevii au experimentat pe viu ideea de libertate europeană și diversitate a mediului, dincolo de formatul clasic al manualului.",
    pillar: "Educație Ecologică și Geografie"
  }
];