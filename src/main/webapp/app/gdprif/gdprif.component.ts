import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gdprif',
  templateUrl: './gdprif.component.html',
  styleUrls: ['./gdprif.component.css']
})

export class GDPRifComponent implements OnInit {

  ngOnInit() { }

  constructor(){ }

  activeRight;

  handleSetActive(id: number) {
    this.activeRight = this.rights.find(e => e.Id == id);
}

  rights = [
    {
      Id: 1,
      Label: 'Right to be Informed (collected from the Data Subject)',
      Comment: 'Data controller has the obligation to provide information to the data subject regarding personal data directly collected from the data subject.'
    },
    {
      Id: 2,
      Label: 'Right to be Informed (collected from other sources)',
      Comment:'Data controller has the obligation to provide information to the data subject regarding its personal data collected from other sources.'
    },
    {
      Id: 3,
      Label: 'Right of Access',
      Comment: "Data controller informs the data subject about its obligation to grant access to the data subject's personal data."
    }
  ]

}
