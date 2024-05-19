import React from "react";
import useControllers from "controllers";
import { RegisterContainer, Container, TitleLogin } from "./Register.styles";
/** Styles */
import './Register.scss'
import Select from 'react-select'

const Register = () => {
    /** Controllers */
    const { useScreenHooks } = useControllers();
    const { useRegister } = useScreenHooks();
    const { register, error, handleSentRegister, handleSubmit,
        setCountry,
        errors, countries } = useRegister();

    return (
        <RegisterContainer>
            <Container>
                <img
                    src="/images/logo.svg"
                    alt="logo"
                    width={300}
                    height={107}
                    className="mt-[50px]"
                />
                <TitleLogin>Registro</TitleLogin>
                <form className="form-input">
                    <div className="form-item-1">
                        <div className="sm:col-span-4">
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Ingresa tus nombres *"
                                        {...register('name', { required: { value: true, message: 'El campo es requerido.' } })}
                                    />
                                </div>
                                {errors['name'] && (
                                    <div>
                                        <small className="text-red-500 font-semibold">
                                            {errors['name'].message}
                                        </small>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="form-item-2">
                        <div className="sm:col-span-4">
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                                    <input
                                        type="text"
                                        name="last_name"
                                        placeholder="Ingresa tus apellidos *"
                                        {...register('last_name', { required: { value: true, message: 'El campo es requerido.' } })}
                                    />
                                </div>
                                {errors['last_name'] && (
                                    <div>
                                        <small className="text-red-500 font-semibold">
                                            {errors['last_name'].message}
                                        </small>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="form-item-1">
                        <div className="sm:col-span-4">
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Ingresa tu correo electronico *"
                                        {...register('email', { required: { value: true, message: 'El campo es requerido.' } })}
                                    />
                                </div>
                                {errors['email'] && (
                                    <div>
                                        <small className="text-red-500 font-semibold">
                                            {errors['email'].message}
                                        </small>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="form-item-2">
                        <div className="sm:col-span-4">
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                                    <Select
                                        className="w-full"
                                        options={countries}
                                        classNamePrefix="countries_"
                                        placeholder="Seleciona tu país *"
                                        onChange={(e) => setCountry(e)}
                                    />
                                </div>
                            </div>
                            {errors['country'] && (
                                <div>
                                    <small className="text-red-500 font-semibold">
                                        {errors['country'].message}
                                    </small>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="form-item-1">
                        <div className="sm:col-span-4">
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                                    <input
                                        type="number"
                                        name="document"
                                        placeholder="Ingresa tu numero de documento *"
                                        {...register('document', { required: { value: true, message: 'El campo es requerido.' } })}
                                    />
                                </div>
                                {errors['document'] && (
                                    <div>
                                        <small className="text-red-500 font-semibold">
                                            {errors['document'].message}
                                        </small>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="form-item-2">
                        <div className="sm:col-span-4">
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                                    <input
                                        type="number"
                                        name="phone"
                                        placeholder="Ingresa tu numero de celular *"
                                        {...register('phone', { required: { value: true, message: 'El campo es requerido.' } })}
                                    />
                                </div>
                                {errors['phone'] && (
                                    <div>
                                        <small className="text-red-500 font-semibold">
                                            {errors['phone'].message}
                                        </small>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="form-item-1">
                        <div className="sm:col-span-4">
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                                    <input
                                        type="text"
                                        name="job_location"
                                        placeholder="Institucion a la que perteneces *"
                                        {...register('job_location', { required: { value: true, message: 'El campo es requerido.' } })}
                                    />
                                </div>
                                {errors['job_location'] && (
                                    <div>
                                        <small className="text-red-500 font-semibold">
                                            {errors['job_location'].message}
                                        </small>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="form-item-2">
                        <div className="sm:col-span-4">
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                                    <input
                                        type="text"
                                        name="home_location"
                                        placeholder="Ingresa el lugar donde vives *"
                                        {...register('home_location', { required: { value: true, message: 'El campo es requerido.' } })}
                                    />
                                </div>
                                {errors['home_location'] && (
                                    <div>
                                        <small className="text-red-500 font-semibold">
                                            {errors['home_location'].message}
                                        </small>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="form-item-1">
                        <div className="sm:col-span-4">
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Ingresa tu contraseña *"
                                        {...register('password', { required: { value: true, message: 'El campo es requerido.' } })}
                                    />
                                </div>
                                {errors['password'] && (
                                    <div>
                                        <small className="text-red-500 font-semibold">
                                            {errors['password'].message}
                                        </small>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="form-item-2">
                        <div className="sm:col-span-4">
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Confirma tu contraseña *"
                                        {...register('Confirmar password', { required: { value: true, message: 'El campo es requerido.' } })}
                                    />
                                </div>
                                {errors['Confirmar password'] && (
                                    <div>
                                        <small className="text-red-500 font-semibold">
                                            {errors['Confirmar password'].message}
                                        </small>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div>
                        <small className="text-red-500 font-semibold">
                            {error}
                        </small>
                    </div>
                    <div>
                        <p>
                            Recuerde debe ser profesional sanitario para acceder
                            a esta web. Si ya tiene cuenta{' '}
                            <a href="/login">Inicie Sesión</a>
                        </p>
                    </div>
                    <button
                        onClick={handleSubmit(handleSentRegister)}
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-[#59b224] mt-[20px]  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Enviar solicitud
                    </button>
                </form>
            </Container>
        </RegisterContainer>
    );
};

export default Register;
