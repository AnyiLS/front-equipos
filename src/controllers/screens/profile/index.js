import React from "react";
/** Local Modules */
import useApi from "api";
import useModels from "models";
import Swal from "sweetalert2";

const useProfile = () => {
    /** Api */
    const {useActions} = useApi();
    const {dispatch, useAuthActions} = useActions();
    const {actChangeImageProfile, actEditInfo,  actGetUserInfo} = useAuthActions();

    /** Models */
    const {useSelectors} = useModels();
    const {useSelector, useAuthSelectors} = useSelectors();
    const {loginSelector} = useAuthSelectors();
    const {login} = useSelector(loginSelector);
    const {user} = login;

    /** States */
    const [openEdit, setOpenEdit] = React.useState(false);

    const changeImage = (e) => {
        let formData = new FormData();
        formData.append('image', e.target.files[0]);
        formData.append('id', user.id);

        dispatch(actChangeImageProfile({
            data: formData,
            login,
            onError: (error) => {
                Swal.fire({
                    icon: "error",
                    text: "Ocurrio un problema al momento de cambiar la image de perfil"
                }).then();

                console.error("CHANGE_IMAGE_PROFILE: ", error);
            },
            onSuccess: () => {
                Swal.fire({
                    icon: "success",
                    text: "Cambio de image exitosa."
                }).then();
            }
        }));
    }

    const openEditModal = () => setOpenEdit(true);
    const closeEditModal = () => setOpenEdit(false);

    const handleEditInfo = (data) => {
        dispatch(actEditInfo({
            data,
            login,
            onError: (error) => {
                Swal.fire({
                    icon: "error",
                    text: "Ocurrio un problema al momento de cambiar tu informacion"
                }).then();

                console.error("CHANGE_IMAGE_PROFILE: ", error);
            },
            onSuccess: () => {
                
                Swal.fire({
                    icon: "success",
                    text: "Cambio de informacion exitosa."
                }).then();

                setOpenEdit(false)
            }
        }))
    }

    const logout = () => {
        window.localStorage.clear()
        window.location.href = "/login";
    }

    React.useEffect(() => {
        if(!login.token) {
            window.location.href = "/login"
        }

        dispatch(actGetUserInfo({
            login,
            id: login.user.id,
            onError: (error) => console.error('GET_USER_INFO: ', error)
        }))
    }, [login])

    return {
        user,
        changeImage,
        handleEditInfo,
        openEdit,
        openEditModal,
        closeEditModal,
        logout
    };
}

export default useProfile;