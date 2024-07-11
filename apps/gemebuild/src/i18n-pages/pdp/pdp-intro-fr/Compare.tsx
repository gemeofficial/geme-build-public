import { ICompareSectionProps } from 'ui'
import CompareSection from 'ui/src/compare-section/CompareSection'

const compareSectionProps: ICompareSectionProps = {
  title: 'Comparons',
  description: 'Découvrez ce qui rend GEME différent.',
  compareList: [
    {
      imgUrl: '/assets/images/compare-section/compare-section-geme.png',
      devicename: 'GEME',
      compareItems: [
        {
          title: 'Véritable compost',
          desc: 'Des microbes hautement actifs accélèrent le processus de compostage',
        },
        {
          title: 'Pas besoin de changer le filtre',
          desc: 'Aucun coût, filtre de qualité industrielle, pas de matériau carbone',
        },
        {
          title: 'Volume super grand de 19L',
          desc: 'Prend des mois pour se remplir',
        },
        {
          title: "Aussi pour les excréments d'animaux et la soupe",
          desc: 'Prend en charge les déchets bio, y compris litière pour chats et liquides',
        },
        {
          title: 'Pas besoin de nettoyer',
          desc: 'Réduire simplement quand il est plein, pas besoin de vider et de nettoyer',
        },
        {
          title: "Pas d'abonnement",
          desc: "Le prix est élevé, mais aucun coût d'abonnement caché, essai gratuit, retour gratuit",
        },
        {
          title: 'Compostage continu',
          desc: "Ajouter à tout moment, pas besoin d'attendre la fin du cycle",
        },
      ],
    },
    {
      imgUrl: '/assets/images/compare-section/compare-section-lomi.png',
      devicename: 'Marque 1', // Lomi
      compareItems: [
        {
          title: 'Pas de véritable compost',
          desc: 'Déshydrater et cuire, toujours des déchets secs',
        },
        {
          title: 'Changer régulièrement le filtre carbone',
          desc: "Jusqu'à 240 $/an pour le remplacement des filtres",
        },
        {
          title: 'Volume de 3L',
          desc: 'Capacité limitée pour les déchets alimentaires',
        },
        {
          title: 'Déchets alimentaires limités',
          desc: 'Ne peut pas gérer la viande et la soupe',
        },
        {
          title: 'Vider quotidiennement',
          desc: 'Nettoyer après chaque utilisation',
        },
        {
          title: 'Abonnement requis',
          desc: "Coût caché élevé de l'abonnement",
        },
        {
          title: 'Démarrage manuel basé sur le cycle',
          desc: 'Dévisser le couvercle, appuyer sur le bouton pour démarrer, attendre la fin du cycle',
        },
      ],
    },
    {
      imgUrl: '/assets/images/compare-section/compare-section-mill.png',
      devicename: 'Marque 2', // Mill
      compareItems: [
        {
          title: 'Pas de véritable compost',
          desc: 'Déshydrater et broyer, toujours des déchets secs',
        },
        {
          title: 'Filtre à odeurs carbone',
          desc: '60 $+ pour chaque remplacement de filtre',
        },
        {
          title: 'Volume de 6,5L',
          desc: 'Haut et grand, mais capacité limitée',
        },
        {
          title: 'Déchets alimentaires limités',
          desc: 'Ne peut pas gérer la viande et la soupe',
        },
        {
          title: 'Vider chaque semaine',
          desc: 'Fonctionne et se vide quand il est plein',
        },
        {
          title: 'Abonnement requis',
          desc: 'Abonnement par défaut, difficultés à annuler et à retourner, pas de remboursement possible',
        },
        {
          title: 'Hachage continu',
          desc: 'Redémarrage automatique lorsque vous ajoutez des déchets, continue de hacher',
        },
      ],
    },
    {
      imgUrl: '/assets/images/compare-section/compare-section-reencle.png',
      devicename: 'Marque 3', // Reencle
      compareItems: [
        {
          title: 'Véritable compost',
          desc: 'Microbes impliqués, faible entretien',
        },
        {
          title: 'Changer régulièrement le filtre carbone',
          desc: 'Coût de 35 $+ pour chaque remplacement de filtre',
        },
        {
          title: 'Volume de 6L',
          desc: '14L espace extérieur, 6L volume intérieur',
        },
        {
          title: 'Seulement les déchets alimentaires',
          desc: "Ne peut pas gérer les excréments d'animaux",
        },
        {
          title: 'Nettoyage à la demande',
          desc: 'Vider, nettoyer et réinitialiser le composteur lorsque plein',
        },
        {
          title: 'Abonnement offert',
          desc: 'Semble abordable, mais des difficultés pour annuler ou obtenir un remboursement',
        },
        {
          title: 'Compostage continu',
          desc: "Ajouter à tout moment, pas besoin d'attendre la fin du cycle",
        },
      ],
    },
  ],
  buttonText: 'Acheter maintenant',
}

export default function Compare() {
  return <CompareSection locale="fr" {...compareSectionProps} />
}
