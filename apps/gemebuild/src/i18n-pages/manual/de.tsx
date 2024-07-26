import CanNotCompostItems, {
  ICanNotCompostItemsProps,
  noSymbolIcon,
} from './components/CanNotCompostItems'
import FeaturesWithVideos, {
  featureIcon,
  IFeaturesWithVideos,
} from './components/FeaturesWithVideos'
import GeemDailyUsage from './components/GemeDailyUsage'
import HeroSection, { IManualHeroSectionProps } from './components/HeroSection'
import { IManualsPageProps } from './en'

// 第1部分配置文件 De版
const manualHeroSectionProps: IManualHeroSectionProps = {
  title: 'Anleitung',
  description: (
    <>
      <p>
        <strong>Inhaltsübersicht</strong>
      </p>
      <br></br>
      <div className="flex flex-col justify-center items-center lg:block">
        <ol className="text-left">
          <li>1. Wie man auspackt und einrichtet</li>
          <li>2. Vorsichtsmaßnahmen & Hinweise</li>
          <li>3. Wie man GEME-Kobold aktiviert</li>
          <li>4. Tägliche Nutzungsvorführung</li>
          <li>5. Verwendung von Nebenprodukten (Kompost)</li>
          <li>6. Wie man GEME stabil macht</li>
          <li>7. Bedienung des Kontrollpanels und Fehlerbehebung</li>
          <li>8. Wie man die UV-Lampe wechselt</li>
          <li>9. Was in GEME hineingelegt werden kann und was nicht</li>
        </ol>
      </div>
    </>
  ),
  primaryButtonLabel: 'Hilfe über WhatsApp erhalten',
  secondaryButtonLabel: 'Kundendienst',
  hintsLinkLabel: 'PDF-Handbuch herunterladen',
  buttonLn: true,
}

// 第2部分配置文件 De版
const featuresWithVideos: IFeaturesWithVideos = {
  title: 'Benutzerhandbuch！',
  description:
    'Sehen Sie sich Videos zu verschiedenen Benutzerhandbuchthemen an',
  features: [
    {
      name: 'Auspacken',
      description:
        'Dieses Video zeigt Ihnen, wie Sie das GEME-Paket auspacken und grundlegende Einstellungen vornehmen',
      icon: featureIcon(1),
      videoUrl: 'https://www.youtube.com/embed/izYVDd6KwO8',
      videoImageSrc: '/assets/images/manual/video-cover-unboxing.png',
      videoImageAlt: 'GEME Composter Auspacken',
    },
    {
      name: 'Vorsichtsmaßnahmen',
      description:
        'Beim Gebrauch des GEME-Komposters ist Vorsicht geboten, es ist nur wenig Aufmerksamkeit erforderlich.',
      icon: featureIcon(2),
      videoUrl: 'https://www.youtube.com/embed/f09NNpAnyTQ',
      videoImageSrc: '/assets/images/manual/video-cover-cautions.png',
      videoImageAlt: 'GEME Composter Vorsichtsmaßnahmen',
    },
    {
      name: 'Mikrobiota aktivieren',
      description:
        '1. Setzen Sie GEME-Kobold in den Behälter; 2. Gießen Sie 800 ml Wasser ein; 3. Warten Sie 6+ Stunden',
      icon: featureIcon(3),
      videoUrl: 'https://www.youtube.com/embed/hSpq48ymKrA',
      videoImageSrc:
        '/assets/images/manual/video-cover-activate-microbiota.png',
      videoImageAlt:
        'GEME Composter So aktivieren Sie GEME-Kobold (Mikrobiota)',
    },
    {
      name: 'Tägliche Nutzung',
      description:
        'Die tägliche Nutzung von GEME ist so einfach wie bei normalen Mülleimern, nichts zu erklären',
      icon: featureIcon(4),
      videoUrl: 'https://www.youtube.com/embed/mi8fwlJdt68',
      videoImageSrc: '/assets/images/manual/video-cover-daily-usage.png',
      videoImageAlt: 'GEME Composter Tägliche Nutzung',
    },
    {
      name: 'Verwendung von Nebenprodukten (Kompost)',
      description:
        'Nehmen Sie das Nebenprodukt heraus und mischen Sie es mit Erde, dann gehen Sie weiter und nähren Sie Ihre Pflanzen',
      icon: featureIcon(5),
      videoUrl: 'https://www.youtube.com/embed/qHo9WgCKUsw',
      videoImageSrc: '/assets/images/manual/video-cover-by-product-usage.png',
      videoImageAlt:
        'GEME Composter Verwendung von Nebenprodukten (Organischer Kompost)',
    },
    {
      name: 'Wie man stabil macht',
      description:
        'Heben Sie GEME ein wenig an und schrauben Sie einen der Füße fest, um es stabil zu machen',
      icon: featureIcon(6),
      videoUrl: 'https://www.youtube.com/embed/rthDSasoOrY',
      videoImageSrc: '/assets/images/manual/video-cover-make-steady.png',
      videoImageAlt: 'GEME Composter Stabilisieren',
    },
    {
      name: 'Verwendung und Fehlerbehebung des Bedienfelds',
      description:
        'Normalerweise müssen Sie sich nicht um die Anzeigeleuchten und Tasten kümmern, für den Fall, dass etwas passiert, kann dieses Video helfen',
      icon: featureIcon(7),
      videoUrl: 'https://www.youtube.com/embed/jc5_ferVOa8',
      videoImageSrc:
        '/assets/images/manual/video-cover-control-panel-usage.png',
      videoImageAlt: 'GEME Composter Fehlerbehebung am Bedienfeld',
    },
    {
      name: 'Wie man die UV-Lampe wechselt',
      description:
        'GEME verwendet eine UV-Lampe zur Desinfektion, sie kann über 15.000 Stunden arbeiten. Wenn sie jedoch kaputt ist, können Sie sie wechseln.',
      icon: featureIcon(8),
      videoUrl: 'https://www.youtube.com/embed/VdAtQfpSQ_E',
      videoImageSrc: '/assets/images/manual/video-cover-change-uv-lamp.png',
      videoImageAlt: 'GEME Composter UV-Lampe wechseln',
    },
    {
      name: 'Was hinein darf und was nicht',
      description:
        'Bis zu 90 % Bioabfall können in GEME gegeben werden. Es gibt jedoch einige Abfälle, die GEME nicht gut verarbeiten kann.',
      icon: featureIcon(9),
      videoUrl: 'https://www.youtube.com/embed/2DSFcxFRSos',
      videoImageSrc: '/assets/images/manual/video-cover-can-and-can-not.png',
      videoImageAlt: 'GEME Composter Was darf hinein und was nicht',
    },
  ],
}

