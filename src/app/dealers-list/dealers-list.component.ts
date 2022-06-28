import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../authentication.service';
import { Dealer } from '../dealer';

@Component({
  selector: 'app-dealers-list',
  templateUrl: './dealers-list.component.html',
  styleUrls: ['./dealers-list.component.css']
})
export class DealersListComponent implements OnInit {

  dealers:Observable<Dealer[]> | any;

  constructor(private router:Router,private dService:AuthenticationService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData()
  {
    this.dealers=this.dService.getDealersList();
  }
}
