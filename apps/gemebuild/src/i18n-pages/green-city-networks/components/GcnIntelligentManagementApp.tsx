import Image from 'next/image'
import {
  AlternativeSideBySideWithImages,
  IAlternativeSideBySideWithImagesProps,
} from '../../../components/feature-sections'

export default function GcnIntelligentManagementApp(
  props: IAlternativeSideBySideWithImagesProps,
) {
  return <AlternativeSideBySideWithImages {...props} grayBackground={false} />
}
