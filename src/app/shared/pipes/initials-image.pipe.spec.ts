import { InitialsImagePipe } from './initials-image.pipe';

describe('InitialsImagePipe', () => {
    let pipe = new InitialsImagePipe();

    beforeEach(() => {
        pipe = new InitialsImagePipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    describe('Transforms', () => {
        it('Returns null when null provided', () => {
            expect(pipe.transform(null)).toBe(null);
        });

        it('Returns proper URL for Name and Surname', () => {
            const expected = 'https://ui-avatars.com/api/?length=3&name=JD&background=ee3491&color=fff&rounded=true&bold=true&size=64';
            expect(pipe.transform('John Doe')).toBe(expected);
        });

        it('Returns proper URL for Name and Surname lowercase', () => {
            const expected = 'https://ui-avatars.com/api/?length=3&name=JD&background=141126&color=fff&rounded=true&bold=true&size=64';
            expect(pipe.transform('John doe')).toBe(expected);
        });

        it('Returns proper URL for John von Doe', () => {
            const expected = 'https://ui-avatars.com/api/?length=3&name=JD&background=ddefbf&color=333&rounded=true&bold=true&size=64';
            expect(pipe.transform('John von Doe', [3])).toBe(expected);
        });
    });

    describe('Initials', () => {
        it('John Doe = JD', () => {
            expect(pipe.getInitials('John Doe', 2)).toBe('JD');
        });

        it('John von Doe = JD', () => {
            expect(pipe.getInitials('John von Doe', 2)).toBe('JD');
        });

        it('John von doe = JD', () => {
            expect(pipe.getInitials('John von Doe', 2)).toBe('JD');
        });

        it('John doe = JD', () => {
            expect(pipe.getInitials('John doe', 2)).toBe('JD');
        });
    });

    describe('IsDark', () => {
        it('#3333333 is dark', () => {
            expect(pipe.isDark('333333')).toBe(true);
        });

        it('#f1f1f1 is not dark', () => {
            expect(pipe.isDark('f1f1f1')).toBe(false);
        });
    });

    describe('Invalid values', () => {
        it('Object', () => {
            expect(pipe.transform({})).toEqual({});
        });

        it('Object', () => {
            expect(pipe.transform({key: 'val'})).toEqual({key: 'val'});
        });
    });
});

