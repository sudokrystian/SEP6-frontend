import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { People } from 'src/app/models/people';
import { PeopleService } from 'src/app/services/people/people.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {

  personData: People | undefined;

  constructor(private api: PeopleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id =this.route.snapshot.paramMap.get("id");
    if(id) {
      this.getPersonDetails(parseInt(id))
    }
  }

  getPersonDetails(personId: number) {
    this.api.getPersonDetails(personId).subscribe({
      next: (data) => {
        console.log(data)
        this.personData = data;
      },
      error: (e) => console.error("Error: " + e),
      complete: () => {
        // Request finished here you cna optionally add updates, etc.
      }
    })
  }

}
