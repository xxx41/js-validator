export const TestConstraint = (
    condition: (x: any) => boolean,
    value: any,
    message: string | null = null,
    defaultMessage: string,
) => {
    return condition(value) || message || defaultMessage
}