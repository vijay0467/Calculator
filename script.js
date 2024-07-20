//loading all the buttons initially
 
document.addEventListener("DOMContentLoaded",()=>{
  
    //accessing the html elements
    var result=document.querySelector('#result')
    let btnContainer=document.querySelector('.container')

    //adding the functional to buttons --- mouse events
    btnContainer.addEventListener("click",(e)=>{
        //e:eventobject:gives all onfo of the event fired
         let target=e.target
         //console.log('target',target)
         if(target.tagName=="INPUT" && target.type=="button"){
            e.preventDefault()
           //function to handle the entered input  
           handleInput(target.value)
         }
    })

    //adding the functionality for keyboard events
    document.addEventListener("keydown",(e)=>{
            let key=e.key
            console.log("key",key)
            if((key>="0" && key<="9") || (["+","-","*","%","/",".","Backspace","Delete","Enter"].includes(key))){
                e.preventDefault() 
                handleInput(key)
            }
    })
})

//function to handle both mouse and keyboard events
function handleInput(input){
    //console.log(input)
    if(input==="C" || input==="Delete"){
        result.value="";
    } else if(input==="✂" || input==="Backspace"){
        result.value=result.value.slice(0,-1);
    }else if(input==="=" || input==="Enter"){
        //calculating the results
        Calculate(result.value);
    }else{
        liveScreen(input);
    }
}


//function to display the entered values by user in display screen
function liveScreen(val){
  if(result.value==="Error"){
    result.value="err"; //making empty screen when user makes error
  }else{
    result.value +=val; //user entered values appending one by one
    //console.log(result.value) //for concatination of strings
  }
}
//function to calculate the results

function Calculate(expression){
    try{
       result.value= eval(expression);
       //console.log(result.value)

    }catch(error){
        result.value="Error"
    }
}