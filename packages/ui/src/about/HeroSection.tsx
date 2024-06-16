import Image from 'next/image'

const data = {
  title: 'Small Findings in the Lab, Big Impact to the World',
  // title: 'Small Microbes in the Lab, Big Impact on the World',
  desctiptions: [
    'At ROKH, we are united by a shared vision and a common goal: to create a world where waste is no longer a burden, but a resource, and where nature thrives alongside human progress.',
    // 'ROKH SRL is the company behind GEME brand, we committed to providing intelligent and eco-friendly waste management solutions, harnessing the power of nature to remediate damaged environments.',
    // 'ROKH combines the use of smart devices with natural microorganisms to blend modern technology into the natural cycle of the laws of life, reducing the damage to nature and easing the burden on the earth.',
    // 'We discovered, developed and deliver amazing microbiota to improve and treat polluted water and soil, compensate for the damage done to nature, and heal our wounded earth.',
    'We are driven by a passion for scientific innovation and a deep commitment to making a positive impact on the world. Through the commercialization of our groundbreaking biotechnology solutions, we aim to translate our research achievements into tangible benefits that enhance human well-being and address pressing global challenges.',
    <>
      We are a team of passionate individuals
      <li>
        <strong>Experienced professionals</strong>: With over 20 years of
        experience in waste treatment, we bring a depth of knowledge and
        expertise to our work.{' '}
      </li>{' '}
      <li>
        <strong>Dedicated scientists</strong>: Our microbiologists and natural
        agronomists are constantly exploring new ways to harness the power of
        nature for sustainable waste management.{' '}
      </li>{' '}
      <li>
        <strong>Dreamers and doers</strong>: We are not just dreamers; we are
        also doers. We are committed to turning our vision into reality, one
        innovative solution at a time.
      </li>
    </>,
  ],
  contactUs: 'Contact Us',
  imgUrls1: '/assets/images/about/v2406/s0-company.png',
  imgUrls2: [
    '/assets/images/about/v2406/s0-experiment.png',
    '/assets/images/about/v2406/s0-scientist.png',
  ],
  imgUrls3: [
    '/assets/images/about/v2406/s0-soil.png',
    '/assets/images/about/v2406/s0-seed.png',
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
            <a href="/contact" className="text-emerald-600 hover:underline">
              {data.contactUs}
            </a>
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
