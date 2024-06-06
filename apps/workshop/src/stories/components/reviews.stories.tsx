import type { Meta, StoryObj } from '@storybook/react'
import { ReviewsSection, IReviewsItem } from 'ui'

const meta: Meta = {
  title: 'components/reviews-section',
  argTypes: {},
}

export default meta

const exampleReviews: IReviewsItem[] = [
  {
    name: 'Jane Doe',
    content:
      'Great value for the price. Very happy with my purchase. It’s durable, functional, and looks great. The inner bucket is easy to remove and clean, and it’s a breeze to change the trash bags. ',
    bgImageUrl:
      'https://images.unsplash.com/photo-1637215797311-5dee970911e6?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    reviewsImageUrls: [
      'https://geme-bio-git-about-page-geme.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1670272502246-768d249768ca%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D1152%26q%3D80&w=1200&q=75',
      'https://geme-bio-git-about-page-geme.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1612872087720-bb876e2e67d1%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D768%26h%3D604%26q%3D80&w=828&q=75',
    ],
    score: 4,
    avatar: 'https://pagedone.io/asset/uploads/1696230027.png',
    desc: 'Design Lead',
  },
  {
    name: 'Emily Davis',
    reviewsImageUrls: [
      'https://geme-bio-git-about-page-geme.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1605656816944-971cd5c1407f%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D768%26h%3D604%26q%3D80&w=828&q=75',
      'https://geme-bio-git-about-page-geme.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1568992687947-868a62a9f521%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D1152%26h%3D842%26q%3D80&w=1200&q=75',
    ],
    content:
      'The foot pedal is very convenient. Hands-free operation!I highly recommend this trash can to anyone looking for a reliable and stylish option.',
    bgImageUrl:
      'https://images.unsplash.com/photo-1565073182887-6bcefbe225b1?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    score: 5,
    avatar:'https://geme-bio-git-about-page-geme.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1605656816944-971cd5c1407f%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D768%26h%3D604%26q%3D80&w=828&q=75'
  },
  {
    name: 'Michael Johnson',
    reviewsImageUrls: [
      'https://geme-bio-git-about-page-geme.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1559136555-9303baea8ebd%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26crop%3Dfocalpoint%26fp-x%3D.4%26w%3D396%26h%3D528%26q%3D80&w=384&q=75',
      'https://geme-bio-git-about-page-geme.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1557804506-669a67965ba0%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26h%3D528%26q%3D80&w=384&q=75',
    ],
    content:
      'This trash can is amazing! It keeps all the odors inside and the build quality is top-notch. The stainless steel finish looks great in my kitchen and it’s super easy to clean. ',
    bgImageUrl:
      'https://images.unsplash.com/photo-1706820643404-71812d9d7d3a?q=80&w=3929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Michael Johnson',
    reviewsImageUrls: [],
    content: 'Very sturdy and well-built. Highly recommend!',
    bgImageUrl:
      'https://images.unsplash.com/photo-1637215797311-5dee970911e6?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Emily Davis',
    reviewsImageUrls: [],
    content:
      'The sensor works perfectly. Opens every time without fail and closes gently and quietly. It’s also very responsive and opens just as I approach it. The design is very modern and stylish, fitting in perfectly with my kitchen decor.',
    bgImageUrl:
      'https://images.unsplash.com/photo-1565073182887-6bcefbe225b1?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    avatar: 'https://pagedone.io/asset/uploads/1696230027.png',
  },
  {
    name: 'David Brown',
    reviewsImageUrls: [],
    content:
      'Very sturdy and well-built. I was skeptical at first because of the price, but it has exceeded my expectations.',
    bgImageUrl:
      'https://images.unsplash.com/photo-1565073182887-6bcefbe225b1?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    avatar:
      'https://geme-bio-git-about-page-geme.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1612872087720-bb876e2e67d1%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D768%26h%3D604%26q%3D80&w=828&q=75',
  },
  {
    name: 'Sarah Wilson',
    reviewsImageUrls: [],
    content:
      ' The step pedal is very convenient and makes it easy to dispose of garbage without touching the lid.',
    bgImageUrl:
      'https://images.unsplash.com/photo-1637215797311-5dee970911e6?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    avatar: 'https://pagedone.io/asset/uploads/1696230027.png',
  },
  {
    name: 'Jane Doe',
    reviewsImageUrls: [],
    content:
      'Perfect size for my kitchen. Love the sleek design and the fact that it fits perfectly under my counter.Stylish and functional. Matches my decor perfectly.',
    bgImageUrl:
      'https://images.unsplash.com/photo-1565073182887-6bcefbe225b1?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'David Brown',
    reviewsImageUrls: [],
    content:
      'Excellent quality. Much better than my old trash can. The lid closes softly and there’s no more banging noise. The sensor works perfectly and opens every time!',
    bgImageUrl:
      'https://images.unsplash.com/photo-1565073182887-6bcefbe225b1?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Sarah Wilson',
    reviewsImageUrls: [],
    content: 'Great value for the price. Very happy with my purchase.',
    bgImageUrl:
      'https://images.unsplash.com/photo-1637215797311-5dee970911e6?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

export const StoryActionSection1: StoryObj<typeof ReviewsSection> = {
  render: (props) => <ReviewsSection reviewsListConfig={exampleReviews} />,
  name: 'ReviewsSection',
}
