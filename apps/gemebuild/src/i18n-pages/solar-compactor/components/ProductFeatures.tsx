import classNames from 'ui/src/lib/classNames'
import {
  IWithFeatureGridListProps,
  WithFeatureGridList,
} from '../../../components/feature-sections'

export function featureIcon(num: number) {
  const icon = ({ className, ...props }: React.ComponentProps<'img'>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/assets/images/solar-compactor/s4-${num}.png`}
      alt=""
      {...props}
      className={classNames(
        className != null ? className : '',
        ' object-contain ',
      )}
    />
  )
  icon.displayName = `feature-icon-solar-compactor-${num}`
  return icon
}

export default function ProductFeatures(props: IWithFeatureGridListProps) {
  return <WithFeatureGridList {...props} grayBackground={true} />
}
