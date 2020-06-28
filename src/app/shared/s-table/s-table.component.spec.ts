import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { STableComponent } from './s-table.component';
import { SimpleChange } from '@angular/core';
import { PaginatorState } from '../s-paginator/PaginatorState';

describe('STableComponent', () => {
  let component: STableComponent;
  let fixture: ComponentFixture<STableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [STableComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(STableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnChanges', () => {
    it('should get all records if EnablePagination is set to false', () => {
      let a = 1;
      component.ngOnChanges({
        // EnablePagination: new SimpleChange(null, false, false),
        data: new SimpleChange(null, [{ a }, { a }, { a }, { a }, { a }], false),
      });
      fixture.detectChanges();

      expect(component.DisplayData.length).toEqual(5);
    });

    it('should get subset of records if EnablePagination is set to true', () => {
      let a = 1;
      component.rows = 2;
      component.first = 0;
      component.EnablePagination = true;
      component.ngOnChanges({
        data: new SimpleChange(null, [{ a }, { a }, { a }, { a }, { a }], false),
        EnablePagination: new SimpleChange(null, true, false),
      });

      fixture.detectChanges();

      expect(component.DisplayData.length).toEqual(2);
    });

    it('should set totalRecords to 0 if data is not provided', () => {
      let a = 1;

      component.ngOnChanges({
        EnablePagination: new SimpleChange(null, false, false),
      });

      fixture.detectChanges();

      expect(component.totalRecords).toEqual(0);
    });

    it('should set column ', () => {
      // Arrange
      component.ngOnChanges({
        columns: new SimpleChange(null, [
          { field: 'id', header: 'Id' },
          { field: 'name', header: 'Name' }], false),
      });
      // Act
      fixture.detectChanges();
      // Assert
      expect(component.columns.length).toEqual(2);
    });

  });

  describe('pageChanged', () => {
    it('should call populateDisplayData on pageChange event', () => {
      // Arrange
      let a = 1;
      let paginatorState: PaginatorState = {
        first: 0,
        rows: 4,
        page: 1,
        pageCount: 2,
        totalRecords: 5
      }
      component.EnablePagination = true;
      component.ngOnChanges({
        data: new SimpleChange(null, [{ a }, { a }, { a }, { a }, { a }], false),
        EnablePagination: new SimpleChange(null, true, false),
      });

      fixture.detectChanges();

      // Act
      component.pageChanged(paginatorState)
      // Assert
      expect(component.DisplayData.length).toEqual(4);
    });
  });
});