// 第3部分配置文件 De版
const geemDailyUsageProps = {
  title: 'Tägliche Nutzung',
  description:
    'Keine Tasten drücken, kein Anpassen des Kohlenstoff-Stickstoff-Verhältnisses des Komposts, kein Wenden des Komposts, kein Ersetzen des Filters erforderlich. Geben Sie Ihren Abfall jederzeit hinein, entnehmen Sie den Kompost, wann immer Sie möchten. Nichts Besonderes.',
  categories: [
    {
      imageSrc: '/assets/images/meet-geme/m1.png',
      imageAlt: 'eine Hand wirft Lebensmittelabfälle in den GEME',
    },
    {
      imageSrc: '/assets/images/meet-geme/m2.png',
      imageAlt: 'eine Hand mit dem erzeugten Dünger',
    },
    {
      imageSrc: '/assets/images/meet-geme/m3.png',
      imageAlt: 'Dünger für den Blumenanbau verwenden',
    },
  ],
}

// 第4部分配置文件 De版
const canNotCompostItemsProps: ICanNotCompostItemsProps = {
  title: 'Legen Sie diese Gegenstände nicht in GEME',
  description:
    'GEME ist nur für die Behandlung der meisten Bioabfälle geeignet',
  features: [
    {
      name: 'Knochen',
      description:
        'Große Knochen beschädigen die Welle, es sei denn, sie werden zerschlagen',
      icon: noSymbolIcon(),
    },
    {
      name: 'Schalen',
      description:
        'Sie beschädigen die Maschine, es sei denn, sie werden zerbrochen',
      icon: noSymbolIcon(),
    },
    {
      name: 'Fruchtstängel',
      description:
        'Lange Fasern beschädigen die Welle, es sei denn, sie werden kurz geschnitten',
      icon: noSymbolIcon(),
    },
    {
      name: 'Papier und Taschentücher',
      description:
        'Papier oder Taschentücher sind nicht geeignet, sie sind kein Grünabfall',
      icon: noSymbolIcon(),
    },
    {
      name: 'Teebeutel',
      description:
        'Es enthält nicht-biologische Abfälle, die für Pflanzen nicht gut sein könnten',
      icon: noSymbolIcon(),
    },
    {
      name: 'Zigarette',
      description: 'GEME raucht nicht, es könnte schädlich für Pflanzen sein',
      icon: noSymbolIcon(),
    },
    {
      name: 'Servietten',
      description:
        'Es ist kein Bioabfall, legen Sie sie einfach in einen anderen Mülleimer',
      icon: noSymbolIcon(),
    },
    {
      name: 'Samen',
      description:
        'Sie sind schwer zu kompostieren, von Natur aus sind sie gegen Kompostierung',
      icon: noSymbolIcon(),
    },
  ],
}

export function ManualsPageDe({
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
      <GeemDailyUsage {...geemDailyUsageProps} />
      <CanNotCompostItems {...canNotCompostItemsProps} />
    </>
  )
}
