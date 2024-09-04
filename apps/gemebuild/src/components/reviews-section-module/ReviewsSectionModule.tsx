import { ReactNode } from 'react'
import {
  IReviewsSectionConfig,
  ReviewsSection,
  SectionDescription,
  SectionTitle,
} from 'ui'
import { LocaleType } from 'ui'
import { ILinkComponent } from '../../i18n-pages'
import DefaultLink from 'next/link'

interface IMutilLanguageTextInfo {
  en: ITextInfo
  de: ITextInfo
  fr: ITextInfo
}

interface ITextInfo {
  title: string
  description: ReactNode
}

export interface IReviewsSectionModuleProps {
  reviewsSectionConfig: IReviewsSectionConfig
  locale: LocaleType
  title?: string
  description?: string
  PrefetchLink?: ILinkComponent
}

const mutilLanguageTextInfo: IMutilLanguageTextInfo = {
  en: {
    title: 'What Real Users Say',
    description: `You might want to click and see the detail review, to see how our customers feel about our product, you can see the real product review and our customer service as well.`,
  },
  de: {
    title: 'Was unsere Benutzer sagen',
    description: `Hier befinden sich die Detail-Bewertung, wie unsere Kunden sich über unser Produkt fühlen und wie unseren Kundenservice ist. `,
  },
  fr: {
    title: 'Ce que disent les vrais utilisateurs',
    description: `Ne faites pas trop attention aux avis des influenceurs, dont beaucoup sont des publicités payées. Écoutez plutôt les gens ordinaires comme vous qui partagent leurs expériences honnêtes avec nous, même s'ils n'ont pas laissé de commentaires en ligne.`,
  },
}

const linkTextInfo = {
  en: 'Check more evidence',
  de: 'Mehr Beweise prüfen',
  fr: 'Vérifiez plus de preuves',
}

export function ReviewsSectionModule({
  reviewsSectionConfig,
  locale,
  description,
  title,
  PrefetchLink,
}: IReviewsSectionModuleProps) {
  const defaultTextInfo = mutilLanguageTextInfo[locale]
  const currentTitle = title || defaultTextInfo.title
  const currentDescription = description || defaultTextInfo.description

  const Link = PrefetchLink ? PrefetchLink : DefaultLink

  return (
    <div className="bg-white pt-10 xl:pt-14 pb-10">
      <div className="px-4 mx-auto md:px-8 xl:max-w-7xl">
        <SectionTitle>{currentTitle}</SectionTitle>
        <SectionDescription className="mt-4">
          {currentDescription}
          <Link
            href="/reviews"
            className="ml-2 text-sm font-semibold leading-6 text-emerald-600 hover:underline"
          >
            {linkTextInfo[locale]}
          </Link>
        </SectionDescription>
      </div>
      <ReviewsSection
        locale={locale}
        reviewsSectionConfig={reviewsSectionConfig}
      />
    </div>
  )
}
