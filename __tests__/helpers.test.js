const { format_date } = require('../utils/helpers');
test('format_date() returns a date string', () => {
    const date = new Date('2021-09-20 16:12:03');
    expect(format_date(date)).toBe('9/20/2021');
});