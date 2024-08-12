import clsx from 'clsx'
import { SectionTitle } from '../ui-components'
import DefaultLink from 'next/link'
import { ILinkComponent } from '../../../../apps/gemebuild/src/contexts/link-context'

export interface IWinnersNamesTickerProps {
  title: string
  winnersNames: string[]
  linkText: string
  className?: string
  PrefetchLink?: ILinkComponent
}

export function WinnersNamesTicker({
  title,
  linkText,
  className,
  winnersNames,
  PrefetchLink,
}: IWinnersNamesTickerProps) {
  const Link = PrefetchLink ? PrefetchLink : DefaultLink

  return (
    <div className={clsx('', className)}>
      <SectionTitle className="!text-left">{title}</SectionTitle>
      <ul className="mt-4">
        {winnersNames.map((item, index) => (
          <li
            key={item + index}
            className="flex items-center justify-between p-2 hover:bg-gray-100"
          >
            <span>{item}</span>
            <span className="text-xs xl:text-sm text-[#999]">
              {'2024-08-10'}
            </span>
          </li>
        ))}
      </ul>
      <Link
        className="text-sm font-semibold leading-6 text-emerald-600 flex items-center justify-end"
        href="#"
      >
        {linkText}{' '}
        <span aria-hidden="true" className="ml-2 translate-y-[1px]">
          →
        </span>
      </Link>
    </div>
  )
}
