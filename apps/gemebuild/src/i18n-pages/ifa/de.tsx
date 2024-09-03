/* eslint-disable react/no-unescaped-entities */
import {
  ComposterSurvey,
  IComposterSurveyProps,
  IFAHeroSection,
  IIFAHeroSectionProps,
  ISubscribeGemeV2Props,
  IWinnersNamesTickerProps,
  LocationSection,
  SubscribeGemeV2,
} from 'ui'

import { winnersNames } from './winnersNames'
import { VideoList, IVideoList } from 'ui'
import { IIFAPageProps } from './en'

// Hero Section  De
const IFAHeroSectionProps: IIFAHeroSectionProps = {
  bgImageUrl: '/assets/images/ifa/hero-bg.png',
  prizeImage: '/assets/images/ifa/prize.jpg',
  gemeLogo: '/assets/images/ifa/white-logo.png',
  ifaLogo: '/assets/images/ifa/ifa-berlin-seeklogo.png',
  noticeTitle: (
    <>
      <p className="leading-tight">
        Entdecken GEME <br />
        <span className="text-[#ea3c58]">Auf der IFA Berlin 2024</span>
      </p>
      <span className="text-lg md:text-3xl 3xl:text-4xl">
        Teilen Sie uns Ihre GEME-Geschichte,Gewinnen Sie einen GEME Komposter!
      </span>
    </>
  ),
  ifaExhibitionDate: 'GEME auf der IFA Berlin, 6.-10. September 2024',
  prizeDesc: (
    <>
      <span className="text-lg md:text-xl xl:text-3xl">
        2 große Verlosungen sind im Gange! <br />
      </span>
      {/* <span className="text-sm md:text-base 2xl:text-lg">
        Um den Auftritt von GEME auf der IFA Berlin zu markieren.
      </span> */}
    </>
  ),
  activityTitle: 'Aktivität',
  activityDescription: (
    <>
      <strong>Wöchentliche Gewinne: </strong>
      <p>
        Vom 19. August bis 6. September gewinnen Sie jeden Montag, Mittwoch und
        Freitag ein $59.9 Kobold-Nachfüllpack.
      </p>
      <br />
      <strong>Großer Preis: </strong>
      <p>
        Ein glücklicher Gewinner aus allen Teilnehmern wird am 14. September
        einen GEME-Komposter gewinnen.
      </p>
    </>
  ),
  buttonText: 'Reichen Sie Ihr Video ein!',
  countdownTitle: 'Countdown zu der nächsten Auslosung:',
  winningProbabilityTitle:
    'Aktuelle Gewinnwahrscheinlichkeit des Kobold-Nachfüllpacks:',
  prizeImageTitle: 'Belohnungen',
  sampleVideoTitle: 'Video-Einreichungsideen',
  descriptionText: (
    <>
      <ul>
        <li className="list-disc">
          1/N steht für Ihre Gewinnwahrscheinlichkeit bei jeder Ziehung.
        </li>
        <li className="list-disc">
          Wir werden jeden Montag, Mittwoch und Freitag Gewinner ziehen.
        </li>
        <li className="list-disc">
          Die Gewinnwahrscheinlichkeit wird nach jeder Ziehung aktualisiert.
        </li>
      </ul>
    </>
  ),
  locale: 'de',
}

// 视频列表   De
const videoListProps: IVideoList = {
  title: 'Videoliste',
  description:
    'Hier sind einige der von unseren preisgekrönten Nutzern hochgeladenen Videos und wie sie GEME in ihrem täglichen Leben verwenden.',
  linkText: 'mehr laden',
  fromText: 'Aus',
  useTimeText: 'Nutzungsdauer',
  emptyTexy:
    'Die Videoliste wird nach dieser Ziehung angezeigt, bitte haben Sie etwas Geduld.',
  videoList: [
    {
      poster: '/assets/images/ifa/poster-images/poster1.png',
      src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/user-videos/ifa-page-user-video-1.mp4',
      from: 'MN',
      useTime: '9 Monate',
    },
    {
      poster: '/assets/images/ifa/poster-images/poster2.png',
      src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/user-videos/ifa-page-user-video-2.mp4',
      from: 'OH',
      useTime: '10 Monate',
    },
  ],
}

// 中奖名单  De
const winnersNamesTickerProps: IWinnersNamesTickerProps = {
  title: 'Frühere Gewinner',
  linkText: 'mehr anzeigen',
  winnersNames,
}

// 问卷调查 De
const composterSurveyProps: IComposterSurveyProps = {
  title: 'Kompostierer-Umfrage',
  desc: 'Geben Sie uns einige Einblicke in Ihre Ideen zur Abfallbewirtschaftung',
  buttonText: 'Zur Veröffentlichung gehen',
}

// 订阅模块 De
const subscribeGemeV2Props: ISubscribeGemeV2Props = {
  title: 'Entdecken Sie GEME II',
  description: <>Interessiert? Treten Sie der Warteliste bei!</>,
  emailPlaceholder: 'Geben Sie Ihre E-Mail ein',
  submitButtonLabel: 'Benachrichtigen Sie mich',
  productSectionTitle: 'Vorschau',
  imageList: [
    {
      src: '/assets/images/geme-v2-product/geme-v2-1-color.png',
      alt: 'Geme II Produktbild 1',
      title: 'Erschwinglich',
      desc: 'Ordentlich und schlank, aber dennoch leistungsstark',
    },
    {
      src: '/assets/images/geme-v2-product/geme-v2-2.png',
      alt: 'Geme II Produktbild 2',
      title: 'Intelligent',
      desc: 'Das beste Erlebnis für Lebensmittelabfälle, das Sie nie gedacht hätten',
    },
    {
      src: '/assets/images/geme-v2-product/geme-4r.jpeg',
      alt: 'Geme II Produktbild 3',
      title: 'Fürsorge & Liebe',
      desc: 'Nicht nur ein Produkt, sondern eine vernetzte nachhaltige Gemeinschaft',
    },
  ],
}

function IFAPageDe({ PrefetchLink, SubscribeComponent }: IIFAPageProps) {
  return (
    <>
      <IFAHeroSection {...IFAHeroSectionProps} PrefetchLink={PrefetchLink} />

      <LocationSection />

      <div className="bg-[#fcfcfc]">
        <VideoList
          buttonText={IFAHeroSectionProps.buttonText}
          videoListProps={videoListProps}
          winnersNamesTickerProps={winnersNamesTickerProps}
          PrefetchLink={PrefetchLink}
        />
      </div>

      <ComposterSurvey {...composterSurveyProps} PrefetchLink={PrefetchLink} />

      <SubscribeGemeV2
        {...subscribeGemeV2Props}
        SubscribeComponent={SubscribeComponent}
      />
    </>
  )
}

export { IFAPageDe }
