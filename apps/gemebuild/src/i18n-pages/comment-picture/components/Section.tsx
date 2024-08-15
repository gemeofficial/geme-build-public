import { SectionContainer, SectionTitle } from 'ui'
import WaterfallFlow, { IWaterfallFlowProps } from 'ui/src/waterfall-flow'

export interface IDataListProps extends IWaterfallFlowProps {
  title: string
}

export default function Section({ datas }: { datas: IDataListProps[] }) {
  return (
    <div className="bg-v2311-bg-dark-green/95">
      {datas.map((item, index) => (
        <div className="p-4 lg:p-8" key={index}>
          <SectionTitle className="!text-white">{item.title}</SectionTitle>
          <div className="mt-4 md:mt-6 xl:mt-8">
            <WaterfallFlow pictures={item.pictures} />
          </div>
        </div>
      ))}
    </div>
  )
}
