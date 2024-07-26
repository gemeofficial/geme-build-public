/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { IManualsPageProps } from '../manual'
import { IManualHeroSectionProps } from '../manual/components/HeroSection'
import GEMESolarPoweredTrashCompactor, {
  IGEMESolarPoweredTrashCompactorProps,
} from './components/GEMESolarPoweredTrashCompactor'
import HeroSection from './components/HeroSection'
import Link from 'next/link'
import TheFirstChoiceForSmartCities, {
  featureIcon as TheFirstChoiceForSmartCitiesIcon,
} from './components/TheFirstChoiceForSmartCities'
import ProductFeatures, {
  featureIcon as ProductFeaturesIcon,
} from './components/ProductFeatures'
import ProductOptions, {
  featureIcon as productOptionsIcon,
} from './components/ProductOptions'
import { IGridWithOffsetIconsProps } from '../../components/feature-sections'
import MultipleCombinations, {
  IMultipleCombinationsProps,
} from './components/MultipleCombinations'

// 第1部分配置文件 En版
const solarCompactorHeroSectionProps: IManualHeroSectionProps = {
  title: 'Solar Compactor',
  description: (
    <>
      <p>
        GEME Solar Compactor's solution is to use the industry's leading
        cloud-based waste classification collection management software,
        connected to the latest loT smart sensors and smart trash can
        technology, to provide a comprehensive smart waste management solution.
      </p>
      <p className="mt-3">Our comprehensive product line includes:</p>
      <div className="prose prose-ul:text-lg prose-ul:text-gray-500 prose-ul:text-left">
        <ul className="mt-3">
          <li>Solar compactor (SolarCompactor).</li>
          <li>Waste Analysis Platform (GreenCityNetworks)</li>
        </ul>
      </div>
    </>
  ),
  primaryButtonLabel: `Let's talk`,
  secondaryButtonLabel: 'Customer Service',
  buttonLn: true,
}

// 第2部分配置文件 En版
const GEMESolarPoweredTrashCompactorProps: IGEMESolarPoweredTrashCompactorProps =
  {
    textAndImageblocks: [
      {
        name: 'solar-powered trash compactor',
        RightBlock: () => (
          <>
            <Image
              className="relative mx-auto"
              width={490}
              height={490}
              src="/assets/images/solar-compactor/s2-1.png"
              alt="solar compactor on street"
            />
          </>
        ),
        LeftBlock: () => (
          <>
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    <span>Natural</span> GEME solar-powered trash compactor
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Let the sunshine help you compress the garbage!
                  </p>
                  <p className="mt-4 text-lg text-gray-500">
                    Let the volume of garbage be reduced by 5 times, and the
                    cost of garbage cleaning and transportation is reduced by up
                    to 80%
                  </p>
                </div>
              </div>
            </div>
          </>
        ),
      },
      {
        name: 'The first choice for smart cities',
        RightBlock: () => (
          <>
            <Image
              className="relative mx-auto"
              width={450}
              height={310}
              src="/assets/images/solar-compactor/s2-2.png"
              alt="solar compactor on street"
            />
          </>
        ),
        LeftBlock: () => (
          <>
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    The first choice for smart cities
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    The{' '}
                    <strong className="font-bold text-emerald-600">
                      GreenCityNetworks(GCN)
                    </strong>{' '}
                    system collects and analyzes data in real time to
                    automatically allocate transportation frequency and plan
                    vehicle routes. Efficient energy saving and emission
                    reduction GEME solar-powered trash compactor
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/green-city-networks"
                      passHref
                      className="inline-flex rounded-md border border-transparent bg-v2311-bg-dark-green hover:bg-v2311-primary px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                    >
                      Green City Networks (GCN)
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        ),
      },
    ],
  }

// 第3部分配置文件 En版
const theFirstChoiceForSmartCitiesProps = {
  title: 'The beginning of your green city',
  features: [
    {
      name: 'Streamline operations & improve efficiency',
      description: (
        <>
          <ul>
            <li>Reduce collections by up to 80% on average</li>
            <li>
              Informed decision-making and operational planning with real-time
              data and analytics in the GCN system, increased productivity &
              route efficiency
            </li>
          </ul>
        </>
      ),
      icon: TheFirstChoiceForSmartCitiesIcon(1),
    },
    {
      name: 'Beautify your city & improve the quality of life',
      description: (
        <>
          <ul>
            <li>
              Say goodbye to eliminating visible waste, windblown litter,
              overflows, and critter access
            </li>
            <li>Goodbye to refuse truck traffic, noise & congestion</li>
            <li>Welcome to clean streets, beautiful communities</li>
          </ul>
        </>
      ),
      icon: TheFirstChoiceForSmartCitiesIcon(2),
    },
    {
      name: 'Eco-friendly & Reduced Carbon Footprint',
      description: (
        <>
          <ul>
            <li>Reduce times of clean-up shipments</li>
            <li>Reduce fuel consumption</li>
            <li>Reduce emissions</li>
            <li>Reduce pollution </li>
            <li>Reduce carbon footprint</li>
            <li>Powered by solar energy, clean power, no emissions</li>
          </ul>
        </>
      ),
      icon: TheFirstChoiceForSmartCitiesIcon(3),
    },
  ],
}

