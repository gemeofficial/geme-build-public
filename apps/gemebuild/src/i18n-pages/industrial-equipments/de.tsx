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
  description: `Wo auch immer Bio-Abfall entsteht, dort verändert GEME die Welt.
      Verschiedene Größen von GEME werden in Gemeinden, Schulen, Krankenhäusern, Bürogebäuden, Einkaufszentren, touristischen Attraktionen, Resorts, Restaurants, Hotels usw. weit verbreitet verwendet.`,
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
    'Diese Geräte sind stille Umwelthelden und spielen eine wesentliche Rolle in verschiedenen Teilen der Welt. Sie verwenden mikrobiologische Fermentationsabbauverfahren, um Lebensmittelabfälle in großem Umfang zu reduzieren.',
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
