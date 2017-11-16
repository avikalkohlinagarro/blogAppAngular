import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

// const BASE_URL = 'http://localhost:3000/user';
// const BASE_UPDATE_URL = 'http://localhost:3000/user/';
const BASE_URL = 'api/user';
const BASE_UPDATE_URL = 'api/user/';
const header = {headers : new Headers({'Content-type' : 'application/json'})};

@Injectable()
export class UserListService {

  constructor(private http : Http) { }

  getData() {
    return this.http.get(BASE_URL)
      .map(res => res.json());

  }

  postData(data) {
    return this.http.post(BASE_URL, data, header)
      .map(res => res.json());
  }

  updateData(id, data) {
    return this.http.patch(`${BASE_UPDATE_URL}${data.id}`, data, header)
      .map(res => res.json());
  }

  deleteData(data) {
    return this.http.delete(`${BASE_UPDATE_URL}${data.id}`, header)
      .map(res => res.json());
  }

}
