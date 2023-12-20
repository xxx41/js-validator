import { expect, test } from "vitest";
import { NotBlank } from '../../../src/constraints/basic/not-blank'

test('must return default message if value is null', () => {
    expect(NotBlank(null)).toBe('constraint_not_blank')
})

test('muest return default message if value is empty', () => {
    expect(NotBlank('')).toBe('constraint_not_blank')
})

test('muest return default message if value is empty array', () => {
    expect(NotBlank([])).toBe('constraint_not_blank')
})

test('muest return true with valid value', () => {
    expect(NotBlank('validator')).toBeTruthy()
})