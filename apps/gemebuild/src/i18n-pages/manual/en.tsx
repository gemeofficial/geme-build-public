import { ILinkComponent } from '../../contexts/link-context'
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

export interface IManualsPageProps {
  PrefetchLink?: ILinkComponent
  WhatsAppBusinessAccountURL?: string
}

// 第1部分配置文件 En版
const manualHeroSectionProps: IManualHeroSectionProps = {
  title: 'Tutorial',
  description: (
    <>
      <p>
        <strong>Highlights of Content</strong>
      </p>
      <br></br>
      <div className="flex flex-col justify-center items-center lg:block">
        <ol className="text-left">
          <li>1. How to unbox and setup</li>
          <li>2. Cautions & Notice</li>
          <li>3. How to Activate GEME-Kobold</li>
          <li>4. Daily Usage Demo</li>
          <li>5. By-Product(Compost) Usage</li>
          <li>6. How to Make Your GEME Steady</li>
          <li>7. Control Panel Usage and troubleshooting</li>
          <li>8. How to Change the UV lamp</li>
          <li>9. What can be put into GEME, what can not</li>
        </ol>
      </div>
    </>
  ),
  primaryButtonLabel: 'Get Help on WhatsApp',
  secondaryButtonLabel: 'Customer Service',
  hintsLinkLabel: 'Download PDF for manual book',
  buttonLn: true,
}

// 第2部分配置文件 En版
const featuresWithVideos: IFeaturesWithVideos = {
  title: 'User Manual！',
  description: 'Watch Video for Different User Manual Topics',
  features: [
    {
      name: 'Unboxing',
      description:
        'This video guides you how to unbox GEME package and basic setup',
      icon: featureIcon(1),
      videoUrl: 'https://www.youtube.com/embed/izYVDd6KwO8',
      videoImageSrc: '/assets/images/manual/video-cover-unboxing.png',
      videoImageAlt: 'GEME Composter Unboxing',
    },
    {
      name: 'Cautions',
      description:
        'GEME composter using caution, just a little attention needs to be paid.',
      icon: featureIcon(2),
      videoUrl: 'https://www.youtube.com/embed/f09NNpAnyTQ',
      videoImageSrc: '/assets/images/manual/video-cover-cautions.png',
      videoImageAlt: 'GEME Composter Use Cautions',
    },
    {
      name: 'Activate Microbiota',
      description:
        '1. Put GEME-kobold in the container; 2. Pour 800ml water; 3. Wait 6+ hours',
      icon: featureIcon(3),
      videoUrl: 'https://www.youtube.com/embed/hSpq48ymKrA',
      videoImageSrc:
        '/assets/images/manual/video-cover-activate-microbiota.png',
      videoImageAlt: 'GEME Composter How to Activate GEME-Kobold(Microbiota)',
    },
    {
      name: 'Daily Usage',
      description:
        'Using GEME daily is as simple as regular trash bins, nothing to explain',
      icon: featureIcon(4),
      videoUrl: 'https://www.youtube.com/embed/mi8fwlJdt68',
      videoImageSrc: '/assets/images/manual/video-cover-daily-usage.png',
      videoImageAlt: 'GEME Composter Daily Usage Demo',
    },
    {
      name: 'By-Product(Compost) Usage',
      description:
        'Take out the by-product and mix with soil, then go ahead and nourish your plants',
      icon: featureIcon(5),
      videoUrl: 'https://www.youtube.com/embed/qHo9WgCKUsw',
      videoImageSrc: '/assets/images/manual/video-cover-by-product-usage.png',
      videoImageAlt:
        'GEME Composter How to Use the By-Product(Organic Compost)',
    },
    {
      name: 'How to Make Steady',
      description:
        'Lift GEME a little bit and screw one of the feet to make it steady',
      icon: featureIcon(6),
      videoUrl: 'https://www.youtube.com/embed/rthDSasoOrY',
      videoImageSrc: '/assets/images/manual/video-cover-make-steady.png',
      videoImageAlt: 'GEME Composter How to Make Machine Steady',
    },
    {
      name: 'Control Panel Usage & Troubleshooting',
      description:
        'Usually no need to care about the indicator and buttons, just in case something happen, this video can help',
      icon: featureIcon(7),
      videoUrl: 'https://www.youtube.com/embed/jc5_ferVOa8',
      videoImageSrc:
        '/assets/images/manual/video-cover-control-panel-usage.png',
      videoImageAlt: 'GEME Composter How to troubleshoot via the Control Panel',
    },
    {
      name: 'How to Change UV Lamp',
      description:
        'GEME uses a UV lamp to sanitize, it can work for 15,000+ hours. However, you can change it if it is broken.',
      icon: featureIcon(8),
      videoUrl: 'https://www.youtube.com/embed/VdAtQfpSQ_E',
      videoImageSrc: '/assets/images/manual/video-cover-change-uv-lamp.png',
      videoImageAlt: 'GEME Composter How to Change UV Lamp',
    },
    {
      name: 'Can & Can Not',
      description:
        'Up to 90% bio-waste can be put into GEME. However, there are some waste GEME is not good at handling them.',
      icon: featureIcon(9),
      videoUrl: 'https://www.youtube.com/embed/2DSFcxFRSos',
      videoImageSrc: '/assets/images/manual/video-cover-can-and-can-not.png',
      videoImageAlt: 'GEME Composter What Can Put and What Can Not',
    },
  ],
}

// 第3部分配置文件 En版
const gemeDailyUsageProps = {
  title: 'Daily Usage',
  description:
    'No need to push any buttons, no need to adjust the carbon-nitrogen ratio of the compost, no need to turn the compost, no need to replace the filter. Put your waste in at anytime, pick the compost out at any time you want. Nothing special.',
  categories: [
    {
      imageSrc: '/assets/images/meet-geme/m1.png',
      imageAlt: 'a hand throwing food waste into the GEME',
    },
    {
      imageSrc: '/assets/images/meet-geme/m2.png',
      imageAlt: 'a hand with the generate fertilizer',
    },
    {
      imageSrc: '/assets/images/meet-geme/m3.png',
      imageAlt: 'use fertilizer for flower farming',
    },
  ],
}

// 第4部分配置文件 En版
const canNotCompostItemsProps: ICanNotCompostItemsProps = {
  title: "Don't put those items into GEME",
  description: 'GEME is only suitable for treatment of most bio-waste',
  features: [
    {
      name: 'Bones',
      description: 'Big bones hurt the shaft unless smash them',
      icon: noSymbolIcon(),
    },
    {
      name: 'Shells',
      description: 'They will hurt the machine unless broken them',
      icon: noSymbolIcon(),
    },
    {
      name: 'Fruit Stems',
      description: 'Long fiber hurts the shaft, unless cut it short',
      icon: noSymbolIcon(),
    },
    {
      name: 'Paper and Tissue',
      description: 'Paper or tissue is not suitable, they are not green waste',
      icon: noSymbolIcon(),
    },
    {
      name: 'Teabag',
      description: 'It contains non-biowaste, which might not good for plants',
      icon: noSymbolIcon(),
    },
    {
      name: 'Cigarette',
      description: "GEME doesn't smoke, it could be harmful for plants",
      icon: noSymbolIcon(),
    },
    {
      name: 'Napkins',
      description: 'It is not bio-waste, just put them in another trash bin',
      icon: noSymbolIcon(),
    },
    {
      name: 'Seeds',
      description:
        'They are hard to compost, by nature they are anti composting',
      icon: noSymbolIcon(),
    },
  ],
}

export function ManualsPageEn({
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
