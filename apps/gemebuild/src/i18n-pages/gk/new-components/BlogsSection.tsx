import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import { LocaleType, SectionContainer, SectionTitle } from 'ui'
import PrimaryButton from 'ui/src/ui-components/PrimaryButton'
import 'moment/locale/fr'
import 'moment/locale/de'

interface NewsCardProps {
  date: string
  month: string
  imageUrl: string
  title: string
  description: string
  link: string
}

export interface Blog {
  published: boolean
  runPublishAt: string
  URLSlug: string
  lang: string
  // 标题
  title: string
  // SEO 标题
  SEOTitle: string
  // SEO 描述
  SEODescription: string
  internalAuthor: string
  externalAuthor: string
  changeLog: string
  description: string
  // 不包含标题的内容
  markdown: string
  documentID: string
  // 封面图
  coverImage: string
  // 简介
  introduction: string
}

export interface IBlogsSectionPropS {
  title: string
  buttonText: string
  locale: LocaleType
  blogs?: Blog[]
}

function parseDate(dateString: string, locale: LocaleType) {
  moment.locale(locale)

  const date = moment(dateString)
  const month = date.format('MMM').replace('.', '') // 获取缩写版月份
  const day = date.format('DD') // 获取日期
  return { month, day }
}

export default function BlogsSection({
  title,
  blogs,
  buttonText,
  locale,
}: IBlogsSectionPropS) {
  return (
    <SectionContainer compact>
      <SectionTitle className="mb-8">{title}</SectionTitle>

      <div className="mt-12 grid gap-6 gap-x-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs?.map((blog) => (
          <div key={blog.title} className="flex flex-col overflow-hidden group">
            <div className="flex-shrink-0 relative overflow-hidden">
              <Image
                className="h-48 xl:h-64 w-full object-cover group-hover:scale-110 transition-all duration-500"
                src={blog.coverImage}
                alt={blog.title}
                width={1080}
                height={720}
              />
              {/* 左上角的日期显示 */}
              <div className="absolute top-0 left-6 bg-v2311-primary text-white py-2 px-5 text-center">
                <span className="block text-xl xl:text-2xl font-bold text-[#222] font-serif !leading-none">
                  {parseDate(blog.runPublishAt, locale).day}
                </span>
                <span className="block text-xs xl:text-sm font-mono !leading-none">
                  {parseDate(blog.runPublishAt, locale).month}
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between bg-white p-6 w-[80%] mx-auto relative -top-10 group-hover:-top-20 transition-all duration-500">
              <div className="flex-1">
                <Link
                  target="_blank"
                  href={`/blogs/${blog.URLSlug}`}
                  className="block text-lg xl:text-xl font-semibold text-gray-900 hover:text-v2311-primary transition-all"
                >
                  {blog.title}
                </Link>
                {blog.introduction != null && (
                  <p className="mt-3 text-sm xl:text-base text-gray-500 line-clamp-5 text-ellipsis">
                    {blog.introduction}
                  </p>
                )}
              </div>
              <div className="mt-6 text-center">
                <PrimaryButton
                  target="_blank"
                  href={`/blogs/${blog.URLSlug}`}
                  className="!bg-white !text-black !py-2 !px-6 xl:!py-3 xl:!px-10 !rounded-full !border-2 !text-base xl:!text-lg !border-v2311-primary !font-semibold hover:!bg-v2311-primary hover:!text-white transition-all"
                >
                  {buttonText}
                </PrimaryButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
