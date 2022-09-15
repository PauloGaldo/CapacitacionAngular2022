import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cap-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.params);
    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params);
    });
    this.activatedRoute.queryParamMap.subscribe(params => {
      console.log(params);
    });
  }

}
