import React, { Component } from 'react';




export default class linha extends Component{ 

	incrementaLista(e){
	  e.preventDefault();
	  this.setState({lista : [{compras_cab_id: "teste" , valor:'R$ 222,00'}]}); 
	  
};

    render() {
        return(
              this.state.lista.map(function(compra){
                              return (
                                <tr key={compra.id}>
                                  <td><a href="#" onClick={this.incrementaLista}>{compra.compras_cab_id}</a></td>
                                  <td>{compra.valor}</td>

                                </tr>
                              );
                            })
      );
    }
}
