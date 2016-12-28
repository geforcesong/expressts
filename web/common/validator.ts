class Validator {
    static isEmptyString(input: string) {
        if (input && input.length > 0)
            return false;
        return true;
    }
}

export default Validator;