import { GemeDotsLoyaltyProgram } from './components'
import type { IGemeDotsProps } from './components'
import { SiteHelpTabs } from '../../components/tabs'
import { ETabsId } from '../../components/tabs/type'
import s from './components/index.module.css'
import cn from 'clsx'
import { getWarrantyTabsTextInfo } from '../../helpers/warranty-tabs-text-info'

// Navbar内容 配置文件 Fr版
const tabs = getWarrantyTabsTextInfo('fr', ETabsId.GemeDotsLoyaltyProgram)

// 静态页面的内容 配置文件 Fr版
const gemeDotsProps: IGemeDotsProps = {
  title: 'Programme de fidélité GEME Dots',
  forward: {
    title: 'Déclaration des points GEME',
    description: `
        <p class="mb-10">Bienvenue dans le programme de fidélité GAME Dots.</p>
        <p class="mb-5">Accumulez vos GEME Dots : l'éco-responsabilité finit toujours par payer !</p>
        <ul class="mx-2 my-5 list-inside list-disc">
            <li class="mb-5 ${cn(s.textIndented)}">Découvrez notre programme de fidélité GEME Dots !</li>
            <li class="mb-5 ${cn(s.textIndented)}">Collectez vos GEME Dots à chaque achat et économisez de l'argent.</li>
            <li class="mb-5 ${cn(s.textIndented)}">Bénéficiez d’avantages extraordinaires et soyez récompensé pour votre respect de l’environnement.</li>
            <li class="mb-5 ${cn(s.textIndented)}">Les éco-responsables payent toujours : une fois que vous avez collecté 1 000 points GEME, vous pouvez les échanger immédiatement lors de votre prochain achat ou décider de continuer à les collecter. Vous pouvez échanger jusqu'à 40,000 points GEME par achat, ce qui vous donne droit à un cashback instantané de 40 euros.</li>
        </ul>
        `,
    imgSrc: '/assets/images/geme-dots-loyalty-program/image.png',
  },
  subTitle: `<p class="mb-5">Voici comment fonctionne le programme de fidélité GEME Dots</p>`,
  enrollment: {
    title: 'Admissibilité et inscription',
    questionsAndAnswers: [
      {
        question: 'Comment participer au programme de fidélité GAME Dots ? ',
        answer:
          'Vous pouvez vous inscrire facilement sur <a href="https://www.geme.bio/signup" class="underline">https://www.geme.bio/signup</a>. Vous pouvez utiliser les données de votre compte client si vous êtes déjà client.',
      },
      {
        question:
          'La participation au programme de fidélité GEME Dots est-elle payante ?',
        answer:
          "L'adhésion au programme de fidélité GEME Dots est entièrement gratuite.",
      },
      {
        question:
          'Dois-je être membre du programme de fidélité GAME Dots pour recevoir des offres spéciales ?',
        answer:
          'Non, tous nos clients sont éligibles à nos offres spéciales. Afin de gagner des GEME Dots sur vos achats et de bénéficier de promotions exclusives GEME Dots, vous devez être membre du programme de fidélité GEME Dots.',
      },
      {
        question: 'Comment puis-je gagner des points GEME ? ',
        answer: `
            <p>Pour chaque achat effectué via votre compte client, vous recevrez des GEME Dots. Vous recevrez 10 GEME Dots pour chaque euro d'achat ou 10 "GEME Dots" supplémentaires en récompense pour avoir recommandé à d'autres personnes de s'inscrire ; et 100 "GEME Dots" supplémentaires en guise de récompense pour avoir recommandé à d'autres personnes d'acheter. " en tant que récompense.
            <br /> <br />
            De plus, nous organisons régulièrement des promotions grâce auxquelles vous pouvez gagner encore plus de points GEME ! Vous pouvez en savoir plus sur <a href="https://www.geme.bio" class="underline">https://www.geme.bio</a>.
            </p>`,
      },
      {
        question: 'Quand mes GEME Dots seront-ils disponibles ? ',
        answer: `
            <p>
            Vous pouvez gagner des points GEME sur <a href="https://www.geme.bio" class="underline">https://www.geme.bio</a>
            <br />
            Les GEME Dots gagnés lors de vos achats sur le site Web seront crédités sur votre compte dans les 14 jours ouvrables à compter de la date d'expédition. D’ici là, ces GEME Dots seront considérés comme des « GEME Dots en attente de confirmation ». Si la commande n'est pas annulée ou modifiée (hors recours en garantie), vos GEME Dots ne seront crédités qu'ultérieurement.
            </p>
            `,
      },
      {
        question:
          'Combien de points GEME de fidélité puis-je utiliser par commande ? ',
        answer: `<p>
        La valeur des Game Dots que vous échangez ne peut pas dépasser la valeur de votre commande. De plus, vous pouvez échanger jusqu'à 40 000 GAME Dots par achat, soit une réduction immédiate de 40 €.
            </p>`,
      },
      {
        question:
          'Certains produits de cette gamme sont-ils exclus du programme de fidélité GEME Dots ? ',
        answer:
          "Oui, pour des raisons légales, la réduction ne s'applique pas aux livres.",
      },
      {
        question: 'Comment puis-je échanger mes points GEME ? ',
        answer:
          "Les GEME Dots accumulés lors des achats peuvent être convertis en bons d'achat. Les GEME Dots seront convertis en un montant qui sera déduit du montant de votre facture. Vous pouvez décider au niveau du panier lors de chaque commande si vous souhaitez échanger vos GEME Dots ou continuer à les collecter.",
      },
      {
        question: 'Mes points GEME vont-ils expirer ?',
        answer:
          "Vos GEME Dots expireront si vous ne les avez pas utilisés pendant trois ans, ou si aucune commande n'a été passée depuis 12 mois sur un compte associé.",
      },
    ],
  },
  conditions: {
    title: 'Conditions de participation au programme de fidélité GEME Dots',
    items: [
      {
        label: 'Responsabilités',
        description: `
          <p>
          Le responsable du programme de fidélité GEME Dots est
          ROKH SRL<br /><br />
          Boulevard Louis Schmidt 29，<br /><br />
          1040 Etterbeek, <br /><br />
          Bruxelles, <br /><br />
          Belgique <br /><br />
          (Ci-après dénommé « ROKH »)
          </p>
          `,
      },
      {
        label: 'Admissibilité',
        description: `<p class="mb-5">Seules les personnes physiques de 18 ans et plus sont éligibles pour participer.</p>`,
      },
      {
        label: "Admissibilité à l'adhésion",
        description: `
            <ul class="m-5 ml-0 list-inside list-decimal">
                <li class="mb-5 ${cn(s.textIndented)}">La participation au programme de fidélité GEME Dots est gratuite. Il est uniquement disponible sur le site Web <a href="https://www.geme.bio" class="underline">https://www.geme.bio</a> lors de votre inscription en ligne sur le site ou au moment de l'achat</li>
                <li class="${cn(s.textIndented)}">Si vous êtes éligible (voir 2. Éligibilité), vous commencerez à participer au programme de fidélité GAME Dots immédiatement après avoir vérifié votre inscription. </li>
            </ul>`,
      },
      {
        label: 'Programme de fidélité GEME Dots',
        description: `
              <p class="mb-5">
              En tant que membre du Programme de Fidélité Médaille Verte, vous bénéficierez de plusieurs avantages et le Programme de Fidélité GEME Dots se réserve le droit de modifier, compléter ou limiter le contenu de ces avantages.
              </p>
              <ul class="m-5 ml-0 list-inside list-decimal">
              <li class="mb-5">
                <span class="font-bold">Gagner des points GEME</span>
                <p class="mt-2 ml-5">En tant que membre du programme, vous pouvez gagner des « GEME Dots » lors de vos achats sur le <a href="https://www.geme.bio" class="underline">https://www.geme.bio</a> ou gagnez 10 "GEME Dots" supplémentaires en récompense pour avoir recommandé à d'autres personnes de s'inscrire ; et 100 "GEME Dots" supplémentaires en récompense pour avoir recommandé à d'autres personnes d'acheter. <p class="mt-2 ml-5">
              <li class="mb-5">
                 <span class="font-bold">En attente de confirmation de GEME Dots</span>
                 <p class="mt-2 ml-5">Le JEU Cumulez-vous lors de vos achats sur le <a href="https://www.geme.bio" class="underline">https://www.geme.bio</a> site Web sera crédité sur votre compte dans les 15 jours à compter de la date d'expédition de votre commande. D’ici là, ces GEME Dots seront considérés comme des « GEME Dots en attente de confirmation ». Si la commande n'est pas annulée ou modifiée (hors recours en garantie), vos GEME Dots ne seront crédités qu'ultérieurement. <p class="mt-2 ml-5">
              </li>
              <li class="mb-5">
                <span class="font-bold">Validité et expiration des GEME Dots</span>
                <p class="mt-2 ml-5">Les GEME Dots gagnés sont valables 12 mois à compter de la date du crédit et expireront si aucune commande n'est passée sur le compte associé pendant cette période. De plus, tous les GEME Dots non utilisés expireront au bout de 3 ans. <p class="mt-2 ml-5">
              </li>
              <li class="mb-5">
                <span class="mb-5 font-bold">Notification de quantité de points GEME</span>
                <p class="mt-2 ml-5">Vous serez informé périodiquement de votre montant actuel de GEME Dots. Les notifications seront envoyées par voie électronique (par courrier électronique) ou par courrier. <p class="mt-2 ml-5">
              </li>
              <li class="mb-5">
              Les conditions du programme de fidélité GAME Dots s'appliquent au moment de la transaction.</p>
              </li>
              <li class="mb-5">
              Vous serez informé si les conditions et avantages du programme de fidélité GAME Dots sont modifiés, complétés ou limités.
              </li>
              <li class="mb-5">
                 <span class="font-bold">Les bonus physiques et les bonus ne peuvent pas être échangés contre d'autres produits ou de l'argent.</span>
                 <p class="mt-2 ml-5">Toute demande de garantie pour les bonus en nature et les bonus doit être conforme à la loi applicable. Cela n'inclut pas les paiements en espèces pour les services « à valeur ajoutée ».</p>
              </li>
              <li>
              L’annulation d’un contrat (ex. : échange) ne signifie pas que l’achat est considéré comme faisant partie des prestations du régime.
              </li>
              </ul>
              `,
      },
      {
        label: 'Résiliation',
        description: `
              <p>
              Vous pouvez mettre fin à votre participation au programme de fidélité GEME Dots à tout moment et sans préavis par communication écrite (par exemple par e-mail). Le Programme de Fidélité GEME Dots peut être résilié sans raison particulière, mais avec un préavis de 4 semaines. Le droit des deux parties de résilier spécifiquement pour un juste motif n'est pas affecté.
              </p>`,
      },
      {
        label: 'Modification des conditions de participation',
        description: `
              <p>
              ROKH se réserve le droit de modifier ou de supprimer les conditions de participation à tout moment en vous prévenant au moins 30 jours à l'avance par email. Si vous ne vous opposez pas à la modification avant l’expiration de ce délai, elle prendra effet à compter de la date indiquée. Si vous n'acceptez pas les nouvelles conditions de participation, vous pouvez vous opposer par écrit (par exemple par e-mail) à la modification ou mettre fin à votre participation au programme de fidélité GEME Dots. Si vous vous opposez au changement, les conditions précédentes s'appliqueront. Dans ce cas, FARMALINE se réserve le droit d'annuler votre participation au programme.
              </p>`,
      },
    ],
  },
}

function GemeDotsLoyaltyProgramPageFr() {
  return (
    <>
      <h1 className="sr-only">Détails du programme de fidélité GEME Dots</h1>
      <SiteHelpTabs {...tabs} />
      <GemeDotsLoyaltyProgram {...gemeDotsProps} />
    </>
  )
}

export { GemeDotsLoyaltyProgramPageFr }
