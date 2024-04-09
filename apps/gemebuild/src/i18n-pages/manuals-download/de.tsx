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
      document: 'geme-manual-en.pdf',
      pdfLink: `/assets/return/geme-manual-en-v2.pdf`,
    },
    {
      language: 'Französisch',
      document: 'geme-manual-fr.pdf',
      pdfLink: `/assets/return/geme-manual-fr.pdf`,
    },
    {
      language: 'Deutsch',
      document: 'geme-manual-de.pdf',
      pdfLink: `/assets/return/geme-manual-de.pdf`,
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
