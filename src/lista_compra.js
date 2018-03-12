import React, { Component } from 'react';
import Parse from 'parse';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import './App.css';
import './App.js';
import './parse.js';
import './css/materialize.css';
import './side-menu.css';
import Linha from './Linha.js';





export default class ListaCompra extends Component {


 
    constructor(props, context) {
	    super(props, context);
	   this.state = {lista : [{}]};
   //  this.incrementaLista = this.incrementaLista.bind(this);
    }
  

   componentDidMount(){
   // this.setState = {lista : ['nome':'alberto' , 'email':'rrr']};
     // this.setState({lista : [{compras_cab_id: "teste" , valor:'R$ 222,00'}]}); 
   // console.log(lista);
   console.log("componentDidMount");

  }




incrementaListas(compraID){
	//  e.preventDefault();
  //  debugger;
     console.log(compraID);
	  
};



exibeDetalhes(compraID){
    //event.preventDefault();

    function isEmpty(obj) {
        for(var prop in obj) {
            if(obj.hasOwnProperty(prop))
                return false;
            }
             return true;
    }

    Parse.initialize("beta");
    Parse.serverURL = 'http://localhost:1337/parse';

    var CompraDet = Parse.Object.extend("compras_det");
    var compra_det = new CompraDet();
    var qryCompraDet = new Parse.Query(compra_det);
    qryCompraDet.include("compras_cab_id");
    qryCompraDet.include("produto_id");

   var prods = [];

    qryCompraDet.equalTo('compras_cab_id', { "__type": "Pointer", "className": "compras_cab", "objectId": compraID});
    qryCompraDet.find({
      success: function(resultado) {
     //  console.log(resultado);
         var texto = "";
         for(var r in resultado){

          //  prods.push(var produto, {nome : resultado[r].get("produto_id").get("nome") , resultado[r].get("produto_id").get("valor"), resultado[r].get("qtd")});
            prods.push({nome : resultado[r].get("produto_id").get("nome") , valor : 'R$ ' +  resultado[r].get("produto_id").get("valor") + ',00' , qtd : resultado[r].get("qtd")});

               
        }

           for (var i = 0; i < prods.length; i++) {   
              console.log(prods[i].nome);
              console.log(prods[i].valor);
              console.log(prods[i].qtd);

              texto += prods[i].nome + " || " + prods[i].valor + " || " + prods[i].qtd + '\n';
           }


          alert("Produto || Valor || Qtd \n\n" + texto);


      },

      error: function(error) {
        console.log("Erro ao mostrar detalhes " + error);
      }
    });

}

enviaForm(event){
    event.preventDefault();

    function isEmpty(obj) {
        for(var prop in obj) {
            if(obj.hasOwnProperty(prop))
                return false;
            }
             return true;
    }


    Parse.initialize("beta");
    Parse.serverURL = 'http://localhost:1337/parse';

    var user_id, compraCabId;

    this.setState({lista : [{compras_cab_id: '' , valor:''}]}); 
    var CompraCab = Parse.Object.extend("compras_cab");
    var compra_cab = new CompraCab();
    var qryCompra = new Parse.Query(compra_cab);
    qryCompra.include("usuario_id");

    var CompraDet = Parse.Object.extend("compras_det");
    var compra_det = new CompraDet();
    var qryCompraDet = new Parse.Query(compra_det);
    qryCompraDet.include("compras_cab_id");
    qryCompraDet.include("produto_id");

    var Usuario = Parse.Object.extend("User");
    var user = new Usuario();
    var comprase = [];

    var qryUser = new Parse.Query(user);

    qryUser.equalTo('email', document.getElementById("email").value);
    qryUser.find({
        success: function(results) {
            if (isEmpty(results))
		            alert("Usuario não encontrado");
            user_id = results[0].id;

            qryCompra.equalTo('usuario_id', { "__type": "Pointer", "className": "_User", "objectId": user_id});
           	qryCompra.find({

              success: function(compras) {
                 if (isEmpty(compras))
                   alert("Usuario não comprou nada ainda");
    		        console.log(compras);
                    for(var i in compras){
    				           	compraCabId = compras[i].id;

                      comprase.push({compras_cab_id : compraCabId , valor : 'R$ ' +  compras[i].get("valor") + ',00'});


                       this.setState({lista : comprase});

                       console.log(comprase); 

                        qryCompraDet.equalTo('compras_cab_id', { "__type": "Pointer", "className": "compras_cab", "objectId": compraCabId});
                        qryCompraDet.find({
                          success: function(resultado) {
                              console.log(resultado);

                          },

      				          	error: function(error) {
      						            console.log("Erro ao mostrar detalhes " + error);
      				           	}
    	                 });  	            
    			         	} 
              }.bind(this),

  	          error: function(error) {
  				       console.log("Erro ao mostrar compras " + error);
  			      }
	        });
       }.bind(this),

	    error: function(error) {
	        console.log("Erro ao procurar usuario " + error);
	    }
    });
  //  this.setState({lista : [{compras_cab_id: comprase[t].id, valor:'R$ 222,00'}]}); 
};

  render() {
   return (   
  <div className="App">
    <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input id="email" type="Email" className="validate" placeholder="Email"/>
          </div>
         </div>
           <button type="submit" className="waves-effect waves-light btn"  onClick={this.enviaForm.bind(this)}>Listar Compras</button><br/><br/>

           
           <Link to="/">Voltar</Link><br/>
    </form>

    <br/>
			<table >
                        <thead>
                          <tr>
                            <th>CompraID</th>
                            <th>Valor total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {

                            this.state.lista.map((compra) => {
                              return (
                                <tr key={compra.compras_cab_id} >
                                  <td><a href="#"  onClick={() => this.exibeDetalhes(compra.compras_cab_id)}>{compra.compras_cab_id}</a></td>
                                  <td>{compra.valor}</td>

                                </tr>
                       
                              );
                            })
                          },
                        </tbody>
                      </table> 



  </div>


    );
  }
}


