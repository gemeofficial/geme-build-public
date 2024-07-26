import {
  IThreeColumnWithDescriptionProps,
  ThreeColumnWithDescription,
} from '../../../components/category-previews'

export default function OrganicWaste(props: IThreeColumnWithDescriptionProps) {
  return <ThreeColumnWithDescription {...props} greyBackground={false} />
}
