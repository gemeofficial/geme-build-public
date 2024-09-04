import { IndustrialEquipments } from './components'
import { industrialEquipmentsJsonLd } from '../../lib/serp'
import { items } from '../../helpers/industrial-equipments/data/data-en'
import type { IIndustrialEquipmentsProps } from './components/IndustrialEquipments'
import type { IHeroWithImageTilesProps } from './components/Hero'
import type { IEquipmentPreviewProps } from './components/EquipmentPreview'
import type { IProductListsWithTallImagesProps } from './components/EquipmentList'
import { mapItemsToProducts } from '../../helpers/industrial-equipments/tool'

// Hero组件内容的配置数据 De版
const heroConfigProps: IHeroWithImageTilesProps = {
  title: 'GEME für Unternehmen',
  description: `Überall wo Bioabfall anfällt, verändert GEME die Welt. GEME wird in verschiedenen Größen in Gemeinden, Schulen, Krankenhäusern, Bürogebäuden, Einkaufszentren, Touristenattraktionen, Resorts, Restaurants, Hotels usw. eingesetzt.`,
  primaryButtonLabel: 'Kontaktieren Sie uns',
  primaryButtonProps: {
    href: '/business-inquiry',
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
  title: 'Gewerbliche Geräte',
  description:
    'Die Geräte sind versteckte Umwelthelden, die in verschiedenen Teilen der Welt eine wichtige Rolle spielen. Sie nutzen mikrobielle Fermentationsverfahren, um die Lebensmittelverschwendung in großem Umfang zu reduzieren.',
  products: mapItemsToProducts(items, 'tägliche Verarbeitungskapazität'),
  productImageAspectRadioClassName: 'aspect-w-9! aspect-h-6!',
  productsContainerClassName: 'gap-y-16 sm:gap-y-10',
}

function IndustrialEquipmentsPageDe() {
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
