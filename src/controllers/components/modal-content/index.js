import useApi from "api";
import Swal from "sweetalert2";

const useModalContent = () => {
    /** Api */
    const {useActions} = useApi();
    const {dispatch, useCoursesActions} = useActions();
    const {actSendQuiz} = useCoursesActions();


    const validateQuiz = ({questions, responses, content, id, module, step, course}) => {
        let responsesArray = [];

        for(let i = 0; i < questions.length; i++) {
            let response = questions[i].correct.split('.')[0];
            if(response === responses[i]) {
                responsesArray.push(responses[i]);
            }
        }

        let calification = responsesArray.length * 100 / questions.length;

        if(calification >= 80) {
            dispatch(actSendQuiz({
                data: {calification, content, user: id, module, course},
                onError: (error) => {
                    Swal.fire({
                        icon: "error",
                        title: "Ocurrio un problema!",
                        text: "Ocurrio un problema al momento de guardar tu examen, vuelve a intentarlo."
                    });

                    console.error("SAVE_QUIZ: ", error)
                },
                onSuccess: () => {
                    Swal.fire({
                        icon: "success",
                        title: "Bien Hecho!",
                        text: `Pasaste este examen!. tu nota fue de ${calification}%`,
                        allowOutsideClick: () => {
                          const popup = Swal.getPopup()
                          popup.classList.remove('swal2-show')
                          setTimeout(() => {
                            popup.classList.add('animate__animated', 'animate__headShake')
                          })
                          setTimeout(() => {
                            popup.classList.remove('animate__animated', 'animate__headShake')
                          }, 500)
                          return false
                        }
                      }).then((res) => {
                        res.isConfirmed && window.location.reload();
                      })
                }
            }));
        } else {
            Swal.fire({
                icon: "error",
                text: "Revisa tus respuestas y vuelve a enviar el examen."
            })

            step(0)
        }
    }

    return {
        validateQuiz
    };
}

export default useModalContent;