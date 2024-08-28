import { ILinkComponent } from '../../contexts/link-context'
import UnderConstruction, {
  IUnderConstructionProps,
} from './components/UnderConstruction'

const props: IUnderConstructionProps = {
  title: 'The GEME brand center is under construction',
  description: (
    <>
      In the meantime, please visit the media kit. <br /> Or you can check out
      our about page to find the material.
    </>
  ),
  mediaKitButtonText: 'Media Kit',
  aboutButtonText: 'About',
}

export interface IBrandHqPageProps {
  PrefetchLink?: ILinkComponent
}

export function BrandHqPageEn({ PrefetchLink }: IBrandHqPageProps) {
  return <UnderConstruction {...props} PrefetchLink={PrefetchLink} />
}
