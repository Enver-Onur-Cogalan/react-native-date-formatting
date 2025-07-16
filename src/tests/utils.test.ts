import { formatDate } from "../utils/format"

test('TR format correct', () => {
    expect(formatDate('2025-01-02T00:00:00Z', 'dd/MM/yyyy')).toBe('02/01/2025')
})