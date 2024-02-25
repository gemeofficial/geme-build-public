# Map Charts

It implements some [examples](https://www.react-simple-maps.io/examples/) of [`react-simple-maps`](https://www.react-simple-maps.io/).

- [`<WorldChoroplethMapchart />`](https://www.react-simple-maps.io/examples/world-choropleth-mapchart/)
- [`<ProportionalSymbolMap />`](https://www.react-simple-maps.io/examples/proportional-symbol-map/)

The implementation contains two parts:

- Components exported from: `src/components/map-charts`.
- Static files located: `public/map-charts`.
  - `world-countries.json` static file to render the world map
  - `*.csv` static data used by the map
    - `world-choropleth-mapchart.csv` for `<WorldChoroplethMapchart />`
    - `proportional-symbol-map.csv` for `<ProportionalSymbolMap />`
