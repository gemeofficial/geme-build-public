import { SectionContainer, SectionDescription } from 'ui'
import Button from './Button'

export default function DownLoadMediaKit() {
  return (
    <SectionContainer className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
      <div className="bg-gray-100 rounded-xl p-6 flex-1 flex flex-col justify-between min-h-60 lg:min-h-80">
        <div>
          <div className="md:text-lg lg:text-xl xl:text-2xl font-bold">
            Logo Kit
          </div>
          <SectionDescription className="!text-left mt-4">
            Download our media kit ZIP here,Download our media kit ZIP here
          </SectionDescription>
        </div>
        <Button text="Download here" href="#" className="w-[70%]" />
      </div>
      <div className="bg-gray-100 rounded-xl p-6 flex-1 flex flex-col justify-between min-h-60 lg:min-h-80">
        <div>
          <div className="md:text-lg lg:text-xl xl:text-2xl font-bold">
            Press Images Leif Lindner
          </div>
          <SectionDescription className="!text-left mt-4">
            Download our media kit ZIP here,Download our media kit ZIP here
          </SectionDescription>
        </div>
        <Button text="Download material" href="#" className="w-[70%]" />
      </div>
    </SectionContainer>
  )
}
