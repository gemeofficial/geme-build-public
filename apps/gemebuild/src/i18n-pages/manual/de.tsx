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
          <li>1. Auspacken und Einrichten</li>
          <li>2. Vorsichten und Hinweise</li>
          <li>3. Wie aktiviere ich GEME-Kobold?</li>
          <li>4. Demo für den täglichen Gebrauch</li>
          <li>5. Kompost Verwendung</li>
          <li>6. Wie Sie Ihren GEME stabilisieren können?</li>
          <li>7. Verwendung des Bedienteils und Fehlerbehebungen</li>
          <li>8. Austausch der UV-Lampe</li>
          <li>9. Was kann in GEME eingegeben werden und was nicht?</li>
        </ol>
      </div>
    </>
  ),
  primaryButtonLabel: 'Hilfe über WhatsApp anfordern',
  secondaryButtonLabel: 'Kunden-Service',
  hintsLinkLabel: 'PDF-Handbuch herunterladen',
  buttonLn: true,
}

// 第2部分配置文件 De版
const featuresWithVideos: IFeaturesWithVideos = {
  title: 'Benutzerhandbuch！',
  description: 'Videos zu verschiedenen Themen aus Benutzerhandbuch',
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
      name: 'Vorsichten',
      description:
        'Bitte beachten Sie bei der Verwendung des GEME Komposters die folgenden Hinweise.',
      icon: featureIcon(2),
      videoUrl: 'https://www.youtube.com/embed/f09NNpAnyTQ',
      videoImageSrc: '/assets/images/manual/video-cover-cautions.png',
      videoImageAlt: 'GEME Composter Vorsichten',
    },
    {
      name: 'Mikrobiota aktivieren',
      description: `GEME-kobold in den Tank geben; 800ml Wasser einfüllen; 6+ Stunden warten`,
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
        'Benutzen Sie GEME wie einen normalen Mülleimer für Bioabfälle',
      icon: featureIcon(4),
      videoUrl: 'https://www.youtube.com/embed/mi8fwlJdt68',
      videoImageSrc: '/assets/images/manual/video-cover-daily-usage.png',
      videoImageAlt: 'GEME Composter Tägliche Nutzung',
    },
    {
      name: 'Kompost Verwendung',
      description:
        'Entnehmen Sie den Kompost und mischen Sie es mit Erde, dann können Sie Ihre Pflanzen ernähren',
      icon: featureIcon(5),
      videoUrl: 'https://www.youtube.com/embed/qHo9WgCKUsw',
      videoImageSrc: '/assets/images/manual/video-cover-by-product-usage.png',
      videoImageAlt:
        'GEME Composter Verwendung von Nebenprodukten (Organischer Kompost)',
    },
    {
      name: 'Wie Sie Ihren GEME stabilisieren können?',
      description:
        'Heben Sie GEME ein wenig an und schrauben Sie einen der Füße fest',
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
      name: 'Austausch der UV-Lampe',
      description:
        'GEME verwendet eine UV-Lampe zur Desinfektion, mit 15.000+ Stunden Lebensdauer. Sie können es jedoch austauschen, wenn es kaputt ist.',
      icon: featureIcon(8),
      videoUrl: 'https://www.youtube.com/embed/VdAtQfpSQ_E',
      videoImageSrc: '/assets/images/manual/video-cover-change-uv-lamp.png',
      videoImageAlt: 'GEME Composter UV-Lampe wechseln',
    },
    {
      name: 'Was kann in GEME eingegeben werden und was nicht?',
      description:
        'Bis zu 90% Bioabfälle können in GEME eingegeben werden. Es gibt einige Abfälle, mit denen GEME nicht gut verarbeiten kann.',
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
    'Sie müssen die Buttons nicht drücken; Sie müssen das Kohlenstoff-Stickstoff-Verhältnis des Komposts nicht einstellen; Sie müssen den Kompost nicht wenden und den Filter nicht wechseln. Sie können Ihre Abfälle jederzeit reinwerfen und den Kompost herausnehmen, wann immer Sie wollen. Nichts Besonderes.',
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
  title: 'Geben Sie diese Gegenstände NICHT in GEME ein',
  description:
    'GEME ist nur für die Verarbeitung der meisten Bioabfälle geeignet',
  features: [
    {
      name: 'Knochen',
      description:
        'Große Knochen verletzen den Schacht, wenn sie nicht zerkleinert sind.',
      icon: noSymbolIcon(),
    },
    {
      name: 'Schalen',
      description:
        'Sie beschädigen die Maschine, wenn sie nicht zerbrochen werden.',
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
