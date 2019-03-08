import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessieComponent } from './chessie.component';

describe('ChessieComponent', () => {
  let component: ChessieComponent;
  let fixture: ComponentFixture<ChessieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChessieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
