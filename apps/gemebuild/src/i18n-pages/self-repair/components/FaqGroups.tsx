import {
  FaqOffsetWithSupportingText,
  FaqOffsetWithSupportingTextNoopContainer,
  IFaqOffsetWithSupportingTextProps,
} from './FaqOffsetWithSupportingText'

interface IFaqGroupsProp {
  groups: IFaqOffsetWithSupportingTextProps[]
}

function FaqGroups(props: IFaqGroupsProp) {
  return (
    <div>
      {props.groups.map((group) => {
        return (
          <div
            key={group.title}
            className="bg-white odd:bg-gray-50 mx-auto max-w-7xl px-6 py-16 last:pb-24 lg:px-8 "
          >
            <FaqOffsetWithSupportingText
              {...group}
              Container={FaqOffsetWithSupportingTextNoopContainer}
            />
          </div>
        )
      })}
    </div>
  )
}

export { FaqGroups }

export type { IFaqGroupsProp }
