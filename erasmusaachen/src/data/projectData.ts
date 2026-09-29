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
    title: "Documentare urbană și științifică în Bruxelles",
    subtitle: "Analiza patrimoniului cultural și a structurii Atomium",
    location: "Bruxelles",
    country: "Belgia",
    description: "Am debutat mobilitatea cu deplasarea spre Bruxelles, unde am realizat o primă activitate de recunoaștere culturală și științifică. Alături de grupul de elevi, am analizat arhitectura istorică din Grand Place și am explorat îndeaproape structura monumentală Atomium.",
    extendedText: "Observarea directă a modelului cristalin de fier mărit la scară gigantică ne-a permis să realizăm corelații imediate între conceptele de fizică atomică și arhitectură. Această primă experiență a consolidat coeziunea grupului și a setat un ritm excelent pentru activitățile didactice ce urmau să se desfășoare la școala gazdă din Aachen.",
    focus: "cultural",
    tags: ["Bruxelles", "Atomium", "Documentare"],
    schedule: [
      { time: "07:30", activity: "Aterizarea la Bruxelles și organizarea logisticii" },
      { time: "11:45", activity: "Recunoaștere urbană în zona centrală Grand Place" },
      { time: "14:15", activity: "Analiza spațială a structurii Atomium" },
      { time: "17:30", activity: "Deplasarea către Aachen și acomodarea" }
    ],
    takeaway: "Corelarea noțiunilor teoretice cu observațiile din teren facilitează o asimilare rapidă și profundă a informației.",
    accentColor: "from-blue-600 to-indigo-800",
    shadowingNotes: {
      observers: "Noi, profesorii însoțitori",
      focusArea: "Exploatarea resurselor educaționale neconvenționale",
      keyObservations: [
        "Analiza modelelor fizice de mari dimensiuni a facilitat conexiunile imediate cu noțiunile abstracte de la clasă.",
        "Am remarcat dezvoltarea abilităților de orientare spațială ale elevilor prin utilizarea hărților de transport urban.",
        "Activitățile de tip 'ice-breaking' desfășurate în mediul non-formal au asigurat o dinamică de grup excelentă."
      ],
      pedagogicalApplication: "Ne propunem să utilizăm cu o frecvență mai mare machetele și vizualizările 3D în explicarea structurilor complexe."
    },
    photos: generateMediaForDay(1, 1, 12)
  },
  {
    id: 2,
    dayNumber: 2,
    date: "Miercuri, 20 Mai 2026",
    title: "Sesiuni de asistență la ore și ateliere practice",
    subtitle: "Integrarea tehnologiei în predare și abordări ecologice",
    location: "Geschwister-Scholl-Gymnasium",
    country: "Germania",
    description: "Prima zi de activitate în cadrul Geschwister-Scholl-Gymnasium ne-a oferit prilejul să asistăm direct la orele de științe exacte. În timp ce noi am documentat utilizarea ecranelor interactive, elevii noștri s-au integrat participând la un atelier ecologic de valorificare a lânii naturale.",
    extendedText: "Am apreciat în mod deosebit echilibrul pe care colegii germani îl mențin între inovația digitală și rigoarea tradițională. Ecranul tactil este folosit ca un spațiu colaborativ de modelare matematică, însă toți pașii sunt notați cu precizie de către elevi în caietele de lucru, asigurând astfel o fixare profundă a algoritmilor.",
    focus: "green",
    tags: ["Job Shadowing", "Atelier Ecologic", "Ecrane Interactive"],
    schedule: [
      { time: "08:30", activity: "Întâlnirea oficială cu echipa managerială a școlii gazdă" },
      { time: "09:30", activity: "Participarea elevilor la atelierul practic 'Think Green'" },
      { time: "11:00", activity: "Asistență la ora de matematică: aplicații pe ecrane tactile" },
      { time: "12:30", activity: "Documentarea instrumentarului din laboratorul de fizică" },
      { time: "15:00", activity: "Analiza metodelor didactice observate pe parcursul zilei" }
    ],
    takeaway: "Inovația tehnologică este cu adevărat valoroasă atunci când sprijină logica și exercițiul individual al elevului.",
    accentColor: "from-emerald-600 to-teal-800",
    shadowingNotes: {
      observers: "Catedra de Științe Exacte",
      focusArea: "Dinamica predării cu ajutorul instrumentelor digitale",
      keyObservations: [
        "Ecranele tactile sunt utilizate ca instrumente colaborative; profesorul ghidează procesul, iar elevii intervin direct pe platforma digitală.",
        "Acuratețea desenelor geometrice este susținută de integrarea instrumentelor virtuale și a fundalurilor milimetrice pe ecran.",
        "Am apreciat organizarea infrastructurii școlare, care sprijină ordinea și disciplina fără a impune o atmosferă rigidă."
      ],
      pedagogicalApplication: "Adoptarea unor metode prin care fișele de lucru tipărite să fie perfect sincronizate vizual cu interfețele digitale proiectate la clasă."
    },
    photos: generateMediaForDay(2, 13, 24)
  },
  {
    id: 3,
    dayNumber: 3,
    date: "Joi, 21 Mai 2026",
    title: "Aplicații de educație non-formală în mediul urban",
    subtitle: "Raliul cultural prin Aachen și explorarea patrimoniului local",
    location: "Aachen",
    country: "Germania",
    description: "Am transferat procesul educațional dincolo de pereții clasei, organizând o aplicație practică de tip 'City Rallye' în centrul istoric al orașului Aachen. Elevii au lucrat independent în echipe, documentând obiective de patrimoniu precum Domul Carolingian.",
    extendedText: "Traseul educativ ne-a purtat și la izvoarele termale Elisenbrunnen, unde am purtat discuții aplicate despre termodinamică și compoziție chimică. Ulterior, vizita la Centre Charlemagne ne-a demonstrat eficiența cu care muzeografia modernă și interfețele digitale pot face istoria și geografia extrem de atractive pentru noile generații.",
    focus: "cultural",
    tags: ["Orientare", "Aachen City Rallye", "Patrimoniu UNESCO"],
    schedule: [
      { time: "09:00", activity: "Desfășurarea aplicației practice de orientare în echipe" },
      { time: "11:00", activity: "Documentarea reperelor arhitecturale de la Domul din Aachen" },
      { time: "13:30", activity: "Analiza apei termale la complexul Elisenbrunnen" },
      { time: "15:00", activity: "Studiul hărților dinamice din interiorul Centre Charlemagne" },
      { time: "17:00", activity: "Întâlnire cu un membru al diasporei, absolventă a liceului nostru" }
    ],
    takeaway: "Deplasarea fizică și rezolvarea de sarcini în spațiul urban sporesc masiv interesul pentru asimilarea de noi informații.",
    accentColor: "from-amber-600 to-orange-800",
    shadowingNotes: {
      observers: "Cadrele didactice însoțitoare",
      focusArea: "Eficiența sarcinilor de lucru în spații deschise",
      keyObservations: [
        "Delegarea responsabilității către echipele de elevi a stimulat în mod direct comunicarea și colaborarea în limba engleză.",
        "Tranziția între reperele istorice (Domul) și cele științifice (izvoarele) a asigurat o abordare interdisciplinară autentică.",
        "Interfețele digitale din spațiile muzeale captează imediat atenția vizuală și structurează foarte clar informația."
      ],
      pedagogicalApplication: "Conceperea unor trasee de orientare și recunoaștere geografică și istorică pentru elevii noștri, direct în localitate."
    },
    photos: generateMediaForDay(3, 25, 36)
  },
  {
    id: 4,
    dayNumber: 4,
    date: "Vineri, 22 Mai 2026",
    title: "Analiza metodelor de calcul și deplasarea la frontieră",
    subtitle: "Sisteme de ecuații și aplicația de teren la Dreiländereck",
    location: "Aachen & Vaalserberg",
    country: "Germania · Belgia · Olanda",
    description: "Sesiunea noastră de asistență a continuat cu o oră de matematică dedicată sistemelor de ecuații, care s-a remarcat printr-o claritate metodică exemplară. În a doua parte a zilei, am organizat o drumeție geografică la Vaalserberg.",
    extendedText: "La catedră, am apreciat metoda evidențierii cromatice a variabilelor matematice, o tehnică vizuală extrem de eficientă pentru înțelegerea principiului substituției. Apoi, la punctul de intersecție a granițelor (Dreiländereck), am trăit alături de elevi o lecție excelentă despre libertatea de mișcare și coeziunea spațiului european.",
    focus: "stem",
    tags: ["Metodica Matematicii", "Geografie Aplicată", "Dreiländereck"],
    schedule: [
      { time: "08:30", activity: "Asistență la matematică: predarea sistemelor cu două necunoscute" },
      { time: "11:45", activity: "Integrarea în dinamica școlii și activități recreative" },
      { time: "13:30", activity: "Parcurgerea traseului prin rezervația naturală spre Olanda" },
      { time: "16:00", activity: "Identificarea coordonatelor la granița celor trei state" }
    ],
    takeaway: "Structurarea vizuală a demonstrațiilor la tablă sprijină în mod direct procesul de prelucrare cognitivă a elevilor.",
    accentColor: "from-blue-700 to-cyan-800",
    shadowingNotes: {
      observers: "Cadrele didactice de la disciplinele exacte",
      focusArea: "Optimizarea explicațiilor în predarea algebrei",
      keyObservations: [
        "Evidențierea cromatică a necunoscutelor simplifică substanțial efortul necesar în aplicarea metodei substituției.",
        "Cadrul didactic alocă un timp redus expunerii frontale, prioritizând exercițiul independent și munca la tablă.",
        "Deplasarea fizică la granița triplă a consolidat conștiința identității europene mai eficient decât o dezbatere teoretică."
      ],
      pedagogicalApplication: "Utilizarea constantă a codurilor de culoare pe tablele noastre pentru a clarifica relațiile dintre termenii matematici."
    },
    photos: generateMediaForDay(4, 37, 48)
  },
  {
    id: 5,
    dayNumber: 5,
    date: "Sâmbătă, 23 Mai 2026",
    title: "Studiu interdisciplinar în arhitectură și infrastructură",
    subtitle: "Vizită documentară în Köln: Parcul de Sculpturi și Catedrala",
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
    takeaway: "Exemplele practice extrase din arhitectură și infrastructură clarifică excepțional noțiunile abstracte de fizică.",
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
    title: "Sinteza formării și validarea rezultatelor obținute",
    subtitle: "Atelier de geometrie spațială, masa festivă și certificările Europass",
    location: "Geschwister-Scholl-Gymnasium",
    country: "Germania",
    description: "Am concluzionat programul de mobilitate cu o ultimă asistență la ore și cu un atelier practic de origami matematic. Aici, elevii au construit poliedre regulate din hârtie, îmbinând abilitățile manuale cu precizia geometrică.",
    extendedText: "Săptămâna s-a încheiat într-un cadru oficial, cu evaluarea metodelor didactice observate și ceremonia de înmânare a certificatelor Europass Mobilitate. Această validare instituțională, urmată de o masă de rămas-bun oferită de gazdele noastre, a încununat un parteneriat educațional pe care suntem dornici să îl consolidăm.",
    focus: "cultural",
    tags: ["Evaluare Finală", "Origami", "Certificări Europass"],
    schedule: [
      { time: "08:30", activity: "Abordarea geometriei prin tehnica construcțiilor din hârtie" },
      { time: "10:30", activity: "Ultima sesiune de asistență și dezbateri metodice" },
      { time: "12:00", activity: "Acordarea solemnă a certificatelor de competență europeană" },
      { time: "13:30", activity: "Masa festivă și discuțiile de finalizare a parteneriatului" }
    ],
    takeaway: "Validarea academică a competențelor generează un puternic sentiment de responsabilitate și motivare pentru întregul grup.",
    accentColor: "from-indigo-600 to-emerald-700",
    shadowingNotes: {
      observers: "Echipa de implementare a proiectului",
      focusArea: "Dezvoltarea abilităților complementare",
      keyObservations: [
        "Abordarea geometriei prin tehnica origami a demonstrat necesitatea corelării dintre raționamentul matematic și motricitatea fină.",
        "Sarcinile de construcție au favorizat puternic învățarea prin colaborare între elevi.",
        "Momentul decernării certificatelor Europass a generat un nivel ridicat de satisfacție și a marcat succesul efortului depus."
      ],
      pedagogicalApplication: "Integrarea lucrului cu materiale tangibile (hârtie, modele) pentru vizualizarea tridimensională a formelor geometrice."
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