const useValidators = () => {
    const validateOnlyText = (text) => {
        let regex = /^[^\d]*$/;

        return regex.test(text);
    }

    const validateCorrectEmail = (text) => {
        let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        return regex.test(text);
    }

    const validateOnlyNumbers = (text) => {
        let regex = /^\d+$/;
        return regex.test(text);
    }

    return {
        validateOnlyText,
        validateCorrectEmail,
        validateOnlyNumbers
    }
}

export default useValidators;