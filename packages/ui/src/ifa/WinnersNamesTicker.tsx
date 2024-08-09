import clsx from 'clsx'
import Ticker from 'react-ticker'

export interface IWinnersNamesTickerProps {
  text: string
  winnersNames: string[]
  className?: string
}

export function WinnersNamesTicker({
  text,
  className,
  winnersNames,
}: IWinnersNamesTickerProps) {
  return (
    <div className={clsx('bg-black/70 w-screen py-1', className)}>
      <Ticker mode="await" speed={10}>
        {({ index }) => (
          <div className="text-white text-nowrap">
            {text}: {winnersNames.join(' , ')}
          </div>
        )}
      </Ticker>
    </div>
  )
}
