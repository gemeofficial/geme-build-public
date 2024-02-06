import { ReactNode } from 'react'
import './second-life.css'
import { Img } from '../image'
import type { IImgProps } from '../image'
import {
  ScrollTriggeredAnimatedHeadlineTop,
  ScrollTriggeredAnimatedHeadlineBottom,
} from './scroll-triggered-animated-headline'

function UiSectionsDecomposition() {
  return (
    <section
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
      <div className="ui-fragments-title xl:max-w-7xl xl:mx-auto">
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
      <div className="ui-fragments-headline xl:max-w-7xl xl:mx-auto">
        <div className="line">
          <div className="ui-fragments-line rtl animate">
            <div className="line-container">
              <div className="dot" />
              <div className="line xl:max-w-7xl xl:mx-auto" />
            </div>
          </div>
        </div>
        <div className="container">
          <p className=" v2311-font-body text-v2311-fg-dark-black ">
            {description}
          </p>
        </div>
      </div>
      <div className="articles xl:max-w-7xl xl:mx-auto">
        {articles?.map(({ id, title, description, image }) => {
          return (
            <article key={id} className="ui-second-life-article isShown">
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
    <section className="ui-sections-end bg--green-3">
      <div className="ui-fragments-title xl:max-w-7xl xl:mx-auto">
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
  titleRightPart: 'Compost New Life for Waste',
  description:
    'You can reduce 100kg to 300kg CO2 emissions. If you recycle all your food waste via composting.',

  articles: [
    {
      id: 1,
      title: 'Protect the water',
      description:
        'Compost makes sure good quality water in the soil, let your seed grow better.',
      image: {
        width: 1200,
        height: 800,
        alt: 'Protect the water',
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
      title: 'Make good soil',
      description: "Compost can improve the soild's quality grows better pants",
      image: {
        width: 1200,
        height: 800,
        alt: 'Protect the water',
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
      title: 'Fight climate change',
      description: 'Compost reduce landfiling for food waste, saves the earth.',
      image: {
        width: 1200,
        height: 800,
        alt: 'Protect the water',
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

  endTitleLeftPart: "That's it!",
  endTitleRightPart: 'Let life continue!',
}

function SecondLife(props: ISecondLifeProps) {
  return (
    <>
      <UiSectionsDecomposition />
      <UiSectionsSecondLife {...props} />
      <UiSectionsEnd {...props} />
    </>
  )
}

const EXAMPLE_SECOND_LIFE_PROPS = {
  secondLifeProps,
}

export { SecondLife, EXAMPLE_SECOND_LIFE_PROPS }
export type { ISecondLifeProps }
