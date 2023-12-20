import { ErrorList, ConstraintsList, Dataset } from '../types/types'

export abstract class Validator {

    private errors: ErrorList = {};
    protected abstract constraints(): ConstraintsList

    public validate(dataset: Dataset): boolean {
        for (const [key, value] of Object.entries(dataset)) {
            if (!this.constraints().hasOwnProperty(key)) {
                continue
            }

            this.validateField(key, value, this.constraints()[key])
        }

        return !this.hasErrors()
    }

    public firstError(): string | null {
        const errors = Object.values(this.errors);
        return errors.length > 0 ? errors[0][0] : null
    }

    private validateField(key: string, value: any, constraints: CallableFunction[]): void {
        constraints.forEach(constraint => {
            const testConstraint = constraint(value)
            if (testConstraint !== true) {
                this.errors[key] = [...this.errors[key] ?? [], testConstraint]
            }
        });
    }

    private hasErrors(): boolean {
        return Object.keys(this.errors).length > 0;
    }
}