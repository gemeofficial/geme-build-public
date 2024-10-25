'use client'

import { Dialog, Transition } from '@headlessui/react'
import { MouseEventHandler, PropsWithChildren, useState, Fragment } from 'react'
import { XCircleIcon } from '@heroicons/react/24/solid'
import classNames from './lib/classNames'
import mixpanel from 'mixpanel-browser'
import { hasMixpanel } from './lib'

export function PlayIcon({
  size = 'large',
  className,
}: {
  size?: 'icon' | 'small' | 'medium' | 'large'
  className?: string
}) {
  return (
    <svg
      className={classNames(
        ' text-v2311-primary ',
        className != null ? className : '',
        size === 'icon' ? 'h-6 w-6' : '',
        size === 'small' ? 'h-12 w-12' : '',
        size === 'medium' ? 'h-16 w-16' : '',
        size === 'large' ? 'h-20 w-20' : '',
      )}
      fill="currentColor"
      viewBox="0 0 84 84"
    >
      <circle opacity="0.9" cx={42} cy={42} r={42} fill="white" />
      <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
    </svg>
  )
}

export function VideoInlinePlayer({
  videoUrl,
  description,
  playButtonSize,
  children,
  hiddenPlayIcon,
  mixpanelStatPayload,
}: PropsWithChildren<IVideoInlinePlayerProps>) {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  // 向后台发送统计信息
  function mixpanelStatHandler() {
    if (mixpanelStatPayload && hasMixpanel()) {
      mixpanel.track(
        mixpanelStatPayload.title,
        mixpanelStatPayload?.payload || {},
      )
    }
  }

  return (
    <>
      <PlayButton
        videoUrl={videoUrl}
        description={description}
        size={playButtonSize}
        onClick={() => {
          openModal()
          mixpanelStatHandler()
        }}
        hiddenPlayIcon={hiddenPlayIcon}
      >
        {children}
      </PlayButton>

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
                <Dialog.Panel className="transform text-left align-middle shadow-xl transition-all bg-white relative w-full">
                  <XCircleIcon
                    className="w-12 h-12 absolute -top-14 right-0  cursor-pointer fill-white/80 hover:fill-white"
                    onClick={closeModal}
                  />
                  <div className="relative h-0 w-full pb-[56.25%]">
                    <iframe
                      src={videoUrl}
                      className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
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

interface IPlayButtonProps extends IVideoInlinePlayerProps {
  onClick?: MouseEventHandler<HTMLDivElement>
  size?: 'small' | 'medium' | 'large'
}

function PlayButton({
  description,
  size,
  onClick,
  children,
  hiddenPlayIcon = false,
}: PropsWithChildren<IPlayButtonProps>) {
  return (
    <div onClick={onClick} className="group">
      <span className="sr-only">{description}</span>
      {children}

      {!hiddenPlayIcon && (
        <span
          className="absolute inset-0 flex h-full w-full items-center justify-center"
          aria-hidden="true"
        >
          <PlayIcon
            size={size}
            className="opacity-80 group-focus:opacity-100 group-hover:opacity-100 group-active:opacity-100 xl:opacity-50 xl:group-hover:opacity-100 transition-opacity"
          />
        </span>
      )}
    </div>
  )
}

export interface IVideoInlinePlayerProps {
  videoUrl: string
  description?: string
  playButtonSize?: IPlayButtonProps['size']
  hiddenPlayIcon?: boolean
  mixpanelStatPayload?: {
    title: string
    payload?: { [key: string]: any }
  }
}
