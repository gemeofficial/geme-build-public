import { ReactNode, SVGProps } from 'react'
import { CompostStep1, CompostStep2, CompostStep3 } from './compost-steps'
import classNames from './lib/classNames'
import VideoInlinePlayer from './video-inline-player'
import { IImgProps, Img } from './image'
import { IVideoPlayerProps, VideoPlayer } from './video'

interface IContentSection1Props {
  title?: ReactNode
  description?: ReactNode
  imageSrc?: string
  imageAlt?: string
  isDisplayTextOnLeft?: boolean
}

const contentSection1Props: IContentSection1Props = {
  title: 'Terrible Food Waste Experience?',
  description: (
    <>
      Does your food scrap garbage ever ... <br />
      Turn your floor wet and dirty. <br />
      Create some bad smell. <br />
      Attract annoying flies
    </>
  ),
  imageSrc: 'https://placehold.co/358x202',
  imageAlt: 'food waste picture',
}

// 图文模板1_标题+正文+图片
// cf: https://www.figma.com/file/7xuAjF5e9ybdZpbePoDFpG/%E8%BE%93%E5%87%BA?type=design&node-id=264%3A287314&mode=dev
function ContentSection1({
  title,
  description,
  imageSrc,
  imageAlt,
  isDisplayTextOnLeft,
}: IContentSection1Props): JSX.Element {
  return (
    <section
      className={classNames(
        'px-4 py-8 mx-auto md:px-8 md:py-16 xl:py-[80px] xl:max-w-7xl flex flex-col items-center xl:gap-16 ',
        isDisplayTextOnLeft ? 'xl:flex-row' : 'xl:flex-row-reverse',
      )}
    >
      <div className=" text-center xl:flex-1 xl:text-left ">
        {title && (
          <h2 className=" v2311-font-h1 text-v2311-primary ">{title}</h2>
        )}
        {description && (
          <p className=" mt-4 md:mt-8 v2311-font-body text-v2311-fg-black ">
            {description}
          </p>
        )}
      </div>
      <div className="mt-4 w-full md:mt-8 xl:mt-0 xl:flex-1">
        {imageSrc && (
          <img
            className=" max-w-full w-full rounded-2xl"
            alt={imageAlt}
            src={imageSrc}
          />
        )}
      </div>
    </section>
  )
}

interface IContentSection2Props {
  title?: ReactNode
  description?: ReactNode
  imageSrc?: string
  imageAlt?: string
  isDisplayTextOnLeft?: boolean
}

const contentSection2Props: IContentSection2Props = {
  title: 'Just keep throwing your garbage GEME take care of the rest',
  description: (
    <>
      ·&nbsp;&nbsp;Add waste at anytime <br />
      ·&nbsp;&nbsp;No need to push buttons <br />
      ·&nbsp;&nbsp;No need to wait cycles
    </>
  ),
  imageSrc: 'https://placehold.co/358x202',
  imageAlt: 'food waste picture',
}

// 图文模板2_标题+正文（文本左对齐 - 位置居中）+图片
// https://www.figma.com/file/7xuAjF5e9ybdZpbePoDFpG/%E8%BE%93%E5%87%BA?type=design&node-id=264%3A286824&mode=dev
function ContentSection2({
  title,
  description,
  imageSrc,
  imageAlt,
  isDisplayTextOnLeft,
}: IContentSection1Props): JSX.Element {
  return (
    <section
      className={classNames(
        'px-4 py-8 mx-auto md:px-8 md:py-16 xl:py-[80px] xl:max-w-7xl flex flex-col items-center xl:gap-16',
        isDisplayTextOnLeft ? 'xl:flex-row' : 'xl:flex-row-reverse',
      )}
    >
      <div className=" text-center xl:flex-1 xl:text-left ">
        {title && (
          <h2 className=" v2311-font-h1 text-v2311-primary ">{title}</h2>
        )}
        <div className="mt-4 flex justify-center md:mt-8 xl:justify-start">
          {description && (
            <p className=" v2311-font-body text-v2311-fg-black text-left ">
              {description}
            </p>
          )}
        </div>
      </div>
      <div className="mt-4 w-full md:mt-8 xl:mt-0 xl:flex-1">
        {imageSrc && (
          <img
            className=" max-w-full w-full rounded-2xl"
            alt={imageAlt}
            src={imageSrc}
          />
        )}
      </div>
    </section>
  )
}

