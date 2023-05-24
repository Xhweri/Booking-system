let tvaLi = document.querySelector('.tvaLi');
let fyrLi= document.querySelector('.fyrLi');
let sexLi=document.querySelector('.sexLi');
let seats=document.querySelector('#seats');
let bekrafta=document.querySelector('.bekraftaBtn');

let forNamn=document.querySelector('#fname');
let tabort=document.querySelector('.tabortBtn');
let avboka=document.querySelector('.avboka-li');
let returera=document.querySelector('.returera');
let bokad=document.createTextNode('Bokad');
let fullbokat=false;
let kosystem=document.querySelector('.ko-li')
let selectedBord;
let upptaget=[];


fyrLi.addEventListener('click', (event) => {
    if (event.target && event.target.nodeName === 'LI') {
      selectedBord = event.target.innerText;
      seats.value+=selectedBord;
      seats.style.color='green';
      event.target.classList.add('selected');
      
    }
  });

  
tvaLi.addEventListener('click', (event) => {
    if (event.target && event.target.nodeName === 'LI') {
      selectedBord = event.target.innerText;
      seats.value+=selectedBord;
      event.target.classList.add('selected');
    }
  });
  sexLi.addEventListener('click', (event) => {
    if (event.target && event.target.nodeName === 'LI') {
      selectedBord = event.target.innerText;
      seats.value+=selectedBord;
      seats.style.color='green';
      event.target.classList.add('selected');
      
    }
  });

  bekrafta.addEventListener("click",()=>{
    if(fullbokat){
      let koTxt=document.createTextNode(forNamn.value);
      let koLi=document.createElement('li');
      koLi.appendChild(koTxt);
      kosystem.appendChild(koLi);
    }
    if(upptaget.length===3){
      fullbokat=true;
      alert("Det är fullbokat");
      return;
    }
    if (selectedBord) {
    upptaget.push(selectedBord);
    alert(`Bokning slutförd åt ${forNamn.value}, ${seats.value}`);

    let nyEl=document.createElement('li');
    let ongra=document.createTextNode(seats.value);
    nyEl.appendChild(ongra);
    avboka.appendChild(nyEl);
    }
   
    let selectedTableElement = document.querySelector('.selected');
    selectedTableElement.style.color = 'red';
    seats.value = '';
    forNamn.value = '';
    
     // Remove the "selected" class from the table
    selectedTableElement.classList.remove('selected');
    selectedBord = null; // Reset selectedBord variable
    console.log(upptaget); 
  });
  


  tabort.addEventListener('click',()=>{
    seats.value = '';
    forNamn.value = '';
    
  });





  avboka.addEventListener('click',(event)=>{
    
    event.preventDefault();
    if(event.target && event.target.nodeName === 'LI'){
      let clickedText = event.target.innerText;
      let childrenF = fyrLi.children;
      let childrenS = sexLi.children;
      let childrenT = tvaLi.children;

      for(let i=0;i<upptaget.length;i++){
        if(upptaget.includes(event.target.innerText)){
          console.log("DET FINNS I!!!!");
          event.target.remove();

          for (let i = 0; i < childrenF.length; i++) {
            if (childrenF[i].innerText === clickedText) {
              childrenF[i].style.color = "black";
              console.log("Det hittades");
              break;
            }
          }
          for (let i = 0; i < childrenS.length; i++) {
            if (childrenS[i].innerText === clickedText) {
              childrenS[i].style.color = "black";
              console.log("Det hittades");
              break;
            }
          }
          for (let i = 0; i < childrenT.length; i++) {
            if (childrenT[i].innerText === clickedText) {
              childrenT[i].style.color = "black";
              console.log("Det hittades");
              break;
            }
          }
          const index = upptaget.indexOf(event.target.innerText);
          if (index !== -1) {
            upptaget.splice(index, 1);
            console.log(`Removed ${event.target.innerText} from the array`);
            
          }
          console.log(upptaget);
        }
      }
    }
  })

 kosystem.addEventListener('click',(event)=>{
event.target.remove();
 })
  

  







  
  