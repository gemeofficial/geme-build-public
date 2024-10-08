import { IMultiLanguageConfig, LocaleType } from 'ui'
import StarIcon from './StarIcon'
import { ReactNode } from 'react'

interface ITextInfo {
  score: string
  unit: string
  title: ReactNode
}

const multiLanguageTextInfo: IMultiLanguageConfig<ITextInfo> = {
  en: {
    score: '4.78',
    unit: `Rated`,
    title: (
      <>
        Trusted and Loved <br />
        by 10,000+ Kitchens
      </>
    ),
  },
  de: {
    score: '4.78',
    unit: `Bewertet`,
    title: (
      <>
        Vertraut und geliebt <br />
        von über 10.000+ Küchen
      </>
    ),
  },
  fr: {
    score: '4.78',
    unit: `Noté`,
    title: (
      <>
        Approuvé et adoré <br />
        par plus de 10 000+ cuisines
      </>
    ),
  },
  it: {
    score: '4,78',
    unit: 'Valutato',
    title: (
      <>
        Fidato e Amato <br />
        da oltre 10.000 Cucine
      </>
    ),
  },
}

export function ReviewsScoreHeader({ locale }: { locale: LocaleType }) {
  const defaultTextInfo = multiLanguageTextInfo[locale]
  return (
    <div className="flex flex-col max-w-[450px] lg:max-w-screen-sm mx-auto items-center gap-y-3 rounded-xl py-5 px-8">
      <div className="flex gap-x-1">
        <StarIcon count={4} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="none"
          className="w-6 h-6 lg:w-8 lg:h-8"
        >
          <linearGradient
            id="star-gradient"
            x1="15.9999"
            y1="0"
            x2="15.9999"
            y2="32"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFC700"></stop>
            <stop offset="1" stopColor="#FEDE60"></stop>
          </linearGradient>
          <clipPath id="left-24.960000000000008">
            <rect x="0" y="0" width="24.960000000000008" height="32"></rect>
          </clipPath>
          <clipPath id="right-7.039999999999992">
            <rect
              x="24.960000000000008"
              y="0"
              width="7.039999999999992"
              height="32"
            ></rect>
          </clipPath>
          <path
            d="M15.9999 25.4406L7.65304 31.7312C7.35983 31.9308 7.06478 32.0192 6.76789 31.9965C6.471 31.9738 6.1987 31.8906 5.95099 31.7469C5.70374 31.6037 5.51554 31.3904 5.3864 31.1071C5.25726 30.8238 5.2545 30.5212 5.37813 30.1993L8.56507 19.8375L0.637358 14.1765C0.333578 13.9873 0.139177 13.7459 0.0541552 13.4521C-0.030407 13.1584 -0.0161605 12.8663 0.0968955 12.5757C0.209952 12.2856 0.381373 12.0521 0.611162 11.8752C0.84095 11.6988 1.11854 11.6106 1.44392 11.6106H11.397L14.6529 1.03331C14.7765 0.711835 14.9559 0.459248 15.1912 0.275548C15.4261 0.0918484 15.6956 0 15.9999 0C16.3041 0 16.5737 0.0918484 16.8085 0.275548C17.0438 0.459248 17.2233 0.711835 17.3469 1.03331L20.6028 11.6106H30.5558C30.8812 11.6106 31.1588 11.6988 31.3886 11.8752C31.6184 12.0521 31.7898 12.2856 31.9029 12.5757C32.0159 12.8663 32.0302 13.1584 31.9456 13.4521C31.8606 13.7459 31.6662 13.9873 31.3624 14.1765L23.4347 19.8375L26.6216 30.1993C26.7453 30.5212 26.7425 30.8238 26.6134 31.1071C26.4842 31.3904 26.296 31.6037 26.0488 31.7469C25.8011 31.8906 25.5288 31.9738 25.2319 31.9965C24.935 32.0192 24.6399 31.9308 24.3467 31.7312L15.9999 25.4406Z"
            fill="url(#star-gradient)"
            clipPath="url(#left-24.960000000000008)"
          ></path>
          <path
            d="M15.9999 25.4406L7.65304 31.7312C7.35983 31.9308 7.06478 32.0192 6.76789 31.9965C6.471 31.9738 6.1987 31.8906 5.95099 31.7469C5.70374 31.6037 5.51554 31.3904 5.3864 31.1071C5.25726 30.8238 5.2545 30.5212 5.37813 30.1993L8.56507 19.8375L0.637358 14.1765C0.333578 13.9873 0.139177 13.7459 0.0541552 13.4521C-0.030407 13.1584 -0.0161605 12.8663 0.0968955 12.5757C0.209952 12.2856 0.381373 12.0521 0.611162 11.8752C0.84095 11.6988 1.11854 11.6106 1.44392 11.6106H11.397L14.6529 1.03331C14.7765 0.711835 14.9559 0.459248 15.1912 0.275548C15.4261 0.0918484 15.6956 0 15.9999 0C16.3041 0 16.5737 0.0918484 16.8085 0.275548C17.0438 0.459248 17.2233 0.711835 17.3469 1.03331L20.6028 11.6106H30.5558C30.8812 11.6106 31.1588 11.6988 31.3886 11.8752C31.6184 12.0521 31.7898 12.2856 31.9029 12.5757C32.0159 12.8663 32.0302 13.1584 31.9456 13.4521C31.8606 13.7459 31.6662 13.9873 31.3624 14.1765L23.4347 19.8375L26.6216 30.1993C26.7453 30.5212 26.7425 30.8238 26.6134 31.1071C26.4842 31.3904 26.296 31.6037 26.0488 31.7469C25.8011 31.8906 25.5288 31.9738 25.2319 31.9965C24.935 32.0192 24.6399 31.9308 24.3467 31.7312L15.9999 25.4406Z"
            fill="#FEEEB4"
            clipPath="url(#right-7.039999999999992)"
          ></path>
        </svg>
      </div>

      <div className="flex items-center mt-2 text-sm lg:text-base">
        <span className="font-bold">{defaultTextInfo.score}</span>
        <span className="ml-1">{defaultTextInfo.unit}</span>
      </div>

      <p className=" text-base lg:text-xl text-balance text-center text-v2311-primary">
        {defaultTextInfo.title}
      </p>
    </div>
  )
}
