import clsx from 'clsx'

export default function Button({
  text,
  href,
  className,
  iconClassName,
}: {
  text: string
  href: string
  className?: string
  iconClassName?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      className={clsx(
        'relative flex items-center justify-between gap-4 rounded-3xl border border-transparent bg-v2311-bg-dark-green hover:bg-v2311-primary  ',
        'focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1 md:focus:ring-offset-2',
        'px-4 py-2 md:px-6 md:py-3 text-xs font-medium text-white shadow-sm md:text-base focus:outline-none',
        "mt-4",
        className,
      )}
    >
      <span>{text}</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={clsx('w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6', iconClassName)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
      </svg>
    </a>
  )
}
