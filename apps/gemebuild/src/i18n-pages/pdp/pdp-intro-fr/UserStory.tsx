/* eslint-disable react/no-unescaped-entities */
import { PdpUserStoryTeamSections } from 'ui'
import type { IPdpUserStoryTeamSectionsProps } from 'ui'

const pdpUserStoryTeamSectionsProps: IPdpUserStoryTeamSectionsProps = {
  title: 'Découvrez les témoignages de clients de GEME',
  description: (
    <>Comment nos clients changent leur vie après avoir utilisé GEME</>
  ),
  people: [
    {
      id: 1,
      name: 'Alex Egertson',
      role: 'Directeur du développement durable',
      image: {
        src: '/assets/images/pdp-v2311/user-stories/user-stories-llc.jpg',
        alt: 'Alex Egertson',
      },
      bio: (
        <>
          Alex travaille dans les retraites, camps et conférences luthériens,
          alias{' '}
          <a
            className="text-emerald-600"
            href="https://lrcchome.com/"
            target="_blank"
          >
            LRCC
          </a>{' '}
          est un camp-école où les enfants apprennent et vivent une vie verte.
          <br />
          Avec GEME, davantage d'enfants peuvent apprendre le compostage en le
          faisant facilement dans leur vie quotidienne.
        </>
      ),
      quote: `Heureux de pouvoir vous aider. Jusqu'à présent, cela semble être un excellent produit.`,
    },
    {
      id: 2,
      name: 'Auberge de la forêt tropicale',
      role: 'Bill, patron',
      image: {
        src: '/assets/images/pdp-v2311/user-stories/user-stories-rainforest.jpg', // 'https://images.squarespace-cdn.com/content/v1/55390e7ee4b0a048151b9185/1549219762523-XL1GYVWNFYNJ44ZJXXMD/RFI-from-treehouse-suite-headerjpg.jpg',
        alt: 'Auberge de la forêt tropicale',
      },
      bio: (
        <>
          Bill est le propriétaire de{' '}
          <a
            className="text-emerald-600"
            href="https://www.rainforestinn.com/"
            target="_blank"
          >
            Auberge de la forêt tropicale
          </a>{' '}
          situé à Porto Rico. Il veut vraiment GEME et a même payé plusieurs
          fois et des frais d'expédition supplémentaires, il veut juste utiliser
          le composteur GEME. Vérifions son{' '}
          <a
            className="text-emerald-600"
            href="https://www.tiktok.com/@rainforestinn/video/7309861665711901998"
            target="_blank"
          >
            blog vidéo
          </a>{' '}
          pour voir comment ça se passe.
        </>
      ),
      quote:
        'Vous recherchez un composteur propre et facile à installer dans la cuisine car nos grands bacs à compost sont trop éloignés. Cela fonctionne très efficacement. Calme et propre.',
    },
    {
      id: 3,
      name: `L'E. Ángeles Delgado`,
      role: 'Directeur financier',
      image: {
        src: '/assets/images/pdp-v2311/user-stories/user-stories-angelita.jpeg',
        alt: 'Léonard Krasner',
      },
      bio: (
        <>
          La cliente mexicaine Angelita (contactée en avril) a acheté une unité
          malgré les obstacles initiaux de livraison US-Mexique. Son entreprise
          de transport a facilité le ramassage au Texas. Enchantée par le
          produit, elle en a acheté 3 autres pour Noël de ses filles ! Angelita
          est même devenue une héroïne en nous aidant à résoudre un problème de
          livraison pour une autre campagne Kickstarter au Mexique.
        </>
      ),
      quote: `Je suis allé sur Internet, j'ai cherché davantage et j'ai découvert le vôtre et la publicité dit que c'est un biocomposteur et j'ai vu des vidéos et enfin j'ai trouvé le vôtre, je l'ai adoré. Je veux acheter mes composteurs ! Je suis prêt pour 2 autres maintenant. Peut-être les trois.`,
      mobileQuote:
        'Je veux acheter mes composteurs! Je suis prêt pour 2 de plus maintenant. Peut-être trois.',
    },
    {
      id: 4,
      name: 'Vasil Boroukov',
      role: 'Ingénieur support informatique senior',
      image: {
        src: '/assets/images/pdp-v2311/user-stories/user-stories-vasil.png',
        alt: 'Vasil Ingénieur logiciel',
      },
      bio: (
        <>
          L'activiste bulgare zéro déchet Vasil adore GEME pour lutter contre le
          gaspillage alimentaire et réduire l'empreinte carbone. Depuis la
          campagne de financement participatif en juillet 2022, il suit GEME. Il
          a acheté une unité à 499 € en versements et promeut activement GEME
          dans son réseau. Un vrai champion de la durabilité !
        </>
      ),
      quote: `J'ai toujours voulu m'impliquer de plus en plus dans tout ce qui m'entoure pour une vie meilleure et durable et c'est pourquoi je voulais vraiment obtenir autant de GEME. Il combine tout ce dont vous avez besoin pour une vie plus facile et sans stress. Je le recommande totalement à tout mon entourage !`,
      mobileQuote:
        'Il combine tout ce dont vous avez besoin pour une vie plus facile et sans stress.',
    },
  ],
  locale:'fr'
}

function UserStory(): JSX.Element {
  return (
    <>
      <PdpUserStoryTeamSections {...pdpUserStoryTeamSectionsProps} />
    </>
  )
}

export default UserStory
