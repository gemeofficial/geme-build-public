import Image from 'next/image'
import { MTitle, Title } from '../index'

const data = {
  mTitle: 'Our Mission',
  title: 'All Things Live Forever and in Harmony with Earth',
  descriptions: [
    "Food waste is one of the world's biggest challenges, and we can help solve it together with you. But it's not just food waste—animal feces, and all biodegradable waste can be effectively decomposed.",
    'By combining biotechnology with modern manufacturing, GEME offers a solution for better waste recycling: Reduce & Recycle in place.',
    "Similar to the cache concept in computer networks, the most efficient way to manage waste, especially bio-waste, is to process it where it's created, significantly shortening the recycling path.",
    "GEME creates products to make this idea a reality. Being eco-friendly and protecting nature isn't just a slogan for us; it's actionable through every small step when we dispose of our daily waste.",
    "GEME is more than a product; it's a technology solution.",
    'We leverage technology to create a network linking scientist teams, distributor partners, sustainable restaurants, recycling communities, organic farms, disposal stations, waste management organizations, and individuals. Every node benefits, just like all things living in harmony on our planet.',
  ],
  points: [
    {
      title: 'Rethink',
      desc: 'Adopt a holistic view of environmental care. Treat bio waste not as trash, but as a resource for gardens and the planet. Understand that our actions deeply impact the Earth.',
    },
    {
      title: 'Reduce',
      desc: 'Cut down on resource use and waste. Follow sustainable practices to save resources and protect the environment. Handle waste at its source to lessen its impact.',
    },
    {
      title: 'Reuse',
      desc: 'Recycle, repurpose, and upcycle materials. Turn different types of waste into useful resources, extending their life and reducing the need for new materials.',
    },
    {
      title: 'Restore',
      desc: "Protect and revive natural ecosystems. Improve soil health, clean pollution, and repair damaged environments to ensure our planet's well-being.",
    },
  ],
  fullImgUrl: '/assets/images/about/v2406/s2-family.png',
}

export function AboutContentSection1() {
  return (
    <div className="mt-20 md:mt-0 mx-auto max-w-xl lg:max-w-7xl px-8 lg:px-12 2xl:px-0">
      <MTitle>{data.mTitle}</MTitle>
      <Title>{data.title}</Title>
      <div className="lg:flex items-start justify-between text-base">
        <div className="lg:w-[55%] lg:mr-[5%]">
          {data.descriptions.map((item) => (
            <div key={item} className="mt-3 lg:mt-5  text-v2311-text-gary ">
              {item}
            </div>
          ))}
        </div>

        <div className="lg:w-[40%] lg:pl-20 mt-10 lg:mt-5 flex flex-col items-start justify-between overflow-hidden space-y-4 lg:space-y-5">
          {data.points.map((item) => (
            <div key={item.title}>
              <MTitle className="!text-emerald-600">{item.title}</MTitle>
              <div className="text-v2311-text-gary mt-4">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-8">
        <Image
          className="w-full max-h-[500px] object-cover rounded-lg"
          src={data.fullImgUrl}
          width={1920}
          height={500}
          alt="img"
        />
      </div>
    </div>
  )
}
