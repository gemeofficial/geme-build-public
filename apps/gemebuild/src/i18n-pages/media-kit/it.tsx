/* eslint-disable react/no-unescaped-entities */

import HeroSection, { IHeroSection } from './components/HeroSection'
import DownLoadMediaKit, {
  IDownLoadMediaKitProps,
} from './components/DownLoadMediaKit'
import TermsOfService, {
  ITermsOfServiceProps,
} from './components/TermsOfService'
import Link from 'next/link'

const heroSectionProps: IHeroSection = {
  title: 'GEME Media Kit',
  description: (
    <div className="flex flex-col gap-2 md:gap-4 md:text-xl">
      <p>
        Benvenuti nel Media Center di GEME! Qui potete trovare una varietà di
        risorse, inclusi loghi ad alta risoluzione, immagini dei prodotti e
        storie di marca per aiutarvi a conoscere meglio GEME e integrare il
        nostro marchio nelle vostre campagne mediatiche, campagne di marketing e
        altro ancora.
      </p>
      <p>
        Sentitevi liberi di scaricare e utilizzare queste risorse per promuovere
        uno stile di vita sostenibile.
      </p>
      <p>
        Vuoi utilizzare i nostri marchi in un modo non coperto da queste linee
        guida? Contattaci all'indirizzo{' '}
        <a
          href="mailto:info@geme.bio"
          className="text-v2311-primary underline underline-offset-[6px] inline-block"
        >
          info@geme.bio
        </a>{' '}
        e includi un mockup visivo dell'uso previsto.
      </p>
    </div>
  ),
}

const downloadMediaKitProps: IDownLoadMediaKitProps = {
  downLoadItems: [
    {
      title: 'Kit Loghi',
      desc: 'Libreria di Loghi GEME: Accedi a una varietà di loghi GEME in diverse dimensioni e risoluzioni per soddisfare le tue specifiche esigenze.',
      buttonText: 'Scarica',
      href: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/media/media-kit/GEME_LOGO.zip',
    },
    {
      title: 'Kit Media Prodotti GEME',
      desc: 'Kit Media Prodotti GEME: Scarica immagini di alta qualità dei prodotti, PDF dettagliati e altro ancora per migliorare i tuoi materiali di marketing.',
      buttonText: 'Scarica',
      href: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/media/media-kit/GEME_Product_Guiding.zip',
    },
    {
      title: 'Centro Brand GEME',
      desc: 'Scopri tutti gli elementi del marchio GEME, inclusi logo, colori, tipografia, testo, illustrazioni e altro nel nostro centro guida e proprietà online completo.',
      buttonText: 'Entra',
      href: '/brand-hq',
    },
  ],
}

const termsOfService: ITermsOfServiceProps = {
  textInfo: (
    <>
      Utilizzando i marchi GEME accetti di seguire queste linee guida così come
      la nostra{' '}
      <Link
        href="/privacy-policy"
        target="_blank"
        rel="noopener noreferrer"
        className="text-v2311-primary underline underline-offset-[6px] inline-block"
      >
        Politica sulla Privacy
      </Link>{' '}
      e tutte le nostre regole e politiche. GEME si riserva il diritto di
      cancellare, modificare o cambiare il permesso in queste linee guida in
      qualsiasi momento a sua esclusiva discrezione. Per ulteriori informazioni
      sull'uso del nome e dei marchi GEME, contatta{' '}
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

export function MediaKitPageIt() {
  return (
    <>
      <div className="bg-[#F4EDE4] mb-14 md:py-14 lg:py-20 xl:pt-8 xl:pb-14">
        <HeroSection {...heroSectionProps} />
      </div>
      <DownLoadMediaKit {...downloadMediaKitProps} />
      {/* <HighLightBar /> */}
      <TermsOfService {...termsOfService} />
    </>
  )
}
