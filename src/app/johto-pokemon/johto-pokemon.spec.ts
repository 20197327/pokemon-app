import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JohtoPokemon } from './johto-pokemon';

describe('JohtoPokemon', () => {
  let component: JohtoPokemon;
  let fixture: ComponentFixture<JohtoPokemon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JohtoPokemon],
    }).compileComponents();

    fixture = TestBed.createComponent(JohtoPokemon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
