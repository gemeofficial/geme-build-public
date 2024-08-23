import { ICompareSectionProps, LocaleType } from 'ui'
import CompareSection from './compare-section/CompareSection'
export interface IPdpCompareProps {
  compareSectionProps: ICompareSectionProps
  locale: LocaleType
}
export default function Compare({
  compareSectionProps,
  locale,
}: IPdpCompareProps) {
  return <CompareSection locale={locale} {...compareSectionProps} />
}
