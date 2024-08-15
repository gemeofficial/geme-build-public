import clsx from 'clsx'
import { SectionTitle } from 'ui'
import WaterfallFlow, { IListItem } from 'ui/src/waterfall-flow'
import { Link, Element } from 'react-scroll'
import ImageZoomViewer from 'ui/src/client-components/ImageZoomViewer'

export interface IDataListProps {
  title: string
  pictures: IListItem[]
}

export interface ISectionProps {
  datas: IDataListProps[]
  buttonText: string
}

export default function Section({ datas, buttonText }: ISectionProps) {
  const titles = datas.map((item, index) => ({ id: index, title: item.title }))
  return (
    <>
      {/* Header Tabs */}
      <div className="sticky top-0 bg-[#047857] z-[49] transition-all duration-300">
        <ul className="overflow-auto v2311-font-h3 md:v2311-font-link-selected xl:v2311-font-body text-white py-2 px-1 md:py-6 md:px-8 flex justify-center space-x-4 md:space-x-6 xl:space-x-12 xl:max-w-7xl xl:mx-auto">
          {titles.map((tab) => (
            <li key={tab.id}>
              <Link
                activeClass="bg-white text-[#047857] rounded-lg"
                spy={true}
                smooth={true}
                duration={500}
                to={String(tab.id)}
                offset={-50}
                className={clsx(
                  'inline-block px-1 pt-0.5 pb-px md:px-4 xl:px-6 xl:py-2 font-bold cursor-pointer',
                  'hover:bg-white hover:text-[#047857] hover:rounded-lg',
                  'whitespace-nowrap',
                )}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-v2311-bg-dark-green/95">
        <ImageZoomViewer>
          {datas.map((item, index) => (
            <Element name={String(titles[index].id)} key={titles[index].id}>
              <div className="p-4 md:p-6 lg:p-8" key={index}>
                <SectionTitle className="!text-white mt-4 lg:mt-8">
                  {item.title}
                </SectionTitle>
                <div className="mt-4 md:mt-6 xl:mt-8">
                  <WaterfallFlow
                    pictures={item.pictures}
                    lazy={index > 0}
                    buttonText={buttonText}
                  />
                </div>
              </div>
            </Element>
          ))}
        </ImageZoomViewer>
      </div>
    </>
  )
}