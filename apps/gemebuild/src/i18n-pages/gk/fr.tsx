/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { IAlternativeSideBySideWithImagesProps } from '../../components/feature-sections'
import { IWithSquareImagesProps } from '../../components/product-features'
import CurrentStatus from './components/CurrentStatus'
import HeroSection, { IGKHeroSectionProps } from './components/HeroSection'
import TheLongTermDependence from './components/TheLongTermDependence'
import OrganicWaste from './components/OrganicWaste'
import { IThreeColumnWithDescriptionProps } from '../../components/category-previews'
import SoilImprovement from './components/SoilImprovement'
import EmpiricalComparison, {
  IEmpiricalComparisonProps,
} from './components/EmpiricalComparison'

// 第1部分配置文件 En版
const gkHeroSectionProps: IGKHeroSectionProps = {
  title: 'GK Resource Recycling Technology',
  highlightTitle: 'Orderly cycle that follows the laws of nature',
  description: (
    <>
      <p>
        Realize the closed-loop operation of the biological cycle "from the land
        and back to the land"
      </p>
      <p className="mt-4">
        Realize "renewable resources, friendlier environment, healthier soil,
        and safer food".
      </p>
      <p className="mt-4">
        It has been successfully verified after more than 50 years of practice
      </p>
    </>
  ),
  imageAlt: 'GK Resource Recycling Technology',
}

// 第2部分配置文件 En版
const theLongTermDependenceProps: IWithSquareImagesProps = {
  title: 'The long-term dependence on fertilizers on arable land has led to',
  features: [
    {
      name: 'Soil Acidification',
      title: 'Soil Acidification',
      imageSrc: '/assets/images/gk/s1-1.png',
      imageAlt: 'Soil Acidification',
    },
    {
      name: 'Secondary Salinization',
      title: 'Secondary Salinization',
      imageSrc: '/assets/images/gk/s1-2.png',
      imageAlt: 'Secondary Salinization',
    },
    {
      name: 'Soil is Poor and Degraded',
      title: 'Soil is Poor and Degraded',
      imageSrc: '/assets/images/gk/s1-3.png',
      imageAlt: 'Soil is Poor and Degraded',
    },
    {
      name: 'Increased soil-borne diseases',
      title: 'Increased soil-borne diseases',
      imageSrc: '/assets/images/gk/s1-4.png',
      imageAlt: 'Increased soil-borne diseases',
    },
  ],
}

