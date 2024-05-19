import React from "react";
import useControllers from "controllers";
import { RegisterContainer, Container, TitleLogin } from "./Register.styles";

const Register = () => {
    /** Controllers */
    const { useScreenHooks } = useControllers();
    const { useRegister } = useScreenHooks();
    const { register, error, handleSentRegister } = useRegister();

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
                                        name="email"
                                        placeholder="Ingresa tu correo electronico *"
                                        {...register("email")}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-item-2">
                        <div className="sm:col-span-4">
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Ingresa tus nombres *"
                                        {...register("name")}
                                    />
                                </div>
                            </div>
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
                                        {...register("document")}
                                    />
                                </div>
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
                                        {...register("phone")}
                                    />
                                </div>
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
                                        {...register("password")}
                                    />
                                </div>
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
                                        {...register("last_name")}
                                    />
                                </div>
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
                                        {...register("job_location")}
                                    />
                                </div>
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
                                        placeholder="Ingresa el lugar donde vives *"
                                        {...register("home_location")}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <small className="text-red-500 font-semibold">{error}</small>
                    </div>
                    <div>
                        <p>
                            Recuerde debe ser profesional sanitario para acceder
                            a esta web. Si ya tiene cuenta{" "}
                            <a href="/login">Inicie Sesión</a>
                        </p>
                    </div>
                    <button
                        onClick={handleSentRegister}
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-[#59b224] mt-[20px]  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Enviar solicitud
                    </button>
                </form>
            </Container>
        </RegisterContainer>
    );
};

export default Register;
