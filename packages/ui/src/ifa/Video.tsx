'use client'

import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { XCircleIcon } from '@heroicons/react/24/solid'

import { hasMixpanel } from '../lib'
import mixpanel from 'mixpanel-browser'
import { PlayIcon } from '../video-inline-player'
import clsx from 'clsx'

export interface IVideoProps
  extends React.DetailedHTMLProps<
    React.VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  > {
  rootClassName?: string
  mixpanelTitle?: string
}

export default function Video(props: IVideoProps) {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => setIsOpen(false)

  const newProps = {
    controls: false,
    autoPlay: true,
    playsInline: true,
    muted: true,
    loop: true,
    ...props,
  }

  return (
    <>
      {/* children */}
      <div
        onClick={() => {
          if (hasMixpanel()) {
            mixpanel.track('Watch IFA Page Video', {
              Title: props.mixpanelTitle || 'IFA Example Video',
              srcUrl: newProps.src,
            })
          }
          setIsOpen(true)
        }}
        className={clsx(
          'relative rounded-lg overflow-hidden group',
          props?.rootClassName,
        )}
      >
        <div className="relative h-full w-full object-cover transition-transform group-hover:scale-125 duration-[0.25s] ease-[cubic-bezier(0.24, 0.8, 0.4, 1)]">
          <video
            {...newProps}
            className={clsx('object-cover', props?.className)}
          >
            Your browser does not support HTML5 video.
          </video>
        </div>
        <button
          type="button"
          className="absolute inset-0 w-full opacity-80 hover:opacity-100 transition-opacity duration-200"
          title="Play fullscreen video"
        >
          <PlayIcon className="m-auto hidden md:block" size="medium" />
          <PlayIcon className="m-auto md:hidden" size="small" />
        </button>
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
                <Dialog.Panel className="transform text-left align-middle shadow-xl transition-all relative w-full">
                  <XCircleIcon
                    className="w-12 h-12 absolute -top-14 right-0  cursor-pointer fill-white/80 hover:fill-white"
                    onClick={closeModal}
                  />
                  <div className="relative h-full w-full pb-[56.25%]">
                    {/* mp4 */}
                    <video
                      autoPlay
                      muted
                      loop
                      controls
                      className="overflow-hidden object-contain absolute top-0 left-0 w-full h-full"
                      poster={newProps.poster}
                    >
                      <source src={newProps.src} type="video/mp4" />
                      Your browser does not support HTML5 video.
                    </video>
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
