import React, { Component } from 'react';
import Parse from 'parse';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import './App.css';
import './parse.js';
import './css/materialize.css';
import './side-menu.css';



export default class Cadastro extends Component {

  componentDidMount(){
    var Mega_teste = Parse.Object.extend("mega_teste");
    var mega_teste = new Mega_teste();
    var query1 = new Parse.Query(mega_teste);
    query1.find({
              success: function(results) {

                   console.log(results);

              /// maneira de recuperar dados 1
                for(var i in results){
                  var nome = results[i].get("categoria");
                  var id = results[i].id;
                 //  var post2 = results[i].get("categoria_id").get("categoria");
              //    var post3 = post2[i].attributes['categoria'];

                  if (nome != null){
                    console.log(id);
                    console.log(nome);
                  }

                }
              },

              error: function(error) {
               console.log(error);
              }
            });

   // document.getElementById("er").textContent = "ccc";
  }

enviaForm(event){
  event.preventDefault();
  var User = Parse.Object.extend("User");
  var user = new User();
 
   user.save({
         email: document.getElementById("email").value,
         username: document.getElementById("nome").value,
         password: document.getElementById("password").value
        }, {
         success: function(gameScore) {
                // The object was saved successfully.
                alert("Cadastrado com sucesso!");
                console.log("CADASTROU COM SUCESSO!");
          },
         error: function(gameScore, error) {
                // The save failed.
                console.log("HOUVE ERRO" + error);
              }
         });
                
 };


  render() {
    return (     
  <div className="App">
    <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input id="nome" type="text" className="validate" placeholder="Nome"/>
          </div>

           <div className="input-field col s12">
            <input id="email" type="text" className="validate" placeholder="Email"/>
          </div>
   
          <div className="input-field col s12">
            <input id="password" type="password" className="validate" placeholder="Password"/>  
          </div>



           <p>
            <input name="group1" type="radio" id="test1" />
            


            <input name="group1" type="radio" id="test2" />
            
          </p>
         </div>
           <button type="submit" className="waves-effect waves-light btn"  onClick={this.enviaForm}>Cadastrar</button><br/><br/>


           <Link to="/">Voltar</Link><br/>
      
    </form>
  </div>
    );
  }
}
