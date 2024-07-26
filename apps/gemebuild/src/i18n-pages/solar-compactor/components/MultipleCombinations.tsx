import {
  IThreeColumnWithDescriptionProps,
  ThreeColumnWithDescription,
} from '../../../components/category-previews'

export interface IMultipleCombinationsProps
  extends IThreeColumnWithDescriptionProps {}

export default function MultipleCombinations(
  props: IMultipleCombinationsProps,
) {
  return <ThreeColumnWithDescription {...props} greyBackground={true} />
}
