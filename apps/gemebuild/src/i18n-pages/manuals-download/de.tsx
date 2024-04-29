import ManualsDownload from './components/ManualsDownload'
import type { IManualsDownloadProps } from './components/ManualsDownload'

// 静态页面的内容 配置文件 De版
const manualsDownloadProps: IManualsDownloadProps = {
  title: 'Manuals & Download',
  name: 'Anleitungen',
  description: `Die Bedienungsanleitung für Ihr GEME finden Sie hier.`,
  files: [
    {
      language: 'Englisch',
      document: 'geme-manual-en-220v.pdf',
      pdfLink: `/assets/manuals/geme-manual-en-v2.pdf`,
    },
    {
      language: 'Englisch',
      document: 'geme-manual-en-110v.pdf',
      pdfLink: `/assets/manuals/geme-manual-110v-en-v2024-04-27.pdf`,
    },
    {
      language: 'Französisch',
      document: 'geme-manual-fr-220v.pdf',
      pdfLink: `/assets/manuals/geme-manual-fr.pdf`,
    },
    {
      language: 'Deutsch',
      document: 'geme-manual-de-220v.pdf',
      pdfLink: `/assets/manuals/geme-manual-de.pdf`,
    },
  ],
  tableTitle: ['Sprache', 'Dokumentieren'],
}

function ManualsDownloadPageDe() {
  const url = 'https://www.geme.bio/de/manuals-download'

  return (
    <>
      <link rel="canonical" href={url} />
      <h1 className="sr-only">GAME-Handbücher herunterladen</h1>
      <ManualsDownload {...manualsDownloadProps} />
    </>
  )
}
export { ManualsDownloadPageDe }
