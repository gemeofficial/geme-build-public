import ProductOverviewSplitWithImage from './ProductOverviewSplitWithImage'
import EquipmentFeatures, { IEquipmentFeaturesProps } from './EquipmentFeatures'
import type { IProductOverviewSplitWithImageProps } from './ProductOverviewSplitWithImage'
import { TEquipment } from '../../../helpers/industrial-equipments/data/data-en'
import clsx from 'clsx'
// import Link from '../../../components/link'
import Link from 'next/link'

export interface IEquipmentViewProps {
  equipment: TEquipment
  equipmentFeaturesProps: IEquipmentFeaturesProps
  productOverviewSplitWithImageOtherProps: IProductOverviewSplitWithImageOtherProps
}

export interface IProductOverviewSplitWithImageOtherProps {
  firstBreadcrumbsName: string
  btn1Label: string
  btn2Label: string
}

function equipmentToViewProps(
  equipment: TEquipment,
  otherContent: IProductOverviewSplitWithImageOtherProps
): IProductOverviewSplitWithImageProps {
  return {
    product: {
      name: equipment.name,
      description: (
        <>
          <p>{equipment.description}</p>
          <p>{equipment.subDesc}</p>
        </>
      ),
      imageSrc: equipment.imageSrc,
      imageAlt: equipment.imageAlt,
    },
    breadcrumbs: [
      {
        id: 'industrial-equipments',
        name: otherContent.firstBreadcrumbsName,
        href: '/industrial-equipments',
      },
      {
        id: 'equipment',
        name: equipment.name,
        href: `/industrial-equipments/${equipment.id}`,
      },
    ],
    productImageAspectRadioClassName: 'aspect-w-9 aspect-h-6',

    ctaSection: (
      <>
        <div className="mt-10">
          <div className="flex gap-8">
            <div className="shadow rounded-md">
              <a
                target="_blank"
                href="https://wa.me/message/JTBS65IY46ACM1"
                className={clsx(
                  'flex w-full items-center justify-center rounded-md border border-transparent',
                  'py-3 px-8 text-base font-medium',
                  'bg-emerald-600  text-white hover:bg-emerald-700',
                  'focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-50'
                )}
              >
                {otherContent.btn1Label}
              </a>
            </div>
            <div className="shadow rounded-md">
              <Link
                href="/contact"
                passHref
                className={clsx(
                  'flex w-full items-center justify-center rounded-md border border-transparent',
                  'py-3 px-8 text-base font-medium',
                  'bg-white text-emerald-600 hover:bg-gray-50',
                  'focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-50'
                )}
              >
                {otherContent.btn2Label}
              </Link>
            </div>
          </div>
        </div>
      </>
    ),
  }
}

function EquipmentView(props: IEquipmentViewProps) {
  const {
    equipment,
    productOverviewSplitWithImageOtherProps,
    equipmentFeaturesProps,
  } = props

  const productOverviewSplitWithImageProps = equipmentToViewProps(
    equipment,
    productOverviewSplitWithImageOtherProps
  )

  return (
    <>
      <ProductOverviewSplitWithImage {...productOverviewSplitWithImageProps} />
      <EquipmentFeatures {...equipmentFeaturesProps} />
    </>
  )
}

export default EquipmentView
