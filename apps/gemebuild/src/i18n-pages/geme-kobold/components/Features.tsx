import { PropsWithChildren, ReactNode } from 'react'
import FeatureSlide from './FeatureSlide'

export interface IFeaturesProps {
  section1Title: ReactNode
  section1Description: ReactNode
  section2Title: ReactNode
  section2Description: ReactNode
  section3Title: ReactNode
  section3Description: ReactNode
}

function Title({ children }: PropsWithChildren) {
  return (
    <h2 className="capitalize text-xl text-left md:text-3xl text-gray-900 font-bold md:leading-none">
      {children}
    </h2>
  )
}

function Description({ children }: PropsWithChildren) {
  return (
    <p className="text-base lg:text-lg text-gray-500 text-left leading-tight lg:leading-snug">
      {children}
    </p>
  )
}

function Features({
  section1Description,
  section1Title,
  section2Description,
  section2Title,
  section3Description,
  section3Title,
}: IFeaturesProps) {
  const messages: IFeaturesProps = {
    section1Title: <Title>{section1Title}</Title>,
    section1Description: <Description>{section1Description}</Description>,
    section2Title: <Title>{section2Title}</Title>,
    section2Description: <Description>{section2Description}</Description>,
    section3Title: <Title>{section3Title}</Title>,
    section3Description: <Description>{section3Description}</Description>,
  }

  return <FeatureSlide messages={messages} />
}

export default Features
