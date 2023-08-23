import Image, { StaticImageData } from 'next/image';

import { Fragment, useEffect, useRef, useState } from 'react';
import { BsChevronRight } from 'react-icons/bs';

import { Dialog, Transition } from '@headlessui/react';
import Throat from './throat';
import Nose from './nose';
import Ears from './ears';
import Allergies from './allergies';
import Naturopathic from './naturopathic';
import Ultrasound from './ultrasound';
import { IoMdClose } from 'react-icons/io';

export function ServiceCard({
  image,
  title,
  children,
}: {
  image: StaticImageData;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 w-full sm:w-[300px]">
      <Image
        src={image}
        alt={title}
        width={300}
        className="object-cover w-full aspect-video"
      />
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      <p className="text-gray-500">{children}</p>
      <p className="text-primary underline cursor-pointer">Mehr erfahren</p>
    </div>
  );
}

export function ServiceDialog({
  image,
  title,
  children,
  open,
  onClose,
}: {
  image: StaticImageData;
  title: string;
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-40" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="bg-white w-full max-w-screen-md rounded-lg overflow-hidden pb-5">
                {/* <Image
                  src={image}
                  alt={title}
                  width={678}
                  className="object-cover w-full aspect-video"
                /> */}
                <Dialog.Title className="text-2xl sm:text-4xl text-primary my-2 text-center">
                  {title}
                  <button
                    className="absolute right-2 top-2 text-3xl"
                    onClick={onClose}
                  >
                    <IoMdClose className="stroke-1" />
                  </button>
                </Dialog.Title>
                <div className="my-2 h-px w-11/12 bg-gray-200 mx-auto" />
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default function ServicesSlider() {
  const serviceSliderRef = useRef<HTMLDivElement>(null);
  const [isOverflown, setIsOverflown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (serviceSliderRef.current) {
        setIsOverflown(
          serviceSliderRef.current.scrollWidth >
            serviceSliderRef.current.clientWidth &&
            serviceSliderRef.current.scrollLeft == 0
        );
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    serviceSliderRef.current?.addEventListener('scroll', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      serviceSliderRef.current?.removeEventListener('scroll', handleResize);
    };
  }, []);

  return (
    <>
      <div
        ref={serviceSliderRef}
        className="grid grid-cols-1 sm:grid-cols-[repeat(6,300px)] gap-5 overflow-x-scroll mt-5 px-3 sm:px-10 relative pb-3"
      >
        <Throat />
        <Nose />
        <Ears />
        <Allergies />
        <Naturopathic />
        <Ultrasound />
        {isOverflown && (
          <button
            onClick={() => {
              if (serviceSliderRef.current) {
                serviceSliderRef.current.scrollTo({
                  left:
                    serviceSliderRef.current.scrollLeft +
                    serviceSliderRef.current.scrollWidth,
                  behavior: 'smooth',
                });
              }
            }}
            className="absolute top-1/2 right-5 flex items-center justify-center p-2 rounded-full bg-primary text-white"
          >
            <BsChevronRight className="stroke-1 text-xl" />
          </button>
        )}
      </div>
    </>
  );
}
