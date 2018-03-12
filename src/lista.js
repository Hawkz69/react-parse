import React, { Component } from 'react';
import Parse from 'parse';
import $ from 'jquery';
import './App.css';
import './css/materialize.css';
import './side-menu.css';
import { Link } from 'react-router-dom';



export default class Lista extends Component {

enviaForm(event){
            event.preventDefault();
            Parse.initialize("beta");
            Parse.serverURL = 'http://localhost:1337/parse';


            var GameScore = Parse.Object.extend("_User");
            var gameScore = new GameScore();



            var query = new Parse.Query(gameScore);

            query.include("categoria_id");
            query.equalTo('email', document.getElementById("email").value);
            query.find({
              success: function(results) {

                 console.log(results);

              /// maneira de recuperar dados 1
                for(var i in results){
                  var post = results[i].get("username");
                  var post2 = results[i].get("categoria_id").get("categoria");
              //    var post3 = post2[i].attributes['categoria'];

                  if (post != null)
                    console.log(post);

                  if(post2 != null)
                    console.log(post2);

                 

                }

                 if ((post2 == null) || (post == null))
                 {
                    document.getElementById("printa").textContent = "Usuário não encontrado";
                 } else {
                    document.getElementById("printa").textContent = "Categoria usuários: " + post2;
                 }

                  


              },

              error: function(error) {
               console.log(error);
              }
            });

                
};


  render() {
    return (
      
   <div className="App">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="text" className="validate" placeholder="Grupo de usuários"/>
        </div>
      </div>
         

              <button type="submit" className="waves-effect waves-light btn"  onClick={this.enviaForm}>Procurar</button> <br/><br/>
              <span id="printa"></span><br/><br/><br/>
              <Link to="/">Voltar</Link><br/>  
    </form>
   </div>
    );
  }
}
