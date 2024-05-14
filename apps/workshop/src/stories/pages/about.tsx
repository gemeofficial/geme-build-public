import ContentSection1 from 'ui/src/about/ContentSection1'
import HeroSection from 'ui/src/about/HeroSection'
import ContentSection2 from 'ui/src/about/ContentSection2'
import ContentSection3 from 'ui/src/about/ContentSection3'
import ContentSection4 from 'ui/src/about/ContentSection4'
import ContentSection5 from 'ui/src/about/ContentSection5'

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
