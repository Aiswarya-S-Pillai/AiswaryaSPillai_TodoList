$.ajax({
      url: "https://jsonplaceholder.typicode.com/todos"
  }).done(function (data) {
      console.log(data);
      
var table = document.getElementById('Table');
var output = "";

$("#Table").append(data.map(function (val) {
            if(val.completed== true){
            output += "<tr>\n";
            output += "<td>" + val.title + "</td>\n" ;
            output += "<td>" + "<input type = 'checkbox' checked disabled > "  +"</td>\n" ;
            output += "</tr>\n";
            }
            else{
            output += "<tr>\n";
            output += "<td>" + val.title + "</td>\n" ;
            output += "<td>" + "<input type = 'checkbox' > "  +"</td>\n" ;
            output += "</tr>\n";
            }
          }));
          table.innerHTML+=output;
let count = 0;
$("#Table").on("change", ":checkbox", function () {
var check=this.checked;
var promise = new Promise(function (resolve,reject) {
  if(check === true)
  count++ ;
  else
  if(check ===false)
  count--;
  console.log(count,check);
  if (count == 5) {
      resolve("Congrats. 5 Tasks have been Successfully Completed");
  }
  else
  if(count>5)
  {
    reject();
  }
 });
promise
  .then(function (test) {
      alert(test);
     
  })
  .catch(function(done){
  })
});

});