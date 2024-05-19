import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
/** Local Modules */
import useApi from "api";
import useModels from "models";
import useHelpers from "helpers";

const useRegister = () => {
    /** Variable */
    const router = useNavigate();

    /** Api */
    const { useActions } = useApi();
    const { dispatch, useAuthActions } = useActions();
    const { actRegister } = useAuthActions();

    /** Models */
    const { useSelectors } = useModels();
    const { useSelector, useAuthSelectors } = useSelectors();
    const { loginSelector } = useAuthSelectors();
    const login = useSelector(loginSelector);

    /** Helpers */
    const { useValidators } = useHelpers();
    const { validateOnlyText, validateCorrectEmail, validateOnlyNumbers } =
        useValidators();

    /** States */
    const [error, setErrors] = useState("");

    /** Use Form */
    const { register, handleSubmit, reset, setError } = useForm({
        mode: "onChange",
    });

    const validateData = (data) => {
        if (!data.name) {
            setError("name", {
                type: "validate",
                message: "Tu Nombre es requerido.",
            });
            setErrors("Tu Nombre es requerido.")
        } else if (!validateOnlyText(data.name)) {
            setError("name", {
                type: "validate",
                message: "No pueden haber numeros en tu nombre.",
            });
            setErrors("No pueden haber numeros en tu nombre.")
        } else if (!data.last_name) {
            setError("last_name", {
                type: "validate",
                message: "Tus apellidos son requeridos.",
            });
            setErrors("Tus apellidos son requeridos.")
        } else if (!validateOnlyText(data.last_name)) {
            setError("last_name", {
                type: "validate",
                message: "No pueden haber numeros en tus apellidos.",
            });
            setErrors("No pueden haber numeros en tus apellidos.")
        } else if (!data.password) {
            setError("password", {
                type: "validate",
                message: "La contrasena es requerida.",
            });
            setErrors("La contrasena es requerida.")
        } else if (!data.email) {
            setError("email", {
                type: "validate",
                message: "El correo electronico es requerido.",
            });
            setErrors("El correo electronico es requerido.")
        } else if (!validateCorrectEmail(data.email)) {
            setError("email", {
                type: "validate",
                message: "Ingresa un correo electronico valido.",
            });
            setErrors("Ingresa un correo electronico valido.")
        } else if (!data.phone) {
            setError("phone", {
                type: "validate",
                message: "Tu numero telefonico es requerido.",
            });
            setErrors("Tu numero telefonico es requerido.")
        } else if (!validateOnlyNumbers(data.phone)) {
            setError("phone", {
                type: "validate",
                message: "Ingresa un numero telefonico valido.",
            });
            setErrors("Ingresa un numero telefonico valido.")
        } else if (!data.job_location) {
            setError("email", {
                type: "job_location",
                message: "Debemos saber donde trabajas",
            });
            setErrors("Debemos saber donde trabajas")
        } else if (!data.home_location) {
            setError("email", {
                type: "home_location",
                message: "Queremos saber donde trabajas.",
            });
            setErrors("Queremos saber donde trabajas.")
        } else {
            return true;
        }
    };

    /**
     * This function retrieves the form data and sends it to the API.
     * If everything goes well, it redirects the user to the instructions page.
     * Otherwise, it informs that an error occurred when registering the user.
     * @returns {void}
     */
    const handleSentRegister = handleSubmit((data) => {
        let validateDatas = validateData(data);

        if (validateDatas) {
            dispatch(
                actRegister({
                    onError: (error) => {
                        Swal.fire({
                            icon: "error",
                            title: "En el registro!",
                            text: `Ocurrio un problema en el momento de realizar el registro: ${error}`,
                        });
                    },
                    onSuccess: () => {
                        Swal.fire({
                            icon: "success",
                            title: "Registro exitoso!",
                        });

                        reset({});
                        window.location.href = "/login"
                    },
                    data,
                })
            );
        }
    });

    /** Effects */
    useEffect(() => {
        if (login.login.token) {
            router("/");
        }
    }, [login]);

    return {
        register,
        error,
        handleSentRegister,
    };
};

export default useRegister;
