
import SplitWithNavBar from '../../../components/split-with-nav-bar'
import { IManualHeroSectionProps } from '../../manual/components/HeroSection'

function Title({ title }: { title: string }) {
  return (
    <h1 className="text-4xl font-bold tracking-tight text-green-600 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
      <span>{title}</span>
    </h1>
  )
}

export default function HeroSection({
  title,
  description,
  primaryButtonLabel,
  secondaryButtonLabel,
  buttonLn,
  PrefetchLink,
  WhatsAppBusinessAccountURL,
}: IManualHeroSectionProps) {
  const whatsHref = WhatsAppBusinessAccountURL || '/'

  return (
    <SplitWithNavBar
      title={title}
      TitleComponent={<Title title={title} />}
      description={description}
      imageSrc="/assets/images/solar-compactor/hero-bg-wide.png"
      imageAlt="Solar Compactor"
      displayImageWithBlurBackground={false}
      buttonLn={buttonLn}
      PrefetchLink={PrefetchLink}
      buttons={{
        primaryButton: {
          label: primaryButtonLabel,
          linkProps: {
            href: whatsHref,
          },
        },
        secondaryButton: {
          label: secondaryButtonLabel,
          linkProps: {
            href: '/contact',
          },
        },
      }}
    />
  )
}
