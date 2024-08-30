import { ILinkComponent } from '../../../contexts/link-context'
import LocationsCardSection, {
  ILocationsCardSectionProps,
} from './components/LocationsCardSection'

// 美国地区
const usSection: ILocationsCardSectionProps = {
  title: 'US Cities',
  cardList: [
    {
      title: 'Austin, Texas',
      imageUrl: '/assets/images/compost-recycle/citys/Austin_Texas.jpg',
    },
    {
      title: 'Cape Cod, Massachusetts',
      imageUrl:
        '/assets/images/compost-recycle/citys/Cape_Cod_Massachusetts.jpg',
    },
    {
      title: 'Maine',
      imageUrl: '/assets/images/compost-recycle/citys/Maine.jpg',
    },
    {
      title: 'Washington, D.C.',
      imageUrl: '/assets/images/compost-recycle/citys/Washington.jpg',
    },
    {
      title: 'Renton, Washington',
      imageUrl: '/assets/images/compost-recycle/citys/Renton_Washington.jpg',
    },
    {
      title: 'Spokane, Washington',
      imageUrl: '/assets/images/compost-recycle/citys/Spokane_Washington.jpg',
    },
    {
      title: 'Tacoma, Washington',
      imageUrl: '/assets/images/compost-recycle/citys/Tacoma_Washington.jpg',
    },
    {
      title: 'Vancouver, Washington',
      imageUrl: '/assets/images/compost-recycle/citys/Vancouver_Washington.jpg',
    },
    {
      title: 'Aurora, Colorado',
      imageUrl: '/assets/images/compost-recycle/citys/Aurora_Colorado.jpg',
    },
    {
      title: 'Arvada, Colorado',
      imageUrl: '/assets/images/compost-recycle/citys/Arvada_Colorado.jpg',
    },
    {
      title: 'Boulder, Colorado',
      imageUrl: '/assets/images/compost-recycle/citys/Boulder_Colorado.jpg',
    },
    {
      title: 'Denver, Colorado',
      imageUrl: '/assets/images/compost-recycle/citys/Denver_Colorado.jpg',
    },
    {
      title: 'Lakewood, Colorado',
      imageUrl: '/assets/images/compost-recycle/citys/Lakewood_Colorado.jpg',
    },
    {
      title: 'Longmont, Colorado',
      imageUrl: '/assets/images/compost-recycle/citys/Longmont_Colorado.jpg',
    },
    {
      title: 'Honolulu, Hawaii',
      imageUrl: '/assets/images/compost-recycle/citys/Honolulu_Hawaii.jpg',
    },
    {
      title: 'Phoenix, Arizona',
      imageUrl: '/assets/images/compost-recycle/citys/Phoenix_Arizona.jpg',
    },
  ],

  locale: 'en',
}

// 欧洲地区
const eurSection: ILocationsCardSectionProps = {
  title: 'European Region',
  cardList: [
    {
      title: 'Paris',
      imageUrl: '/assets/images/compost-recycle/citys/Paris.jpg',
    },
    {
      title: 'London',
      imageUrl: '/assets/images/compost-recycle/citys/London.jpg',
    },
    {
      title: 'Rome',
      imageUrl: '/assets/images/compost-recycle/citys/Rome.jpg',
    },
    {
      title: 'Barcelona',
      imageUrl: '/assets/images/compost-recycle/citys/Barcelona.jpg',
    },
    {
      title: 'Berlin',
      imageUrl: '/assets/images/compost-recycle/citys/Berlin.jpg',
    },
    {
      title: 'Brussels',
      imageUrl: '/assets/images/compost-recycle/citys/Brussels.jpg',
    },
  ],
  locale: 'en',
}

// 加拿大地区
const caSection: ILocationsCardSectionProps = {
  title: 'BC Locations',
  cardList: [
    {
      title: 'Kelowna - LIVE',
      imageUrl: '/assets/images/compost-recycle/citys/Kelowna-LIVE.jpg',
    },
    {
      title: 'Osoyoos',
      imageUrl: '/assets/images/compost-recycle/citys/Osoyoos.jpg',
    },
    {
      title: 'Pentiction',
      imageUrl: '/assets/images/compost-recycle/citys/Pentiction.jpg',
    },
    {
      title: 'Whistler',
      imageUrl: '/assets/images/compost-recycle/citys/Whistler.jpg',
    },
  ],
  locale: 'en',
}

export interface ICompostRecycleLocationsPageProps {
  PrefetchLink?: ILinkComponent
}

export function CompostRecycleLocationsPageEn({
  PrefetchLink,
}: ICompostRecycleLocationsPageProps) {
  return (
    <>
      <LocationsCardSection PrefetchLink={PrefetchLink} {...usSection} />
      <LocationsCardSection PrefetchLink={PrefetchLink} {...eurSection} />
      <LocationsCardSection PrefetchLink={PrefetchLink} {...caSection} />
    </>
  )
}
