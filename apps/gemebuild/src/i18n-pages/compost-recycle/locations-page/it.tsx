import LocationsCardSection from './components/LocationsCardSection'
import { ICompostRecycleLocationsPageProps } from './en'

export function CompostRecycleLocationsPageIt({
  PrefetchLink,
  compostRecycleCitys,
}: ICompostRecycleLocationsPageProps) {
  return (
    <>
      {compostRecycleCitys.map((item, index) => (
        <LocationsCardSection
          key={index}
          PrefetchLink={PrefetchLink}
          locale="it"
          {...item}
        />
      ))}
    </>
  )
}
