export type FieldValidatorType = (value: string) => string | undefined
export const required: FieldValidatorType = (value: string) => {
    if (value) return undefined;

    return `Field is required`
}

export const maxLengthCreator = (maxLength: number): FieldValidatorType => (value) => {
    if (value && value.length > maxLength) return "Max length is 30 symbols";

    return undefined
}

