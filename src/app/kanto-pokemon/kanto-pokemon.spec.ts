import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KantoPokemon } from './kanto-pokemon';

describe('KantoPokemon', () => {
  let component: KantoPokemon;
  let fixture: ComponentFixture<KantoPokemon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KantoPokemon],
    }).compileComponents();

    fixture = TestBed.createComponent(KantoPokemon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
