window.onload = function(){
    fetch('http://localhost:5000/fav',{
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        
        // Examine the text in the response
        response.json().then(function(data) {
          console.log("-------------")
          console.log(data);
          
    var favList = document.getElementById("fav-template").innerHTML;
    var template = Handlebars.compile(favList);
    var favBook = [];      
    var i;
          for(i=0; i<data.length; i++ ){
            favBook.push(data[i]);
          }
        
    var favData = template({
      favBooks : [
        {
          book :{
            title:favBook[1].name,
            author:favBook[1].author,
            id:favBook[1].id
          },

          book :{
            title:favBook[2].name,
            author:favBook[2].author,
            id:favBook[2].id
          },
          book :{
            title:favBook[3].name,
            author:favBook[3].author,
            id:favBook[3].id
          }
        }

      ]
    });
    document.getElementById("fav").innerHTML = favData;
          
        })
      })
        .catch(function(err) {
          console.log('Fetch Error :-S', err);
        });
};

function deleteFav(x){
  fetch('http://localhost:5000/'+x,{
        method: 'DEL', 
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        
        // Examine the text in the response
        response.json().then(function(data) {});
      });

}