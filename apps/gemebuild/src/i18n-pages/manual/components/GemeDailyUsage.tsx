import {
  ThreeColumnWithDescription,
  IThreeColumnWithDescriptionProps,
} from '@containers/common/CategoryPreviews'
import { manualGeemDailyUsageMessages } from '../messages'
import { createIntlFor } from '@app/common/create-intl'
import { useLocale } from 'next-intl'

const asyncFeaturesProps: (
  locale: string,
) => Promise<IThreeColumnWithDescriptionProps> = async (locale) => {
  const { formatMessage } = await createIntlFor(locale)
  return {
    title: formatMessage(manualGeemDailyUsageMessages.title),
    description: formatMessage(manualGeemDailyUsageMessages.description),
    categories: [
      {
        imageSrc: '/assets/images/meet-geme/m1.png',
        imageAlt: formatMessage(manualGeemDailyUsageMessages.category1ImageAlt),
      },

      {
        imageSrc: '/assets/images/meet-geme/m2.png',
        imageAlt: formatMessage(manualGeemDailyUsageMessages.category2ImageAlt),
      },

      {
        imageSrc: '/assets/images/meet-geme/m3.png',
        imageAlt: formatMessage(manualGeemDailyUsageMessages.category3ImageAlt),
      },
    ],
  }
}

async function GeemDailyUsage() {
  const locale = useLocale()
  const featuresProps = await asyncFeaturesProps(locale)
  return <ThreeColumnWithDescription {...featuresProps} greyBackground={true} />
}

export default GeemDailyUsage
