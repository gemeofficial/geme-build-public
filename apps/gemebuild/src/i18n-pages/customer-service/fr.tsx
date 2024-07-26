import CustomerService, {
  ICustomerServiceProps,
} from './components/CustomerService'
import defaultLink from 'next/link'
import { ILinkComponent } from '../../contexts/link-context'

// 配置文件 Fr版
const useCustomerServiceProps = (
  PrefetchLink: ILinkComponent,
): ICustomerServiceProps => ({
  title: 'Service client',
  coverImage: '/assets/images/customer-service/1-1.jpg',
  description: `Découvrez notre assistance après-vente complète et d'autres forfaits de service intéressants pour votre GEME. Nous sommes là pour vous`,
  links: [
    {
      name: 'Réparer moi-même',
      type: 'link',
      link: '/self-repair',
    },
    {
      name: 'Trouver ma réponse',
      type: 'button',
      link: '/faq',
    },
    {
      name: 'Signaler mon problème',
      type: 'button',
      link: '/product-issue',
    },
  ],
  videoLink: {
    name: 'Tutoriel vidéo',
    description: `Découvrez ce que vous pouvez faire pour résoudre les problèmes des appareils.`,
    link: '/manual',
    buttonName: 'Voir la vidéo',
    image: '/assets/images/customer-service/1-2.png',
  },
  item1: [
    {
      image: '',
      name: 'Conseils en cas de panne',
      description: `Vous trouverez ici des réponses et des suggestions pour résoudre les problèmes de vos appareils.`,
      link: '/self-repair',
      buttonName: 'Réparer moi-même',
      icon: (
        <svg
          className="w-5 h-5"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M563.204267 1007.2c-7.5264 0-14.992-2.485333-21.131733-7.3216L312.434133 818.933333 85.333333 818.933333c-37.642667 0-68.266667-30.622933-68.266667-68.266667l0-494.933333c0-37.6416 30.624-68.266667 68.266667-68.266667l750.933333 0c37.642667 0 68.266667 30.625067 68.266667 68.266667l0 494.933333c0 37.643733-30.624 68.266667-68.266667 68.266667L597.333333 818.933333l0 154.133333c0 13.076267-7.469867 25.0016-19.233067 30.7104C573.3664 1006.072533 568.270933 1007.2 563.204267 1007.2zM85.333333 255.733333l0 494.933333 238.933333 0c7.664 0 15.105067 2.5792 21.125333 7.322667L529.066667 902.7168 529.066667 784.8c0-18.8512 15.282133-34.133333 34.133333-34.133333l273.066667 0 0-494.933333L85.333333 255.733333z"
            fill="#ffffff"
          ></path>
          <path
            d="M699.733333 426.4 221.866667 426.4c-18.8512 0-34.133333-15.281067-34.133333-34.133333 0-18.8512 15.282133-34.133333 34.133333-34.133333l477.866667 0c18.8512 0 34.133333 15.282133 34.133333 34.133333C733.866667 411.118933 718.584533 426.4 699.733333 426.4z"
            fill="#ffffff"
          ></path>
          <path
            d="M699.733333 597.066667 221.866667 597.066667c-18.8512 0-34.133333-15.281067-34.133333-34.133333 0-18.8512 15.282133-34.133333 34.133333-34.133333l477.866667 0c18.8512 0 34.133333 15.282133 34.133333 34.133333C733.866667 581.7856 718.584533 597.066667 699.733333 597.066667z"
            fill="#ffffff"
          ></path>
          <path
            d="M938.666667 16.8 153.6 16.8c-37.642667 0-68.266667 30.625067-68.266667 68.266667l0 85.333333 68.266667 0 0-85.333333 785.066667 0 0 477.866667-17.066667 0 0 68.266667 17.066667 0c37.642667 0 68.266667-30.624 68.266667-68.266667l0-477.866667C1006.933333 47.425067 976.309333 16.8 938.666667 16.8z"
            fill="#ffffff"
          ></path>
        </svg>
      ),
    },
    {
      image: '',
      name: 'FAQ',
      description: `Des questions ? La FAQ contient de nombreuses informations utiles.`,
      link: '/faq',
      buttonName: 'Trouver ma réponse',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
          />
        </svg>
      ),
    },
    {
      image: '',
      name: 'Formulaire de contact',
      description: `Utilisez notre formulaire de contact pour nous envoyer votre demande et le service GEME vous répondra dès que possible.`,
      link: '/contact',
      buttonName: 'Contactez-nous',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
    },
  ],
  item2: {
    name: 'Manuels',
    description: `Vous pouvez trouver le manuel d'utilisation de votre GEME ici.`,
    link: '/manuals-download',
    buttonName: 'En savoir plus',
    image: '/assets/images/customer-service/1-3.jpg',
  },
  item3: [
    {
      name: 'GEME Care+',
      description: `Pour plus de sécurité, nous offrons une garantie sur vos appareils GEME jusqu'à 3 ans sur demande.`,
      link: '/geme-care',
      buttonName: 'Plus de protection',
      roundBorderTop: true,
      image: '/assets/images/customer-service/1-4-left.jpg',
    },
    {
      name: 'Accessoires GEME',
      image: '/assets/images/customer-service/1-4-right.jpg',
      description: `Les pièces de rechange originales GEME assurent le bon fonctionnement de votre équipement`,
      link: '/addons',
      buttonName: 'Commander maintenant',
      commingSoon: true,
      roundBorderTop: true,
    },
  ],
  PrefetchLink,
})


export function CustomerServicePageFr({
  PrefetchLink,
}: {
  PrefetchLink?: ILinkComponent
}) {
  const Link = (PrefetchLink || defaultLink) as ILinkComponent
  const props = useCustomerServiceProps(Link)
  return <CustomerService {...props} />
}
