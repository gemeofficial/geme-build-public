 
 export interface IDownloadFileTableProps{
    name: string
    description: string
    files: Array<{ language: string; document: string; pdfLink: string }>
    tableTitle: Array<string>
 }

 function DownloadFileTable({
  name,
  description,
  files,
  tableTitle,
}: IDownloadFileTableProps) {
  return (
    <div className="mt-8 mb-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">{name}</h1>
          <p className="mt-2 text-sm text-gray-700">{description}</p>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    {tableTitle.map((title, index) => (
                      <th
                        key={title + index}
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        {title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {files.map((file, idx) => (
                    <tr
                      key={file.language}
                      className={idx % 2 === 0 ? undefined : 'bg-gray-50'}
                    >
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {file.language}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <a
                          href={file.pdfLink}
                          target="_blank"
                          className="text-accent-6 hover:text-accent-9 transition ease-in-out duration-150 underline"
                        >
                          {file.document}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DownloadFileTable