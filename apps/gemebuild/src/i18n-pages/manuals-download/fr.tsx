import ManualsDownload from './components/ManualsDownload'
import type { IManualsDownloadProps } from './components/ManualsDownload'

// 静态页面的内容 配置文件 Fr版
const manualsDownloadProps: IManualsDownloadProps = {
  title: 'Téléchargement des manuels',
  name: 'Manuels',
  description: `Vous pouvez trouver le manuel d’utilisation de votre GEME ici.`,
  files: [
    {
      versions: 'Dernier',
      language: 'Anglais',
      document: 'geme-manual-en-110v.pdf',
      pdfLink: `/assets/manuals/latest/geme-manual-110v-en-v2024-04-27.pdf`,
    },
    {
      versions: 'Dernier',
      language: 'Anglais',
      document: 'geme-manual-en-220v.pdf',
      pdfLink: `/assets/manuals/latest/geme-manual-220v-en-2024-05-31.pdf`,
    },
    {
      versions: 'Dernier',
      language: 'Français',
      document: 'geme-manual-fr-220v.pdf',
      pdfLink: `/assets/manuals/latest/geme-manual-220v-fr-2024-05-31.pdf`,
    },
    {
      versions: 'Dernier',
      language: 'Allemand',
      document: 'geme-manual-de-220v.pdf',
      pdfLink: `/assets/manuals/latest/geme-manual-220v-de-2024-05-31.pdf`,
    },
    {
      versions: 'Avant 2024',
      language: 'Anglais',
      document: 'geme-manual-en-220v-2023.pdf',
      pdfLink: `/assets/manuals/before-2024/geme-manual-en-2023.pdf`,
    },
    {
      versions: 'Avant 2024',
      language: 'Français',
      document: 'geme-manual-fr-220v-2023.pdf',
      pdfLink: `/assets/manuals/before-2024/geme-manual-fr-2023.pdf`,
    },
    {
      versions: 'Avant 2024',
      language: 'Allemand',
      document: 'geme-manual-de-220v-2023.pdf',
      pdfLink: `/assets/manuals/before-2024/geme-manual-de-2023.pdf`,
    },
  ],
  tableTitle: ['Versions', 'Langue', 'Document'],
}

function ManualsDownloadPageFr() {
  return <ManualsDownload {...manualsDownloadProps} />
}
export { ManualsDownloadPageFr }
