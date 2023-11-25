function ppost(){
    var nama= document.getElementById("name").value;
    var emil = document.getElementById("email").value;
    var sub = document.getElementById("subject").value;
    var msg = document.getElementById("message").value;
  
    alert('namamu : ' +nama  +'\nsubjectmu : '+ sub  +'\nalamat emailmu : ' + emil +'\npesanmu : '+ msg);

  }


  function loginn(){
    var nama= document.getElementById("username").value;
    var pass = document.getElementById("pass").value;
    
    alert('Username : ' +nama  +'\nPasswordmu adalah : '+  pass);
  }