import UnderConstruction, {
  IUnderConstructionProps,
} from './components/UnderConstruction'
import { IBrandHqPageProps } from './en'

const props: IUnderConstructionProps = {
  title: 'Le centre de marque GEME est en construction',
  description: (
    <>
      En attendant, veuillez visiter le kit média. <br /> Ou vous pouvez
      consulter notre page à propos pour trouver les documents.
    </>
  ),
  mediaKitButtonText: 'Kit Média',
  aboutButtonText: 'À propos',
}


export function BrandHqPageFr({ PrefetchLink }: IBrandHqPageProps) {
  return <UnderConstruction {...props} PrefetchLink={PrefetchLink} />
}
