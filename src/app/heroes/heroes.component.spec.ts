import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component"

describe('HerosComponent', () => {
  let component: HeroesComponent;
  let HEROS;
  let mockHeroService;

  beforeEach(() => {
    HEROS = [
      { id: 1, name: 'SpiderDude', strength: 8 },
      { id: 2, name: 'Wonderful Woman', strength: 24 },
      { id: 3, name: 'SuperDude', strength: 55 }
    ]
  })

  mockHeroService = jasmine.createSpyObj(['getHeros', 'addHero', 'deleteHero']);

  component = new HeroesComponent(mockHeroService);

  describe('delete', () => {
    it('should remove the last hero, indicated hero "SuperDude", from the heros list', () => {
      // Arrange
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROS;

      // Act
      component.delete(HEROS[2]);

      // Assert
      expect(component.heroes.length).toBe(2);
      expect(component.heroes[0].name).toBe('SpiderDude');
      expect(component.heroes[1].strength).toBe(24)
    })

    it('should remove the first hero, indicated hero "SpiderDude", from the heros list', () => {
      // Arrange
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROS;

      // Act
      component.delete(HEROS[0]);

      // Assert
      expect(component.heroes.length).toBe(2);
      expect(component.heroes[0].name).toBe('Wonderful Woman');
      expect(component.heroes[1].strength).toBe(55)
    })
  })
})