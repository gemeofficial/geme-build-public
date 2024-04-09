import { ReturnPolicy } from './components'
import type {
  IReturnPolicyCurrentProps,
  IReturnPolicyEndProps,
  IReturnPolicyProps,
} from './components'
import { ISiteHelpTabsProps, SiteHelpTabs } from '../../components/tabs'
import Svg7Days from './components/Svg7Days'
import Svg30Days from './components/Svg30Days'
import Svg45Days from './components/Svg45Days'
import Svg45DaysAfter from './components/Svg45DaysAfter'

// navbar的内容 配置文件 Fr版
const siteHelpTabsProps: ISiteHelpTabsProps = {
  tabs: [
    {
      title: "Conditions Générales d'Utilisation",
      id: 'terms-and-conditions',
    },
    {
      title: 'Garantie',
      id: 'warranty',
    },
    {
      title: 'Extension de Garantie',
      id: 'warranty-extend',
    },
    {
      title: 'Politique de Retour',
      id: 'return-policy',
    },
    {
      title: 'Politique de Confidentialité',
      id: 'privacy-policy',
    },
    {
      title: 'Programme de Fidélité GEME Dots',
      id: 'geme-dots-loyalty-program',
    },
  ],
  currentTabId: 'return-policy',
}

// 静态页面的内容一 配置文件 Fr版
const returnPolicyCurrentProps: IReturnPolicyCurrentProps = {
  title: 'Comment fonctionnent les retours',
  updateTime: 'Mise à jour : 25 novembre 2023',
  forward: {
    description: `
    <p class="mb-5">Notre équipe se fera un plaisir de vous aider dans le processus de retour des produits achetés via www.geme.bio. Envoyez simplement le formulaire d'annulation à <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition easy-in-out duration-150 underline">info@geme. biographie </a>. Veuillez préparer votre numéro de commande ou le numéro de série de votre produit afin que nous puissions vous aider tout au long du processus.</p>
    <p class="mb-2 text-xs">
      Remarque : Nous acceptons uniquement les retours de produits achetés directement à partir de ce tableau.
      Si vous avez acheté votre produit auprès d'un autre détaillant, veuillez contacter ce détaillant concernant votre retour.
    </p>

   <table class="border-collapse border border-slate-400 mb-5 table-auto">
      <thead>
        <tr>
          <th class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">Nom de la source</th>
          <th class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">Liens vers les magasins</th>
          <th class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">Heure de lancement</th>
        </tr>
      </thead>

      <tbody class="pl-2 pr-2 pb-2 pt-2">
        <tr>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2"">Official Website</td>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">
            <a href="https://www.geme.bio/" target="_blank">www.geme.bio</a>
          </td>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">2022-11-11</td>
        </tr>
        <tr>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">Amazone</td>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">
            <a href="https://www.amazon.com/dp/B0BV31KTCN" target="_blank">Lien</a>
          </td>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">2023-02-04</td>
        </tr>
        <tr>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">eBay</td>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">
            <a href="https://www.ebay.com/usr/gemeofficial" target="_blank">Lien</a>
          </td>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">2023-09-05</td>
        </tr>
        <tr>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">Walmart</td>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">
            <a href="https://www.walmart.com/ip/GEME-19L-Electric-Composter-World-s-First-Bio-Compost-Machine-Composter-indoor-Electric-Food-Cycler-Turn-Waste-Organic-Compost-Kitchen-Kitchen-compos/1670817413" target="_blank">Lien</a>
          </td>
          <td class="border border-slate-200 pl-2 pr-2 pb-2 pt-2">2023-10-23</td>
        </tr>
      </tbody>
    </table>
    `,
    imgSrc: '/assets/images/return-policy/1.png',
  },
  versionInfo: `123`,
  items: [
    {
      name: 'Retours sous 30 jours calendaires',
      hide: false,
      svgSrc: <Svg30Days></Svg30Days>,
      description: `
        <p class="mb-5">Profitez de 30 jours de bonheur avec GEME à la maison ! Si vous n'êtes pas satisfait, renvoyez-le dans les 30 jours. Nous nous occuperons du reste et prendrons en charge les frais de port.</p>
        <p class="mb-5">Si vous n'avez pas utilisé GEME-Kobold, obtenez un remboursement complet, sans poser de questions !</p>
        <p class="mb-5">Vous l'avez utilisé ? Aucun problème! Renvoyez-le, nous prenons toujours en charge les frais d'expédition. Seulement 70 $ seront déduits du paiement initial pour un nettoyage et un réapprovisionnement en profondeur.</p>
        <p class="mb-5">Juste un conseil amical : avant de retourner l'appareil, assurez-vous d'éliminer tous les sous-produits, micro-organismes utilisés ou résidus alimentaires. Prenez des photos avant et après l'emballage. Ces 2 étapes simples garantissent un processus de retour fluide, évitant tout problème logistique.</p>
        <p class="mb-5">Votre satisfaction est notre priorité et nous souhaitons que cet essai soit une expérience agréable pour vous !</p>
      `,
    },
    {
      name: 'Retours sous 45 jours calendaires',
      hide: false,
      svgSrc: <Svg45Days></Svg45Days>,
      description: `
      <p class="mb-5">Si vous n'êtes pas satisfait de votre produit pour toute autre raison, vous disposez de 45 jours calendaires pour demander un retour. Des frais de restockage supplémentaires de 50 % du prix de vente du produit seront facturés. Les frais de livraison, d'expédition et de service d'origine ne seront pas remboursés. Contactez-nous via <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition easy-in-out duration-150 underline">info@geme.bio</ a> pour organiser un retour. </p>
        `,
    },
    {
      name: 'Après 45 jours calendaires',
      hide: false,
      svgSrc: <Svg45DaysAfter></Svg45DaysAfter>,
      description: `
      <p class="mb-5">Si le délai de retour de 45 jours est écoulé et que votre produit est toujours sous garantie, veuillez nous appeler pour un service de garantie ou pour organiser une réparation. Des frais peuvent s'appliquer.</p>
      <p class="mb-5">Une raison d'être malheureux ? Contactez-nous via <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio</a> afin que nous puissions mieux comprendre comment vous aider à résoudre votre problème.</p>
      `,
    },
  ],
}

