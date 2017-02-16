(function() {
  'use strict';
var Employees = [
    { Name: 'Ankit', age: 23, salary:400 ,dob:'26-05-1993'},
    { Name: 'Sargam', age: 22, salary:10000000 ,dob:'15-02-1994'},
    { Name: 'Ushma', age: 23, salary:100000000 ,dob:'18-05-1993'},
    { Name: 'Sahil', age: 22, salary:100000000 ,dob:'21-05-1994'}
];

document.write("<b>"+"Employee Details"+"<br>"+"</b>");
for (var i = 0; i < Employees.length; i++)
 {

           document.write("Name:"+Employees[i].Name+"<br>");
           document.write("Age:"+Employees[i].age+"<br>");
           document.write("Salary:"+Employees[i].salary+"<br>");
           document.write("Dob:"+Employees[i].dob+"<br><br>");

  }
document.write("<b>"+"Employees with salary greater thn 5000"+"<br>"+"</b>");
 for (var i = 0; i < Employees.length; i++)
  {
       if(Employees[i].salary > 5000)
            document.write(Employees[i].Name+"<br>");

   }

   var obj = { };
   for (var i = 0, j = Employees.length; i < j; i++) {
       obj[Employees[i].age] = (obj[Employees[i].age] || 0) + 1;
}
document.write("<b>"+"Group employee on the basis of their age"+"<br>"+"</b>");
for(var j in obj) {
 document.write(" Age "+j+" count "+obj[j]+"<br>");
}

document.write("<b>"+"Salaries after increment"+"<br>"+"</b>");
for (var i = 0; i < Employees.length; i++)
 {
      if(Employees[i].salary > 1000 && Employees[i].age >20)
          Employees[i].salary=Employees[i].salary*5;


  }
  for (var i = 0; i < Employees.length; i++)
   {

             document.write("Name:"+Employees[i].Name+"<br>");
             document.write("Age:"+Employees[i].age+"<br>");
             document.write("Salary:"+Employees[i].salary+"<br>");
             document.write("Dob:"+Employees[i].dob+"<br><br>");

    }



}());
