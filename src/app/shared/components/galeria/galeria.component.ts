import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
})
export class GaleriaComponent implements OnInit {

  galeria = {
    titulo: 'Treinos',
    topicos: [
      {
        titulo: "Braço",
        imagem1: "https://treinomestre.com.br/wp-content/uploads/2014/04/rosca-alternada.jpg",
        imagem2: "https://img.myloview.com.br/quadros/treino-de-braco-definido-para-homens-com-diferentes-ferramentas-700-141650399.jpg"
      },
      {
        titulo: "Peito",
        imagem1: "https://treinomestre.com.br/wp-content/uploads/2017/11/treino-de-peito-e-triceps-abc-.jpg",
        imagem2: "https://grandeatleta.com.br/blog/wp-content/uploads/2019/06/exercicios-para-peito.jpg"
      },
      {
        titulo: "Costas",
        imagem1: "https://treinomestre.com.br/wp-content/uploads/2019/09/melhores-exercicios-para-costas-dorsais-.jpg",
        imagem2: "https://i.pinimg.com/originals/f3/18/62/f31862567b309e20e96862f2e6c319a1.jpg"
      },
      {
        titulo: "Pernas",
        imagem1: "https://treinomestre.com.br/wp-content/uploads/2020/03/12-Exerc%C3%ADcios-para-pernas-e-gl%C3%BAteos-com-el%C3%A1sticos-extensores-e-band.jpg",
        imagem2: "https://static.wixstatic.com/media/2edbed_35b89695f4764c0a9742214ebcee69d6~mv2.png/v1/fill/w_1000,h_1000,al_c,q_90,usm_0.66_1.00_0.01/2edbed_35b89695f4764c0a9742214ebcee69d6~mv2.png"
      }
    ]
  };

  constructor() { }

  ngOnInit() { }

}
