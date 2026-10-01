import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoennPokemon } from './hoenn-pokemon';

describe('HoennPokemon', () => {
  let component: HoennPokemon;
  let fixture: ComponentFixture<HoennPokemon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoennPokemon],
    }).compileComponents();

    fixture = TestBed.createComponent(HoennPokemon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
