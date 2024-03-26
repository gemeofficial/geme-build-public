import { IEquipmentToFeaturesPropsFnPayload } from "../../../i18n-pages/industrial-equipments-id/components/EquipmentFeatures"
import { IProductListsWithTallImagesProps } from "../../../i18n-pages/industrial-equipments/components/EquipmentList"
import { TEquipment } from "../data/data-en"
import { IProductFeaturesWithTabsProps } from "../../../i18n-pages/industrial-equipments-id/components/ProductFeaturesWithTabs"

export function equipmentDescription(equipment: TEquipment): string {
  return `${equipment.description}. ${equipment.subDesc}`
}

export function equipmentCanonicalUrl(equipment: TEquipment): string {
  return `https://www.geme.bio${equipmentPath(equipment)}`
}

export function equipmentPath(equipment: TEquipment): string {
  return `/industrial-equipments/${equipment.id}`
}

export function findEquipmentById(id: string,items:TEquipment[]): TEquipment | null {
  return items.find((item) => item.id === id) ?? null
}

// 将设备的Item转化为产品格式的数据结构
export function mapItemsToProducts(
  equipments: TEquipment[],
  desc: string
): IProductListsWithTallImagesProps['products'] {
  return equipments.map((e) => ({
    id: e.id,
    name: e.name,
    description: `${e.capacity} ${desc}`,
    imageSrc: e.whiteBgImageSrc,
    imageAlt: e.imageAlt,
    imageWidth: 800,
    imageHeight: 520,
    href: `/industrial-equipments/${e.id}`,
  }))
}

// 生成设备详情数据函数
export function equipmentToFeaturesProps({
  tabs,
  equipment,
  tabNames,
  tabHeadingAndDescription
}:IEquipmentToFeaturesPropsFnPayload): IProductFeaturesWithTabsProps['tabs'] {
  return tabs.reduce((acc, tab) => {
    const values = equipment?.[tab]

    if (values == null) {
      return acc
    }

    acc?.push({
      name: tabNames[tab],
      heading: tabHeadingAndDescription[tab].heading,
      description:
        tab === 'baiscParams'
          ? equipment.parametersDescription ||
            tabHeadingAndDescription[tab].description
          : tabHeadingAndDescription[tab].description,
      features: (values ?? []).map(({ name, value }) => ({
        name,
        description: value,
      })),
    })

    return acc
  }, [] as IProductFeaturesWithTabsProps['tabs'])
}