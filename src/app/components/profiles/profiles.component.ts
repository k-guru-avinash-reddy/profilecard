import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilesService } from '../services/profiles.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {

  persons: any[] = []; 

  constructor(private router: Router, private profileService: ProfilesService) { }

  ngOnInit(): void {
    const storedProfiles = localStorage.getItem('profiles');
    if (storedProfiles) {
      this.persons = JSON.parse(storedProfiles);
      this.persons.forEach(person => person.flipped = false);
    } else {
      // Fetch default profiles from JSON file if localStorage is empty
      this.profileService.getProfiles().subscribe((data: any)=> {
        this.persons = data;
        this.saveProfiles();
      });
    }
  }  

  flipCard(person: any) {
    person.flipped = !person.flipped;
  }

  newProfile() {
    this.router.navigate(['/add-profile']);
  }
  
  addProfile(newPerson: any) {
    this.persons.push(newPerson);
    this.saveProfiles();
  }

  deleteProfile(person: any) {
    const index = this.persons.indexOf(person);
    if (index !== -1) {
      this.persons.splice(index, 1);
      this.saveProfiles();
    }
  }

  saveProfiles() {
    localStorage.setItem('profiles', JSON.stringify(this.persons));
  }

}
