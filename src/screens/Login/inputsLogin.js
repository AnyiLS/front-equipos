export const inputsLogin = [
    {
        name: "email",
        type: "text",
        placeholder: "Ingresa tu correo electronico",
        rules: {
            required: {
                value: true,
                message: "El campo es requerido."
            }
        }
    },
    {
        name: "password",
        type: "password",
        placeholder: "Ingresa tu contrasena",
        rules: {
            required: {
                value: true,
                message: "El campo es requerido."
            }
        }
    }
]