function bookMark(x){
  if(x.classList.contains("fas")){
    x.classList.remove("fas");
    x.childNodes[0].innerHTML = '';
  } else {
    x.classList.toggle("fas", "fa-bookmark");
    x.innerHTML = '<span class="discard">\Discard\</span>';
    var title = document.getElementsByTagName("li")[x.parentElement.id].innerText;
    var pos1 = title.indexOf("\n");
    var substring = title.substr(0, pos1);  
    var pos2 = title.indexOf("\n", pos1 + 1); 
    var pos3 = title.indexOf("\n", pos2 + 1);
    var substring2 = title.substr(pos1+1, pos2);
    substring2 = title.substr(pos1+1,substring2.indexOf("\n"));
    var substring3 = title.substr(pos2+1, pos3);
    substring3 = substring3.substr(0, substring3.indexOf("\n"));
   
     var book1 = {
       "id":substring3,
       "name" : substring,
       "author" : substring2
     }
     console.log("--------");   
     console.log(book1);
     console.log("--------");   
     var data = book1;
     fetch('http://localhost:5000/api/books', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        
        // Examine the text in the response
        response.json().then(function(data) {
          console.log(data);
          
        })
      })
        .catch(function(err) {
          console.log('Fetch Error :-S', err);
        });
    }
  
  }



function loadResults(){
  var search = document.getElementById("key-word").value;
  
  fetch('https://reststop.randomhouse.com/resources/works/?search='+search, {
    headers : { 
      'Accept': 'application/json'
     }
  })
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        } 
        
        // Examine the text in the response
        response.json().then(function(data) {

        
        if (data.work === undefined){
          document.getElementById("error").innerHTML= "No book found matching that key word! Try another one!";
          return;
        }
        document.getElementById("error").innerHTML= "";
        var bookInfo = document.getElementById("quote-template").innerHTML;
          var template = Handlebars.compile(bookInfo);
        


        var titleArray = [];
        var i;
        for (i=0; i<10; i++){
          titleArray.push(data.work[i].titleweb);
        }

        var authorArray = [];
        for (i=0; i<10; i++){
          authorArray.push(data.work[i].authorweb);
        }
        
        var workidArray = [];
        for (i=0; i<10; i++){
          workidArray.push(data.work[i].workid);
        }
       

            var bookData = template({
        quotes: [
          {quote: {
            title : titleArray[0],
            author : authorArray[0],
            id : workidArray[0]
            }
          },
          {quote: {
            title : titleArray[1],
            author : authorArray[1],
            id : workidArray[1]
            }
          },
          {quote: {
            title : titleArray[2],
            author : authorArray[2],
            id : workidArray[2]
            }
          },
          {quote: {
            title : titleArray[3],
            author : authorArray[3],
            id : workidArray[3]
            }
          }
        ]});

        document.getElementById("bookData").innerHTML = bookData;

        var moreInfo = document.getElementById("more-template").innerHTML;
        
        var template = Handlebars.compile(moreInfo);

        var moreText = document.getElementById("showMore");
        moreText.style.visibility = "visible";
        
        var moreData = template({
          quotes: [
            {quote: {
              title : titleArray[4],
              author : authorArray[4],
              id : workidArray[4]
              }
            },
            {quote: {
              title : titleArray[5],
              author : authorArray[5],
              id : workidArray[5]
              }
            },
            {quote: {
              title : titleArray[6],
              author : authorArray[6],
              id : workidArray[6]
              }
            },
            {quote: {
              title : titleArray[7],
              author : authorArray[7],
              id : workidArray[7]
              }
            },
            {quote: {
              title : titleArray[8],
              author : authorArray[8],
              id : workidArray[8]
              }
            },
            {quote: {
              title : titleArray[9],
              author : authorArray[9],
              id : workidArray[9]
              }
            }
          ]});
         

        document.getElementById("showMore").onclick = function(){
                 document.getElementById("more").innerHTML = moreData;
                  updateIds();
        }    
    });
    
    })
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

}
function updateIds(){
  var list = document.getElementById("list1");
        var number = list.getElementsByTagName("li").length;
        var i;
        for (i=0; i<number;i++){
          list.getElementsByTagName("li")[i].id = i;
  }

   
  var list2 = document.getElementById("list2");
  var number2 = list2.getElementsByTagName("li").length;
  var j;
  for (j=0; j<number2;j++){
    list2.getElementsByTagName("li")[j].id = j+number;
  }
}