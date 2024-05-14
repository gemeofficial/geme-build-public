import Image from "next/image";

const data = {
  title:'Do Ordinary Things With Great Wisdom Travel Extraordinary Roads With A Big Heart',
  desctiptions:[
    'ROKH is committed to providing you with waste collection and treatment system solutions and high-quality waste collection and treatment equipment.',
    'ROKH combines the use of smart devices with natural microorganisms to blend modern technology into the natural cycle of the laws of life, reducing the damage to nature and easing the burden on the earth.',
    'ROKH ROKH will use the amazing microbiota found in nature to improve and treat polluted water and soil, compensate for the damage done to nature, and heal our wounded earth.',
  ],
  contactUs:'Contact us :',
  imgUrls1:'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80',
  imgUrls2:[
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80',
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80',
  ],
  imgUrls3:[
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80',
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80',
  ],
}

export default function HeroSection() {
  return (
    <div className="mx-auto max-w-xl px-4 md:px-0 lg:max-w-7xl">
      <div className="flex items-center justify-between">
        <div className="text-4xl tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl w-[55%] mr-[5%]">
          <div className="font-bold text-emerald-600">{data.title}</div>
          {
            data.desctiptions.map(item=><div key={item} className="mt-3 md:mt-5 max-w-md text-lg text-gray-500 sm:text-xl md:max-w-3xl">{item}</div>)
          }
          <div className="mt-3 md:mt-5 max-w-md text-lg text-gray-500 sm:text-xl md:max-w-3xl">
            {data.contactUs}
            <a href="mailto:info@geme.bio" className="ml-4 text-emerald-600 hover:underline">info@geme.bio </a>
          </div>
        </div>

        <div className="w-[40%] flex items-center justify-between overflow-hidden">
          <div className="flex items-end h-full flex-shrink-0">
            <Image 
              className="w-[176px] h-[264px] object-cover rounded-md"
              src={data.imgUrls1}
              width={176}
              height={264}
              alt="img"
            />
          </div>

          <div className="flex flex-col items-end h-full flex-shrink-0 translate-x-6 space-y-8">
            {data.imgUrls2.map(item=>(
                <Image
                  key={item}
                  className="w-[176px] h-[264px] object-cover rounded-md" 
                  src={item}
                  width={176}
                  height={264}
                  alt="img"
                />
              ))
            }
          </div>

          <div className="flex flex-col items-end h-full flex-shrink-0 translate-x-12 pb-[296px] space-y-8">
            {data.imgUrls2.map(item=>(
                <Image
                  key={item}
                  className="w-[176px] h-[264px] object-cover rounded-md" 
                  src={item}
                  width={176}
                  height={264}
                  alt="img"
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}