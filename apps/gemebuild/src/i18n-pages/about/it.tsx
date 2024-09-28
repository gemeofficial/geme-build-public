/* eslint-disable react/no-unescaped-entities */
import {
  AboutContentSection1,
  AboutContentSection15,
  AboutContentSection2,
  AboutContentSection4,
  AboutContentSection6,
  AboutHeroSection,
  AboutLogoCloud,
} from 'ui'

import type {
  IAboutContentSection1,
  IAboutContentSection15,
  IAboutContentSection2,
  IAboutContentSection4,
  IAboutContentSection6,
  IAboutHeroSection,
  IAboutLogoCloudProps,
} from 'ui'

// about page静态页面的内容 配置文件 It版

// 第一部分 It
const aboutHeroSectionProps: IAboutHeroSection = {
  title: 'Meno Rifiuti, Più Verde',
  mTitle: `Il Percorso di ROKH verso un Futuro Sostenibile`,
  descriptionSection: (
    <div className="w-full mt-3 md:mt-5 max-w-md text-base text-v2311-text-gary md:max-w-3xl">
      <div>
        In ROKH, condividiamo una visione unificata: trasformare i rifiuti in
        risorsa e creare un mondo in cui la natura prosperi insieme al progresso
        umano. La nostra passione per l'innovazione scientifica ci spinge ad
        avere un impatto positivo sul mondo. Commercializzando le nostre
        soluzioni biotecnologiche innovative, trasformiamo la ricerca in
        benefici tangibili che migliorano il benessere umano e affrontano le
        sfide globali.
      </div>
      <div>
        <ul className="space-y-1">
          <li className="my-2">Il nostro team è composto da:</li>
          <li>
            <strong>Professionisti Esperti</strong>: Con oltre 20 anni di
            esperienza nel trattamento delle risorse di rifiuti solidi, portiamo
            una profonda competenza al nostro lavoro.
          </li>
          <li className="md:w-[60%] lg:w-full">
            <strong>Scienziati Dedicati</strong>: I nostri microbiologi e
            agronomi esplorano continuamente nuovi modi per sfruttare la natura
            per la gestione sostenibile dei rifiuti.
          </li>
          <li className="md:w-[60%] lg:w-full">
            <strong>Sognatori e Realizzatori</strong>: Siamo impegnati a
            trasformare la nostra visione in realtà, una soluzione innovativa
            alla volta.
          </li>
        </ul>
      </div>
    </div>
  ),

  contactUs: 'Contattaci',
  imgUrls1: '/assets/images/about/v2406/s0-company.png',
  imgUrls2: [
    '/assets/images/about/v2406/s0-experiment.png',
    '/assets/images/about/v2406/s0-scientist.png',
  ],
  imgUrls3: [
    '/assets/images/about/v2406/s0-soil.png',
    '/assets/images/about/v2406/s0-seed.png',
  ],
}

// 第二部分 It
const aboutContentSection1Props: IAboutContentSection1 = {
  mTitle: 'La Nostra Missione',
  title: 'Tutte le Cose Vivono per Sempre e in Armonia con la Terra',
  descriptions: [
    'I rifiuti alimentari sono una delle sfide più grandi del mondo, e possiamo aiutarti a risolverla insieme. Ma non si tratta solo di rifiuti alimentari: le feci animali e tutti i rifiuti biodegradabili possono essere efficacemente decomposti.',
    'Combinando biotecnologia con la produzione moderna, GEME offre una soluzione per un migliore riciclo dei rifiuti: Ridurre & Riciclare in loco.',
    'Simile al concetto di cache nelle reti informatiche, il modo più efficiente per gestire i rifiuti, specialmente quelli biologici, è trattarli nel luogo in cui vengono creati, accorciando significativamente il percorso di riciclaggio.',
    'GEME crea prodotti per rendere questa idea una realtà. Essere ecologici e proteggere la natura non è solo uno slogan per noi; è attuabile attraverso ogni piccolo passo quando smaltiamo i nostri rifiuti quotidiani.',
    'GEME è più di un prodotto; è una soluzione tecnologica.',
    'Utilizziamo la tecnologia per creare una rete che collega team di scienziati, partner distributori, ristoranti sostenibili, comunità di riciclo, aziende agricole biologiche, stazioni di smaltimento, organizzazioni di gestione dei rifiuti e singoli individui. Ogni nodo ne beneficia, proprio come tutte le cose che vivono in armonia sul nostro pianeta.',
  ],
  points: [
    {
      title: 'Ripensare',
      desc: 'Adottare una visione olistica della cura ambientale. Trattare i rifiuti biologici non come spazzatura, ma come una risorsa per i giardini e il pianeta. Capire che le nostre azioni influenzano profondamente la Terra.',
    },
    {
      title: 'Ridurre',
      desc: `Ridurre l'uso delle risorse e i rifiuti. Seguire pratiche sostenibili per risparmiare risorse e proteggere l'ambiente. Gestire i rifiuti alla fonte per ridurre il loro impatto.`,
    },
    {
      title: 'Riutilizzare',
      desc: 'Riciclare, riutilizzare e riciclare i materiali. Trasformare diversi tipi di rifiuti in risorse utili, prolungandone la vita e riducendo la necessità di nuovi materiali.',
    },
    {
      title: 'Ripristinare',
      desc: "Proteggere e far rivivere gli ecosistemi naturali. Migliorare la salute del suolo, ridurre l'inquinamento e riparare gli ambienti danneggiati per garantire il benessere del nostro pianeta.",
    },
  ],
  fullImgUrl: '/assets/images/about/v2406/s2-family.png',
}

