'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, PropsWithChildren, useEffect, useState } from 'react'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { videoType } from './VideosItem'
import {
  InstagramEmbed,
  FacebookEmbed,
  YouTubeEmbed,
  TikTokEmbed,
} from 'react-social-media-embed'
import { VideoLoading } from '../loading-components'

export interface ModalContainer {
  type: videoType
  src: string
  coverImageUrl: string
  name: string
  className?: string
  onPlayCallback?: (payload: {
    src: string
    type: string
    name: string
  }) => void
}

export default function ModalContainer({
  coverImageUrl,
  src,
  type,
  name,
  children,
  className,
  onPlayCallback,
}: PropsWithChildren<ModalContainer>) {
  const [isOpen, setIsOpen] = useState(false)

  const defaultCommonProps = {
    width: '100%',
    height: 576,
    className: 'absolute inset-0 w-full h-full',
    url: src,
    embedPlaceholder: <VideoLoading className="min-h-[576px]" />,
  }

  const closeModal = () => setIsOpen(false)

  const [paddingBottom, setPaddingBottom] = useState('56.25%')
  const [commonProps, setcommonProps] = useState<any>(defaultCommonProps)

  useEffect(() => {
    if (type === 'instagram' && window.innerWidth >= 768) {
      setcommonProps({
        ...commonProps,
        height: '90vh',
        embedPlaceholder: <VideoLoading className="min-h-[90vh]" />,
      })
      setPaddingBottom('90vh')
    } else {
      setcommonProps(defaultCommonProps)
      setPaddingBottom('56.25%')
    }
  }, [type, isOpen])

  return (
    <>
      {/* children */}
      <div
        onClick={() => {
          onPlayCallback && onPlayCallback({ src, type, name })
          setIsOpen(true)
        }}
        className={className}
      >
        {children}
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-80" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center m-auto max-w-[1024px]">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="transform text-left align-middle shadow-xl transition-all relative w-full -translate-y-[50%] md:translate-y-0">
                  <XCircleIcon
                    className="w-12 h-12 absolute -top-14 right-0  cursor-pointer fill-white/80 hover:fill-white"
                    onClick={closeModal}
                  />
                  <div
                    style={{
                      paddingBottom: paddingBottom,
                    }}
                    className="relative h-full w-full pb-[56.25%]"
                  >
                    {/* mp4 */}
                    {type === 'mp4' && (
                      <video
                        autoPlay
                        muted
                        loop
                        controls
                        className="overflow-hidden object-cover absolute top-0 left-0 w-full h-full"
                        poster={coverImageUrl}
                      >
                        <source src={src} type="video/mp4" />
                        Your browser does not support HTML5 video.
                      </video>
                    )}

                    {/* youtube */}
                    {type === 'youtube' && <YouTubeEmbed {...commonProps} />}

                    {/* tiktok */}
                    {type === 'tiktok' && <TikTokEmbed {...commonProps} />}

                    {/* instagram */}
                    {type === 'instagram' && (
                      <InstagramEmbed captioned {...commonProps} />
                    )}

                    {/* facebook */}
                    {type === 'facebook' && <FacebookEmbed {...commonProps} />}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
