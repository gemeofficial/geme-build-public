import {
  WithSquareImages,
  type IWithSquareImagesProps,
} from '../product-features'

interface IGemeWhatsInBoxProps
  extends Pick<IWithSquareImagesProps, 'title' | 'features'> {}

const gemeWhatsInBoxPropsExample: IGemeWhatsInBoxProps = {
  title: `What's in the box`,
  features: [
    {
      name: '1',
      title: 'GEME-Kobold',
      description: 'The natural microbiota for composting',
      imageSrc: '/assets/images/geme-whats-in-box/w1.png',
      imageAlt: 'GEME-Kobold natural microbiota',
    },
    {
      name: '2',
      title: 'GEME composter',
      description: 'The bio-waste quick-acting machine',
      imageSrc: '/assets/images/geme-whats-in-box/w2.png',
      imageAlt: 'GEME bio-waste quick-acting composter',
    },
    {
      name: '3',
      title: 'Shovel',
      description: 'Used to take out organic fertilizer',
      imageSrc: '/assets/images/geme-whats-in-box/w3.png',
      imageAlt: 'Shovel',
    },
    {
      name: '4',
      title: 'Scraper',
      description: 'Used for cleaning the decomposition tub',
      imageSrc: '/assets/images/geme-whats-in-box/w4.png',
      imageAlt: 'Scraper',
    },
  ],
}

function GemeWhatsInBox(props: IGemeWhatsInBoxProps) {
  return <WithSquareImages {...props} grayBackground={true} />
}

export default GemeWhatsInBox
export { gemeWhatsInBoxPropsExample }
