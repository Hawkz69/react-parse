
import Parse from 'parse';


            Parse.initialize("beta");
            Parse.serverURL = 'http://localhost:1337/parse';


            var GameScore = Parse.Object.extend("GameScore");
            var gameScore = new GameScore();


            


            var query = new Parse.Query(gameScore);
            query.include("mega_teste2");
            query.find({
              success: function(results) {

              console.log(results);

            /// maneira de recuperar dados 1
              for(var i in results){
                var post = results[i].get("email");
               //  var post2 = results[i].get("mega_teste2");
                // var post3 = post2.get("categoria");
                
                if (post != null)
                 console.log(post);
              //   console.log(post2);
                
              }
               
            /// maneira de recuperar dados 2
                var nomea = results[3].attributes['email'];
              
                var senha = results[3].attributes['pass'];
            

                console.log(nomea);
                console.log(senha);
               
 
              },

              error: function(error) {
               console.log(error);
              }
            });




            function botao(event){
              event.preventDefault();
           
              console.log("Ta indo");
              query.equalTo('email' , document.getElementById("email").value) && query.equalTo('pass' , document.getElementById("password").value);
               query.find({
                 success: function(results) {


                  if (isEmpty(results)) {
                    alert('Logado com sucesso!')
                  } else {
                    alert('Email ou senha inválidos!')
                  }

                  console.log(results);
                      
            
                 },
                error: function(error) {
                  alert('Houve um erro');
                  console.log(error);
                
                 }
              });
  
            };


            function isEmpty(obj) {
                for(var prop in obj) {
                    if(obj.hasOwnProperty(prop))
                        return true;
                }

                return false;
            }

