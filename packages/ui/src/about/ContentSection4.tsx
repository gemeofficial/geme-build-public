import { MTitle } from '../ui-components'

const data = {
  title: 'Our Milestones',
  desc: 'Driven by passion and a shared commitment to excellence, we move swiftly through our development process.',
  progressList: [
    {
      progressBarTitle: 'July 2022',
      title: 'Kickstarter Campaign',
      desc: (
        <div>
          Got{' '}
          <a href="https://www.kickstarter.com/projects/geme/geme-harvest-ready-to-use-organic-compost-easily">
            support
          </a>{' '}
          from backers over 22 countries world wide.
        </div>
      ),
    },
    {
      progressBarTitle: 'Mar 2023',
      title: 'Enter US Marketing',
      desc: 'Started selling in US, Authorized Amazon store launched.',
    },
    {
      progressBarTitle: 'Jun 2023',
      title: 'Sale in Europe',
      desc: 'First batch machines landing in Europe, local warehouse setup.',
    },
    {
      progressBarTitle: 'Jan 2024',
      title: 'GEME I Model Upgrade',
      desc: 'Hardware upgrade after 1 year customer feedback, quieter and robuster.',
    },
    {
      progressBarTitle: 'Sep/Oct 2024',
      title: 'GEME II',
      desc: 'Smarter, more convenient, and more affordable.',
    },
    {
      progressBarTitle: '2026',
      title: 'GEME Networking',
      desc: 'Connecting communities, farms, and waste solutions for sustainability.',
    },
  ],
}

export default function ContentSection4() {
  return (
    <div className="mt-20 md:mt-28 lg:mt-40 mx-auto max-w-xl lg:max-w-7xl px-8 lg:px-12 2xl:px-0 text-base text-v2311-text-gary">
      <MTitle>{data.title}</MTitle>
      <div className="mt-2">{data.desc}</div>

      <div className="lg:flex items-start lg:flex-wrap xl:flex-nowrap mt-8">
        {data.progressList.map((item) => (
          <div className="lg:w-1/2 xl:w-full" key={item.progressBarTitle}>
            <div className="flex items-center mt-6 lg:mt-8 xl:mt-0">
              <div className="w-1 h-1 rounded-full bg-emerald-600"></div>
              <div className="ml-4 text-emerald-600 font-medium text-sm lg:text-base">
                {item.progressBarTitle}
              </div>
              <div className="hidden lg:block ml-5 mr-6 lg:mr-10 xl:mr-6 h-[1px] bg-gray-200 flex-1"></div>
            </div>
            <div className="mt-3 lg:mt-6 font-bold text-lg text-[#222]">
              {item.title}
            </div>
            <div className="mt-2 pr-6 lg:pr-10 xl:pr-6">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
