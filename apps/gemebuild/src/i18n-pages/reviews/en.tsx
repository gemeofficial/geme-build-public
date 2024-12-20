import { ILinkComponent } from '../../contexts/link-context'
import Section, { ISectionProps } from './components/Section'

// 配置文件 En
const sectionDatas: ISectionProps = {
  datas: [
    {
      title: 'The Good',
      description:
        'Direct feedback from our customers in our daily customer support emails. We treat customer support seriously and such warm words keep us moving forward!',
      pictures: [
        {
          src: '/assets/images/reviews-picture/next-16-heather-white-masked.png',
          alt: 'GEME Composter Reviews Pictures next-16-heather.png',
          desc: 'Less waste, more fruits!',
        },
        {
          src: '/assets/images/reviews-picture/1-robert.png',
          alt: 'GEME Composter Reviews Pictures 1-robert.png',
          desc: 'Robert and his family love GEME',
        },
        {
          src: '/assets/images/reviews-picture/2-satoko.png',
          alt: 'GEME Composter Reviews Pictures 2-satoko.png',
          desc: 'Satoko is one of our Kickstarter backers, he like play with new gadget',
        },
        {
          src: '/assets/images/reviews-picture/9-canada.png',
          alt: 'GEME Composter Reviews Pictures 9-canada.png',
          desc: 'Dinner food waste disappear over night',
        },
        {
          src: '/assets/images/reviews-picture/3-michale.png',
          alt: 'GEME Composter Reviews Pictures 3-michale.png',
          desc: 'Customer Michale get a problem, we fix it.',
        },
        {
          src: '/assets/images/reviews-picture/11-louis.png',
          alt: 'GEME Composter Reviews Pictures 11-louis.png',
          desc: '',
        },
        {
          src: '/assets/images/reviews-picture/4-brian-m.png',
          alt: 'GEME Composter Reviews Pictures 4-brian-m.png',
          desc: 'Less waste, more trees!',
        },
        {
          src: '/assets/images/reviews-picture/6-elilyn.png',
          alt: 'GEME Composter Reviews Pictures 6-elilyn.png',
          desc: 'Performs magic for dog poops too!',
        },
        {
          src: '/assets/images/reviews-picture/7-paul.png',
          alt: 'GEME Composter Reviews Pictures 7-paul.png',
          desc: 'Customer wanna to recommend GEME to NASA habitat plan',
        },

        {
          src: '/assets/images/reviews-picture/8-ethel.png',
          alt: 'GEME Composter Reviews Pictures 8-ethel.png',
          desc: 'Change kitchen habits',
        },
        {
          src: '/assets/images/reviews-picture/5-greer.png',
          alt: 'GEME Composter Reviews Pictures 5-greer.png',
          desc: 'Amazing super quickly breakdown speed!',
        },
        {
          src: '/assets/images/reviews-picture/10-justin.png',
          alt: 'GEME Composter Reviews Pictures 10-justin.png',
          desc: 'One GEME beats 2 Reencle',
        },
        {
          src: '/assets/images/reviews-picture/12-willi.png',
          alt: 'GEME Composter Reviews Pictures 12-willi.png',
          desc: 'Order one more!',
        },
        {
          src: '/assets/images/reviews-picture/next-13-james.png',
          alt: 'GEME Composter Reviews Pictures next-13-james.png',
          desc: 'Very fast',
        },
        {
          src: '/assets/images/reviews-picture/next-14-lynn.png',
          alt: 'GEME Composter Reviews Pictures next-14-lynn.png',
          desc: 'Fast',
        },
        {
          src: '/assets/images/reviews-picture/next-15-mark.png',
          alt: 'GEME Composter Reviews Pictures next-15-mark.png',
          desc: 'Outstanding customer service',
        },
      ],
    },
    {
      title: 'The Bad',
      description:
        'Well, bad reviews happen sometimes, there is no excuse, we will keep improving as we always did.',
      pictures: [
        {
          src: '/assets/images/reviews-picture/bad/1-qr-code.png',
          alt: 'GEME Composter Reviews Pictures The Bad, Qr Code',
          desc: 'Failed to scan QR code to website manual page, we fix the issue already',
          link: 'https://www.amazon.com/gp/customer-reviews/R22POL7ROKR7D7/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B0BV31KTCN',
        },
        {
          src: '/assets/images/reviews-picture/bad/3-mold.png',
          alt: 'GEME Composter Reviews Pictures The Bad Mold',
          desc: 'It is not mold, some filter material comes out and make the machine dirty during improperly shipping, so sorry! The machine is still functioning.',
          link: 'https://www.amazon.com/gp/customer-reviews/R2ONLOUE8ECSZ0/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B0BV31KTCN',
        },
        {
          src: '/assets/images/reviews-picture/bad/2-no-power.png',
          alt: 'GEME Composter Reviews Pictures The Bad No power',
          desc: 'WILLIAM is from Egypt, he bought a 110v unit from US and power with 220v electricity, then burn out. We are so sorry for him.',
          link: 'https://www.amazon.com/gp/customer-reviews/R1R5N71HIOVKXF/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B0BV31KTCN',
        },
        {
          src: '/assets/images/reviews-picture/bad/4-wtf.png',
          alt: 'GEME Composter Reviews Pictures The Bad Wtf',
          desc: 'This is not used one, but the Kobold Bad get leak during shipping.',
          link: 'https://www.amazon.com/gp/customer-reviews/R2FSYGB7PM12JV/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B0BV31KTCN',
        },
      ],
    },
    {
      title: 'The Ugly',
      description:
        'Sometimes, people will just attack us for some reason or no reason.',
      pictures: [
        {
          src: '/assets/images/reviews-picture/ugly/1-star-giver.png',
          alt: 'GEME Composter Reviews Pictures Ugly',
          desc: 'Anna Meer, to her shame, was paid to write the review. She left same reviews to 3 different product at the same time.',
          link: 'https://www.amazon.com/gp/customer-reviews/R3LVX9XYFMZNZ3/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B0BV31KTCN',
        },
        {
          src: '/assets/images/reviews-picture/ugly/2-too-expensive.png',
          alt: 'GEME Composter Reviews Pictures Ugly',
          desc: "It's unfair to review a product based on price without trying it.",
          link: 'https://www.amazon.de/-/en/gp/customer-reviews/R141WZ4N2FODBD/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B0CJY4K9J3',
        },
        {
          src: '/assets/images/reviews-picture/ugly/3-scam.png',
          alt: 'GEME Composter Reviews Pictures Ugly',
          desc: 'Very serious attack from our hater.',
          link: 'https://www.reddit.com/r/composting/comments/yxvc4u/scam_compost_product_advertises_composting_dog/',
        },
      ],
    },
  ],
  buttonText: 'View Detail',
}

export interface IReviewsPageProps {
  PrefetchLink?: ILinkComponent
}

function ReviewsPageEn({ PrefetchLink }: IReviewsPageProps) {
  return <Section {...sectionDatas} PrefetchLink={PrefetchLink} />
}

export { ReviewsPageEn }
