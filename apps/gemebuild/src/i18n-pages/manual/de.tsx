import HeroSection, { IManualHeroSectionProps } from './components/HeroSection'

// 第1部分配置文件 En版
const manualHeroSectionProps: IManualHeroSectionProps = {
  title: 'Tutorial',
  description: (
    <>
      <p>
        <strong>Highlights of Content</strong>
      </p>
      <br></br>
      <div className="flex flex-col justify-center items-center lg:block">
        <ol className="text-left">
          <li>1. How to unbox and setup</li>
          <li>2. Cautions & Notice</li>
          <li>3. How to Activate GEME-Kobold</li>
          <li>4. Daily Usage Demo</li>
          <li>5. By-Product(Compost) Usage</li>
          <li>6. How to Make Your GEME Steady</li>
          <li>7. Control Panel Usage and troubleshooting</li>
          <li>8. How to Change the UV lamp</li>
          <li>9. What can be put into GEME, what can not</li>
        </ol>
      </div>
    </>
  ),
  primaryButtonLabel: 'Get Help on WhatsApp',
  secondaryButtonLabel: 'Customer Service',
  hintsLinkLabel: 'Download PDF for manual book',
}

export function ManualsPageDe() {
  return (
    <>
      <HeroSection {...manualHeroSectionProps} />
    </>
  )
}
