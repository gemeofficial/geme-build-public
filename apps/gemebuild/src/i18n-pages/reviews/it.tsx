import Section, { ISectionProps } from './components/Section'
import { IReviewsPageProps } from './en'

// 配置文件 It
const sectionDatas: ISectionProps = {
  datas: [
    {
      title: 'Il Bene',
      description:
        'Feedback diretto dai nostri clienti nelle nostre e-mail quotidiane del servizio clienti. Prendiamo il supporto clienti seriamente e tali parole calorose ci danno la spinta per andare avanti!',
      pictures: [
        {
          src: '/assets/images/reviews-picture/next-16-heather-white-masked.png',
          alt: 'GEME Composter Reviews Pictures next-16-heather.png',
          desc: 'Meno rifiuti, più frutti!',
        },
        {
          src: '/assets/images/reviews-picture/1-robert.png',
          alt: 'GEME Composter Reviews Pictures 1-robert.png',
          desc: 'Robert e la sua famiglia adorano GEME',
        },
        {
          src: '/assets/images/reviews-picture/2-satoko.png',
          alt: 'GEME Composter Reviews Pictures 2-satoko.png',
          desc: 'Satoko è uno dei nostri sostenitori su Kickstarter, gli piace giocare con nuovi gadget',
        },
        {
          src: '/assets/images/reviews-picture/9-canada.png',
          alt: 'GEME Composter Reviews Pictures 9-canada.png',
          desc: 'I rifiuti alimentari della cena scompaiono durante la notte',
        },
        {
          src: '/assets/images/reviews-picture/3-michale.png',
          alt: 'GEME Composter Reviews Pictures 3-michale.png',
          desc: 'Il cliente Michale ha avuto un problema, noi lo abbiamo risolto.',
        },
        {
          src: '/assets/images/reviews-picture/11-louis.png',
          alt: 'GEME Composter Reviews Pictures 11-louis.png',
          desc: '',
        },
        {
          src: '/assets/images/reviews-picture/4-brian-m.png',
          alt: 'GEME Composter Reviews Pictures 4-brian-m.png',
          desc: 'Meno rifiuti, più alberi!',
        },
        {
          src: '/assets/images/reviews-picture/6-elilyn.png',
          alt: 'GEME Composter Reviews Pictures 6-elilyn.png',
          desc: 'Fa miracoli anche per le deiezioni canine!',
        },
        {
          src: '/assets/images/reviews-picture/7-paul.png',
          alt: 'GEME Composter Reviews Pictures 7-paul.png',
          desc: 'Il cliente vuole raccomandare GEME al piano habitat della NASA',
        },

        {
          src: '/assets/images/reviews-picture/8-ethel.png',
          alt: 'GEME Composter Reviews Pictures 8-ethel.png',
          desc: 'Cambia le abitudini in cucina',
        },
        {
          src: '/assets/images/reviews-picture/5-greer.png',
          alt: 'GEME Composter Reviews Pictures 5-greer.png',
          desc: 'Velocità di decomposizione incredibilmente rapida!',
        },
        {
          src: '/assets/images/reviews-picture/10-justin.png',
          alt: 'GEME Composter Reviews Pictures 10-justin.png',
          desc: 'Un GEME batte 2 Reencle',
        },
        {
          src: '/assets/images/reviews-picture/12-willi.png',
          alt: 'GEME Composter Reviews Pictures 12-willi.png',
          desc: 'Ne ordina un altro!',
        },
        {
          src: '/assets/images/reviews-picture/next-13-james.png',
          alt: 'GEME Composter Reviews Pictures next-13-james.png',
          desc: 'Molto veloce',
        },
        {
          src: '/assets/images/reviews-picture/next-14-lynn.png',
          alt: 'GEME Composter Reviews Pictures next-14-lynn.png',
          desc: 'Veloce',
        },
        {
          src: '/assets/images/reviews-picture/next-15-mark.png',
          alt: 'GEME Composter Reviews Pictures next-15-mark.png',
          desc: 'Servizio clienti eccezionale',
        },
      ],
    },
    {
      title: 'Il Male',
      description:
        'Beh, le recensioni negative capitano a volte, non ci sono scuse, continueremo a migliorare come abbiamo sempre fatto.',
      pictures: [
        {
          src: '/assets/images/reviews-picture/bad/1-qr-code.png',
          alt: 'GEME Composter Reviews Pictures The Bad, Qr Code',
          desc: 'Non riusciva a scansionare il codice QR per accedere alla pagina del manuale, abbiamo già risolto il problema',
          link: 'https://www.amazon.com/gp/customer-reviews/R22POL7ROKR7D7/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B0BV31KTCN',
        },
        {
          src: '/assets/images/reviews-picture/bad/3-mold.png',
          alt: 'GEME Composter Reviews Pictures The Bad Mold',
          desc: 'Non è muffa, è del materiale del filtro che è fuoriuscito e ha sporcato la macchina durante una spedizione non corretta, ci dispiace! La macchina funziona ancora.',
          link: 'https://www.amazon.com/gp/customer-reviews/R2ONLOUE8ECSZ0/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B0BV31KTCN',
        },
        {
          src: '/assets/images/reviews-picture/bad/2-no-power.png',
          alt: 'GEME Composter Reviews Pictures The Bad No power',
          desc: "WILLIAM viene dall'Egitto, ha acquistato un'unità da 110v dagli Stati Uniti e l'ha alimentata con elettricità a 220v, bruciandola. Siamo davvero dispiaciuti per lui.",
          link: 'https://www.amazon.com/gp/customer-reviews/R1R5N71HIOVKXF/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B0BV31KTCN',
        },
        {
          src: '/assets/images/reviews-picture/bad/4-wtf.png',
          alt: 'GEME Composter Reviews Pictures The Bad Wtf',
          desc: 'Questo non è un prodotto usato, ma il Kobold ha avuto una perdita durante la spedizione.',
          link: 'https://www.amazon.com/gp/customer-reviews/R2FSYGB7PM12JV/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B0BV31KTCN',
        },
      ],
    },
    {
      title: 'Il Brutto',
      description:
        'A volte, le persone ci attaccano per qualche motivo o senza motivo.',
      pictures: [
        {
          src: '/assets/images/reviews-picture/ugly/1-star-giver.png',
          alt: 'GEME Composter Reviews Pictures Ugly',
          desc: 'Anna Meer, con disonore, è stata pagata per scrivere la recensione. Ha lasciato recensioni simili a 3 prodotti diversi contemporaneamente.',
          link: 'https://www.amazon.com/gp/customer-reviews/R3LVX9XYFMZNZ3/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B0BV31KTCN',
        },
        {
          src: '/assets/images/reviews-picture/ugly/2-too-expensive.png',
          alt: 'GEME Composter Reviews Pictures Ugly',
          desc: 'Non è giusto recensire un prodotto basandosi solo sul prezzo senza provarlo.',
          link: 'https://www.amazon.de/-/en/gp/customer-reviews/R141WZ4N2FODBD/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B0CJY4K9J3',
        },
        {
          src: '/assets/images/reviews-picture/ugly/3-scam.png',
          alt: 'GEME Composter Reviews Pictures Ugly',
          desc: 'Un attacco molto serio da parte di un nostro hater.',
          link: 'https://www.reddit.com/r/composting/comments/yxvc4u/scam_compost_product_advertises_composting_dog/',
        },
      ],
    },
  ],
  buttonText: 'Vedi Dettagli',
}

export function ReviewsPageIt({ PrefetchLink }: IReviewsPageProps) {
  return <Section {...sectionDatas} PrefetchLink={PrefetchLink} />
}
