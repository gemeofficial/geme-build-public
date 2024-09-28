/* eslint-disable react/no-unescaped-entities */
import UnderConstruction, {
  IUnderConstructionProps,
} from './components/UnderConstruction'
import { IBrandHqPageProps } from './en'

const props: IUnderConstructionProps = {
  title: 'Il centro del marchio GEME è in costruzione',
  description: (
    <>
      Nel frattempo, visita il kit media. <br /> Oppure puoi visitare la nostra
      pagina "Chi siamo" per trovare il materiale.
    </>
  ),
  mediaKitButtonText: 'Kit Media',
  aboutButtonText: 'Chi siamo',
}

export function BrandHqPageIt({ PrefetchLink }: IBrandHqPageProps) {
  return <UnderConstruction {...props} PrefetchLink={PrefetchLink} />
}
