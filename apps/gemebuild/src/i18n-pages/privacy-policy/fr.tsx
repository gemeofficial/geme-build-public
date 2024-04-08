import { PrivacyPolicy } from './components'
import { SiteHelpTabs, ISiteHelpTabsProps } from '../../components/tabs'
import type { IPrivacyPolicyProps } from './components'

// 静态页面的navBar内容 配置文件 Fr版
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
  currentTabId: 'privacy-policy',
}

// 静态页面的内容 配置文件 Fr版
const privacyPolicyProps: IPrivacyPolicyProps = {
  title: 'Déclaration de confidentialité',
  description: `
    <p class="mb-15">
    Chez ROKH, nous nous engageons à protéger la vie privée et les données personnelles de nos clients. C’est pourquoi nous considérons qu’il est très important d’informer nos clients de la manière dont nous traitons leurs données et des raisons exactes pour lesquelles nous en avons besoin.
    <br /> <br />
    Cette déclaration de confidentialité a pour but de vous informer sur le traitement des données dans le cadre de notre site Internet et des services associés. Le traitement des données personnelles a lieu uniquement dans le cadre des réglementations légales applicables en matière de protection des données, en particulier le règlement général sur la protection des données (RGPD).
    <br /> <br />
    Ce site Web appartient à ROKH SRL.
    </p>
    `,
  items: [
    {
      name: 'Délégué à la protection des données',
      description: `
      <p class="mb-15">
      Vous pouvez contacter notre délégué à la protection des données à Privacy@geme.bio
      </p>
      `,
    },
    {
      name: 'Données personnelles',
      description: `
      <p class="mb-15">
      Les données personnelles sont toutes les informations relatives à une personne physique identifiée ou identifiable ; une personne physique est considérée comme identifiable si elle peut être identifiée directement ou indirectement, notamment par des moyens d'identification, tels que le nom, le numéro d'identification, les coordonnées de localisation, l'identifiant en ligne, ou en la reliant à une ou plusieurs caractéristiques qui sont physiques, physiologiques, génétiques. , expression psychologique, économique, culturelle ou sociale de l’identité. Cela inclut toutes les informations liées à votre identité, telles que votre nom, votre adresse e-mail ou postale, votre numéro de client et un identifiant en ligne.
      <br /> <br />
      En principe, vous pouvez utiliser nos services en ligne et mobiles sans révéler votre identité et sans communiquer de données personnelles. Toutefois, des données personnelles vous concernant sont collectées lors de l’utilisation de certains services de notre boutique en ligne, et applications.
      </p>
      `,
    },
    {
      name: 'Stockage des données personnelles',
      description: `
      <p class="mb-15">
      Vos données sont stockées par nos soins sur des serveurs spécialement protégés. Ils sont protégés par des mesures techniques et organisationnelles permettant d'éviter toute perte, destruction, accès, modification ou diffusion par des personnes non autorisées. Seul un nombre limité de personnes autorisées ont accès à vos données. Ils assurent la gestion technique, commerciale ou éditoriale du serveur.
      <br /> <br />
      Vos données sont transmises sous forme cryptée sur Internet. Nous utilisons le cryptage SSL (Secure Sockets Layer) pour la transmission des données.
      </p>
      `,
    },
    {
      name: 'Base juridique du traitement des données',
      description: `
      <p class="mb-15">
      Si nous obtenons le consentement pour traiter vos données, l'art. 6 al. 1 a) du RGPD sert de base juridique pour le traitement des données.
      <br /> <br />
      Si nous traitons vos données parce qu'elles sont nécessaires à l'exécution d'un contrat ou dans le cadre d'une relation quasi contractuelle avec vous, l'art. Para 6 1 b) RGPD comme base juridique pour le traitement des données.
      <br /> <br />
      Si nous traitons vos données pour remplir une obligation légale, l'art. 6 al. 1 c) du RGPD comme base juridique pour le traitement des données.
      <br /> <br />
      Art. 6 al. 1F) RGPD si le traitement de vos données est nécessaire à la sauvegarde des intérêts légitimes de notre entreprise ou de tiers et si vos intérêts, droits fondamentaux et libertés à cet égard ne sont pas requis par les principes fondamentaux de protection des données personnelles.
      <br/> <br />
      Dans le cadre de cette déclaration de confidentialité, nous indiquons toujours la base juridique de notre traitement de vos données.
      </p>
      `,
    },
    {
      name: 'Suppression des données et durée de conservation',
      description: `
      <p class="mb-15">
      En principe, nous supprimerons ou bloquerons toujours vos données lorsque le stockage n'a plus de sens. Toutefois, les données personnelles peuvent être stockées ailleurs si les exigences légales auxquelles nous sommes soumis le prévoient (par exemple dans le cadre des obligations légales de stockage et de documentation). Dans ce cas, nous supprimerons ou bloquerons vos données après la fin des procédures.
      </p>
      `,
    },
    {
      name: "Traitement des données en cas d'utilisation générale de nos offres",
      description: `
      `,
    },
    {
      name: 'Informations sur le périphérique de communication que vous utilisez',
      description: `
      <p class="mb-15">
      Chaque fois que vous accédez à nos offres en ligne et mobiles, nous collectons les informations suivantes sur l'appareil que vous utilisez : l'adresse IP, la demande de votre navigateur, ainsi que la date et l'heure de cette demande. De plus, le statut et le volume des données transmises dans le cadre de cette demande sont capturés. Nous collectons également des informations relatives au produit et à la version du navigateur utilisé, ainsi qu'au système d'exploitation de l'appareil et au fournisseur d'accès Internet. Nous suivons également le site à partir duquel le service est accédé.
      <br /> <br />
      La base juridique du traitement de ces données est l'art. Para. 6 1f Règlement général sur la protection des données.
      <br /> <br />
      Nous traitons ces données pour pouvoir afficher des contenus tels que des pages Web sur votre appareil. En outre, nous utilisons ces données pour le fonctionnement des services en ligne et mobiles, pour identifier et éliminer les erreurs, pour mesurer la charge sur les services en ligne et mobiles et pour apporter des ajustements ou des améliorations.
      <br /> <br />
      Ces finalités prouvent également un intérêt légitime au sens de l’art. Para. 6 1f Règlement général sur la protection des données.
      <br /> <br />
      L'adresse IP de votre appareil est stockée uniquement pendant la durée d'utilisation des services en ligne ou mobiles et sera supprimée ou tronquée par la suite. Les données sont conservées pendant une durée limitée.
      </p>
      `,
    },
    {
      name: 'Utilisation des cookies',
      id: 'use-of-cookie',
      description: `
      <p class="mb-15">
      Nous utilisons des cookies, qui sont de petits éléments de données sous forme de texte stockés sur votre ordinateur pour stocker certains paramètres et données destinés à être échangés avec nos offres en ligne via votre navigateur. les cookies contiennent généralement le nom du domaine à partir duquel le fichier cookie est envoyé ainsi que des informations sur l'âge et l'identifiant alphanumérique du cookie. Il existe différents types de cookies en fonction de leur contenu et de leur durée de conservation. La plupart des cookies que nous utilisons sont des « cookies de session » qui sont supprimés lorsque vous terminez votre session de navigation. Il existe également des cookies de longue durée qui nous permettent de vous reconnaître en tant que visiteur.
      <br /> <br />
      Nous vous informons au préalable de l'utilisation de cookies en affichant un message correspondant sur une bannière.
      <br /> <br />
      Certains cookies sont techniquement nécessaires pour permettre l'utilisation de nos produits en ligne et mobiles. Avec ces cookies, nous capturons et stockons les données suivantes.
      </p>
      <ul class="mx-2 my-5 list-inside list-disc">
        <li class="m-2">Paramètres de langue</li>
        <li class="m-2">Paramètres de recherche</li>
        <li class="m-2">Contenu des formulaires en ligne</li>
        <li class="m-2">Informations utilisées pour identifier ou authentifier les utilisateurs</li>
        <li class="m-2">Produits dans le panier</li>
        <li class="m-2">Produits sur le mémo</li>
        <li class="m-2">Produits recommandés à l'achat</li>
      </ul>
      De plus, nous utilisons des cookies sur nos pages Web pour analyser votre comportement d'utilisateur, ce que l'on appelle. Cookies analytiques. Ces cookies nous permettent de capturer et de stocker les données suivantes.
      <ul class="mx-2 my-5 list-inside list-disc">
        <li class="m-2">Fréquence de consultation des pages</li>
        <li class="m-2">Rechercher des mots-clés</li>
        <li class="m-2">Utilisation des fonctionnalités des pages Web</li>
      </ul>
      <p class="mb-15">
      Les données collectées à votre sujet via les cookies sont pseudonymisées et il n'est donc plus possible de relier les données à chaque utilisateur.
      <br /> <br />
      La base juridique du traitement des données à l'aide de cookies est l'art. 6 al. 1f Règlement général sur la protection des données.
      <br /> <br />
      Les cookies nous permettent de reconnaître votre ordinateur et de fournir immédiatement toute configuration. les cookies nous aident à améliorer nos services en ligne et à pouvoir vous offrir un service meilleur et plus personnalisé. L'utilisation de cookies est nécessaire pour faciliter votre utilisation de nos services en ligne, et certaines fonctionnalités ne peuvent vous être fournies que grâce à l'utilisation de cookies. Cela implique des requêtes, des formulaires en ligne, des comptes clients, des paniers de produits et des mémos.
      <br /> <br />
      Nous utilisons des cookies analytiques pour améliorer et optimiser la qualité de nos services en ligne et de leur contenu.
      <br /> <br />
      Ces finalités prouvent également un intérêt légitime au sens de l’art. Para. 6 1f Règlement général sur la protection des données.
      <br /> <br />
      Les cookies techniquement nécessaires que nous utilisons sont appelés cookies de session, qui sont automatiquement supprimés à la fin de la session de navigation. Les cookies restants sont stockés sur votre ordinateur. La plupart des navigateurs sont également configurés pour accepter automatiquement les cookies ; cependant, ils peuvent désactiver le stockage des cookies ou configurer votre navigateur pour vous avertir immédiatement lorsqu'un cookie est envoyé. Veuillez noter que dans certains cas, si vous refusez l'enregistrement d'un cookie, vous ne pourrez utiliser nos services en ligne que de manière limitée, voire pas du tout.
      <br /> <br />
      Pour analyser le comportement des utilisateurs aux fins décrites ci-dessus, nous utilisons les programmes mentionnés ci-dessous, qui à leur tour utilisent des cookies comme décrit ci-dessus, et les données stockées seront supprimées dès qu'elles ne seront plus nécessaires aux fins décrites.
      </p>
      `,
    },
    {
      name: 'Google Analytics',
      description: `
      <p class="mb-15">
      Nous utilisons Google Analytics pour l'analyse statistique. Google Analytics est un service d'analyse Web de Google LLC., 1600 Amphitheatre Parkway, Mountain View, CA 94034, États-Unis (« Google »). "Google Analytics utilise des "cookies", qui sont des données textuelles stockées sur votre ordinateur, pour analyser votre utilisation du site Web. Les serveurs de Google aux États-Unis et les y stockent. Toutefois, si l'anonymisation IP est activée sur ce site Web, votre adresse IP sera tronquée au préalable par Google dans les États membres de l'Union européenne ou dans d'autres signataires de la politique de confidentialité "Espace économique européen". L'adresse IP complète ne sera transmise aux serveurs de Google aux États-Unis et y sera tronquée que dans des cas exceptionnels. Google utilisera ces données au nom de l'opérateur de ce site Web pour évaluer votre utilisation du site Web, pour compiler des rapports sur l'activité du site Web et pour fournir à l'opérateur du site Web d'autres services liés au site Web, au site Web et à l'utilisation d'Internet. de votre navigateur IP transmis dans le cadre de Google Analytics ne sera pas fusionné avec d'autres données de Google. Vous pouvez empêcher l'enregistrement de cookies en configurant votre logiciel de navigation en conséquence ; nous attirons toutefois votre attention sur le fait que toutes les fonctions de ce site Web ne sont pas entièrement disponible dans ce cas. En outre, <a href="http://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" class="underline">http://tools.google.com/dlpage/gaoptout?hl=de</a>.
      <br /> <br />
      Pour plus d'informations à ce sujet, veuillez visiter <a href="http://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" class="underline">http://tools.google.com/dlpage/gaoptout?hl=de</a> ou <a href="http://www.google.com/intl/de/analytics/privacyoverview.html" target="_blank" class="underline">http://www.google.com/intl/de/analytics/privacyoverview.html</a> (à propos de l'analyse des informations générales et de la confidentialité de Google). Nous attirons votre attention sur le fait que Google Analytics a été complété sur nos pages par le code « anonymizeIp(); ». L'adresse IP est anonymisée en supprimant le dernier octet.
      </p>
      `,
    },
    {
      name: 'Reciblage et remarketing',
      description: `
      <p class="mb-15">
      Le terme retargeting ou remarketing fait référence à des techniques qui permettent de diffuser des publicités pertinentes aux utilisateurs qui ont déjà visité certaines pages Web, même s'ils ont quitté ces pages. Pour ce faire, l'utilisateur doit être à nouveau identifié après avoir quitté le site Internet de l'entreprise, ce qui peut être fait en utilisant les cookies du prestataire de services concerné. De plus, le comportement passé de l'utilisateur est pris en compte. Par exemple, si un utilisateur consulte certains produits, des publicités pour ces produits ou des produits similaires peuvent apparaître ultérieurement sur d'autres pages Internet. Il s'agit d'une publicité personnalisée adaptée aux besoins des utilisateurs individuels. Pour de telles annonces personnalisées, l'utilisateur n'a pas besoin d'être identifié une fois qu'il est identifié. Par conséquent, les données utilisées pour le reciblage ou le remarketing ne sont pas non plus combinées avec d’autres données.
      <br /> <br />
      Nous utilisons cette technologie pour diffuser des publicités sur Internet. Pour afficher les annonces, nous faisons appel à des fournisseurs tiers. En plus de cela, nous utilisons un service fourni par Google qui nous permet d'afficher automatiquement des produits intéressants pour les internautes. Cette fonction est mise en œuvre via des cookies. Vous pouvez obtenir plus d'informations sur cette technologie dans la politique de confidentialité de Google à l'adresse <a href="https://policies.google.com/privacy?hl=de" target="_blank" class="underline">https:// politiques.google.com/privacy?hl=de</a>. En visitant la page Internet <a href="http://www.google.com/policies/privacy/ads/" target="_blank" class="underline">http://www.google.com/policies/ Privacy/ads/</a> et en modifiant la configuration en conséquence, l'installation de cookies pour le remarketing Google et le suivi des conversions Google AdWords peut être bloquée par un paramètre de votre logiciel de navigation.
      <br /> <br />
      Ce site Web utilise des balises de redirection de Google, Appnexus et Performance Profiles pour promouvoir les produits ROKH. Le code JavaScript de redirection mis en œuvre sur ce site internet stocke un cookie sur l'ordinateur de l'utilisateur à des fins de redirection. Si l'utilisateur effectue des actions sur le site de recherche Google et les sites Web du réseau Display de Google, Appnexus et Performance Profiles, une bannière ou une publicité ROKH est ensuite envoyée à l'utilisateur. Au cours de ce processus, toutes les données sont collectées de manière anonyme et ne peuvent donc pas être rapprochées d'une personne spécifique. Les utilisateurs peuvent s'opposer à la fonction de retargeting en modifiant les paramètres d'affichage de l'onglet Google Remarketing ou en désactivant le retargeting.
      </p>
      `,
    },
    {
      name: 'Inscription',
      description: `
      <p class="mb-15">
      Vous pouvez également vous inscrire en tant qu'utilisateur sur nos services en ligne et mobiles. Pour ce faire, vous devez saisir les données requises, telles que le nom, l'adresse et l'adresse e-mail, dans le masque de saisie. De plus, nous capturons la date et l'heure de l'enregistrement ainsi que l'adresse IP. Dans le cadre du processus d'inscription, nous vous demanderons votre consentement pour utiliser les données.
      <br /> <br />
      La base juridique du traitement des données d'enregistrement est l'art en cas de consentement. Para. 6 1 Règlement général sur la protection des données. Si vous vous inscrivez chez nous pour exécuter ou établir un contrat, la base juridique supplémentaire pour le traitement des données est l'art. 6 al. 1b Règlement général sur la protection des données.
      <br /> <br />
      L'inscription est nécessaire pour l'exécution ou l'établissement d'un contrat avec nous pour certains services.
      <br /> <br />
      Les données sont conservées chez nous aussi longtemps que nécessaire à l'exécution du contrat. Par ailleurs, nous conservons ces données pour remplir nos obligations postcontractuelles et pour les durées de conservation commerciales et fiscales prévues par la loi. Cette période de conservation est normalement de 10 ans jusqu'à la fin de l'année civile concernée.
      </p>
      `,
    },
    {
      name: 'Traitement des commandes depuis notre boutique en ligne',
      description: `
      <p class="mb-15">
      Vos données personnelles ne seront utilisées que lorsque des commandes seront passées par notre société et ses sociétés affiliées ainsi que par les sociétés chargées du traitement des commandes.
      <br /> <br />
      Pour le traitement des commandes, nous travaillons avec différentes sociétés responsables du traitement des paiements et de la logistique. Nous veillons à ce que nos partenaires respectent également les règles de protection des données dans ce processus. Par conséquent, nous envoyons vos coordonnées (nom et adresse) au transporteur concerné, qui vous livrera les produits commandés.
      <br /> <br />
      La base juridique de ce traitement est l'art. 6 al. 1b Règlement général sur la protection des données. Le traitement de vos données personnelles est nécessaire à l'exécution du contrat que nous avons conclu avec vous.
      <br /> <br />
      Nous conservons les données aussi longtemps que nécessaire à l'exécution du contrat. Par ailleurs, nous conservons ces données afin de remplir nos obligations postcontractuelles et pendant les durées de conservation commerciales et fiscales prévues par la loi. Cette période de conservation est normalement de 10 ans jusqu'à la fin de l'année civile concernée.
      <br /> <br />
      Traitement des paiements des commandes, Paypal, Stripe
      <br /> <br />
      Selon le mode de paiement choisi, le traitement du paiement lors d'une commande peut être effectué par l'intermédiaire d'un prestataire.
      <br /> <br />
      Si le paiement est effectué par carte de crédit, les données dont vous avez besoin à cet effet, telles que votre nom, votre adresse et vos données d'achat, seront transmises à la société émettrice de la carte de crédit concernée.
      <br /> <br />
      Si le paiement est effectué via PayPal, vous serez redirigé vers un lien vers la page Web PayPal. Vos données personnelles sont traitées dans ce processus. Il s'agit de votre nom, de votre adresse, de votre adresse e-mail, de votre numéro de téléphone et de vos coordonnées bancaires ou de carte de crédit (le cas échéant). Veuillez trouver les conditions générales, ainsi que les conditions d'utilisation, et consulter la politique de confidentialité de PayPal (Europe) S.à rl et Cie, SCA, 22-24 Boulevard Royal, L-2449 Luxembourg sur le site Internet. <a href="https://www.paypal.com" target="_blank" class="underline">www.paypal.com</a>.
      <br /> <br />
      Lorsque vous effectuez un paiement en utilisant Strip Amount, vous serez redirigé vers un lien vers la page Web de Stripe, un service de Stripe Payments Europe, Limited (« SPEL »). Au cours de ce processus, vos données personnelles seront traitées. Il s'agit de votre nom, de votre adresse, de votre adresse e-mail, de votre numéro de téléphone et des détails de votre compte ou de votre carte de crédit (le cas échéant). Veuillez trouver les conditions générales et les conditions d'utilisation pertinentes, et consulter la politique de confidentialité sur <a href="https://stripe.com/ie/ssa" target="_blank" class="underline">https://stripe.com/ie/ssa</a>.
      <br /> <br />
      La base juridique pour le traitement des paiements est l'art. 6 al. 1b Règlement général sur la protection des données. Le traitement de vos données personnelles est nécessaire à l'exécution du contrat conclu avec vous.
      <br /> <br />
      Nous conservons les données aussi longtemps que nécessaire à l'exécution du contrat. De plus, nous stockons les données afin de remplir nos obligations postcontractuelles et les durées de conservation commerciales et fiscales requises par la loi. Cette période de conservation est normalement de 10 ans jusqu'à la fin de l'année civile concernée.
      </p>
      `,
    },
    {
      name: "Traitement des données supplémentaires lors de l'utilisation de l'application fournie par ROKH (à venir)",
      description: `
      <p class="mb-15">
      Les données suivantes seront traitées lors de l'utilisation de l'application.
      </p>
      <ul class="mx-2 my-5 list-inside list-disc">
      <li class="m-2">Données d'inscription</li>
      <li class="m-2">Numéro de client, compte courant</li>
      <li class="m-2">Numéro de fabrication de l'équipement</li>
      <li class="m-2">Caractéristiques fonctionnelles de l'appareil, données de base de l'appareil</li>
      <li class="m-2">Données d'utilisation de l'équipement</li>
      <li class="m-2">Données sur l'état de l'équipement</li>
      <li class="m-2">Données d'utilisation des applications</li>
      <li class="m-2">Telecom personal credentials</li>
      </ul>
      <p class="mb-15">
      Pour pouvoir utiliser toutes les fonctions de l'application geme@mobile, une autorisation système spécifique est requise. Lorsque vous commencez à utiliser l'application et/ou seulement lorsque vous utilisez les fonctions concernées, il vous sera demandé d'accorder les autorisations appropriées. Veuillez toutefois noter que la bonne utilisation de l'application nécessite l'accès à certaines fonctionnalités de votre appareil mobile (smartphone ou tablette) et l'accès à vos données personnelles.
      <br /> <br />
      L'application geme@mobile est disponible dans les magasins d'applications exploités par des tiers (Google Play Store et Apple App Store). Le téléchargement de l'application nécessite généralement une inscription préalable auprès de la boutique d'applications concernée. Nous n'avons aucun contrôle sur les données personnelles collectées, traitées et utilisées dans ce cadre. Dans de tels cas, la seule responsabilité incombe à l’exploitant de l’App Store concerné.
      <br /> <br />
      La base juridique du traitement des données est le consentement. Para. 6 1 Règlement général sur la protection des données. La base juridique supplémentaire pour le traitement est l'art. paragraphe 6 1b Règlement général sur la protection des données, si le traitement des données est nécessaire à l'exécution des services fournis par l'application concernée. Les données utilisées par l'appareil seront utilisées de manière anonyme afin que nos produits et applications puissent être continuellement améliorés. La base juridique en est l'art. 1f du paragraphe 6 du RGPD, l'optimisation des produits et services stimule simultanément nos intérêts légitimes.
      <br /> <br />
      Nous traitons les données aux fins suivantes
      </p>
      <ul class="mx-2 my-5 list-inside list-disc">
        <li class="m-2">Pour améliorer nos produits et services (par exemple les programmes et autres fonctions des appareils domestiques et des applications utilisés)</li>
        <li class="m-2">vous contacter pour vous envoyer des offres de services et de produits ciblées répondant à vos besoins</li>
        <li class="m-2">Éliminer ou éviter les interruptions</li>
        <li class="m-2">Assurer et améliorer la convivialité de l’application</li>
        <li class="m-2">Fournir les services proposés par l'application</li>
      </ul>
      <p class="mb-15">Nous conservons les données uniquement le temps nécessaire pour atteindre l'objectif souhaité.</p>
      `,
    },
    {
      name: "Traitement de données supplémentaire lors de l'utilisation de GCN",
      description: `
      <p class="mb-15">
      Dans le cadre de l'exécution du contrat de location, nous traitons les données personnelles suivantes via le portail GCN.
      </p>
      <ul class="mx-2 my-5 list-inside list-disc">
      <li class="m-2">Nom de famille</li>
      <li class="m-2">Adresse</li>
      <li class="m-2">Adresse mail</li>
      <li class="m-2">adresse IP</li>
      <li class="m-2">Numéro de client</li>
      <li class="m-2">Numéro de fabrication de l'équipement</li>
      <li class="m-2">Caractéristiques fonctionnelles de l'équipement</li>
      <li class="m-2">Données utilisées par l'équipement</li>
      </ul>
      <p class="mb-15">
      Les données sont traitées pour exécuter le contrat de location « GCN ». La base juridique du traitement est l'art. 6 al. 1b Règlement général sur la protection des données. Nous combinons vos données de base d'utilisateur (nom et prénom, adresse, e-mail) avec les données de base de l'appareil disponibles (par exemple, numéro de fabrication de l'appareil) pour facturer votre compte pour l'utilisation de l'appareil conformément au contrat de location. En particulier, nous avons besoin de données sur l'utilisation des équipements (par exemple, paramètres de base, sélection du programme, paramètres du programme, utilisation du programme) pour calculer les tarifs de location et les dates de maintenance.
      <br /> <br />
      De plus, les données d'utilisation résultant des interactions avec le portail GCN sont suivies et utilisées pour optimiser en permanence le portail et les produits GCN. La base juridique de ce traitement est l'art. 1 f du paragraphe 6 du RGPD, l'optimisation du service prouve en même temps notre intérêt légitime.
      <br /> <br />
      Nous conservons les données uniquement pendant la durée nécessaire à l'exécution du contrat et à la réalisation de l'objectif.
      </p>
      `,
    },
    {
      name: "Traitement de données supplémentaire lors de l'utilisation de la compétence Alexa que nous fournissons",
      description: `
      <p class="mb-15">
      Les données suivantes sont requises pour utiliser la compétence ROKH.
      </p>
      <ul class="mx-2 my-5 list-inside list-disc">
        <li class="m-2">Information d'inscription</li>
        <li class="m-2">numéro de client rokh</li>
        <li class="m-2">Numéro de fabrication de l'appareil</li>
        <li class="m-2">Caractéristiques fonctionnelles de l'appareil</li>
        <li class="m-2">Identifiant personnel de la télécommunication</li>
        <li class="m-2">ROKH Etat de l'appareil</li>
      </ul>
      <p class="mb-15">
      ROKH utilise l'implémentation Skill du service Amazon Europe Core S.à.rl, sis 5, Rue Plaetis, L-2338 Luxembourg et collecte des statistiques d'utilisateurs anonymes et des protocoles de serveur pour détecter les erreurs et améliorer l'expérience utilisateur. Il s'agit du nombre d'appels de fonction et de la fréquence d'utilisation et des messages d'erreur. Ces données sont traitées de manière anonyme par ROKH. Vous pouvez trouver la déclaration de confidentialité d'Amazon.de à l'adresse <a href="https://www.amazon.de/gp/help/customer/display.html?nodeId=3312401" target="_blank" class="underline">https://www.amazon.de/gp/help/customer/display.html?nodeId=3312401</a>
      <br /> <br />
      Les compétences ROKH sont disponibles dans la boutique de compétences Amazon Alexa exploitée par Amazon. L'activation des compétences Amazon Alexa et l'utilisation générale nécessitent généralement une inscription préalable auprès d'Amazon. Nous n'avons aucun contrôle sur les données personnelles collectées, traitées et utilisées en conséquence. Dans ce cas, la seule responsabilité incombe à Amazon.
      <br /> <br />
      La base juridique du traitement des données est le consentement. Para. 6 1 Règlement général sur la protection des données. La base juridique supplémentaire pour le traitement est l'art. paragraphe 6 1b Règlement général sur la protection des données, si le traitement des données est nécessaire à l'exécution des services fournis sur l'application concernée. De plus, les données d'utilisation des appareils sont anonymisées et utilisées afin que nos produits et applications puissent être continuellement améliorés. La base juridique du traitement est l'art. 1f du paragraphe 6 du RGPD, l'optimisation des produits et services stimule simultanément nos intérêts légitimes.
      <br /> <br />
      Nous traitons les données aux fins suivantes.
      </p>
      <ul class="mx-2 my-5 list-inside list-disc">
      <li class="m-2">Assurer l'interaction des appareils ROKH avec les terminaux Alexa</li>
      <li class="m-2">pour vous fournir les services correspondants dans la compétence ROKH Alexa</li>
      <li class="m-2">améliorer nos produits et services (par exemple les programmes utilisés et autres fonctions des appareils électroménagers et des applications)</li>
      <li class="m-2">Vous contacter pour vous adresser des offres ciblées de produits et services adaptés à vos besoins</li>
      <li class="m-2">Assurer et améliorer la convivialité des skills ROKH Alexa</li>
      <li class="m-2">Assurer l’interaction des appareils ROKH avec les terminaux Alexa</li>
      <li class="m-2">Vous fournir les services appropriés dans la compétence ROKH Alexa</li>
      </ul>
      <p class="mb-15">
      Nous stockons les données uniquement pendant la durée nécessaire pour atteindre l'objectif visé.
      </p>
      `,
    },
    {
      name: "Portail d'applications",
      description: `
      <p class="mb-15">
      Vous pouvez postuler pour un emploi chez nous via le portail de candidature et envoyer toutes les informations et documents nécessaires à cet effet. A cet effet, vous pouvez utiliser le formulaire en ligne et nous envoyer ainsi votre dossier de candidature. L'utilisation du portail de candidature est facultative ; vous pouvez également nous envoyer votre candidature par d'autres moyens, par exemple par e-mail ou par courrier.
      <br /> <br />
      Lorsqu'une candidature arrive via le portail de candidature, vos documents seront transmis par voie électronique à notre personnel approprié. Si vous postulez à une offre d'emploi, ces documents seront automatiquement détruits six mois après la fin du processus de recrutement, à condition que leur suppression ne porte pas atteinte à d'autres intérêts légitimes. Un intérêt légitime en ce sens est, par exemple, l'obligation de fournir des preuves dans le cadre d'une procédure fondée sur l'égalité de traitement (Allgemeines Gleichbehandlungsgesetz - AGG). Si la candidature ne fait pas référence à une offre d'emploi (candidature spontanée), la candidature sera conservée jusqu'à ce qu'elle puisse présenter un intérêt. Vous pouvez demander la suppression de votre candidature à tout moment, même avant l'expiration de la durée de conservation indiquée. Si la candidature est acceptée, les données transmises seront conservées pour traiter le recrutement, en tenant compte des exigences légales. Dans tous les autres cas, la base juridique pour le stockage de vos données de candidature est votre consentement conformément à l'art. 6 al. 1, a) Règlement général sur la protection des données.
      </p>
      `,
    },
    {
      name: 'Communiquer avec nous',
      description: `
      <p class="mb-15">
      Vous pouvez nous contacter de plusieurs manières, notamment via le formulaire de contact sur notre page Web. De plus, nous sommes heureux de vous informer régulièrement via votre newsletter électronique.
      </p>
      `,
    },
    {
      name: "Lettres d'information",
      description: `
      <p class="mb-15">
      Lors de votre inscription à notre newsletter, votre adresse e-mail sera utilisée à des fins publicitaires jusqu'à votre désinscription. À cette fin, vous recevrez régulièrement par e-mail des informations sur des sujets d'actualité et, dans des cas particuliers, des promotions spéciales. Les e-mails peuvent être personnalisés et individualisés en fonction des informations que nous possédons sur vous.
      <br /> <br />
      Pour notre utilisation lors de l'inscription à notre newsletter, si vous ne nous avez pas donné votre consentement écrit, la procédure dite de double opt-in, c'est-à-dire si vous l'avez explicitement indiqué au préalable, nous vous enverrons d'abord la newsletter par e-mail pour confirmer que nous devons activer l'envoi de la newsletter. Nous vous enverrons ensuite un email et vous demanderons de cliquer sur le lien contenu dans cet email pour confirmer que vous souhaitez recevoir notre newsletter.
      <br /> <br />
      La base juridique du traitement de vos données est votre consentement au sens de l'art. Para. 6 1 a) RGPD si vous êtes explicitement abonné à la newsletter. Dans le cadre des dispositions légales, vous pouvez également recevoir notre newsletter sans votre consentement exprès ou si nous recevons votre adresse e-mail parce que vous avez commandé un produit ou un service chez nous et que vous avez été contacté par e-mail. Vous ne vous êtes pas opposé à recevoir des informations par e-mail. Dans ce cas, notre intérêt légitime à transmettre de la publicité directe sera considéré comme fondé sur la base juridique de l'art. Para. 6 1f) Règlement général sur la protection des données.
      <br /> <br />
      Si vous ne souhaitez plus recevoir notre newsletter, vous pouvez à tout moment révoquer le consentement actuellement valable que vous avez donné ou refuser de continuer à recevoir la newsletter sans aucun frais autre que les frais de transmission calculés au tarif de base. Utilisez simplement le lien de désinscription inclus dans chaque newsletter ou envoyez-nous éventuellement un message en l'adressant à notre délégué à la protection des données.
      </p>
      `,
    },
    {
      name: 'Contact',
      description: `
      <p class="mb-15">
      Vous pouvez nous contacter via notre hotline client, par e-mail, par chat ou par courrier. Si vous souhaitez utiliser l'un de ces modes de contact, nous collecterons les données personnelles que vous nous transmettrez via le canal de contact choisi à cet effet. Il peut s'agir du nom, de l'adresse, de l'adresse e-mail, du numéro de client et du numéro de téléphone. C'est à vous de décider quelles informations vous souhaitez nous envoyer via le canal de contact.
      <br /> <br />
      Nous traitons ces données spécifiquement pour pouvoir répondre à vos questions ou pour pouvoir traiter vos questions.
      <br /> <br />
      Si vous souhaitez utiliser le formulaire de contact dans notre offre en ligne, nous collectons les données personnelles que vous fournissez dans le formulaire de contact, notamment le nom et l'adresse e-mail. De plus, nous stockons l'adresse IP ainsi que la date et l'heure de la demande. Nous traitons les données transmises via le formulaire de contact exclusivement pour pouvoir répondre à vos questions et préoccupations.
      </p>
      `,
    },
    {
      name: 'Qualité',
      description: `
      <p class="mb-15">
      Sur notre site Internet, nous utilisons les services d'entreprises sélectionnées pour mener des enquêtes auprès des utilisateurs ainsi que des images de produits et de marques afin d'améliorer régulièrement nos produits et services. Lorsque vous répondez à une enquête, seules les données du journal sont traitées (date et heure/informations envoyées à votre navigateur et paramètres du navigateur/informations envoyées à votre appareil/date d'utilisation). Vous êtes libre de décider si vous souhaitez ou non répondre à l’enquête. Si vous ne souhaitez pas répondre, cliquez simplement sur le « X » dans le coin supérieur droit de la fenêtre contextuelle de l'enquête pour fermer la fenêtre contextuelle de l'enquête. Votre consentement constitue la base juridique du traitement de vos données conformément à l'art. 6 (1) (a) du Règlement général sur la protection des données. Vous pouvez retirer votre consentement à tout moment avec effet immédiat.
      </p>
      `,
    },
    {
      name: "Guide d'achat",
      description: `
      <p class="mb-15">
      Sur notre site Internet, nous utilisons un service d'assistance aux achats fourni par nos prestataires de services. Le service d'aide à l'achat vous aide à trouver le bon produit plus rapidement et plus efficacement. Après avoir répondu à quelques questions, une première suggestion de produit vous sera proposée. Les produits sont présentés selon leur adéquation à vos besoins. Vous êtes libre de décider si vous souhaitez ou non utiliser ce service. Dans ce cas, nous traitons uniquement les métadonnées de la requête Web HTTP à titre de référence, votre adresse IP, la langue de votre navigateur et l'agent utilisateur (type et version du navigateur/système d'exploitation), ainsi que les données que vous partagez avec nous en utilisant le service. Ces données ne seront pas stockées. Nous traitons vos données pour nous permettre de vous fournir ce service. l’article 6 (1) (a) du RGPD constitue la base juridique du traitement. Si vous achetez un produit, l'œuvre d'art. 6 (1) (b) du RGPD constitue la base juridique du traitement des données. Le prestataire de services agit en notre nom en tant que sous-traitant selon nos instructions.
      <br /> <br />
      Dans le cadre de l'utilisation des Services, nous conservons également des informations dans le stockage de votre session, principalement pour identifier les utilisateurs sur plusieurs sessions de navigation. Pour plus d’informations sur nos cookies. Pour plus d’informations sur les prestataires de services et les services d’aide à l’achat, veuillez visiter les sites Web des prestataires de services concernés.
      </p>
      `,
    },
    {
      name: "Base juridique pour l'utilisation et le retrait du canal de contact",
      description: `
      <p class="mb-15">
      La base juridique du traitement des données lors de l'utilisation des canaux de contact mis à disposition est votre consentement au sens de l'art. Para. 6 1 Règlement général sur la protection des données. Vous pouvez révoquer votre consentement à tout moment. Après avoir traité les questions, les données sont d'abord stockées pour répondre à d'éventuelles questions. La suppression des données peut être demandée à tout moment, sinon la suppression aura lieu une fois le problème entièrement résolu. Nous supprimons ensuite immédiatement les données, à condition que nous ne soyons pas obligés de conserver les données par des réglementations commerciales ou fiscales.
      </p>
      `,
    },
    {
      name: 'Réseaux sociaux',
      description: `
      <p class="mb-15">
      Dans nos services en ligne et mobiles, vous trouverez des liens vers les réseaux sociaux Facebook et notre chaîne Youtube. Vous reconnaîtrez les liens grâce au logo du fournisseur.
      <br /> <br />
      En cliquant sur les liens, les pages de réseaux sociaux correspondantes s'ouvrent ; cette déclaration de confidentialité ne s’applique pas à eux. Vous pouvez trouver plus d'informations sur les conditions applicables ici dans les déclarations de confidentialité des fournisseurs respectifs ; vous pouvez les trouver aux adresses suivantes.
      <br /> <br />
      Facebook:
      <br /> <br />
      <a href="https://www.facebook.com/policy.php" target="_blank" class="underline">https://www.facebook.com/policy.php</a>
      <br /> <br />
      YouTube:
      <br /> <br />
      <a href="https://www.google.de/intl/de/policies/privacy/" target="_blank" class="underline">https://www.google.de/intl/de/policies/privacy/</a>
      </p>
      `,
    },
    {
      name: 'Tes droits',
      description: `
      <p class="mb-15">
      La personne concernée dispose de plusieurs droits selon le RGPD. Si vous souhaitez les utiliser ou obtenir plus d'informations à ce sujet, n'hésitez pas à nous contacter.
      <br /> <br />
      Les droits de la personne concernée comprennent notamment
      </p>
      <ul class="mx-2 my-5 list-inside list-disc">
      <li class="m-2">Le droit d’être informé : Vous pouvez le confirmer conformément à l’art. 15 RGPD, que nous traitions ou non les données personnelles en question. Si les données sont traitées, vous pouvez également obtenir de notre part des informations supplémentaires sur le traitement.</li>
      <li class="m-2">Droit de rectification : Vous avez le droit de rectifier et/ou de perfectionner les données personnelles traitées vous concernant si ces données sont incorrectes ou incomplètes au sens de l'art. 16 RGPD.</li>
      <li class="m-2">Droit à la limitation du traitement : Dans certains cas, vous pouvez demander, par l'art. 18 RGPD, que le traitement des données personnelles vous concernant soit limité.</li>
      <li class="m-2">Droit à l'effacement : Vous avez également le droit de demander que nous supprimions les données personnelles déjà stockées vous concernant sous certaines conditions en vertu de l'art. 17 RGPD.</li>
      <li class="m-2">Droit à la portabilité des données : Vous disposez également du droit prévu à l'art. 20 RGPD pour recevoir vos données personnelles vous concernant dans un format structuré, commun et lisible par machine et pour les transférer facilement de notre part à un autre responsable du traitement, sous certaines conditions.</li>
      </ul>
      <p class="mb-15">Si vos données personnelles sont traitées par les intérêts légitimes de l'art. Para. 6 1 Page 1f du RGPD, vous avez le droit de vous opposer au traitement de vos données personnelles conformément à l'article 21 du RGPD s'il existe des raisons particulières dans votre cas.</p>
      `,
    },
    {
      name: 'Plaintes',
      description: `
      <p class="mb-15">
      Si vous estimez que notre traitement de vos données personnelles n'est pas conforme à la présente déclaration de confidentialité ou à la politique de confidentialité applicable, vous pouvez déposer une plainte auprès de notre représentant à la protection des données. Le délégué à la protection des données examinera alors le problème et vous informera des résultats de l'examen. Vous avez également le droit de déposer une plainte auprès d'une autorité de contrôle.
      </p>
      `,
    },
    {
      name: "Plus d'information",
      description: `
      <p class="mb-15">
      </p>
      `,
    },
    {
      name: 'Transfert de données à des tiers',
      description: `
      <p class="mb-15">
      En principe, nous ne divulguons aucune information personnelle à des tiers à des fins autres que celles expliquées dans la présente déclaration de confidentialité. Toutefois, si nous y sommes légalement obligés ou conformément à une décision de justice, nous transférerons vos données aux autorités compétentes.
      </p>
      `,
    },
    {
      name: "Liens vers d'autres sites Web",
      description: `
      <p class="mb-15">
      Notre offre en ligne contient des liens vers d'autres sites Internet. Ces liens sont généralement indiqués comme tels. Nous n'avons aucun contrôle sur le fait que les sites Internet vers lesquels mènent ces liens respectent les règles de confidentialité en vigueur. Par conséquent, nous vous recommandons de vérifier également auprès d’autres sites Web leurs déclarations de confidentialité.
      </p>
      `,
    },
    {
      name: 'Modifications apportées à cette déclaration de confidentialité',
      description: `
      <p class="mb-15">
      La date des mises à jour de la déclaration de confidentialité est indiquée au bas de la déclaration. Nous nous réservons le droit de modifier cette déclaration de confidentialité à tout moment. La version actuelle est accessible directement via l'offre en ligne. Veuillez vérifier périodiquement l'offre en ligne pour connaître la déclaration de confidentialité applicable.
      <br /> <br />
      Cette déclaration de confidentialité a été mise à jour en janvier 2023.
      </p>
      `,
    },
    {
      name: 'Formulaire de publicité',
      description: `
      <p class="mb-15">
      Pour améliorer la commodité et la qualité de nos services, nous utilisons une technologie de suivi des conversions et de reciblage, toutes deux fournies par Adform ApS, Wildersgade 10B, 1, 1408 Copenhague K, Danemark.
      <br /> <br />
      Nos offres en ligne utilisent le suivi des conversions d'Adform. Lorsqu'un utilisateur est exposé à une annonce placée par Adform, un cookie temporaire pour le suivi des conversions est introduit.
      <br /> <br />
      Les utilisateurs qui ne souhaitent pas participer au suivi peuvent à tout moment désactiver les cookies d'Adform ou s'opposer à la collecte et au stockage des données, avec effet actuel, via leur navigateur Internet à l'adresse <a href="https://site.adform.com/datenschutz-opt-out/" target="_blank" class="underline">https://site.adform.com/datenschutz-opt-out/</a> . Vous pouvez supprimer les cookies déjà stockés sur votre ordinateur dans le navigateur que vous utilisez, ou les supprimer en supprimant les pages Web temporaires.
      <br /> <br />
      Nos offres en ligne utilisent la technologie de redirection d'Adform. Cela permet aux utilisateurs déjà intéressés par nos pages et nos produits de voir des publicités ciblées sur les pages de nos partenaires. En retargeting, les publicités sont affichées suite à une analyse par cookie du comportement de l'utilisateur observé jusqu'à présent. Il s'agit d'un cookie temporaire qui expire après 60 jours. Si vous ne souhaitez pas afficher d'annonces Adform correspondant à vos intérêts, vous pouvez toujours vous opposer à la collecte et au stockage des données ici (<a href="https://site.adform.com/datenschutz-opt-out/" target="_blank" class="underline">https://site.adform.com/datenschutz-opt-out/</a>). Pour plus d'informations sur la politique de confidentialité d'Adform, veuillez visiter <a href="https://site.adform.com/datenschutz-opt-out/" target="_blank" class="underline">https://site.adform.com/datenschutz-opt-out/<a>
      <br /> <br />
      La base juridique du traitement est l'art. Para. 6 1 f RGPD, l'amélioration du confort et de la qualité de nos services en ligne stimule nos intérêts légitimes.
      </p>
      `,
    },
    {
      name: 'Pixel de conversion Amazon et pixel de remarketing Amazon',
      description: `
      <p class="mb-15">
      Nos offres en ligne utilisent les fonctionnalités des services d'analyse Web Amazon Conversion Pixel et Amazon Remarketing Pixel. Le fournisseur de ces services est Amazon.com, Inc. 410 Terry Ave. North Seattle, Washington, États-Unis. Amazon Conversion Pixel et Amazon Remarketing Pixel utilisent également des cookies stockés sur votre ordinateur qui permettent d'analyser votre utilisation du site. Ces cookies nous permettent d'analyser votre utilisation du site et de diffuser des publicités personnalisées.
      <br /> <br />
      Vous pouvez empêcher le stockage de cookies en configurant votre logiciel de navigation en conséquence ; nous attirons toutefois votre attention sur le fait que dans de tels cas, vous ne pourrez peut-être pas utiliser toutes les fonctionnalités du Site. Vous pouvez également empêcher le transfert des données générées par le cookie dans le cadre de votre utilisation du Site vers Amazon et le traitement de ces données par Amazon en cliquant sur ce lien et en sélectionnant l'option « Pas de publicité personnalisée ». Cet Internet Explorer » : <a href="https://www.amazon.de/adprefs" target="_blank" class="underline">https://www.amazon.de/adprefs</a>.
      <br /> <br />
      Vous pouvez également sélectionner les paramètres appropriés sur <a href="http://www.youronlinechoices.com/be" target="_blank" class="underline">http://www.youronlinechoices.com/be</a>. Un cookie de désinscription est ensuite placé dans votre navigateur pour empêcher Amazon Pixel de capturer vos données lors de vos futures visites sur nos pages Web. Cette objection s'applique tant que vous ne supprimez pas le cookie Opt-Out.
      <br /> <br />
      La base juridique de ce traitement est l'art. 6 al. 1 f RGPD, et l'amélioration du confort et de la qualité de nos services est la base de nos intérêts légitimes.
      </p>
      `,
    },
    {
      name: 'Audience personnalisée Facebook',
      description: `
      <p class="mb-15">
      Nos offres en ligne utilisent la fonction de remarketing « Custom Audiences » de Facebook Inc. De cette manière, lorsque les utilisateurs visitent le réseau social Facebook ou d'autres sites Web utilisant le même procédé, il est possible d'afficher des publicités pertinentes par rapport aux intérêts des utilisateurs du site Internet (« Facebook-Ads ») sur leurs écrans. C'est pourquoi nous cherchons à vous montrer des publicités qui vous intéressent afin de rendre nos services en ligne plus intéressants pour vous. La base juridique du traitement de vos données est l'art. Para. 6 1 Page 1f Règlement général sur la protection des données.
      <br /> <br />
      Grâce à l'utilisation d'outils marketing, votre navigateur établit automatiquement une connexion directe avec les serveurs de Facebook. Nous n'avons aucun contrôle sur l'étendue et l'utilisation des données que Facebook collecte via cet outil, c'est pourquoi nous vous fournissons les informations dont nous disposons : via Facebook Custom Audiences, Facebook est informé que vous avez consulté les offres en ligne des pages correspondant à nos pages ou que vous avez cliqué sur une de nos publicités. Si vous vous inscrivez aux services Facebook, Facebook peut attribuer l'accès à votre compte. Même si vous n'êtes pas inscrit sur Facebook ou si vous n'êtes pas connecté, le fournisseur peut connaître votre adresse IP et d'autres informations d'identification et les stocker.
      <br /> <br />
      Les utilisateurs de <a href="https://www.facebook.com/settings/?tab=ads#_" target="_blank" class="underline">https://www.facebook.com/settings/?tab=ads#_</a> peut désactiver la fonction « Facebook Custom Audiences ».
      <br /> <br />
      Vous pouvez trouver plus d’informations sur le traitement des données de Facebook sur <a href="https://www.facebook.com/about/privacy" target="_blank" class="underline">https://www.facebook.com/about/privacy</a>.
      </p>
      `,
    },
    {
      name: 'Plugins de médias sociaux',
      description: `
      <p class="mb-15">
      Nos offres en ligne utilisent des plugins de réseaux sociaux du réseau social Facebook. <a href="https://www.facebook.com" target="_blank" class="underline">www.facebook.com</a> by Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA and <a href="https://www.facebook.be" target="_blank" class="underline">www.facebook.be</a> by Facebook Ireland Limited, Hanover Reach. Facebook Ireland Limited, Hanover Reach, 5-7 Hanover Quay, Dublin Operations 2, Ireland ("Facebook").
      <br /> <br />
      Vous pouvez trouver un résumé du plug-in Facebook ici : <a href="http://developers.facebook.com/docs/plugins" target="_blank" class="underline">http://developers.facebook.com/docs/plugins</a>; for more information about Facebook privacy, please visit: <a href="https://www.facebook.com/policy.php" target="_blank" class="underline">www.facebook.com/policy.php</a>
      <br /> <br />
      Facebook peut ainsi être informé que vous avez visité le site correspondant à nos services en ligne et que vous avez interagi avec le plug-in le cas échéant. En activant le plug-in, vos données personnelles seront transférées à Facebook aux États-Unis et y seront stockées.
      <br /> <br />
      Nous n'avons aucun contrôle sur les données collectées et leur traitement, et nous ne connaissons pas non plus l'étendue exacte de la collecte de données, la finalité du traitement ou la durée de conservation. Nous n'avons également aucune information sur la suppression des données collectées par Facebook.
      <br /> <br />
      Facebook stocke les données collectées à votre sujet dans votre profil d'utilisateur et les utilise à des fins publicitaires, d'études de marché et/ou pour configurer son site Internet selon les besoins. Le but particulier de cette opération est (même pour les utilisateurs non connectés) de proposer des publicités ciblées selon les besoins et d'informer les autres utilisateurs du réseau social de vos activités sur notre site Internet. Vous avez le droit de vous opposer à la création de ce profil d'utilisateur, auquel cas vous devez contacter Facebook pour exercer ce droit.
      <br /> <br />
      Nous vous offrons la possibilité d'interagir avec les réseaux sociaux et d'autres utilisateurs via des plugins afin que nous puissions améliorer nos services et les rendre plus intéressants pour vous en tant qu'utilisateur. La base juridique pour l'utilisation de plug-ins est l'art. 6 al. 1o. 1f Règlement général sur la protection des données.
      <br /> <br />
      En principe, vous pouvez également empêcher complètement le chargement des plug-ins au moyen de modules complémentaires à votre navigateur (appelés Script-Blockers).
      </p>
      `,
    },
    {
      name: 'AppNexus',
      description: `
      <p class="mb-15">
      Nos offres en ligne utilisent AppNexus, un service d'AppNexus Inc. 28 W 23rd Street, 4th floor, New York, New York - 10010, USA. AppNexus utilise des cookies, des balises Web, etc. qui sont stockés sur votre ordinateur et peuvent analyser l'utilisation du site Web. Dans le cadre de cette utilisation, des données, notamment les adresses IP et l'activité des utilisateurs, peuvent être transférées vers les serveurs d'AppNexus Inc. et y être stockées. AppNexus Inc. communiquera ces informations à des tiers si nécessaire, dans la mesure où la loi l'exige ou si ces données sont traitées par des tiers. Vous pouvez empêcher la collecte et la transmission de données personnelles (notamment votre adresse IP) ainsi que le traitement de ces données en désactivant l'exécution de Java Script dans votre navigateur ou en installant des outils tels que « NoScript ». Pour plus d'informations, consultez la déclaration de confidentialité d'AppNexus (<a href="https://www.appnexus.com/en/company/platform-privacy-policy" target="_blank" class="underline">https:/ /www.appnexus.com/en/company/platform-privacy-policy</a>). Vous pouvez également vous désinscrire d'AppNexus à l'adresse :<a href="https://www.appnexus.com/en/company/platform-privacy-policy#choices" target="_blank" class="underline">https://www.appnexus.com/en/company/platform-privacy-policy#choices</a>
      <br /> <br />
      La base juridique du traitement est l'art. 1f du paragraphe 6 du RGPD pour améliorer le confort et la qualité de nos services en ligne stimule nos intérêts légitimes.
      </p>
      `,
    },
    {
      name: 'Doubleclick',
      description: `
      <p class="mb-15">
      Nos offres en ligne via Doubleclick (<a href="https://www.doubleclick.com" target="_blank" class="underline">www.doubleclick.com</a>) de Google Ireland Limited, Gordon House, Mountain View, Barrow St Dublin 4 Irlande (« Google ») utilise la technologie pour vous montrer des publicités susceptibles de vous intéresser. Si vous ne souhaitez pas que Doubleclick continue à collecter des données anonymes, vous pouvez définir un cookie de désinscription ici : <a href="https://www.google.de/settings/ads/onweb#display_optout" target="_blank" class="underline">https://www.google.de/settings/ads/onweb#display_optout</a>
      <br /> <br />
      Ce cookie OptOut supprime les informations enregistrées jusqu'à présent et empêche la poursuite de la collecte de ces informations.
      <br /> <br />
      La base juridique de ce traitement est l'art. 1f du paragraphe 6 du RGPD pour améliorer le confort et la qualité de nos services en ligne stimule nos intérêts légitimes.
      </p>
      `,
    },
    {
      name: 'Chisma',
      description: `
      <p class="mb-15">
      Nos offres en ligne utilisent les services de Quisma GmbH, Rosenheimer Straße 145d, 81671 Munich, Allemagne. Les balises Web quisma collectent des informations pseudonymes sur le processus d'accès de l'utilisateur afin de pouvoir comprendre le comportement de l'utilisateur. Le cookie généré dans ce cas est dédié au stockage d'informations pseudonymes sous un identifiant utilisateur généré aléatoirement (pseudonyme). La situation géographique est grossièrement déterminée et l'adresse IP de l'utilisateur est brièvement analysée. Une fois l'analyse tronquée effectuée conformément aux exigences en matière de protection des données, l'adresse IP est complètement anonymisée. A aucun moment il n'est possible de parvenir à un règlement précis avec une personne ou avec une adresse précise. Vous pouvez également à tout moment vous opposer au dépôt de cookies et au suivi de Quisma-Technologie en téléchargeant et en installant le cookie Opt-Out (<a href="http://privacy.quisma.com/uk/cookie-opt-out /" target="_blank" class="underline">http://privacy.quisma.com/uk/cookie-opt-out/</a>). Plus d'informations peuvent être trouvées dans la déclaration de confidentialité de Quisma (<a href="https://privacy.quisma.com/datenschutz/quisma-websites/" target="_blank" class="underline">https://privacy.quisma .com/datenschutz/quisma-websites/</a>).
      <br /> <br />
      La base juridique du traitement est l'art. 1f du paragraphe 6 du RGPD, pour améliorer le confort et la qualité de nos services en ligne inspirés par nos intérêts légitimes.
      </p>
      `,
    },
  ],
}

function PrivacyPolicyPageFr() {
  const url = 'https://www.geme.bio/fr/privacy-policy'

  return (
    <>
      <link rel="canonical" href={url} />
      <h1 className="sr-only">Politique de confidentialité du JEU</h1>
      <SiteHelpTabs {...siteHelpTabsProps} />
      <PrivacyPolicy {...privacyPolicyProps} />
    </>
  )
}

export { PrivacyPolicyPageFr }
