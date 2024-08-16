import clsx from 'clsx'
import { SectionTitle } from '../ui-components'
import DefaultLink from 'next/link'
import { ILinkComponent } from '../../../../apps/gemebuild/src/contexts/link-context'
import ImageZoomViewer from '../client-components/ImageZoomViewer'

export interface IWinnersNamesTickerItem {
  name: string
  date: string
  imageUrl: string
}

export interface IWinnersNamesTickerProps {
  title: string
  winnersNames: IWinnersNamesTickerItem[]
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
          <ImageZoomViewer key={item.name + index}>
            <li className="flex items-center justify-between p-2 hover:bg-gray-100 relative overflow-hidden">
              <span>{item.name}</span>
              <span className="text-xs xl:text-sm text-[#999]">
                {item.date}
              </span>
              <picture className="absolute inset-0 opacity-0">
                <img
                  src={item.imageUrl}
                  alt={item.name + 'Winning screenshot'}
                  className="w-full h-full"
                />
              </picture>
            </li>
          </ImageZoomViewer>
        ))}
      </ul>
      {false && (
        <Link
          className="text-sm font-semibold leading-6 text-emerald-600 flex items-center justify-end"
          href="#"
        >
          {linkText}{' '}
          <span aria-hidden="true" className="ml-2 translate-y-[1px]">
            →
          </span>
        </Link>
      )}
    </div>
  )
}
