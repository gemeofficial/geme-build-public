// "use client"

import { ReactNode, useEffect, useState } from 'react'
import './second-life.css'
import { Img } from '../image'
import type { IImgProps } from '../image'

import {
  ScrollTriggeredAnimatedHeadlineTop,
  ScrollTriggeredAnimatedHeadlineBottom,
} from './scroll-triggered-animated-headline'
import { ScrollTriggeredAnimatedUiCompost } from '../ui-compost'
import { throttle } from 'ts-debounce-throttle'

function UiSectionsDecomposition() {
  const [paddingBottom, setPaddingBottom] = useState(0)

  // 不同屏幕宽度下对应的paddingBottom边距大小的Map数据组
  // [375, 110] => 屏幕宽度375px > 对应110vw的paddingBottom
  const widthToPaddingBottomMap = new Map([
    [375, 110],
    [414, 100],
    [450, 90],
    [500, 80],
    [600, 70],
    [700, 60],
    [800, 50],
    [900, 40],
    [1000, 35],
    [1100, 30],
    [1300, 25],
    [1400, 20],
    [1500, 18],
    [1600, 15],
    [1800, 12.5],
    [2000, 10],
    [2200, 8],
    [2400, 6],
    [2400, 6],
    [2700, 4],
    [2900, 2],
    [3000, 1],
    [3100, 1],
  ])

  let prevValue = widthToPaddingBottomMap.get(375)!

  /**
   * 获取不同屏幕宽度对应的paddingBottom
   * @param width 屏幕宽度
   * @returns newPaddingBottom
   */
  function getPaddingBottomValue(width: number) {
    // 避免超大屏幕下不必要的循环
    if (width > 3000) return 1

    // 应该取的是当前key的上一个value，原因：width >= 375 && width <= 414时 value应该为110 而不是100
    for (let [key, value] of widthToPaddingBottomMap) {
      if (width <= key) {
        prevValue = value
        break
      }
    }

    return prevValue
  }

  // 根据屏幕宽度设置合适的距离
  useEffect(() => {
    const updateDotsPaddingBottom = throttle(
      () => {
        const width = window.innerWidth
        const newPaddingBottom = getPaddingBottomValue(width)
        setPaddingBottom(newPaddingBottom)
      },
      500,
      { leading: true, trailing: true }
    )
    updateDotsPaddingBottom()
    window.addEventListener('resize', updateDotsPaddingBottom)

    // 清理函数
    return () => {
      window.removeEventListener('resize', updateDotsPaddingBottom)
    }
  }, [window.innerWidth])

  return (
    <section
      style={{ paddingBottom: paddingBottom + 'vw' }}
      className="ui-sections-decomposition bg--green-1"
      data-anchor="le-processus"
    >
      <div className="ui-fragments-dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </section>
  )
}

