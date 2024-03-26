interface IHeaderCenteredProps {
  title: string
  description?: string
  withNoContainer?: boolean
}

function Hero(props: IHeaderCenteredProps) {
  const { title, description, withNoContainer } = props

  const children = (
    <>
      <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
      )}
    </>
  )

  if (withNoContainer) {
    return children
  }

  return (
    <div className="bg-white py-24 px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">{children}</div>
    </div>
  )
}

export type { IHeaderCenteredProps }
export { Hero }
