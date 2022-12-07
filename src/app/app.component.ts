import {Component, OnInit} from '@angular/core';
import {AppService} from "./app-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rain';
  featuresDrop: string[] = [];
  features: string[] = [];
  accuracy = 0;
  mseLoss = 0;
  withWindow = window.innerWidth - 30;

  constructor(private appService: AppService) {
  }

  getFeatures() {
    this.appService.getFeatures().subscribe(
      (data: any) => this.features = data
    )
  }

  getAccuracy(featuresDrop: string[]) {
    this.appService.getPredictionWithFeatures(featuresDrop).subscribe(
      (data: any) => {
        this.accuracy = data.accuracy;
        this.mseLoss = data.mseLoss;
      }
    )
  }

  ngOnInit(): void {
    this.getFeatures();
    this.getAccuracy(this.featuresDrop);
  }
}
