import {
  AlternativeSideBySideWithImages,
  IAlternativeSideBySideWithImagesProps,
} from '../../../components/feature-sections'

export interface IGEMESolarPoweredTrashCompactorProps
  extends IAlternativeSideBySideWithImagesProps {}

export default function GEMESolarPoweredTrashCompactor(
  props: IGEMESolarPoweredTrashCompactorProps,
) {
  return (
    <AlternativeSideBySideWithImages {...props} startWithImageText={true} />
  )
}
