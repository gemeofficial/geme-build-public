import './ui-compost.css'

function UiCompost() {
  return (
    <div
      className=" bg-v2311-bg-light-green h-screen relative "
      style={{ '--vh': '9.32px' } as Object}
    >
      <div
        className="ui-compost"
        style={
          {
            // height: '2739.91px',
            '--compostMask':
              'path("M0 0H199.95733333333334V200C199.95733333333334 200 199.95733333333334 199.95733333333334 99.97866666666667 199.95733333333334C0 199.95733333333334 0 200 0 200");',
            // 'path("M0 0H199.95733333333334V110C199.95733333333334 110 199.95733333333334 199.95733333333334 99.97866666666667 199.95733333333334C0 199.95733333333334 0 110 0 110")',

            // For bigger screens
            // --compostMask: path('M37.68888888888889 37.68888888888889H464.35555555555555V235C464.35555555555555 235 464.35555555555555 464.35555555555555 232.17777777777778 464.35555555555555C37.68888888888889 464.35555555555555 37.68888888888889 235 37.68888888888889 235');
          } as Object
        }
      >
        <div className="container">
          <div
            className="circle"
            style={{
              transform: 'translate(-50%, -20%) scale(0)',
              // transform: 'translate(-50%, -20.2646%) scale(0.00881975)',
              // transform: 'translate(-50%, -50%) scale(1)';,
            }}
          />
          <div className="ui-fragments-sprite" style={{}}>
            <img
              className="_00"
              // className="_19"
              src="https://www.datocms-assets.com/79468/1663102198-spritesheet-1.png?auto=format"
              width={3510}
              height={2808}
              alt="sprite images"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export { UiCompost }
