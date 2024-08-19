import { ILinkComponent } from '../../contexts/link-context'
import Section, { ISectionProps } from './components/Section'

// 配置文件 En
const sectionDatas: ISectionProps = {
  datas: [
    {
      title: 'The Good',
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
          src: '/assets/images/reviews-picture/5-greer.png',
          alt: 'GEME Composter Reviews Pictures 5-greer.png',
          desc: 'Amazing super quickly breakdown speed!',
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
          src: '/assets/images/reviews-picture/10-justin.png',
          alt: 'GEME Composter Reviews Pictures 10-justin.png',
          desc: 'One GEME beats 2 Reencle',
        },
        {
          src: '/assets/images/reviews-picture/11-louis.png',
          alt: 'GEME Composter Reviews Pictures 11-louis.png',
          desc: '',
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
      pictures: [
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
          alt: 'GEME Composter Reviews Pictures image.jpg',
          desc: '',
        },
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
          alt: 'GEME Composter Reviews Pictures image-1.jpg',
          desc: '',
        },
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
          alt: 'GEME Composter Reviews Pictures image-2.jpg',
          desc: '',
        },
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
          alt: 'GEME Composter Reviews Pictures image-3.jpg',
          desc: '',
        },
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
          alt: 'GEME Composter Reviews Pictures image-4.jpg',
          desc: '',
        },
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
          alt: 'GEME Composter Reviews Pictures image-5.jpg',
          desc: '',
        },
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
          alt: 'GEME Composter Reviews Pictures image-6.jpg',
          desc: '',
        },
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
          alt: 'GEME Composter Reviews Pictures image-7.jpg',
          desc: '',
        },
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
          alt: 'GEME Composter Reviews Pictures image-8.jpg',
          desc: '',
        },
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',
          alt: 'GEME Composter Reviews Pictures image-9.jpg',
          desc: '',
        },
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',
          alt: 'GEME Composter Reviews Pictures image-10.jpg',
          desc: '',
        },
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg',
          alt: 'GEME Composter Reviews Pictures image-11.jpg',
          desc: '',
        },
      ],
    },
    {
      title: 'The Ugly',
      pictures: [
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
          alt: 'GEME Composter Reviews Pictures image.jpg',
          desc: '',
        },
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
          alt: 'GEME Composter Reviews Pictures image-1.jpg',
          desc: '',
        },
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
          alt: 'GEME Composter Reviews Pictures image-2.jpg',
          desc: '',
        },
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
          alt: 'GEME Composter Reviews Pictures image-3.jpg',
          desc: '',
        },
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
          alt: 'GEME Composter Reviews Pictures image-4.jpg',
          desc: '',
        },
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
          alt: 'GEME Composter Reviews Pictures image-5.jpg',
          desc: '',
        },
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
          alt: 'GEME Composter Reviews Pictures image-6.jpg',
          desc: '',
        },
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
          alt: 'GEME Composter Reviews Pictures image-7.jpg',
          desc: '',
        },
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
          alt: 'GEME Composter Reviews Pictures image-8.jpg',
          desc: '',
        },
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',
          alt: 'GEME Composter Reviews Pictures image-9.jpg',
          desc: '',
        },
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',
          alt: 'GEME Composter Reviews Pictures image-10.jpg',
          desc: '',
        },
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg',
          alt: 'GEME Composter Reviews Pictures image-11.jpg',
          desc: '',
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
