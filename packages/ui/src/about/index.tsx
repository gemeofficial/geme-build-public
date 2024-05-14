import ContentSection1 from './ContentSection1'
import HeroSection from './HeroSection'
import ContentSection2 from './ContentSection2'
import ContentSection3 from './ContentSection3'
import ContentSection4 from './ContentSection4'
import ContentSection5 from './ContentSection5'

export default function About() {
  return (
    <div className='py-8 lg:py-20'>
      <HeroSection />
      <ContentSection1 />
      <ContentSection2 />
      <ContentSection3 />
      <ContentSection4 />
      <ContentSection5 />
    </div>
  )
}