import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsersVirtualComponent } from './list-users-virtual.component';
import { UsersService } from '../users.service';

describe('ListUsersVirtualComponent', () => {
  let component: ListUsersVirtualComponent;
  let fixture: ComponentFixture<ListUsersVirtualComponent>;
  let element: any;
  let usersServiceSpy: jasmine.SpyObj<UsersService>;

  beforeEach(async(() => {
    const usersServiceMock = jasmine.createSpyObj<UsersService>('UsersService', ['getUsers', 'getUsersPage', 'updateUser']);

    TestBed.configureTestingModule({
      declarations: [ListUsersVirtualComponent],
      providers: [
        { provide: UsersService, useValue: usersServiceMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUsersVirtualComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    usersServiceSpy = TestBed.inject(UsersService) as jasmine.SpyObj<UsersService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
