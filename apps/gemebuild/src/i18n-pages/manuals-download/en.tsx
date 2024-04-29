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
      document: 'geme-manual-en-110v.pdf',
      pdfLink: `/assets/manuals/geme-manual-110v-en-v2024-04-27.pdf`,
    },
    {
      language: 'English',
      document: 'geme-manual-en-220v.pdf',
      pdfLink: `/assets/manuals/geme-manual-en-v2.pdf`,
    },
    {
      language: 'French',
      document: 'geme-manual-fr-220v.pdf',
      pdfLink: `/assets/manuals/geme-manual-fr.pdf`,
    },
    {
      language: 'German',
      document: 'geme-manual-de-220v.pdf',
      pdfLink: `/assets/manuals/geme-manual-de.pdf`,
    },
  ],
  tableTitle: ['Language', 'Document'],
}

function ManualsDownloadPageEn() {
  const url = 'https://www.geme.bio/manuals-download'

  return (
    <>
      <link rel="canonical" href={url} />
      <h1 className="sr-only">GEME Manuals Download</h1>
      <ManualsDownload {...manualsDownloadProps} />
    </>
  )
}
export { ManualsDownloadPageEn }
