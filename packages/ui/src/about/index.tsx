import ContentSection0 from './ContentSection0'
import ContentSection1 from './ContentSection1'
import HeroSection from './HeroSection'
import ContentSection2 from './ContentSection2'
import ContentSection3 from './ContentSection3'
import ContentSection4 from './ContentSection4'
import ContentSection5 from './ContentSection5'
import ContentSection6 from './ContentSection6'

export default function About() {
  return (
    <div className="py-8 lg:pt-6 lg:pb-16">
      <HeroSection />
      <ContentSection0 />
      <ContentSection1 />
      <ContentSection2 />
      <ContentSection3 />
      <ContentSection4 />
      <ContentSection6 />
    </div>
  )
}
