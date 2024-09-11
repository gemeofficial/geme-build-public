import {
  IInlinePalyerType,
  InlinePlayer,
  type IOxygenCycleProps,
  ReviewsScoreHeader,
  ScrollTriggeredAnimatedOxygenCycle,
  SvgFoodWaste,
  SvgMicrobe,
  SvgOxygen,
  SvgTemperature,
  SvgWaterDrop,
  SvgWood,
} from 'ui'

import {
  ShortVideo,
  IShortVideoProps,
  IUseCompostContrastProps,
  UseCompostContrast,
  IExaminingReportProps,
  ExaminingReport,
} from './components'

import { ILinkComponent } from '../../contexts/link-context'
import { FC } from 'react'

export interface IHowItWorksProps {
  ReviewsComponent: FC<{}>
  PrefetchLink?: ILinkComponent
}

// page静态页面的内容 配置文件 En版
// 短视频工作过程section
const shortVideoProps: IShortVideoProps = {
  title: 'Compost Pile in A Box',
  description: (
    <>
      <ul className="list-disc ml-4 mt-4">
        <li className="mt-4">
          <a href="product/geme">GEME Composter</a> quickly breaks down food
          scraps and pet waste using special microbes.
        </li>

        <li className="mt-4">
          The mixer increases the surface area of food waste for microbes to
          attach.
        </li>

        <li className="mt-4">
          It creates <strong>ideal environment for microbes</strong> to thrive
          and decompose waste.
        </li>

        <li className="mt-4">
          Similar to outdoor composting, but in a neat and convenient container.
        </li>
      </ul>
    </>
  ),
  videoPosterUrl: '/assets/images/home-v2311/use-compost-cover.jpg',
  videoSrcUrl:
    'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/geme-genereate-compost-12s-480p.mp4',
}

// 图文section
const imageTextProps: IShortVideoProps = {
  title: 'Microbes, Not Dehydrate',
  description: (
    <>
      <p>
        Many food dehydrator machines are marketed misleadingly as composters.
        However, they are simply bread makers that cook and dehydrate food, not
        actually composting it.
      </p>
      <p>These dehydrators use electricity to heat and dry food scraps.</p>
      <hr className="mt-4 mb-4" />
      <p>
        In contrast, the GEME Composter utilizes{' '}
        <a href="/geme-kobold">GEME Kobold</a> to accelerate the composting
        process.
      </p>
      <p>
        It uses electricity to{' '}
        <strong>simulate and maintain the optimal environment</strong>, for
        microbes to thrive, effectively breaking down organic waste.
      </p>
    </>
  ),
  imageUrl: '/assets/images/how-it-works/geme-vs-dehydrator.png',
  isReverse: true,
}

// 工作原理图
const gemeComposterImageProps: IExaminingReportProps = {
  title: `How the GEME Composter Works`,
  description: `Completely understanding how the machine works and why the GEME Composter is the best home composter with its feature subsystems.`,
  imageInfo: {
    imageUrl: '/assets/images/how-it-works/how-geme-composter-works.jpg',
    alt: 'GEME Composter working schematic',
  },
}

// Kobold工作过程大图section
const gemeKoboldImageProps: IExaminingReportProps = {
  title: `How the GEME Kobold works`,
  description: `GEME has tiny decomposers called Kobold that eat your food scraps. These decomposers multiply quickly and break down the scraps into nutrient-rich compost. As they work, the amount of food waste shrinks. Kobold also keeps the compost healthy by balancing its acidity and moisture.`,
  imageInfo: {
    imageUrl: '/assets/images/how-it-works/how-geme-kobold-works.png',
    alt: 'How the GEME Kobold works',
  },
}

