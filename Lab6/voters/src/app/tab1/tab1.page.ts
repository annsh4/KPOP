import { Component, OnInit } from '@angular/core';
import { VoterService } from 'src/services/voter.service';
import { Voter } from 'src/services/voter.service';
import { AlertController } from '@ionic/angular';
import { FavoriteVotersService } from 'src/services/favorite-voters.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public voters: Voter[] = [];
  public favoriteVoters: Voter[] = [];

  constructor(private voterService: VoterService, public alertController: AlertController, public favoriteVotersService:
        FavoriteVotersService) {}

  ngOnInit(): void {
      this.voterService.getVoters().subscribe(voters => {
        this.voters = voters.results.map((item: any) => {
          item.uuid = item.login.uuid;
          item.name = item.name.first + ' ' + item.name.last;
          item.username = item.login.username;
          item.password = item.login.password;
          item.phone = item.phone;
          this.voters.push(item);
          return item;
        });
      });
      this.favoriteVotersService.favoriteVoters$.subscribe(voters => {
      this.favoriteVoters = voters;
    });
  }

  async showFullInfo(uuid: string) {
    let chosenVoter;
    this.voters.find((voter) => {
        if (voter.uuid === uuid) {
          chosenVoter = voter;
        }
      });
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Full information:',
      message: '<p>' + chosenVoter.name + '</p>' +
      '<p>' + 'Username: ' + chosenVoter.username + '</p>' +
      '<p>' + 'Password: ' + chosenVoter.password + '</p>' +
      '<p>' + 'Email: ' +chosenVoter.email + '</p>' +
      '<p>' + 'Phone: ' + chosenVoter.phone + '</p>',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }
  addToFavorite(voter){
    this.favoriteVotersService.addFavoriteVoter(voter);
  }

  removeFromFavorite(voter){
    this.favoriteVotersService.removeFavoriteVoter(voter);
  }
}
