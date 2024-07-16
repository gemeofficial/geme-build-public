/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react'
import Specs, { type IGemeSpecsProps } from '../../../components/geme-specs'
import WhatsInBox, {
  type IGemeWhatsInBoxProps,
} from '../../../components/geme-whats-in-box'

const gemeSpecsProps: IGemeSpecsProps = {
  title: 'Tech. Spez.',
  specs: [
    {
      id: 1,
      name: 'Volumen',
      description: '19L',
    },
    {
      id: 2,
      name: 'Kapazität',
      description: '5kg/Tag',
    },
    {
      id: 3,
      name: 'Größe',
      description: 'B320*T455*H665mm (18" x 12.6" x 26.2")',
    },
    {
      id: 4,
      name: 'Gewicht',
      description: '19.5kg',
    },
    {
      id: 5,
      name: 'Leistung',
      description: (
        <>
          <p>AC110V-60Hz (Modell G601N-2K für Nordamerika)</p>
          <p>AC220V-50Hz (Modell G601U-2K für Europa)</p>
        </>
      ),
    },
    {
      id: 6,
      name: 'Dezibel',
      description: '≈40db (23db-55db)',
    },
    {
      id: 7,
      name: 'Zertifizierungen',
      description: 'CE/FCC/ISO9001/ISO14001/ISO45001',
    },
    {
      id: 8,
      name: 'Funktion',
      description:
        'Vollautomatische, schnell wirkende Bio-Kompostierung; Sicher und energiesparend; Automatische Geruchsbeseitigung; Automatische Entfeuchtung',
    },
  ],
}

const gemeWhatsInBoxProps: IGemeWhatsInBoxProps = {
  title: `Lieferumfang`,
  features: [
    {
      name: '1',
      title: 'GEME-Komposter',
      description: 'Die schnell wirkende Bioabfallmaschine',
      imageSrc: '/assets/images/geme-whats-in-box/q2.png',
      imageAlt: 'GEME Bioabfall-Schnellkomposter',
    },
    {
      name: '2',
      title: 'GEME-Kobold',
      description: 'Die natürliche Mikrobiota für die Kompostierung',
      imageSrc: '/assets/images/geme-whats-in-box/q1.png',
      imageAlt: 'GEME-Kobold natürliche Mikrobiota',
    },
    {
      name: '3',
      title: 'Schaufel',
      description: 'Zum Herausnehmen des organischen Düngers',
      imageSrc: '/assets/images/geme-whats-in-box/q3.png',
      imageAlt: 'Schaufel',
    },
    {
      name: '4',
      title: 'Schaber',
      description: 'Zur Reinigung des Zersetzungskessels',
      imageSrc: '/assets/images/geme-whats-in-box/q4.png',
      imageAlt: 'Schaber',
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
