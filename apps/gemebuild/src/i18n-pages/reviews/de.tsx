import Section, { ISectionProps } from './components/Section'
import { IReviewsPageProps } from './en'

// 配置文件 De
const sectionDatas: ISectionProps = {
  datas: [
    {
      title: 'The Good',
      description:
        'Direktes Feedback von unseren Kunden in unseren täglichen Kunden-Support-E-Mails. Wir behandeln den Kunden-Support ernsthaft und solche warmen Worte treiben uns voran!',
      pictures: [
        {
          src: '/assets/images/reviews-picture/next-16-heather-white-masked.png',
          alt: 'GEME Komposter Bewertungen Bilder next-16-heather.png',
          desc: 'Weniger Abfall, mehr Früchte!',
        },
        {
          src: '/assets/images/reviews-picture/1-robert.png',
          alt: 'GEME Komposter Bewertungen Bilder 1-robert.png',
          desc: 'Robert und seine Familie lieben GEME',
        },
        {
          src: '/assets/images/reviews-picture/2-satoko.png',
          alt: 'GEME Komposter Bewertungen Bilder 2-satoko.png',
          desc: 'Satoko ist einer unserer Kickstarter-Unterstützer, er spielt gerne mit neuen Gadgets',
        },
        {
          src: '/assets/images/reviews-picture/9-canada.png',
          alt: 'GEME Komposter Bewertungen Bilder 9-canada.png',
          desc: 'Essensabfälle verschwinden über Nacht',
        },
        {
          src: '/assets/images/reviews-picture/3-michale.png',
          alt: 'GEME Komposter Bewertungen Bilder 3-michale.png',
          desc: 'Kunde Michale hatte ein Problem, wir haben es behoben.',
        },
        {
          src: '/assets/images/reviews-picture/11-louis.png',
          alt: 'GEME Komposter Bewertungen Bilder 11-louis.png',
          desc: '',
        },
        {
          src: '/assets/images/reviews-picture/4-brian-m.png',
          alt: 'GEME Komposter Bewertungen Bilder 4-brian-m.png',
          desc: 'Weniger Abfall, mehr Bäume!',
        },
        {
          src: '/assets/images/reviews-picture/6-elilyn.png',
          alt: 'GEME Komposter Bewertungen Bilder 6-elilyn.png',
          desc: 'Zaubert auch bei Hundekot!',
        },
        {
          src: '/assets/images/reviews-picture/7-paul.png',
          alt: 'GEME Komposter Bewertungen Bilder 7-paul.png',
          desc: 'Kunde möchte GEME für das NASA-Habitat-Programm empfehlen',
        },

        {
          src: '/assets/images/reviews-picture/8-ethel.png',
          alt: 'GEME Komposter Bewertungen Bilder 8-ethel.png',
          desc: 'Ändern Sie die Küchengewohnheiten',
        },
        {
          src: '/assets/images/reviews-picture/5-greer.png',
          alt: 'GEME Komposter Bewertungen Bilder 5-greer.png',
          desc: 'Erstaunlich schnelle Abbaurate!',
        },
        {
          src: '/assets/images/reviews-picture/10-justin.png',
          alt: 'GEME Komposter Bewertungen Bilder 10-justin.png',
          desc: 'Ein GEME schlägt 2 Reencle',
        },
        {
          src: '/assets/images/reviews-picture/12-willi.png',
          alt: 'GEME Komposter Bewertungen Bilder 12-willi.png',
          desc: 'Bestellen Sie noch eins!',
        },
        {
          src: '/assets/images/reviews-picture/next-13-james.png',
          alt: 'GEME Komposter Bewertungen Bilder next-13-james.png',
          desc: 'Sehr schnell',
        },
        {
          src: '/assets/images/reviews-picture/next-14-lynn.png',
          alt: 'GEME Komposter Bewertungen Bilder next-14-lynn.png',
          desc: 'Schnell',
        },
        {
          src: '/assets/images/reviews-picture/next-15-mark.png',
          alt: 'GEME Komposter Bewertungen Bilder next-15-mark.png',
          desc: 'Hervorragender Kundenservice',
        },
      ],
    },
    {
      title: 'The Bad',
      description:
        'Nun, schlechte Bewertungen passieren manchmal, es gibt keine Entschuldigung, wir werden uns wie immer weiter verbessern.',
      pictures: [
        {
          src: '/assets/images/reviews-picture/bad/1-qr-code.png',
          alt: 'GEME Komposter Bewertungen Bilder Das Schlechte, QR-Code',
          desc: 'Konnte den QR-Code auf der Website-Handbuchseite nicht scannen, wir haben das Problem bereits behoben',
          link: 'https://www.amazon.com/gp/customer-reviews/R22POL7ROKR7D7/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B0BV31KTCN',
        },
        {
          src: '/assets/images/reviews-picture/bad/3-mold.png',
          alt: 'GEME Komposter Bewertungen Bilder Das Schlechte, Schimmel',
          desc: 'Es ist kein Schimmel, etwas Filtermaterial kam heraus und verschmutzte die Maschine während des unsachgemäßen Versands, tut mir leid! Die Maschine funktioniert noch.',
          link: 'https://www.amazon.com/gp/customer-reviews/R2ONLOUE8ECSZ0/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B0BV31KTCN',
        },
        {
          src: '/assets/images/reviews-picture/bad/2-no-power.png',
          alt: 'GEME Komposter Bewertungen Bilder Das Schlechte, Kein Strom',
          desc: 'WILLIAM kommt aus Ägypten, er hat eine 110V-Einheit aus den USA gekauft und sie mit 220V-Strom betrieben, dann ist sie durchgebrannt. Es tut uns sehr leid für ihn.',
          link: 'https://www.amazon.com/gp/customer-reviews/R1R5N71HIOVKXF/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B0BV31KTCN',
        },
        {
          src: '/assets/images/reviews-picture/bad/4-wtf.png',
          alt: 'GEME Komposter Bewertungen Bilder Das Schlechte, WTF',
          desc: 'Dies ist kein gebrauchtes Gerät, aber der Kobold-Beutel hat beim Versand ein Leck bekommen.',
          link: 'https://www.amazon.com/gp/customer-reviews/R2FSYGB7PM12JV/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B0BV31KTCN',
        },
      ],
    },
    {
      title: 'The Ugly',
      description:
        'Manchmal werden Menschen uns aus irgendeinem Grund oder ohne Grund angreifen.',
      pictures: [
        {
          src: '/assets/images/reviews-picture/ugly/1-star-giver.png',
          alt: 'GEME Komposter Bewertungen Bilder Hässlich',
          desc: 'Anna Meer hat offensichtlich für Geld bewertet, Schande!',
          link: 'https://www.amazon.com/gp/customer-reviews/R3LVX9XYFMZNZ3/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B0BV31KTCN',
        },
        {
          src: '/assets/images/reviews-picture/ugly/2-too-expensive.png',
          alt: 'GEME Komposter Bewertungen Bilder Hässlich',
          desc: 'Bewertung des Preises ohne es überhaupt zu benutzen, das ist nicht fair!',
          link: 'https://www.amazon.de/-/en/gp/customer-reviews/R141WZ4N2FODBD/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B0CJY4K9J3',
        },
        {
          src: '/assets/images/reviews-picture/ugly/3-scam.png',
          alt: 'GEME Komposter Bewertungen Bilder Hässlich',
          desc: 'Sehr ernster Angriff von einem unserer Hasser.',
          link: 'https://www.reddit.com/r/composting/comments/yxvc4u/scam_compost_product_advertises_composting_dog/',
        },
      ],
    },
  ],
  buttonText: 'Details ansehen',
}

function ReviewsPageDe({ PrefetchLink }: IReviewsPageProps) {
  return <Section {...sectionDatas} PrefetchLink={PrefetchLink} />
}

export { ReviewsPageDe }
