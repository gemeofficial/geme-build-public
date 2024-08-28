import UnderConstruction, {
  IUnderConstructionProps,
} from './components/UnderConstruction'
import { IBrandHqPageProps } from './en'

const props: IUnderConstructionProps = {
  title: 'Das GEME Marken-Center ist im Aufbau',
  description: (
    <>
      In der Zwischenzeit besuchen Sie bitte das Medienkit. <br /> Oder Sie
      können unsere Über-uns-Seite besuchen, um das Material zu finden.
    </>
  ),
  mediaKitButtonText: 'Medienkit',
  aboutButtonText: 'Über uns',
}

export function BrandHqPageDe({ PrefetchLink }: IBrandHqPageProps) {
  return <UnderConstruction {...props} PrefetchLink={PrefetchLink} />
}