function UiSectionsSecondLife({
  titleLeftPart,
  titleRightPart,
  description,
  articles,
}: ISecondLifeProps) {
  return (
    <section
      className="ui-sections-second-life bg--green-2"
      data-anchor="les-resultats"
    >
      <div className="ui-fragments-title xl:max-w-7xl xl:mx-auto !px-4 !py-8 md:!px-8 md:!py-16 xl:!py-[80px]">
        <h2 className="sr-only">
          {titleLeftPart} {titleRightPart}
        </h2>
        <p
          aria-hidden="true"
          className=" v2311-font-h0 text-v2311-fg-dark-black "
        >
          <ScrollTriggeredAnimatedHeadlineTop
            titleLeftPart={titleLeftPart}
            titleRightPart={titleRightPart}
          />
        </p>
      </div>
      <div className="ui-fragments-headline xl:max-w-7xl xl:mx-auto !px-4 !py-8 md:!px-8 md:!py-16 xl:!py-[80px]">
        <div className="line !w-auto">
          <div className="ui-fragments-line rtl animate">
            <div className="line-container">
              <div className="dot" />
              <div className="line xl:max-w-7xl xl:mx-auto" />
            </div>
          </div>
        </div>
        <div className="container !w-auto">
          <p className=" v2311-font-body text-v2311-fg-dark-black ">
            {description}
          </p>
        </div>
      </div>
      <div className="articles xl:max-w-7xl xl:mx-auto !px-4 !py-8 md:!px-8 md:!py-16 xl:!py-[80px]">
        {articles?.map(({ id, title, description, image }, index) => {
          return (
            <article
              key={id}
              className={`ui-second-life-article isShown ${
                index === 1 ? `flex items-end flex-col` : ''
              }`}
            >
              <picture className="ui-fragments-image isLoaded b-r">
                <Img {...image} />
              </picture>
              <h3 className=" v2311-font-h2 text-v2311-fg-dark-black ">
                {title}
              </h3>
              <div className="v2311-font-body text-v2311-fg-dark-black">
                <p>{description}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

function UiSectionsEnd({
  endTitleLeftPart,
  endTitleRightPart,
}: ISecondLifeProps) {
  return (
    <section className="ui-sections-end bg--green-3 -mt-px md:mt-auto">
      <div className="ui-fragments-title xl:max-w-7xl xl:mx-auto !pb-0 !px-4 !pt-8 md:!px-8 md:!pt-16 xl:!pt-[80px]">
        <h2 className="sr-only">
          {endTitleLeftPart} {endTitleRightPart}
        </h2>
        <p
          aria-hidden="true"
          className="v2311-font-h0 text-v2311-fg-dark-black"
        >
          <ScrollTriggeredAnimatedHeadlineBottom
            endTitleLeftPart={endTitleLeftPart}
            endTitleRightPart={endTitleRightPart}
          />
        </p>
      </div>
    </section>
  )
}

interface ISecondLifeProps {
  titleLeftPart?: ReactNode
  titleRightPart?: ReactNode
  description?: ReactNode

  articles?: {
    id: number
    title?: ReactNode
    description?: ReactNode
    image?: IImgProps
  }[]

  endTitleLeftPart?: ReactNode
  endTitleRightPart?: ReactNode
}

const secondLifeProps: ISecondLifeProps = {
  titleLeftPart: 'Compost',
  titleRightPart: 'New Life for Waste',
  description:
    'You can reduce 100kg to 300kg CO2 emissions. If you recycle all your food waste via composting.',

  articles: [
    {
      id: 1,
      title: 'Prevent Water Lost',
      description: 'Compost can absorb water, let your seeds grow better.',
      image: {
        width: 1200,
        height: 800,
        alt: 'Prevent Water Lost',
        src: 'https://www.datocms-assets.com/79468/1666986512-moins_eau.jpg?w=10',
        srcSetData: {
          '100w':
            'https://www.datocms-assets.com/79468/1666986512-moins_eau.jpg?ixlib=js-2.3.2&auto=format&w=100',
          '300w':
            'https://www.datocms-assets.com/79468/1666986512-moins_eau.jpg?ixlib=js-2.3.2&auto=format&w=300',
          '600w':
            'https://www.datocms-assets.com/79468/1666986512-moins_eau.jpg?ixlib=js-2.3.2&auto=format&w=600',
          '900w':
            'https://www.datocms-assets.com/79468/1666986512-moins_eau.jpg?ixlib=js-2.3.2&auto=format&w=900',
          '1200w':
            'https://www.datocms-assets.com/79468/1666986512-moins_eau.jpg?ixlib=js-2.3.2&auto=format&w=1200',
        },
      },
    },
    {
      id: 2,
      title: 'Make Good Soil',
      description: 'Compost can nourish garden soil, let plants grow bigger.',
      image: {
        width: 1200,
        height: 800,
        alt: 'Prevent Water Lost',
        src: 'https://www.datocms-assets.com/79468/1666986527-sols_riches.jpg?w=10',
        srcSetData: {
          '100w':
            'https://www.datocms-assets.com/79468/1666986527-sols_riches.jpg?ixlib=js-2.3.2&auto=format&w=100',
          '300w':
            'https://www.datocms-assets.com/79468/1666986527-sols_riches.jpg?ixlib=js-2.3.2&auto=format&w=300',
          '600w':
            'https://www.datocms-assets.com/79468/1666986527-sols_riches.jpg?ixlib=js-2.3.2&auto=format&w=600',
          '900w':
            'https://www.datocms-assets.com/79468/1666986527-sols_riches.jpg?ixlib=js-2.3.2&auto=format&w=900',
          '1200w':
            'https://www.datocms-assets.com/79468/1666986527-sols_riches.jpg?ixlib=js-2.3.2&auto=format&w=1200',
        },
      },
    },
    {
      id: 3,
      title: 'Fight Climate Change',
      description: 'Compost can reduce landfill, let our plannet turn greener.',
      image: {
        width: 1200,
        height: 800,
        alt: 'Prevent Water Lost',
        src: 'https://www.datocms-assets.com/79468/1666986537-changements_climatiques.jpg?w=10',
        srcSetData: {
          '100w':
            'https://www.datocms-assets.com/79468/1666986537-changements_climatiques.jpg?ixlib=js-2.3.2&auto=format&w=100',
          '300w':
            'https://www.datocms-assets.com/79468/1666986537-changements_climatiques.jpg?ixlib=js-2.3.2&auto=format&w=300',
          '600w':
            'https://www.datocms-assets.com/79468/1666986537-changements_climatiques.jpg?ixlib=js-2.3.2&auto=format&w=600',
          '900w':
            'https://www.datocms-assets.com/79468/1666986537-changements_climatiques.jpg?ixlib=js-2.3.2&auto=format&w=900',
          '1200w':
            'https://www.datocms-assets.com/79468/1666986537-changements_climatiques.jpg?ixlib=js-2.3.2&auto=format&w=1200',
        },
      },
    },
  ],

  endTitleLeftPart: 'Waste Reborn',
  endTitleRightPart: 'Life Continue!',
}

function SecondLife(props: ISecondLifeProps) {
  return (
    <div className=" relative ">
      <UiSectionsDecomposition />
      <UiSectionsSecondLife {...props} />
      <UiSectionsEnd {...props} />
      <ScrollTriggeredAnimatedUiCompost />
    </div>
  )
}

const EXAMPLE_SECOND_LIFE_PROPS = {
  secondLifeProps,
}

export { SecondLife, EXAMPLE_SECOND_LIFE_PROPS }
export type { ISecondLifeProps }
