import { PropsWithChildren, useEffect, useState } from 'react'
import Countdown, { zeroPad } from 'react-countdown'

export default function CountDown({
  date,
  dayText = ['Day', 'Days'],
}: {
  date: number | Date | string
  dayText?: string[]
}) {
  const [isLoaded, setIsLoaded] = useState(false)

  // 需添加一个变量来控制Countdown组件的渲染，否则会导致hydration error
  useEffect(() => {
    if (isLoaded === false) {
      setIsLoaded(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // No deps required

  function getDayText(days: number) {
    const dayIndex = 0
    const daysIndex = 1
    const currentIndex = days === 1 ? dayIndex : daysIndex
    return dayText[currentIndex] as string
  }

  return (
    isLoaded && (
      <Countdown
        date={date}
        renderer={({ days, hours, minutes, seconds, completed }) => {
          // if (completed) return <></>
          return (
            <div className="flex my-2 lg:my-5 2xl:my-3 3xl:my-4">
              <div className="text-center">
                {days > 0 && (
                  <div className="hidden md:block lg:hidden mb-3">
                    <TimeCard>
                      {days}
                      <span className="pl-1">{getDayText(days)}</span>
                    </TimeCard>
                  </div>
                )}
                <div className="md:text-xl flex items-center">
                  {days > 0 && (
                    <div className="flex md:hidden lg:flex">
                      <TimeCard>
                        <span className="px-1 md:px-2">{days}</span>
                      </TimeCard>
                      <span className="px-2 inline-flex justify-center items-center text-white">
                        {getDayText(days)}
                      </span>
                    </div>
                  )}

                  <TimeCard>{zeroPad(hours)}</TimeCard>

                  <Semicolon />

                  <TimeCard>{zeroPad(minutes)}</TimeCard>

                  <Semicolon />

                  <TimeCard>{zeroPad(seconds)}</TimeCard>
                </div>
              </div>
            </div>
          )
        }}
      ></Countdown>
    )
  )
}

function Semicolon() {
  return <span className="mx-2 text-white">:</span>
}

function TimeCard({ children }: PropsWithChildren) {
  return (
    <div className="bg-white text-black rounded-md lg:px-2 lg:py-2 3xl:px-4 3xl:py-5 tracking-wide">
      {children}
    </div>
  )
}
