import { IndustrialEquipments } from './components'
import { industrialEquipmentsJsonLd } from '../../lib/serp'
import { items } from '../../helpers/industrial-equipments/data/data-en'
import type { IIndustrialEquipmentsProps } from './components/IndustrialEquipments'
import type { IHeroWithImageTilesProps } from './components/Hero'
import type { IEquipmentPreviewProps } from './components/EquipmentPreview'
import type { IProductListsWithTallImagesProps } from './components/EquipmentList'
import { mapItemsToProducts } from '../../helpers/industrial-equipments/tool'

// Hero组件内容的配置数据  De版
const heroConfigProps: IHeroWithImageTilesProps = {
  title: 'GEME für das Geschäft',
  description: `Überall dort, wo Biomüll entsteht, verändert GEME die Welt.
  GEME unterschiedlicher Größe wird häufig in Gemeinden, Schulen, Krankenhäusern, Bürogebäuden, Einkaufszentren, Touristenattraktionen, Resorts, Restaurants, Hotels usw. eingesetzt.`,
  primaryButtonLabel: 'Kontaktiere uns',
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

// EquipmentPreview组件内容的配置数据  De版
const equipmentPreviewConfigProps: IEquipmentPreviewProps = {
  title: 'Vitrine',
}

// EquipmentList组件内容的配置数据  De版
const equipmentListConfigProps: IProductListsWithTallImagesProps = {
  title: 'Kommerzielle Ausrüstung',
  description:
    'Diese Geräte sind stille Umwelthelden und spielen in verschiedenen Teilen der Welt eine wesentliche Rolle. Sie nutzen die mikrobielle Fermentationsabbaumethode, um die Lebensmittelverschwendung in großem Maßstab zu reduzieren.',
  products: mapItemsToProducts(items, 'tägliche Verarbeitungskapazität'),
  productImageAspectRadioClassName: 'aspect-w-9! aspect-h-6!',
  productsContainerClassName: 'gap-y-16 sm:gap-y-10',
}

function IndustrialEquipmentsPageDe() {
  const url = 'https://www.geme.bio/de/industrial-equipments'

  const componentConfigProps: IIndustrialEquipmentsProps = {
    heroConfigProps,
    equipmentPreviewConfigProps,
    equipmentListConfigProps,
  }

  return (
    <>
      <h1 className="sr-only">GEME Industrieausrüstungen</h1>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={industrialEquipmentsJsonLd()}
        key="industrial-equipments-jsonld"
      />
      <IndustrialEquipments {...componentConfigProps} />
    </>
  )
}

export { IndustrialEquipmentsPageDe }


