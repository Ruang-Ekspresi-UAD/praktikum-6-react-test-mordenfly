import LatihanCounter from './latihan.js';

describe('Latihan Counter Tests', () => {
    let latihan;

    beforeEach(() => {
        latihan = new LatihanCounter();
    });

    test('Counter Default Value must be 0', () => {
        expect(latihan.value).toBe(0);
    });

    test('increment works when button clicked', () => {
        latihan.increment();
        expect(latihan.value).toBe(1);
    });

    test('decrement works when button clicked', () => {
        latihan.decrement();
        expect(latihan.value).toBe(-1);
    });

    test('reset the count using reset button', () => {
        latihan.increment();
        latihan.reset();
        expect(latihan.value).toBe(0);
    });

    test('greeting component displays name', () => {
        const name = 'Elshinta';
        expect(latihan.greeting(name)).toBe(`Hello, ${name}!`);
    });

    test('greeting component displays lecturer name', () => {
        const lecturerName = 'Pak Dosen';
        expect(latihan.greeting(lecturerName)).toBe(`Hello, ${lecturerName}!`);
    });

    test('triggers alert with correct message when clicked', () => {
        global.alert = jest.fn(); // Mock alert
        const message = 'Button clicked!';
        latihan.alertMessage(message);
        expect(global.alert).toHaveBeenCalledWith(message);
    });
});
