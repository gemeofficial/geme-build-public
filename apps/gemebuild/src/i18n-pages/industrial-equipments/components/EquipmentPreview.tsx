import SwiperGallery from './SwiperGallery'

const gallerys = Array.from(Array(23).keys()).reduce(
  (arr: any, item: number) => {
    if (item !== 6 && item !== 2 && item !== 3 && item !== 19) {
      return arr.concat({
        thumbnailURL: `/assets/images/industrial-equipments/devices/${item}.jpg`,
        width: 960,
        height: 720,
      })
    } else {
      return arr
    }
  },
  [],
)

export interface IEquipmentPreviewProps{
  title:string
}

function EquipmentPreview(props:IEquipmentPreviewProps) {
  return (
    <div className="bg-white">
      <div className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {props.title}
          </h2>
        </div>

        <div className="mt-6 flow-root">
          <div className="-my-2">
            <div className="relative box-content overflow-x-auto py-2 xl:overflow-visible">
              <SwiperGallery galleryID="equipement-preview" images={gallerys} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EquipmentPreview
