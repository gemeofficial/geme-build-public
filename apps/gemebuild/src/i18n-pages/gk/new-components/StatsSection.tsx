import { ReactNode } from 'react'
import { SectionContainer, SectionDescription, SectionTitle } from 'ui'

export interface IStatsSectionProps {
  title: string
  description: ReactNode
  stats: {
    percentage: string
    text: ReactNode
  }[]
}
export default function StatsSection({ description, stats, title }: IStatsSectionProps) {
  return (
    <SectionContainer compact>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription className="mt-4 md:mt-6">
        {description}
      </SectionDescription>

      {/* 统计信息部分 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 md:mt-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-v2311-primary text-white p-6 rounded-lg text-center"
          >
            <h3 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-4">
              {stat.percentage}
            </h3>
            <p>{stat.text}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
