/* eslint-disable react/no-unescaped-entities */

import {
  IPdpUserStoryTeamSectionsProps,
  LocaleType,
  PdpIntroSection3,
  PdpIntroSection4,
} from 'ui'
import PdpIntroItContent, { IPdpContentProps, IPdpTabsText } from './components'
import { IPdpIntroProps } from './components/Intro'
import { IPdpCompareProps } from './components/Compare'
import { IPdpSpecProps } from './components/Spec'
import {
  ShieldCheckIcon,
  TruckIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/solid'
import { IProductProps } from './en'

const locale: LocaleType = 'it'

// 产品页Tabs吸顶栏的文本 It
const tabs: IPdpTabsText = {
  intro: 'Introduzione',
  compare: 'Confronta',
  spec: 'Specifiche',
  warranty: 'Garanzia',
  userStories: 'Storie degli utenti',
  reviews: 'Recensioni',
  faq: 'FAQ',
}

// ----------------  产品页 Introduction模块内容配置 It start  ----------------------

const introProps: IPdpIntroProps = {
  // Introduction 第1部分 It
  pdpIntroSection1Props: {
    title: 'Il Primo Compostatore di Rifiuti Biologici al Mondo',
    description:
      'Utilizza la microbiota per decomporre rapidamente i rifiuti alimentari, 100 volte più veloce rispetto al compostaggio tradizionale, completamente diverso dai "compostatori" elettrici da banco che disidratano.',
    bgImageSrc:
      '/assets/images/pdp-v2311/dividers/geme-with-compost-background-min.jpg',
    comparisonText: {
      before: 'Prima',
      after: 'Dopo',
    },
    bottomItems: [
      { id: 1, description: 'Decomposizione da parte dei microbi' },
      { id: 2, description: 'Non tramite disidratazione' },
      { id: 3, description: 'Cumulo di compost in una scatola' },
    ],
  },

  // Introduction 第2部分 It
  contentSection71Props: {
    title: 'Da Rifiuti a Meraviglia',
    description:
      'Immergiamoci nei piccoli supereroi che creano un impatto significativo: i microbi (GEME Kobold). Simili ai batteri buoni che aiutano la digestione nel tuo intestino, con condizioni ideali e una miscelazione regolare, trasformano rapidamente gli scarti alimentari in compost organico.',

    withImageOrVideo: {
      type: 'video',
      videoProps: {
        sources: [
          {
            minWidth: 0,
            src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/how-geme-kobold-eat-food-waste-480p.mp4',
          },
        ],
      },
    },
    bottomContent: <PdpIntroSection3 title="6-8 Ore" />,
    isDisplayTextOnLeft: true,
  },

  // Introduction 第3部分 It
  contentSection72Props: {
    title: 'Lavora Mentre Dormi, Risparmio Energetico e Silenzioso',
    description:
      'Il livello sonoro di GEME è di circa 35-45 dB, il compostatore più silenzioso sul mercato.',
    withImageOrVideo: {
      type: 'image',
      imageSrc: '/assets/images/pdp-v2311/introduction/geme-silent.jpg',
      imageAlt: 'immagine dei rifiuti alimentari',
    },
    bottomContent: <PdpIntroSection4 />,
  },

  // Introduction 第4部分 It
  pdpIntroSection5Props: {
    title: 'Quasi Tutti i Rifiuti Biologici Possono Essere Inseriti nel GEME',
    leftNotes: (
      <>
        <a href="/help-center/docs/faq/supported-foods/what-kinds-of-food-waste-can-i-put-into-what-can-not">
          <strong>400+</strong>
          <br />
          tipi di rifiuti
        </a>
      </>
    ),
  },

  // Introduction 第5部分 It
  contentSection21Props: {
    title: 'Nessuna Pulizia Quotidiana, Mesi per Riempiersi',
    description: (
      <>
        🫳&nbsp;&nbsp;Aggiungi rifiuti in qualsiasi momento <br />
        🫷&nbsp;&nbsp;Nessun bisogno di premere pulsanti <br />
        🕓&nbsp;&nbsp;Nessun bisogno di attendere cicli <br />
        🤗&nbsp;&nbsp;Curva di apprendimento zero <br />
        🚮&nbsp;&nbsp;Proprio come un normale cestino della spazzatura
      </>
    ),
    imageSrc:
      '/assets/images/pdp-v2311/introduction/geme-take-care-of-the-rest.jpg',
    imageAlt: 'GEME si prende cura dei tuoi rifiuti alimentari',
    isDisplayTextOnLeft: true,
  },

  // Introduction 第6部分 It
  contentSection22Props: {
    title: 'Decomposizione da Microorganismi, Non Riscaldamento Elettrico',
    description: (
      <>
        🔥&nbsp;&nbsp;Non è disidratazione, è{' '}
        <a href="/blog/how-does-a-real-electric-composter-work">
          compostaggio reale
        </a>{' '}
        <br />
        🚰&nbsp;&nbsp;Non è triturazione, niente più lavandini intasati
        <br />
        🌿&nbsp;&nbsp;Non è greenwashing, vera soluzione eco-sostenibile
      </>
    ),
    imageSrc: '/assets/images/pdp-v2311/introduction/geme-garbage-disposal.jpg',
    imageAlt: 'immagine dei rifiuti alimentari',
  },

  // Introduction 第7部分 It
  pdpIntroSection6Props: {
    title: 'Compostaggio Reale Facile',
    description: 'Amato da oltre 100k giardinieri',
    items: [
      {
        id: 1,
        featured: true,
        title: 'GEME',
        imageSrc:
          '/assets/images/pdp-v2311/introduction/section-comparison-geme.jpeg',
        imageAlt: 'GEME compost',
        features: [
          'Compost Reale',
          'Fermentazione Aerobica',
          'Inodore & Silenzioso',
          'Risparmio Energetico',
        ],
      },
      {
        id: 2,
        title: 'Deidratatore',
        imageSrc:
          '/assets/images/pdp-v2311/introduction/section-comparison-dehydrator.jpeg',
        imageAlt: 'Deidratatore',
        features: [
          'Compost Falso',
          'Cuocere & Asciugare',
          'Maleodorante & Rumoroso',
          'Costo Energetico Elevato',
        ],
      },
      {
        id: 3,
        title: 'Cumulo di Compost',
        imageSrc:
          '/assets/images/pdp-v2311/introduction/section-comparison-pile.jpeg',
        imageAlt: 'Cumulo di Compost',
        features: [
          'Tempo di Attesa Lungo',
          'Sporco & Disordinato',
          'Bisogno di Girare Spesso',
          'Attrae Animali',
        ],
      },
    ],
  },

  // Introduction 第8部分 It
  pdpIntroSection7Props: {
    mobileBgImageUrl:
      '/assets/images/pdp-v2311/introduction/big-more-and-long-term-mobile.png',
    pcBgImageUrl:
      '/assets/images/pdp-v2311/introduction/big-more-and-long-term-pc.png',
    title: 'Grande, Più & a Lungo Termine',
    description: '',
    features: [
      '🏡 Uso quotidiano per una famiglia di 10+ persone',
      '🐳 Capacità giornaliera di alimentazione di 11£/5kg',
      '💰 Vale il prezzo',
    ],
  },

  // Introduction 第9部分 It
  contentSection23Props: {
    title: 'Immagina una vita senza più dover gettare i rifiuti alimentari',
    description: (
      <>
        👪&nbsp;&nbsp;Uso quotidiano per una famiglia di 10+ persone <br />
        📅&nbsp;&nbsp;Più di 3 mesi senza necessità di pulizia <br />
        💰&nbsp;&nbsp;Vale il prezzo per un apparecchio così grande <br />
        🐳&nbsp;&nbsp;Volume di 19L, capacità di alimentazione giornaliera di
        11£/5kg <br />
        🐘&nbsp;&nbsp;45.5x32x66.5(cm) 18x12.6x26.2 (pollici)
      </>
    ),
    imageSrc:
      '/assets/images/pdp-v2311/introduction/geme-composter-size-v2.jpeg',
    imageAlt: 'Grande dimensione del composter GEME',
    isDisplayTextOnLeft: true,
  },

  // Introduction 第10部分 It
  contentSection24Props: {
    title: 'Nessun bisogno di cambiare il filtro',
    description: (
      <>
        L'unico modello al mondo che utilizza il filtro industriale più
        avanzato, con <b>ossidazione catalitica a ioni di metallo</b> per la
        purificazione.
        <br />
        Questa tecnologia è potente e non richiede alcuna sostituzione.
        <br />
        Altri "composter" devono sostituire il filtro ogni 3 mesi, con costi
        nascosti!
        <br />
        <br />
        👃🏻&nbsp;&nbsp;Nessun odore <br />
        💰&nbsp;&nbsp;Nessun costo nascosto aggiuntivo
        <br />
        🔨&nbsp;&nbsp;Nessuna necessità di sostituire filtri
      </>
    ),
    imageSrc: '/assets/images/pdp-v2311/introduction/no-filters.jpg',
    imageAlt: 'GEME non richiede sostituzione del filtro',
  },

  // Introduction 第11部分 It
  contentSection8Props: {
    title: 'Compostaggio Senza Odore a Casa',
    description:
      'GEME utilizza filtri industriali con la tecnologia di deodorizzazione più avanzata. Goditi il compostaggio moderno, pulito e ad alta tecnologia e abbraccia lo stile di vita a zero rifiuti.',
    items: [
      {
        id: 1,
        imageSrc: '/assets/images/pdp-v2311/introduction/no-smell-before.jpg',
        imageAlt: 'Odore prima di usare il composter GEME',
      },
      {
        id: 2,
        imageSrc: '/assets/images/pdp-v2311/introduction/no-smell-after.jpg',
        imageAlt: 'Nessun odore dopo aver usato il composter GEME',
      },
    ],
  },
}
// ----------------  产品页 Introduction模块内容配置 It end  ----------------------

// 产品页 compareSection模块内容配置 It
const compareProps: IPdpCompareProps = {
  compareSectionProps: {
    title: 'Confrontiamo',
    description: 'Scopri cosa rende GEME diverso.',
    compareList: [
      {
        imgUrl: '/assets/images/compare-section/compare-section-geme.png',
        devicename: 'GEME',
        compareItems: [
          {
            title: 'Compost reale',
            desc: 'Microbi altamente attivi accelerano il processo di compostaggio',
          },
          {
            title: 'Nessun bisogno di cambiare filtro',
            desc: 'Costo zero, filtro di grado industriale, non materiale al carbonio',
          },
          {
            title: 'Volume super grande da 19L',
            desc: 'Richiede mesi per riempirsi',
          },
          {
            title: 'Anche escrementi di animali e zuppa',
            desc: 'Supporta i rifiuti biologici, compresa lettiera per gatti e rifiuti liquidi',
          },
          {
            title: `Non c'è bisogno di pulire`,
            desc: 'Basta ridurre quando è pieno, non è necessario svuotare e pulire',
          },
          {
            title: 'Nessun abbonamento',
            desc: 'Il prezzo è alto, ma non ci sono costi nascosti di abbonamento, prova gratuita, reso gratuito',
          },
          {
            title: 'Compostaggio continuo',
            desc: `Aggiungi in qualsiasi momento, non c'è bisogno di aspettare il completamento del ciclo`,
          },
        ],
      },
      {
        imgUrl: '/assets/images/compare-section/compare-section-lomi.png',
        devicename: 'Brand 1',
        compareItems: [
          {
            title: 'Non vero compost',
            desc: 'Disidrata e cuoce, ancora rifiuti secchi',
          },
          {
            title: 'Cambio regolare del filtro al carbonio',
            desc: 'Fino a $240/anno per la sostituzione dei filtri',
          },
          {
            title: 'Piccolo volume da 3L',
            desc: 'Dimensione limitata dei rifiuti alimentari',
          },
          {
            title: 'Rifiuti alimentari limitati',
            desc: 'Non può gestire carne e zuppa',
          },
          {
            title: 'Svuotamento giornaliero',
            desc: 'Pulizia dopo ogni utilizzo',
          },
          {
            title: 'Abbonamento richiesto',
            desc: 'Trappola di abbonamento con costi nascosti elevati',
          },
          {
            title: 'Avvio manuale basato sul ciclo',
            desc: 'Svitare il coperchio, premere il pulsante per iniziare, attendere la fine del ciclo',
          },
        ],
      },
      {
        imgUrl: '/assets/images/compare-section/compare-section-mill.png',
        devicename: 'Brand 2',
        compareItems: [
          {
            title: 'Non vero compost',
            desc: 'Disidrata e macina, ancora rifiuti secchi',
          },
          {
            title: 'Filtro odore al carbonio',
            desc: '$60+ per ogni sostituzione del filtro',
          },
          {
            title: 'Volume di 6.5L',
            desc: 'Alto e grande, ma capacità limitata',
          },
          {
            title: 'Rifiuti alimentari limitati',
            desc: 'Non può gestire carne e zuppa',
          },
          {
            title: 'Svuotamento settimanale',
            desc: 'Esegui e svuota quando è pieno',
          },
          {
            title: 'Abbonamento richiesto',
            desc: 'Abbonamento di default, problemi per la cancellazione e il reso, rimborso non applicabile',
          },
          {
            title: 'Tritatura continua',
            desc: 'Riavvio automatico quando aggiungi rifiuti, continua a tritare',
          },
        ],
      },
      {
        imgUrl: '/assets/images/compare-section/compare-section-reencle.png',
        devicename: 'Brand 3',
        compareItems: [
          {
            title: 'Compost reale',
            desc: 'Basso tasso di riduzione',
          },
          {
            title: 'Cambio regolare del filtro al carbonio',
            desc: 'Costo $35+ per ogni sostituzione',
          },
          {
            title: 'Volume di 6L',
            desc: '14L di spazio esterno, 6L di volume interno',
          },
          {
            title: 'Solo rifiuti alimentari',
            desc: 'Non può gestire escrementi di animali',
          },
          {
            title: 'Pulizia su richiesta',
            desc: 'Svuota, pulisci e ripristina il compostatore quando è pieno',
          },
          {
            title: 'Abbonamento offerto',
            desc: 'Sembra conveniente, ma crea problemi quando si annulla o si richiede il rimborso',
          },
          {
            title: 'Compostaggio continuo',
            desc: `Aggiungi in qualsiasi momento, non c'è bisogno di aspettare il completamento del ciclo`,
          },
        ],
      },
    ],
    buttonText: 'Acquista ora',
  },
  locale: 'it',
}

// 产品页Spec模块配置内容 It
const specProps: IPdpSpecProps = {
  gemeSpecsProps: {
    title: 'Specifiche tecniche',
    specs: [
      {
        id: 1,
        name: 'Volume',
        description: '19L',
      },
      {
        id: 2,
        name: 'Capacità',
        description: '5kg/giorno',
      },
      {
        id: 3,
        name: 'Dimensioni',
        description: 'L320*P455*A665mm  (18" x 12.6" x 26.2")',
      },
      {
        id: 4,
        name: 'Peso',
        description: '19,5kg',
      },
      {
        id: 5,
        name: 'Alimentazione',
        description: (
          <>
            <p>AC110V-60Hz (Modello G601N-2K per il Nord America)</p>
            <p>AC220V-50Hz (Modello G601U-2K per l'Europa)</p>
          </>
        ),
      },
      {
        id: 6,
        name: 'Decibel',
        description: '≈40db (23db-55db)',
      },
      {
        id: 7,
        name: 'Certificazioni',
        description: 'CE/FCC/ISO9001/ISO14001/ISO45001',
      },
      {
        id: 8,
        name: 'Funzioni',
        description:
          'Compostaggio biologico rapido completamente automatico; Sicuro e a risparmio energetico; Deodorizzazione automatica; Deumidificazione automatica',
      },
    ],
  },

  gemeWhatsInBoxProps: {
    title: `Cosa c'è nella scatola`,
    features: [
      {
        name: '1',
        title: 'Composter GEME',
        description: 'La macchina a compostaggio rapido per rifiuti biologici',
        imageSrc: '/assets/images/geme-whats-in-box/q2.png',
        imageAlt: 'GEME compostiera rapida per rifiuti biologici',
      },
      {
        name: '2',
        title: 'GEME-Kobold',
        description: 'Il microbiota naturale per il compostaggio',
        imageSrc: '/assets/images/geme-whats-in-box/q1.png',
        imageAlt: 'GEME-Kobold microbiota naturale',
      },
      {
        name: '3',
        title: 'Pala',
        description: 'Utilizzata per raccogliere il fertilizzante organico',
        imageSrc: '/assets/images/geme-whats-in-box/q3.png',
        imageAlt: 'Pala',
      },
      {
        name: '4',
        title: 'Raschietto',
        description: 'Usato per pulire la vasca di decomposizione',
        imageSrc: '/assets/images/geme-whats-in-box/q4.png',
        imageAlt: 'Raschietto',
      },
    ],
  },
}

// 产品页Warranty模块配置内容 It
const warrantyProps = {
  title: 'Acquista con fiducia',
  description: `Sappiamo che potresti pensare che sia costoso, ma ti assicuriamo che ne vale la pena.
Il tuo denaro non sarà sprecato; si trasformerà in uno stile di vita migliore e in un servizio di qualità intorno a te.`,

  features: [
    {
      name: '30 giorni di prova gratuita',
      description:
        'Spedizione gratuita (territorio continentale degli Stati Uniti), prova gratuita, nessuna tassa di restituzione. Fai tutte le domande che desideri durante la prova; gli amanti dei prodotti innovativi meritano incoraggiamento!',
      href: '/return-policy',
      icon: TruckIcon,
    },
    {
      name: 'Garanzia di 1 anno',
      description:
        'Ripareremo o sostituiremo gratuitamente le parti difettose se il difetto iniziale si verifica durante il periodo di garanzia.',
      href: '/warranty',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Tasso di risposta clienti del 100%',
      description:
        'Vivi l’esperienza del compostaggio senza preoccupazioni grazie alla nostra garanzia completa. Il tuo compostatore GEME, il nostro impegno.',
      href: '/contact',
      icon: ChatBubbleLeftRightIcon,
    },
  ],

  btnText: 'Scopri di più',
}

// 产品页 User Stories 模块配置内容 It
const userStoryProps: IPdpUserStoryTeamSectionsProps = {
  title: 'Scopri le storie dei clienti di GEME',
  description: (
    <>Come la vita dei nostri clienti è cambiata dopo aver utilizzato GEME</>
  ),
  people: [
    {
      id: 1,
      name: 'Rainforest Inn',
      role: 'Bill, Direttore',
      image: {
        src: '/assets/images/pdp-v2311/user-stories/user-stories-rainforest.jpg',
        alt: 'Rainforest Inn',
      },
      bio: (
        <>
          Bill è il proprietario del{' '}
          <a
            className="text-emerald-600"
            href="https://www.rainforestinn.com/"
            target="_blank"
          >
            Rainforest Inn
          </a>{' '}
          situato a Porto Rico. Voleva disperatamente GEME e ha persino pagato
          più volte e affrontato costi di spedizione extra solo per usare il
          compostatore GEME. Dai un'occhiata al suo{' '}
          <a
            className="text-emerald-600"
            href="https://www.tiktok.com/@rainforestinn/video/7309861665711901998"
            target="_blank"
          >
            vlog
          </a>{' '}
          per vedere cosa succede.
        </>
      ),
      quote:
        'Cercavo un composter pulito e facile da usare che potesse stare in cucina, dato che i nostri grandi contenitori per il compostaggio erano troppo lontani. Funziona in modo molto efficiente. Silenzioso e pulito.',
    },
    {
      id: 2,
      name: 'LAE. Angeles Delgado',
      role: 'Direttore Finanziario',
      image: {
        src: '/assets/images/pdp-v2311/user-stories/user-stories-angelita.jpeg',
        alt: 'Leonard Krasner',
      },
      bio: (
        <>
          Angelita, una cliente messicana, ha acquistato un'unità nonostante le
          difficoltà iniziali con la spedizione tra Stati Uniti e Messico. La
          sua compagnia di trasporti ha facilitato il ritiro in Texas. Amando il
          prodotto, ha acquistato altri 3 per il Natale delle sue figlie!
          Angelita è diventata anche un'eroina aiutandoci a risolvere un
          problema di consegna per un'altra campagna Kickstarter in Messico.
        </>
      ),
      quote:
        'Ho cercato su internet e ho visto la vostra pubblicità che diceva che è un composter biologico, ho visto i video e alla fine ho scelto il vostro prodotto. Mi è piaciuto tantissimo. Voglio acquistare i miei compostatori! Sono pronta per altri due, forse tre.',
      mobileQuote:
        'Voglio acquistare i miei compostatori! Sono pronta per altri due, forse tre.',
    },
    {
      id: 3,
      name: 'Vasil Borukov',
      role: 'Senior IT Support Engineer',
      image: {
        src: '/assets/images/pdp-v2311/user-stories/user-stories-vasil.png',
        alt: 'Vasil Software engineer',
      },
      bio: (
        <>
          Vasil, un sostenitore bulgaro dello zero rifiuti, adora GEME per
          combattere lo spreco alimentare e ridurre l'impronta di carbonio.
          Seguendo GEME fin dalla campagna di crowdfunding di luglio 2022, ha
          acquistato un'unità da €499 tramite rate e ha promosso attivamente il
          prodotto e la visione di GEME nella sua rete. Un vero campione della
          sostenibilità!
        </>
      ),
      quote:
        'Ho sempre voluto impegnarmi di più in tutto ciò che mi circonda per una vita più sostenibile, ed è per questo che desideravo tanto ottenere GEME. Combina tutto ciò di cui hai bisogno per una vita più facile e senza preoccupazioni. Lo consiglio vivamente a tutti!',
      mobileQuote:
        'Combina tutto ciò di cui hai bisogno per una vita più facile e senza preoccupazioni.',
    },
    {
      id: 4,
      name: 'Alex Egertson',
      role: 'Direttore della Sostenibilità',
      image: {
        src: '/assets/images/pdp-v2311/user-stories/user-stories-llc.jpg',
        alt: 'Alex Egertson',
      },
      bio: (
        <>
          Alex lavora nei ritiri, campi e conferenze luterane,{' '}
          <a
            className="text-emerald-600"
            href="https://lrcchome.com/"
            target="_blank"
          >
            LRCC
          </a>{' '}
          una scuola-campo dove i bambini imparano e vivono una vita verde.
          <br />
          Con GEME, più bambini possono imparare a fare compost facilmente nella
          loro vita quotidiana.
        </>
      ),
      quote: 'Felice di aiutare. Sembra un ottimo prodotto finora.',
    },
  ],
  locale: 'it',
}

export function PdpIntroIt(props: IProductProps) {
  const allProps: IPdpContentProps = {
    ...props,
    tabs,
    introProps,
    compareProps,
    specProps,
    warrantyProps,
    userStoryProps,
    locale,
  }

  return <PdpIntroItContent {...allProps} />
}
