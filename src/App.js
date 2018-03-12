import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Parse from 'parse';
import $ from 'jquery';
import './App.css';
import './parse.js';
import './css/materialize.css';
import './side-menu.css';


class App extends Component {


componentDidMount() {
  console.log("Passou aqui");
  
}


enviaForm(event){

  function isEmpty(obj) {
                for(var prop in obj) {
                    if(obj.hasOwnProperty(prop))
                        return true;
                }

                return false;
    }

  console.log("enviou");
  event.preventDefault();

   Parse.initialize("beta");
   Parse.serverURL = 'http://localhost:1337/parse';
   var verifica;

    var GameScore = Parse.Object.extend("GameScore");
    var gameScore = new GameScore();

    var userQuery = new Parse.Query(Parse.User); 
     // userQuery.equalTo('email', document.getElementById("email").value) && userQuery.equalTo('pass' , document.getElementById("password").value);;

    //   userQuery.first().then(function(_user) 
     //   { 
     //     var username = _user.toJSON().username; 
     //     var password = _user.toJSON().password; 
       //   Parse.User.logIn(document.getElementById("email").value, document.getElementById("password").value).then(function(_user) 
        //    { 
        //      console.info("Logged in via email"); 
        //    }, function(_error) 
         //   {
        //     console.error("There was an error", _error); 
        //    }) 
        //    }, function(_error) 
         //   {
         //       console.error("There was an error", _error); 
         //   });

        Parse.User.logIn(document.getElementById("email").value, document.getElementById("password").value, {
                // Se o nome de usuário e senha existirem
                success: function(user) {
                    alert('Welcome!');
                },
                // Se houver algum erro
                error: function(user, error) {
                    console.log(error);
                }
            });
         
     

   //   Parse.User.logIn(document.getElementById("email").value, document.getElementById("password").value)({
     //    success: function(results) {
                
              
                    //      results.set( "mega_teste2", { "__type": "Pointer", "className": "mega_teste", "objectId": "oJXTpaimLm" });
                     //    results.save();
                    //        gameScore.set("mega_teste2", "oJXTpaimLm");

                       //    gameScore.put( "categ_id", { "__type": "Pointer", "className": "GameScore", "objectId": results[0]} );
                      //     var pointer = gameScore.createWithoutData(results[0].get("email"));
                      //     gameScore.set("myPointerKey", pointer);

             //    console.log(results);
            //      console.log("LOGADOOO");

            //    },
           //    error: function(error) {
           //       alert('Houve um erro');
           //       console.log(error);
                        
           //    }
        //    });

     
     }

//}
  /*  loginWithEmail() {
       Parse.initialize("beta");
      Parse.serverURL = 'http://localhost:1337/parse';
      var userQuery = new Parse.Query(Parse.User);

      var email = document.getElementById('email').value;
      var str;

      if (email != null) {
        str = email.value;
       }
     else {
        str = null;
     }


      userQuery.equalTo('email', document.getElementById("email").value);
      userQuery.first().then(function(_user) {
      if (!_user) {
          console.log("No user found with with email address of: " + str);
      }
      var username = _user.toJSON().username;
      Parse.User.logIn(str, document.getElementById("pass").value).then(function(_user) 
      {
        console.info("Logged in via email");
       //  _success && _success(_user);
      }, function(_error) {
      console.error("There was an error logging in", _error);
     //  _error && _error(_error);
      })
      }, function(_error) {
      console.error("There was an error with the query", _error);
    //   _error && _error(_error);
      });
}*/



 // gameScore.put("categ_id", Parse.User.current());
  //gameScore.createWithoutData("UserInfo","44444");

   //  var pointer = gameScore.createWithoutData("fdfdf");
   //  gameScore.set("mega_teste2", pointer);
   // gameScore.set( "mega_teste2", { "__type": "Pointer", "className": "GameScore", "objectId": "1234566"} );
  
 // var pointer = gameScore.createWithoutData("1234");
 //  gameScore.set("categ_id", "12345");
 // gameScore.save();


 //   var query = new Parse.Query(gameScore);
   // var up = new Parse.Query(gameScore);

  
 //  query.equalTo('email' , document.getElementById("email").value) && query.equalTo('pass' , document.getElementById("password").value);
 //   query.first({
 //       success: function(results) {
        
  //        if (isEmpty(results)) {
  //                  alert('Logado com sucesso!')
  //                } else {
  //                  alert('Email ou senha inválidos!')
  //                }
//
  //                results.set( "mega_teste2", { "__type": "Pointer", "className": "mega_teste", "objectId": "oJXTpaimLm" });
 //                 results.save();
                //    gameScore.set("mega_teste2", "oJXTpaimLm");

                  // gameScore.put( "categ_id", { "__type": "Pointer", "className": "GameScore", "objectId": results[0]} );
                  // var pointer = gameScore.createWithoutData(results[0].get("email"));
                  // gameScore.set("myPointerKey", pointer);

  //        console.log(results);

    //    },
   //     error: function(error) {
   //       alert('Houve um erro');
   //       console.log(error);
                
   //     }
    //});
//};


  render() {
    return ( 
      <div className="App">
         <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="text" className="validate" placeholder="Email"/>
              </div>
              <div className="input-field col s12">
                <input id="password" type="password" className="validate" placeholder="Password"/>
              </div>
            </div>
               
               <button type="submit" className="waves-effect waves-light btn"  onClick={this.enviaForm}>Sign in</button> <br/><br/>
               <Link to="/cadastro">Cadastrar</Link><br/>
               <Link to="/Lista">Lista</Link><br/>
               <Link to="/ListaCompra">Lista Compra</Link>
          </form>
       </div>
    );
  }
}



export default App;