// 第3部分配置文件 En版
const currentStatusProps: IAlternativeSideBySideWithImagesProps = {
  textAndImageblocks: [
    {
      name: 'Join the movement',
      LeftBlock: () => (
        <>
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Current status of soil organic matter content
                  <span>how fast food waste breakdown</span>
                </h2>
                <div className="prose mt-4 text-lg text-gray-500">
                  <ul>
                    <li>
                      International healthy soil organic matter content 5%
                    </li>
                    <li>Japan 6%</li>
                    <li>US 5%</li>
                    <li>Europe 4%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
      RightBlock: () => (
        <>
          <Image
            className="relative mx-auto"
            width={490}
            height={490}
            src="/assets/images/gk/s2-1.png"
            alt="GEME GK recycling technology"
          />
        </>
      ),
    },
    {
      name: 'Powered by Biotechnology',
      LeftBlock: () => (
        <>
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  <span className="block text-gray-900 xl:inline">
                    How long does it take for soil organic matter to increase by
                    0.1%?
                  </span>
                  <span>not dehydration</span>
                </h2>
                <div className="prose mt-4 text-lg text-gray-500">
                  <ul>
                    <li>Under natural fallowing, it takes 79 years</li>
                    <li>
                      Green manure fresh grass takes 5 years to add 6 tons per
                      acre
                    </li>
                    <li>
                      Ordinary organic fertilizer takes 2 years to add 9 tons
                      per acre
                    </li>
                    <li>GK, it takes 1 year to add 2.4 tons per acre</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
      RightBlock: () => (
        <>
          <Image
            className="relative mx-auto"
            width={490}
            height={490}
            src="/assets/images/gk/s2-2.png"
            alt="GEME GK recycling technology"
          />
        </>
      ),
    },
  ],
}

// 第4部分配置文件 En版
const organicWasteProps: IThreeColumnWithDescriptionProps = {
  title: 'Organic waste is the highest quality organic matter resource',
  description: (
    <>
      <p>
        Bio-waste, especially kitchen waste, is the highest quality organic
        matter resource
      </p>
      <p>
        The protein contained in every 50 million tons of kitchen waste is
        equivalent to the protein output of 3.3 million acres of soybeans per
        year
      </p>
    </>
  ),
  imageAspectClassName: 'aspect-w-1 aspect-h-1 ',
  categories: [
    {
      name: 'Bio-waste',
      imageSrc: '/assets/images/gk/s4-1.png',
      imageAlt: 'Bio-waste',
    },
    {
      name: 'GEME & GEME-Kobold',
      imageSrc: '/assets/images/gk/s4-2.png',
      imageAlt: 'GEME & GEME-Kobold',
    },
    {
      name: 'Organic Fertilizer',
      imageSrc: '/assets/images/gk/s4-3.png',
      imageAlt: 'Organic Fertilizer',
    },
  ],
}

// 第5部分配置文件 En版
const soilImprovementProps: IAlternativeSideBySideWithImagesProps = {
  title:
    'Soil Improvement Programs Of GK Technology - Bring Soils Back To Life Quickly',
  description:
    'GK soil remediation/improvement, soil enhancement overall ideas core solution:',
  textAndImageblocks: [
    {
      name: 'Join the movement',
      LeftBlock: () => (
        <>
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Organic matter enhancement
                </h3>
                <p className="mt-4 text-lg text-gray-500">
                  Soil fast-acting carbon and steady-state carbon synergize with
                  mineral nutrients to enhance soil physical and chemical
                  properties
                </p>
                <h3 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">
                  Revitalization of beneficial bacteria + crop-specific
                  microbial complex
                </h3>
                <p className="mt-4 text-lg text-gray-500">
                  Complex microflora and biostimulants regulate the dynamic
                  balance of microbial communities
                </p>
              </div>
            </div>
          </div>
        </>
      ),
      RightBlock: () => (
        <>
          <Image
            className="relative mx-auto"
            width={490}
            height={490}
            src="/assets/images/gk/s5-1.gif"
            alt="GK soil improvement"
          />
        </>
      ),
    },
  ],
}

// 第6部分配置文件 En版
const empiricalComparisonProps: IEmpiricalComparisonProps = {
  title: (
    <>
      Empirical comparison before and after GK soil remediation/improvement and
      soil enhancement
    </>
  ),
  description1: (
    <>
      The growth distribution of the roots can not only determine how effective
      the live bacteria fermentation fertilizer is on the health and growth of
      the crop, but also see the improvement of soil quality
    </>
  ),
  description2: (
    <>
      In the comparative experiment, you can clearly observe the effectiveness
      of GK on soil vitality restoration and the promotion of GEME-Kobold rich
      soil on plant growth and disease resistance
    </>
  ),
  pictureDescription1: 'Left picture: Experimental group using GK technology',
  pictureSubDescription2:
    'Right picture: Control group using conventional plantation method',
  features: [
    {
      name: 'Seedling stage',
      imageSrc: '/assets/images/gk/s6-1.png',
      imageAlt: 'Soil Acidification',
    },
    {
      name: '2 weeks after sowing',
      imageSrc: '/assets/images/gk/s6-2.png',
      imageAlt: 'Secondary Salinization',
    },
    {
      name: '1 month after sowing',
      imageSrc: '/assets/images/gk/s6-3.png',
      imageAlt: 'Soil is Poor and Degraded',
    },
    {
      name: 'Field comparison',
      imageSrc: '/assets/images/gk/s6-4.png',
      imageAlt: 'Soil is Poor and Degraded',
    },
  ],
}

// 第7部分配置文件 En版
const empiricalComparison2Props: IEmpiricalComparisonProps = {
  title: (
    <>
      Empirical comparison of contaminated soil and water treatment in Vietnam
      using GEME-Kobold
    </>
  ),
  features: [
    {
      name: 'Before vs After 1',
      title: 'Before vs After',
      imageSrc: '/assets/images/gk/s7-1.png',
      imageAlt: 'Before vs After',
    },
    {
      name: 'Before vs After 2',
      title: 'Before vs After',
      imageSrc: '/assets/images/gk/s7-2.png',
      imageAlt: 'Before vs After 2',
    },
  ],
}

export function GKPageFr() {
  return (
    <>
      <HeroSection {...gkHeroSectionProps} />
      <TheLongTermDependence {...theLongTermDependenceProps} />
      <CurrentStatus {...currentStatusProps} />
      <OrganicWaste {...organicWasteProps} />
      <SoilImprovement {...soilImprovementProps} />
      <EmpiricalComparison
        {...empiricalComparisonProps}
        grayBackground={false}
      />
      <EmpiricalComparison
        {...empiricalComparison2Props}
        grayBackground={true}
        gridClassName="grid-cols-1 lg:grid-cols-2"
      />
    </>
  )
}
