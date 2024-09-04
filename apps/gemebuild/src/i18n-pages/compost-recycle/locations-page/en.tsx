import { ILinkComponent } from '../../../contexts/link-context'
import LocationsCardSection, {
  ILocationsCardSectionProps,
} from './components/LocationsCardSection'

export interface ICompostRecycleLocationsPageProps {
  PrefetchLink?: ILinkComponent
  compostRecycleCitys: ILocationsCardSectionProps[]
}

export function CompostRecycleLocationsPageEn({
  PrefetchLink,
  compostRecycleCitys,
}: ICompostRecycleLocationsPageProps) {
  return (
    <>
      {compostRecycleCitys.map((item, index) => (
        <LocationsCardSection
          key={index}
          PrefetchLink={PrefetchLink}
          locale="en"
          {...item}
        />
      ))}
    </>
  )
}
