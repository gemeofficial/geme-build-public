import ContentSection1 from '../components/about/ContentSection1'
import HeroSection from '../components/about/HeroSection'
import ContentSection2 from '../components/about/ContentSection2'
import ContentSection3 from '../components/about/ContentSection3'
import ContentSection4 from '../components/about/ContentSection4'
import ContentSection5 from '../components/about/ContentSection5'

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
