import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}


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
        img : "https://www.memoireonline.com/04/19/10767/Conception-d-uneplateforme-de-ventes-de-credits-par-des-operateurs-de-transferts-dargent1.png"
      },
      {
        description: `Le lorem ipsum est, en imprimerie, une suite de mots
        sans signification utilisée à titre provisoire pour calibrer une mise en page,
        le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
        mise en page est achevée. Généralement, on utilise un texte en faux latin, le
        Lorem ipsum ou Lipsum`,
        name: "Ndella",
        img : "https://media.licdn.com/dms/image/D4E03AQGPshGYGmC1Jg/profiledisplayphotoshrink_800_800/0/1675960030803?e=2147483647&v=beta&t=0Ur1XpqfxcCJZBLUFUgiRVUAixRtexo_-vlRA-k5_Pw"
      }
    ] ;
}
