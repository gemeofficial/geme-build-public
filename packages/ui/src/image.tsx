interface IImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt?: string
  src?: string
  width?: number
  height?: number
  srcSetData?: {
    [key: string]: string
  }
}

function Img({ srcSetData, ...props }: IImgProps) {
  return (
    <img
      {...props}
      alt={props?.alt}
      width={props?.width}
      height={props?.height}
      src={props?.src}
      loading="lazy"
      srcSet={Object.keys(srcSetData || {})
        .reduce((acc, key) => {
          acc.push(`${srcSetData?.[key]} ${key}`)
          return acc
        }, [] as string[])
        .join(',')}
    />
  )
}

export { Img }
export type { IImgProps }
