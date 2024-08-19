import Section, { ISectionProps } from './components/Section'
import { IReviewsPageProps } from './en'

// 配置文件 En
const sectionDatas: ISectionProps = {
  datas: [
    {
      title: 'The Good',
      pictures: [
        {
          src: '/assets/images/reviews-picture/next-16-heather-white-masked.png',
          alt: 'GEME Composter Reviews Pictures next-16-heather.png',
          desc: '',
        },
        {
          src: '/assets/images/reviews-picture/1-robert.png',
          alt: 'GEME Composter Reviews Pictures 1-robert.png',
          desc: 'This user liked our product so much that he bought a few for his friends for Christmas.',
          link: '/gk',
        },
        {
          src: '/assets/images/reviews-picture/2-satoko.png',
          alt: 'GEME Composter Reviews Pictures 2-satoko.png',
          desc: '',
        },
        {
          src: '/assets/images/reviews-picture/3-michale.png',
          alt: 'GEME Composter Reviews Pictures 3-michale.png',
          desc: '',
        },
        {
          src: '/assets/images/reviews-picture/4-brian-m.png',
          alt: 'GEME Composter Reviews Pictures 4-brian-m.png',
          desc: '',
        },
        {
          src: '/assets/images/reviews-picture/4-brianmadden.png',
          alt: 'GEME Composter Reviews Pictures 4-brianmadden.png',
          desc: '',
        },
        {
          src: '/assets/images/reviews-picture/5-greer.png',
          alt: 'GEME Composter Reviews Pictures 5-greer.png',
          desc: '',
        },
        {
          src: '/assets/images/reviews-picture/6-elilyn.png',
          alt: 'GEME Composter Reviews Pictures 6-elilyn.png',
          desc: '',
        },
        {
          src: '/assets/images/reviews-picture/7-paul.png',
          alt: 'GEME Composter Reviews Pictures 7-paul.png',
          desc: '',
        },
        {
          src: '/assets/images/reviews-picture/8-ethel.png',
          alt: 'GEME Composter Reviews Pictures 8-ethel.png',
          desc: '',
        },
        {
          src: '/assets/images/reviews-picture/9-canada.png',
          alt: 'GEME Composter Reviews Pictures 9-canada.png',
          desc: '',
        },
        {
          src: '/assets/images/reviews-picture/10-justin.png',
          alt: 'GEME Composter Reviews Pictures 10-justin.png',
          desc: '',
        },
        {
          src: '/assets/images/reviews-picture/11-louis.png',
          alt: 'GEME Composter Reviews Pictures 11-louis.png',
          desc: '',
        },
        {
          src: '/assets/images/reviews-picture/12-willi.png',
          alt: 'GEME Composter Reviews Pictures 12-willi.png',
          desc: '',
        },
        {
          src: '/assets/images/reviews-picture/next-13-james.png',
          alt: 'GEME Composter Reviews Pictures next-13-james.png',
          desc: '',
        },
        {
          src: '/assets/images/reviews-picture/next-14-lynn.png',
          alt: 'GEME Composter Reviews Pictures next-14-lynn.png',
          desc: '',
        },
        {
          src: '/assets/images/reviews-picture/next-15-mark.png',
          alt: 'GEME Composter Reviews Pictures next-15-mark.png',
          desc: '',
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
      pictures: [],
    },
  ],
  buttonText: 'View Detail',
}

function ReviewsPageFr({ PrefetchLink }: IReviewsPageProps) {
  return <Section {...sectionDatas} PrefetchLink={PrefetchLink} />
}

export { ReviewsPageFr }
