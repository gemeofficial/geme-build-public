'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, PropsWithChildren, useCallback, useState } from 'react'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { videoType } from '../user-stories-videos/VideosItem'

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
                  <div className="relative h-0 w-full pb-[56.25%]">
                    {/* youtube */}
                    {type === 'youtube' && (
                      <iframe
                        src={src}
                        className="absolute top-0 left-0 w-full h-full"
                      ></iframe>
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
                      <>
                        {/* <blockquote
                          className="tiktok-embed max-w-2xl min-w-80 absolute top-0 left-0 h-full"
                          cite={src}
                          data-video-id="7312898892079697198"
                        ></blockquote>

                        <script
                          async
                          src="https://www.tiktok.com/embed.js"
                        ></script> */}
                        <blockquote
                          className="tiktok-embed"
                          cite="https://www.tiktok.com/@kc_smithwrites/video/7312898892079697198"
                          data-video-id="7312898892079697198"
                          // style="max-width: 605px;min-width: 325px;"
                        >
                          {' '}
                          <section>
                            {' '}
                            <a
                              target="_blank"
                              title="@kc_smithwrites"
                              href="https://www.tiktok.com/@kc_smithwrites?refer=embed"
                            >
                              @kc_smithwrites
                            </a>{' '}
                            Home composter in a tiny apartment &lt3{' '}
                            <a
                              title="composting"
                              target="_blank"
                              href="https://www.tiktok.com/tag/composting?refer=embed"
                            >
                              #composting
                            </a>{' '}
                            <a
                              title="seattle"
                              target="_blank"
                              href="https://www.tiktok.com/tag/seattle?refer=embed"
                            >
                              #seattle
                            </a>{' '}
                            <a
                              title="homecomposting"
                              target="_blank"
                              href="https://www.tiktok.com/tag/homecomposting?refer=embed"
                            >
                              #homecomposting
                            </a>{' '}
                            <a
                              title="apartmentcompost"
                              target="_blank"
                              href="https://www.tiktok.com/tag/apartmentcompost?refer=embed"
                            >
                              #apartmentcompost
                            </a>{' '}
                            <a
                              title="gemecomposter"
                              target="_blank"
                              href="https://www.tiktok.com/tag/gemecomposter?refer=embed"
                            >
                              #gemecomposter
                            </a>{' '}
                            <a
                              target="_blank"
                              title="♬ original sound - KC_SmithWrites"
                              href="https://www.tiktok.com/music/original-sound-7312898910106929966?refer=embed"
                            >
                              ♬ original sound - KC_SmithWrites
                            </a>{' '}
                          </section>{' '}
                        </blockquote>{' '}
                        <script
                          async
                          src="https://www.tiktok.com/embed.js"
                        ></script>
                      </>
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
