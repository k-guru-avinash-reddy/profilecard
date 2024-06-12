import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.scss']
})
export class AddProfileComponent implements OnInit {

  person = {
    name: '',
    img: '',
    img1: '',
    title: '',
    description: '',
    flipped: false
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.person.title) {
      alert('Please enter a title.');
      return;
    }

    // Validate and set default for img
    if (!this.person.img) {
      this.person.img = 'assets/images/Default.jpg';
    } else {
      this.validateImageUrl(this.person.img).then((isValid) => {
        if (!isValid) {
          alert('Please enter a valid image URL for Front Image.');
          return;
        } else {
          // Validate and set default for img1
          if (!this.person.img1) {
            this.person.img1 = 'assets/images/Default1.jpg';
          } else {
            this.validateImageUrl(this.person.img1).then((isValidBackImg) => {
              if (!isValidBackImg) {
                alert('Please enter a valid image URL for Back Image.');
                return;
              } else {
                this.saveAndNavigate();
              }
            });
          }
        }
      });
    }
  }

  saveAndNavigate() {
    // Save to local storage
    const storedProfiles = localStorage.getItem('profiles');
    let profiles = storedProfiles ? JSON.parse(storedProfiles) : [];
    profiles.push(this.person);
    localStorage.setItem('profiles', JSON.stringify(profiles));

    this.router.navigate(['/profiles']);
  }

  validateImageUrl(url: string | undefined): Promise<boolean> {
    return new Promise((resolve) => {
      if (!url) {
        resolve(false);
        return;
      }
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  }

}
