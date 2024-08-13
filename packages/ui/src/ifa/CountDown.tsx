'use client'

import { PropsWithChildren, useEffect, useState } from 'react'
import Countdown, { zeroPad } from 'react-countdown'
import { LocaleType } from '../reviews'
import moment from 'moment'
import { Divider } from '../divider'

interface ImultiLanguageText {
  days: string[]
  drawing: string
  hour: string
  min: string
  sec: string
}

const multiLanguageText = {
  en: {
    days: ['DAY', 'DAYS'],
    drawing: 'The lottery is being drawn...',
    hour: 'HOUR',
    min: 'MIN',
    sec: 'SEC',
  },
  de: {
    days: ['TAG', 'TAGE'],
    drawing: 'Die Verlosung wird gezogen...',
    hour: 'STUNDE',
    min: 'MIN',
    sec: 'SEK',
  },
  fr: {
    days: ['JOUR', 'JOURS'],
    drawing: 'Le tirage au sort est en cours...',
    hour: 'HEURE',
    min: 'MIN',
    sec: 'SEC',
  },
}

// 获取当前月份的所有周一、三、五 并获取下个月的第一个周一/三/五
function getMondaysWednesdaysFridays(year: number, month: number) {
  const days: moment.Moment[] = []
  const startOfMonth = moment([year, month - 1]) // 注意：month 从 0 开始计数
  const endOfMonth = startOfMonth.clone().endOf('month')

  // 遍历当前月份，获取所有周一、周三、周五的日期
  for (let m = startOfMonth.clone(); m.isBefore(endOfMonth); m.add(1, 'days')) {
    const dayOfWeek = m.day()
    if (dayOfWeek === 1 || dayOfWeek === 3 || dayOfWeek === 5) {
      days.push(m.clone().hour(17).minute(0).second(0))
    }
  }

  // 获取下个月的第一个周一、周三或周五的日期
  const startOfNextMonth = endOfMonth.clone().add(1, 'days').startOf('month')
  let foundNextMonthDay = false

  for (let m = startOfNextMonth.clone(); !foundNextMonthDay; m.add(1, 'days')) {
    const dayOfWeek = m.day()
    if (dayOfWeek === 1 || dayOfWeek === 3 || dayOfWeek === 5) {
      days.push(m.clone().hour(17).minute(0).second(0))
      foundNextMonthDay = true
    }
  }

  return days
}

// 查找下一个活动的开奖时间
function findNextClosestDateTime(
  dates: moment.Moment[],
  currentTime: moment.Moment,
) {
  return dates.find((date) => date.isAfter(currentTime))
}

// 获取某个日期与当期时间相差的天、小时、分、秒数
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

export default function CountDown({ locale }: { locale: LocaleType }) {
  const [isLoaded, setIsLoaded] = useState(false)

  // 需添加一个变量来控制Countdown组件的渲染，否则会导致hydration error
  useEffect(() => {
    if (isLoaded === false) {
      setIsLoaded(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // No deps required

  // 获取当月的一三五开奖日期
  const drawingDates = getMondaysWednesdaysFridays(
    moment().year(),
    moment().month() + 1,
  )

  // 获取当前时间
  const currentTime = moment()

  // 获取倒计时时间
  const date = findNextClosestDateTime(drawingDates, currentTime)!.valueOf()

  // 获取SSR的静态倒计时时间
  const staticTimeInfo = getTimeRemaining(date)

  // 获取文本
  function getDayText(days: number) {
    const dayIndex = 0
    const daysIndex = 1
    const currentIndex = days <= 1 ? dayIndex : daysIndex
    return multiLanguageText[locale].days[currentIndex]
  }
  const textInfo = multiLanguageText[locale]

  return (
    <>
      {isLoaded && (
        <Countdown
          date={date}
          renderer={({ days, hours, minutes, seconds, completed }) => {
            if (completed)
              return (
                <h3 className="text-xl md:text-3xl 3xl:text-4xl text-center text-v2311-text-yellow font-semibold">
                  {textInfo.drawing}
                </h3>
              )

            return (
              <RenderCountDown
                textInfo={textInfo}
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
          textInfo={textInfo}
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
  textInfo,
}: {
  days: number
  hours: number
  minutes: number
  seconds: number
  dayText: string
  textInfo: ImultiLanguageText
}) {
  return (
    <div className="flex items-center gap-4 md:gap-8 text-center">
      <TimeCard textInfo={textInfo} type="day" dayText={dayText}>
        {days}
      </TimeCard>

      <Divider color="#058669" height="56px" />

      <TimeCard textInfo={textInfo} type="hour">
        {zeroPad(hours)}
      </TimeCard>

      <Divider color="#058669" height="56px" />

      <TimeCard textInfo={textInfo} type="min">
        {zeroPad(minutes)}
      </TimeCard>

      <Divider color="#058669" height="56px" />

      <TimeCard textInfo={textInfo} type="sec">
        {zeroPad(seconds)}
      </TimeCard>
    </div>
  )
}

function Semicolon() {
  return <span className="mx-2 text-white">:</span>
}

interface TimeCard {
  type: 'day' | 'hour' | 'min' | 'sec'
  textInfo: ImultiLanguageText
  dayText?: string
}

function TimeCard({
  children,
  type,
  dayText,
  textInfo,
}: PropsWithChildren<TimeCard>) {
  return (
    <div
      className="text-white tracking-wide font-sans font-semibold"
      suppressHydrationWarning
    >
      <p className='text-lg md:text-2xl xl:text-3xl'>{children}</p>
      <p className="mt-1 text-v2311-primary md:text-lg xl:text-xl">
        {type === 'day' ? dayText : textInfo[type]}
      </p>
    </div>
  )
}
