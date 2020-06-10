// function layz(){
    //creating an object//
    $(document).ready(function(){
    var xhr =new XMLHttpRequest();
    //EVENT LISTNER
    xhr.onreadystatechange = function(){
        //condition
        if(this.readyState==4&&this.status==200){
    //        // document.getElementById("demo").innerHTML=JSON.parse(this.responseText);
          var pp=JSON.parse(this.responseText);
    //  console.log(pp);
         var output="";
        pp.forEach(function(i) {

            var s=`${i.completed}`
            // console.log(s);
            if(s=="true"){

                output+=`<input type="checkbox"checked disabled>${i.title}<br>`
           

            }
            else{
                output+=`<input type="checkbox">${i.title}<br>`
               
    }
        });
    
     document.getElementById("demo").innerHTML=output;
     var count=0;
     var promise=new Promise((resolve,reject)=>{
            $('input[type="checkbox"]').click(function(){
                  
                if($(this).is(":checked")==true){
                        count=count+1;
                    // console.log("Checkbox is checked.");
                    
                

                    if(count===5){
                        resolve();
                    }
                    
                }
    
                else if($(this).is(":checked")==false){
                    
                   count=count-1;
                   reject();
                    // console.log("Checkbox is unchecked.");
    
                }


    
            }).change();
        })
            
            promise.then(function(){
                alert("sucess");
            })
            .catch(function(){
                alert("failed");
            })
            
            
        
        
     }
      }
     xhr.open("GET","https://jsonplaceholder.typicode.com/todos?userId=1",true);
     xhr.send();
   })
