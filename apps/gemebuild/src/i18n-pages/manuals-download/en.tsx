import ManualsDownload from './components/ManualsDownload'
import type { IManualsDownloadProps } from './components/ManualsDownload'

// 静态页面的内容 配置文件 En版
const manualsDownloadProps: IManualsDownloadProps = {
  title: 'Manuals Download',
  name: 'Manuals',
  description: `You can find the user manual for your GEME here.`,
  files: [
    {
      language: 'English',
      document: 'geme-manual-en.pdf',
      pdfLink: `/assets/return/geme-manual-en-v2.pdf`,
    },
    {
      language: 'French',
      document: 'geme-manual-fr.pdf',
      pdfLink: `/assets/return/geme-manual-fr.pdf`,
    },
    {
      language: 'German',
      document: 'geme-manual-de.pdf',
      pdfLink: `/assets/return/geme-manual-de.pdf`,
    },
  ],
  tableTitle: ['Language', 'Document'],
}


function ManualsDownloadPageEn() {
  const url = 'https://www.geme.bio/manuals-download'

  return (
    <>
      <link rel="canonical" href={url} />
      <ManualsDownload {...manualsDownloadProps} />
    </>
  )
}
export { ManualsDownloadPageEn }
