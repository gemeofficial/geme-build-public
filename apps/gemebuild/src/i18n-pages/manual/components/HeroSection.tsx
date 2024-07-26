import { ReactNode } from 'react'
import SplitWithNavBar from '../../../components/split-with-nav-bar'

export interface IManualHeroSectionProps {
  title: string
  description: ReactNode
  primaryButtonLabel: string
  secondaryButtonLabel: string
  hintsLinkLabel: string
  WhatsAppBusinessAccountURL?: string
  buttonLn?: boolean
}

function TitleComponent({ title }: { title: string }) {
  return (
    <h1 className="text-4xl font-bold tracking-tight text-green-600 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
      <span>{title}</span>
    </h1>
  )
}

export default function HeroSection({
  title,
  description,
  hintsLinkLabel,
  primaryButtonLabel,
  secondaryButtonLabel,
  WhatsAppBusinessAccountURL,
  buttonLn,
}: IManualHeroSectionProps) {
  const whatsHref = WhatsAppBusinessAccountURL || '/'

  return (
    <>
      <SplitWithNavBar
        title={title}
        TitleComponent={<TitleComponent title={title} />}
        description={description}
        imageSrc="/assets/images/manual/hero-v1.jpg"
        imageAlt="GEME tutorial"
        videoUrl="https://www.youtube.com/embed/5rWoJlB-uVo"
        buttonLn={buttonLn}
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
              href: '/customer-service',
            },
          },
        }}
        hintsLink={{
          label: hintsLinkLabel,
          linkProps: {
            href: '/manuals-download',
          },
        }}
      />
    </>
  )
}
