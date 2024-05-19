export const inputsEdit = [
    {
        name: "name",
        type: "text",
        label: "Nombre:",
        placeholder: "Ingresa tu nombre",
        rules: {
            required: {
                value: true,
                message: "El campo es requerido"
            }
        }
    },
    {
        name: "email",
        type: "email",
        label: "Correo electronico:",
        placeholder: "Ingresa tu correo electronico",
        rules: {
            required: {
                value: true,
                message: "El campo es requerido"
            }
        }
    },
    {
        name: "job_location",
        type: "text",
        label: "Lugar donde trabajas:",
        placeholder: "Ingresa donde trabajas",
        rules: {
            required: {
                value: true,
                message: "El campo es requerido"
            }
        }
    },
    {
        name: "home_location",
        label: "Donde Vives:",
        type: "text",
        placeholder: "Ingresa donde vives",
        rules: {
            required: {
                value: true,
                message: "El campo es requerido"
            }
        }
    },
    {
        name: "phone",
        type: "text",
        label: "Telefono:",
        placeholder: "Ingresa tu telefono",
        rules: {
            required: {
                value: true,
                message: "El campo es requerido"
            }
        }
    },
    {
        name: "document",
        type: "text",
        label: "Numero de documento:",
        placeholder: "Ingresa tu numero de documento",
        rules: {
            required: {
                value: true,
                message: "El campo es requerido"
            }
        }
    },
]