import ManualsDownload from './components/ManualsDownload'
import type { IManualsDownloadProps } from './components/ManualsDownload'

// 静态页面的内容 配置文件 It版
const manualsDownloadProps: IManualsDownloadProps = {
  title: 'Scarica Manuali',
  name: 'Manuali',
  description: `Qui puoi trovare il manuale utente per il tuo GEME.`,
  files: [
    {
      versions: 'Ultima',
      language: 'Inglese',
      document: 'geme-manual-en-110v.pdf',
      pdfLink: `/assets/manuals/latest/geme-manual-110v-en-v2024-04-27.pdf`,
    },
    {
      versions: 'Ultima',
      language: 'Inglese',
      document: 'geme-manual-en-220v.pdf',
      pdfLink: `/assets/manuals/latest/geme-manual-220v-en-2024-05-31.pdf`,
    },
    {
      versions: 'Ultima',
      language: 'Francese',
      document: 'geme-manual-fr-220v.pdf',
      pdfLink: `/assets/manuals/latest/geme-manual-220v-fr-2024-05-31.pdf`,
    },
    {
      versions: 'Ultima',
      language: 'Tedesco',
      document: 'geme-manual-de-220v.pdf',
      pdfLink: `/assets/manuals/latest/geme-manual-220v-de-2024-05-31.pdf`,
    },
    {
      versions: 'Prima del 2024',
      language: 'Inglese',
      document: 'geme-manual-en-220v-2023.pdf',
      pdfLink: `/assets/manuals/before-2024/geme-manual-en-2023.pdf`,
    },
    {
      versions: 'Prima del 2024',
      language: 'Francese',
      document: 'geme-manual-fr-220v-2023.pdf',
      pdfLink: `/assets/manuals/before-2024/geme-manual-fr-2023.pdf`,
    },
    {
      versions: 'Prima del 2024',
      language: 'Tedesco',
      document: 'geme-manual-de-220v-2023.pdf',
      pdfLink: `/assets/manuals/before-2024/geme-manual-de-2023.pdf`,
    },
  ],
  tableTitle: ['Versioni', 'Lingua', 'Documento'],
}

function ManualsDownloadPageIt() {
  return (
    <>
      <h1 className="sr-only">GEME Handbücher herunterladen</h1>
      <ManualsDownload {...manualsDownloadProps} />
    </>
  )
}
export { ManualsDownloadPageIt }
