import { IndustrialEquipments } from './components'
import { industrialEquipmentsJsonLd } from '../../lib/serp'
import { items } from '../../helpers/industrial-equipments/data/data-en'
import type { IIndustrialEquipmentsProps } from './components/IndustrialEquipments'
import type { IHeroWithImageTilesProps } from './components/Hero'
import type { IEquipmentPreviewProps } from './components/EquipmentPreview'
import type { IProductListsWithTallImagesProps } from './components/EquipmentList'
import { mapItemsToProducts } from '../../helpers/industrial-equipments/tool'

// Hero组件内容的配置数据  It版
const heroConfigProps: IHeroWithImageTilesProps = {
  title: 'GEME per le Imprese',
  description: `Ovunque si generano rifiuti organici, è lì che GEME sta cambiando il mondo.
      Diverse dimensioni di GEME sono ampiamente utilizzate in comunità, scuole, ospedali, uffici, centri commerciali, attrazioni turistiche, resort, ristoranti, hotel, ecc.`,
  primaryButtonLabel: 'Contattaci',
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

// EquipmentPreview组件内容的配置数据  It版
const equipmentPreviewConfigProps: IEquipmentPreviewProps = {
  title: 'Vetrina',
}

// EquipmentList组件内容的配置数据 It版
const equipmentListConfigProps: IProductListsWithTallImagesProps = {
  title: 'Attrezzature Commerciali',
  description:
    'Questi dispositivi sono eroi ambientali silenziosi, svolgendo un ruolo essenziale in varie parti del mondo. Utilizzano metodologie di degradazione tramite fermentazione microbica per contribuire alla riduzione dei rifiuti alimentari su larga scala.',
  products: mapItemsToProducts(items, 'capacità di elaborazione giornaliera'),
  productImageAspectRadioClassName: 'aspect-w-9! aspect-h-6!',
  productsContainerClassName: 'gap-y-16 sm:gap-y-10',
}

export function IndustrialEquipmentsPageIt() {
  const componentConfigProps: IIndustrialEquipmentsProps = {
    heroConfigProps,
    equipmentPreviewConfigProps,
    equipmentListConfigProps,
  }

  return (
    <>
      <h1 className="sr-only">GEME Industrial Equipments</h1>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={industrialEquipmentsJsonLd()}
        key="industrial-equipments-jsonld"
      />
      <IndustrialEquipments {...componentConfigProps} />
    </>
  )
}
