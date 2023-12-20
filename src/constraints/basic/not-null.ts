import { TestConstraint } from "../../core/constraint";

const NotNullConstraint = (value: any) => value !== null;

export const NotNull = (
    value: any,
    message: string | null = null
) => TestConstraint(NotNullConstraint, value, message, 'constraint_not_null')
