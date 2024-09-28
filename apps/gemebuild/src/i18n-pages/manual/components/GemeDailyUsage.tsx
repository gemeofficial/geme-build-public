import {
  IThreeColumnWithDescriptionProps,
  ThreeColumnWithDescription,
} from '../../../components/category-previews'

export interface IGemeDailyUsageProps
  extends IThreeColumnWithDescriptionProps {}

export default function GemeDailyUsage(props: IGemeDailyUsageProps) {
  return <ThreeColumnWithDescription {...props} greyBackground={true} />
}
