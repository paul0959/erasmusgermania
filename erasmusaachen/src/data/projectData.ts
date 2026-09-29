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
    disciplines: "Management & Științe",
    jobShadowingFocus: "Am vrut să văd cum este organizată școala la nivel administrativ.",
    description: "Ca director, bucuria mea cea mai mare a fost să văd cum elevii noștri colaborează cu tinerii germani. Am pus bazele unui parteneriat care va ajuta liceul nostru pe termen lung."
  },
  {
    name: "Prof. Hodoroga Florin",
    title: "Profesor",
    role: "Însoțitor Elevi",
    roleType: "escort",
    disciplines: "Geografie",
    jobShadowingFocus: "Educația se face și afară, nu doar în bănci.",
    description: "Pentru mine, ca profesor de geografie, să scot copiii în natură și să le arăt granița vie dintre trei țări a fost cea mai frumoasă lecție practică pe care le-o puteam oferi."
  },
  {
    name: "Prof. Frunză Paul-Adrian",
    title: "Profesor",
    role: "Participant Job Shadowing",
    roleType: "shadowing",
    disciplines: "Matematică & Info",
    jobShadowingFocus: "Am vrut să văd cum transformăm tabla într-un ecran cu adevărat interactiv.",
    description: "La orele de matematică din Aachen am găsit exact inspirația de care aveam nevoie. Am văzut cum tehnologia nu înlocuiește munca elevului, ci o face mult mai atractivă și ușor de înțeles."
  },
  {
    name: "Prof. Petrașcu Traian",
    title: "Profesor",
    role: "Participant Job Shadowing",
    roleType: "shadowing",
    disciplines: "Fizică",
    jobShadowingFocus: "Laboratorul ca spațiu de descoperire digitală.",
    description: "Laboratorul de fizică de acolo mi-a confirmat că trebuie să trecem la măsurători digitale. Entuziasmul copiilor când văd graficul formându-se pe tabletă în timp ce fac experimentul este de neprețuit."
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
      title: `Amintiri din călătorie`,
      caption: `Un moment surprins alături de elevi.`,
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
    title: "Prima zi: Am aterizat în Belgia și am vizitat Bruxelles",
    subtitle: "Piața centrală și o lecție uriașă de științe la Atomium",
    location: "Bruxelles",
    country: "Belgia",
    description: "Am pornit la drum cu mult entuziasm! Primul nostru contact a fost cu străzile din Bruxelles. Am coborât în Grand Place și am lăsat copiii să simtă pulsul orașului, iar apoi i-am dus să vadă Atomium.",
    extendedText: "Nu vă puteți imagina uimirea de pe fețele lor când au văzut structura cristalină a fierului mărită de miliarde de ori. A fost prima noastră „oră” de științe, predată direct sub cerul liber, înainte măcar să ajungem la școala gazdă din Aachen.",
    focus: "cultural",
    tags: ["Bruxelles", "Atomium", "Bucuria Începutului"],
    schedule: [
      { time: "07:30", activity: "Aterizarea și primele emoții la ieșirea din aeroport" },
      { time: "11:45", activity: "La pas prin Grand Place și Galeriile Royale" },
      { time: "14:15", activity: "Fascinația din fața structurii Atomium" },
      { time: "17:30", activity: "Călătoria cu autocarul spre Aachen și instalarea la hotel" }
    ],
    takeaway: "Entuziasmul copiilor ne-a confirmat din prima zi că știința îmbinată cu arhitectura poate fi fascinantă.",
    accentColor: "from-blue-600 to-indigo-800",
    shadowingNotes: {
      observers: "Noi, echipa de profesori",
      focusArea: "Observarea spațiilor neconvenționale de învățare",
      keyObservations: [
        "Elevii au fost mult mai atenți la explicațiile despre atomi având modelul uriaș în fața lor.",
        "S-au descurcat grozav cu orientarea pe străduțele din Bruxelles.",
        "Am simțit de la început cum se leagă prieteniile în grup."
      ],
      pedagogicalApplication: "Ne propunem să folosim mai des modele vizuale 3D atunci când predăm structuri abstracte."
    },
    photos: generateMediaForDay(1, 1, 12)
  },
  {
    id: 2,
    dayNumber: 2,
    date: "Miercuri, 20 Mai 2026",
    title: "Ziua 2: Primul clopoțel la școala din Germania",
    subtitle: "Am luat loc în bănci și am asitat la primele ore de mate și fizică",
    location: "Geschwister-Scholl-Gymnasium",
    country: "Germania",
    description: "Astăzi am avut mari emoții, am intrat pentru prima dată în școala parteneră. Noi, profesorii, ne-am așezat cuminți în ultimele rânduri la orele de științe, în timp ce elevii noștri au mers la atelierele ecologice.",
    extendedText: "Ne-a plăcut enorm să vedem cum lucrează profesorii de aici cu tablele interactive. Păstrează caietul clasic pentru scris, dar folosesc ecranul pentru a face geometria și funcțiile matematice mult mai ușor de vizualizat. Copiii noștri s-au distrat de minune lucrând cu materiale reciclate la atelierul Think Green.",
    focus: "green",
    tags: ["Prima zi de școală", "Reciclare", "Ore Interactive"],
    schedule: [
      { time: "08:30", activity: "Primirea călduroasă și o primă întâlnire cu profesorii germani" },
      { time: "09:30", activity: "Elevii noștri la atelierul de lucru manual și lână" },
      { time: "11:00", activity: "Am asistat la o oră de matematică plină de tehnologie" },
      { time: "12:30", activity: "Experimente în laboratorul de fizică" },
      { time: "15:00", activity: "Discuții și schimb de impresii la o cafea în sala profesorală" }
    ],
    takeaway: "Am realizat că tehnologia trebuie doar să ajute gândirea elevului, nu să i-o înlocuiască.",
    accentColor: "from-emerald-600 to-teal-800",
    shadowingNotes: {
      observers: "Catedra de Științe",
      focusArea: "Cum integrăm ecranele tactile fără să pierdem scrisul de mână",
      keyObservations: [
        "Ne-a impresionat calmul cu care se desfășoară ora, fără nicio grabă.",
        "Profesorul desena o figură pe tablă, o mărea din degete, și cerea elevului să vina să adauge elemente.",
        "Dulapurile de pe holuri îi ajută enorm pe copii să nu care ghiozdane grele."
      ],
      pedagogicalApplication: "Abia așteptăm să facem și noi aceleași fișe structurate care se potrivesc cu ce proiectăm pe tablă."
    },
    photos: generateMediaForDay(2, 13, 24)
  },
  {
    id: 3,
    dayNumber: 3,
    date: "Joi, 21 Mai 2026",
    title: "Ziua 3: Lecții ținute pe străzile orașului",
    subtitle: "Cum am transformat un întreg oraș într-o sală de clasă",
    location: "Centrul Vechi, Aachen",
    country: "Germania",
    description: "Am decis să scoatem învățarea din clasă. Prin activitatea 'Aachen City Rallye', elevii au lucrat în echipe și au avut de rezolvat sarcini plimbându-se prin orașul vechi.",
    extendedText: "Ne-am oprit la faimoasele izvoare termale Elisenbrunnen, unde am vorbit puțin despre termodinamică și căldura apei care iese din pământ, apoi am intrat în superbul Dom din Aachen. O surpriză emoționantă a fost vizita la o gelaterie unde ne-am revăzut cu o fostă elevă a liceului nostru, stabilită aici de mulți ani.",
    focus: "cultural",
    tags: ["Domul din Aachen", "Izvoare Termale", "Comunitatea Noastră"],
    schedule: [
      { time: "09:00", activity: "Elevii pornesc în vânătoarea de indicii prin Aachen" },
      { time: "11:00", activity: "Cuminți și impresionați în interiorul Domului" },
      { time: "13:30", activity: "Mirosul de sulf și fizica apei termale la Elisenbrunnen" },
      { time: "15:00", activity: "Am vizitat muzeul interactiv Centre Charlemagne" },
      { time: "17:00", activity: "Bucuria revederii cu o fostă elevă de la Solomon Haliță" }
    ],
    takeaway: "Cea mai bună metodă de a învăța istorie și științe este să le atingi cu propria ta mână.",
    accentColor: "from-amber-600 to-orange-800",
    shadowingNotes: {
      observers: "Toți profesorii însoțitori",
      focusArea: "Metode de învățare outdoor",
      keyObservations: [
        "Vânătoarea de comori i-a făcut pe copii să vorbească mult mai mult în engleză între ei.",
        "Ecranele din muzeul Charlemagne arătau cum se schimbă orașul an de an, o lecție vizuală fantastică.",
        "Pauzele și socializarea sunt la fel de importante ca și lecțiile formale."
      ],
      pedagogicalApplication: "Ne propunem să facem un traseu similar de orientare și indicii chiar în Sângeorz-Băi."
    },
    photos: generateMediaForDay(3, 25, 36)
  },
  {
    id: 4,
    dayNumber: 4,
    date: "Vineri, 22 Mai 2026",
    title: "Ziua 4: O oră perfectă de mate și 3 țări într-o singură zi",
    subtitle: "Am văzut cum se predau sistemele și am mers la marginea Olandei",
    location: "Aachen & Vaalserberg",
    country: "Germania · Belgia · Olanda",
    description: "Dimineața am stat din nou în bănci și am luat notițe. Am asistat la o oră despre sisteme de ecuații predată excepțional. După-amiază, ne-am luat rucsacurile și am urcat în pădure la Vaalserberg.",
    extendedText: "Pentru noi, profesorii de științe, ora de dimineață a fost o sursă imensă de inspirație. Apoi, sus la Dreiländereck, a fost un moment simbolic pentru noi toți: elevii noștri s-au ținut de mâini stând fiecare cu picioarele într-o țară diferită. Am simțit pe viu ce înseamnă libertatea Europei.",
    focus: "stem",
    tags: ["Ecuații Colorate", "Granița Triplă", "Natură"],
    schedule: [
      { time: "08:30", activity: "Cu carnețelul pe bancă la ora de matematică" },
      { time: "11:45", activity: "Un moment dulce: am cântat La mulți ani unei eleve!" },
      { time: "13:30", activity: "Urcușul prin pădure către granița cu Olanda și Belgia" },
      { time: "16:00", activity: "Ne tragem sufletul la monumentul celor trei frontiere" }
    ],
    takeaway: "Rigoarea germană la matematică, urmată de bucuria de a alerga liber prin pădure.",
    accentColor: "from-blue-700 to-cyan-800",
    shadowingNotes: {
      observers: "Paul și Traian (Matematică & Fizică)",
      focusArea: "Cum predăm ecuațiile fără ca elevii să se piardă în calcule",
      keyObservations: [
        "Profesorul a marcat x-ul cu galben și y-ul cu albastru. Așa copiii nu au încurcat substituția.",
        "Elevii nu aveau frică de a greși la tablă, profesorul îi încuraja permanent.",
        "Explicația a durat 10 minute, restul de 40 de minute copiii doar au exersat."
      ],
      pedagogicalApplication: "Adoptăm imediat metoda culorilor pentru algebră la clasele a VII-a și a VIII-a."
    },
    photos: generateMediaForDay(4, 37, 48)
  },
  {
    id: 5,
    dayNumber: 5,
    date: "Sâmbătă, 23 Mai 2026",
    title: "Ziua 5: Fascinația goticului și zborul deasupra Rinului",
    subtitle: "Excursie în Köln: Parcul de Sculpturi și uriașul Dom",
    location: "Köln",
    country: "Germania",
    description: "Am dedicat această zi superbei metropole Köln. După o plimbare printr-un parc de sculpturi tare ciudate, dar interesante, ne-am dus direct spre Catedrala Kölner Dom.",
    extendedText: "Când ieși din gară și vezi uriașa catedrală, pur și simplu rămâi fără cuvinte. Le-am explicat copiilor pe scurt cum stau acele pietre uriașe în picioare datorită arcelor și fizicii, apoi ne-am relaxat traversând fluviul Rin cu telegondola.",
    focus: "cultural",
    tags: ["Catedrala din Köln", "Plimbare cu Telegondola", "Sculpturi"],
    schedule: [
      { time: "09:00", activity: "Am ajuns în Köln și am luat la pas parcul cu sculpturi" },
      { time: "11:30", activity: "Sute de poze pe faimosul pod cu lacăte (Hohenzollern)" },
      { time: "13:00", activity: "Mici și uimiți în fața colosalului Dom" },
      { time: "15:30", activity: "Am privit orașul de sus din telecabină" }
    ],
    takeaway: "Arhitectura este doar matematică frumos aranjată în spațiu.",
    accentColor: "from-teal-600 to-indigo-800",
    shadowingNotes: {
      observers: "Întreaga delegație",
      focusArea: "Observarea fenomenelor fizice în arhitectură și transport",
      keyObservations: [
        "Un prilej perfect pentru o discuție liberă despre centrul de greutate și distribuția forțelor.",
        "La telecabină am vorbit despre tensiunea în cablu și frecare.",
        "Parcul a fost un exercițiu bun de a privi arta și de a-i găsi geometria."
      ],
      pedagogicalApplication: "La orele de mecanică, putem folosi pozele cu Domul pentru a le explica elevilor forțele."
    },
    photos: generateMediaForDay(5, 49, 60)
  },
  {
    id: 6,
    dayNumber: 6,
    date: "Sâmbătă, 23 Mai 2026",
    title: "Ziua 6: Matematică din hârtie și rămas-bun",
    subtitle: "Atelierul de origami, masa festivă și diplomele Europass",
    location: "Geschwister-Scholl-Gymnasium",
    country: "Germania",
    description: "Orice experiență frumoasă are și un final. Ne-am adunat la școală pentru o ultimă activitate genială: copiii au învățat geometrie făcând origami și poliedre din hârtie colorată.",
    extendedText: "Ne-am luat rămas bun de la colegii noștri germani cu multe îmbrățișări. Conducerea școlii ne-a pregătit o masă festivă minunată și a înmânat solemn certificatele Europass tuturor. Plecăm acasă mai bogați sufletește și profesional.",
    focus: "cultural",
    tags: ["Origami", "Diplome Europass", "Masa Festivă"],
    schedule: [
      { time: "08:30", activity: "Am împăturit hârtie și am obținut figuri geometrice perfecte" },
      { time: "10:30", activity: "Ultima asistență la clasă: derivate și funcții" },
      { time: "12:00", activity: "Am primit cu mândrie certificatele noastre Europass" },
      { time: "13:30", activity: "Am mâncat covrigi pretzel și ne-am luat la revedere de la prietenii noștri" }
    ],
    takeaway: "Avem colegi minunați în Germania și ne întoarcem cu un bagaj uriaș de cunoștințe.",
    accentColor: "from-indigo-600 to-emerald-700",
    shadowingNotes: {
      observers: "Prof. Paul Frunză & Prof. Traian Petrașcu",
      focusArea: "Metode alternative de fixare a noțiunilor geometrice",
      keyObservations: [
        "Origami-ul impune liniște, concentrare și extrem de multă precizie.",
        "Elevii colaborează mult mai bine când au ceva de construit cu propriile mâini.",
        "Momentul festiv i-a făcut pe copii să fie foarte mândri de munca lor."
      ],
      pedagogicalApplication: "La Sângeorz-Băi, vom aduce hârtia colorată la orele de geometrie spațială!"
    },
    photos: generateMediaForDay(6, 61, 72)
  }
];

