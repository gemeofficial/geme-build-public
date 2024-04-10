import { ReactNode, SVGProps } from 'react'
import classNames from './lib/classNames'
import {
  IconCheckCycle,
  IconXCycle,
  SvgGreenArrow,
  usingCompostIcons,
} from './pdp-intro-svgs'
import { IconCycleArrow } from './icons'
interface IPdpIntroSection1Props {
  title?: ReactNode
  description?: ReactNode
  bgImageSrc?: string
  comparisonText?: { brfore: string; after: string }
  bottomItems?: [
    {
      id: number
      description?: ReactNode
    },
    {
      id: number
      description?: ReactNode
    },
    {
      id: number
      description?: ReactNode
    }
  ]
}

const pdpIntroSection1Props: IPdpIntroSection1Props = {
  title: "World's First Bio Waste Composter",
  description: 'Use microbiota to breakdown food waste quickly',
  bgImageSrc: 'https://placehold.co/1920x850',
  bottomItems: [
    { id: 1, description: 'Breakdown by Microbes' },
    { id: 2, description: 'Not by Dehydration' },
    { id: 3, description: 'Compost Pile in Box' },
  ],
}

function PdpIntroSection1({
  title,
  description,
  bgImageSrc,
  comparisonText,
  bottomItems,
}: IPdpIntroSection1Props) {
  return (
    <div
      className={classNames(
        ' h-[534px] md:h-[1060px] bg-cover bg-center bg-no-repeat'
      )}
      style={{ backgroundImage: `url(${bgImageSrc})` }}
    >
      <div className="px-4 py-8 mx-auto md:px-8 md:py-16 xl:py-[80px] xl:max-w-7xl h-full flex flex-col">
        <div className=" text-center ">
          {title && <h2 className="v2311-font-h1 text-white">{title}</h2>}
          {description && (
            <p className="v2311-font-body text-white">{description}</p>
          )}
        </div>
        <div className=" pb-4 sm:pb-0 md:pb-[12px] xl:pb-[12px] flex-1 flex items-end justify-around xl:gap-[320px] xl:justify-center v2311-font-h2 md:v2311-font-body xl:v2311-font-h2 text-v2311-primary text-center">
          <div>
            {comparisonText?.brfore || 'Before'}
            <br />
            100%
          </div>
          <div>
            {comparisonText?.after || 'After'}
            <br />
            5%
          </div>
        </div>
        <div className=" flex justify-center gap-2 md:gap-4 xl:gap-12">
          {bottomItems &&
            bottomItems.map((item) => {
              return (
                <div
                  key={item.id}
                  className="v2311-font-img-desc text-white bg-v2311-fg-dark-black px-2 py-1 md:px-4 md:py-2 rounded-xl"
                >
                  {item.description}
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

interface IPdpIntroSection3Props {
  title?: ReactNode
}

const pdpIntroSection3Props: IPdpIntroSection3Props = {
  title: '6-8 Hours',
}

function PdpIntroSection3({ title }: IPdpIntroSection3Props) {
  return (
    <div className="px-4 pb-8 md:px-8 md:pb-16 flex flex-col justify-center items-center w-full">
      <SvgGreenArrow />
      <p className=" v2311-font-h2 text-v2311-primary ">{title}</p>
    </div>
  )
}

function PdpIntroSection4() {
  return (
    <img
      className=" rounded-xl "
      src="/assets/images/pdp-v2311/introduction/noise-level.jpeg"
      alt="GEME Noise Performance"
    />
  )
  // return (
  //   <div className="px-4 pb-8 md:px-8 md:pb-16 w-full">
  //     <SvgNoiseCompare className="xl:hidden" />
  //     <SvgNoiseCompareLarge className="hidden xl:block" />
  //   </div>
  // )
}

interface IPdpIntroSection5Props {
  title?: ReactNode
  leftNotes?: ReactNode
}

const pdpIntroSection5Props: IPdpIntroSection5Props = {
  title: 'Almost All Of Waste Can Go into GEME',
  leftNotes: (
    <>
      <strong>400+</strong>
      <br />
      kinds of waste
    </>
  ),
}

function PdpIntroSection5({ title, leftNotes }: IPdpIntroSection5Props) {
  return (
    <div className="py-8 md:px-16">
      <div className=" bg-v2311-bg-light-green relative rounded-lg ">
        {/* 修复SEO ERROR 将SVG替换成图片渲染 */}
        {/* <SvgWasteToGeme className=" z-0 xl:hidden" />
        <SvgWasteToGemeLarge className=" z-0 hidden xl:block " /> */}

        <img
          src="/assets/images/pdp-v2311/introduction/waste-to-geme.svg"
          alt="introduction waste to geme"
          className=" z-0 xl:hidden"
        />
        <img
          src="/assets/images/pdp-v2311/introduction/waste-to-geme-large.svg"
          alt="introduction waste to geme"
          className=" z-0 hidden xl:block "
        />

        <div className=" absolute z-10 inset-0 flex flex-col items-center justify-end xl:max-w-7xl  xl:mx-auto">
          <div className=" w-full mb-16 pl-8 md:mb-24 md:pl-20 lg:mb-72 xl:mb-32 xl:pl-80">
            {leftNotes && (
              <p className=" v2311-font-img-desc xl:v2311-font-h3 text-white text-center bg-[#047857] rounded-full w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 py-3 px-3 ">
                {leftNotes}
              </p>
            )}
          </div>
          <div className=" p-4 xl:p-8 ">
            {title && <h2 className=" v2311-font-h2 text-white ">{title}</h2>}
          </div>
        </div>
      </div>
    </div>
  )
}

interface IPdpIntroSection6Props {
  title?: ReactNode
  description?: ReactNode

  items?: [
    {
      id: number
      featured?: boolean
      title?: ReactNode
      features?: ReactNode[]
      imageSrc?: string
      imageAlt?: string
    },
    {
      id: number
      featured?: boolean
      title?: ReactNode
      features?: ReactNode[]
      imageSrc?: string
      imageAlt?: string
    },
    {
      id: number
      featured?: boolean
      title?: ReactNode
      features?: ReactNode[]
      imageSrc?: string
      imageAlt?: string
    }
  ]
}

const pdpIntroSection6Props: IPdpIntroSection6Props = {
  title: 'Composting Made Easy',
  description: 'Loved by 100k+gardeners',
  items: [
    {
      id: 1,
      featured: true,
      title: 'GEME',
      imageSrc: 'https://placehold.co/156x99',
      imageAlt: 'GEME compose',
      features: [
        'Not dehydrating',
        'Not dehydrating',
        'Not dehydrating',
        'Not dehydrating',
      ],
    },
    {
      id: 2,
      title: 'Dehydrator',
      imageSrc: 'https://placehold.co/89x89',
      imageAlt: 'Dehydrator',
      features: [
        'Not dehydrating',
        'Not dehydrating',
        'Not dehydrating',
        'Not dehydrating',
      ],
    },
    {
      id: 3,
      title: 'Compost Pile',
      imageSrc: 'https://placehold.co/89x89',
      imageAlt: 'Compost Pile',
      features: [
        'Not dehydrating',
        'Not dehydrating',
        'Not dehydrating',
        'Not dehydrating',
      ],
    },
  ],
}

function PdpIntroSection6({
  title,
  description,
  items,
}: IPdpIntroSection6Props) {
  return (
    <section
      className={classNames(
        'px-4 py-8 mx-auto md:px-8 md:py-16 xl:py-[80px] xl:max-w-7xl'
      )}
    >
      <div className=" text-center">
        {title && (
          <h2 className=" v2311-font-h1 text-v2311-primary ">{title}</h2>
        )}
        {description && (
          <p className=" mt-4 md:mt-8 xl:mt-4 v2311-font-body text-v2311-fg-black hidden xl:block xl:v2311-font-h3 xl:font-normal">
            {description}
          </p>
        )}
      </div>
      <div className="mt-4 md:mt-8 w-full grid xl:grid-cols-10 xl:grid-rows-6 xl:gap-4 xl:max-w-4xl xl:mx-auto">
        {items?.map((item) => {
          return (
            <div
              key={item.id}
              className={classNames(
                'max-w-full w-full ',
                item.featured
                  ? ' col-span-2 xl:col-span-4 xl:row-span-full xl:col-start-4 xl:row-start-1 bg-[#047857] text-white rounded-3xl p-4 pb-8 md:p-8 md:pb-16 xl:p-8 xl:pt-4'
                  : ' text-v2311-primary xl:rounded-3xl xl:col-span-3 xl:row-span-5 xl:text-white xl:p-8 xl:pt-4',

                item.id === 2 ? 'xl:bg-[#80AB9D]' : '',
                item.id === 3 ? 'xl:bg-[#578F75]' : ''
              )}
            >
              {item?.title && (
                <h3
                  className={classNames(
                    'text-center xl:text-left',
                    item.featured
                      ? 'v2311-font-h2'
                      : 'v2311-font-body text-v2311-fg-black xl:text-white mt-4'
                  )}
                >
                  {item?.title}
                </h3>
              )}
              <div
                className={classNames(
                  'flex flex-row xl:flex-col items-center justify-center w-full xl:items-stretch',
                  item.featured
                    ? 'mt-4 md:mt-8 xl:mt-4 gap-4 md:gap-8 xl:gap-8'
                    : 'mt-2 md:mt-4 gap-2 md:gap-4'
                )}
              >
                {item?.imageSrc && (
                  <div
                    className={classNames(
                      item.featured
                        ? ' aspect-[156/99] flex-1'
                        : 'aspect-1 md:min-w-[120px] flex-[2]'
                    )}
                  >
                    <img
                      className={classNames(
                        'w-full',
                        item.featured
                          ? 'rounded-2xl flex-1'
                          : '  rounded-full xl:rounded-2xl '
                      )}
                      src={item?.imageSrc}
                      alt={item?.imageAlt}
                    />
                  </div>
                )}
                {item?.features && (
                  <ul
                    className={classNames(
                      'v2311-font-body xl:v2311-font-h3 xl:font-normal',
                      item.featured
                        ? 'flex-1'
                        : ' text-[8px] md:v2311-font-img-desc xl:v2311-font-body mr-2 md:mr-4 flex-[3]'
                    )}
                  >
                    {item?.features.map((feature, idx) => {
                      return (
                        <li
                          key={`${feature}_${idx}`}
                          className={classNames(
                            'flex items-center mb-1 md:mb-2 ',
                            item.featured ? 'xl:mb-2' : 'xl:mb-1'
                          )}
                        >
                          {item.featured ? (
                            <IconCheckCycle className="w-5 h-5 md:w-12 md:h-12 xl:w-8 xl:h-8 xl:mr-2" />
                          ) : (
                            <IconXCycle className="w-2 h-2 md:w-8 md:h-8 xl:w-5 xl:h-5 xl:mr-2" />
                          )}
                          {feature}
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

interface IPdpIntroSection7Props {
  title?: ReactNode
  description?: ReactNode
  features?: ReactNode[]
}

const pdpIntroSection7Props: IPdpIntroSection7Props = {
  title: 'Big, More & Long Term',
  description: 'Work 7x24 But Energy Saving',
  features: [
    '·  10+ people family daily using',
    '·  3 months no cleaning required',
    '·  Worth the price',
  ],
}

function PdpIntroSection7({
  title,
  description,
  features,
}: IPdpIntroSection7Props) {
  return (
    <div className=" py-8 md:py-16 xl:p-0">
      <div className=" relative ">
        {/*<SvgDeviceCompare className=" xl:hidden " />*/}
        {/*<SvgDeviceCompareLarge className=" hidden xl:block " />*/}
        <img
          src="/assets/images/pdp-v2311/introduction/device-compare.svg"
          alt="Introduction GEME Composter Super Large Volume"
          className=" z-0 xl:hidden"
        />
        <img
          src="/assets/images/pdp-v2311/introduction/device-compare-large.svg"
          alt="Introduction GEME Composter Super Large Volume"
          className=" z-0 hidden xl:block "
        />

        <div className=" absolute top-0 w-full h-full flex flex-col xl:flex-row items-center justify-between xl:items-start">
          <div className="hidden xl:block xl:flex-1"></div>
          <div className=" px-4 pt-8 md:px-8 md:pt-16 xl:px-0 xl:pt-[12%] text-center xl:text-left xl:flex-1">
            {title && (
              <h2 className="v2311-font-h1 text-v2311-primary">{title}</h2>
            )}
            {description && (
              <p className="v2311-font-h2 xl:v2311-font-h3 xl:font-normal text-v2311-primary mt-4 md:mt-8 xl:mt-4">
                {description}
              </p>
            )}
          </div>
          {features && (
            <ul className=" px-4 pb-8 md:px-8 md:pb-16 text-left xl:hidden ">
              {features.map((feature, idx) => {
                return (
                  <li
                    key={`${feature}_${idx}`}
                    className="v2311-font-body text-v2311-fg-black"
                  >
                    {feature}
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

interface IPdpIntroSection8Props {
  title?: ReactNode
  description?: ReactNode
  features?: {
    id: number
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    imgSrc: string
    feature: ReactNode
  }[]

  bgImageSrc?: string
  bgDesktopImageSrc?: string

  linkText?: ReactNode
  linkUrl?: string
}

const pdpIntroSection8Props: IPdpIntroSection8Props = {
  title: 'Using Compost',
  description: (
    <>
      Food waste is breakdown by microbita, not by the electricity power, the
      power is just for mantaining the best environment for the microbiota to
      work efficiently.
    </>
  ),
  features: [
    {
      id: 1,
      Icon: usingCompostIcons.SvgPlantOnHandIcon,
      imgSrc: '/assets/images/pdp-v2311/introduction/icon-plant-on-hand.svg',
      feature: 'indoor plan',
    },
    {
      id: 2,
      Icon: usingCompostIcons.SvgFlowerOnHandIcon,
      imgSrc: '/assets/images/pdp-v2311/introduction/icon-flower-on-hand.svg',
      feature: 'bonsai',
    },
    {
      id: 3,
      Icon: usingCompostIcons.SvgRiceOnHandIcon,
      imgSrc: '/assets/images/pdp-v2311/introduction/icon-rice-on-hand.svg',
      feature: 'vegetable bed',
    },
    {
      id: 4,
      Icon: usingCompostIcons.SvgGardenCareIcon,
      imgSrc: '/assets/images/pdp-v2311/introduction/icon-garden-care.svg',
      feature: 'garden care',
    },
    {
      id: 5,
      Icon: usingCompostIcons.SvgGiftIcon,
      imgSrc: '/assets/images/pdp-v2311/introduction/icon-gift.svg',
      feature: 'share it',
    },
    {
      id: 6,
      Icon: usingCompostIcons.SvgWaterIcon,
      imgSrc: '/assets/images/pdp-v2311/introduction/icon-water.svg',
      feature: 'purify water',
    },
  ],

  bgImageSrc: 'https://placehold.co/834x607',
  bgDesktopImageSrc: 'https://placehold.co/1920x850',

  linkText: 'GET GEME',
  linkUrl: '/product/geme',
}

function PdpIntroSection8({
  title,
  description,
  features,

  bgImageSrc,
  bgDesktopImageSrc,
  linkText,
  linkUrl,
}: IPdpIntroSection8Props) {
  return (
    <div className="bg-[#E1EBE7] 2xl:bg-transparent relative">
      <div
        className={classNames(
          ' px-4 py-8 md:px-8 md:py-16 xl:p-0 xl:min-h-[850px] flex flex-col items-center justify-center '
        )}
      >
        {bgImageSrc && (
          <div
            className=" absolute top-0 xl:top-0 left-0 w-full h-full object-cover z-0 bg-center bg-contain bg-no-repeat mx-auto xl:hidden "
            style={{ backgroundImage: `url(${bgImageSrc})` }}
          ></div>
        )}
        {bgDesktopImageSrc && (
          <div
            className=" absolute top-0 xl:top-0 left-0 w-full h-full object-cover z-0 bg-center bg-contain bg-no-repeat mx-auto hidden xl:block "
            style={{ backgroundImage: `url(${bgDesktopImageSrc})` }}
          ></div>
        )}

        <div className=" z-10 xl:flex xl:max-w-7xl">
          <div className=" xl:flex-1"></div>
          <div className=" flex flex-col justify-between xl:flex-1 ">
            <div className=" text-center xl:text-left ">
              {title && <h2 className="v2311-font-h1">{title}</h2>}
              {description && (
                <p className="v2311-font-body text-v2311-fg-black xl:text-v2311-fg-dark-black mt-4 md:mt-8">
                  {description}
                </p>
              )}
            </div>
            <div className=" mt-96 xl:mt-8">
              {features && (
                <ul className=" grid gap-2 md:gap-4 grid-cols-3 grid-rows-2 items-center justify-center xl:max-w-md ">
                  {features.map((feature) => {
                    return (
                      <li
                        key={feature.id}
                        className=" flex flex-col justify-center items-center"
                      >
                        {/*<feature.Icon className="w-12 h-12 md:w-16 md:h-16" />*/}
                        <img
                          src={feature.imgSrc}
                          alt="Introduction GEME Composter features"
                          className="w-12 h-12 md:w-16 md:h-16"
                        />

                        <p className=" v2311-font-body text-v2311-fg-black xl:text-v2311-fg-dark-black">
                          {feature.feature}
                        </p>
                      </li>
                    )
                  })}
                </ul>
              )}
              <div className="mt-4">
                {linkText && linkUrl && (
                  <a
                    className=" v2311-font-h2 md:v2311-font-h3 bg-[#047857] text-white w-full xl:w-auto flex items-center justify-center mt-4 md:mt-8 rounded-xl xl:rounded-full py-2 md:py-3 xl:px-8 xl:inline-flex"
                    href={linkUrl}
                  >
                    {linkText}
                    <IconCycleArrow className="inline-block ml-2 md:ml-4 w-5 md:w-10 xl:w-12 h-5 md:h-10 xl:h-12" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const EXAMPLE_PDP_INTRO_SECTION_PROPS = {
  pdpIntroSection1Props,
  pdpIntroSection3Props,
  pdpIntroSection5Props,
  pdpIntroSection6Props,
  pdpIntroSection7Props,
  pdpIntroSection8Props,
}

export {
  PdpIntroSection1,
  PdpIntroSection3,
  PdpIntroSection4,
  PdpIntroSection5,
  PdpIntroSection6,
  PdpIntroSection7,
  PdpIntroSection8,
  EXAMPLE_PDP_INTRO_SECTION_PROPS,
}

export type {
  IPdpIntroSection1Props,
  IPdpIntroSection3Props,
  IPdpIntroSection5Props,
  IPdpIntroSection6Props,
  IPdpIntroSection7Props,
  IPdpIntroSection8Props,
}
