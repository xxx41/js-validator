import { describe, expect, test } from "vitest";
import { NotNull } from '../../src/constraints/basic/not-null'
import { Validator } from '../../src/core/validator';
import { Dataset } from '../../src/types/types'

describe('validate', () => {
    test('must return true if dataset is empty', () => {
        const validator = new MockValidator()
        expect(validator.validate({})).toBeTruthy()
    })

    test('must return true if dataset has a valid set of values', () => {
        const validator = new MockValidator()
        expect(validator.validate(dataset.valid)).toBeTruthy()
    })

    test('must return false if dataset has a invalid set of values', () => {
        const validator = new MockValidator()
        expect(validator.validate(dataset.invalid)).toBeFalsy()
    })
})

describe('firstError', () => {
    const validator = new MockValidator()

    test('must return null if theres is not errors', () => {
        validator.validate(dataset.valid)
        expect(validator.firstError()).toBeNull()
    })

    test('must not return null if there are some error', () => {
        validator.validate(dataset.invalid)
        expect(validator.firstError).not.toBeNull()
    })
})

class MockValidator extends Validator {
    protected constraints(): Dataset {
        return {
            'username': [NotNull],
        }
    }
}

const dataset = {
    invalid: { username: null },
    valid: { username: 'validator' },
}
