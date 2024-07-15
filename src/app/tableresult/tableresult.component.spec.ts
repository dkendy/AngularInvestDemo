import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableresultComponent } from './tableresult.component';

describe('TableresultComponent', () => {
  let component: TableresultComponent;
  let fixture: ComponentFixture<TableresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableresultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
