import React, { useEffect, useState, useMemo } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps'
import { csv } from 'd3-fetch'
import { scaleLinear } from 'd3-scale'
import sortBy from 'lodash.sortby'
import {
  COLORS_EMERALD_700,
  COLORS_EMERALD_600,
  COLORS_GRAY_300,
  COLORS_GRAY_50,
} from './constants'

// source: https://raw.githubusercontent.com/deldersveld/topojson/master/world-continents.json
const GEO_URL = '/map-charts/world-countries.json'
// source: https://codesandbox.io/s/proportional-symbol-map-13gd32?from-embed=&file=/public/data.csv:0-1692
const DATA_URL = '/map-charts/proportional-symbol-map.csv'

type TData = IDataRow[]

interface IDataRow {
  rank?: string
  country_code?: string
  country?: string
  city_code?: string
  city?: string
  lat?: string
  lng?: string
  population?: string
}

// cf: https://www.react-simple-maps.io/examples/proportional-symbol-map/
// Mapchart modifies the "Proportional symbol map" example:
// - line colors
// - remove outline style
const Mapchart = ({ recentOrderedFrom }: IProportionalSymbolMapProps) => {
  const [data, setData] = useState<TData>([])
  const [maxValue, setMaxValue] = useState(0)

  useEffect(() => {
    csv<keyof IDataRow>(DATA_URL).then((cities: TData) => {
      const sortedCities = sortBy(cities, (o) => -Number(o?.population))
      setMaxValue(Number(sortedCities[0]?.population))
      setData(sortedCities)
    })
  }, [])

  const popScale = useMemo(
    () => scaleLinear().domain([0, maxValue]).range([0, 24]),
    [maxValue],
  )

  return (
    <ComposableMap projectionConfig={{ rotate: [-10, 0, 0] }}>
      <Geographies geography={GEO_URL}>
        {({ geographies }) =>
          geographies.map((geo) => (
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
              fill={COLORS_GRAY_300}
            />
          ))
        }
      </Geographies>
      {data.map(({ lng, lat, population, city }) => {
        return (
          <Marker
            key={`${city}-${lat},${lng}}`}
            coordinates={[Number(lng), Number(lat)]}
            style={{
              default: {
                fill: COLORS_EMERALD_600,
                outline: 'none',
              },
              hover: {
                fill: COLORS_EMERALD_700,
                outline: 'none',
              },
              pressed: {
                fill: COLORS_EMERALD_700,
                outline: 'none',
              },
            }}
          >
            <title>
              {recentOrderedFrom
                .replaceAll('{city}', String(city))
                .replaceAll(
                  '{days}',
                  String(
                    Math.round(popScale(maxValue - Number(population)) * 5) + 2,
                  ),
                )}
            </title>
            <circle stroke={COLORS_GRAY_50} r={popScale(Number(population))} />
          </Marker>
        )
      })}
    </ComposableMap>
  )
}

interface IProportionalSymbolMapProps {
  // recentOrderedFrom: text displayed when hovering over a city
  //
  // Recent order happened N days ago.
  // - {city}: the order location. eg. Hangzhou
  // - {days}: number of days. eg. 3.
  //
  // Eg. `People from {city} back GEME with their love.`,
  recentOrderedFrom: string
}

function ProportionalSymbolMap(props: IProportionalSymbolMapProps) {
  return <Mapchart {...props} />
}

export default ProportionalSymbolMap

export type { IProportionalSymbolMapProps }