interface IContentSection3Props {
  title?: ReactNode
  description?: ReactNode
  items?: {
    id: number
    description?: ReactNode
    imageSrc?: string
    imageAlt?: string
  }[]
}

const contentSection3Props: IContentSection3Props = {
  title: 'Time To Change Your Trash Bin',
  description:
    'GEME uses industrial filters with the most advanced deodorization technology.',
  items: [
    {
      id: 1,
      description: (
        <>
          No more smelly
          <br />
          leaky garbage
        </>
      ),
      imageSrc: 'https://placehold.co/171x228',
      imageAlt: 'item 1',
    },
    {
      id: 2,
      description: (
        <>
          Feed your garden,
          <br />
          lawn, or plants
        </>
      ),
      imageSrc: 'https://placehold.co/171x228',
      imageAlt: 'item 2',
    },
    {
      id: 3,
      description: (
        <>
          Noise-free design
          <br />
          that can be
          <br />
          placed anywhere
        </>
      ),
      imageSrc: 'https://placehold.co/171x228',
      imageAlt: 'item 3',
    },
    {
      id: 4,
      description: (
        <>
          Noise-free design
          <br />
          that can be
          <br />
          placed anywhere
        </>
      ),
      imageSrc: 'https://placehold.co/171x228',
      imageAlt: 'item 4',
    },
  ],
}

