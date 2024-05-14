import Image from "next/image";

const data = {
  title:'Our customers love us',
  desc:'Aliquip reprehenderit incididunt amet quis fugiat ut velit. Sit occaecat labore proident cillum in nisi adipisicing officia excepteur tempor deserunt.',
  urls:[
    'https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg',
    'https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg',
    'https://tailwindui.com/img/logos/158x48/reform-logo-white.svg',
    'https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg',
  ]
}

export default function ContentSection5() {
  return (
    <div className="mt-28 md:mt-40 mx-auto max-w-xl lg:max-w-7xl text-white">
      <div className="w-full xl:h-[475px] bg-[#111827] box-border py-24 px-8 md:px-16 md:rounded-2xl text-center">
        <div className="font-bold text-2xl sm:text-3xl mb-2">{data.title}</div>
        <div className="mt-6 max-w-[570px] mx-auto leading-8">{data.desc}</div>
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-12 mt-20">
          {
            data.urls.map(item=>(
              <div key={item} className="flex md:justify-center items-center w-full">
                <Image
                  className="w-[158px] h-[48px] object-cover rounded-md"
                  src={item}
                  width={158}
                  height={48}
                  alt="img"
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}