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
  {
    name: "Prof. Sîngerozan Varvara",
    title: "Director",
    role: "Coordonator Proiect",
    roleType: "coordinator",
    disciplines: "Management Educațional",
    jobShadowingFocus: "Analiza managementului școlar european și a strategiilor de internaționalizare.",
    description: "În calitate de coordonator al proiectului Erasmus+, am vizat stabilirea unui parteneriat educațional pe termen lung cu Geschwister-Scholl-Gymnasium și integrarea bunelor practici observate la nivelul managementului instituțional."
  },
  {
    name: "Prof. Hodoroga Florin",
    title: "Profesor",
    role: "Însoțitor Elevi",
    roleType: "escort",
    disciplines: "Geografie",
    jobShadowingFocus: "Integrarea metodelor de educație outdoor în studiul geografiei și ecologiei.",
    description: "Activitatea mea s-a concentrat pe organizarea și coordonarea aplicațiilor practice în teren, facilitând elevilor recunoașterea reperelor geografice și înțelegerea conceptelor de mediu din perspectivă practică."
  },
  {
    name: "Prof. Frunză Paul-Adrian",
    title: "Profesor",
    role: "Participant Job Shadowing",
    roleType: "shadowing",
    disciplines: "Matematică & Informatică",
    jobShadowingFocus: "Eficiența utilizării ecranelor interactive în predarea științelor exacte.",
    description: "Am asitat la orele de matematică pentru a documenta modalitățile prin care tehnologia tactilă poate sprijini rezolvarea exercițiilor la clasă, menținând în același timp rigoarea etapelor de calcul."
  },
  {
    name: "Prof. Petrașcu Traian",
    title: "Profesor",
    role: "Participant Job Shadowing",
    roleType: "shadowing",
    disciplines: "Fizică",
    jobShadowingFocus: "Digitalizarea experimentelor școlare și utilizarea senzorilor în laborator.",
    description: "Am urmărit integrarea instrumentelor de măsurare digitală în orele de fizică, analizând modul în care elevii generează și interpretează date experimentale utilizând tabletele și senzorii electronici."
  }
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
      location: "Locație de proiect",
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
    subtitle: "Vizită de studiu în centrul istoric și la structura Atomium",
    location: "Bruxelles",
    country: "Belgia",
    description: "Prima zi a mobilității a presupus deplasarea către Bruxelles. Delegația, formată din 4 cadre didactice și 14 elevi, a efectuat o vizită de studiu în centrul istoric Grand Place și a analizat structura Atomium.",
    extendedText: "La Atomium, am explicat elevilor modelul structural al celulei cristaline de fier, folosind construcția ca material didactic macroscopic. Ulterior, grupul și-a continuat deplasarea cu autocarul spre Aachen pentru formalitățile de cazare.",
    focus: "cultural",
    tags: ["Bruxelles", "Atomium", "Documentare Geografică"],
    schedule: [
      { time: "07:30", activity: "Aterizarea și organizarea logisticii de transport" },
      { time: "11:45", activity: "Parcurgerea unui traseu de recunoaștere în Grand Place" },
      { time: "14:15", activity: "Analiza structurii arhitecturale a monumentului Atomium" },
      { time: "17:30", activity: "Deplasarea spre Aachen și preluarea spațiilor de cazare" }
    ],
    takeaway: "Corelarea noțiunilor teoretice de structură atomică cu obiectivele arhitecturale reale.",
    accentColor: "from-blue-600 to-indigo-800",
    shadowingNotes: {
      observers: "Cadrele didactice însoțitoare",
      focusArea: "Utilizarea spațiilor neconvenționale ca resursă educațională",
      keyObservations: [
        "Elevii au asimilat mai eficient conceptele de fizică având la dispoziție modelul 3D la scară mare.",
        "S-a exersat capacitatea de orientare urbană utilizând rețeaua de transport local.",
        "Comunicarea în limba engleză a fost utilizată constant pe parcursul zilei."
      ],
      pedagogicalApplication: "Implementarea utilizării machetelor și modelelor fizice 3D în explicarea structurilor abstracte la clasă."
    },
    photos: generateMediaForDay(1, 1, 12)
  },
  {
    id: 2,
    dayNumber: 2,
    date: "Miercuri, 20 Mai 2026",
    title: "Asistență la ore și ateliere de sustenabilitate",
    subtitle: "Job Shadowing la disciplinele exacte și activități practice",
    location: "Geschwister-Scholl-Gymnasium",
    country: "Germania",
    description: "Am demarat activitățile oficiale în incinta școlii partenere. Elevii au participat la un atelier practic de prelucrare a lânii, iar noi am efectuat asistențe la orele de matematică și fizică.",
    extendedText: "Observațiile s-au axat pe modul în care cadrele didactice germane folosesc ecranele interactive. Am notat că acestea sunt utilizate ca suport grafic activ, în timp ce exercițiile sunt rezolvate concomitent și pe caietele de clasă ale elevilor.",
    focus: "green",
    tags: ["Job Shadowing", "Ecologie", "Integrare Tehnologică"],
    schedule: [
      { time: "08:30", activity: "Primirea oficială și ședința organizatorică" },
      { time: "09:30", activity: "Participarea elevilor la atelierul ecologic 'Think Green'" },
      { time: "11:00", activity: "Asistență la ora de matematică (utilizarea funcțiilor grafice)" },
      { time: "12:30", activity: "Asistență în laboratorul de fizică" },
      { time: "15:00", activity: "Sesiune de evaluare cu profesorii școlii gazdă" }
    ],
    takeaway: "Tehnologia reprezintă un instrument de sprijin vizual, neînlocuind fundamentul scris al învățării.",
    accentColor: "from-emerald-600 to-teal-800",
    shadowingNotes: {
      observers: "Catedra de Științe",
      focusArea: "Integrarea instrumentelor digitale în secvența didactică",
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
    title: "Activități de educație non-formală în mediul urban",
    subtitle: "Aachen City Rallye și analiza patrimoniului cultural",
    location: "Aachen",
    country: "Germania",
    description: "Ziua a fost dedicată activităților extracurriculare de orientare și recunoaștere. Prin activitatea 'Aachen City Rallye', elevii au lucrat în grupe pentru a parcurge un traseu documentar în centrul istoric.",
    extendedText: "Traseul a inclus analiza caracteristicilor fizico-chimice ale apei termale la Elisenbrunnen și studiul arhitecturii Domului din Aachen. Vizita la Centre Charlemagne ne-a oferit modele de bune practici privind prezentarea interactivă a informațiilor istorice.",
    focus: "cultural",
    tags: ["City Rallye", "Patrimoniu UNESCO", "Educație Non-formală"],
    schedule: [
      { time: "09:00", activity: "Startul aplicației practice de orientare urbană" },
      { time: "11:00", activity: "Documentare istorică la Domul din Aachen" },
      { time: "13:30", activity: "Analiza izvoarelor termale (Elisenbrunnen)" },
      { time: "15:00", activity: "Studiul hărților digitale la Centre Charlemagne" },
      { time: "17:00", activity: "Întâlnire de socializare cu un membru al comunității locale" }
    ],
    takeaway: "Abordarea interdisciplinară în spații publice facilitează asimilarea practică a conceptelor.",
    accentColor: "from-amber-600 to-orange-800",
    shadowingNotes: {
      observers: "Cadrele didactice însoțitoare",
      focusArea: "Eficiența aplicațiilor practice de tip 'Vânătoare de comori'",
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
    title: "Analiza metodelor de calcul și studiu geografic în teren",
    subtitle: "Sisteme de ecuații și deplasarea la granița triplă",
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
    title: "Aplicații de fizică și arhitectură în spațiul urban",
    subtitle: "Vizită de documentare tehnică și culturală în Köln",
    location: "Köln",
    country: "Germania",
    description: "Deplasarea în orașul Köln a avut drept scop analizarea elementelor de arhitectură monumentală și a infrastructurii tehnice. Obiectivele vizate au fost Parcul de Sculpturi și Catedrala Kölner Dom.",
    extendedText: "Catedrala gotică a servit drept model pentru explicarea conceptelor de mecanică statică, ilustrând modul în care arcele butante distribuie greutatea structurii. Traversarea fluviului Rin cu telegondola a permis o scurtă trecere în revistă a forțelor de tensiune și frecare.",
    focus: "cultural",
    tags: ["Fizica Structurilor", "Kölner Dom", "Mecanică Aplicată"],
    schedule: [
      { time: "09:00", activity: "Analiza spațială a obiectivelor din Parcul de Sculpturi" },
      { time: "11:30", activity: "Traseu pietonal pe podul feroviar Hohenzollern" },
      { time: "13:00", activity: "Studiul elementelor structurale la Kölner Dom" },
      { time: "15:30", activity: "Observarea mecanismelor de transport pe cablu (telegondola)" }
    ],
    takeaway: "Conceptele teoretice de mecanică pot fi explicate eficient utilizând exemple din ingineria civilă.",
    accentColor: "from-teal-600 to-indigo-800",
    shadowingNotes: {
      observers: "Membrii delegației",
      focusArea: "Identificarea principiilor fizicii în mediul construit",
      keyObservations: [
        "Corelarea vizuală între înălțimea turlelor și necesitatea elementelor de susținere laterale.",
        "Discuțiile libere pe marginea funcționării telecabinei au consolidat noțiunile de fizică clasa a IX-a.",
        "Am remarcat funcția estetică, dar și tehnică a instalațiilor din oțel din parc."
      ],
      pedagogicalApplication: "Includerea imaginilor de detaliu cu elemente arhitecturale în prezentările destinate orelor de fizică."
    },
    photos: generateMediaForDay(5, 49, 60)
  },
  {
    id: 6,
    dayNumber: 6,
    date: "Sâmbătă, 23 Mai 2026",
    title: "Sinteza metodelor și validarea rezultatelor",
    subtitle: "Atelier de geometrie spațială și certificarea Europass",
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
    title: "Integrarea Eloanelor Interactive",
    subtitle: "Analiza demersului didactic la disciplina Matematică",
    iconName: "Variable",
    observer: "Raport de observare a actului predării",
    summary: "În timpul asistențelor, am documentat o utilizare fluentă a echipamentelor tactile. Cadrul didactic utilizează ecranul ca pe un instrument colaborativ; pașii de calcul sunt introduși direct pe suprafața digitală cu ajutorul instrumentelor geometrice virtuale.",
    highlights: [
      "Secvențele de calcul sunt dezvoltate incremental pe ecran, sub îndrumarea profesorului.",
      "Cadrul didactic utilizează foi de fundal milimetric proiectate pentru acuratețea desenului.",
      "Codificarea cromatică a variabilelor sprijină diferențierea vizuală rapidă.",
      "Participarea elevilor la tablă are loc într-un climat educațional centrat pe colaborare."
    ],
    classroomObservation: "Profesorul acționează preponderent ca facilitator. După expunerea problemei, acesta permite clasei să dezbată și să propună algoritmii de rezolvare.",
    transferToRomania: "Intenționăm extinderea funcționalității tablelor interactive din dotare, trecând de la rolul pasiv (proiecție) la operarea directă de către elevi.",
    techStack: ["Ecrane Tactile", "Diferențiere Cromatică", "Soft Geometrie", "Colaborare Activă"]
  },
  {
    id: "hybrid-learning",
    title: "Măsurători digitale în laborator",
    subtitle: "Automatizarea colectării de date experimentale",
    iconName: "Atom",
    observer: "Raport de observare a experimentelor fizice",
    summary: "Asistența la orele de științe a reliefat eficiența conectării senzorilor fizici la terminale mobile. Pe parcursul experimentelor termice, elevii au înregistrat variațiile de temperatură, iar dispozitivele au generat automat curbele aferente pe ecrane.",
    highlights: [
      "Infrastructura laboratorului este proiectată pentru siguranță și manevrare rapidă a echipamentelor.",
      "Transmisia datelor prin conexiuni wireless reduce marja de eroare la preluarea valorilor.",
      "Elevii accesează permanent fișele de lucru stocate pe platforma școlii.",
      "Graficele sunt analizate imediat, facilitând corelarea cu ecuațiile teoretice."
    ],
    classroomObservation: "Activitatea se desfășoară în perechi, elevii manifestând autonomie deplină în asamblarea și operarea truselor de senzori.",
    transferToRomania: "Propunem achiziționarea unor kit-uri de senzori wireless compatibile cu terminalele mobile pentru modernizarea laboratoarelor proprii.",
    techStack: ["Senzori Wireless", "Tablete Integrate", "Ergonomie", "Autonomie"]
  },
  {
    id: "collaborative-teamwork",
    title: "Educația în afara spațiului școlar",
    subtitle: "Învățarea bazată pe sarcini de echipă și contexte reale",
    iconName: "Users2",
    observer: "Concluzii privind formarea transversală",
    summary: "Metodele non-formale aplicate pe parcursul mobilității au demonstrat o eficiență sporită în consolidarea relațiilor interpersonale și a abilităților lingvistice. Atât atelierele practice, cât și activitățile de orientare în teren au implicat cooperarea directă între elevi.",
    highlights: [
      "Atelierul de reciclare a favorizat comunicarea informală între elevii români și germani.",
      "Aplicațiile de orientare (City Rallye) au solicitat abilități decizionale și planificare spațială.",
      "Traseul comun pe teritoriul a trei state europene a constituit un exercițiu clar de conștientizare civică.",
      "Activitățile practice precum origami-ul au stimulat gândirea procedurală."
    ],
    classroomObservation: "Interacțiunea în limbi străine a devenit naturală prin prisma obiectivului comun impus de sarcinile practice de grup.",
    transferToRomania: "Planificăm structurarea unui calendar de activități extracurriculare centrate pe aplicații practice și orientare în proximitatea geografică a liceului.",
    techStack: ["Educație Outdoor", "Planificare", "Lucru în Echipă", "Abilități Civice"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    author: "Prof. Frunză Paul-Adrian",
    role: "Participant Job Shadowing",
    institution: "Disciplina Matematică",
    quote: "Asistența la orele de matematică a evidențiat claritatea pe care o aduce tehnologia atunci când este folosită metodic. Utilizarea culorilor pentru a explica metoda substituției pe tabla interactivă este o practică pe care intenționez să o aplic direct la clasele gimnaziale.",
    pillar: "Didactica Matematicii"
  },
  {
    id: 2,
    author: "Prof. Petrașcu Traian",
    role: "Participant Job Shadowing",
    institution: "Disciplina Fizică",
    quote: "Posibilitatea de a urmări generarea unui grafic pe tabletă, sincron cu desfășurarea experimentului real, modifică fundamental înțelegerea fenomenelor. Integrarea senzorilor mobili trebuie să devină o prioritate pentru standardizarea laboratoarelor noastre.",
    pillar: "Fizică și Științe Aplicate"
  },
  {
    id: 3,
    author: "Prof. Sîngerozan Varvara",
    role: "Director / Coordonator Proiect",
    institution: "Management Școlar",
    quote: "Proiectul a dovedit capacitatea elevilor noștri de a se integra cu succes într-un mediu academic european. Modul în care au colaborat cu elevii școlii gazdă atestă calitatea actului educațional pe care îl desfășurăm la Liceul Teoretic „Solomon Haliță”.",
    pillar: "Management și Colaborare"
  },
  {
    id: 4,
    author: "Prof. Hodoroga Florin",
    role: "Profesor Însoțitor",
    institution: "Disciplina Geografie",
    quote: "Studiul direct în teren, fie că discutăm de granița triplă de la Vaalserberg sau de structura urbană din Köln, asigură o fixare net superioară a conceptelor geografice comparativ cu metodele expozitive tradiționale.",
    pillar: "Educație Ecologică"
  }
];