// 图文模版3_标题+正文+2列图文（图片+文字描述【可增减】）
// https://www.figma.com/file/7xuAjF5e9ybdZpbePoDFpG/%E8%BE%93%E5%87%BA?type=design&node-id=264%3A286844&mode=dev
function ContentSection3({
  title,
  description,
  items,
}: IContentSection3Props): JSX.Element {
  return (
    <section className="px-4 py-8 mx-auto md:px-8 md:py-16 xl:py-[80px] xl:max-w-7xl ">
      {title && (
        <h2 className=" v2311-font-h1 text-v2311-primary text-center ">
          {title}
        </h2>
      )}
      {description && (
        <p className="v2311-font-body text-v2311-fg-black text-center mt-4 md:mt-8">
          {description}
        </p>
      )}
      <div className="mt-4 md:mt-8 xl:mt-16 grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8">
        {items?.map((item) => {
          return (
            <div key={item.id}>
              <img
                className=" max-w-full w-full rounded-xl "
                src={item.imageSrc}
                alt={item.imageAlt}
              />
              <p className="v2311-font-body text-v2311-fg-black text-left mt-2 md:mt-4">
                {item.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

interface IContentSection4Props {
  title?: ReactNode
  description?: ReactNode

  withMp4VideoOrYoutubeVideo?:
    | {
        type: 'mp4'
        videoPosterUrl?: string
        videoSrcUrl?: string
      }
    | {
        type: 'youtube'
        videoPosterImage?: IImgProps
        videoSrcUrl?: string
      }
}

const contentSection4Props: IContentSection4Props = {
  title: (
    <>
      Stop landfiling <br />
      Start composting
    </>
  ),
  description: 'Let GEME grow your seed with the food waste recycled.',
  withMp4VideoOrYoutubeVideo: {
    type: 'youtube',
    videoPosterImage: {
      src: 'https://placehold.co/160x900',
      alt: 'image alt',
      width: 1600,
      height: 900,
      srcSetData: {
        '160w': 'https://placehold.co/160x900',
        '1200w': 'https://placehold.co/1200x675',
        '1600w': 'https://placehold.co/1600x900',
      },
    },
    videoSrcUrl: 'https://www.youtube.com/embed/v1Z4fg6MmlI',
  },
}

// FIXME: should replace the img with MP4 video player
// 图文模板4_标题+正文+MP4视频自动播放
// https://www.figma.com/file/7xuAjF5e9ybdZpbePoDFpG/%E8%BE%93%E5%87%BA?type=design&node-id=264%3A287321&mode=dev
function ContentSection4({
  title,
  description,
  withMp4VideoOrYoutubeVideo,
}: IContentSection4Props): JSX.Element {
  return (
    <section
      className={classNames(
        'px-4 py-8 mx-auto md:px-8 md:py-16 xl:py-[80px] xl:max-w-7xl flex flex-col items-center xl:gap-16 ',
      )}
    >
      <div className=" text-center xl:flex-1">
        {title && (
          <h2 className=" v2311-font-h1 text-v2311-primary ">{title}</h2>
        )}
        {description && (
          <p className=" mt-4 md:mt-8 v2311-font-body text-v2311-fg-black ">
            {description}
          </p>
        )}
      </div>
      <div className="mt-4 w-full md:mt-8 xl:mt-0 xl:flex-1">
        {withMp4VideoOrYoutubeVideo?.type === 'mp4' &&
          withMp4VideoOrYoutubeVideo?.videoSrcUrl != null && (
            <video
              autoPlay
              muted
              loop
              className="max-w-full w-full rounded-2xl overflow-hidden object-cover"
              poster={withMp4VideoOrYoutubeVideo?.videoPosterUrl}
            >
              <source
                src={withMp4VideoOrYoutubeVideo?.videoSrcUrl}
                type="video/mp4"
              />
              Your browser does not support HTML5 video.
            </video>
          )}

        {withMp4VideoOrYoutubeVideo?.type === 'youtube' &&
          withMp4VideoOrYoutubeVideo?.videoSrcUrl != null && (
            <div
              className={classNames(
                'relative w-full aspect-w-16 aspect-h-9 overflow-hidden rounded-lg bg-white',
              )}
            >
              <VideoInlinePlayer
                videoUrl={withMp4VideoOrYoutubeVideo?.videoSrcUrl}
                description="Watch our video to learn more"
              >
                <Img
                  {...withMp4VideoOrYoutubeVideo?.videoPosterImage}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </VideoInlinePlayer>
            </div>
          )}
      </div>
    </section>
  )
}

interface IContentSection5Props {
  title?: ReactNode
  description?: ReactNode
  images?: {
    id?: number
    stepText?: string
    imageSrc?: string
    imageAlt?: string
  }[]
  bottomDescription?: ReactNode
}

const contentSection5Props: IContentSection5Props = {
  title: 'Turn food scraps into organic compost',
  description: (
    <>
      GEME Kobold, the microorganisms that breakdown your food waste, no matter
      how salty or acidic. The result?
      <br />
      Ready-to-use, homemade orVkkganic compost for your plants.
    </>
  ),
  images: [
    {
      id: 1,
      imageSrc: 'https://placehold.co/358x202',
      imageAlt: 'food waste picture',
    },
    {
      id: 2,
      imageSrc: 'https://placehold.co/358x202',
      imageAlt: 'food waste picture',
    },
    {
      id: 3,
      imageSrc: 'https://placehold.co/358x202',
      imageAlt: 'food waste picture',
    },
  ],
  bottomDescription: (
    <>
      GEME Kobold is a microorganism that reproduces itself when cultivated and
      fed well.
    </>
  ),
}

// 图文模板5_标题+正文+图文（图片+文字描述【可增减】）
// https://www.figma.com/file/7xuAjF5e9ybdZpbePoDFpG/%E8%BE%93%E5%87%BA?type=design&node-id=264%3A286878&mode=dev
function ContentSection5({
  title,
  description,
  images,
  bottomDescription,
}: IContentSection5Props): JSX.Element {
  return (
    <section className="px-4 py-8 mx-auto md:px-8 md:py-16 xl:py-[80px] xl:max-w-7xl">
      {title && (
        <h2 className=" v2311-font-h1 text-v2311-primary text-center ">
          {title}
        </h2>
      )}
      {description && (
        <p className="v2311-font-body text-v2311-fg-black text-center mt-4 md:mt-8">
          {description}
        </p>
      )}
      <div className="mt-4 md:mt-8 grid grid-cols-1 gap-4 md:gap-8 xl:grid-cols-3 xl:gap-10">
        {images?.map(({ id, stepText, imageSrc, imageAlt }) => {
          return (
            <div
              key={id}
              className=" w-full relative xl:flex xl:flex-col xl:items-start xl:even:pt-24"
            >
              <div className="absolute top-4 md:top-8 left-4 md:left-8 w-7 md:w-16 h-7 md:h-16 flex items-center justify-center bg-v2311-bg-dark-green  border-2 border-v2311-bg-dark-green rounded-full text-center  font-v2311 font-bold text-white text-[24px] md:text-[48px] xl:static xl:rounded-none xl:w-auto xl:h-auto xl:bg-transparent xl:border-none xl:text-[#105133] xl:text-[64px] xl:font-bold">
                {id}
                <span className="absolute invisible xl:visible ml-4 -mb-4 flex align-bottom rounded-full font-v2311 text-white text-[28px] xl:static xl:w-auto xl:h-auto xl:bg-transparent xl:text-[#808080]">
                  {' '}
                  {stepText}
                </span>
              </div>

              <img
                className=" max-w-full w-full rounded-2xl "
                src={imageSrc}
                alt={imageAlt}
              />
            </div>
          )
        })}
      </div>
      {bottomDescription && (
        <p className="v2311-font-body text-v2311-fg-black text-center mt-4 md:mt-8 xl:hidden">
          {bottomDescription}
        </p>
      )}
    </section>
  )
}

interface IContentSection6Props {
  steps?: {
    id: number
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    description?: ReactNode
  }[]
}

const contentSection6Props: IContentSection6Props = {
  steps: [
    {
      id: 1,
      Icon: CompostStep1,
      description: (
        <>
          slow & trouble <br />
          maintenance
        </>
      ),
    },
    {
      id: 2,
      Icon: CompostStep2,
      description: (
        <>
          dehydrated & <br />
          cooked waste
        </>
      ),
    },
    {
      id: 3,
      Icon: CompostStep3,
      description: (
        <>
          dehydrators? <br />
          No! it&apos;s real composter
        </>
      ),
    },
  ],
}

// 图文模块6（图片+文字描述【1列 - 可增减】）
// https://www.figma.com/file/7xuAjF5e9ybdZpbePoDFpG/%E8%BE%93%E5%87%BA?type=design&node-id=264%3A287628&mode=dev
function ContentSection6({ steps }: IContentSection6Props): JSX.Element {
  return (
    <div className="px-4 pb-8 mx-auto md:px-8 md:pb-16 xl:p-0 flex">
      {steps?.map((step) => (
        <div key={step.id} className=" flex-1 flex flex-col items-center ">
          <step.Icon className=" w-[80px] h-[80px] md:w-[172px] md:h-[172px] xl:w-[144px] xl:h-[144px] " />
          <p className="v2311-font-img-desc text-v2311-fg-black text-center mt-4 md:mt-8 xl:mt-4">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  )
}

interface IContentSection6FixedProps {
  title?: ReactNode
  videoPosterUrl?: string
  videoSrcUrl?: string
  isDisplayTextOnLeft?: boolean
  steps?: [
    {
      id: number
      Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
      description?: ReactNode
    },
    {
      id: number
      Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
      description?: ReactNode
    },
    {
      id: number
      Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
      description?: ReactNode
    },
  ]
}

const contentSection6FixedProps: IContentSection6FixedProps = {
  title: 'The Easiest Way to Get Compost',
  videoPosterUrl: 'https://placehold.co/358x202/3B806F/white?text=poster',
  videoSrcUrl:
    'https://public-assest-434759801795.s3.us-west-1.amazonaws.com/geme-banner.mp4',
  steps: [
    {
      id: 1,
      Icon: CompostStep1,
      description: (
        <>
          slow & trouble <br />
          maintenance
        </>
      ),
    },
    {
      id: 2,
      Icon: CompostStep2,
      description: (
        <>
          dehydrated & <br />
          cooked waste
        </>
      ),
    },
    {
      id: 3,
      Icon: CompostStep3,
      description: (
        <>
          dehydrators? <br />
          No! it&apos;s real composter
        </>
      ),
    },
  ],
}

// Alex: this is a fixed of ContentSection6 to make it looks like same as the design
// cf: https://www.figma.com/file/7xuAjF5e9ybdZpbePoDFpG/%E8%BE%93%E5%87%BA?type=design&node-id=322%3A253319&mode=dev
function ContentSection6Fixed({
  title,
  videoPosterUrl,
  videoSrcUrl,
  isDisplayTextOnLeft,
  steps,
}: IContentSection6FixedProps): JSX.Element {
  return (
    <section
      className={classNames(
        'px-4 py-8 mx-auto md:px-8 md:py-16 xl:py-[80px] xl:max-w-7xl flex flex-col xl:gap-16 ',
        isDisplayTextOnLeft ? 'xl:flex-row-reverse' : 'xl:flex-row',
      )}
    >
      <div className=" text-center xl:hidden ">
        {title && (
          <h2 className=" v2311-font-h1 text-v2311-primary ">{title}</h2>
        )}
      </div>
      <div className="mt-4 w-full md:mt-8 xl:mt-0 xl:flex-1">
        {videoSrcUrl && videoPosterUrl && (
          <video
            autoPlay
            playsInline
            muted
            loop
            className="max-w-full w-full rounded-2xl overflow-hidden object-cover"
            poster={videoPosterUrl}
          >
            <source src={videoSrcUrl} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        )}
      </div>
      <div className=" xl:flex-1 ">
        {title && (
          <h2 className=" v2311-font-h1 text-v2311-primary hidden xl:block">
            {title}
          </h2>
        )}

        <div className="mt-8 md:mt-16 xl:mt-8 flex items-start">
          {steps?.map((step) => (
            <div key={step.id} className=" flex-1 flex flex-col items-center">
              <step.Icon className=" w-[80px] h-[80px] md:w-[172px] md:h-[172px] xl:w-[144px] xl:h-[144px] " />
              <p className="v2311-font-img-desc text-v2311-fg-black text-center mt-4 md:mt-8 xl:mt-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface IContentSection7Props {
  title?: ReactNode
  description?: ReactNode
  isDisplayTextOnLeft?: boolean
  bottomContent?: ReactNode
  withImageOrVideo?:
    | {
        type: 'image'
        imageSrc?: string
        imageAlt?: string
      }
    | {
        type: 'video'
        videoProps?: IVideoPlayerProps
      }
}

const contentSection7Props: IContentSection7Props = {
  title: 'The Easiest Way to Get Compost',
  description:
    "Let's talk about the little guys that make a big difference microbesJust like the friendly microbes in your gut aid digestion, along with optimal conditions and bin rotation swiftly convert food scraps into organic compost",
  withImageOrVideo: {
    type: 'image',
    imageSrc: 'https://placehold.co/358x202',
    imageAlt: 'food waste picture',
  },
  bottomContent: <div className=" h-80 bg-orange-500 ">This a placeholder</div>,
}

// Alex: ContentSection7 is a extended version of ContentSection6Fixed, it does:
// - add description
// - replace video with image
// - replace fixed compost steps with bottomContent
//
// References:
// 1. https://www.figma.com/file/7xuAjF5e9ybdZpbePoDFpG/%E8%BE%93%E5%87%BA?type=design&node-id=373-33747&mode=dev
// 2. https://www.figma.com/file/7xuAjF5e9ybdZpbePoDFpG/%E8%BE%93%E5%87%BA?type=design&node-id=373-33748&mode=dev
function ContentSection7({
  title,
  description,
  withImageOrVideo,
  isDisplayTextOnLeft,
  bottomContent,
}: IContentSection7Props): JSX.Element {
  return (
    <section
      className={classNames(
        'px-4 py-8 mx-auto md:px-8 md:py-16 xl:py-[80px] xl:max-w-7xl flex flex-col items-center xl:gap-16 ',
        isDisplayTextOnLeft ? 'xl:flex-row-reverse' : 'xl:flex-row',
      )}
    >
      <div className=" text-center xl:hidden ">
        {title && (
          <h2 className=" v2311-font-h1 text-v2311-primary ">{title}</h2>
        )}
        {description && (
          <p className=" mt-4 md:mt-8 v2311-font-body text-v2311-fg-black ">
            {description}
          </p>
        )}
      </div>
      <div className="mt-4 w-full md:mt-8 xl:mt-0 xl:flex-1">
        {withImageOrVideo?.type === 'image' &&
          withImageOrVideo?.imageSrc != null && (
            <img
              className=" max-w-full w-full rounded-2xl"
              alt={withImageOrVideo?.imageAlt}
              src={withImageOrVideo?.imageSrc}
            />
          )}

        {withImageOrVideo?.type === 'video' &&
          withImageOrVideo?.videoProps != null && (
            <VideoPlayer
              {...withImageOrVideo?.videoProps}
              className="max-w-full w-full rounded-2xl overflow-hidden object-cover"
            />
          )}
      </div>
      <div className=" xl:flex-1 w-full ">
        {title && (
          <h2 className=" v2311-font-h1 text-v2311-primary hidden xl:block">
            {title}
          </h2>
        )}
        {description && (
          <p className=" mt-4 md:mt-8 v2311-font-body text-v2311-fg-black hidden xl:block">
            {description}
          </p>
        )}

        {bottomContent && (
          <div className="mt-8 md:mt-16 xl:mt-8 flex items-start">
            {bottomContent}
          </div>
        )}
      </div>
    </section>
  )
}

interface IContentSection8Props {
  title?: ReactNode
  description?: ReactNode
  items?: {
    id: number
    imageSrc?: string
    imageAlt?: string
  }[]
}

const contentSection8Props: IContentSection8Props = {
  title: 'Odorless',
  description:
    'GEME uses industrial filters with the most advanced deodorization technology.',
  items: [
    {
      id: 1,
      imageSrc: 'https://placehold.co/300x400',
      imageAlt: 'item 1',
    },
    {
      id: 2,
      imageSrc: 'https://placehold.co/300x400',
      imageAlt: 'item 2',
    },
  ],
}

// From PDP Intro section 12. Title + Description + Images (2 columns)
// cf: https://www.figma.com/file/7xuAjF5e9ybdZpbePoDFpG/%E8%BE%93%E5%87%BA?type=design&node-id=244-37286&mode=dev
function ContentSection8({
  title,
  description,
  items,
}: IContentSection8Props): JSX.Element {
  return (
    <section className="px-4 py-8 mx-auto md:px-8 md:py-16 xl:py-[80px] xl:max-w-7xl ">
      {title && (
        <h2 className=" v2311-font-h1 text-v2311-primary text-center ">
          {title}
        </h2>
      )}
      {description && (
        <p className="v2311-font-body text-v2311-fg-black text-center mt-4 md:mt-8 xl:hidden">
          {description}
        </p>
      )}
      <div className="mt-4 md:mt-8 grid grid-cols-2 gap-4 md:gap-8 xl:max-w-4xl xl:mx-auto">
        {items?.map((item) => {
          return (
            <div key={item.id} className="aspect-w-3 aspect-h-4">
              <img
                className=" rounded-xl "
                src={item.imageSrc}
                alt={item.imageAlt}
              />
            </div>
          )
        })}
      </div>
      {description && (
        <p className="v2311-font-body text-v2311-primary  text-center mt-8 hidden xl:block">
          {description}
        </p>
      )}
    </section>
  )
}

const EXAMPLE_CONTENT_SECTION_PROPS = {
  contentSection1Props,
  contentSection2Props,
  contentSection3Props,
  contentSection4Props,
  contentSection5Props,
  contentSection6Props,
  contentSection6FixedProps,
  contentSection7Props,
  contentSection8Props,
}

export {
  ContentSection1,
  ContentSection2,
  ContentSection3,
  ContentSection4,
  ContentSection5,
  ContentSection6,
  ContentSection6Fixed,
  ContentSection7,
  ContentSection8,
  EXAMPLE_CONTENT_SECTION_PROPS,
}

export type {
  IContentSection1Props,
  IContentSection2Props,
  IContentSection3Props,
  IContentSection4Props,
  IContentSection5Props,
  IContentSection6Props,
  IContentSection6FixedProps,
  IContentSection7Props,
  IContentSection8Props,
}
