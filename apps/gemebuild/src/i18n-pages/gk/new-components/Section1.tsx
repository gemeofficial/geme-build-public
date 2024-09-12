import { ReactNode } from 'react'
import { SectionContainer, SectionDescription, SectionTitle } from 'ui'

export interface ISection1Props {
  title: string
  description: ReactNode
  stats: {
    percentage: string
    text: ReactNode
  }[]
}
export default function Section1({
  description,
  stats,
  title,
}: ISection1Props) {
  return (
    <SectionContainer compact>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription className="mt-4 md:mt-6">
        {description}
      </SectionDescription>

      {/* 统计信息部分 */}
      <div className="grid grid-cols-2 gap-8 px-4 mt-6 md:mt-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-v2311-primary text-white p-6 rounded-lg text-center"
          >
            <h3 className="text-4xl font-bold mb-4">{stat.percentage}</h3>
            <p>{stat.text}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
