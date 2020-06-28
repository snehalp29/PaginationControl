import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SPaginatorComponent } from './s-paginator.component';
import { SimpleChange } from '@angular/core';
import { By } from '@angular/platform-browser';
import { PaginatorState } from './PaginatorState';

describe('SPaginatorComponent', () => {
  let component: SPaginatorComponent;
  let fixture: ComponentFixture<SPaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SPaginatorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SPaginatorComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    let updatePaginatorStateSpy: any;
    // Act
    beforeEach(() => {
      updatePaginatorStateSpy = spyOn(component, 'updatePaginatorState').and.callThrough();
      component.rows = 10;
      component.totalRecords = 200;
      component.ngOnChanges({
        rows: new SimpleChange(null, 10, false),
        totalRecords: new SimpleChange(null, 200, false),
      });
      fixture.detectChanges();
    });

    it('should have a 5 page link by default', () => {
      // Assert
      const pageEls = fixture.debugElement.queryAll(By.css('.page-item'));
      expect(updatePaginatorStateSpy).toHaveBeenCalled();
      expect(component.pageLinks.length).toEqual(5);
      expect(pageEls.length).toEqual(5);
    });

    describe('On Clicks', () => {

      it('should called onPageLinkClick and go to clicked page', () => {
        const onPageLinkClickSpy = spyOn(component, 'onPageLinkClick').and.callThrough();
        const pageEls = fixture.debugElement.queryAll(By.css('.page-item'));
        const pickedPage = pageEls[3];

        // Act
        pageEls[3].nativeElement.click();
        fixture.detectChanges();

        // Assert
        const pageElsAfterClick = fixture.debugElement.queryAll(By.css('.page-item'));
        const activePage = fixture.debugElement.query(By.css('.active'));
        expect(onPageLinkClickSpy);
        expect(activePage.nativeElement.textContent).toContain('4');
        expect(pickedPage.nativeElement.textContent).toContain((component.getPage() + 1).toString());
        let pageValue = component.getPage() - 1;
        for (const link of component.pageLinks) {
          expect(link).toEqual(pageValue);
          pageValue++;
        }
        expect(pageElsAfterClick[2].nativeNode.innerText).toEqual(activePage.nativeNode.innerText);
      });

      it('should called changePageToFirst and go to first page', () => {

        const changePageToFirstSpy = spyOn(component, 'changePageToFirst').and.callThrough();
        fixture.detectChanges();

        const pageLastEl = fixture.debugElement.query(By.css('.last-item'));
        const pageFirstEl = fixture.debugElement.query(By.css('.first-item'));
        pageLastEl.nativeElement.click();
        fixture.detectChanges();

        pageFirstEl.nativeElement.click();
        fixture.detectChanges();

        const pageElsAfterClick = fixture.debugElement.queryAll(By.css('.page-item'));
        const activePage = fixture.debugElement.query(By.css('.active'));
        expect(changePageToFirstSpy);
        expect(activePage.nativeElement.textContent).toContain('1');
        let pageValue = component.getPage() + 1;
        for (const link of component.pageLinks) {
          expect(link).toEqual(pageValue);
          pageValue++;
        }
        expect(pageElsAfterClick[0].nativeNode.innerText).toEqual(activePage.nativeNode.innerText);
        expect(pageFirstEl.nativeElement.className).toContain('page-disabled');
      });

      it('should called changePageToPrev and go to prev page', () => {

        const changePageToPrevSpy = spyOn(component, 'changePageToPrev').and.callThrough();
        fixture.detectChanges();

        const pageEls = fixture.debugElement.queryAll(By.css('.page-item'));
        const pageNextEl = fixture.debugElement.query(By.css('.next-item'));
        const pagePrevEl = fixture.debugElement.query(By.css('.prev-item'));
        const prevPageEl = pageEls[0];
        pageNextEl.nativeElement.click();
        fixture.detectChanges();

        pagePrevEl.nativeElement.click();
        fixture.detectChanges();

        const pageElsAfterClick = fixture.debugElement.queryAll(By.css('.page-item'));
        const activePage = fixture.debugElement.query(By.css('.active'));
        expect(changePageToPrevSpy);
        expect(activePage.nativeElement.textContent).toContain('1');
        expect(prevPageEl.nativeElement.textContent).toContain((component.getPage() + 1).toString());
        let pageValue = component.getPage() + 1;
        for (const link of component.pageLinks) {
          expect(link).toEqual(pageValue);
          pageValue++;
        }
        expect(pageElsAfterClick[0].nativeElement.innerText).toEqual(activePage.nativeElement.innerText);
      });

      it('should called changePageToNext and go to next page', () => {

        const changePageToNextSpy = spyOn(component, 'changePageToNext').and.callThrough();
        fixture.detectChanges();

        const pageEls = fixture.debugElement.queryAll(By.css('.page-item'));
        const pageNextEl = fixture.debugElement.query(By.css('.next-item'));
        const nextPageEl = pageEls[1];
        pageNextEl.nativeElement.click();
        fixture.detectChanges();

        const pageElsAfterClick = fixture.debugElement.queryAll(By.css('.page-item'));
        const activePage = fixture.debugElement.query(By.css('.active'));
        expect(changePageToNextSpy);
        expect(activePage.nativeElement.textContent).toContain('2');
        expect(nextPageEl.nativeElement.textContent).toContain((component.getPage() + 1).toString());
        let pageValue = component.getPage();
        for (const link of component.pageLinks) {
          expect(link).toEqual(pageValue);
          pageValue++;
        }
        expect(pageElsAfterClick[component.getPage()].nativeNode.innerText).toEqual(activePage.nativeNode.innerText);
      });

      it('should called changePageToLast and go to last page', () => {

        const changePageToLastSpy = spyOn(component, 'changePageToLast').and.callThrough();
        fixture.detectChanges();

        const pageLastEl = fixture.debugElement.query(By.css('.last-item'));
        pageLastEl.nativeElement.click();
        fixture.detectChanges();

        const pageElsAfterClick = fixture.debugElement.queryAll(By.css('.page-item'));
        const activePage = fixture.debugElement.query(By.css('.active'));
        expect(changePageToLastSpy);
        expect(activePage.nativeElement.textContent).toContain('20');
        let pageValue = component.getPage() - 3;
        for (const link of component.pageLinks) {
          expect(link).toEqual(pageValue);
          pageValue++;
        }
        expect(pageElsAfterClick[4].nativeNode.innerText).toEqual(activePage.nativeNode.innerText);
        expect(pageLastEl.nativeElement.className).toContain('page-disabled');
      });

      it('should called updateRowSize and change page count', () => {

        // const onRppChangeSpy = spyOn(component, 'updateRowSize').and.callThrough();
        // fixture.detectChanges();

        const dropdownEl = fixture.debugElement.query(By.css('.row-dropdown'));
        dropdownEl.nativeElement.click();
        fixture.detectChanges();
        const dropdownItemsEl = fixture.debugElement.queryAll(By.css('.row-dropdown-item'));
        dropdownItemsEl[1].nativeElement.click();
        fixture.detectChanges();

        // expect(onRppChangeSpy).toHaveBeenCalled();
        expect(component.getPageCount()).toEqual(20);
      });

      it('should listen onPageChange', () => {

        let data: PaginatorState;
        component.PageChanged.subscribe((value: PaginatorState) => {
          data = value;
          expect(data).toBeTruthy();
          expect(data.page).toEqual(3);
          expect(data.rows).toEqual(10);
          expect(data.pageCount).toEqual(20);
        });

        const pageEls = fixture.debugElement.queryAll(By.css('.page-item'));
        pageEls[3].nativeElement.click();
        fixture.detectChanges();

      });

    });


  });





});
