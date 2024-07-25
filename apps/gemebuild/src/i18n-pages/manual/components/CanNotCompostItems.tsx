import {
  WithFeatureGridList,
  IWithFeatureGridListProps,
} from '@containers/common/FeatureSections'
import NoSymbolIcon from '@heroicons/react/24/outline/NoSymbolIcon'
import { manualCanNotCompostItemsMessages } from '../messages'
import { createIntlFor } from '@app/common/create-intl'
import { useLocale } from 'next-intl'

const noSymbolIcon = () => {
  const icon = ({}: React.ComponentProps<'img'>) => (
    <NoSymbolIcon
      className="absolute h-6 w-6 text-orange-600"
      aria-hidden="true"
    />
  )
  icon.displayName = 'feature-icon-no-symbol'
  return icon
}

const asyncProps: (
  locale: string,
) => Promise<IWithFeatureGridListProps> = async (locale) => {
  const { formatMessage } = await createIntlFor(locale)
  return {
    title: formatMessage(manualCanNotCompostItemsMessages.title),
    description: formatMessage(manualCanNotCompostItemsMessages.description),
    features: [
      {
        name: formatMessage(manualCanNotCompostItemsMessages.feature1Name),
        description: formatMessage(
          manualCanNotCompostItemsMessages.feature1Description,
        ),
        icon: noSymbolIcon(),
      },
      {
        name: formatMessage(manualCanNotCompostItemsMessages.feature2Name),
        description: formatMessage(
          manualCanNotCompostItemsMessages.feature2Description,
        ),
        icon: noSymbolIcon(),
      },
      {
        name: formatMessage(manualCanNotCompostItemsMessages.feature3Name),
        description: formatMessage(
          manualCanNotCompostItemsMessages.feature3Description,
        ),
        icon: noSymbolIcon(),
      },
      {
        name: formatMessage(manualCanNotCompostItemsMessages.feature4Name),
        description: formatMessage(
          manualCanNotCompostItemsMessages.feature4Description,
        ),
        icon: noSymbolIcon(),
      },
      {
        name: formatMessage(manualCanNotCompostItemsMessages.feature5Name),
        description: formatMessage(
          manualCanNotCompostItemsMessages.feature5Description,
        ),
        icon: noSymbolIcon(),
      },
      {
        name: formatMessage(manualCanNotCompostItemsMessages.feature6Name),
        description: formatMessage(
          manualCanNotCompostItemsMessages.feature6Description,
        ),
        icon: noSymbolIcon(),
      },
      {
        name: formatMessage(manualCanNotCompostItemsMessages.feature7Name),
        description: formatMessage(
          manualCanNotCompostItemsMessages.feature7Description,
        ),
        icon: noSymbolIcon(),
      },
      {
        name: formatMessage(manualCanNotCompostItemsMessages.feature8Name),
        description: formatMessage(
          manualCanNotCompostItemsMessages.feature8Description,
        ),
        icon: noSymbolIcon(),
      },
    ],
  }
}

async function CanNotCompostItems() {
  const locale = useLocale()
  const props = await asyncProps(locale)
  return <WithFeatureGridList {...props} grayBackground={false} />
}

export default CanNotCompostItems
