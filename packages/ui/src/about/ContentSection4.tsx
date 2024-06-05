const data = [
  {
    progressBarTitle:'Aug 2021',
    title:'Founded company',
    desc:'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.'
  },
  {
    progressBarTitle:'Dec 2021',
    title:'Secured $65m in funding',
    desc:'Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.'
  },{
    progressBarTitle:'Feb 2022',
    title:'Released beta',
    desc:'Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.'
  },{
    progressBarTitle:'Dec 2022',
    title:'Global launch of product',
    desc:'Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.'
  }
]

export default function ContentSection4() {
  return (
    <div className="mt-28 lg:mt-40 mx-auto max-w-xl lg:max-w-7xl px-8 lg:px-12 2xl:px-0">
      <div className="lg:flex items-start lg:flex-wrap xl:flex-nowrap">
        {
          data.map(item=>(
            <div className="lg:w-1/2 xl:w-full" key={item.progressBarTitle}>
              <div className="flex items-center mt-6 lg:mt-8 xl:mt-0">
                <div className="w-1 h-1 rounded-full bg-emerald-600"></div>
                <div className="ml-4 text-emerald-600 font-medium text-sm lg:text-base">{item.progressBarTitle}</div>
                <div className="hidden lg:block ml-5 mr-6 lg:mr-10 xl:mr-6 h-[1px] bg-gray-200 flex-1"></div>
              </div>
              <div className="mt-3 lg:mt-6 font-bold text-lg">{item.title}</div>
              <div className="mt-2 pr-6 lg:pr-10 xl:pr-6 text-[#4B5563] leading-6">{item.desc}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
