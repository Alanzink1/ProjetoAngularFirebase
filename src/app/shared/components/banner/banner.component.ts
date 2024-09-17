import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent  implements OnInit {

  banner_img = 'https://m.media-amazon.com/images/I/71r30PVBpOL._AC_UF894,1000_QL80_.jpg';

  constructor() { }

  ngOnInit() {}

}
