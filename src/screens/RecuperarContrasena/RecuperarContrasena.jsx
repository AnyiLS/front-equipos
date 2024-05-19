import React from "react";

/** Local Modules */
import useControllers from "controllers";
/** Styles */
import {
    LoginContainer,
    Container,
    TitleLogin,
} from "./RecuperarContrasena.styles";
import { inputsPasswordRecovery } from "./inputs";

const RecuperarContrasena = () => {
    /** Controllers */
    const { useScreenHooks } = useControllers();
    const { usePasswordRecovery } = useScreenHooks();
    const { errors, isValid, register, handleSubmit, handleChangePassword } =
        usePasswordRecovery();

    return (
        <LoginContainer>
            <Container>
                <img
                    src="/images/logo.svg"
                    alt="logo"
                    width={300}
                    height={107}
                    className="mt-[50px]"
                />
                <TitleLogin>Recuperar Contraseña</TitleLogin>
                <form className="form-input" onSubmit={handleSubmit(handleChangePassword)}>
                    {inputsPasswordRecovery.map((item, key) => (
                        <div className=" mt-[10px]" key={key}>
                            <div className="sm:col-span-4">
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#59b224]">
                                        <input
                                            type={item.type}
                                            placeholder={item.placeholder}
                                            {...register(item.name, item.rules)}
                                        />
                                       
                                    </div>
                                    {errors[item.name] && <small className="text-[#D50000]">{errors[item.name].message}</small>}
                                </div>
                            </div>
                        </div>
                    ))}

                    <button
                        disabled={!isValid}
                        type="submit"
                        className="flex w-full disabled:bg-[rgba(89,178,36,.8)] justify-center rounded-md bg-[#59b224] mt-[20px] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#59b224] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#59b224]"
                    >
                        Cambiar Contraseña
                    </button>
                    <div>
                        <p>
                            ¿Aún no tiene cuenta?{" "}
                            <a href="/register">Regístrese aquí </a>y pronto
                            recibirá acceso a la plataforma de formación online.{" "}
                            <br /> <br />
                            <a href="/login"> Iniciar sesión.</a>
                        </p>
                    </div>
                </form>
            </Container>
        </LoginContainer>
    );
};

export default RecuperarContrasena;