// 第4部分配置文件 En版
const productFeaturesProps = {
  title: 'Product Features',
  featureNameWrapperClassName: 'lg:min-h-[48px] ',
  features: [
    {
      name: 'Up to 5 times more waste',
      icon: ProductFeaturesIcon(1),
    },
    {
      name: 'Powered by solar energy',
      icon: ProductFeaturesIcon(2),
    },
    {
      name: 'Embedded central control system',
      icon: ProductFeaturesIcon(3),
    },
    {
      name: 'Full bucket rate reminder',
      icon: ProductFeaturesIcon(4),
    },
    {
      name: 'Safety sensors',
      icon: ProductFeaturesIcon(5),
    },
    {
      name: 'Overall waterproof function',
      icon: ProductFeaturesIcon(6),
    },
    {
      name: 'Input port indicator',
      icon: ProductFeaturesIcon(7),
    },
    {
      name: 'Input port anti-pinch device',
      icon: ProductFeaturesIcon(8),
    },
    {
      name: 'Automatic induction door opening',
      icon: ProductFeaturesIcon(9),
    },
    {
      name: 'Wireless data transmission',
      icon: ProductFeaturesIcon(10),
    },
    {
      name: 'GPS location tracking',
      icon: ProductFeaturesIcon(11),
    },
    {
      name: 'Wheelie bin compatible',
      icon: ProductFeaturesIcon(12),
    },
  ],
}

// 第5部分配置文件 En版
const productOptionsProps: IGridWithOffsetIconsProps = {
  title: 'Product Options',
  features: [
    {
      name: 'Size',
      description: (
        <ul>
          <li>
            120 L / 32 gal. <br /> Wheelie bin compatible
          </li>
          <li>
            240 L / 64 gal. <br /> Wheelie bin compatible
          </li>
          <li>
            360 L / 95 gal. <br /> Wheelie bin compatible
          </li>
        </ul>
      ),
      icon: productOptionsIcon(1),
    },
    {
      name: 'Power',
      description: (
        <ul>
          <li>
            Solar <br /> Solar power only
          </li>
          <li>
            AC Plug-in <br /> AC power only
          </li>
          <li>
            Hybrid <br /> Both solar and AC power
          </li>
        </ul>
      ),
      icon: productOptionsIcon(2),
    },
    {
      name: 'Aperture',
      description: (
        <ul>
          <li>
            General <br /> Automatic induction door opening
          </li>
          <li>
            Recycling <br /> Entrance for dropping bottles
          </li>
          <li>
            Recycling <br /> Entrance for dropping paper
          </li>
        </ul>
      ),
      icon: productOptionsIcon(3),
    },
  ],
}

// 第6部分配置文件 En版
const multipleCombinationsProps: IMultipleCombinationsProps = {
  title: 'Multiple combinations',
  description: '',
  categories: [
    {
      name: 'Bottle waste, Other garbage & Paper waste',
      imageSrc: '/assets/images/solar-compactor/s6-1-1130.png',
      imageAlt:
        'The solar compactor with bottle waste, other garbage and paper waste',
      imageClassName: '!object-contain',
    },
    {
      name: 'Bottle waste & Other garbage',
      imageSrc: '/assets/images/solar-compactor/s6-2-1130.png',
      imageAlt: 'The solar compactor with bottle waste and other garbage',
      imageClassName: '!object-contain',
    },
    {
      name: 'Other garbage & Paper waste',
      imageSrc: '/assets/images/solar-compactor/s6-3-1130.png',
      imageAlt: 'The solar compactor with other garbage and paper waste',
      imageClassName: '!object-contain',
    },
  ],
}

export function SolarCompactorPageEn({
  PrefetchLink,
  WhatsAppBusinessAccountURL,
}: IManualsPageProps) {
  return (
    <>
      <HeroSection
        {...solarCompactorHeroSectionProps}
        PrefetchLink={PrefetchLink}
        WhatsAppBusinessAccountURL={WhatsAppBusinessAccountURL}
      />
      <GEMESolarPoweredTrashCompactor
        {...GEMESolarPoweredTrashCompactorProps}
      />
      <TheFirstChoiceForSmartCities {...theFirstChoiceForSmartCitiesProps} />
      <ProductFeatures {...productFeaturesProps} />
      <ProductOptions {...productOptionsProps} />
      <MultipleCombinations {...multipleCombinationsProps} />
    </>
  )
}
