import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Link, browserHistory} from 'react-router-dom';
import './index.css';
import App from './App';
import Cadastro from './Cadastro';
import Lista from './lista';
import ListaCompra from './lista_compra';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
	 <Router>
            
                    <Switch>            
                        <Route exact path="/" component={App}/> 
                        <Route path="/cadastro" component={Cadastro}/> 
                         <Route path="/lista" component={Lista}/>  
                          <Route path="/ListaCompra" component={ListaCompra}/>                 
                    </Switch>            
            
     </Router>, document.getElementById('root'));
registerServiceWorker();
