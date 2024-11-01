import { ReactNode } from 'react'
import { IconCycleArrow } from './icons'

interface IActionSection1Props {
  title?: ReactNode
  description?: ReactNode
  linkText?: ReactNode
  linkUrl?: string
}

const actionSection1Props: IActionSection1Props = {
  title: 'Join the movement',
  description: (
    <>A new approach to the world&apos;s waste problem begins with each of us</>
  ),
  linkText: 'GET GEME',
  linkUrl: '/product/geme',
}

function ActionSection1({
  title,
  description,
  linkText,
  linkUrl,
}: IActionSection1Props) {
  return (
    <div className="bg-v2311-bg-dark-green ">
      <section className=" px-4 md:px-8 py-8 mx-auto md:py-16 xl:py-[80px] xl:max-w-7xl flex flex-col items-center text-center">
        {title && <h2 className="v2311-title-h2 text-white">{title}</h2>}
        {description && (
          <p className="v2311-body-large text-white mt-4 md:mt-8">
            {description}
          </p>
        )}
        {linkText && linkUrl && (
          <a
            className=" v2311-title-h3 text-white w-full xl:w-auto flex items-center justify-center mt-4 md:mt-8 border-solid border-2 border-white rounded-xl py-1 md:py-2 xl:px-4"
            href={linkUrl}
          >
            {linkText}
            <IconCycleArrow className="inline-block ml-2 md:ml-4 w-5 md:w-10 xl:w-12 h-5 md:h-10 xl:h-12" />
          </a>
        )}
      </section>
    </div>
  )
}

const EXAMPLE_ACTION_SECTION_PROPS = { actionSection1Props }

export { ActionSection1, EXAMPLE_ACTION_SECTION_PROPS }
export type { IActionSection1Props }
