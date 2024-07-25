import Image from 'next/image'
import {
  GridWithVideo,
  IGridWithVideosProps,
} from '@containers/common/FeatureSections'
import React from 'react'
import { manualFeaturesWithVideosMessages } from '../messages'
import { createIntlFor } from '@app/common/create-intl'
import { useLocale } from 'next-intl'

function featureIcon(num: number) {
  return () => (
    <Image
      alt="feature-icon"
      src={`/assets/images/geme-kobold/feature-icon-${num}.png`}
      width={64}
      height={64}
    />
  )
}

const asyncProps: (locale: string) => Promise<IGridWithVideosProps> = async (
  locale,
) => {
  const { formatMessage } = await createIntlFor(locale)
  return {
    title: formatMessage(manualFeaturesWithVideosMessages.title),
    description: formatMessage(manualFeaturesWithVideosMessages.description),
    features: [
      {
        name: formatMessage(manualFeaturesWithVideosMessages.feature1Name),
        description: formatMessage(
          manualFeaturesWithVideosMessages.feature1Description,
        ),
        icon: featureIcon(1),
        videoUrl: 'https://www.youtube.com/embed/izYVDd6KwO8',
        videoImageSrc: '/assets/images/manual/video-cover-unboxing.png',
        videoImageAlt: formatMessage(
          manualFeaturesWithVideosMessages.feature1VideoImageAlt,
        ),
      },
      {
        name: formatMessage(manualFeaturesWithVideosMessages.feature2Name),
        description: formatMessage(
          manualFeaturesWithVideosMessages.feature2Description,
        ),
        icon: featureIcon(2),
        videoUrl: 'https://www.youtube.com/embed/f09NNpAnyTQ',
        videoImageSrc: '/assets/images/manual/video-cover-cautions.png',
        videoImageAlt: formatMessage(
          manualFeaturesWithVideosMessages.feature2VideoImageAlt,
        ),
      },
      {
        name: formatMessage(manualFeaturesWithVideosMessages.feature3Name),
        description: formatMessage(
          manualFeaturesWithVideosMessages.feature3Description,
        ),
        icon: featureIcon(3),
        videoUrl: 'https://www.youtube.com/embed/hSpq48ymKrA',
        videoImageSrc:
          '/assets/images/manual/video-cover-activate-microbiota.png',
        videoImageAlt: formatMessage(
          manualFeaturesWithVideosMessages.feature3VideoImageAlt,
        ),
      },
      {
        name: formatMessage(manualFeaturesWithVideosMessages.feature4Name),
        description: formatMessage(
          manualFeaturesWithVideosMessages.feature4Description,
        ),
        icon: featureIcon(4),
        videoUrl: 'https://www.youtube.com/embed/mi8fwlJdt68',
        videoImageSrc: '/assets/images/manual/video-cover-daily-usage.png',
        videoImageAlt: formatMessage(
          manualFeaturesWithVideosMessages.feature4VideoImageAlt,
        ),
      },
      {
        name: formatMessage(manualFeaturesWithVideosMessages.feature5Name),
        description: formatMessage(
          manualFeaturesWithVideosMessages.feature5Description,
        ),
        icon: featureIcon(5),
        videoUrl: 'https://www.youtube.com/embed/qHo9WgCKUsw',
        videoImageSrc: '/assets/images/manual/video-cover-by-product-usage.png',
        videoImageAlt: formatMessage(
          manualFeaturesWithVideosMessages.feature5VideoImageAlt,
        ),
      },
      {
        name: formatMessage(manualFeaturesWithVideosMessages.feature6Name),
        description: formatMessage(
          manualFeaturesWithVideosMessages.feature6Description,
        ),
        icon: featureIcon(6),
        videoUrl: 'https://www.youtube.com/embed/rthDSasoOrY',
        videoImageSrc: '/assets/images/manual/video-cover-make-steady.png',
        videoImageAlt: formatMessage(
          manualFeaturesWithVideosMessages.feature6VideoImageAlt,
        ),
      },
      {
        name: formatMessage(manualFeaturesWithVideosMessages.feature7Name),
        description: formatMessage(
          manualFeaturesWithVideosMessages.feature7Description,
        ),
        icon: featureIcon(7),
        videoUrl: 'https://www.youtube.com/embed/jc5_ferVOa8',
        videoImageSrc:
          '/assets/images/manual/video-cover-control-panel-usage.png',
        videoImageAlt: formatMessage(
          manualFeaturesWithVideosMessages.feature7VideoImageAlt,
        ),
      },
      {
        name: formatMessage(manualFeaturesWithVideosMessages.feature8Name),
        description: formatMessage(
          manualFeaturesWithVideosMessages.feature8Description,
        ),
        icon: featureIcon(8),
        videoUrl: 'https://www.youtube.com/embed/VdAtQfpSQ_E',
        videoImageSrc: '/assets/images/manual/video-cover-change-uv-lamp.png',
        videoImageAlt: formatMessage(
          manualFeaturesWithVideosMessages.feature8VideoImageAlt,
        ),
      },
      {
        name: formatMessage(manualFeaturesWithVideosMessages.feature9Name),
        description: formatMessage(
          manualFeaturesWithVideosMessages.feature9Description,
        ),
        icon: featureIcon(9),
        videoUrl: 'https://www.youtube.com/embed/2DSFcxFRSos',
        videoImageSrc: '/assets/images/manual/video-cover-can-and-can-not.png',
        videoImageAlt: formatMessage(
          manualFeaturesWithVideosMessages.feature9VideoImageAlt,
        ),
      },
    ],
  }
}

async function FeaturesWithVideos() {
  const locale = useLocale()
  const props = await asyncProps(locale)
  return <GridWithVideo {...props} />
}
export default FeaturesWithVideos
