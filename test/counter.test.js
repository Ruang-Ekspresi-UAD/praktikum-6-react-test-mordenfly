import Counter from './counter.js';

describe('Counter Tests', () => {
    let counter;

    beforeEach(() => {
        counter = new Counter();
    });

    test('Counter Default Value must be 0', () => {
        expect(counter.value).toBe(0);
    });

    test('increment works when button clicked', () => {
        counter.increment();
        expect(counter.value).toBe(1);
    });

    test('decrement works when button clicked', () => {
        counter.decrement();
        expect(counter.value).toBe(-1);
    });
});
