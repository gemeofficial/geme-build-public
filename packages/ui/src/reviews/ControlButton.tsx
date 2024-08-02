import clsx from 'clsx'

export function PrevButton({ className }: { className?: string }) {
  return (
    <button
      aria-label="button.swiper-button-prev"
      className={clsx(
        'swiper-button-prev group flex justify-center items-center border border-solid ',
        'border-v2311-bg-dark-green !w-10 !h-10 md:!w-14 md:!h-14 xl:!w-16 xl:!h-16 ',
        'transition-all duration-500 rounded-full hover:bg-v2311-bg-dark-green',
        className,
      )}
    >
      <svg
        className="!h-4 !w-4 md:!h-6 md:!w-6 text-v2311-bg-dark-green group-hover:text-white transition-all duration-500"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

export function NextButton({ className }: { className?: string }) {
  return (
    <button
      aria-label="button.swiper-button-next"
      className={clsx(
        'swiper-button-next group flex justify-center items-center border border-solid',
        'border-v2311-bg-dark-green !w-10 !h-10 md:!w-14 md:!h-14 xl:!w-16 xl:!h-16 ',
        'transition-all duration-500 rounded-full hover:bg-v2311-bg-dark-green',
        className,
      )}
    >
      <svg
        className="!h-4 !w-4 md:!h-6 md:!w-6 text-v2311-bg-dark-green group-hover:text-white transition-all duration-500"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
