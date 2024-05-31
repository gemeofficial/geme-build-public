import ManualsDownload from './components/ManualsDownload'
import type { IManualsDownloadProps } from './components/ManualsDownload'

// 静态页面的内容 配置文件 En版
const manualsDownloadProps: IManualsDownloadProps = {
  title: 'Manuals Download',
  name: 'Manuals',
  description: `You can find the user manual for your GEME here.`,
  files: [
    {
      versions: 'Latest',
      language: 'English',
      document: 'geme-manual-en-110v.pdf',
      pdfLink: `/assets/manuals/latest/geme-manual-110v-en-v2024-04-27.pdf`,
    },
    {
      versions: 'Latest',
      language: 'English',
      document: 'geme-manual-en-220v.pdf',
      pdfLink: `/assets/manuals/latest/geme-manual-220v-en-2024-05-31.pdf`,
    },
    {
      versions: 'Latest',
      language: 'French',
      document: 'geme-manual-fr-220v.pdf',
      pdfLink: `/assets/manuals/latest/geme-manual-220v-fr-2024-05-31.pdf`,
    },
    {
      versions: 'Latest',
      language: 'German',
      document: 'geme-manual-de-220v.pdf',
      pdfLink: `/assets/manuals/latest/geme-manual-220v-de-2024-05-31.pdf`,
    },
    {
      versions: 'Before 2024',
      language: 'English',
      document: 'geme-manual-en-220v-2023.pdf',
      pdfLink: `/assets/manuals/before-2024/geme-manual-en-2023.pdf`,
    },
    {
      versions: 'Before 2024',
      language: 'French',
      document: 'geme-manual-fr-220v-2023.pdf',
      pdfLink: `/assets/manuals/before-2024/geme-manual-fr-2023.pdf`,
    },
    {
      versions: 'Before 2024',
      language: 'German',
      document: 'geme-manual-de-220v-2023.pdf',
      pdfLink: `/assets/manuals/before-2024/geme-manual-de-2023.pdf`,
    },
  ],
  tableTitle: ['Versions', 'Language', 'Document'],
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