// 第三部分 It
const aboutContentSection15Props: IAboutContentSection15 = {
  mTitle: 'Il Nostro Team',
  title: 'Menti Pionieristiche, Cuori Appassionati',
  bodyTexts: (
    <>
      <div>
        <strong>Visionari</strong>: I nostri leader visionari tracciano la
        direzione, ispirandoci a pensare oltre l'ordinario e sfidare gli
        approcci convenzionali alla gestione dei rifiuti.
      </div>
      <div>
        <strong>Scienziati</strong>: I nostri brillanti scienziati sono in prima
        linea nella ricerca, esplorando costantemente nuovi modi per sfruttare
        il potere della natura per soluzioni sostenibili per i rifiuti.
      </div>
      <div>
        <strong>Ingegneri</strong>: I nostri ingegneri qualificati danno vita
        alle idee, trasformando concetti innovativi in soluzioni tangibili che
        fanno una reale differenza nel mondo.
      </div>
      <div>
        <strong>Collaboratori</strong>: Promuoviamo uno spirito di
        collaborazione, incoraggiando la comunicazione aperta e lo scambio di
        idee a tutti i livelli dell'organizzazione.
      </div>
    </>
  ),
  mainImgUrl: '/assets/images/about/v2406/s1-birth.png',
  imgSectionUrl1: '/assets/images/about/v2406/s1-team.png',
  imgSectionUrl2: '/assets/images/about/v2406/s1-meeting.png',
  imgSectionUrl3: '/assets/images/about/v2406/s1-colleagues.png',
}

// 第四部分 It
const aboutContentSection2Props: IAboutContentSection2 = {
  mTitle: 'I Nostri Valori',
  title: 'Segui la Strada Meno Battuta',
  desc: 'Basiamo le nostre azioni sulla verità e sui principi fondamentali. Con un obiettivo chiaro in vista, sogniamo ambiziosamente ma prendiamo decisioni ponderate per raggiungerlo.',
  dataList: [
    {
      title: 'Essere di Classe Mondiale',
      desc: `Stabiliamo i più alti standard, perseguendo incessantemente l'eccellenza in tutti gli aspetti del nostro lavoro, con la sostenibilità al centro.`,
    },
    {
      title: 'Aperto e Cooperativo',
      desc: `Favorire il dialogo aperto e la collaborazione per trovare soluzioni collettive. Costruire partnership solide con individui, organizzazioni e comunità.`,
    },
    {
      title: 'Sempre in Apprendimento',
      desc: `Abbracciare la ricerca all'avanguardia per affrontare le sfide ambientali. Innovare continuamente e affinare le nostre soluzioni per ottenere risultati ottimali.`,
    },
    {
      title: 'Essere di Supporto',
      desc: `Coltivare un ambiente di supporto in cui gli individui si sentano valorizzati, incoraggiati e spinti a raggiungere il loro pieno potenziale.`,
    },
    {
      title: 'Fatti e Soluzioni',
      desc: `Creare soluzioni efficaci non influenzate da assunzioni o pregiudizi, ma dai risultati degli esperimenti e dai dati; lasciamo che siano i dati a guidarci.`,
    },
    {
      title: 'Assumersi la Responsabilità',
      desc: `Garantire che i nostri impegni, il nostro lavoro sia allineato ai nostri valori e principi etici. Condividere la nostra esperienza e conoscenza per dare potere alle comunità di tutto il mondo.`,
    },
  ],
}

// Logo Cloud Props It
const aboutLogoCloudProps: IAboutLogoCloudProps = {
  mTitle: 'La Nostra Presenza nei Media',
  title: 'Piccoli Progressi, Grandi Impatti',
}

