'use client'

import { useSearchParams } from 'next/navigation'
import ReturnPolicyCurrent from './ReturnPolicyCurrent'
import ReturnPolicyEndAt20231125 from './ReturnPolicyEndAt20231125'
import { Suspense, useEffect, useState } from 'react'

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

function ReturnPolicy(props: IReturnPolicyProps) {
  const [version, setVersion] = useState('')

  if (isFirstVersion(version)) {
    return <ReturnPolicyEndAt20231125 {...props.end} />
  }

  return (
    <>
      <ReturnPolicyCurrent {...props.current} />
      <Suspense>
        <Getversion setVersion={setVersion} />
      </Suspense>
    </>
  )
}

// 抽取使用到useSearchParams的组件，接受一个回调函数，在内部获取到queryString后回调
function Getversion({ setVersion }: { setVersion: (version: string) => void }) {
  const q = useSearchParams()
  const version: string = q?.get('version') || ''

  useEffect(() => {
    if (version && version.trim() !== '') {
      setVersion(version)
    }
  }, [setVersion, version])

  return null
}

export type {
  IReturnPolicyProps,
  IReturnPolicyCurrentProps,
  IReturnPolicyEndProps,
}

export { ReturnPolicy }
