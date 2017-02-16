import '../../node_modules/bulma/css/bulma.css';
import '../css/richmdeditor.css'

import Person from './person';

/*
class Friend extends Person{
    constructor(name) {
      super(name);
    }
    callName() {
      console.log(this.name);
    }
}

var friend = new Friend('Musashi.Miyamoto');
friend.callName();
*/

class MarkdownEditor{
  constructor(){
    //変数定義
    let editArea = document.querySelector('.rme-editor_edit');
    let editAreaInner = document.querySelector('.rme-editor_edit_inner');

    console.log("markdown");
    window.addEventListener('resize',
    function(){
      let newWidth = Math.round(window.innerWidth/2);
      editArea.setAttribute("style","width:"+newWidth);
      editAreaInner.setAttribute("style","width:"+newWidth);
    });
  }
}

var markdown = new MarkdownEditor();