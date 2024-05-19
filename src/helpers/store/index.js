import React from "react";

const useStore = () => {
    const [store, setStore] = React.useState({});

    const getSelector = (name) => {
        return store[name];
    }

    React.useEffect(() => {
        const storage = JSON.parse(localStorage.getItem('persist:root'));
        setStore(storage);
    }, []);

    return {
        getSelector
    }
}

export default useStore;