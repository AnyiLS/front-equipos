import React, { useState, Fragment } from "react";
import HeaderStyles from "./header.styles";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <HeaderStyles.Container>
        <div className="header">
          <a href="/">
            <img
              src="/images/logo.svg"
              className="logo"
              alt=""
              width={130}
              height={47}
            />
          </a>

          <div className="menu">
            <a href="/quienes-somos">Quienes somos</a>
            <a href="/cursos">Cursos de formacion</a>
            <a href="/recursos">Recursos</a>
            <a href="/perfil">Perfil de usuario</a>

            <img
              src="/images/icons/hamburguer.svg"
              alt=""
              width={30}
              height={30}
              onClick={() => setOpen(!open)}
              className="navbar"
            />
          </div>
        </div>
      </HeaderStyles.Container>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                          <img
                            src="/images/logo.svg"
                            className="w-[250px] pb-[30px]"
                            alt=""
                            width={130}
                            height={47}
                          />
                        </Dialog.Title>
                      </div>
                      <div className="relative mt-6 flex flex-col px-4 sm:px-6">
                        <a
                          href="/quienes-somos"
                          className="w-full pb-[27px] uppercase text-lg text-[#333] leading-[22px]"
                        >
                          Quienes somos
                        </a>
                        <a
                          href="/cursos"
                          className="w-full pb-[27px] uppercase text-lg text-[#333] leading-[22px]"
                        >
                          Cursos de formacion
                        </a>
                        <a
                          href="/recursos"
                          className="w-full pb-[27px] uppercase text-lg text-[#333] leading-[22px]"
                        >
                          Recursos
                        </a>
                        <a
                          href="/perfil"
                          className="w-full pb-[27px] uppercase text-lg text-[#333] leading-[22px]"
                        >
                          Perfil de usuario
                        </a>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </React.Fragment>
  );
};

export default Header;