// 滚动圈配置项
const oxygenCycleProps: IOxygenCycleProps = {
  title: 'How Natural Composting Works',
  progresses: [
    {
      minProgress: 12.5,
      content: (
        <>
          <SvgFoodWaste className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body !text-[11px] md:!text-[24px] md:!v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Nutrients(Food Waste)
          </h3>
          <p className="hidden md:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base">
            Micro-organisms require C, N, phosphorus (P) and potassium (K) as
            the primary nutrients. C:N ratio of raw materials is important. The
            optimal C:N ratio of raw materials is between 25:1 and 30:1.
          </p>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base">
            Where the ratio is too high, the growth of micro-organisms is
            limited, resulting in a longer composting time. A less C:N ratio
            leads to underutilization of N and odour can be a problem.
          </p>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            GEME Composter and GEME Kobold will take care of the C:N ratio
            automatically for you.
          </p>
        </>
      ),
    },
    {
      minProgress: 25,
      content: (
        <>
          <SvgOxygen className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body !text-[11px] md:!text-[24px] md:!v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Aerobic Composting:
            <br />
            Nature Nutrient Cycle
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Aerobic composting breaks down organic matter using oxygen ( O
            <sub>2</sub> ), requiring aerobic microbes to decompose materials
            into water vapor, heat, and nutrient-rich humus. The GEME composter
            simplifies this process with an efficient aeration system,
            optimizing oxygen flow for effective decomposition.
          </p>
          <p className="lg:hidden v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Breaks down biowaste with oxygen ( O<sub>2</sub> ) for valuable
            nutrients. GEME composter simplifies this with an efficient air
            system for faster decomposition.
          </p>
        </>
      ),
    },
    {
      minProgress: 40,
      content: (
        <>
          <SvgWood className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body !text-[11px] md:!text-[24px] md:!v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Brown Materials in Composting: Ensuring Optimal Conditions
          </h3>
          <p className="hidden lg:block  v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Brown materials, rich in carbon, play a crucial role in composting
            by balancing the carbon-to-nitrogen (C:N) ratio, essential for
            microbial activity. Their structure enhances porosity, promoting
            aerobic decomposition. GEME Kobold starter, containing carefully
            curated brown materials, ensures a balanced C:N ratio and optimal
            composting conditions.
          </p>
          <p className="lg:hidden  v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Brown materials, rich in carbon, balance the C:N ratio for microbes.
            Their structure promotes air flow. GEME Kobold starter provides
            these brown materials for perfect conditions
          </p>
        </>
      ),
    },
    {
      minProgress: 60,
      content: (
        <>
          <SvgWaterDrop className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body !text-[11px] md:!text-[24px] md:!v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Moisture: The Secret to
            <br />
            Fast Composting
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Moisture is king in composting, impacting how microbes break down
            materials. The sweet spot? 40-60%. This fuels microbial growth,
            speeding up decomposition. Too much (&gt;70%) creates odors and
            slows breakdown. Dryness (&lt;30%) hinders microbes, stalling the
            process.
          </p>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            The GEME composter simplifies moisture management. Its one-touch
            smart control automatically adjusts, ensuring the perfect 40-60%
            range for efficient, high-quality compost.
          </p>
          <p className="lg:hidden v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Right moisture (40-60%) fuels microbes that break down waste. Too
            wet (over 70%) creates odors and slows things down. Too dry (under
            30%) makes microbes sluggish. GEME manages moisture for perfect
            composting
          </p>
        </>
      ),
    },
    {
      minProgress: 78,
      content: (
        <>
          <SvgTemperature className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body !text-[11px] md:!text-[24px] md:!v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Composting:
            <br />A Temperature Dance
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Composting transforms waste into nutrient-rich soil through
            temperature changes driven by microbial activity. Initially,
            microbes heat the compost to 40-50°C. During peak decomposition,
            temperatures rise to 50-65°C for rapid breakdown. As the compost
            matures, it cools to 30-40°C.
          </p>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            The GEME composter optimizes this process by regulating temperature
            at each stage, ensuring efficient composting and high-quality
            compost.
          </p>
          <p className="lg:hidden v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Composting turns waste into nutrient-rich soil through temperature
            shifts caused by microbial activity. The GEME composter enhances
            this by controlling temperatures throughout, ensuring efficient and
            high-quality compost.
          </p>
        </>
      ),
    },
    {
      minProgress: 100,
      content: (
        <>
          <SvgMicrobe className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body !text-[11px] md:!text-[24px] md:!v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Microbes
            <br />
            (GEME Kobold)
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Composting is a natural process driven by microbes that break down
            organic waste into nutrient-rich soil amendments. Fungi tackle tough
            materials like cellulose, while other microbes decompose other
            organics. GEME Kobold, a unique heat-resistant microbial team,
            accelerates composting.
          </p>
          <p className="lg:hidden v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Nature recyclers: Microbes break down waste into nutrient-rich soil
            improvers. Fungi tackle tough materials, while others handle the
            rest. GEME Kobold, a heat-resistant microbial team, speeds up
            composting.
          </p>
        </>
      ),
    },
  ],
}

// 证书及测试报告
const examiningReportProps: IExaminingReportProps = {
  title: `Certificates and Test Report`,
  description: `Both GEME Kobold and GEME Composter are well-certified and have surpassed all tests conducted by authoritative organizations.`,
  imageInfo: {
    imageUrl: '/assets/images/how-it-works/certificates-and-test-report.jpeg',
    alt: 'Certificates and test report for GEME',
  },
  downloadHref: (
    <>
      Download Salt Level Breakdown Report Test{' '}
      <a href="#" target="_blank">
        HERE
      </a>
    </>
  ),
}

// before vs after
const useCompostContrastProps: IUseCompostContrastProps = {
  title: 'Before and After Applying GEME Compost',
  description:
    'See how GEME compost can help make the earth greener by reducing landfill waste, improving soil health, and promoting plant growth.',
  beforeImage: {
    imageUrl: '/assets/images/how-it-works/used-geme-compost-before.png',
    alt: 'Before compost utilization',
  },
  afterImage: {
    imageUrl: '/assets/images/how-it-works/used-geme-compost-after.png',
    alt: 'After compost utilization',
  },
}

// YouTube 视频播放器
const inlinePlayerProps: IInlinePalyerType = {
  title: 'Seeing is Believing',
  description: (
    <>
      <strong>Break down 2kg waste in 7 hours</strong>! This unedited 7-hour
      video might seem boring, but it offers an in-depth look at the real-world
      performance of the GEME Composter. Comparing the first 3 minutes to the
      last 10 minutes, you will be amazed.
    </>
  ),

  type: 'youtube',
  videoSrcUrlOrVidioId: 'asNRoqkC_BA',
  mixpanelFrom: 'Product page inline player',
}

function HowItWorksEn({ ReviewsComponent }: IHowItWorksProps) {
  return (
    <>
      <div className="py-8 lg:pt-6 lg:pb-16">
        <ShortVideo {...shortVideoProps} />
        <ShortVideo {...imageTextProps} />
        <InlinePlayer {...inlinePlayerProps} />
        <ExaminingReport {...gemeComposterImageProps} />
        <ExaminingReport {...gemeKoboldImageProps} />
        <ScrollTriggeredAnimatedOxygenCycle {...oxygenCycleProps} />
        <ExaminingReport {...examiningReportProps} />
        <UseCompostContrast {...useCompostContrastProps} />
        <div className="my-4">
          <ReviewsScoreHeader locale="en" />
        </div>
        <ReviewsComponent />
      </div>
    </>
  )
}

export { HowItWorksEn }
