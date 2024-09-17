import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  menu = {
    logo: 'https://i.etsystatic.com/42866288/r/il/15edb5/5567130398/il_570xN.5567130398_cj2u.jpg',
    itens: [
      {icone: 'https://cdn0.iconfinder.com/data/icons/expenses-vs-income/30/__house_home_flat_facilities-256.png', texto: 'Início'},
      {icone: 'https://cdn2.iconfinder.com/data/icons/free-basic-icon-set-2/300/19-256.png', texto: 'Sobre'},
      {icone: 'https://cdn4.iconfinder.com/data/icons/navigation-98/512/1_Galery_image_photo_picture_media-256.png', texto: 'Galeria'},
      {icone: 'https://cdn2.iconfinder.com/data/icons/ios-14-custom-application/62/application-35-256.png', texto: 'Contato'}
    ]
  }

  constructor(){}

  ngOnInit(): void {
    
  }

}
