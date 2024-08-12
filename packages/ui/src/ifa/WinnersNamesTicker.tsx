import clsx from 'clsx'

export interface IWinnersNamesTickerProps {
  title: string
  winnersNames: string[]
  className?: string
}

export function WinnersNamesTicker({
  title,
  className,
  winnersNames,
}: IWinnersNamesTickerProps) {
  return (
    <div className={clsx('', className)}>
      <h3 className="">{title}</h3>
      <ul>
        {winnersNames.map((item, index) => (
          <li key={item + index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
