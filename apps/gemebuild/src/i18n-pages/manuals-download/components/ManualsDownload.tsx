import DownloadFileTable, { IDownloadFileTableProps } from '../../../components/table'

export interface IManualsDownloadProps extends IDownloadFileTableProps{
  title:string
}

const ManualsDownload = (props:IManualsDownloadProps) => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl  px-2 sm:px-6 py-12 lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-5 sm:mb-20 text-center">
          {props.title}
        </h2>
        <DownloadFileTable {...props} />
      </div>
    </div>
  )
}

export default ManualsDownload
