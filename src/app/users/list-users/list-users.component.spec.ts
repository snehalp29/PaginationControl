import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsersComponent } from './list-users.component';
import { UsersService } from '../users.service';
import { of, EMPTY } from 'rxjs';

const Users = [
  {
    name: 'Nell D. Michael',
    phone: '602-1033',
    email: 'hendrerit.id.ante@placeratvelit.ca',
    company: 'Praesent Eu LLP',
    date_entry: '2017-07-30 23:27:39',
    org_num: '907369 2973',
    address_1: 'P.O. Box 916, 8584 Vestibulum St.',
    city: 'Vitry-sur-Seine',
    zip: '2353',
    geo: '60.77971, 7.98874',
    pan: '4532992507580',
    pin: '7086',
    id: 1,
    status: 'read',
    fee: '$60.99',
    guid: '48653E36-987F-48EC-7382-7F009FF34628',
    date_exit: '2018-11-14 12:37:54',
    date_first: '2018-05-20 01:07:05',
    date_recent: '2019-04-06 23:28:25',
    url: 'https://capco.com/'
  },
  {
    name: 'Ciara G. Stanley',
    phone: '1-358-613-2160',
    email: 'natoque.penatibus@facilisisloremtristique.co.uk',
    company: 'Nunc Nulla Vulputate LLP',
    date_entry: '2018-03-25 11:05:22',
    org_num: '987983 1023',
    address_1: 'Ap #700-733 Senectus Rd.',
    city: 'Maule',
    zip: '21911',
    geo: '-47.21116, 22.18684',
    pan: '4024007170167232',
    pin: '6394',
    id: 2,
    status: 'expired',
    fee: '$92.73',
    guid: 'D4CC10B0-5F19-EE33-CCA2-95DBD8E7B21F',
    date_exit: '2018-07-22 19:05:57',
    date_first: '2018-08-02 03:50:35',
    date_recent: '2017-08-12 01:56:58',
    url: 'https://capco.com/'
  }
];

describe('ListUsersComponent', () => {
  let component: ListUsersComponent;
  let fixture: ComponentFixture<ListUsersComponent>;
  let element: any;
  let usersServiceSpy: jasmine.SpyObj<UsersService>;

  beforeEach(async(() => {
    const usersServiceMock = jasmine.createSpyObj<UsersService>('UsersService', ['getUsers', 'getUsersPage', 'updateUser']);

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
    element = fixture.nativeElement;
    usersServiceSpy = TestBed.inject(UsersService) as jasmine.SpyObj<UsersService>;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('togglePagination', () => {
    it('should toggle pagination to false when called', () => {
      component.togglePagination();
      expect(component.isPagingEnabled).toBeFalse();
    });
  });

  describe('submitRow', () => {
    it('should call userService updateUser', () => {

      usersServiceSpy.updateUser.and.returnValue(EMPTY);
      component.submitRow(Users[0]);
      expect(usersServiceSpy.updateUser.calls.count()).toBe(1, 'one call');
    });
  });

});
