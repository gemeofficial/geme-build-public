'use client'

import { ReactNode } from 'react'
import { ProportionalSymbolMap } from '../map-charts'
import type { IProportionalSymbolMapProps } from '../map-charts'

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
      <div className="mx-auto max-w-2xl pt-16 px-4 lg:pt-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight v2311-font-h1 text-v2311-primary sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg v2311-font-body text-v2311-fg-black">
            {description}
          </p>
        </div>
        <div className="mt-6">
          <ProportionalSymbolMap {...proportionalSymbolMapProps} />
        </div>
      </div>
    </div>
  )
}

export default Footprints
export type { IFootprintsProps }
