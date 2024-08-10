import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  perfil = {
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlVHV8GzIkxqHiNZK3D2SC5CUoU2qBunWd2A&s",
    nome: "Carl Johnson (CJ)",
    profissao: "Ator/Programador",
    perfil_id: "@cj_do_gta",
    idiomas: "Inglês, Arabe",
    cidade: "Nova York",
    desde: "desde Janeiro 1998",
    biografia: "Oh shit, where we go again?",
    curtidas: "1.5KK",
    seguindo: "2",
    amigos: "7"  
  }

  postagens = {
    amigo1: {
    foto: "https://pbs.twimg.com/profile_images/1741493705884749825/tFPuUQW-_400x400.jpg",
    nome: "Mipa zuzuzu",
    nome_usuario: "@mipazu23",
    post: "Hoje achei uma pedra no meu caminho, peguei e joguei ela no rio, até hoje não encontraram o corpo dele..."
  },

  amigo2: {
    foto: "https://static.quizur.com/i/b/595c2b515de037.823180302017%20-%201%20(2).jpg",
    nome: "Arelson Joelson",
    nome_usuario: "@arejoel2012",
    post: "Gosto de bolo, alguém sabe quem faz bolo?"
  },

  amigo3: {
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXV9yWegptwQtQ-1gyUa10jXYh6Cr26HUYAUSIE4Nsxbn8pFw0DqKaoKKdCJRSBC-CBWQ&usqp=CAU",
    nome: "Gerson Trevisan",
    nome_usuario: "@gertrev22",
    post: "Boa noite amigos, hoje vim lhes fazer uma piada... Piu! Até a noite que vem!"
  }
}


}
