/* eslint-disable react/no-unescaped-entities */
import CanNotCompostItems, {
  ICanNotCompostItemsProps,
  noSymbolIcon,
} from './components/CanNotCompostItems'
import FeaturesWithVideos, {
  featureIcon,
  IFeaturesWithVideos,
} from './components/FeaturesWithVideos'
import GemeDailyUsage from './components/GemeDailyUsage'
import HeroSection, { IManualHeroSectionProps } from './components/HeroSection'
import { IManualsPageProps } from './en'

// 第1部分配置文件 It版
const manualHeroSectionProps: IManualHeroSectionProps = {
  title: 'Tutorial',
  description: (
    <>
      <p>
        <strong>Punti salienti del contenuto</strong>
      </p>
      <br></br>
      <div className="flex flex-col justify-center items-center lg:block">
        <ol className="text-left">
          <li>1. Come disimballare e configurare</li>
          <li>2. Attenzioni & Avvisi</li>
          <li>3. Come attivare GEME-Kobold</li>
          <li>4. Demo d'uso quotidiano</li>
          <li>5. Uso del sottoprodotto (compost)</li>
          <li>6. Come rendere GEME stabile</li>
          <li>7. Uso del pannello di controllo e risoluzione dei problemi</li>
          <li>8. Come cambiare la lampada UV</li>
          <li>9. Cosa può essere messo in GEME, cosa no</li>
        </ol>
      </div>
    </>
  ),
  primaryButtonLabel: 'Ottieni assistenza su WhatsApp',
  secondaryButtonLabel: 'Servizio Clienti',
  hintsLinkLabel: 'Scarica PDF per il manuale',
  buttonLn: true,
}

// 第2部分配置文件 It版
const featuresWithVideos: IFeaturesWithVideos = {
  title: 'Manuale Utente！',
  description: 'Guarda i video per diversi argomenti del manuale utente',
  features: [
    {
      name: 'Disimballaggio',
      description:
        'Questo video ti guida su come disimballare il pacchetto GEME e la configurazione di base',
      icon: featureIcon(1),
      videoUrl: 'https://www.youtube.com/embed/izYVDd6KwO8',
      videoImageSrc: '/assets/images/manual/video-cover-unboxing.png',
      videoImageAlt: 'Disimballaggio del GEME Composter',
    },
    {
      name: 'Attenzioni',
      description:
        "Utilizzare il composter GEME con cautela, basta prestare un po' di attenzione.",
      icon: featureIcon(2),
      videoUrl: 'https://www.youtube.com/embed/f09NNpAnyTQ',
      videoImageSrc: '/assets/images/manual/video-cover-cautions.png',
      videoImageAlt: "Precauzioni per l'uso del composter GEME",
    },
    {
      name: 'Attivare i Microbi',
      description:
        '1. Metti il GEME-kobold nel contenitore; 2. Versa 800 ml di acqua; 3. Aspetta 6+ ore',
      icon: featureIcon(3),
      videoUrl: 'https://www.youtube.com/embed/hSpq48ymKrA',
      videoImageSrc:
        '/assets/images/manual/video-cover-activate-microbiota.png',
      videoImageAlt: 'Come attivare il GEME-Kobold (Microbi)',
    },
    {
      name: 'Uso Quotidiano',
      description:
        'Utilizzare GEME quotidianamente è semplice come i normali cestini della spazzatura, nulla da spiegare',
      icon: featureIcon(4),
      videoUrl: 'https://www.youtube.com/embed/mi8fwlJdt68',
      videoImageSrc: '/assets/images/manual/video-cover-daily-usage.png',
      videoImageAlt: 'Demo di utilizzo quotidiano del GEME Composter',
    },
    {
      name: 'Utilizzo del Sottoprodotto (Compost)',
      description:
        'Rimuovi il sottoprodotto e mescolalo con il terreno, poi vai avanti e nutri le tue piante',
      icon: featureIcon(5),
      videoUrl: 'https://www.youtube.com/embed/qHo9WgCKUsw',
      videoImageSrc: '/assets/images/manual/video-cover-by-product-usage.png',
      videoImageAlt:
        'Come utilizzare il sottoprodotto (compost organico) del GEME Composter',
    },
    {
      name: 'Come rendere stabile GEME',
      description:
        'Solleva leggermente GEME e avvita uno dei piedini per renderlo stabile',
      icon: featureIcon(6),
      videoUrl: 'https://www.youtube.com/embed/rthDSasoOrY',
      videoImageSrc: '/assets/images/manual/video-cover-make-steady.png',
      videoImageAlt: 'Come rendere stabile la macchina GEME Composter',
    },
    {
      name: 'Uso del pannello di controllo e risoluzione dei problemi',
      description:
        "Di solito non c'è bisogno di preoccuparsi degli indicatori e dei pulsanti, ma nel caso succeda qualcosa, questo video può aiutare",
      icon: featureIcon(7),
      videoUrl: 'https://www.youtube.com/embed/jc5_ferVOa8',
      videoImageSrc:
        '/assets/images/manual/video-cover-control-panel-usage.png',
      videoImageAlt:
        'Come risolvere i problemi con il pannello di controllo del GEME Composter',
    },
    {
      name: 'Come cambiare la lampada UV',
      description:
        'GEME utilizza una lampada UV per sanitizzare, può funzionare per oltre 15.000 ore. Tuttavia, puoi cambiarla se si rompe.',
      icon: featureIcon(8),
      videoUrl: 'https://www.youtube.com/embed/VdAtQfpSQ_E',
      videoImageSrc: '/assets/images/manual/video-cover-change-uv-lamp.png',
      videoImageAlt: 'Come cambiare la lampada UV del GEME Composter',
    },
    {
      name: 'Cosa si può e cosa non si può fare',
      description:
        'Fino al 90% dei rifiuti organici può essere inserito in GEME. Tuttavia, ci sono alcuni rifiuti che GEME non gestisce bene.',
      icon: featureIcon(9),
      videoUrl: 'https://www.youtube.com/embed/2DSFcxFRSos',
      videoImageSrc: '/assets/images/manual/video-cover-can-and-can-not.png',
      videoImageAlt:
        'Cosa si può mettere e cosa non si può mettere nel GEME Composter',
    },
  ],
}

