import ManualsDownload from './components/ManualsDownload'
import type { IManualsDownloadProps } from './components/ManualsDownload'

// 静态页面的内容 配置文件 De版
const manualsDownloadProps: IManualsDownloadProps = {
  title: 'Manuals & Download',
  name: 'Anleitungen',
  description: `Die Bedienungsanleitung für Ihr GEME finden Sie hier.`,
  files: [
    {
      versions: 'Neueste',
      language: 'Englisch',
      document: 'geme-manual-en-110v.pdf',
      pdfLink: `/assets/manuals/latest/geme-manual-110v-en-v2024-04-27.pdf`,
    },
    {
      versions: 'Neueste',
      language: 'Englisch',
      document: 'geme-manual-en-220v.pdf',
      pdfLink: `/assets/manuals/latest/geme-manual-220v-en-2024-05-31.pdf`,
    },
    {
      versions: 'Neueste',
      language: 'Französisch',
      document: 'geme-manual-fr-220v.pdf',
      pdfLink: `/assets/manuals/latest/geme-manual-220v-fr-2024-05-31.pdf`,
    },
    {
      versions: 'Neueste',
      language: 'Deutsch',
      document: 'geme-manual-de-220v.pdf',
      pdfLink: `/assets/manuals/latest/geme-manual-220v-de-2024-05-31.pdf`,
    },
    {
      versions: 'Vor 2024',
      language: 'Englisch',
      document: 'geme-manual-en-220v-2023.pdf',
      pdfLink: `/assets/manuals/before-2024/geme-manual-en-2023.pdf`,
    },
    {
      versions: 'Vor 2024',
      language: 'Französisch',
      document: 'geme-manual-fr-220v-2023.pdf',
      pdfLink: `/assets/manuals/before-2024/geme-manual-fr-2023.pdf`,
    },
    {
      versions: 'Vor 2024',
      language: 'Deutsch',
      document: 'geme-manual-de-220v-2023.pdf',
      pdfLink: `/assets/manuals/before-2024/geme-manual-de-2023.pdf`,
    },
  ],
  tableTitle: ['Versionen', 'Sprache', 'Dokument'],
}

function ManualsDownloadPageDe() {
  return (
    <>
      <h1 className="sr-only">GAME-Handbücher herunterladen</h1>
      <ManualsDownload {...manualsDownloadProps} />
    </>
  )
}
export { ManualsDownloadPageDe }
