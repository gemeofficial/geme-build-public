import {
  AboutContentSection1,
  AboutContentSection15,
  AboutContentSection2,
  AboutContentSection4,
  AboutContentSection6,
  AboutHeroSection,
  IAboutContentSection1,
  IAboutContentSection15,
  IAboutContentSection2,
  IAboutContentSection4,
  IAboutContentSection6,
  IAboutHeroSection,
} from 'ui'

// 静态页面的内容 配置文件 En版

// AboutHeroSection
const aboutHeroSectionProps: IAboutHeroSection = {
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

// AboutContentSection1
const aboutContentSection1Props: IAboutContentSection1 = {
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

// AboutContentSection15
const aboutContentSection15Props: IAboutContentSection15 = {
  mTitle: 'Our People',
  title: 'Pioneering Minds, Passionate Hearts',
  bodyTexts: (
    <>
      <div>
        <strong>Visionaries</strong>: Our visionary leaders set the direction,
        inspiring us to think beyond the ordinary and challenge conventional
        approaches to waste management.
      </div>
      <div>
        <strong>Scientists</strong>: Our brilliant scientists are at the
        forefront of research, constantly exploring new ways to harness the
        power of nature for sustainable waste solutions.
      </div>
      <div>
        <strong>Engineers</strong>: Our skilled engineers bring ideas to life,
        transforming innovative concepts into tangible solutions that make a
        real difference in the world.
      </div>
      <div>
        <strong>Collaborators</strong>: We foster a spirit of collaboration,
        encouraging open communication and the exchange of ideas across all
        levels of the organization.
      </div>
    </>
  ),
  mainImgUrl: '/assets/images/about/v2406/s1-birth.png',
  imgSectionUrl1: '/assets/images/about/v2406/s1-team.png',
  imgSectionUrl2: '/assets/images/about/v2406/s1-meeting.png',
  imgSectionUrl3: '/assets/images/about/v2406/s1-colleagues.png',
}

// AboutContentSection15
const aboutContentSection2Props: IAboutContentSection2 = {
  mTitle: 'Our Values',
  title: 'Take the Road Less Traveled',
  desc: 'We base our actions on truth and first principles. With a clear goal in sight, we dream ambitiously but take calculated steps to achieve it.',
  dataList: [
    {
      title: 'Be World-class',
      desc: `We set the highest standards, relentlessly pursuing excellence in all aspects of our work, with sustainability at its core.`,
    },
    {
      title: 'Open and Cooperative',
      desc: `Fostering open dialogue and collaboration to find collective solutions. Building strong partnerships with individuals,organizations, and communities.`,
    },
    {
      title: 'Always Learning',
      desc: `Embracing cutting-edge research to tackle environmental challenges.Continuously innovating and refining our solutions to achieve optimal results.`,
    },
    {
      title: 'Be Supportive',
      desc: `Cultivate a supportive environment where individuals feel empowered,valued, and encouraged to reach their full potential.`,
    },
    {
      title: 'Facts and Solution',
      desc: `Crafting effective solutions not swayed by assumptions or biases but by experiment result and data; we let the data guide our path.`,
    },
    {
      title: 'Take Responsibility',
      desc: `Ensuring our commitments, our work aligns with our values and ethical principles. Sharing our expertise and knowledge to empower communities worldwide.`,
    },
  ],
}

// aboutContentSection4
const aboutContentSection4Props: IAboutContentSection4 = {
  mTitle: 'Our Milestones',
  title: 'Solid Foundations, Step by Step',
  desc: 'Driven by passion and a shared commitment to excellence, we move swiftly through our development process.',
  progressList: [
    {
      progressBarTitle: 'July 2022',
      title: 'Kickstarter Campaign',
      desc: (
        <div>
          Got{' '}
          <a href="https://www.kickstarter.com/projects/geme/geme-harvest-ready-to-use-organic-compost-easily">
            support
          </a>{' '}
          from backers over 22 countries world wide.
        </div>
      ),
    },
    {
      progressBarTitle: 'Mar 2023',
      title: 'Enter US Marketing',
      desc: 'Started selling in US, Authorized Amazon store launched.',
    },
    {
      progressBarTitle: 'Jun 2023',
      title: 'Sale in Europe',
      desc: 'First batch machines landing in Europe, local warehouse setup.',
    },
    {
      progressBarTitle: 'Jan 2024',
      title: 'GEME I Model Upgrade',
      desc: 'Hardware upgrade after 1 year customer feedback, quieter and robuster.',
    },
    {
      progressBarTitle: 'Sep/Oct 2024',
      title: 'GEME II',
      desc: 'Smarter, more convenient, and more affordable.',
    },
    {
      progressBarTitle: '2026',
      title: 'GEME Networking',
      desc: 'Connecting communities, farms, and waste solutions for sustainability.',
    },
  ],
}

// aboutContentSection6
const aboutContentSection6Props: IAboutContentSection6 = {
  title: 'Partner with GEME',
  incentives: [
    {
      name: 'Live with GEME',
      link: '/product/geme',
      imageSrc: '/assets/images/about/icons/use-geme.png',
      description: (
        <>
          Feel good, do good, live sustainably. Replace your garbage disposal
          with <a href="/product/geme">GEME Composter</a>.
        </>
      ),
    },
    {
      name: 'Large Scale Composting with GEME',
      link: '/industrial-equipments',
      imageSrc: '/assets/images/about/icons/composting.png',
      description: `From homes to factories, Tailored biotechnology for industrial-grade composting excellence.`,
    },
    {
      name: 'Join GEME Networking',
      link: '/geme-network-survey',
      imageSrc: '/assets/images/about/icons/networking.png',
      description: `Free compost swap community! Share what you don't need, grow a greener future together.`,
    },
    {
      name: 'Affiliate with GEME',
      link: '/coming-soon',
      imageSrc: '/assets/images/about/icons/affiliate-marketing.png',
      description: `Be a GEME champion! Join our affiliate union & lead the sustainable revolution.`,
    },
    {
      name: 'Retail or Distribute with GEME',
      link: 'https://eu.jotform.com/form/221943772954062',
      imageSrc: '/assets/images/about/icons/distribution.png',
      description: `Expand your reach & join the GEME movement. We're seeking strong distributors worldwide.`,
    },
    {
      name: 'Investment with GEME',
      link: 'mailto:admin@geme.bio',
      imageSrc: '/assets/images/about/icons/profits.png',
      description: ` Fuel the future! Invest in GEME & join a game-changing sustainable movement. (admin@geme.bio).`,
    },
  ],
}

function AboutPageEn() {
  return (
    <>
      <div className="py-8 lg:pt-6 lg:pb-16">
        <AboutHeroSection {...aboutHeroSectionProps} />
        <AboutContentSection1 {...aboutContentSection1Props} />
        <AboutContentSection15 {...aboutContentSection15Props} />
        <AboutContentSection2 {...aboutContentSection2Props} />
        <AboutContentSection4 {...aboutContentSection4Props} />
        <AboutContentSection6 {...aboutContentSection6Props} />
      </div>
    </>
  )
}

export {
  AboutPageEn,
  aboutHeroSectionProps,
  aboutContentSection1Props,
  aboutContentSection15Props,
  aboutContentSection2Props,
  aboutContentSection4Props,
  aboutContentSection6Props,
}
