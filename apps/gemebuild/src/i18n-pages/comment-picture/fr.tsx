import Section, { ISectionProps } from './components/Section'

// 配置文件 En
const sectionDatas: ISectionProps = {
  datas: [
    {
      title: 'The Good',
      pictures: [
        {
          src: '/assets/images/reviews-picture/1-robert.png',
          alt: 'Reviews pictures 1-robert.png',
          desc: 'This user liked our product so much that he bought a few for his friends for Christmas.',
          link: '/gk',
        },
        {
          src: '/assets/images/reviews-picture/2-satoko.png',
          alt: 'Reviews pictures 2-satoko.png',
          desc: '',
        },
        {
          src: '/assets/images/reviews-picture/3-michale.png',
          alt: 'Reviews pictures 3-michale.png',
          desc: '',
        },
        {
          src: '/assets/images/reviews-picture/4-brian-m.png',
          alt: 'Reviews pictures 4-brian-m.png',
          desc: '',
        },
        {
          src: '/assets/images/reviews-picture/4-brianmadden.png',
          alt: 'Reviews pictures 4-brianmadden.png',
          desc: '',
        },
        {
          src: '/assets/images/reviews-picture/5-greer.png',
          alt: 'Reviews pictures 5-greer.png',
          desc: '',
        },
        {
          src: '/assets/images/reviews-picture/6-elilyn.png',
          alt: 'Reviews pictures 6-elilyn.png',
          desc: '',
        },
        {
          src: '/assets/images/reviews-picture/7-paul.png',
          alt: 'Reviews pictures 7-paul.png',
          desc: '',
        },
        {
          src: '/assets/images/reviews-picture/8-ethel.png',
          alt: 'Reviews pictures 8-ethel.png',
          desc: '',
        },
        {
          src: '/assets/images/reviews-picture/9-canada.png',
          alt: 'Reviews pictures 9-canada.png',
          desc: '',
        },
        {
          src: '/assets/images/reviews-picture/10-justin.png',
          alt: 'Reviews pictures 10-justin.png',
          desc: '',
        },
        {
          src: '/assets/images/reviews-picture/11-louis.png',
          alt: 'Reviews pictures 11-louis.png',
          desc: '',
        },
        {
          src: '/assets/images/reviews-picture/12-willi.png',
          alt: 'Reviews pictures 12-willi.png',
          desc: '',
        },
        {
          src: '/assets/images/reviews-picture/next-13-james.png',
          alt: 'Reviews pictures next-13-james.png',
          desc: '',
        },
        {
          src: '/assets/images/reviews-picture/next-14-lynn.png',
          alt: 'Reviews pictures next-14-lynn.png',
          desc: '',
        },
        {
          src: '/assets/images/reviews-picture/next-15-mark.png',
          alt: 'Reviews pictures next-15-mark.png',
          desc: '',
        },
        {
          src: '/assets/images/reviews-picture/next-16-heather.png',
          alt: 'Reviews pictures next-16-heather.png',
          desc: '',
        },
      ],
    },
    {
      title: 'The Bad',
      pictures: [
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
          alt: 'Reviews pictures image.jpg',
          desc: '',
        },
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
          alt: 'Reviews pictures image-1.jpg',
          desc: '',
        },
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
          alt: 'Reviews pictures image-2.jpg',
          desc: '',
        },
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
          alt: 'Reviews pictures image-3.jpg',
          desc: '',
        },
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
          alt: 'Reviews pictures image-4.jpg',
          desc: '',
        },
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
          alt: 'Reviews pictures image-5.jpg',
          desc: '',
        },
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
          alt: 'Reviews pictures image-6.jpg',
          desc: '',
        },
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
          alt: 'Reviews pictures image-7.jpg',
          desc: '',
        },
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
          alt: 'Reviews pictures image-8.jpg',
          desc: '',
        },
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',
          alt: 'Reviews pictures image-9.jpg',
          desc: '',
        },
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',
          alt: 'Reviews pictures image-10.jpg',
          desc: '',
        },
        {
          src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg',
          alt: 'Reviews pictures image-11.jpg',
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

function CommentPicturePageFr() {
  return <Section {...sectionDatas} />
}
export { CommentPicturePageFr }
