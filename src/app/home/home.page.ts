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

  segments: string = 'usuarios';

  usuarios = [
    {
      nome: 'Maria Joaquina do Carrossel',
      idade: 17,
      genero: 'Helicoptero de Combate',
      rotinas: [
        {
          dia: 'segunda-feira',
          treinos: [
            'Rosca Direta',
            'Crucifixo',
            'Remada Sumô',

          ]
        },
        {
          dia: 'quarta-feira',
          treinos: [
            'Rosca Invertida',
            'Pulley',
            'Remada Sentada',
            
          ]
        },
        {
          dia: 'sexta-feira',
          treinos: [
            'Supino Inclinado',
            'Bíceps Corda',
            'Bíceps Hulk Invertido',
            
          ]
        }
      ]
    },
    {
      nome: 'Cachorro Pitoco',
      idade: 4,
      genero: 'Macho',
      rotinas: [
        {
          dia: 'terça-feira',
          treinos: [
            'Levantamento de Ossinho',
            'Dar a Patinha com Peso',
            'Rolar na prancha',

          ]
        },
        {
          dia: 'quinta-feira',
          treinos: [
            'Corrida à Moto',
            'Latidos Pelvicos',
            'Mordida Pulley',
            
          ]
        },
        {
          dia: 'sábado-feira',
          treinos: [
            'Uivo Inclinado',
            'Passeio Corda',
            'Bíceps Canino Invertido',
            
          ]
        }
      ]
    },
  ]

  constructor(){}

  trocar(event: any){
    this.segments = event.detail.value;
  }

}
