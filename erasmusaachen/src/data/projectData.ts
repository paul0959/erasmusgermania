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
  { name: "Prof. Sîngerozan Varvara", title: "Director", role: "Coordonator Proiect", roleType: "coordinator", disciplines: "Management Educațional", jobShadowingFocus: "Am urmărit organizarea administrativă a școlii și strategiile europene.", description: "Ca director, am pus bazele unui parteneriat educațional solid cu școala germană. Colaborarea dintre elevii noștri și cei gazdă a fost exemplară." },
  { name: "Prof. Hodoroga Florin", title: "Profesor", role: "Însoțitor Elevi", roleType: "escort", disciplines: "Geografie", jobShadowingFocus: "M-a interesat modul în care natura devine o sală de clasă.", description: "A fost o bucurie să organizez aplicațiile practice pe teren. Să îi văd pe elevi recunoscând formele de relief direct în mijlocul naturii a fost o lecție în sine." },
  { name: "Prof. Frunză Paul-Adrian", title: "Profesor", role: "Participant Job Shadowing", roleType: "shadowing", disciplines: "Matematică & Informatică", jobShadowingFocus: "Am documentat eficiența tablelor interactive la lecțiile de algebră și geometrie.", description: "Am asistat cu mare interes la orele de matematică. Modul în care elevii folosesc tehnologia, păstrând în același timp exercițiul scrisului de mână, ne-a inspirat profund." },
  { name: "Prof. Petrașcu Traian", title: "Profesor", role: "Participant Job Shadowing", roleType: "shadowing", disciplines: "Fizică", jobShadowingFocus: "Integrarea senzorilor digitali în experimentele de laborator.", description: "Laboratorul de fizică m-a impresionat plăcut. Am observat cum elevii efectuează experimente clasice, iar datele sunt preluate instantaneu de senzori mobili și afișate pe tablete." }
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
      title: `Moment surprins în imagini`,
      caption: `Un crâmpei din activitățile noastre zilnice.`,
      location: "Aachen & Împrejurimi",
      category: 'community',
      imageSrc: `/${i}.${isVideo ? 'mp4' : 'jpg'}`,
      mediaType: isVideo ? 'video' : 'image',
      fallbackType: 'nature',
      cameraMeta: "Arhiva Noastră",
      authorCredit: "Echipa Solomon Haliță"
    });
  }
  return mediaItems;
};

