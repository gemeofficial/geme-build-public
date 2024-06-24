import Image from 'next/image'
import { MTitle } from '../ui-components'
import { ReactNode } from 'react'

export interface IAboutHeroSection {
  title: string
  mTitle: string
  descriptionSection: ReactNode
  contactUs: string
  imgUrls1: string
  imgUrls2: string[]
  imgUrls3: string[]
}

export const aboutHeroSectionExampleData: IAboutHeroSection = {
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
        <ul className="space-y-1">
          <li className="my-2">Our team consists of:</li>
          <li>
            <strong>Experienced Professionals</strong>: With over 20 years in
            solid waste resource treatment, we bring deep expertise to our work.
          </li>
          <li className="md:w-[60%] lg:w-full">
            <strong>Dedicated Scientists</strong>: Our microbiologists and
            agronomists continuously explore new ways to harness nature for
            sustainable waste management.
          </li>
          <li className="md:w-[60%] lg:w-full">
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

export function AboutHeroSection(props: IAboutHeroSection) {
  return (
    <div className="mx-auto max-w-xl lg:max-w-7xl px-8 lg:px-12 2xl:px-0">
      <div className="lg:flex items-center justify-between">
        <div className="lg:w-[55%] lg:mr-[5%] mt-4 lg:mt-0">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-emerald-600">
            {props.title}
          </h1>
          <MTitle className="mt-2">{props.mTitle}</MTitle>

          {props.descriptionSection}

          <div className="mt-3 md:mt-5 max-w-md text-lg sm:text-xl md:max-w-3xl">
            <a href="/contact" className="text-emerald-600 hover:underline">
              {props.contactUs}
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
              src={props.imgUrls1}
              width={176}
              height={264}
              alt=""
              priority
            />
          </div>

          <div className="flex flex-none flex-col items-end h-full flex-shrink-0 lg:translate-x-6 space-y-4 space-x-4 lg:space-y-8">
            {props.imgUrls2.map((item) => (
              <Image
                key={item}
                className="w-[176px] h-[264px] object-cover rounded-md"
                src={item}
                width={176}
                height={264}
                alt=""
                priority
              />
            ))}
          </div>

          <div className="flex flex-none flex-col items-end h-full flex-shrink-0 lg:translate-x-12 pt-32 md:pt-0 md:pb-[296px] space-y-4 space-x-4 lg:space-y-8">
            {props.imgUrls3.map((item) => (
              <Image
                key={item}
                className="w-[176px] h-[264px] object-cover rounded-md"
                src={item}
                width={176}
                height={264}
                alt=""
                priority
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
