import {
  IThreeColumnWithDescriptionProps,
  ThreeColumnWithDescription,
} from '../../../components/category-previews'

export interface IGeemDailyUsageProps
  extends IThreeColumnWithDescriptionProps {}

export default function GeemDailyUsage(props: IGeemDailyUsageProps) {
  return <ThreeColumnWithDescription {...props} greyBackground={true} />
}
