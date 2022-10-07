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
  @ViewChild(IonContent) content:IonContent;

  constructor() { }

  ngOnInit() {
  }

  sendMessage(){
    this.messages.push({
      user: 'Usuario',
      createdAt: new Date().getTime(),
      msg: this.newMsg
    })

    this.newMsg = '';
    this.content.scrollToBottom(200);
  }
  

}
