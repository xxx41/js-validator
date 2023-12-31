import { expect, test } from "vitest";
import { NotNull } from "../../../src/constraints/basic/not-null";

test('must return default message if value is null', () => {
    expect(NotNull(null)).toBe('constraint_not_null')
})

test('must return false if value is not null', () => {
    expect(NotNull('string')).toBe(true)
})