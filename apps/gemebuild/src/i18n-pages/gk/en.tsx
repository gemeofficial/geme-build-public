/* eslint-disable react/no-unescaped-entities */
import HeroSection, {
  type IHeroSectionProps,
} from './new-components/HeroSection'
import Section1, { ISection1Props } from './new-components/Section1'
import Section2, { ISection2Props } from './new-components/Section2'
import Section3, { ISection3Props } from './new-components/Section3'
import { IImgAndTextSectionProps, ImgAndTextSection } from 'ui'
import CompareSection, {
  ICompareSectionProps,
} from './new-components/CompareSection'

// 第1部分配置文件 En版
const gkHeroSectionProps: IHeroSectionProps = {
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
  imageUrl: '/assets/images/gk/new/hero-bg.jpg',
  imageAlt: 'GK Resource Recycling Technology',
}

const section1Props: ISection1Props = {
  title: 'Our Target',
  description: (
    <>
      <p className="mt-4">
        Since 2020, our GK technology has provided organic fertilizer to 300,000
        agricultural and garden plants, greatly increasing yields and improving
        soils. By 2030, we expect the number of communities we serve to rise to
        one million, contributing to regenerative agriculture.
      </p>
    </>
  ),
  stats: [
    {
      percentage: '300,000+',
      text: 'Since 2020, our GK technology has provided organic fertilizer to 300,000 agricultural and garden plants, greatly increasing yields and improving soils.',
    },
    {
      percentage: '1,000,000+',
      text: 'By 2030, we expect the number of communities we serve to rise to one million, contributing to regenerative agriculture.',
    },
  ],
}

const section2Props: ISection2Props = {
  title: 'The long-term dependence on fertilizers on arable land has led to',
  description: '',
  imageList: [
    {
      title: 'Soil Acidification',
      src: '/assets/images/gk/s1-1.png',
      alt: 'Soil Acidification',
    },
    {
      title: 'Secondary Salinization',
      src: '/assets/images/gk/s1-2.png',
      alt: 'Secondary Salinization',
    },
    {
      title: 'Soil is Poor and Degraded',
      src: '/assets/images/gk/s1-3.png',
      alt: 'Soil is Poor and Degraded',
    },
  ],
}

const section3Props: ISection3Props = {
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
  imageList: [
    {
      title: 'Bio-waste',
      src: '/assets/images/gk/new/fruit-and-vegetable-waste.jpg',
      alt: 'Bio-waste',
    },
    {
      title: 'GEME & GEME-Kobold',
      src: '/assets/images/gk/s4-2.png',
      alt: 'GEME & GEME-Kobold',
    },
    {
      title: 'Organic Fertilizer',
      src: '/assets/images/gk/s4-3.png',
      alt: 'Organic Fertilizer',
    },
  ],
}

// 图文section
const imageTextProps: IImgAndTextSectionProps = {
  title: 'Bring Soils Back To Life Quickly',
  description: (
    <>
      <p className="mb-2">
        GK soil remediation/improvement, soil enhancement overall ideas core
        solution:
      </p>

      <strong>Organic matter enhancement</strong>
      <p>
        Soil fast-acting carbon and steady-state carbon synergize with mineral
        nutrients to enhance soil physical and chemical properties.
      </p>
      <hr className="mt-4 mb-4" />

      <strong>
        Revitalization of beneficial bacteria + crop-specific microbial complex
      </strong>
      <p>
        Complex microflora and biostimulants regulate the dynamic balance of
        microbial communities.
      </p>
    </>
  ),
  imageUrl: '/assets/images/gk/s5-1.gif',
  isReverse: true,
}

const compareSectionProps: ICompareSectionProps = {
  title: (
    <>
      Empirical comparison before and after GK soil remediation/improvement and
      soil enhancement
    </>
  ),
  description: (
    <p>
      The growth distribution of the roots can not only determine how effective
      the live bacteria fermentation fertilizer is on the health and growth of
      the crop, but also see the improvement of soil quality.In the comparative
      experiment, you can clearly observe the effectiveness of GK on soil
      vitality restoration and the promotion of GEME-Kobold rich soil on plant
      growth and disease resistance.
    </p>
  ),
  features: [
    {
      title: 'Seedling stage',
      imageSrc: '/assets/images/gk/s6-1.png',
      imageAlt: 'Soil Acidification',
      desc: 'Seedling stage',
    },
    {
      title: '2 weeks after sowing',
      imageSrc: '/assets/images/gk/s6-2.png',
      imageAlt: 'Secondary Salinization',
      desc: '2 weeks after sowing',
    },
    {
      title: '1 month after sowing',
      imageSrc: '/assets/images/gk/s6-3.png',
      imageAlt: 'Soil is Poor and Degraded',
      desc: '1 month after sowing',
    },
    {
      title: 'Field comparison',
      imageSrc: '/assets/images/gk/s6-4.png',
      imageAlt: 'Soil is Poor and Degraded',
      desc: 'Field comparison',
    },
  ],
  pictureDescription1: 'Left picture: Experimental group using GK technology',
  pictureSubDescription2:
    'Right picture: Control group using conventional plantation method',
}

export function GKPageEn() {
  return (
    <>
      <HeroSection {...gkHeroSectionProps} />
      <Section2 {...section2Props} />
      <Section3 {...section3Props} />
      <ImgAndTextSection {...imageTextProps} />
      <div className="bg-v2311-bg-light-green">
        <CompareSection {...compareSectionProps} />
      </div>
      <Section1 {...section1Props} />
    </>
  )
}
