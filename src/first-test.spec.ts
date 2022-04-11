describe('my first test', () => {
    let sut;

    beforeEach(() => {
        sut = {};
    });

    it('should be true if true6', () => {
        //arrange
        sut.a = false;
        //act
        sut.a = true;
        //assert
        expect(sut.a).toBe(true);
    })
})