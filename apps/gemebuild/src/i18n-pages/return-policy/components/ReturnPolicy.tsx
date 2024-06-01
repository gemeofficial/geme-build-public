'use client'

import { useSearchParams } from 'next/navigation'
import ReturnPolicyCurrent from './ReturnPolicyCurrent'
import ReturnPolicyEndAt20231125 from './ReturnPolicyEndAt20231125'
import { Suspense } from 'react'

interface IReturnPolicyCurrentProps {
  title: string
  updateTime: string
  forward: {
    description: string
    imgSrc: string
  }
  versionInfo: string
  items: {
    name: string
    svgSrc: React.ReactNode
    description: string
    hide: boolean
  }[]
}

interface IReturnPolicyEndProps {
  title: string
  updateTime: string
  forward: {
    description: string
    imgSrc: string
  }
  items: {
    name: string
    svgSrc: React.ReactNode
    description: string
  }[]
}

interface IReturnPolicyProps {
  current: IReturnPolicyCurrentProps
  end: IReturnPolicyEndProps
}

function ReturnPolicy(props: IReturnPolicyProps) {
  const q = useSearchParams()

  const isFirstVersion = (v) => {
    if (
      [
        '2023-01-01',
        '2023-1-1',
        '20230101',
        '2023_01_01',
        'Jan-01-2023',
        'Jan-1-2023',
        '1-Jan-2023',
      ].includes(v)
    ) {
      return true
    }

    const versionNumber = parseInt(v)
    if (versionNumber == 1) {
      return true
    }

    return false
  }

  const version = q?.get('version')
  if (isFirstVersion(version)) {
    return <ReturnPolicyEndAt20231125 {...props.end} />
  }

  return <ReturnPolicyCurrent {...props.current} />
}

function SuspenseReturnPolicy(props: IReturnPolicyProps) {
  return (
    <Suspense>
      <ReturnPolicy {...props} />
    </Suspense>
  )
}

export type {
  IReturnPolicyProps,
  IReturnPolicyCurrentProps,
  IReturnPolicyEndProps,
}
export { SuspenseReturnPolicy as ReturnPolicy }
