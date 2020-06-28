import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UsersService } from './users.service';
import { HttpClient } from '@angular/common/http';
import { UserData } from './user.model';

describe('UsersService', () => {
  let service: UsersService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  const user: UserData = {
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
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UsersService);
    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getUsers', () => {

    it('should call get with correct url', () => {

      service.getUsers().subscribe((data) => {
        expect(data).toBeTruthy();
      });

      const req = httpTestingController.expectOne('http://localhost:3000/users');
      req.flush(user);

    });

    it('should return empty array on error', () => {
      let a = 1;
      let response: any;
      let errResponse: any;
      const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
      const data = [{ a }, { a }];

      service.getUsers().subscribe(res => {
        response = res
        expect(res).toEqual([]);
      }, err => errResponse = err);

      httpTestingController.expectOne('http://localhost:3000/users').flush(data, mockErrorResponse);
    });

    it('should update user data with correct url', () => {

      service.updateUser(user).subscribe((data) => {
        expect(data).toBeTruthy();
      });

      const req = httpTestingController.expectOne('http://localhost:3000/users/2');
      req.flush(user);

    });


  });

  describe('getUsersPage', () => {
    it('should call get with correct url and default parameters', () => {
      service.getUsersPage().subscribe((data) => {
        expect(data).toBeTruthy();
      });

      const req = httpTestingController.expectOne('http://localhost:3000/users/?_page=1&_limit=10');
      req.flush(user);
    });
  });

});
