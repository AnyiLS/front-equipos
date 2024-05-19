import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";
import { inputsEdit } from "./inputsEdit";

const EditProfile = ({ data, onClose, open, onEdit }) => {
    /** Forms */
    const { register, reset, handleSubmit } = useForm({ mode: "onChange" });

    /** Refs */
    const cancelButtonRef = React.useRef(null)

    React.useEffect(() => {
        reset(data);
    }, [data]);

    return (
        <Transition.Root show={open} as={React.Fragment}>
            <Dialog
                as="div"
                className="relative z-10"
                initialFocus={cancelButtonRef}
                onClose={onClose}
            >
                <Transition.Child
                    as={React.Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={React.Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[800px]">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 max-w-[800px] w-full">
                                    <div className="grid grid-cols-2 gap-[5px]">
                                        {inputsEdit.map((item, index) => (
                                            <div key={index} className="mt-[5px]">
                                                <label
                                                    htmlFor="price"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    {item.label}
                                                </label>
                                                <div className="relative mt-[5px] rounded-md shadow-sm">
                                                    <input
                                                        type="text"
                                                        name="price"
                                                        id="price"
                                                        className="block w-full rounded-md border-0 py-1.5 px-[10px] text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        placeholder="0.00"
                                                        {...register(item.name, item.rules)}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-[#00427f] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                        onClick={handleSubmit(onEdit)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={onClose}
                                        ref={cancelButtonRef}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

EditProfile.propTypes = {
    data: PropTypes.object,
    open: PropTypes.bool,
    onClose: PropTypes.func,
    onEdit: PropTypes.func
}

export default EditProfile;
