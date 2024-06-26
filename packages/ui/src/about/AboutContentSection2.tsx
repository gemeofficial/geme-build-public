import { AboutMTitle, AboutTitle } from '../ui-components'

export interface IAboutContentSection2 {
  mTitle: string
  title: string
  desc: string
  dataList: {
    title: string
    desc: string
  }[]
}

export const aboutContentSection2ExampleData: IAboutContentSection2 = {
  mTitle: 'Our Values',
  title: 'Take the Road Less Traveled',
  desc: 'We base our actions on truth and first principles. With a clear goal in sight, we dream ambitiously but take calculated steps to achieve it.',
  dataList: [
    {
      title: 'Be World-class',
      desc: `We set the highest standards, relentlessly pursuing excellence in all aspects of our work, with sustainability at its core.`,
    },
    {
      title: 'Open and Cooperative',
      desc: `Fostering open dialogue and collaboration to find collective solutions. Building strong partnerships with individuals,organizations, and communities.`,
    },
    {
      title: 'Always Learning',
      desc: `Embracing cutting-edge research to tackle environmental challenges.Continuously innovating and refining our solutions to achieve optimal results.`,
    },
    {
      title: 'Be Supportive',
      desc: `Cultivate a supportive environment where individuals feel empowered,valued, and encouraged to reach their full potential.`,
    },
    {
      title: 'Facts and Solution',
      desc: `Crafting effective solutions not swayed by assumptions or biases but by experiment result and data; we let the data guide our path.`,
    },
    {
      title: 'Take Responsibility',
      desc: `Ensuring our commitments, our work aligns with our values and ethical principles. Sharing our expertise and knowledge to empower communities worldwide.`,
    },
  ],
}

export function AboutContentSection2(props: IAboutContentSection2) {
  return (
    <div className="mt-20 md:mt-28 3xl:mt-40 mx-auto max-w-xl lg:max-w-7xl px-8 lg:px-12 2xl:px-0 text-base text-v2311-text-gary">
      <AboutMTitle>{props.mTitle}</AboutMTitle>
      <AboutTitle>{props.title}</AboutTitle>

      <div className="mt-2">{props.desc}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-12 mt-4">
        {props.dataList.map((item) => (
          <div key={item.title}>
            <div className="text-lg font-bold text-[#222]">{item.title}</div>
            <div className="mt-2">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
