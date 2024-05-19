import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
/** Local Modules */
import useApi from "api";

const useLogin = () => {

    /** Api */
    const {useActions} = useApi();
    const {dispatch, useAuthActions} = useActions();
    const {actLogin} = useAuthActions();

    /** Form */
    const {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm({mode: "onChange"});

    const handleLogin = (data) => {
        dispatch(actLogin({
            data,
            onError: (error) => {
                if(error.response) {
                    if(error.response.status === 404) {
                        Swal.fire({
                            icon: "error",
                            text: "Las credenciales ingresados no existen, verifica los datos y vuelve a intentarlo."
                        })
                    } else if (error.response.status === 500) {
                        if(error.response.data.data) {
                            Swal.fire({
                                icon: "error",
                                text: error.response.data.data.email[0] ?? error.response.data.data.password[0]
                            })
                        }
                    }
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Ocurrio un problema al momento de iniciar sesion."
                    })
                }
                console.error(error)
                // if(error.response) {
                //     Object.keys(error.response.data.data).map((key) => {
                //         setError(key, {
                //             type: "validate",
                //             message: error.response.data.data[key][0]
                //         })
                //     })
                // } else {
                //     console.error(error)
                // }
            },
            onSuccess: () => {
                Swal.fire({
                    icon: "success",
                    title: "Bienvenido!"
                }).then()

                window.location.href = "/"
            }
        }))
    }

    return {
        errors,
        isValid,
        register,
        handleSubmit,
        handleLogin
    };
}

export default useLogin;