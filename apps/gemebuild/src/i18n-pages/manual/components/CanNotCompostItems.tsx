import NoSymbolIcon from '@heroicons/react/24/outline/NoSymbolIcon'
import {
  IWithFeatureGridListProps,
  WithFeatureGridList,
} from '../../../components/feature-sections'

export const noSymbolIcon = () => {
  const icon = ({}: React.ComponentProps<'img'>) => (
    <NoSymbolIcon
      className="absolute h-6 w-6 text-orange-600"
      aria-hidden="true"
    />
  )
  icon.displayName = 'feature-icon-no-symbol'
  return icon
}

export interface ICanNotCompostItemsProps extends IWithFeatureGridListProps {}

export default function CanNotCompostItems(props: ICanNotCompostItemsProps) {
  return <WithFeatureGridList {...props} grayBackground={false} />
}
