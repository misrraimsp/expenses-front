import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import {HttpClient} from '@angular/common/http';
import empty = jasmine.empty;

xdescribe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('UNIT-DataService', () => {

  class FakeHttp {
    get(input: any): any {
      return;
    }
    post(input1: any, input2: any): any {
      return;
    }
  }

  let component: DataService;
  let http: FakeHttp;
  const BASE_URL = 'http://localhost:8080';
  const resourceUrl = '/someresource';

  beforeEach(() => {
    http = new FakeHttp();
    component = new DataService(resourceUrl, http as unknown as HttpClient);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call http get method with proper url when \'getAll\' is invoked', () => {
    const spy = spyOn(http, 'get').and.callFake(x => empty());

    component.getAll();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(BASE_URL + resourceUrl);
  });

  it('should call http post method with proper url when \'create\' is invoked', () => {
    const resource = 1;
    const spy = spyOn(http, 'post').and.callFake(x => empty());

    component.create(resource);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(BASE_URL + resourceUrl, resource);
  });

});
