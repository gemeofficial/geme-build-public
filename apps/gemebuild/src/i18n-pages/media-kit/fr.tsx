/* eslint-disable react/no-unescaped-entities */
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
  title: 'Kit Média GEME',
  description: (
    <div className="flex flex-col gap-4 md:text-xl">
      <p>
        Bienvenue au Centre Médias GEME ! Vous y trouverez une variété de
        ressources, y compris des logos haute résolution, des images de produits
        et des histoires de marques, pour vous aider à en apprendre davantage
        sur GEME et à intégrer notre marque dans vos couvertures médiatiques,
        vos campagnes marketing, et plus encore. N'hésitez pas à télécharger et
        à utiliser ces ressources pour promouvoir un mode de vie durable.
      </p>
      <p>
        Vous souhaitez utiliser nos marques d'une manière non couverte par ces
        directives ? Contactez-nous à l'adresse{' '}
        <a
          href="mailto:info@geme.bio"
          className="text-v2311-primary underline underline-offset-[6px] inline-block"
        >
          info@geme.bio
        </a>{' '}
        et joignez une maquette visuelle de l'utilisation prévue.
      </p>
    </div>
  ),
}

const downloadMediaKitProps: IDownLoadMediaKitProps = {
  downLoadItmes: [
    {
      title: 'Logos',
      desc: 'Bibliothèque de Logos GEME : Accédez à une variété de logos GEME dans différentes tailles et résolutions pour répondre à vos besoins spécifiques.',
      buttonText: 'Download',
      href: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/media/media-kit/GEME_LOGO.zip',
    },
    {
      title: 'Kit média de produits GEME',
      desc: 'Kit Média de Produits GEME : Téléchargez des images de produits haute qualité, des PDF de produits détaillés, et plus encore pour améliorer vos supports marketing.',
      buttonText: 'Download',
      href: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/media/media-kit/GEME_Product_Guiding.zip',
    },
    {
      title: 'Centre de marque GEME',
      desc: 'Découvrez tous les éléments de la marque Slack, y compris le logo, la couleur, la typographie, le texte, les illustrations et bien plus encore, dans notre centre de propriété en ligne et de guides complet.',
      buttonText: 'Enter',
      href: '/brand-hq',
    },
  ],
}

const termsOfService: ITermsOfServiceProps = {
  textInfo: (
    <>
      En utilisant les marques GEME, vous acceptez de suivre ces directives
      ainsi que notre{' '}
      <Link
        href="/privacy-policy"
        target="_blank"
        rel="noopener noreferrer"
        className="text-v2311-primary underline underline-offset-[6px] inline-block"
      >
        politique de confidentialité
      </Link>{' '}
      et toutes nos règles et politiques. GEME se réserve le droit d'annuler, de
      modifier ou de changer la permission dans ces directives à tout moment à
      sa seule discrétion. Pour plus d'informations sur l'utilisation du nom et
      des marques GEME, veuillez contacter{' '}
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

export function MediaKitPageFr() {
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