export const DAILY_JOURNAL: DayJournal[] = [
  {
    id: 1,
    dayNumber: 1,
    date: "Marți, 19 Mai 2026",
    title: "Aterizarea în Belgia și primele descoperiri în Bruxelles",
    subtitle: "Am luat la pas Grand Place și am ținut o lecție la baza Atomium-ului",
    location: "Bruxelles",
    country: "Belgia",
    description: "Am pornit la drum cu multă voie bună! Imediat ce am ajuns în Bruxelles, am luat pulsul orașului plimbându-ne prin frumosul centru istoric Grand Place. Apoi, am vizitat impresionanta structură Atomium.",
    extendedText: "Ne-a bucurat enorm reacția copiilor atunci când le-am explicat că structura uriașă de oțel din fața lor este, de fapt, celula cristalină de fier mărită de miliarde de ori. A fost prima noastră discuție de științe, chiar sub cerul liber, înainte de a ne îndrepta spre orașul gazdă, Aachen.",
    focus: "cultural",
    tags: ["Bruxelles", "Atomium", "Descoperire"],
    schedule: [
      { time: "07:30", activity: "Aterizarea la Bruxelles și organizarea bagajelor" },
      { time: "11:45", activity: "Plimbare pe străzile din Grand Place" },
      { time: "14:15", activity: "Mici lecții de fizică și arhitectură la Atomium" },
      { time: "17:30", activity: "Călătoria spre Germania și cazarea la hotel" }
    ],
    takeaway: "Bucuria și entuziasmul elevilor noștri ne-au arătat încă din prima zi că ne așteaptă un proiect reușit.",
    accentColor: "from-blue-600 to-indigo-800",
    shadowingNotes: {
      observers: "Noi, profesorii însoțitori",
      focusArea: "Cum învățăm privind clădirile din jur",
      keyObservations: [
        "Când le-am explicat noțiunile de fizică având obiectul real în fața ochilor, au fost mult mai atenți.",
        "S-au descurcat de minune să se orienteze folosind harta metroului local.",
        "Limba engleză a fost folosită cu încredere pe parcursul întregii zile."
      ],
      pedagogicalApplication: "Ne dorim să aducem la clasă machete și materiale vizuale palpabile atunci când le predăm concepte abstracte."
    },
    photos: generateMediaForDay(1, 1, 12)
  },
  {
    id: 2,
    dayNumber: 2,
    date: "Miercuri, 20 Mai 2026",
    title: "Integrare și primele asistențe la școala parteneră",
    subtitle: "Am intrat în clase și am lucrat la atelierul de reciclare",
    location: "Geschwister-Scholl-Gymnasium",
    country: "Germania",
    description: "Am pășit cu emoție în școala care avea să ne fie gazdă. În timp ce elevii noștri s-au împrietenit rapid cu colegii germani la un atelier de lucru manual, noi, profesorii, ne-am așezat în bănci și am asistat la primele ore de matematică și fizică.",
    extendedText: "Ne-a impresionat mult felul în care colegii germani îmbină folosirea ecranelor interactive cu scrisul clasic. Am luat notițe atente și am apreciat ritmul calm al orelor, dar și dotările practice de pe holuri, cum ar fi dulapurile individuale pentru elevi.",
    focus: "green",
    tags: ["Prima zi de școală", "Reciclare", "Ore Interactive"],
    schedule: [
      { time: "08:30", activity: "Ne-am cunoscut gazdele și am stabilit programul" },
      { time: "09:30", activity: "Elevii au participat la atelierul ecologic 'Think Green'" },
      { time: "11:00", activity: "Noi am asistat la o oră foarte interactivă de matematică" },
      { time: "12:30", activity: "Am vizitat laboratoarele de fizică și chimie" },
      { time: "15:00", activity: "Am schimbat primele impresii didactice la o cafea" }
    ],
    takeaway: "Tehnologia de la clasă are scopul de a ajuta gândirea copilului, nu de a o înlocui.",
    accentColor: "from-emerald-600 to-teal-800",
    shadowingNotes: {
      observers: "Catedra de Științe",
      focusArea: "Eficiența utilizării tablelor inteligente",
      keyObservations: [
        "Profesorul modifică datele problemei direct pe tablă cu degetul, obținând un grafic nou pe loc.",
        "Elevii sunt mereu chemați la ecran pentru a propune soluții.",
        "Liniștea și ordinea din clasă oferă un mediu de lucru excelent."
      ],
      pedagogicalApplication: "Abia așteptăm să pregătim fișe de lucru care să completeze ceea ce proiectăm noi la clasă pe tabla inteligentă."
    },
    photos: generateMediaForDay(2, 13, 24)
  },
  {
    id: 3,
    dayNumber: 3,
    date: "Joi, 21 Mai 2026",
    title: "Lecții deschise pe străzile din Aachen",
    subtitle: "Am înlocuit băncile cu un traseu educativ prin oraș",
    location: "Aachen",
    country: "Germania",
    description: "Astăzi, am scos învățarea din sala de clasă. Am organizat un 'City Rallye', o activitate în care elevii s-au împărțit în echipe și au explorat centrul vechi al orașului Aachen căutând răspunsuri și rezolvând sarcini.",
    extendedText: "Ne-am oprit la izvoarele Elisenbrunnen, unde am vorbit despre temperatura și compoziția chimică a apei termale, apoi am vizitat maiestuosul Dom. Un moment deosebit de cald a fost revederea cu o fostă elevă a liceului nostru, stabilită de mult timp aici, care ne-a așteptat la gelateria ei.",
    focus: "cultural",
    tags: ["Orientare Urbană", "Domul din Aachen", "Bucuria Revederii"],
    schedule: [
      { time: "09:00", activity: "Elevii primesc hărțile și pornesc pe traseu" },
      { time: "11:00", activity: "Lecție de istorie în fața și în interiorul Domului" },
      { time: "13:30", activity: "Analizăm apa termală la Elisenbrunnen" },
      { time: "15:00", activity: "Am vizitat muzeul foarte modern Centre Charlemagne" },
      { time: "17:00", activity: "Am mâncat înghețată alături de fosta noastră elevă" }
    ],
    takeaway: "Uneori, o plimbare tematică prin oraș te poate învăța istorie și geografie mult mai bine decât un manual.",
    accentColor: "from-amber-600 to-orange-800",
    shadowingNotes: {
      observers: "Toți profesorii însoțitori",
      focusArea: "Beneficiile activităților practice în aer liber",
      keyObservations: [
        "Sarcina de a găsi obiective pe hartă i-a determinat să colaboreze și să comunice constant.",
        "Ecranele interactive din muzeu, care ilustrează hărți dinamice, le-au captat imediat atenția.",
        "Efortul fizic a fost răsplătit prin relaxarea și veselia din grup."
      ],
      pedagogicalApplication: "Ne propunem să desenăm un traseu educativ cu indicii chiar pe străzile din Sângeorz-Băi."
    },
    photos: generateMediaForDay(3, 25, 36)
  },
  {
    id: 4,
    dayNumber: 4,
    date: "Vineri, 22 Mai 2026",
    title: "O oră excelentă de mate și granița celor trei țări",
    subtitle: "Sisteme de ecuații colorate și o drumeție prin pădure",
    location: "Aachen & Vaalserberg",
    country: "Germania · Belgia · Olanda",
    description: "Am continuat asistența la clase participând la o oră despre sistemele de ecuații, o lecție care nouă, profesorilor de profil, ne-a plăcut enorm. După-amiază, am plecat toți la pas spre punctul de întâlnire a trei state.",
    extendedText: "La clasă, profesorul german a folosit culori pe ecranul digital pentru a evidenția necunoscutele (x și y), explicând pas cu pas metoda substituției. Mai târziu, în drumeția noastră la Vaalserberg, i-am văzut pe copii stând cu un picior în Germania și cu altul în Olanda, un moment frumos în care am simțit cu toții libertatea pe care ne-o oferă Europa.",
    focus: "stem",
    tags: ["Ecuații și Culori", "Natură", "Europa Fără Granițe"],
    schedule: [
      { time: "08:30", activity: "Am luat notițe la o oră de algebră foarte bine structurată" },
      { time: "11:45", activity: "Am cântat cu toții 'La mulți ani' colegei noastre" },
      { time: "13:30", activity: "Am urcat prin pădure spre granița olandeză" },
      { time: "16:00", activity: "Am făcut poze și ne-am bucurat de natură la granița triplă" }
    ],
    takeaway: "Modul în care organizezi vizual informația pentru elev este cheia înțelegerii ei.",
    accentColor: "from-blue-700 to-cyan-800",
    shadowingNotes: {
      observers: "Catedra de Matematică & Fizică",
      focusArea: "Rolul culorilor și al organizării tablei la ore",
      keyObservations: [
        "Folosirea galbenului și albastrului pentru a deosebi necunoscutele din ecuație face explicația mult mai ușor de urmărit.",
        "Profesorul nu vorbește continuu; predă o etapă, apoi lasă timp clasei să exerseze.",
        "Atmosfera încurajează întrebările, iar greșeala la tablă este văzută ca un pas firesc în învățare."
      ],
      pedagogicalApplication: "La întoarcere, vrem să aplicăm imediat metoda culorilor dinamice pe tablele noastre inteligente."
    },
    photos: generateMediaForDay(4, 37, 48)
  },
  {
    id: 5,
    dayNumber: 5,
    date: "Sâmbătă, 23 Mai 2026",
    title: "Copleșiți de arhitectura gotică a marelui Dom",
    subtitle: "O zi în Köln, între artă modernă și inginerie medievală",
    location: "Köln",
    country: "Germania",
    description: "Am dedicat această zi superbei metropole Köln. Dimineața am făcut o plimbare liniștită printr-un parc plin de sculpturi contemporane din oțel, încercând să le înțelegem formele geometrice.",
    extendedText: "Momentul culminant a fost când am ajuns în fața Catedralei Kölner Dom. Am profitat de ocazie și le-am explicat elevilor, pe scurt, cum au reușit constructorii medievali să sprijine acele turnuri uriașe folosind forțele fizicii și arcele. Ziua s-a încheiat minunat, plutind deasupra fluviului Rin cu telegondola.",
    focus: "cultural",
    tags: ["Kölner Dom", "Plimbare cu Telegondola", "Artă și Fizică"],
    schedule: [
      { time: "09:00", activity: "Am descoperit instalațiile inedite din Parcul de Sculpturi" },
      { time: "11:30", activity: "Am admirat fluviul Rin de pe faimosul pod feroviar" },
      { time: "13:00", activity: "Am vizitat catedrala și am discutat despre arhitectura sa" },
      { time: "15:30", activity: "O scurtă lecție de mecanică în timp ce mergeam cu telegondola" }
    ],
    takeaway: "Uneori, cele mai bune exemple pentru o lecție de fizică le găsești privind arhitectura din jurul tău.",
    accentColor: "from-teal-600 to-indigo-800",
    shadowingNotes: {
      observers: "Toți profesorii participanți",
      focusArea: "Exemple practice de fizică în arhitectură",
      keyObservations: [
        "Mărimea catedralei a stârnit foarte multe întrebări practice despre cum a fost construită.",
        "Călătoria cu telegondola a fost un bun prilej să discutăm despre tensiunea în cabluri și frecare.",
        "Elevii au apreciat pauzele de la teoria strictă și explicațiile pe înțelesul lor."
      ],
      pedagogicalApplication: "La fizică, vom integra mai multe imagini cu clădiri și poduri reale pentru a le explica copiilor teoria forțelor."
    },
    photos: generateMediaForDay(5, 49, 60)
  },
  {
    id: 6,
    dayNumber: 6,
    date: "Sâmbătă, 23 Mai 2026",
    title: "Matematică prin origami și momente emoționante la final",
    subtitle: "Atelier creativ, diplome Europass și masa de rămas-bun",
    location: "Geschwister-Scholl-Gymnasium",
    country: "Germania",
    description: "Orice experiență memorabilă are și un final. Ne-am adunat cu toții la școală pentru ultima activitate împreună: copiii au folosit hârtia colorată (origami) pentru a învăța practic cum se formează corpurile geometrice spațiale.",
    extendedText: "Ne-am luat rămas-bun de la noii noștri colegi germani cu multe îmbrățișări. Conducerea școlii ne-a onorat cu o masă festivă și ne-a înmânat solemn, nouă și elevilor, certificatele Europass. Ne întoarcem spre casă mult mai inspirați.",
    focus: "cultural",
    tags: ["Origami", "Diplome Europass", "Masa Festivă"],
    schedule: [
      { time: "08:30", activity: "Am îmbinat geometria cu lucrul manual la atelierul de origami" },
      { time: "10:30", activity: "Ne-am luat notițe la o ultimă oră foarte interesantă" },
      { time: "12:00", activity: "Moment solemn: am primit certificatele Europass" },
      { time: "13:30", activity: "Am povestit, am mâncat și ne-am mulțumit unii altora" }
    ],
    takeaway: "Validarea muncii prin certificate ne-a făcut pe toți să ne simțim mândri de ceea ce am realizat.",
    accentColor: "from-indigo-600 to-emerald-700",
    shadowingNotes: {
      observers: "Echipa de proiect",
      focusArea: "Utilizarea lucrului manual în fixarea geometriei în spațiu",
      keyObservations: [
        "Metoda origami le cere elevilor multă precizie și răbdare.",
        "S-au ajutat reciproc foarte mult pentru a reuși să asambleze figurile corect.",
        "Aprecierea muncii lor printr-o mică festivitate i-a bucurat enorm și le-a crescut încrederea în sine."
      ],
      pedagogicalApplication: "Promitem să aducem hârtia colorată la orele de geometrie spațială din Sângeorz-Băi pentru a face predarea mai prietenoasă."
    },
    photos: generateMediaForDay(6, 61, 72)
  }
];

