import { Component, OnInit, ViewChild } from '@angular/core';

import { NewCategory } from './../../shared/interfaces/new-category';
import { DataService } from './../../shared/services/data.service';
import { CalculatorComponent } from './../calculator/calculator.component';
import { HomeHttpService } from '../services/http-service/home-http.service';
import { PopupService } from './pop-up-service/popup.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  @ViewChild(CalculatorComponent)
  private calcComponent: CalculatorComponent;

  constructor(
    public popup: PopupService,
    private http: HomeHttpService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {

  }

  incomeAddDone(value: number): void {
    this.http.addIncome(value);
    this.popup.incomeAddToggle();
  }

  distributeDone(value: number): void {
    if (value > this.dataService.avalibleToDistribute) {
      this.calcComponent.distributeError();
    } else {
      this.http.distributeIncome(value);
      this.popup.closeSavingPopup();
    }
  }

  createNewSpend(value: NewCategory): void {
    this.http.createNewSpend(value);
  }

  createNewSaving(value: NewCategory): void {
    this.http.createNewSaving(value);
  }
}
