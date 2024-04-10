/* eslint-disable react/no-unescaped-entities */
import Specs, { type IGemeSpecsProps } from '../../../components/geme-specs'
import WhatsInBox, {
  type IGemeWhatsInBoxProps,
} from '../../../components/geme-whats-in-box'

const gemeSpecsProps: IGemeSpecsProps = {
  title: 'Technische Spezifikation',
  specs: [
    {
      id: 1,
      name: 'Größe',
      description: 'B320*T455*H665mm (18" x 12.6" x 26.2")',
    },
    {
      id: 2,
      name: 'Gewicht',
      description: '19.5kg',
    },
    {
      id: 3,
      name: 'Strom',
      description: 'AC110V-60Hz/220V-50Hz',
    },
    {
      id: 4,
      name: 'Dezibel',
      description: '≈40db (23db-55db)',
    },
    {
      id: 5,
      name: 'Kapazität',
      description: '5kg/Tag',
    },
    {
      id: 6,
      name: 'Zertifizierungen',
      description: 'CE/FCC/ISO9001/ISO14001/ISO45001',
    },
    {
      id: 7,
      name: 'Funktion',
      description:
        'Vollautomatische, schnell wirkende Biokompostierung; Sicher und energiesparend; Automatische Desodorierung; Automatische Entfeuchtung',
    },
  ],
}

const gemeWhatsInBoxProps: IGemeWhatsInBoxProps = {
  title: `Was ist in der Box`,
  features: [
    {
      name: '1',
      title: 'GEME-Kobold',
      description: 'Die natürliche Mikrobiota für die Kompostierung',
      imageSrc: '/assets/images/geme-whats-in-box/w1.png',
      imageAlt: 'GEME-Kobold natürliche Mikrobiota',
    },
    {
      name: '2',
      title: 'GEME composter',
      description: 'Die Bioabfall-Schnellmaschine',
      imageSrc: '/assets/images/geme-whats-in-box/w2.png',
      imageAlt: 'GEME Bioabfall-Schnellkomposter',
    },
    {
      name: '3',
      title: 'Schaufel',
      description: 'Wird zum Ausbringen von organischem Dünger verwendet',
      imageSrc: '/assets/images/geme-whats-in-box/w3.png',
      imageAlt: 'Schaufel',
    },
    {
      name: '4',
      title: 'Schaber',
      description: 'Wird zur Reinigung der Zersetzungswanne verwendet',
      imageSrc: '/assets/images/geme-whats-in-box/w4.png',
      imageAlt: 'Schaber',
    },
  ],
}

function Spec() {
  return (
    <>
      <Specs {...gemeSpecsProps} />
      <WhatsInBox {...gemeWhatsInBoxProps} />
    </>
  )
}

export default Spec
