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

  activeObligation;

  handleSetActiveObl(id: number) {
    this.activeObligation = this.obligations.find(e => e.Id == id);
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
      Comment: "Data controller has the obligation to provide a copy of data subject's personal data to the data subject and also to transmit it to other recipients upon request of the data subject."
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
      Id: 1,
      Label: 'Joint Controllers Responsabilities',
      Comment: "Joint controllers have the obligation to inform the data subject about their responsabilities related to the processing of the data subject's personal data, including the responsabilities of each controller regarding the data subject's rights."
    },
    {
      Id: 2,
      Label: 'Contract with Processors',
      Comment: "Data controller has the permission to establish a contract with processors for the latter to carry out the processing of the personal data on behalf of them. Sub-processors can only be hired with the authorization of the controller and their obligations are the same as the ones established in the contract between controller and processor."
    },
    {
      Id: 3,
      Label: 'Records of Processing Activities of Data Controllers',
      Comment: "Data controller should provide a record of its processing activities to the supervisory authority upon request."
    },
    {
      Id: 4,
      Label: 'Records of Processing Activities of Data Processors',
      Comment: "Data processor should provide a record of its processing activities to the supervisory authority upon request."
    },
    {
      Id: 5,
      Label: 'Notification of a Data Breach to the Supervisory Authority',
      Comment: "Data controller has to report a personal data breach to the supervisory authority and in the case it happens to the data processor it should be reported to the data controller."
    },
    {
      Id: 6,
      Label: 'Communication of a Data Breach to the Data Subject',
      Comment: "Data controller must inform the data subject that a personal data breach occurred."
    },
    {
      Id: 7,
      Label: 'Data Protection Impact Assessment',
      Comment: "Data controller has to draft a DPIA with the guidance of the data protection officer when doing automated evaluation of personal data, processing of sensitive categories of personal data or systematic monitoring of public areas."
    },
    {
      Id: 8,
      Label: 'Prior Consultation with the Supervisory Authority',
      Comment: "Data controller has the obligation to consult with the supervisory authority when the DPIA illustrates that the processing will result in a high risk to the privacy of data subjects."
    }
  ]

}
