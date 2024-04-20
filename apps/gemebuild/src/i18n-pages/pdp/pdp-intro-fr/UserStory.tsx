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
        src: 'https://img1.wsimg.com/isteam/ip/b6c98e26-b6a8-472d-adb1-ebf59337e750/Copy%20of%20thankyouCard_Jump.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:743',
        alt: 'Alex Egertson',
      },
      bio: (
        <>
          Alex travaille dans les retraites, camps et conférences luthériens,
          alias{' '}
          <a className="text-emerald-600" href="https://lrcchome.com/">
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
          <a className="text-emerald-600" href="https://www.rainforestinn.com/">
            Auberge de la forêt tropicale
          </a>{' '}
          situé à Porto Rico. Il veut vraiment GEME et a même payé plusieurs
          fois et des frais d'expédition supplémentaires, il veut juste utiliser
          le composteur GEME. Vérifions son{' '}
          <a
            className="text-emerald-600"
            href="https://www.tiktok.com/@rainforestinn/video/7309861665711901998"
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
          Angelita vit au Mexique 🇲🇽, elle nous a contacté en avril et a acheté
          une unité. À cette époque, nous ne pouvions pas expédier des
          États-Unis au Mexique. Cependant, son Angelita dirige une entreprise
          de camions. Elle expédie facilement notre unité du Texas au Mexique.
          Après des mois d'utilisation quotidienne, elle décide d'en acheter 3
          de plus pour le cadeau de Noël de sa fille. BTW, elle est également
          une aide héroïque pour l'un de nos Kickstarter à résoudre notre
          accomplissement au Mexique.
        </>
      ),
      quote: `Je suis allé sur Internet, j'ai cherché davantage et j'ai découvert le vôtre et la publicité dit que c'est un biocomposteur et j'ai vu des vidéos et enfin j'ai trouvé le vôtre, je l'ai adoré. Je veux acheter mes composteurs ! Je suis prêt pour 2 autres maintenant. Peut-être les trois.`,
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
          M. Vasil est originaire de Bulgarie🇧🇬 et est également un héros du
          zéro déchet. Il aime beaucoup l'unité. Non seulement cela résout le
          gaspillage alimentaire quotidien, mais cela peut également réduire
          l'empreinte carbone. Vasil a commencé à suivre GEME depuis la phase de
          financement participatif jusqu'en juillet 2022, il a réussi à
          effectuer l'installation de paiement de 499 € pour soutenir GEME.
          Avant cette réalisation, il a beaucoup fait pour aider à promouvoir le
          produit et l'idée de GEME auprès de ses cercles. Il est très
          enthousiaste à l'idée de rendre notre terre meilleure ensemble.
        </>
      ),
      quote: `J'ai toujours voulu m'impliquer de plus en plus dans tout ce qui m'entoure pour une vie meilleure et durable et c'est pourquoi je voulais vraiment obtenir autant de GEME. Il combine tout ce dont vous avez besoin pour une vie plus facile et sans stress. Je le recommande totalement à tout mon entourage !`,
    },
  ],
}

function UserStory(): JSX.Element {
  return (
    <>
      <PdpUserStoryTeamSections {...pdpUserStoryTeamSectionsProps} />
    </>
  )
}

export default UserStory
