import Image from 'next/image'

const data = {
  title: 'Our People',
  desc: 'Pioneering Minds, Passionate Hearts',
  bodyTexts: [
    <div>
      <strong>Visionaries</strong>: Our visionary leaders set the direction,
      inspiring us to think beyond the ordinary and challenge conventional
      approaches to waste management.
    </div>,
    <div>
      <strong>Scientists</strong>: Our brilliant scientists are at the forefront
      of research, constantly exploring new ways to harness the power of nature
      for sustainable waste solutions.
    </div>,
    <div>
      <strong>Engineers</strong>: Our skilled engineers bring ideas to life,
      transforming innovative concepts into tangible solutions that make a real
      difference in the world.
    </div>,
    <div>
      <strong>Collaborators</strong>: We foster a spirit of collaboration,
      encouraging open communication and the exchange of ideas across all levels
      of the organization.
    </div>,
  ],
  mainImgUrl: '/assets/images/about/v2406/s1-birth.png',
  imgSectionUrl1: '/assets/images/about/v2406/s1-team.png',
  imgSectionUrl2: '/assets/images/about/v2406/s1-meeting.png',
  imgSectionUrl3: '/assets/images/about/v2406/s1-colleagues.png',
}

export default function ContentSection15() {
  return (
    <div className="mt-20 lg:mt-28 3xl:mt-32 mx-auto max-w-xl lg:max-w-7xl px-8 lg:px-12 2xl:px-0">
      <div className="lg:flex items-start justify-between">
        <div className="lg:w-[55%] lg:mr-[5%]">
          <div className="font-bold text-[#E5BE51] text-2xl sm:text-3xl mb-2">
            {data.title}
          </div>
          <div className="font-bold tracking-tight text-emerald-600 text-4xl sm:text-5xl xl:text-6xl">
            {data.desc}
          </div>
          <div className="text-[#777] mt-4">
            {data.bodyTexts.map((item, index) => (
              <div key={index} className="mt-2">
                <div>{item}</div>
              </div>
            ))}
          </div>
        </div>

        <Image
          className="hidden lg:block w-[600px] h-[400px] object-cover rounded-xl"
          src={data.mainImgUrl}
          width={600}
          height={400}
          alt="img"
        />
      </div>

      <div className="mt-12">
        {/* < 768 + */}
        <div className="md:hidden flex items-start h-[300px] overflow-hidden">
          <div className="flex flex-col justify-between h-full flex-shrink-0 -translate-x-12">
            <Image
              className="w-[192px] h-[144px] object-cover rounded-xl"
              src={data.imgSectionUrl1}
              width={192}
              height={144}
              alt="img"
            />

            <Image
              className="w-[192px] h-[144px] object-cover rounded-xl"
              src={data.imgSectionUrl3}
              width={192}
              height={144}
              alt="img"
            />
          </div>

          <div className="overflow-hidden h-full ml-4 w-[600px] flex-shrink-0 -translate-x-12">
            <Image
              className="w-full h-full object-cover rounded-xl"
              src={data.imgSectionUrl2}
              width={600}
              height={400}
              alt="img"
            />
          </div>
        </div>

        {/* > 768 && < 1024 +  */}
        <div className="hidden md:block lg:hidden space-y-6">
          <div className="flex items-end overflow-hidden space-x-6">
            <Image
              className="w-[384px] h-[288px] object-cover rounded-xl flex-shrink-0 -translate-x-48"
              src={data.imgSectionUrl1}
              width={384}
              height={288}
              alt="img"
            />

            <Image
              className="w-[600px] h-[400px] object-cover rounded-xl flex-shrink-0 -translate-x-48"
              src={data.mainImgUrl}
              width={600}
              height={400}
              alt="img"
            />
          </div>

          <div className="flex items-start overflow-hidden space-x-6">
            <Image
              className="w-[600px] h-[400px] object-cover rounded-xl flex-shrink-0 -translate-x-48"
              src={data.imgSectionUrl2}
              width={600}
              height={400}
              alt="img"
            />

            <Image
              className="w-[384px] h-[288px] object-cover rounded-xl flex-shrink-0 -translate-x-48"
              src={data.imgSectionUrl3}
              width={384}
              height={288}
              alt="img"
            />
          </div>
        </div>

        {/* > 1024 +  */}
        <div className="hidden lg:flex justify-end space-x-8 overflow-hidden relative">
          <Image
            className="w-[384px] h-[288px] object-cover rounded-xl -translate-x-24"
            src={data.imgSectionUrl1}
            width={384}
            height={288}
            alt="img"
          />

          <Image
            className="w-[600px] h-[400px] object-cover rounded-xl flex-shrink-0 -translate-x-24"
            src={data.imgSectionUrl2}
            width={600}
            height={400}
            alt="img"
          />

          <Image
            className="w-[384px] h-[288px] object-cover rounded-xl flex-shrink-0 -translate-x-24"
            src={data.imgSectionUrl3}
            width={384}
            height={288}
            alt="img"
          />
        </div>
      </div>
    </div>
  )
}
