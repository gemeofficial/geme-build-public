import Image from 'next/image'

const data = {
  title: 'Small Microbes, Big Impact',
  // title: 'Small Microbes in the Lab, Big Impact on the World',
  desctiptions: [
    'ROKH SRL is the company behind GEME brand.',
    // 'ROKH SRL is the company behind GEME brand, we committed to providing intelligent and eco-friendly waste management solutions, harnessing the power of nature to remediate damaged environments.',
    // 'ROKH combines the use of smart devices with natural microorganisms to blend modern technology into the natural cycle of the laws of life, reducing the damage to nature and easing the burden on the earth.',
    // 'We discovered, developed and deliver amazing microbiota to improve and treat polluted water and soil, compensate for the damage done to nature, and heal our wounded earth.',
    'At ROKH, we are driven by a passion for scientific innovation and a deep commitment to making a positive impact on the world. Through the commercialization of our groundbreaking biotechnology solutions, we aim to translate our research achievements into tangible benefits that enhance human well-being and address pressing global challenges.',
  ],
  contactUs: 'Contact us :',
  imgUrls1:
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80',
  imgUrls2: [
    'https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80',
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80',
  ],
  imgUrls3: [
    'https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80',
    'https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80',
  ],
}

export default function HeroSection() {
  return (
    <div className="mx-auto max-w-xl lg:max-w-7xl px-8 lg:px-12 2xl:px-0">
      <div className="lg:flex items-center justify-between">
        <div className="text-4xl md:text-6xl lg:w-[55%] lg:mr-[5%] mt-4 lg:mt-0">
          <div className="font-bold tracking-tight text-emerald-600">
            {data.title}
          </div>
          {data.desctiptions.map((item, index) => (
            <div
              key={item}
              className={`${
                index === data.desctiptions.length - 1 ? 'md:w-[65%]' : ''
              } lg:w-full mt-3 md:mt-5 max-w-md text-lg text-gray-500 lg:text-xl md:max-w-3xl`}
            >
              {item}
            </div>
          ))}
          <div className="mt-3 md:mt-5 max-w-md text-lg text-gray-500 sm:text-xl md:max-w-3xl">
            {data.contactUs}
            <a
              href="mailto:info@geme.bio"
              className="ml-4 text-emerald-600 hover:underline"
            >
              info@geme.bio{' '}
            </a>
          </div>
        </div>

        <div className="mt-8 md:-mt-32 lg:mt-0 lg:w-[40%] flex items-start md:items-center justify-end lg:justify-between overflow-hidden">
          <div className="flex items-end h-full flex-shrink-0">
            <Image
              className="w-[176px] h-[264px] object-cover rounded-md"
              src={data.imgUrls1}
              width={176}
              height={264}
              alt="img"
            />
          </div>

          <div className="flex flex-none flex-col items-end h-full flex-shrink-0 lg:translate-x-6 space-y-4 space-x-4 lg:space-y-8">
            {data.imgUrls2.map((item) => (
              <Image
                key={item}
                className="w-[176px] h-[264px] object-cover rounded-md"
                src={item}
                width={176}
                height={264}
                alt="img"
              />
            ))}
          </div>

          <div className="flex flex-none flex-col items-end h-full flex-shrink-0 lg:translate-x-12 pt-32 md:pt-0 md:pb-[296px] space-y-4 space-x-4 lg:space-y-8">
            {data.imgUrls3.map((item) => (
              <Image
                key={item}
                className="w-[176px] h-[264px] object-cover rounded-md"
                src={item}
                width={176}
                height={264}
                alt="img"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
