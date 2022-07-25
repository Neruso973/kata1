import Hero from '../kata1'

describe('Kata1', () => {

    describe('Kata1', () => {
        it('When a character is gaining XP then total is update', async () => {
            // given
            const actualCharacter: Hero = new Hero('benoit', 1, 1)

            // when
            actualCharacter.earnXp(998);

            // then
            expect(actualCharacter.experience).toEqual(999);
            expect(actualCharacter.level).toEqual(1);
        })
    });

    describe('Kata1', () => {
        it('When a character gain enough XP then he levelUp once', async () => {
            // given
            const actualCharacter: Hero = new Hero('benoit', 1, 1)

            // when
            actualCharacter.earnXp(1000);

            // then
            expect(actualCharacter.experience).toEqual(1001);
            expect(actualCharacter.level).toEqual(2);

        })
    });

    describe('Kata1', () => {
        it('When a character gain lot of XP then he levelUp multiple times', async () => {
            // given
            const actualCharacter: Hero = new Hero('benoit', 1, 1)

            // when
            actualCharacter.earnXp(6541);

            // then
            expect(actualCharacter.experience).toEqual(6542);
            expect(actualCharacter.level).toEqual(4);

        })
    });

    describe('Kata1', () => {
        it('When a character gain TOO MUCH XP then he stayed at level 30', async () => {
            // given
            const actualCharacter: Hero = new Hero('benoit', 1, 1)

            // when
            actualCharacter.earnXp(10000000000);

            // then
            expect(actualCharacter.level).toEqual(30);

        })
    });
})