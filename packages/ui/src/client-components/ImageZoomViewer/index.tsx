'use client'

import 'viewerjs/dist/viewer.css'
import { PropsWithChildren } from 'react'
import React, { useRef, useEffect } from 'react'
import Viewer from 'viewerjs'
import { defaultConfig } from './config'
import styles from './style.module.css'

/**
 * components：图片 zoom 放大组件
 * 使用说明：1.通过children的方式进行使用。
 *          2.如需要自定义配置，可以通过props的方式修改默认配置。
 *          3.同时支持next/Image、img。
 *          4.支持单张图zoom；支持图片列表zoom（多个img）。
 *          5.支持图文混排数据列表 （Viewer.js使用element.querySelectorAll('img')获取所有img，对于非纯图片排布的方式也能支持）
 *
 * 1.使用next/Image                                   2.使用普通的img标签
 * <ImageZoomViewer>                                    <ImageZoomViewer>
     <Image                                               <img
       className="h-48 w-full object-cover"                 className="w-full"
       src={blog.coverImage}                                src="/assets/images/xxx.png"
       alt={blog.title}                                     alt="zoom组件展示的title内容默认从alt属性提取"
       layout="responsive"                                ></img>
       width={91}                                         ...more img
       height={48}                                      </ImageZoomViewer>
     ></Image>
   </ImageZoomViewer>

   3. 图文混合列表 ImageZoomViewer也可以当做div-box使用  eg：
   <ImageZoomViewer className="mt-4 grid grid-cols-2 items-start sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
      {features.map(
        ({ name,title,imageSrc,imageAlt }) => (
          <div key={name} className="flex flex-col-reverse px-0 py-0">
            <div className="mt-4">
              <h3 className="text-lg font-semibold  text-gray-900">
                {title}
              </h3>
            </div>

            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={imageSrc}
                alt={imageAlt}
                className="object-cover object-center"
                layout="fill"
              />
            </div>
          </div>
        )
      )}
   </ImageZoomViewer>
 */

export interface ImageZoomViewerOptions extends Viewer.Options {}

const ImageZoomViewer = (props: PropsWithChildren & ImageZoomViewerOptions) => {
  const viewerRef = useRef(null)
  const { children, className } = props

  useEffect(() => {
    const viewer = new Viewer(viewerRef.current!, {
      ...defaultConfig,
      ...props,
    })

    // 销毁查看器以避免内存泄漏
    return () => {
      // 在nextjs中不需要销毁 因为nextjs切换route 始终会返回新的html！
      // viewer.destroy()
    }
  }, [props])

  return (
    <div
      ref={viewerRef}
      id="image-zoom-viewer"
      className={`${children ? styles['pointer'] : ''}
      ${className ? className : ''}`}
    >
      {children}
    </div>
  )
}

export default ImageZoomViewer
