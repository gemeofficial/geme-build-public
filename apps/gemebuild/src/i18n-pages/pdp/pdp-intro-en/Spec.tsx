/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react'
import Specs, { type IGemeSpecsProps } from '../../../components/geme-specs'
import WhatsInBox, {
  type IGemeWhatsInBoxProps,
} from '../../../components/geme-whats-in-box'

const gemeSpecsProps: IGemeSpecsProps = {
  title: 'Tech spec',
  specs: [
    {
      id: 1,
      name: 'Volume',
      description: '19L',
    },
    {
      id: 2,
      name: 'Capacity',
      description: '5kg/day',
    },
    {
      id: 3,
      name: 'Size',
      description: 'W320*D455*H665mm  (18" x 12.6" x 26.2")',
    },
    {
      id: 4,
      name: 'Weight',
      description: '19.5kg',
    },
    {
      id: 5,
      name: 'Power',
      description: (
        <>
          <p>AC110V-60Hz(Model G601N-2K for North America)</p>
          <p>AC220V-50Hz(Model G601U-2K for Europe)</p>
        </>
      ),
    },
    {
      id: 6,
      name: 'Decibel',
      description: '≈40db (23db-55db)',
    },
    {
      id: 7,
      name: 'Certifications',
      description: 'CE/FCC/ISO9001/ISO14001/ISO45001',
    },
    {
      id: 8,
      name: 'Function',
      description:
        'Fully automatic quick-acting bio-composting; Safe and energy-saving; Automatic deodorization; Automatic dehumidification',
    },
  ],
}

const gemeWhatsInBoxProps: IGemeWhatsInBoxProps = {
  title: `What's in the box`,
  features: [
    {
      name: '1',
      title: 'GEME composter',
      description: 'The bio-waste quick-acting machine',
      imageSrc: '/assets/images/geme-whats-in-box/q2.png',
      imageAlt: 'GEME bio-waste quick-acting composter',
    },
    {
      name: '2',
      title: 'GEME-Kobold',
      description: 'The natural microbiota for composting',
      imageSrc: '/assets/images/geme-whats-in-box/q1.png',
      imageAlt: 'GEME-Kobold natural microbiota',
    },
    {
      name: '3',
      title: 'Shovel',
      description: 'Used to take out organic fertilizer',
      imageSrc: '/assets/images/geme-whats-in-box/q3.png',
      imageAlt: 'Shovel',
    },
    {
      name: '4',
      title: 'Scraper',
      description: 'Used for cleaning the decomposition tub',
      imageSrc: '/assets/images/geme-whats-in-box/q4.png',
      imageAlt: 'Scraper',
    },
  ],
}

function Spec({ GemeModelViewer }: { GemeModelViewer?: FC<{}> }) {
  return (
    <>
      <Specs {...gemeSpecsProps} GemeModelViewer={GemeModelViewer} />
      <WhatsInBox {...gemeWhatsInBoxProps} />
    </>
  )
}

export default Spec
