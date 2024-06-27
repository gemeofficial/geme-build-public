import React, { memo } from 'react'
import { SectionDescription, SectionTitle } from '../ui-components'
import Image from 'next/image'

export default memo(function ExaminingReport() {
  return (
    <section className="px-4 py-8 mx-auto md:px-8 md:py-16 xl:py-[80px] xl:max-w-7xl">
      <SectionTitle>
        GEME Fertilizer Has Been Tested And Surpassed Quality Standard.
      </SectionTitle>
      <SectionDescription>The test results are as follows</SectionDescription>
      <Image
        className="w-full h-full object-contain"
        src={
          'https://cdn.shopify.com/s/files/1/0602/9390/6640/t/3/assets/remarkchart-1667521654065.jpg?v=1667521740'
        }
        alt="examiningReport"
        width={900}
        height={720}
      />
      <div className='text-[#d67b38] font-bold'>
        Download Salt Level Breakdown Report Test{' '}
        <a
          href="https://cdn.shopify.com/s/files/1/0602/9390/6640/files/Salt_Breakdown_Report_Reencle.pdf?v=1674090924"
          target="_blank"
        >
          HERE
        </a>
      </div>
    </section>
  )
})
