import Image from 'next/image'

export type videoType =
  | 'mp4'
  | 'youtube'
  | 'tiktok'
  | 'facebook'
  | 'reels'
  | 'instagram'

export interface IVideosItemProps {
  type: videoType
  src: string
  coverImageUrl: string
  coverAlt: string
  buttonText: string
}

export default function VideosItem({ item }: { item: IVideosItemProps }) {
  return (
    <div className="w-[60vw] md:w-full h-[400px] xl:h-[512px] rounded-2xl overflow-hidden cursor-pointer relative group">
      <Image
        src={item.coverImageUrl}
        width={390}
        height={512}
        className="w-full h-full object-cover"
        alt={item.coverAlt}
      />
      <div className="absolute bottom-[12%] inset-x-6 flex justify-center group-hover:scale-105 transition-all duration-300">
        <div className="flex p-2 pr-4 items-center justify-center gap-x-2 bg-v2311-bg-button-white rounded-full">
          <button
            className="bg-v2311-bg-dark-green p-2 rounded-full"
            aria-label="Play video"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              aria-hidden="true"
            >
              <path
                d="M16.6742 12.8437L8.53688 18.022C7.87115 18.4456 7 17.9674 7 17.1783V6.82169C7 6.0326 7.87115 5.55439 8.53688 5.97803L16.6742 11.1564C17.2917 11.5493 17.2917 12.4507 16.6742 12.8437Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          <p className="text-v2311-text-primary v2311-button-large">
            {item.buttonText}
          </p>
        </div>
      </div>
    </div>
  )
}
