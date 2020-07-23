    
//     // **********************Ch 38 to 42*************************
//                     //  *****Task # 01*****

//         var a=prompt("Enter value of number");
//         var b=prompt("Enter value of power");

//     function power(a,b){
//         var res=a;
//          for(var i=1;i<b;i++)
//          {
//              res=res*a;
//          }
//          document.write( "The value of " +a +" raised to " +b +" is " +res);
//     }

//     power(a,b);

    
// document.write("<br>");
// document.write("<br>");

//                         //  *****Task # 02*****
   
//             var year=prompt("Enter a year");

//     function leapYear(year){
//         if((year % 4 && year % 100 && year % 400)==0)
//         {
//             document.write(year +" is leap year. ")
//         }
//         else
//         {
//             document.write(year +" is not leap year. ")
//         }
//     }

//     leapYear(year);
//     document.write("<br>");
//     document.write("<br>");

    //                         //  *****Task # 03*****
    //     var a=+prompt("Enter the side a of triangle");
    //     var b=+prompt("Enter the side b of triangle");
    //     var c=+prompt("Enter the side c of triangle");

    //     function calculate_S(a,b,c){
    //         var s=(a+b+c)/2;
    //         return s;
            
    //     }

    //     function area(a,b,c,s){
    //         var area=(s(s-a)(s-b)(s-c));
    //         document.write("Area is " +area);
    //     }
    //     var s= calculate_S(a,b,c);
    //     area(a,b,c,s);

    // document.write("<br>");
    // document.write("<br>");

//                                 //  *****Task # 04*****
//     main();
//         function main(){
//             var sunject1=+prompt("Enter a marks of subject 1");
//             var sunject2=+prompt("Enter a marks of subject 2");
//             var sunject3=+prompt("Enter a marks of subject 3");
//             var total=+prompt("Enter total marks of 3 subjects")
             
//            var avg= average(sunject1,sunject2,sunject3)
//             document.write("Average of 3 subjects is " +avg )
//             document.write("<br>");
//             var percnt= percentage(sunject1,sunject2,sunject3,total)
//             document.write("Percenatge of 3 subjects is " +percnt +"%" )
//         }

//         function average(sunject1,sunject2,sunject3){
//                   var avg=(sunject1+sunject2+sunject3)/3;
//                   return avg;          
//         }

//         function percentage(sunject1,sunject2,sunject3,total){
//             var totalGainmarks=sunject1+sunject2+sunject3;
//             var percnt=((totalGainmarks/total)*100);
//             return percnt;

//         }
//   document.write("<br>");
//   document.write("<br>");

                                        //  *****Task # 05*****

        







               // **********************Ch 38 to 42*************************
                               //  *****Task # 01*****
     function showalert(){
          alert("Welcome to my mobile!");
     }

                               //  *****Task # 02*****    
     function showMsg(){
         alert("Thanks for purchasing a phone for us")
     }

                                 //  *****Task # 03***** 
     var index,table=document.getElementById('table');
     for(var i=0;i<table.rows.length ;i++)
     {
         table.rows[i].cells[2].onclick=function()
         {
             index=this.parentElement.rowIndex;
             table.deleteRow(index);

         }
     }

                                 //  *****Task # 04*****
                                 
    function newImage(){
        document.getElementById('img').src="images/cat2.jpg";
    }

    function oldImage(){
        document.getElementById('img').src="images/cat1.jpg";
    }


                                     //  *****Task # 05*****
   click=0;
    function increaseValue(){
        click += 1;
        var value=document.getElementById('count').innerHTML=click;
       
    }

    function decreaseValue(){
        click -= 1;
        var value=document.getElementById('count').innerHTML=click;
       
    }

     

    
     