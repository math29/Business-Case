import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

type DonneesLoginServeur = {
  token: string;
  email: string;
  id: string;
  updatedAt: string;
};

type DonneesStatsServeur = {
  recurrence: number;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // public userConnecte: boolean = true;
  private token: string = '';
  private api_url =
    'https://g0lkzlavh1.execute-api.eu-west-3.amazonaws.com/dev/';
  public connecte = false;
  public recurrence!: number;

  // public utilisateur: {
  //   prenom: string;
  //   userConnecte: boolean;
  // };

  constructor(private http: HttpClient) {}
  // this.utilisateur = { prenom: 'Jean', userConnecte: false };

  // localStorage.setItem('user', JSON.stringify(this.utilisateur));

  // let dataRecup = localStorage.getItem('user')!;
  // JSON.parse(dataRecup);
  login() {
    this.http
      .post(
        this.api_url + 'login',
        JSON.stringify({
          email: 'gislain@hb.fr',
          password: 'password',
        })
      )
      .toPromise()
      .then(
        (data) => {
          let donneesServeur = data as DonneesLoginServeur;
          this.token = donneesServeur.token;
          this.connecte = true;
        },
        (err) => {
          console.log(err.status);
        }
      );
    //     getStats() {
    //       const httpOptions = {
    //         headers: new HttpHeaders({
    //           'Content-Type':  'application/json',
    //           "Authorization": this.token //Le token a été récupéré lors du login
    //         })
    //       };
    //       this.http.get(this.api_url + "stats/2001-01-01/2004-01-04", httpOptions).toPromise().then(res => {
    //         let donneesRecues = res as DonneesStatsServeur;

    //         this.recurrence = donneesRecues.recurrence;
    //       }, err => {
    //         //Si code status différent de 2XX, on l'aura ici
    //         console.log(err.status);
    //       });

    // }
  }
}
