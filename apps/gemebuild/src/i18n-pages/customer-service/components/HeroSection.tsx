import Image from 'next/image'
import { Button } from './Items'
import { ILinkComponent } from '../../../contexts/link-context'
interface Link {
  name: string
  type: 'link' | 'button'
  link: string
}

export default function HeroSection({
  PrefetchLink,
  coverImage,
  description,
  links,
  title,
}: {
  title: string
  coverImage: string
  description: string
  PrefetchLink: ILinkComponent
  links: Link[]
}) {
  return (
    <div className="overflow-hidden bg-[#01121C] prose-a:break-all relative">
      <Image
        width={1920}
        height={1080}
        priority
        src={coverImage}
        alt="customer service cover"
        className="w-full h-full object-cover"
      />
      <div className="w-full lg:absolute lg:top-[50%] lg:left-[50%] lg:-translate-x-[50%] grid grid-cols-1 items-center gap-y-10 gap-x-16 -mt-20 md:-mt-32 mb-4 md:mb-8">
        <div>
          <h2 className="text-2xl lg:text-4xl font-bold text-center tracking-tight text-white mb-5">
            {title}
          </h2>
          <p className="text-xl lg:text-2xl mt-4 mb-4 text-white text-center max-w-2xl mx-auto px-4">
            {description}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center px-4 pb-8">
            {links.map((link) => (
              <Button
                PrefetchLink={PrefetchLink}
                key={link.name}
                href={link.link}
                className="md:mx-2"
              >
                {link.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
