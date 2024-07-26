import {
  AlternativeSideBySideWithImages,
  IAlternativeSideBySideWithImagesProps,
} from '../../../components/feature-sections'

export default function SoilImprovement(
  props: IAlternativeSideBySideWithImagesProps,
) {
  return <AlternativeSideBySideWithImages {...props} grayBackground={true} />
}