export const ALL_PHOTOS: DayPhoto[] = DAILY_JOURNAL.flatMap((day) => day.photos);

export const PEDAGOGICAL_PILLARS: PedagogicalPillar[] = [
  {
    id: "interactive-tech",
    title: "Cum au transformat ecranele în caiete",
    subtitle: "Concluziile noastre de la orele de matematică",
    iconName: "Variable",
    observer: "Ce ne-a atras atenția în mod deosebit",
    summary: "Când am intrat în clasa de matematică, ne-a bucurat enorm să vedem naturalețea profesorului. Nu stătea izolat în spatele catedrei, ci lucra cot la cot cu elevii, pe un ecran mare, desenând cu ei unghiuri folosind un raportor virtual.",
    highlights: [
      "Copiii nu scriu mecanic după dictare; profesorul începe calculul pe ecran, iar ei îl continuă.",
      "Culoarea ajută foarte mult în explicații: o variabilă era mereu verde, cealaltă mereu albastră.",
      "Folosesc frecvent o foaie de fundal milimetric proiectată direct pe tablă pentru acuratețea desenului.",
      "Nimeni nu pare să aibă emoții când iese la ecran, atmosfera este una relaxată, de învățare."
    ],
    classroomObservation: "Profesorul a avut adesea rolul de ghid. Punea întrebarea și apoi se dădea un pas în spate, permițând elevilor din clasă să se consulte și să propună singuri soluțiile.",
    transferToRomania: "Ne întoarcem deciși să schimbăm modul în care folosim tabla inteligentă: să nu mai fie doar un ecran pe care proiectăm lucruri, ci un instrument pe care să invităm elevii să scrie.",
    techStack: ["Ecran Tactil", "Cromatică Simplă", "Răbdare", "Colaborare Activă"]
  },
  {
    id: "hybrid-learning",
    title: "Fizica devine palpabilă",
    subtitle: "Măsurători digitale și experimente reușite",
    iconName: "Atom",
    observer: "Lucruri pe care dorim să le implementăm și noi",
    summary: "Pentru noi, vizita în laboratorul de științe a fost excelentă. Ne-a impresionat mult să vedem elevii folosind mici senzori pe care îi introduceau în recipiente, iar datele și graficele le apăreau imediat, prin Bluetooth, pe tabletele de pe masă.",
    highlights: [
      "Trusa de fizică este modernă, sigură și extrem de ușor de montat de către elevi.",
      "Nu se pierde deloc timp dictând teorie; elevii au tot ghidul experimentului încărcat pe platformă.",
      "Transmisia rapidă a datelor face ca legătura dintre cauză și efect să fie vizibilă instant.",
      "Graficele generate pot fi analizate pe loc, evitând calculele manuale repetitive."
    ],
    classroomObservation: "Gălăgia din clasă era de fapt o dezbatere continuă. Fiecare pereche de elevi asambla, testa și verifica pe tabletă dacă teoria se potrivește cu rezultatul.",
    transferToRomania: "Suntem motivați să căutăm finanțări pentru a dota laboratorul din Sângeorz-Băi cu seturi mici de senzori inteligenți.",
    techStack: ["Senzori Wireless", "Afișaj pe Tabletă", "Ergonomie", "Implicare Practică"]
  },
  {
    id: "collaborative-teamwork",
    title: "O altfel de educație",
    subtitle: "Despre prietenie, natură și valori europene",
    iconName: "Users2",
    observer: "Ce ne-a învățat lucrul în afara școlii",
    summary: "Cel mai mare succes al acestui proiect a fost să vedem mințile copiilor noștri deschizându-se. Când am văzut elevi de clasa a IX-a din România lucrând cot la cot cu tineri germani la atelierul de reciclare, glumind relaxați în engleză, am știut că efortul a meritat.",
    highlights: [
      "Atelierul de prelucrare a lânii i-a calmat și i-a apropiat foarte mult pe participanți.",
      "Vânătoarea de comori prin oraș a fost dovada perfectă a descurcăreții și spiritului lor tânăr.",
      "Pășitul peste granițele din pădure le-a arătat practic ce înseamnă liniștea și libertatea Europei.",
      "Atelierul de origami ne-a convins că geometria poate fi și distractivă."
    ],
    classroomObservation: "Zâmbetele și mândria de pe fețele lor în momentul primirii certificatelor Europass ne-au umplut inima de bucurie.",
    transferToRomania: "Vom organiza mai des lecții în aer liber, ateliere de meșteșugit și drumeții pe dealurile din preajma orașului nostru.",
    techStack: ["Natură", "Munca în Echipă", "Prietenie", "Curaj"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    author: "Prof. Frunză Paul-Adrian",
    role: "Participant Job Shadowing",
    institution: "Disciplina Matematică",
    quote: "A fost o săptămână în care mi-am amintit de bucuria pură a descoperirii. Să vezi un coleg german stând printre bănci și permițând copiilor să rezolve sistemele de ecuații pe tablă, e pur și simplu minunat. Abia aștept să folosesc culorile la algebra de gimnaziu.",
    pillar: "Orele de Matematică"
  },
  {
    id: 2,
    author: "Prof. Petrașcu Traian",
    role: "Participant Job Shadowing",
    institution: "Disciplina Fizică",
    quote: "Graficele trasate cu creionul au, desigur, rolul lor. Dar fascinația de pe fețele copiilor când văd curba de temperatură generându-se în timp real pe tabletă, conectată la un senzor... e uluitoare. Trebuie să facem și noi acest pas către digital în laboratoarele noastre.",
    pillar: "Laboratorul de Fizică"
  },
  {
    id: 3,
    author: "Director Prof. Sîngerozan Varvara",
    role: "Coordonator Proiect",
    institution: "Conducerea Liceului",
    quote: "Peste tot auzeai un amestec de germană, engleză și română. Să ne vedem elevii discutând cu atâta degajare, implicându-se în sarcini alături de tinerii de aici... m-a făcut să mă simt tare mândră de copiii noștri și de liceul pe care îl reprezentăm.",
    pillar: "Spiritul European"
  },
  {
    id: 4,
    author: "Prof. Hodoroga Florin",
    role: "Profesor Însoțitor",
    institution: "Disciplina Geografie",
    quote: "Geografia înseamnă, în primul rând, să simți pământul sub tălpi. Excursia la punctul unde se întâlnesc cele trei țări le-a arătat copiilor, mai bine decât orice manual, că barierele pot exista doar pe hărți. A fost o lecție de respect pentru natură și pentru libertate.",
    pillar: "Educație în Natură"
  }
];