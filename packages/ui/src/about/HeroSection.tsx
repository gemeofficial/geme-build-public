import Image from 'next/image'
import { MTitle } from '../ui-components'

const data = {
  title: 'Less Waste, More Green',
  mTitle: `ROKH's Path to a Sustainable Future`,
  descriptionSection: (
    <div className="w-full mt-3 md:mt-5 max-w-md text-base text-v2311-text-gary md:max-w-3xl">
      <div>
        At ROKH, we share a unified vision: to transform waste into a resource
        and create a world where nature thrives alongside human progress. Our
        passion for scientific innovation drives us to have a positive impact on
        the world. By commercializing our groundbreaking biotechnology
        solutions, we turn research into tangible benefits that enhance human
        well-being and address global challenges.
      </div>
      <div>
        <ul>
          <li className="my-2">Our team consists of:</li>
          <li>
            <strong>Experienced Professionals</strong>: With over 20 years in
            solid waste resource treatment, we bring deep expertise to our work.
          </li>
          <li className="w-[60%]">
            <strong>Dedicated Scientists</strong>: Our microbiologists and
            agronomists continuously explore new ways to harness nature for
            sustainable waste management.
          </li>
          <li className="w-[60%]">
            <strong>Dreamers and Doers</strong>: We are committed to turning our
            vision into reality, one innovative solution at a time.
          </li>
        </ul>
      </div>
    </div>
  ),

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
        <div className="lg:w-[55%] lg:mr-[5%] mt-4 lg:mt-0">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-emerald-600">
            {data.title}
          </h1>
          <MTitle className="mt-2">{data.mTitle}</MTitle>

          {data.descriptionSection}

          <div className="mt-3 md:mt-5 max-w-md text-lg sm:text-xl md:max-w-3xl">
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
