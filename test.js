// Q FIND THE 5 NUMBERS FROM GIVEN ARRAY WHO'S SUBSTRACTION IS TARGET 
//  var target= -54;
//  var array= [2,355,6,67,78,23,5,67,78,43,67,34,6,74,7,45,23,45,78,89,34,23]

//  function findNumber(array, target){
//     var flag=true;
//     for(i=0; i<array.length-1; i++){
//         for(j=i+1; j<array.length; j++){
//             for(k=j+1; k<array.length; k++){
//                 for(l=k+1; l<array.length; l++){
//                     for(m=l+1; m<array.length; m++){
//                         if(array[i] - array[j] - array[k] - array[l] - array[m] == target){
//                             console.log(array[i], array[j], array[k], array[l], array[m])
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     if(flag == false){
//         console.log("not defined")
//     }
//  }
//  findNumber(array, target)


// Q FIND THE 2 NUMBERS FROM GIVEN ARRAY WHO'S MULTIPLICATION IS TARGET

//  var target2= 236028;
//  var array2= [2,355,6,67,78,23,5,67,78,43,67,34,6,74,7,45,23,45,78,89,34,23];
//  function findMulti(array, target2){
//     var flag=false;
//             for(i=0; i<array.length; i++){
//                 for(j=i+1; j<array.length; j++){
//                     if(array[i] * array[j] == target2){
//                         console.log(array[i], array[j])
//                         flag=true;
//                     }
//                 }
//             }
//             if(flag == false){
//                 console.log("not Defined")
//             }
//  }
//  findMulti(array2, target2)

// Q find the even number from given numbers 

var array3= [2,355,6,67,78,23,5,67,78,43,67,34,6,74,7,45,23,45,78,89,34,23];

  var array3=number;
  function Sum(array, number){
    for(i=0; i<array.length; i++){
        if(array[i] % 2 == 0){
            console.log(array[i])
        }
    }
  }
  Sum(array, number)

        