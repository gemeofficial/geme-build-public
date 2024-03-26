import SelfRepairView from './components/SelfRepairView'
import { IFaqOffsetWithSupportingTextProps } from './components/FaqOffsetWithSupportingText'
import { IHeaderCenteredProps } from './components/Hero'

// 页面内容配置文件1  Fr版本
const faqGroups: IFaqOffsetWithSupportingTextProps[] = [
  {
    title: 'Aucune puissance',
    description: `J'ai du mal à allumer mon GEME. Les voyants LED avant ne s'allument pas, même lorsque j'appuie sur le bouton power.`,
    faqs: [
      {
        question: 'La fiche et la prise sont-elles correctement connectées ?',
        answer: 'Veuillez connecter correctement la fiche à la prise.',
      },
      {
        question: "L'alimentation est-elle 110/220V ?",
        answer: 'Veuillez utiliser une tension de 110/220 V.',
      },
      {
        question: 'Aucun des cas ci-dessus ?',
        answer: 'Veuillez contacter le centre de service après-vente.',
      },
    ],
  },
  {
    title: "Son d'avertissement",
    description: `Je rencontre un problème avec mon GEME. Lorsqu'il est en cours d'exécution, il émet un son d'avertissement « bibibi » et l'écran LED affiche un code d'erreur.`,
    faqs: [
      {
        question: "Lorsque le code s'affiche comme suit :",
        answer: (
          <div className="prose text-gray-600 prose-p:my-0 prose-ul:my-0 prose-img:mb-2">
            <img src="/assets/images/self-repair/stirringIndicatorLight.png" />
            <p>Ce code indique que le mélange est anormal.</p>
            <ul>
              <li>
                {`Vérifiez s'il y a un corps étranger dur coincé dans le
                réservoir de décomposition.`}
              </li>
              <li>
                Retirez le corps étranger, fermez le couvercle et vérifiez si le
                le code est toujours affiché.
              </li>
              <li>
                Si le code ci-dessus est toujours affiché, veuillez contacter le service
                centre.
              </li>
            </ul>
          </div>
        ),
      },
      {
        question: "Lorsque le code s'affiche comme suit :",
        answer: (
          <div className="prose text-gray-600 prose-p:my-0 prose-ul:my-0 prose-img:mb-2">
            <img src="/assets/images/self-repair/uvLampIndicatorLight.png" />
            <p>
              {"S'il te plaît "}
              <a href="https://youtu.be/VdAtQfpSQ_E" target="_blank">
              changer la lampe UV.
              </a>
            </p>
          </div>
        ),
      },
    ],
  },
  {
    title: 'Bruit',
    description: `J'ai remarqué que mon GEME fait des bruits inhabituels lorsqu'il fonctionne. Les sons sont nettement différents de ce que j’entendrais habituellement en fonctionnement normal.`,
    faqs: [
      {
        question:
          'Y a-t-il un corps étranger dur coincé dans le réservoir de décomposition ?',
        answer: 'Veuillez retirer les objets durs.',
      },
      {
        question:
          "Le bruit est-il généré périodiquement lorsque le moteur d'agitation fonctionne ?",
        answer: (
          <div className="prose text-gray-600 prose-p:my-0 prose-ul:my-0 prose-img:mb-2">
            {"Ceci est dû au moteur d'agitation. S'il te plaît "}
            <a href="https://youtu.be/rthDSasoOrY" target="_blank">
            régler les pieds
            </a>{` du JEU pour maintenir l'appareil sur une surface plane pour un fonctionnement 
            fluide ou contactez le centre de service après-vente.`}
          </div>
        ),
      },
      {
        question: 'Le bruit vient-il du ventilateur ?',
        answer: `Veuillez vérifier où l'équipement est placé pour vous assurer que la sortie d'air n'est pas bloquée, ou contacter le centre de service après-vente.`,
      },
      {
        question:
          "Le bruit ressemble-t-il à un bruit intermittent de « du » et l'intérieur du réservoir de décomposition est-il trop sec ?",
        answer: `Ajoutez environ 200 à 500 ml d'eau dans le réservoir de décomposition ou vous pouvez y déposer des biodéchets avec plus d'eau.`,
      },
    ],
  },
  {
    title: 'Mauvaise odeur',
    description: `J'ai remarqué que mon GEME dégage une odeur désagréable.`,
    faqs: [
      {
        question:
          "L'odeur se répand-elle, que le couvercle soit fermé ou non ?",
        answer: (
          <div className="prose text-gray-600 prose-p:my-0 prose-ul:my-0 prose-img:mb-2">
            <p>
              {`Veuillez vérifier si le matériau généré dans votre GEME est trop humide.
               La fermentation anaérobie déclenchée par trop d'humidité peut produire
               une odeur.`}
            </p>
            <ul>
              <li>{`Veuillez vérifier si l'alimentation de votre appareil est toujours allumée.`}</li>
              <li>
                Veuillez arrêter de mettre des biodéchets pendant 2-3 jours et appuyer sur le bouton
                bouton de désodorisation et de déshumidification.
              </li>
              <li>
                {`Si l'humidité du sous-produit est trop élevée, veuillez le prendre
                 sortez-le et placez-le dans un endroit aéré pour lui permettre de sécher avant
                 l'activer pour une utilisation à nouveau.`}
              </li>
            </ul>
          </div>
        ),
      },
      {
        question:
          "Il n'y a aucune odeur provenant du sous-produit à l'intérieur de GEME, mais il y a une odeur provenant du gaz évacué de l'unité ?",
        answer: (
          <div className="prose text-gray-600 prose-p:my-0 prose-ul:my-0 prose-img:mb-2">
            <p>{`Il s'agit d'un problème avec l'unité de désodorisation.`}</p>
            <ul>
              <li>Veuillez vérifier si le filtre est bouché et nettoyez-le.</li>
              <li>
                {`Veuillez vérifier si l'orifice d'échappement est bloqué et dégager le
                  obstruction.`}
              </li>
              <li>Sinon, veuillez contacter le centre de service après-vente.</li>
            </ul>
          </div>
        ),
      },
      {
        question: 'GEME a une légère odeur.',
        answer: `Veuillez appuyer sur le bouton de désodorisation.`,
      },
    ],
  },
  {
    title: 'Pas de chaîne',
    description: `L'arbre agitateur de mon GEME ne tourne plus.`,
    faqs: [
      {
        question: 'Y a-t-il trop de sous-produits ?',
        answer: `
        Conservez la même quantité de sous-produits que les microbes d’origine et éliminez le reste à la pelle.
        `,
      },
      {
        question: "L'état interne est-il suffisamment épais ?",
        answer: `Arrêtez de mettre à la poubelle pendant 2 à 5 jours et utilisez-le normalement après séchage.`,
      },
      {
        question:
          'Y a-t-il de longues fibres emmêlées dans l’arbre d’agitation ?',
        answer: `Veuillez retirer les fibres longues de l'arbre de mélange. Veuillez découper autant que possible vos déchets alimentaires avant de les mettre dans le GEME.`,
      },
      {
        question: 'Le moteur ne tourne pas ?',
        answer: `Veuillez consulter le centre de service après-vente.`,
      },
    ],
  },
  {
    title: 'Déchets non décomposés',
    description: `J'ai remarqué que mes déchets ne se décomposent pas du tout après avoir été déposés dans mon GEME, même après 1 à 3 jours d'attente.`,
    faqs: [
      {
        question:
          "Le moteur de l'agitagor est-il anormal et provoque-t-il une agitation insuffisante ?",
        answer: `Panne du moteur d'agitation, veuillez contacter le centre de service après-vente.`,
      },
      {
        question:
          "Avez-vous nourri trop de biodéchets ? (la capacité de traitement quotidienne moyenne est d'environ 5 kg)",
        answer: `Veuillez arrêter de mettre des biodéchets pendant 2 à 5 jours et les réutiliser normalement une fois que l'intérieur du réservoir de décomposition est sec.`,
      },
      {
        question: "Avez-vous mis des écorces de fruits ou d'autres biodéchets riches en fibres ?",
        answer: `Coupez les biodéchets riches en fibres en petits morceaux pour accélérer la décomposition ou se décomposer après un certain temps.`,
      },
      {
        question: `Est-ce que tout va bien, mais la vitesse de décomposition est-elle plus lente qu'avant ?`,
        answer: `Veuillez ajouter de nouveaux micro-organismes ou les remplacer.`,
      },
    ],
  },
  {
    title: 'Humide ou boueux',
    description: `Le sous-produit contenu dans mon GEME est excessivement humide ou boueux.`,
    faqs: [
      {
        question: 'Avez-vous mis trop de biodéchets ?',
        answer: `La capacité de traitement quotidienne moyenne est de 5 kg.
        Veuillez arrêter de mettre des biodéchets pendant 2 à 5 jours et les réutiliser normalement une fois que l'intérieur du réservoir de décomposition est sec.`,
      },
      {
        question: "Vous avez mis des biodéchets qui contiennent trop d'eau ?",
        answer: `Veuillez arrêter de mettre des biodéchets pendant 2 à 5 jours et les réutiliser normalement une fois que l'intérieur du réservoir de décomposition est sec.`,
      },
      {
        question: 'Avez-vous coupé le courant ?',
        answer: `Après avoir utilisé l'alimentation pendant 1 à 3 jours, elle sera utilisée normalement.`,
      },
    ],
  },
  {
    title: `Condensation`,
    description: "Il y a des gouttelettes d'eau sur le couvercle intérieur de mon JEU.",
    faqs: [
      {
        question: 'Avez-vous mis trop de biodéchets ?',
        answer: `Appuyez sur le bouton de déshumidification et arrêtez de jeter des biodéchets pendant 2 à 3 jours.`,
      },
      {
        question: "GEME est-il installé dans un endroit plus frais (pas pendant l'hiver) ?",
        answer: `Veuillez déplacer GEME à l’intérieur.`,
      },
      {
        question: 'Vous avez oublié de retirer le coussinet en mousse sous le produit ?',
        answer: `Après avoir retiré le coussin en mousse, appuyez sur le bouton de fonction déshumidification.`,
      },
      {
        question: `Le filtre d'échappement du réservoir de décomposition est-il bouché.`,
        answer: `Veuillez nettoyer le filtre d'échappement.`,
      },
    ],
  },
  {
    title: 'Insectes',
    description: `J'ai remarqué des insectes à l'intérieur de mon conteneur GEME, ainsi que des déchets alimentaires.`,
    faqs: [
      {
        question: 'Avez-vous coupé le courant ?',
        answer: `Remplacez par de nouveaux micro-organismes.`,
      },
    ],
  },
  {
    title: 'Trop sec',
    description: `J'ai remarqué que l'intérieur du réservoir de décomposition de mon GEME est trop sec, et les déchets ainsi que le GEME-Kobold semblent également secs. `,
    faqs: [
      {
        question: 'La quantité de biodéchets est-elle trop faible ?',
        answer: `Versez environ 200 ml d'eau ou mettez une quantité appropriée de soupe lorsque vous jetez des biodéchets.`,
      },
    ],
  },
]

// 页面内容配置文件2  Fr版本
const heroProps: IHeaderCenteredProps = {
  title: 'Auto-réparation',
  description: `Bienvenue dans le guide d'auto-réparation de GEME ! Découvrez comment résoudre le problème de votre GEME. Notre guide étape par étape fournit des instructions et des visuels faciles à suivre pour vous aider à dépanner et à réparer vos appareils. Ne laissez pas un gadget cassé se perdre, apprenez à le réparer en suivant une simple liste de contrôle.`,
}

function SelfRepairPageFr() {
  const props = { faqGroups, heroProps }
  return (
    <>
      <link rel="canonical" href="https://www.geme.bio/self-repair" />
      <SelfRepairView {...props} />
    </>
  )
}
export { SelfRepairPageFr }