export const ALL_PHOTOS: DayPhoto[] = DAILY_JOURNAL.flatMap((day) => day.photos);

export const PEDAGOGICAL_PILLARS: PedagogicalPillar[] = [
  {
    id: "interactive-tech",
    title: "Ecranele devin caiete",
    subtitle: "Cum folosim ecranele la orele de matematică",
    iconName: "Variable",
    observer: "Noi am observat și notat pentru voi",
    summary: "Când am intrat în clasa de matematică, ne-a bucurat să vedem naturalețea profesorului. Nu stătea în spatele catedrei, ci lucra cot la cot cu elevii la un ecran uriaș. Au folosit raportoare virtuale pe care le mișcau cu degetul direct pe tablă.",
    highlights: [
      "Copiii nu scriu după dictare; profesorul începe calculul pe ecran, elevul îl continuă.",
      "Se folosesc foi de fundal milimetric direct pe ecran pentru geometrie.",
      "Culoarea ajută enorm: x era întotdeauna verde, y era albastru.",
      "Nimeni nu are emoții să iasă la tablă, este o activitate comună și relaxată."
    ],
    classroomObservation: "Ce ne-a plăcut cel mai mult a fost că profesorul punea întrebarea și se dădea la o parte, lăsând clasa să se consulte și să propună soluții.",
    transferToRomania: "Ne întoarcem deciși să nu mai folosim tabla inteligentă doar ca proiector, ci să invităm elevii să atingă și să construiască matematică direct pe ea.",
    techStack: ["Ecran Tactil", "Culori Dinamice", "Răbdare", "Colaborare"]
  },
  {
    id: "hybrid-learning",
    title: "Laboratorul prinde viață",
    subtitle: "Măsurători cu tableta în loc de caiet",
    iconName: "Atom",
    observer: "Ce am reținut din laboratorul de fizică",
    summary: "Pentru noi, care predăm științe, a fost de vis. Elevii aveau niște mici senzori pe masă pe care îi scufundau în apă caldă, iar temperatura apărea instant ca un grafic curbat pe tabletele pe care le primeau la începutul orei.",
    highlights: [
      "Trusa de fizică este modernă, sigură și foarte ușor de folosit de către elevi.",
      "Datele ajung prin Bluetooth direct pe dispozitivul elevului.",
      "Nu se pierde timp dictând pașii experimentului; toți îi au încărcați pe platformă.",
      "Relația cauză-efect este vizibilă instantaneu pe ecran."
    ],
    classroomObservation: "Spre deosebire de laboratoarele clasice, aici gălăgia era de fapt o 'gălăgie de lucru'. Fiecare se contrazicea, calcula și verifica pe tabletă.",
    transferToRomania: "Vom cere dotarea cu seturi de senzori mici și rapizi pe care să îi putem conecta la telefoanele elevilor noștri.",
    techStack: ["Senzori Bluetooth", "Simulări Grafice", "Mese de lucru adaptate", "Entuziasm"]
  },
  {
    id: "collaborative-teamwork",
    title: "Europa la pas",
    subtitle: "Cum se clădesc caracterele în afara școlii",
    iconName: "Users2",
    observer: "Lecții învățate direct din comunitate",
    summary: "Cel mai bun lucru pe care îl face acest proiect este să deschidă minți. Am văzut copii de clasa a IX-a din România împărțind același ghem de lână, la atelierul ecologic, cu tineri din Germania, glumind în engleză.",
    highlights: [
      "Atelierul de lână i-a făcut pe copii să se relaxeze și să vorbească unii cu alții.",
      "Vânătoarea de comori prin oraș a fost o dovadă excelentă de descurcăre și spirit de orientare.",
      "Trecerea granițelor la pas prin pădure le-a arătat ce înseamnă cu adevărat libertatea în Uniunea Europeană.",
      "Plierea hârtiei la origami a unit arta cu logica."
    ],
    classroomObservation: "Zâmbetele de pe fețele lor când și-au primit certificatele Europass la masă ne-au demonstrat că munca noastră din ultimele luni a meritat din plin.",
    transferToRomania: "Promitem să organizăm cât mai multe activități practice în aer liber, ateliere de meșteșugit și lecții în pădurile noastre.",
    techStack: ["Curiozitate", "Aer Liber", "Prietenie", "Curaj"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    author: "Prof. Frunză Paul-Adrian",
    role: "Participant Job Shadowing",
    institution: "Catedra de Matematică",
    quote: "A fost o săptămână în care am redevenit eu însumi elev. Când vezi un coleg german cum stă printre bănci și îi lasă pe copii să se joace cu ecuațiile pe tablă folosind degetele, îți dai seama că la asta trebuie să ajungem și noi. Plec de aici extrem de motivat.",
    pillar: "Orele de Matematică"
  },
  {
    id: 2,
    author: "Prof. Petrașcu Traian",
    role: "Participant Job Shadowing",
    institution: "Catedra de Fizică",
    quote: "Graficele făcute cu creionul pe hârtie au farmecul lor, dar când am văzut copiii cum prind conceptul de răcire a apei uitându-se cum curge curba pe o tabletă conectată la senzor... e uluitor. Vreau neapărat să integrăm aceste dispozitive inteligente la fizică.",
    pillar: "Laboratorul de Fizică"
  },
  {
    id: 3,
    author: "Director Prof. Sîngerozan Varvara",
    role: "Coordonator Proiect",
    institution: "Management Școlar",
    quote: "Peste tot auzeai doar germană, engleză și română la un loc. Să vezi elevii de la noi din liceu discutând cu atâta curaj și degajare, ajutându-se reciproc... m-a făcut să mă simt tare mândră de școala noastră. Această experiență ne-a deschis tuturor orizontul.",
    pillar: "Spiritul European"
  },
  {
    id: 4,
    author: "Prof. Hodoroga Florin",
    role: "Profesor Însoțitor",
    institution: "Catedra de Geografie",
    quote: "Geografia înseamnă să simți pământul sub tălpi. Excursia la punctul unde se unesc cele 3 țări a fost cel mai bun mod de a le arăta copiilor că barierele există doar pe hărți. A fost o lecție minunată de respect pentru natură și libertate.",
    pillar: "Educație în Natură"
  }
];