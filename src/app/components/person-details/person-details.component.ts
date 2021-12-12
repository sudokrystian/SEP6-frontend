import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KnownFor } from 'src/app/models/known-for/known-for.model';
import { PersonDetails } from 'src/app/models/person-details.model';
import { PeopleService } from 'src/app/services/people/people.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {

  personData: PersonDetails | undefined;
  personCredits: KnownFor | undefined;

  constructor(private api: PeopleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id =this.route.snapshot.paramMap.get("id");
    if(id) {
      this.getPersonDetails(parseInt(id))
      this.getPersonCredits(parseInt(id))
    }
  }

  getPersonDetails(personId: number) {
    this.api.getPersonDetails(personId).subscribe({
      next: (data) => {
        this.personData = data;
      },
      error: (e) => console.error("Error: " + e),
      complete: () => {
        // Request finished here you can optionally add updates, etc.
      }
    })
  }

  getPersonCredits(personId: number) {
    this.api.getPersonCredits(personId).subscribe({
      next: (data) => {
        this.personCredits = data;
      },
      error: (e) => console.error("Error: " + e),
      complete: () => {
        // Request finished here you can optionally add updates, etc.
      }
    })
  }

}
