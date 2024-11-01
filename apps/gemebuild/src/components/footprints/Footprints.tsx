'use client'

import { ReactNode } from 'react'
import { ProportionalSymbolMap } from '../map-charts'
import type { IProportionalSymbolMapProps } from '../map-charts'
import { SectionContainer, SectionDescription, SectionTitle } from 'ui'

interface IFootprintsProps {
  grayBackground?: boolean
  title: ReactNode
  description: ReactNode
  proportionalSymbolMapProps: IProportionalSymbolMapProps
}

function Footprints({
  grayBackground = true,
  title,
  description,
  proportionalSymbolMapProps,
}: IFootprintsProps) {
  return (
    <div className={grayBackground ? 'bg-gray-50' : 'bg-white'}>
      <SectionContainer noBottomPadding>
        <SectionTitle>{title}</SectionTitle>
        <SectionDescription className="mt-4 md:mt-6 xl:mt-8">
          {description}
        </SectionDescription>

        <div className="mt-6">
          <ProportionalSymbolMap {...proportionalSymbolMapProps} />
        </div>
      </SectionContainer>
    </div>
  )
}

export default Footprints
export type { IFootprintsProps }