// 第3部分配置文件 It版
const gemeDailyUsageProps = {
  title: 'Uso Quotidiano',
  description:
    'Non c’è bisogno di premere pulsanti, né di regolare il rapporto carbonio-azoto del compost, né di girare il compost o sostituire il filtro. Inserisci i tuoi rifiuti in qualsiasi momento, preleva il compost quando vuoi. Nulla di speciale.',
  categories: [
    {
      imageSrc: '/assets/images/meet-geme/m1.png',
      imageAlt: 'una mano che getta rifiuti alimentari nel GEME',
    },
    {
      imageSrc: '/assets/images/meet-geme/m2.png',
      imageAlt: 'una mano con il fertilizzante generato',
    },
    {
      imageSrc: '/assets/images/meet-geme/m3.png',
      imageAlt: 'usare il fertilizzante per coltivare fiori',
    },
  ],
}

// 第4部分配置文件 It版
const canNotCompostItemsProps: ICanNotCompostItemsProps = {
  title: 'Non inserire questi oggetti in GEME',
  description:
    'GEME è adatto solo per il trattamento della maggior parte dei rifiuti organici',
  features: [
    {
      name: 'Ossa',
      description:
        'Le ossa grandi danneggiano l’albero motore, a meno che non le rompiate',
      icon: noSymbolIcon(),
    },
    {
      name: 'Gusci',
      description: 'Danneggeranno la macchina, a meno che non siano spezzati',
      icon: noSymbolIcon(),
    },
    {
      name: 'Gambi di Frutta',
      description:
        'Le fibre lunghe danneggiano l’albero motore, a meno che non siano tagliate corte',
      icon: noSymbolIcon(),
    },
    {
      name: 'Carta e Fazzoletto',
      description: 'Carta o fazzoletto non sono adatti, non sono rifiuti verdi',
      icon: noSymbolIcon(),
    },
    {
      name: 'Bustina di Tè',
      description:
        'Contiene materiali non organici, che potrebbero non essere buoni per le piante',
      icon: noSymbolIcon(),
    },
    {
      name: 'Sigaretta',
      description: 'GEME non fuma, potrebbe essere dannoso per le piante',
      icon: noSymbolIcon(),
    },
    {
      name: 'Tovaglioli',
      description:
        'Non è un rifiuto organico, basta metterli in un altro cestino',
      icon: noSymbolIcon(),
    },
    {
      name: 'Semi',
      description:
        'Sono difficili da compostare, per natura sono anti-compostaggio',
      icon: noSymbolIcon(),
    },
  ],
}

export function ManualsPageIt({
  PrefetchLink,
  WhatsAppBusinessAccountURL,
}: IManualsPageProps) {
  return (
    <>
      <HeroSection
        {...manualHeroSectionProps}
        PrefetchLink={PrefetchLink}
        WhatsAppBusinessAccountURL={WhatsAppBusinessAccountURL}
      />
      <FeaturesWithVideos {...featuresWithVideos} />
      <GemeDailyUsage {...gemeDailyUsageProps} />
      <CanNotCompostItems {...canNotCompostItemsProps} />
    </>
  )
}
