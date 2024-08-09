'use client'
import { PropsWithChildren, useEffect, useState } from 'react'
import Countdown, { zeroPad } from 'react-countdown'
import { LocaleType } from '../reviews'
import moment from 'moment'

const dayText = {
  en: ['Day', 'Days'],
  de: ['Tag', 'Tage'],
  fr: ['Jour', 'Jours'],
}

function getTimeRemaining(futureTimestamp: number | Date | string) {
  const now = moment() // 获取当前时间
  const future = moment(futureTimestamp) // 将时间戳转换为 moment 对象

  const duration = moment.duration(future.diff(now)) // 计算未来时间与当前时间的差值

  const days = Math.floor(duration.asDays())
  const hours = duration.hours()
  const minutes = duration.minutes()
  const seconds = duration.seconds()

  return { days, hours, minutes, seconds }
}

export default function CountDown({
  date,
  locale,
}: {
  date: number | Date | string
  locale: LocaleType
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
    const currentIndex = days <= 1 ? dayIndex : daysIndex
    return dayText[locale][currentIndex]
  }

  const staticTimeInfo = getTimeRemaining(date)

  return (
    <>
      {isLoaded && (
        <Countdown
          date={date}
          renderer={({ days, hours, minutes, seconds, completed }) => {
            // if (completed) return <></>
            return (
              <RenderCountDown
                dayText={getDayText(days)}
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
              />
            )
          }}
        ></Countdown>
      )}

      {/* 静态的倒计时DOM SSR渲染用 */}
      {!isLoaded && (
        <RenderCountDown
          dayText={getDayText(staticTimeInfo.days)}
          {...staticTimeInfo}
        />
      )}
    </>
  )
}

function RenderCountDown({
  days,
  hours,
  minutes,
  seconds,
  dayText,
}: {
  days: number
  hours: number
  minutes: number
  seconds: number
  dayText: string
}) {
  return (
    <div className="flex my-4 md:my-2 lg:my-5 2xl:my-3 3xl:my-4">
      <div className="text-center">
        {days > 0 && (
          <div className="md:hidden mb-3">
            <TimeCard>
              {days}
              <span className="pl-1">{dayText}</span>
            </TimeCard>
          </div>
        )}
        <div className="md:text-xl flex items-center">
          {days > 0 && (
            <div className="hidden md:flex">
              <TimeCard>
                <span className="px-1 md:px-2">{days}</span>
              </TimeCard>
              <span className="px-2 inline-flex justify-center items-center text-white">
                {dayText}
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
}

function Semicolon() {
  return <span className="mx-2 text-white">:</span>
}

function TimeCard({ children }: PropsWithChildren) {
  return (
    <div className="bg-v2311-text-yellow text-white rounded-md px-2 py-2 3xl:px-4 3xl:py-5 tracking-wide">
      {children}
    </div>
  )
}
