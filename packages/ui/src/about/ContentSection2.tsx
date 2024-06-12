const data = {
  title: 'Our Values',
  desc: 'Go down the road less traveled, head to the bright north star, dream big and walk carefully.',
  dataList: [
    {
      title: 'Be World-class',
      desc: 'We set the highest standards, relentlessly pursuing excellence in all aspects of our work, with sustainability at its core. Our unwavering commitment to quality, innovation, and environmental responsibility sets us apart, pushing the boundaries of sustainable business practices.',
    },
    {
      title: 'Open and Cooperative',
      desc: 'We believe that synergy stems from open communication and seamless teamwork. We foster a culture of collaboration, where diverse perspectives and ideas converge to achieve remarkable results. We break down silos, embrace transparency, and value the contributions of each individual.',
    },
    {
      title: 'Always Learning',
      desc: 'We are perpetual learners, constantly seeking knowledge and expanding our skillset. This growth mindset empowers us to stay ahead of the curve, adapt to evolving challenges, and deliver cutting-edge solutions. We embrace lifelong learning, recognizing that the pursuit of knowledge is never-ending.',
    },
    {
      title: 'Be Supportive',
      desc: 'We recognize that our success hinges on the collective effort of our team. We cultivate a supportive environment where individuals feel empowered, valued, and encouraged to reach their full potential. We believe in fostering a sense of belonging, where everyone feels respected, heard, and supported.',
    },
    {
      title: 'Facts and Solution',
      desc: 'We ground our decisions in sound evidence and rigorous analysis. We meticulously gather information, objectively evaluate options, and employ data-driven strategies to craft effective solutions. We are not swayed by assumptions or biases; we let the data guide our path.',
    },
    {
      title: 'Take Responsibility',
      desc: 'We take ownership of our actions and decisions, demonstrating accountability and integrity. We are committed to upholding our commitments, ensuring that our work aligns with our values and ethical principles. We hold ourselves and each other to the highest standards, fostering a culture of responsibility and trust.',
    },
  ],
}

export default function ContentSection2() {
  return (
    <div className="mt-10 lg:mt-0 mx-auto max-w-xl lg:max-w-7xl px-8 lg:px-12 2xl:px-0">
      <div className="font-bold text-[#E5BE51] text-2xl sm:text-3xl mb-2">
        {data.title}
      </div>
      <div className="text-gray-600 mt-2">{data.desc}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 mt-4">
        {data.dataList.map((item) => (
          <div key={item.title}>
            <div className="text-lg font-semibold">{item.title}</div>
            <div className="text-gray-600 mt-2">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
