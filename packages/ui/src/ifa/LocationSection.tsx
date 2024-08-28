import Image from 'next/image'

export default function LocationSection() {
  return (
      <Image
        width={1920}
        height={1080}
        src="/assets/images/ifa/location.png"
        alt="Geme IFA Location"
        className='bg-[#fffbf8] w-full h-full object-contain'
      />
  )
}
