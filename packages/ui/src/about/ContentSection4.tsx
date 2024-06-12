const data = {
  title: 'Our Milestones',
  desc: 'Our development process is short, but our pace is fast',
  progressList: [
    {
      progressBarTitle: 'Dec 2021',
      title: 'Core team initialized',
      desc: 'Form the idea and start the GEME Composter project',
    },
    {
      progressBarTitle: 'July 2022',
      title: 'Kickstarter Campaign',
      // desc: 'Got 100+ backers and almost all of them are fulfilled.',
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
    // {
    //   progressBarTitle: 'Feb 2023',
    //   title: 'Fulfill Crowdfunding',
    //   desc: <div>Fulfilled our backers at a 96% coverage rate.</div>,
    // },
    {
      progressBarTitle: 'March 2023',
      title: 'Enter US Marketing',
      desc: 'Started selling in US, Authorized Amazon store launched.',
    },
    {
      progressBarTitle: 'June 2023',
      title: 'Sale in Europe',
      desc: 'First batch machines landing in Europe, local warehouse setup.',
    },
    {
      progressBarTitle: 'December 2023',
      title: 'Kobold Manufacture',
      desc: 'Setup large scale manufacture pipeline in factory.',
    },
    {
      progressBarTitle: 'January 2024',
      title: 'GEME 1 Model Upgrade',
      desc: 'Hardware upgrade after 1 year customer feedback, quieter and robuster.',
    },
  ],
}

export default function ContentSection4() {
  return (
    <div className="mt-28 lg:mt-40 mx-auto max-w-xl lg:max-w-7xl px-8 lg:px-12 2xl:px-0">
      <div className="font-bold text-[#E5BE51] text-2xl sm:text-3xl mb-2">
        {data.title}
      </div>
      <div className="text-gray-600 mt-2">{data.desc}</div>

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
            <div className="mt-3 lg:mt-6 font-bold text-lg">{item.title}</div>
            <div className="mt-2 pr-6 lg:pr-10 xl:pr-6 text-[#4B5563] leading-6">
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
