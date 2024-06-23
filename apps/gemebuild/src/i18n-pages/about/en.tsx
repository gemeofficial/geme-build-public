import {
  AboutContentSection1,
  AboutContentSection15,
  AboutContentSection2,
  AboutContentSection4,
  AboutContentSection6,
  AboutHeroSection,
} from 'ui'

// 静态页面的内容 配置文件 En版

// AboutHeroSection
const aboutHeroSectionProps = {}

function AboutPageEn() {
  return (
    <>
      <div className="py-8 lg:pt-6 lg:pb-16">
        <AboutHeroSection />
        <AboutContentSection1 />
        <AboutContentSection15 />
        <AboutContentSection2 />
        <AboutContentSection4 />
        <AboutContentSection6 />
      </div>
    </>
  )
}

export { AboutPageEn }
