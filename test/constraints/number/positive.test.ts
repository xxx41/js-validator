import { expect, test } from "vitest";
import { Positive } from '../../../src/constraints/number/positive'

test('must return default message if value is not a number', () => {
    expect(Positive(null)).toBe('constraint_positive')
})

test('must return default message if value is 0', () => {
    expect(Positive(0)).toBe('constraint_positive')
})

test('must return default message if value is a negative number', () => {
    expect(Positive(-1)).toBe('constraint_positive')
})