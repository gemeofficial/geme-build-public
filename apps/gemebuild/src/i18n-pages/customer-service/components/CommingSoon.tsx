'use client'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, PropsWithChildren, ReactNode } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import classNames from 'ui/src/lib/classNames'

interface IModalProps {
  modalTitle: ReactNode
  modalTitleClassName?: string
  isOpen: boolean
  closeModal: () => void
}

function Modal({
  isOpen,
  modalTitle,
  modalTitleClassName,
  closeModal,
  children,
}: PropsWithChildren<IModalProps>) {
  return (
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
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-5xl min-h-screen sm:min-h-full transform ovesm:min-h-fit lsm:roundd-md bg-white p-6 text-left align-middle shadow-xl transition-all">
                <button
                  onClick={closeModal}
                  className=" absolute right-0 top-0 z-10 m-6 opacity-40 hover:opacity-100 focus:outline-none "
                >
                  <XMarkIcon className="h-8 w-8 stroke-gray-900 " />
                </button>
                <Dialog.Title
                  as="h3"
                  className={classNames(
                    'text-xl font-medium leading-6 text-gray-900',
                    modalTitleClassName != null ? modalTitleClassName : '',
                  )}
                >
                  {modalTitle}
                </Dialog.Title>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

const CommingSoon = ({
  isOpen,
  closeModal,
  openModal,
}: {
  isOpen: boolean
  closeModal: () => void
  openModal: () => void
}) => {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      modalTitle="Curious about GEME? Subscribe for updates."
      modalTitleClassName="sr-only"
    >
      <div className="py-10">
        <p className="text-center">Comming soon....</p>
      </div>
    </Modal>
  )
}

export default CommingSoon
