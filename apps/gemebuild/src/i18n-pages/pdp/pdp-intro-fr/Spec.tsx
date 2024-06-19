/* eslint-disable react/no-unescaped-entities */
import Specs, { type IGemeSpecsProps } from '../../../components/geme-specs'
import WhatsInBox, {
  type IGemeWhatsInBoxProps,
} from '../../../components/geme-whats-in-box'

const gemeSpecsProps: IGemeSpecsProps = {
  title: 'Spécification technique',
  specs: [
    {
      id: 1,
      name: 'Taille',
      description: 'L320*P455*H665mm (18" x 12,6" x 26,2")',
    },
    {
      id: 2,
      name: 'Poids',
      description: '19.5kg',
    },
    {
      id: 3,
      name: 'Pouvoir',
      description: (
        <>
          <p>CA 110 V - 60 Hz (Modèle G601N-2K pour l'Amérique du Nord</p>
          <p>CA 220 V - 50 Hz (Modèle G601U-2K pour l'Europe</p>
        </>
      ),
    },
    {
      id: 4,
      name: 'Décibel',
      description: '≈40db (23db-55db)',
    },
    {
      id: 5,
      name: 'Capacité',
      description: '5kg/jour',
    },
    {
      id: 6,
      name: 'Certifications',
      description: 'CE/FCC/ISO9001/ISO14001/ISO45001',
    },
    {
      id: 7,
      name: 'Fonction',
      description:
        'Biocompostage entièrement automatique à action rapide ; Sûr et économe en énergie ; Désodorisation automatique ; Déshumidification automatique',
    },
  ],
}

const gemeWhatsInBoxProps: IGemeWhatsInBoxProps = {
  title: `Qu'y a-t-il dans la boite`,
  features: [
    {
      name: '1',
      title: 'GEME-Kobold',
      description: 'Le microbiote naturel pour le compostage',
      imageSrc: '/assets/images/geme-whats-in-box/w1.png',
      imageAlt: 'GEME-Kobold microbiote naturel',
    },
    {
      name: '2',
      title: 'GEME composter',
      description: 'La machine à action rapide pour les biodéchets',
      imageSrc: '/assets/images/geme-whats-in-box/w2.png',
      imageAlt: 'Composteur rapide de biodéchets GEME',
    },
    {
      name: '3',
      title: 'Pelle',
      description: `Utilisé pour retirer l'engrais organique`,
      imageSrc: '/assets/images/geme-whats-in-box/w3.png',
      imageAlt: 'Pelle',
    },
    {
      name: '4',
      title: 'Grattoir',
      description: 'Utilisé pour nettoyer la cuve de décomposition',
      imageSrc: '/assets/images/geme-whats-in-box/w4.png',
      imageAlt: 'Grattoir',
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
