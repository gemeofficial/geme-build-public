import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { ReactNode } from 'react'

interface ISuccessNoticeProps {
  title?: ReactNode
  description?: ReactNode
  open?: boolean
  setOpen?: (show: boolean) => void
}

const successNoticeProps: ISuccessNoticeProps = {
  title: 'Payment successful',
  description: (
    <>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet
      labore.
    </>
  ),
  open: true,
  setOpen: () => {
    console.log('Close success notice')
  },
}

function SuccessNotice({
  title,
  description,
  open,
  setOpen = () => {},
}: ISuccessNoticeProps) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon
                      className="h-6 w-6 md:h-8 md:w-8 text-v2311-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className=" v2311-font-h2 text-v2311-fg-dark-black"
                    >
                      {title}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="v2311-font-body text-v2311-fg-light-black">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

const EXAMPLE_SUCCESS_NOTICE_PROPS = { successNoticeProps }

export { SuccessNotice, EXAMPLE_SUCCESS_NOTICE_PROPS }
export type { ISuccessNoticeProps }
