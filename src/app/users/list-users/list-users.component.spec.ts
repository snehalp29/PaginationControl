import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsersComponent } from './list-users.component';
import { UsersService } from '../users.service';

describe('ListUsersComponent', () => {
  let component: ListUsersComponent;
  let fixture: ComponentFixture<ListUsersComponent>;
  let usersServiceSpy: jasmine.SpyObj<UsersService>;

  beforeEach(async(() => {
    const usersServiceMock = jasmine.createSpyObj<UsersService>('UsersService', ['getUsers', 'getUsersPage']);

    TestBed.configureTestingModule({
      declarations: [ListUsersComponent],
      providers: [
        { provide: UsersService, useValue: usersServiceMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    usersServiceSpy = TestBed.inject(UsersService) as jasmine.SpyObj<UsersService>;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
