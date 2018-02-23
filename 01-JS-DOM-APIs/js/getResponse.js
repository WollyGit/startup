function getResponse(config){
            // Return a new promise.
            return new Promise(function(resolve, reject) {
                                var req = new XMLHttpRequest();
                                req.open('GET', config, true);
                                req.onload = function() {
                                                  if (this.readyState == 4 && this.status == 200) {
                                                  // Copy the response on textarea
                                                  document.getElementById("respuesta").value = document.getElementById("respuesta").value + "\n" + this.responseText;
                                                }
                                          else {
                                                  // Otherwise reject with the status text and set section area background red
                                                  document.getElementById("respuesta").style.background = "#FC0000";
                                                  document.getElementById("respuesta").value = "TIMEOUT ERROR";
                                                  reject(Error(req.statusText));
                                                }
                                  };
                                  req.onerror = function(){
                                          document.getElementById("respuesta").style.background = "#FC0000";
                                          document.getElementById("respuesta").value = "CONNECT ERROR";
                                          reject(Error(req.statusText));
                                  };
                                  req.send();
                              });
  }
