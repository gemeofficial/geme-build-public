import Section, { ISectionProps } from './components/Section'
import { IReviewsPageProps } from './en'

// 配置文件 Fr
const sectionDatas: ISectionProps = {
  datas: [
    {
      title: 'Le Bon',
      description: `Retour direct de nos clients dans nos e-mails de support client quotidiens. Nous prenons le support client au sérieux et ces mots chaleureux nous poussent à aller de l'avant !`,
      pictures: [
        {
          src: '/assets/images/reviews-picture/next-16-heather-white-masked.png',
          alt: "Photos d'avis sur le composteur GEME next-16-heather.png",
          desc: 'Moins de déchets, plus de fruits !',
        },
        {
          src: '/assets/images/reviews-picture/1-robert.png',
          alt: "Photos d'avis sur le composteur GEME 1-robert.png",
          desc: 'Robert et sa famille adorent GEME',
        },
        {
          src: '/assets/images/reviews-picture/2-satoko.png',
          alt: "Photos d'avis sur le composteur GEME 2-satoko.png",
          desc: "Satoko est l'un de nos soutiens sur Kickstarter, il aime jouer avec de nouveaux gadgets",
        },
        {
          src: '/assets/images/reviews-picture/9-canada.png',
          alt: "Photos d'avis sur le composteur GEME 9-canada.png",
          desc: 'Les déchets alimentaires du dîner disparaissent du jour au lendemain',
        },
        {
          src: '/assets/images/reviews-picture/3-michale.png',
          alt: "Photos d'avis sur le composteur GEME 3-michale.png",
          desc: "Le client Michale a eu un problème, nous l'avons résolu.",
        },
        {
          src: '/assets/images/reviews-picture/11-louis.png',
          alt: "Photos d'avis sur le composteur GEME 11-louis.png",
          desc: '',
        },
        {
          src: '/assets/images/reviews-picture/4-brian-m.png',
          alt: "Photos d'avis sur le composteur GEME 4-brian-m.png",
          desc: "Moins de déchets, plus d'arbres !",
        },
        {
          src: '/assets/images/reviews-picture/6-elilyn.png',
          alt: "Photos d'avis sur le composteur GEME 6-elilyn.png",
          desc: 'Fait des merveilles aussi pour les crottes de chien !',
        },
        {
          src: '/assets/images/reviews-picture/7-paul.png',
          alt: "Photos d'avis sur le composteur GEME 7-paul.png",
          desc: "Le client veut recommander GEME pour le plan d'habitat de la NASA",
        },

        {
          src: '/assets/images/reviews-picture/8-ethel.png',
          alt: "Photos d'avis sur le composteur GEME 8-ethel.png",
          desc: 'Changer les habitudes de cuisine',
        },
        {
          src: '/assets/images/reviews-picture/5-greer.png',
          alt: "Photos d'avis sur le composteur GEME 5-greer.png",
          desc: 'Incroyable vitesse de décomposition super rapide !',
        },
        {
          src: '/assets/images/reviews-picture/10-justin.png',
          alt: "Photos d'avis sur le composteur GEME 10-justin.png",
          desc: 'Un GEME bat 2 Reencle',
        },
        {
          src: '/assets/images/reviews-picture/12-willi.png',
          alt: "Photos d'avis sur le composteur GEME 12-willi.png",
          desc: 'Commandez-en un de plus !',
        },
        {
          src: '/assets/images/reviews-picture/next-13-james.png',
          alt: "Photos d'avis sur le composteur GEME next-13-james.png",
          desc: 'Très rapide',
        },
        {
          src: '/assets/images/reviews-picture/next-14-lynn.png',
          alt: "Photos d'avis sur le composteur GEME next-14-lynn.png",
          desc: 'Rapide',
        },
        {
          src: '/assets/images/reviews-picture/next-15-mark.png',
          alt: "Photos d'avis sur le composteur GEME next-15-mark.png",
          desc: 'Service client exceptionnel',
        },
      ],
    },
    {
      title: 'Le Mauvais',
      description:
        "Eh bien, les mauvaises critiques arrivent parfois, il n'y a pas d'excuse, nous continuerons à nous améliorer comme nous l'avons toujours fait.",
      pictures: [
        {
          src: '/assets/images/reviews-picture/bad/1-qr-code.png',
          alt: "Photos d'avis sur le composteur GEME Le Mauvais, QR Code",
          desc: 'Échec du scan du code QR vers la page du manuel du site, nous avons déjà corrigé le problème',
          link: 'https://www.amazon.com/gp/customer-reviews/R22POL7ROKR7D7/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B0BV31KTCN',
        },
        {
          src: '/assets/images/reviews-picture/bad/3-mold.png',
          alt: "Photos d'avis sur le composteur GEME Le Mauvais, Moisissure",
          desc: "Ce n'est pas de la moisissure, un peu de matériau filtrant est sorti et a sali la machine pendant l'expédition incorrecte, désolé ! La machine fonctionne toujours.",
          link: 'https://www.amazon.com/gp/customer-reviews/R2ONLOUE8ECSZ0/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B0BV31KTCN',
        },
        {
          src: '/assets/images/reviews-picture/bad/2-no-power.png',
          alt: "Photos d'avis sur le composteur GEME Le Mauvais, Pas de puissance",
          desc: "WILLIAM vient d'Égypte, il a acheté une unité 110v des États-Unis et l'a alimentée avec de l'électricité 220v, puis elle a grillé. Nous sommes désolés pour lui.",
          link: 'https://www.amazon.com/gp/customer-reviews/R1R5N71HIOVKXF/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B0BV31KTCN',
        },
        {
          src: '/assets/images/reviews-picture/bad/4-wtf.png',
          alt: "Photos d'avis sur le composteur GEME Le Mauvais, WTF",
          desc: "Ce n'est pas un appareil d'occasion, mais le sac Kobold a eu une fuite pendant le transport.",
          link: 'https://www.amazon.com/gp/customer-reviews/R2FSYGB7PM12JV/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B0BV31KTCN',
        },
      ],
    },
    {
      title: 'Le Laid',
      description:
        'Parfois, les gens nous attaquent pour une raison quelconque.',
      pictures: [
        {
          src: '/assets/images/reviews-picture/ugly/1-star-giver.png',
          alt: "Photos d'avis sur le composteur GEME Laid",
          desc: "Anna Meer a manifestement évalué pour de l'argent, honte à elle !",
          link: 'https://www.amazon.com/gp/customer-reviews/R3LVX9XYFMZNZ3/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B0BV31KTCN',
        },
        {
          src: '/assets/images/reviews-picture/ugly/2-too-expensive.png',
          alt: "Photos d'avis sur le composteur GEME Laid",
          desc: "Revue pour le prix sans même l'avoir utilisé, ce n'est pas juste !",
          link: 'https://www.amazon.de/-/en/gp/customer-reviews/R141WZ4N2FODBD/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B0CJY4K9J3',
        },
      ],
    },
  ],
  buttonText: 'Voir les détails',
}

function ReviewsPageFr({ PrefetchLink }: IReviewsPageProps) {
  return <Section {...sectionDatas} PrefetchLink={PrefetchLink} />
}

export { ReviewsPageFr }
