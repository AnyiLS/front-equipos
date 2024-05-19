import React from "react";
/**  */
import { Container, LoginContainer, TitleLogin } from "./Login.styles";
/** Assets */
import { inputsLogin } from "./inputsLogin";
/** Local Modules */
import useControllers from "controllers";

const Login = () => {
    /** Controllers */
    const { useScreenHooks } = useControllers();
    const { useLogin } = useScreenHooks();
    const {
        errors,
        isValid,
        register,
        handleLogin,
        handleSubmit
    } = useLogin();

    return (
        <LoginContainer>
            <Container>
                <img src="/images/logo.svg" alt="logo" width={300} height={107} className="mt-[50px]" />
                <TitleLogin>Plataforma de formación online</TitleLogin>
                <form className="form-input" onSubmit={handleSubmit(handleLogin)}>
                    {
                        inputsLogin.map((item, index) => (
                            <div className=" mt-[10px]" key={index}>
                                <div className="sm:col-span-4">
                                    <div className="mt-2">
                                        <div
                                            className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                                            <input
                                                type={item.type}
                                                placeholder={item.placeholder}
                                                {...register(item.name, item.rules)}
                                            />
                                        </div>
                                        {errors[item.name] &&
                                            <small className="text-[#D50000]">{errors[item.name].message}</small>}
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                    <div>
                        <p>
                            ¿Aún no tiene cuenta? <a href="/register">Regístrese aquí </a>y pronto
                            recibirá acceso a la plataforma de formación online. <br /> <br />
                            <a href="/password-recovery"> Recuperar contraseña.</a>
                        </p>
                    </div>
                    <button
                        disabled={!isValid}
                        type="submit"
                        className="flex w-full disabled:bg-[rgba(89,178,36,.8)] justify-center rounded-md bg-[#59b224] mt-[20px]  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Sign in
                    </button>
                </form>
      </Container>
    </LoginContainer>
  );
};

export default Login;
