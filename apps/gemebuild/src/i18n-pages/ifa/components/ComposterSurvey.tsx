import clsx from 'clsx'
import { SectionContainer } from 'ui'
import { ILinkComponent } from '../../../contexts/link-context'

export interface IComposterSurveyProps {
  title: string
  desc: string
  buttonText: string
  PrefetchLink?: ILinkComponent
}
export function ComposterSurvey({
  buttonText,
  title,
  desc,
  PrefetchLink,
}: IComposterSurveyProps) {
  return (
    <div className="bg-v2311-text-yellow mb-20">
      <SectionContainer
        className="flex flex-col lg:flex-row gap-4 items-center justify-between"
        compact
      >
        <div className="md:text-center lg:text-left">
          <div className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-white font-bold font-poppins">
            {title}
          </div>
          <div className="lg:text-2xl text-white font-bold font-poppins mt-4">
            {desc}
          </div>
        </div>
        <a
          href="/ifa-survey-form"
          target="_blank"
          className={clsx(
            'relative flex items-center justify-between gap-4 rounded-3xl border border-transparent bg-v2311-bg-dark-green hover:bg-v2311-primary  ',
            'focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1 md:focus:ring-offset-2',
            'px-4 py-2 md:px-6 md:py-3 text-xs font-medium text-white shadow-sm md:text-base focus:outline-none',
            'mt-4',
            'bg-white !text-v2311-fg-dark-black hover:!bg-white hover:underline focus:!ring-white transition-all',
          )}
        >
          <span>{buttonText}</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={clsx('w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6')}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </SectionContainer>
    </div>
  )
}
