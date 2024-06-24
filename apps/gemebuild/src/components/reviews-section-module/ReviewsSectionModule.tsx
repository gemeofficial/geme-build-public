import { IReviewsSectionConfig, ReviewsSection } from 'ui'
import { LocaleType } from 'ui/src/reviews/ReviewsSection'

interface IMutilLanguageTextInfo {
  en: ITextInfo
  de: ITextInfo
  fr: ITextInfo
}

interface ITextInfo {
  title: string
  description: string
}

const mutilLanguageTextInfo: IMutilLanguageTextInfo = {
  en: {
    title: 'What Real Users Say',
    description: `Don't pay too much attention to influencers reviews, many of which are paid advertisements. Instead, listen to everyday people like you who share their honest experiences with us, even if they haven't left reviews online.`,
  },
  de: {
    title: 'Was echte Benutzer sagen',
    description: `Achten Sie nicht zu sehr auf Influencer-Bewertungen, von denen viele bezahlte Werbeanzeigen sind. Hören Sie stattdessen auf alltägliche Menschen wie Sie, die ihre ehrlichen Erfahrungen mit uns teilen, auch wenn sie keine Bewertungen online hinterlassen haben.`,
  },
  fr: {
    title: 'Ce que disent les vrais utilisateurs',
    description: `Ne faites pas trop attention aux avis des influenceurs, dont beaucoup sont des publicités payées. Écoutez plutôt les gens ordinaires comme vous qui partagent leurs expériences honnêtes avec nous, même s'ils n'ont pas laissé de commentaires en ligne.`,
  },
}

export function ReviewsSectionModule({
  reviewsSectionConfig,
  locale,
  description,
  title,
}: {
  reviewsSectionConfig: IReviewsSectionConfig
  locale: LocaleType
  title?: string
  description?: string
}) {
  const defaultTextInfo = mutilLanguageTextInfo[locale]
  const currentTitle = title || defaultTextInfo.title
  const currentDescription = description || defaultTextInfo.description

  return (
    <div className="bg-white py-10">
      <div className="text-center lg:mt-10 px-4 mx-auto md:px-8 xl:max-w-7xl">
        <h2 className="v2311-font-h1 text-v2311-primary text-center ">
          {currentTitle}
        </h2>
        <p className="v2311-font-body text-gray-600 text-center mt-4">
          {currentDescription}
        </p>
      </div>
      <ReviewsSection
        locale={locale}
        reviewsSectionConfig={reviewsSectionConfig}
      />
    </div>
  )
}
