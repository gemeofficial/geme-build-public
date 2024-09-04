import LocationsCardSection from './components/LocationsCardSection'
import { ICompostRecycleLocationsPageProps } from './en'

export function CompostRecycleLocationsPageFr({
  PrefetchLink,
  compostRecycleCitys,
}: ICompostRecycleLocationsPageProps) {
  return (
    <>
      {compostRecycleCitys.map((item, index) => (
        <LocationsCardSection
          key={index}
          PrefetchLink={PrefetchLink}
          locale="fr"
          {...item}
        />
      ))}
    </>
  )
}
