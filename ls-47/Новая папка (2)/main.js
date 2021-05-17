class Button{
    handleEvent(event) {      
      let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
      this[method](event);
    }
    onStart(){
        elem.innerHTML = "Nice cock";
    }
    onFinish(){
        elem.innerHTML = "Big black cock";
    }
}

let c = new Button();
elem.addEventListener('mousedown', c);
elem.addEventListener('mouseup', c);