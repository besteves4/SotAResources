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
    },
    {
      Id: 4,
      Label: 'Right to Rectification',
      Comment: "Data controller has the obligation to rectify the data subject's personal data upon request."
    },
    {
      Id: 5,
      Label: 'Right to Erasure',
      Comment: "Data controller has the obligation to erase the data subject's personal data upon a fundamented request."
    },
    {
      Id: 6,
      Label: 'Right to Restriction of Processing',
      Comment: "Data controller has the obligation to cease processing the data subject's personal data upon a fundamented request."
    },
    {
      Id: 7,
      Label: 'Right to be Notified',
      Comment: "Data controller has the obligation to inform the data subject about the rectification, erasure or restriction of processing of its personal data and about any recipients to whom the personal data was disclosed to. The data controller also has to inform the recipients to whom the data was disclosed to so that they procede with the rectification, erasure or restriction of processing of the dat asubject's personal data."
    },
    {
      Id: 8,
      Label: 'Right to Data Portability',
      Comment: "Data controller has the obligation to provide a copy of data subject's personal data to the data subject and also to transmit it to other controllers upon request of the data subject."
    },
    {
      Id: 9,
      Label: 'Right to Object',
      Comment: "Data subject has the right to object to any processing performed by the data controller, including for direct marketing purposes."
    },
    {
      Id: 10,
      Label: 'Right to Object to Automated Decision Making',
      Comment: "Data subject has the right to request the data controller to not be subjected to decisions based solely on automated processing, including profiling."
    }
  ]

  obligations = [
    {
      Id: 11,
      Label: '',
      Comment: ""
    },
    {
      Id: 12,
      Label: '',
      Comment: ""
    },
    {
      Id: 13,
      Label: '',
      Comment: ""
    },
    {
      Id: 14,
      Label: '',
      Comment: ""
    },
    {
      Id: 15,
      Label: '',
      Comment: ""
    },
    {
      Id: 16,
      Label: '',
      Comment: ""
    },
    {
      Id: 17,
      Label: '',
      Comment: ""
    },
    {
      Id: 18,
      Label: '',
      Comment: ""
    }
  ]

}