// 第五部分 It
const aboutContentSection4Props: IAboutContentSection4 = {
  mTitle: 'I Nostri Traguardi',
  title: 'Fondamenta Solide, Passo dopo Passo',
  desc: "Guidati dalla passione e da un impegno condiviso verso l'eccellenza, avanziamo rapidamente nel nostro processo di sviluppo.",
  progressList: [
    {
      progressBarTitle: 'Luglio 2022',
      title: 'Campagna Kickstarter',
      desc: (
        <div>
          Ottenuto{' '}
          <a href="https://www.kickstarter.com/projects/geme/geme-harvest-ready-to-use-organic-compost-easily">
            supporto
          </a>{' '}
          dai sostenitori di oltre 22 paesi in tutto il mondo.
        </div>
      ),
    },
    {
      progressBarTitle: 'Marzo 2023',
      title: 'Ingresso nel Mercato USA',
      desc: 'Iniziata la vendita negli Stati Uniti, lanciato il negozio autorizzato su Amazon.',
    },
    {
      progressBarTitle: 'Giugno 2023',
      title: 'Vendite in Europa',
      desc: 'Primi lotti di macchine arrivati in Europa, configurazione del magazzino locale.',
    },
    {
      progressBarTitle: 'Gennaio 2024',
      title: 'Aggiornamento Modello GEME I',
      desc: 'Aggiornamento hardware dopo 1 anno di feedback dei clienti, più silenzioso e robusto.',
    },
    {
      progressBarTitle: 'Set/Ott 2024',
      title: 'GEME II',
      desc: 'Più intelligente, più conveniente e più accessibile.',
    },
    {
      progressBarTitle: '2026',
      title: 'GEME Networking',
      desc: 'Collegare comunità, fattorie e soluzioni di gestione dei rifiuti per la sostenibilità.',
    },
  ],
}

// 第六部分 It
const aboutContentSection6Props: IAboutContentSection6 = {
  title: 'Collabora con GEME',
  incentives: [
    {
      name: 'Vivi con GEME',
      link: '/product/geme',
      imageSrc: '/assets/images/about/icons/use-geme.png',
      description: (
        <>
          Sentiti bene, fai del bene, vivi in modo sostenibile. Sostituisci il
          tuo smaltitore di rifiuti con{' '}
          <a href="/product/geme">GEME Composter</a>.
        </>
      ),
    },
    {
      name: 'Compostaggio su Larga Scala con GEME',
      link: '/industrial-equipments',
      imageSrc: '/assets/images/about/icons/composting.png',
      description: `Dalle case alle fabbriche, biotecnologia personalizzata per un'eccellenza di compostaggio di livello industriale.`,
    },
    {
      name: 'Unisciti a GEME Networking',
      link: '/geme-network-survey',
      imageSrc: '/assets/images/about/icons/networking.png',
      description: `Comunità di scambio di compost gratuita! Condividi ciò che non ti serve, coltiva insieme un futuro più verde.`,
    },
    {
      name: 'Affiliati con GEME',
      link: '/coming-soon',
      imageSrc: '/assets/images/about/icons/affiliate-marketing.png',
      description: `Diventa un campione GEME! Unisciti alla nostra unione di affiliati e guida la rivoluzione sostenibile.`,
    },
    {
      name: 'Vendita o Distribuzione con GEME',
      link: 'https://eu.jotform.com/form/221943772954062',
      imageSrc: '/assets/images/about/icons/distribution.png',
      description: `Espandi la tua portata e unisciti al movimento GEME. Cerchiamo distributori forti in tutto il mondo.`,
    },
    {
      name: 'Investimento con GEME',
      link: 'mailto:admin@geme.bio',
      imageSrc: '/assets/images/about/icons/profits.png',
      description: `Alimenta il futuro! Investi in GEME e unisciti a un movimento sostenibile rivoluzionario. (admin@geme.bio).`,
    },
  ],
}

function AboutPageIt() {
  return (
    <>
      <div className="py-8 lg:pt-6 lg:pb-16">
        <AboutHeroSection {...aboutHeroSectionProps} />
        <AboutContentSection1 {...aboutContentSection1Props} />
        <AboutContentSection15 {...aboutContentSection15Props} />
        <AboutContentSection2 {...aboutContentSection2Props} />
        <AboutLogoCloud {...aboutLogoCloudProps} />
        <AboutContentSection4 {...aboutContentSection4Props} />
        <AboutContentSection6 {...aboutContentSection6Props} />
      </div>
    </>
  )
}

export { AboutPageIt }
