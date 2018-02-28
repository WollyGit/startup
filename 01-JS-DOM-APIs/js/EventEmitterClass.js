class EventEmitter{
  constructor(){}

  on(eventName, callback){
    var event = new Event('build');
    // Escucha para el evento.
    document.addEventListener('build', function (e) { ... }, false);
    // Disparar event.
    document.dispatchEvent(event);
    //Once the event finish do the callback
    callback("finalizo");
}

  emit(){

  }

  off(){

  }
