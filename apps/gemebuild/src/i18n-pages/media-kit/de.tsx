import HeroSection, { IHeroSection } from './components/HeroSection'
import DownLoadMediaKit, {
  IDownLoadMediaKitProps,
} from './components/DownLoadMediaKit'
import HignLightBar from './components/HignLightBar'
import TermsOfService, {
  ITermsOfServiceProps,
} from './components/TermsOfService'
import Link from 'next/link'

const heroSectionProps: IHeroSection = {
  title: 'GEME Medienkit',
  description: (
    <div className="flex flex-col gap-2 md:gap-4 md:text-xl">
      <p>
        Willkommen im GEME Media Center! Hier finden Sie eine Vielzahl von
        Ressourcen, darunter hochauflösende Logos, Produktbilder und
        Markengeschichten, die Ihnen helfen, mehr über GEME zu erfahren und
        unsere Marke in Ihre Medienberichterstattung, Marketingkampagnen und
        vieles mehr einzubinden.
      </p>
      <p>
        Laden Sie sich diese Ressourcen herunter und nutzen Sie sie, um einen
        nachhaltigen Lebensstil zu unterstützen.
      </p>
      <p>
        Möchten Sie unsere Markenzeichen auf eine Weise nutzen, die in diesen
        Richtlinien nicht abgedeckt ist? Kontaktieren Sie uns unter{' '}
        <a
          href="mailto:info@geme.bio"
          className="text-v2311-primary underline underline-offset-[6px] inline-block"
        >
          info@geme.bio
        </a>{' '}
        und fügen Sie ein visuelles Mockup der beabsichtigten Verwendung bei.
      </p>
    </div>
  ),
}

const downloadMediaKitProps: IDownLoadMediaKitProps = {
  downLoadItmes: [
    {
      title: 'Logo-Kit',
      desc: 'GEME Logo-Bibliothek: Greifen Sie auf eine Vielzahl von GEME-Logos in verschiedenen Größen und Auflösungen zu, um Ihre spezifischen Bedürfnisse zu erfüllen.',
      buttonText: 'Download',
      href: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/media/media-kit/GEME_LOGO.zip',
    },
    {
      title: 'GEME Produkt-Medienkit',
      desc: 'GEME Produkt-Medienkit: Laden Sie hochauflösende Produktbilder, detaillierte Produkt-PDFs und mehr herunter, um Ihre Marketingmaterialien zu verbessern.',
      buttonText: 'Download',
      href: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/media/media-kit/GEME_Product_Guiding.zip',
    },
    {
      title: 'GEME Marken-Center',
      desc: 'Erfahren Sie alles über die Elemente der Slack-Marke, einschließlich Logo, Farbe, Typografie, Text, Illustrationen und mehr, in unserem umfassenden Online-Eigentums- und Leitfadenzentrum.',
      buttonText: 'Enter',
      href: '/brand-hq',
    },
  ],
}

const termsOfService: ITermsOfServiceProps = {
  textInfo: (
    <>
      Durch die Nutzung der GEME-Marken stimmen Sie zu, diese Richtlinien sowie
      unsere{' '}
      <Link
        href="/privacy-policy"
        target="_blank"
        rel="noopener noreferrer"
        className="text-v2311-primary underline underline-offset-[6px] inline-block"
      >
        Datenschutzrichtlinie
      </Link>{' '}
      und alle unsere Regeln und Richtlinien zu befolgen. GEME behält sich das
      Recht vor, die Erlaubnis in diesen Richtlinien jederzeit nach eigenem
      Ermessen zu kündigen, zu ändern oder zu verändern. Für weitere
      Informationen zur Verwendung des GEME-Namens und der Marken kontaktieren
      Sie bitte{' '}
      <a
        href="mailto:info@geme.bio"
        className="text-v2311-primary underline underline-offset-[6px] inline-block"
      >
        info@geme.bio
      </a>
      .
    </>
  ),
}

export function MediaKitPageDe() {
  return (
    <>
      <div className="bg-[#F4EDE4] mb-14 md:py-14 lg:py-20 xl:pt-8 xl:pb-14">
        <HeroSection {...heroSectionProps} />
      </div>
      <DownLoadMediaKit {...downloadMediaKitProps} />
      {/* <HignLightBar /> */}
      <TermsOfService {...termsOfService} />
    </>
  )
}
