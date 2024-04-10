import { IndustrialEquipments } from './components'
import { industrialEquipmentsJsonLd } from '../../lib/serp'
import { items } from '../../helpers/industrial-equipments/data/data-fr'
import type { IIndustrialEquipmentsProps } from './components/IndustrialEquipments'
import type { IHeroWithImageTilesProps } from './components/Hero'
import type { IEquipmentPreviewProps } from './components/EquipmentPreview'
import type { IProductListsWithTallImagesProps } from './components/EquipmentList'
import { mapItemsToProducts } from '../../helpers/industrial-equipments/tool'

// Hero组件内容的配置数据  Fr版
const heroConfigProps: IHeroWithImageTilesProps = {
  title: 'GEME pour le business',
  description: `Partout où des biodéchets sont générés, c'est là que GEME change le monde.
  Différentes tailles de GEME sont largement utilisées dans les communautés, les écoles, les hôpitaux, les immeubles de bureaux, les centres commerciaux, les attractions touristiques, les centres de villégiature, les restaurants, les hôtels, etc.`,
  primaryButtonLabel: 'Contactez-nous',
  primaryButtonProps: {
    href: '/contact',
  },
  decorativeImageGroups: [
    [
      {
        imageSrc: '/assets/images/industrial-equipments/devices/1.jpg',
        imageContainerClassName: 'h-48 w-64 sm:opacity-0 lg:opacity-100',
        width: 960,
        height: 720,
      },
      {
        imageSrc: '/assets/images/industrial-equipments/devices/8.jpg',
        imageContainerClassName: 'h-48 w-64',
        width: 960,
        height: 720,
      },
    ],
    [
      {
        imageSrc: '/assets/images/industrial-equipments/devices/14.jpg',
        imageContainerClassName: 'h-48 w-64',
        width: 960,
        height: 720,
      },
      {
        imageSrc: '/assets/images/industrial-equipments/devices/15.jpg',
        imageContainerClassName: 'h-48 w-64',
        width: 960,
        height: 720,
      },
      {
        imageSrc: '/assets/images/industrial-equipments/devices/13.jpg',
        imageContainerClassName: 'h-48 w-64',
        width: 960,
        height: 720,
      },
    ],
    [
      {
        imageSrc: '/assets/images/industrial-equipments/devices/4.jpg',
        imageContainerClassName: 'h-48 w-64',
        width: 960,
        height: 720,
      },
      {
        imageSrc: '/assets/images/industrial-equipments/devices/1.jpg',
        imageContainerClassName: 'h-48 w-64',
        width: 960,
        height: 720,
      },
    ],
  ],
}

// EquipmentPreview组件内容的配置数据  Fr版
const equipmentPreviewConfigProps: IEquipmentPreviewProps = {
  title: 'Vitrine',
}

// EquipmentList组件内容的配置数据  Fr版
const equipmentListConfigProps: IProductListsWithTallImagesProps = {
  title: 'Équipements commerciaux',
  description:
    'Ces appareils sont des héros environnementaux silencieux, jouant un rôle essentiel dans diverses régions du monde. Ils utilisent une méthodologie de dégradation par fermentation microbienne pour contribuer à réduire le gaspillage alimentaire à grande échelle.',
  products: mapItemsToProducts(items, 'capacité de traitement quotidienne'),
  productImageAspectRadioClassName: 'aspect-w-9! aspect-h-6!',
  productsContainerClassName: 'gap-y-16 sm:gap-y-10',
}

function IndustrialEquipmentsPageFr() {
  const url = 'https://www.geme.bio/fr/industrial-equipments'

  const componentConfigProps: IIndustrialEquipmentsProps = {
    heroConfigProps,
    equipmentPreviewConfigProps,
    equipmentListConfigProps,
  }

  return (
    <>
      <link rel="canonical" href={url} />
      <h1 className="sr-only">GEME Équipements Industriels</h1>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={industrialEquipmentsJsonLd()}
        key="industrial-equipments-jsonld"
      />
      <IndustrialEquipments {...componentConfigProps} />
    </>
  )
}

export { IndustrialEquipmentsPageFr }
