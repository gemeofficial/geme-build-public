import { ILinkComponent } from '../../contexts/link-context'
import HeroSection, { IHeroSection } from './components/HeroSection'

const heroSectionProps: IHeroSection = {
  title: (
    <div className="max-w-lg text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-[80px] font-normal">
      Let us take care of the trash for you.
    </div>
  ),
  description: (
    <p className='md:text-xl'>
      The GEME Food Recycling Program makes dealing with food waste easy with a
      local organics pickup program.
    </p>
  ),
}

export interface ICompostRecyclePageProps {
  PrefetchLink?: ILinkComponent
}

export function CompostRecyclePageEn({
  PrefetchLink,
}: ICompostRecyclePageProps) {
  return (
    <>
      <HeroSection {...heroSectionProps} PrefetchLink={PrefetchLink} />
    </>
  )
}
