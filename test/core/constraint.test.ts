import { expect, test } from "vitest";
import { TestConstraint } from "../../src/core/constraint";

test('must return true if condition is true', () => {
    expect(TestConstraint(() => true, null, null, '')).toBeTruthy()
})

test('must return message if condition is false an message is not null', () => {
    expect(TestConstraint(() => false, null, 'message', '')).toBe('message')
})

test('must return default message if condition is false and message is null', () => {
    expect(TestConstraint(() => false, null, null, 'defaultMessage')).toBe('defaultMessage')
})