'use client'

import { ReactNode } from 'react'
import { ProportionalSymbolMap } from '../map-charts'
import type { IProportionalSymbolMapProps } from '../map-charts'
import { SectionDescription, SectionTitle } from 'ui'

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
      <div className="mx-auto max-w-2xl pt-8 px-4 lg:pt-14 sm:px-6 lg:max-w-7xl lg:px-8">
        <SectionTitle>{title}</SectionTitle>
        <SectionDescription className="mt-4">{description}</SectionDescription>

        <div className="mt-6">
          <ProportionalSymbolMap {...proportionalSymbolMapProps} />
        </div>
      </div>
    </div>
  )
}

export default Footprints
export type { IFootprintsProps }
