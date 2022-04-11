import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {

  var pipe;

  beforeEach(() => {
    // Arrange
    pipe = new StrengthPipe();
  })

  it('should display weak if strength is less than 5', () => {
    // Act
    var result = pipe.transform(5);

    // Assert
    expect(result).toEqual('5 (weak)');
  });

  it('should display strong if strength is >= 10, < 20', () => {
    // Act
    var result = pipe.transform(10);

    // Assert
    expect(result).toEqual('10 (strong)');
  });

  it('should display unbelievable if strength is >= 20', () => {

    // Act
    var result = pipe.transform(20);

    // Assert
    expect(result).toEqual('20 (unbelievable)');
  });
});