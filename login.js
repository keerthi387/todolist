


   
// $(document).ready(function(){
//   var s=`$("#tr").val()`;
//   $("#btn").click(function(callback){



//  var s=( $("#tr").val());
//  var d=( $("#td").val());
//  console.log(s);
//  console.log(d);

//  if(s=="admin"&&d=="12345"){
//     // alert("validated");
//     // $("#forml").submit();
// callback();
//  }
//  else if(s==""||d==""){
//    alert("All fields are mandatory");
//  }
 
//  else{
//    alert("incorrect fields");
//  }

//    })
 
//   // $("#tr").val("jiii");


// })

// function get(){
//  return alert("hi");
// }

// click(get);
   
// $(document).ready(function(){
// //   var s=`$("#tr").val()`;
// var s=( $("#tr").val());
//  var d=( $("#td").val());
//   $("#btn").click(function(s,d){


// //  var s=( $("#tr").val());
// //  var d=( $("#td").val());
// //  console.log(s);
// //  console.log(d);

//  if(s=="admin"&&d=="12345"){
//     alert("validated");
//     $("#forml").submit();

//  }
//  else {
//    alert("All fields are mandatory");
//  }
// // alert(s);
// // alert(b);
 
//    })
   

//   // $("#tr").val("jiii");


// })

// on(gottt,el

// function validatis){

  // var mail=document.getElementById("tr").value;
  // var pass=document.getElementById("td").value;
 function logi(callback){

  var mail=document.getElementById("op").value;
  var pass=document.getElementById("po").value;


  if(mail=="admin"&&pass=="12345"){
    callback();
  }
 else{
   alert("not valid");
 }
 }
 function page(){
   location.assign("todo.html");
 }
 function login(){
   logi(page);
 }

