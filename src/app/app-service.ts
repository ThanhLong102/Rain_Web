import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient
  ) {
  }

  ENDPOINT_URL = 'http://127.0.0.1:5000';

  getFeatures(): Observable<any> {
    return this.http.get<any>(this.ENDPOINT_URL + `/features`);
  }

  getPredictionWithFeatures(featuresDrop: string[]): Observable<any> {
    return this.http.post<any>(this.ENDPOINT_URL + `/prediction`, featuresDrop);
  }

}
