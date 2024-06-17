import Image from 'next/image'

const data = {
  mTitle: 'Our Mission',
  title: 'All Things Live Forever and in Harmony with the Earth',
  descriptions: [
    "Food waste is one of the world's most challenging problems. We can contribute our part to solve it, together with you!",
    "Not only food waste, but also animal feces, cat and dog's poops, cow and horse manure, all biodegradable waste can be well decomposed in the best practice way.",
    'Combined with biotechnology and modern manufacture, GEME proposal a solution for a better waste recycle methodology- Reduce & Recycle in place.',
    'Similar like the cache idea in the computer network, the true way to manage waste, especially bio waste from human, is to be processed where it created, shorten the path of the cycle significantly.',
    'GEME create products to make the idea come ture, being echo-friendly and protecting our mother nature is not just a slogan, but actionable among every single small moves when we throw our daily waste.',
    'GEME is not just a product, but a technology solution. We are trying to leverage the technology to a network, linking scientist teams, distributor partners, sustainable restaurants, recycle communities, organic farms, disposal stations, waste management organizations and individual together. Every node can get benefit, just like all things living harmony in our planet.',
    // 'Dreams do not always belong to a few, innovations do not rise from the ground, nor is the desire to follow the laws of nature and" All Things Live Forever and in Harmony with the Earth" a slogan written on a placard by environmentalists. Embracing the dream and innovating to achieve the good intentions of all mankind is the motivation for the GEME team members to start acting immediately.',
    // 'We are a group of "young people" who share a common dream. We are a team of project managers, engineering designers, microbiological scientists and natural agronomists who have been working in the field of waste treatment for more than 20 years, with the dream of "becoming a doctor of the earth" and constantly exploring and practicing.',
    // 'We combine advanced AI technology to design equipment with simple operation, comprehensive function and low cost; we apply the microorganisms extracted from nature to the treatment of biological waste to make everything circulate in an orderly manner in accordance with the laws of nature; and we apply the natural farming method that has been continuously improved in practice for more than 50 years to the cultivation of crops, so that organic food no longer belongs to a specific group of people, but by you to grow and produce in your balcony and backyard.',
    // `In the future, we will continue to promote the proven microbial treatment technology to restore the consolidated soil's vitality and clear the polluted river.`,
    // 'All this is not only our dream, but also the dream of every one of you who supports our products. Thank you for adding to environmental protection with just one small change. Thank you for working with us to protect our planet and realize our common dream.',
  ],
  points: [
    {
      title: 'Rethink',
      desc: 'Bio waste is not waste, it is gold for garden plants.',
    },
    {
      title: 'Reduce',
      desc: 'Stop burning and landfill, we can reduce waste in place!',
    },
    {
      title: 'Reuse',
      desc: 'Different waste can be transformed to different treasure.',
    },
    {
      title: 'Restore',
      desc: 'Not just nourish soil, also heal pollution, repair the earth.',
    },
  ],
  fullImgUrl: '/assets/images/about/v2406/s2-family.png',
}

export default function ContentSection1() {
  return (
    <div className="mt-28 md:mt-32 mx-auto max-w-xl lg:max-w-7xl px-8 lg:px-12 2xl:px-0">
      <div className="font-bold text-[#E5BE51] text-2xl sm:text-3xl mb-2">
        {data.mTitle}
      </div>
      <div className="font-bold tracking-tight text-emerald-600 text-4xl sm:text-5xl xl:text-6xl lg:mr-[40%]">
        {data.title}
      </div>
      <div className="lg:flex items-start justify-between">
        <div className="lg:w-[55%] lg:mr-[5%]">
          {data.descriptions.map((item) => (
            <div
              key={item}
              className="mt-3 lg:mt-5 text-base text-gray-500 lg:text-xl "
            >
              {item}
            </div>
          ))}
        </div>

        <div className="lg:w-[40%] lg:pl-20 mt-10 lg:mt-5 flex flex-col items-start justify-between overflow-hidden space-y-10 lg:space-y-20">
          {data.points.map((item) => (
            <div key={item.title}>
              <div className="text-3xl sm:text-5xl font-semibold">
                {item.title}
              </div>
              <div className="text-gray-600 mt-4">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-20">
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
