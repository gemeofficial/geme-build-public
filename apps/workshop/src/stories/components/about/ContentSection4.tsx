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
    <div className="mt-40 mx-auto max-w-xl px-4 md:px-0 lg:max-w-7xl">
      <div className="flex items-start">
        {
          data.map(item=>(
            <div className="" key={item.progressBarTitle}>
              <div className="flex items-center">
                <div className="w-1 h-1 rounded-full bg-emerald-600"></div>
                <div className="ml-4 text-emerald-600 font-medium">{item.progressBarTitle}</div>
                <div className="ml-5 mr-6 h-[1px] bg-gray-200 flex-1"></div>
              </div>
              <div className="mt-6 font-bold text-lg">{item.title}</div>
              <div className="mt-2  pr-6 text-[#4B5563] leading-6">{item.desc}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}