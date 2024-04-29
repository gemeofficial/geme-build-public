import ManualsDownload from './components/ManualsDownload'
import type { IManualsDownloadProps } from './components/ManualsDownload'

// 静态页面的内容 配置文件 Fr版
const manualsDownloadProps: IManualsDownloadProps = {
  title: 'Téléchargement des manuels',
  name: 'Manuels',
  description: `Vous pouvez trouver le manuel d’utilisation de votre GEME ici.`,
  files: [
    {
      language: 'Anglais',
      document: 'geme-manual-en.pdf',
      pdfLink: `/assets/manuals/geme-manual-en-v2.pdf`,
    },
    {
      language: 'Français',
      document: 'geme-manual-fr.pdf',
      pdfLink: `/assets/manuals/geme-manual-fr.pdf`,
    },
    {
      language: 'Allemand',
      document: 'geme-manual-de.pdf',
      pdfLink: `/assets/manuals/geme-manual-de.pdf`,
    },
  ],
  tableTitle: ['Langue', 'Document'],
}

function ManualsDownloadPageFr() {
  const url = 'https://www.geme.bio/fr/manuals-download'

  return (
    <>
      <link rel="canonical" href={url} />
      <h1 className="sr-only">Téléchargement des manuels GEME</h1>
      <ManualsDownload {...manualsDownloadProps} />
    </>
  )
}
export { ManualsDownloadPageFr }
