import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  constructor(private http:HttpClient) { }

  getProfiles() {
    return this.http.get("../assets/profiles.json");
  }
}
