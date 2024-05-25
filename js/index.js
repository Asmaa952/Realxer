

var array =[ '<p class="m-5">"Resentment is like drinking poison and waiting for your enemies to die."</p> <br/> <p class="size">--Nelson Mandela</p>','<p class="m-5">"The best revenge is massive success."</p><br/><p class="col">--Frank Sinatra</p>',' <p class="m-5">"You miss 100% of the shots you do not take."</p><br/><p class="cool">--Wayne Gretzy</p>',' <p class="m-5" >"It is not what happens to you, but how you react to it that matters."</p><br/><p class="coool">--Epictetus</p>',' <p class="m-5">"Do not take life too seriously. You will not get out alive." </p><br/><p class="cooool">--Elbert Hubbard</p>' ];
var  index=0; 
function displayContent() {
    document.getElementById('demo').innerHTML = array[index];
    index++;
    if( index>=array.length ){
       index=0;

    }   
    document.getElementById('myButton').addEventListener('click', displayContent);
   

}                     
displayContent()