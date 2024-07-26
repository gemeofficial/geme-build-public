import {
  AlternativeSideBySideWithImages,
  IAlternativeSideBySideWithImagesProps,
} from '../../../components/feature-sections'

export default function CurrentStatus(
  props: IAlternativeSideBySideWithImagesProps,
) {
  return <AlternativeSideBySideWithImages {...props} grayBackground={true} />
}
