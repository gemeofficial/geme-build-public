import React, { useEffect, useState } from 'react'
import { csv } from 'd3-fetch'
import { scaleLinear } from 'd3-scale'
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Sphere,
} from 'react-simple-maps'
import {
  COLORS_GRAY_300,
  COLORS_EMERALD_50,
  COLORS_EMERALD_600,
} from './constants'

// source: https://www.react-simple-maps.io/world.json
const GEO_URL = '/map-charts/world-countries.json'
// source: https://codesandbox.io/s/choropleth-mapchart-showing-vulnerability-by-country-euuik?from-embed
const DATA_URL = '/map-charts/world-choropleth-mapchart.csv'

type TData = IDataRow[]

interface IDataRow {
  ISO3: string
  Name: string
  '1995': number
}

const colorScale = scaleLinear<string>()
  .domain([0.29, 0.68])
  .range([COLORS_EMERALD_50, COLORS_EMERALD_600])

// cf: https://www.react-simple-maps.io/examples/world-choropleth-mapchart/
// Mapchart modifies the "World choropleth mapchart" example:
// - line colors
// - remove outline style
const Mapchart = () => {
  const [data, setData] = useState<TData>([])

  useEffect(() => {
    csv(DATA_URL).then((data) => {
      setData(data as unknown as TData)
    })
  }, [])

  return (
    <ComposableMap
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 147,
      }}
    >
      <Graticule stroke={COLORS_GRAY_300} strokeWidth={0.5} />
      <Sphere
        id=""
        fill="transparent"
        stroke={COLORS_GRAY_300}
        strokeWidth={0.5}
      />
      {data.length > 0 && (
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const d = data.find((s) => s.ISO3 === geo.id)
              return (
                <Geography
                  style={{
                    default: { outline: 'none' },
                    hover: {
                      outline: 'none',
                    },
                    pressed: {
                      outline: 'none',
                    },
                  }}
                  key={geo.rsmKey}
                  geography={geo}
                  fill={d ? colorScale(d['1995']) : COLORS_EMERALD_50}
                />
              )
            })
          }
        </Geographies>
      )}
    </ComposableMap>
  )
}

function WorldChoroplethMapchart() {
  return <Mapchart />
}
export default WorldChoroplethMapchart
