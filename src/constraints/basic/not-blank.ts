import { TestConstraint } from "../../core/constraint";

const NotBlankConstraint = (value: any) => {
    return !(value === '' || value === null || Array.isArray(value) && value.length === 0)
}

export const NotBlank = (
    value: any,
    message: string | null = null
) => TestConstraint(NotBlankConstraint, value, message, 'constraint_not_blank')