// 静态页面的内容二 配置文件 Fr版
const returnPolicyEndProps: IReturnPolicyEndProps = {
  title: 'Comment fonctionner les retours',
  updateTime: 'Mise à jour : 1 janvier 2023',
  forward: {
    description: `
    <p class="mb-5">Notre équipe se fera un plaisir de vous aider dans le processus de retour des produits achetés via www.geme.bio. Envoyez simplement le formulaire de rétractation à <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio </a>. Veuillez préparer votre numéro de commande ou le numéro de série de votre produit afin que nous puissions vous aider tout au long du processus.</p>
    <p class="mb-5">Remarque : Nous acceptons uniquement les retours de produits achetés directement sur www.geme.bio. Si vous avez acheté votre produit auprès d'un autre détaillant, veuillez contacter ce détaillant concernant votre retour.</p>
    `,
    imgSrc: '/assets/images/return-policy/1.png',
  },
  items: [
    {
      name: 'Retours sous 7 jours - pas de frais de restockage',
      svgSrc: <Svg7Days></Svg7Days>,
      description: `
      <p class="mb-5">La loi belge relative aux pratiques commerciales et à l'information et à la protection des consommateurs permet à l'acheteur d'informer le vendeur qu'il renoncera à l'achat dans les 7 jours suivant la réception du produit. Les marchandises doivent être suivies dans un délai acceptable (7 jours) après réception de la marchandise et si elles n'ont pas été ouvertes et utilisées. Nous vous recommandons de conserver autant que possible les marchandises dans leur emballage et leur état d'origine afin de ne pas être tenu responsable d'une éventuelle dévaluation des marchandises résultant de leur élimination.</p>
      <p class="mb-5">Vous pouvez envoyer un <a href="/assets/return/revocation-form.docx" target='_blank' class="text-accent-6 hover:text-accent-9 transition facilite-entrée-sortie durée-150 souligné ">formulaire de rétractation</a> à envoyer par <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition facilite-entrée-sortie durée-150 soulignement"> info@geme.bio</a> pour nous informer que vous abandonnez votre achat. Vous devez ensuite retourner la marchandise par courrier normal à l'adresse ci-dessous avec un affranchissement suffisant et une copie de la facture.</p>
      <p class="mb-5">Afin que nous puissions procéder à un remboursement, veuillez également nous fournir votre numéro de compte. Dès réception de votre retour, nous vous établirons un avoir et vous rembourserons le montant versé sous 14 jours. Il n’y a aucune exception au formulaire d’annulation.</p>
      <p class="mb-5">Si vous recevez un produit qui ne correspond pas à celui que vous avez commandé ou qui est endommagé, vous devez alors nous en informer de la même manière et retourner le produit de la même manière. Cependant, dans ce cas, nous vous rembourserons également les frais d'envoi envoyés par courrier ordinaire.</p>
      `,
    },
    {
      name: 'Retours sous 30 jours calendaires',
      svgSrc: <Svg30Days></Svg30Days>,
      description: `
      <p class="mb-5">Produits endommagés au moment de la livraison</p>
      <p class="mb-5">(Les dommages comprennent les rayures, les bosses, les éclats et autres dommages causés par des défauts de matériaux et/ou de fabrication.)</p>
      <p class="mb-5">Si vous constatez que votre produit est livré endommagé, vous pouvez demander un retour, un échange ou une réparation via <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition durée de facilité d'entrée-150 soulignement">info@geme.bio</a> dans un délai de 30 jours calendaires.</p>
      <ul class="my-5 list-inside list-disc">
        <li class="mb-5">Pour les échanges, vous ne devrez payer aucun frais de livraison, d’expédition ou de service supplémentaire. En fonction de la différence de prix du nouvel article, vous recevrez un crédit ou des frais sur la carte de crédit utilisée pour acheter l'article original.</li>
        <li class="mb-5">Pour les retours, vous recevrez un remboursement pour le produit, mais les frais d'expédition, de transport et de service ne seront pas remboursés. Veuillez nous appeler pour discuter de la nature des dommages et pour confirmer que vous êtes éligible à un remboursement du produit.</li>
        <li class="mb-5">Si vous êtes intéressé par une réparation, envoyez simplement un e-mail à la même adresse e-mail pour planifier le service.</li>
      </ul>
      `,
    },
    {
      name: 'Retours sous 45 jours calendaires',
      svgSrc: <Svg45Days></Svg45Days>,
      description: `
      <p class="mb-5">Si vous n'êtes pas satisfait de votre produit pour toute autre raison, vous disposez de 45 jours calendaires pour demander un retour. Des frais de restockage supplémentaires de 50 % du prix de vente du produit seront facturés. Les frais de livraison, d'expédition et de service d'origine ne seront pas remboursés. Contactez-nous via <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio</a> pour organiser un retour. </p>
        `,
    },
    {
      name: 'Après 45 jours calendaires',
      svgSrc: <Svg45DaysAfter></Svg45DaysAfter>,
      description: `
      <p class="mb-5">Si le délai de retour de 45 jours est écoulé et que votre produit est toujours sous garantie, veuillez nous appeler pour un service de garantie ou pour organiser une réparation. Des frais peuvent s'appliquer.</p>
      <p class="mb-5">Une raison d'être malheureux ? Contactez-nous via <a href="mailto:info@geme.bio" class="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline">info@geme.bio</a> afin que nous puissions mieux comprendre comment vous aider à résoudre votre problème. </p>
      `,
    },
  ],
}

function ReturnPolicyPageFr() {
  const url = 'https://www.geme.bio/fr/return-policy'

  const childProps: IReturnPolicyProps = {
    current: returnPolicyCurrentProps,
    end: returnPolicyEndProps,
  }

  return (
    <>
      <link rel="canonical" href={url} />
      <h1 className="sr-only">GAME-Rückgabebedingungen</h1>
      <SiteHelpTabs {...siteHelpTabsProps} />
      <ReturnPolicy {...childProps} />
    </>
  )
}
export { ReturnPolicyPageFr }
