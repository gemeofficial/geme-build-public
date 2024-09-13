import Image from 'next/image'
import Link from 'next/link'
import { SectionContainer, SectionTitle } from 'ui'
import PrimaryButton from 'ui/src/ui-components/PrimaryButton'

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
  blogs?: Blog[]
}

export default function BlogsSection({
  title,
  blogs,
  buttonText,
}: IBlogsSectionPropS) {
  return (
    <SectionContainer compact>
      <SectionTitle className="mb-8">{title}</SectionTitle>

      <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
        {blogs?.map((blog) => (
          <div key={blog.title} className="flex flex-col overflow-hidden">
            <div className="flex-shrink-0 relative">
              <Image
                className="h-48 xl:h-64 w-full object-cover"
                src={blog.coverImage}
                alt={blog.title}
                width={1920}
                height={1080}
                quality={80}
              />
              {/* 左上角的日期显示 */}
              <div className="absolute top-0 left-6 bg-green-600 text-white py-2 px-3 text-center">
                <span className="block text-2xl font-bold text-black">
                  {'25'}
                </span>
                <span className="block text-sm">{'Mar'}</span>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between bg-white p-6 w-[80%] mx-auto relative -top-10">
              <div className="flex-1">
                <p className="text-xl font-semibold text-gray-900">
                  {blog.title}
                </p>
                {blog.introduction != null && (
                  <p className="mt-3 text-base text-gray-500">
                    {blog.introduction}
                  </p>
                )}
              </div>
              <div className="mt-4 text-center">
                <PrimaryButton
                  href={`/blogs/${blog.URLSlug}`}
                  className="!bg-white !text-black !py-2 !px-6 !rounded-lg !border !border-v2311-primary !font-semibold hover:!bg-2311border-v2311-primary hover:!text-white !transition"
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
