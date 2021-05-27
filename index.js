document.addEventListener("DOMContentLoaded", () => { 
})   
const configObj = {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
      name:  "Steve",
      email: "steve@steve.com" 
  })
};

function submitData(){
    fetch("http://localhost:3000/users", configObj) 
    .then(function(resp){
        return resp.json();
     })
     .then(function(object){
        console.log(object)
    })
    .catch(function(error){
     alert("Unauthorized Access");
     console.log(error.message);
  })
  
}







// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };


//   let configObj = {
//       method: "POST",
//       headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };
  
//   fetch("http://localhost:3000/dogs", configObj)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(object) {
//       console.log(object);
//     })
//     .catch(function(error) {
//       alert("Bad things! Ragnarők!");
//       console.log(error.message);
//     });