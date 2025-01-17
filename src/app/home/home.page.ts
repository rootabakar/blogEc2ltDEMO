import { Component } from '@angular/core';
import { ModalController} from "@ionic/angular";
import {DetailUserPage} from "../detail-user/detail-user.page";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalController: ModalController) {

  }

  async versPageDetail(data:any){
    console.log(data);
    const modal = await this.modalController.create({
      component: DetailUserPage,
      componentProps: {
        name: data.name,
        img: data.img,
        description: data.description
      }
    });
    return await modal.present();
  }

  message:string = "";

  userData =
    [
      {
        description: `Le lorem ipsum est, en imprimerie, une suite de mots
        sans signification utilisée à titre provisoire pour calibrer une mise en page,
        le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
        mise en page est achevée. Généralement, on utilise un texte en faux latin, le
        Lorem ipsum ou Lipsum`,
        name: "Destin",
        img : "https://thumbs.dreamstime.com/b/fond-de-route-goudronn%C3%A9eet-paysage-avec-des-mots-destin-101603466.jpg"
      },
      {
        description: `Le lorem ipsum est, en imprimerie, une suite de mots
        sans signification utilisée à titre provisoire pour calibrer une mise en page,
        le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
        mise en page est achevée. Généralement, on utilise un texte en faux latin, le
        Lorem ipsum ou Lipsum`,
        name: "Johnson",
        img : "data:image/png;base64,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"
      },
      {
        description: `Le lorem ipsum est, en imprimerie, une suite de mots
        sans signification utilisée à titre provisoire pour calibrer une mise en page,
        le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
        mise en page est achevée. Généralement, on utilise un texte en faux latin, le
        Lorem ipsum ou Lipsum`,
        name: "Ndella",
        img : "data:image/png;base64,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"
      }
    ] ;
}
