import type { Meta, StoryObj } from '@storybook/react'
import { IUserStoriesVideoProps, UserStoriesVideos } from 'ui'

const meta: Meta = {
  title: 'components/user-stories-videos',
  argTypes: {},
}

export default meta

const data: IUserStoriesVideoProps = {
  title: 'What Customers Say',
  videos: [
    {
      type: 'youtube',
      src: 'https://youtu.be/TwCYDZgoUl0?si=w5mzwn4dQJr6x0vD',
      coverImageUrl:
        'https://a-us.storyblok.com/f/1019164/936x1248/596a0a6251/customer_02.png/m/780x0',
      coverAlt: 'img',
      buttonText: 'Youtube',
    },
    {
      type: 'instagram',
      src: 'https://www.instagram.com/reel/CxBKZOYRKQN/?utm_source=ig_web_copy_link',
      coverImageUrl:
        'https://a-us.storyblok.com/f/1019164/936x1248/6c44fa2f84/customer_03.png/m/780x0',
      coverAlt: 'img',
      buttonText: 'Instagram',
    },
    {
      type: 'tiktok',
      src: 'https://www.tiktok.com/@kc_smithwrites/video/7312898892079697198',
      coverImageUrl:
        'https://a-us.storyblok.com/f/1019164/2048x3071/3564ef7ea9/customer_01.jpeg/m/780x0',
      coverAlt: 'img',
      buttonText: 'Tiktok',
    },
  ],
}

export const StoryActionSection1: StoryObj<typeof UserStoriesVideos> = {
  render: (props) => <UserStoriesVideos {...data} />,
  name: 'UserStoriesVideos',
}
