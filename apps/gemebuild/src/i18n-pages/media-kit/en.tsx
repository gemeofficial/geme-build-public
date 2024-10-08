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
        Welcome to the GEME Media Center! Here you can find a variety of
        resources, including high-resolution logos, product images, and brand
        stories to help you learn more about GEME and incorporate our brand into
        your media coverage, marketing campaigns, and more.
      </p>
      <p>
        Feel free to download and use these resources to help promote
        sustainable living.
      </p>
      <p>
        Want to make use of our marks in a way not covered by these guidelines?
        Contact us at{' '}
        <a
          href="mailto:info@geme.bio"
          className="text-v2311-primary underline underline-offset-[6px] inline-block"
        >
          info@geme.bio
        </a>{' '}
        and include a visual mockup of intended use.
      </p>
    </div>
  ),
}

const downloadMediaKitProps: IDownLoadMediaKitProps = {
  downLoadItems: [
    {
      title: 'Logo Kit',
      desc: 'GEME Logo Library: Access a variety of GEME logos in different sizes and resolutions to suit your specific needs.',
      buttonText: 'Download',
      href: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/media/media-kit/GEME_LOGO.zip',
    },
    {
      title: 'GEME Products Media Kit',
      desc: 'GEME Product Media Kit: Download high-quality product images, detailed product PDFs, and more to enhance your marketing materials.',
      buttonText: 'Download',
      href: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/media/media-kit/GEME_Product_Guiding.zip',
    },
    {
      title: 'GEME Brand Center',
      desc: 'Learn about all the elements of the Slack brand, including logo, color, typography, text, illustrations and more, in our comprehensive online property and guide center.',
      buttonText: 'Enter',
      href: '/brand-hq',
    },
  ],
}

const termsOfService: ITermsOfServiceProps = {
  textInfo: (
    <>
      By using the GEME marks you agree to follow these guidelines as well as
      our{' '}
      <Link
        href="/privacy-policy"
        target="_blank"
        rel="noopener noreferrer"
        className="text-v2311-primary underline underline-offset-[6px] inline-block"
      >
        Privacy Policy
      </Link>{' '}
      and all our rules and policies. GEME reserves the right to cancel, modify,
      or change the permission in these guidelines at any time at its sole
      discretion. For further information about use of the GEME name and
      trademarks, please contact{' '}
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

export function MediaKitPageEn() {
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
