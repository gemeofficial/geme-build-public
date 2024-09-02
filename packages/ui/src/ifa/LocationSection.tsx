import Image from 'next/image'
import ImageZoomViewer from '../client-components/ImageZoomViewer'

export default function LocationSection() {
  return (
    <ImageZoomViewer>
      <Image
        width={1920}
        height={1080}
        src="/assets/images/ifa/location.png"
        alt="Geme In IFA Location Description"
        className="bg-white w-full h-full object-contain"
      />

      <div className="flex flex-col xl:flex-row items-stretch">
        <Image
          width={1080}
          height={720}
          src="/assets/images/ifa/location1.png"
          alt="Location map of the venue 1"
          className="w-full h-full max-h-[600px] object-contain flex-1"
        />

        <Image
          width={1080}
          height={720}
          src="/assets/images/ifa/location2.png"
          alt="Location map of the venue 2"
          className="w-full h-full max-h-[600px] object-contain flex-1"
        />
      </div>
    </ImageZoomViewer>
  )
}
