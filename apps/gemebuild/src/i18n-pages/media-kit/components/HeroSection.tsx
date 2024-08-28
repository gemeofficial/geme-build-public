import { SectionContainer, SectionDescription, SectionTitle } from 'ui'

const props = {
  title: 'GEME Media Kit',
  subTitle: `IFA Berlin is run by IFA Management GmbH – a joint venture founded by
        gfu Consumer & Home Electronics GmbH together with Clarion Events Ltd,
        one of the world’s leading independent event organizers.`,
  description: (
    <>
      <p>
        Under the new partnership, IFA plans to build on its success by
        expanding its digital offering and the IFA Next brand to add more
        start-ups and innovative products to the event. The new partnership will
        invest in features, new experiences, and entertainment to generate more
        value and excitement for attendees, sponsors and exhibitors.
      </p>
      <p className="mt-4 xl:mt-6">
        Leif Lindner is the appointed new Managing Director of IFA Management
        GmbH since 1 October 2023 and he will be in charge of planning and
        implementing IFA Berlin 2024, along with co-Managing Director Jörg
        Arntz. This move highlights the company’s focus on long-term planning
        and innovation in the trade show industry. Leif Lindner’s extensive
        industry knowledge, sales experience, and leadership skills will
        strengthen IFA’s position as the leading global trade show.
      </p>
    </>
  ),
}

export default function HeroSection() {
  const { description, subTitle, title } = props
  return (
    <SectionContainer className="flex flex-col gap-4 xl:gap-6" compact>
      <SectionTitle className="text-black/90">{title}</SectionTitle>
      <div className="md:text-lg lg:text-xl xl:text-2xl font-bold text-v2311-text-yellow xl:text-center">
        {subTitle}
      </div>
      <SectionDescription className="text-black">
        {description}
      </SectionDescription>
    </SectionContainer>
  )
}
