'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, PropsWithChildren, useState } from 'react'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { videoType } from '../user-stories-videos/VideosItem'
import {
  InstagramEmbed,
  FacebookEmbed,
  YouTubeEmbed,
  TikTokEmbed,
} from 'react-social-media-embed'

export interface ModalContainer {
  type: videoType
  src: string
  coverImageUrl: string
}

export default function ModalContainer({
  coverImageUrl,
  src,
  type,
  children,
}: PropsWithChildren<ModalContainer>) {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => setIsOpen(false)

  return (
    <div>
      {/* children */}
      <div onClick={() => setIsOpen(true)}>{children}</div>

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
                <Dialog.Panel className="transform text-left align-middle shadow-xl transition-all relative w-full">
                  <XCircleIcon
                    className="w-12 h-12 absolute -top-14 right-0  cursor-pointer fill-white/80 hover:fill-white"
                    onClick={closeModal}
                  />
                  <div className="relative h-full w-full pb-[56.25%]">
                    {/* youtube */}
                    {type === 'youtube' && (
                      <YouTubeEmbed
                        width="100%"
                        height={576}
                        placeholderImageUrl={coverImageUrl}
                        className="absolute top-0 left-0 w-full"
                        url={src}
                      />
                    )}

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

                    {/* tiktok */}
                    {type === 'tiktok' && (
                      <TikTokEmbed
                        width="100%"
                        height={576}
                        url={src}
                        className="absolute w-full h-full"
                      />
                    )}

                    {/* instagram */}
                    {type === 'instagram' && (
                      <InstagramEmbed
                        width="100%"
                        height={576}
                        url={src}
                        className="absolute w-full h-full"
                      />
                    )}

                    {/* facebook */}
                    {type === 'facebook' && (
                      <FacebookEmbed
                        width="100%"
                        height={576}
                        url={src}
                        className="absolute w-full h-full"
                      />
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
