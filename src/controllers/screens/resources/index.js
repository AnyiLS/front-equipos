import React from "react";
import useApi from "api";
import useModels from "models";

const useResources = () => {
    /** Api */
    const {useActions} = useApi();
    const {dispatch, useCoursesActions} = useActions();
    const {actGetResources} = useCoursesActions();

    const [vitek, setVitek] = React.useState([]);
    const [fillmaray, setFillmaray] = React.useState([]);
    const [bactalec, setBactalec] = React.useState([]);
    const [vidas, setVidas] = React.useState([]);

    /** Models */
    const {useSelectors} = useModels();
    const {useSelector, useCoursesSelectors} = useSelectors();
    const {resourcesSelector} = useCoursesSelectors();
    const resources = useSelector(resourcesSelector);

    React.useEffect(() => {
        dispatch(actGetResources({
            onError: (error) => console.error("GET_RESOURSES: ", error)
        }))
    }, [])

    React.useEffect(() => {
        if(resources) {
            console.log(typeof resources)
            setVitek(resources.filter(item => item.course_id === "2"));
            setFillmaray(resources.filter(item => item.course_id === "3"));
            setBactalec(resources.filter(item => item.course_id === "4"));
            setVidas(resources.filter(item => item.course_id === "5"));
        }
    }, [resources]);

    return {
        vitek,
        fillmaray,
        bactalec,
        vidas
    };
}

export default useResources;