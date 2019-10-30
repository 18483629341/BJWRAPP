import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadedPage } from './downloaded.page';

describe('DownloadedPage', () => {
  let component: DownloadedPage;
  let fixture: ComponentFixture<DownloadedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
