import { TestConstraint } from "../../core/constraint";

const PositiveConstraint = (value: any) => !(!Number(value) || Number(value) <= 0);

export const Positive = (
    value: any,
    message: string | null = null
) => TestConstraint(PositiveConstraint, value, message, 'constraint_positive')
