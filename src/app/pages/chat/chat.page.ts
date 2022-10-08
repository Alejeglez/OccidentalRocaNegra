import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  
  messages = [
    {user: 'Roca Negra',
    createdAt: new Date().getTime(),
    msg: '¿En qué podemos ayudarte?'
    
  }
  ];
  currentUser = 'Usuario';
  newMsg = '';
  msg = 0;
  @ViewChild(IonContent) content:IonContent;

  constructor() { }

  ngOnInit() {
    
  }
  response(){
    var msgs:string[];
    msgs = ['Nos quedan tres habitaciones libres',
    'El horario de recepción es de 9:30 a 21:30',
    'El desayuno hay que pagarlo aparte',
    '¿Necesita algo más?',
    'Gracias por comunicarse con nosotros',
    'Disconnected!'
  ]
  this.messages.push({
    user: 'Roca Negra',
    createdAt: new Date().getTime(),
    msg: msgs[this.msg]
  })
  this.msg = this.msg + 1;
  return 0;
  }

  sendMessage(){
    this.messages.push({
      user: 'Usuario',
      createdAt: new Date().getTime(),
      msg: this.newMsg
    })

    this.newMsg = '';
    this.content.scrollToBottom(200);
    this.response();

  }


}
