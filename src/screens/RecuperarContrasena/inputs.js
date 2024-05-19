export const inputsPasswordRecovery = [
    {
        name: 'email',
        placeholder: "Ingresa tu correo electronico",
        type: "email",
        rules: {
            required: {
                value: true,
                message: "El campo es requerido"
            },
            pattern: {
                value:  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Ingresa un correo electronico valido."
            }
        }
    },
    {
        name: 'password',
        placeholder: "Ingresa tu contrasena",
        type: "password",
        rules: {
            required: {
                value: true,
                message: "El campo es requerido"
            }
        }
    },
    {
        name: 'confirm_password',
        placeholder: "Confirma tu contrasena",
        type: "password",
        rules: {
            required: {
                value: true,
                message: "El campo es requerido"
            }
        }
    },
]