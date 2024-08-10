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

  pessoa = {
    foto: 'https://images-cdn.9gag.com/photo/agGK5vn_700b.jpg',
    nome: 'Carl Johnson (CJ do GTA SA)',
    funcao: 'Traficante, Gangster, Programador HTML & CSS',
    contato: {
      email: 'cjbrowherewegoagain@gmail.com',
      telefone: '(15) 99100-4745',
      github: '<a href="https://github.com/Alanzink1" target="_blank">/CjBro</a>',
      linkedin: '<a href="https://br.linkedin.com/in/alanzink1" target="_blank">/CjDoSA</a>'
    },
    softskills: [
      'Comunicação com os da gang',
      'Proeficiência nas missões'
    ],
    formacao_academica: [
      {
        ano_inicio: '2023',
        ano_termino: '2024',
        instituicao: 'ETEC Sales Gomes',
        curso: 'Desenvolvimento de Sistemas'
      }
    ]
  }

  constructor(){ }
}
