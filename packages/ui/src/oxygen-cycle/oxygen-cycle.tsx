import { ReactNode, Ref } from 'react'
import { SvgOxygen, SvgOxygenCycleProgress } from '../pdp-intro-svgs'
import './styles.css'
import { SectionTitle } from '../ui-components'

interface IOxygenCycleProps {
  title?: ReactNode
  progresses?: {
    minProgress: number
    content?: ReactNode
  }[]
}

const exampleOxygenCycleProps: IOxygenCycleProps = {
  title: 'Necessary Steps for Real Composting Process',
  progresses: [
    {
      minProgress: 15,
      content: (
        <>
          <SvgOxygen className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body md:v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Plenty of oxygen Step 1 O2
          </h3>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            How to get the right recipe? By giving air to microbes! First, mix
            the organic material with a carbon source, such as wood chips. Then
            they are arranged and worked mechanically, allowing air to circulate
            and nature to work.
          </p>
        </>
      ),
    },
    {
      minProgress: 48,
      content: (
        <>
          <SvgOxygen className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body md:v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Plenty of oxygen Step 2 water
          </h3>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            How to get the right recipe? By giving air to microbes! First, mix
            the organic material with a carbon source, such as wood chips. Then
            they are arranged and worked mechanically, allowing air to circulate
            and nature to work.
          </p>
        </>
      ),
    },
    {
      minProgress: 78,
      content: (
        <>
          <SvgOxygen className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body md:v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Plenty of oxygen Step 3 gabage
          </h3>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            How to get the right recipe? By giving air to microbes! First, mix
            the organic material with a carbon source, such as wood chips. Then
            they are arranged and worked mechanically, allowing air to circulate
            and nature to work.
          </p>
        </>
      ),
    },
    {
      minProgress: 100,
      content: (
        <>
          <SvgOxygen className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body md:v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Plenty of oxygen 4 DONE!
          </h3>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            How to get the right recipe? By giving air to microbes! First, mix
            the organic material with a carbon source, such as wood chips. Then
            they are arranged and worked mechanically, allowing air to circulate
            and nature to work.
          </p>
        </>
      ),
    },
  ],
}

function OxygenCycle(
  {
    title,
    progresses,
    progress: curProgressValue,
  }: IOxygenCycleProps & {
    progress: number
  },
  ref: Ref<HTMLDivElement>,
) {
  const curProgressData = progresses?.find(
    (p) => curProgressValue <= p.minProgress,
  )

  return (
    <div ref={ref} className="px-4 md:px-8 lg:max-w-7xl lg:mx-auto lg:py-20 ">
      {title && (
        <SectionTitle className="!text-center ">
          {title}
        </SectionTitle>
      )}
      <div className=" mt-8 md:mt-16 lg:max-w-3xl lg:mx-auto relative ">
        <div id="svg-oxygen-cycle-progress" className="px-4 md:px-12 mx-auto ">
          <SvgOxygenCycleProgress progress={curProgressValue} />
        </div>
        {curProgressData?.content != null && (
          <div
            id="oxygen-cycle-content-box"
            className="absolute top-0 bottom-0 flex flex-col items-center px-20 md:px-44 lg:px-48 mt-10 md:mt-16 lg:mt-20 mx-auto"
          >
            {curProgressData.content}
          </div>
        )}
      </div>
    </div>
  )
}

export { exampleOxygenCycleProps, OxygenCycle, type IOxygenCycleProps }
