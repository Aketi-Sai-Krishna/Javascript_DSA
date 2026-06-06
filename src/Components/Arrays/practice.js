1. an array is an special object where we can store multiple values in a single variable.
    let num=[1,2,2,3];

2. to store multiple vlaues in a single variable without creating multiple variables to multiple values.a

3. let numbers = [];

4. let numbers = [1,2,3,5,6];

5. let strings = ["name", "things", "fruits", "animals","sports"];

6. yes, aray can store different data types.
    let data = [0,"name",{number:1}];

7. let numbers = [1,2,3]; 
here numbers[0] = 1, 
   index of 1 element in the numbers array is 0
   index of 2 element in the numbers array is 1
   index of 3 element in the numbers array is 2

8. 0

9. 10

10.30

11. index[1] = second element

12. index[array.length-1] = last element

13. .length to know the number of the elements in a array.
  in this let numbers = [1,2,3]; length of numbers array is 3

14. 3

15. using the array methods we can update the array.By array methods we can edit , delete, break, and can form another array
based on original array and can modify original array. aray are mutable as well


16. const arr = [10,100,30];

17. mutable

18. arrays can be changed after the creation of them.By

19. yeah

20. A array inside the another array.

21. push method adds the element at the end of the array.

22. let fruits = ["Apple", "Mango"], fruits.push('Banana') gives us ["Apple", "Mango", "Banana"]; 

23. ["Apple", "Mango", "Banana"]; push updates the array.

24. pop removes the element at the end of the array.

25. let fruits = ["Apple", "Mango", "Banana"]; fruits.pop(); it updates the array by removing the last element in the array.

26. [10,20];

27. Push adds the last element in the array while Pop removes the last element.A

28. shift removes the first element in the array 

29. unshift adds the first element in the array.

30. shift removes the first element and pop removes the last elements in the array.

31. push adds the last element and unshift adds the first element in the array.

32. [10,20,30];

33. [20,30];

34.Push is faster becasue it needs to add the element at the end of the array. No existing elements need to be moved.

35.Pop is faster because it need to remove the last element only. But for shift need to remove the first element an dneed to rearrange the existing indexes of other elements.

36. const maxValue =(array)=>{
    let max = array[0];
    for (i=1; i < array.length; i++){
        if(array[i]> max){
          max= array[i];
        }
    }
    return max;
  }

    console.log(maxValue[132,323,534]);

37. const maxValue= (array)=>{
    let max=array[0];
    let i=1;
    while(i< array.length){
          if(array[i]> max){
          max= array[i];
        }
        i++;
    }
    return max

}

38. let arr= [10,20,30,40];
     
   let allEle = (arr) => {
      for (let i=0; i< arr.length; i++){
         console.log(arr[i]);
      }
   }
    console.log(allEle([12,43,64]));

    39. arr.length are useful in loops iterations , while performing operations on arrays theris length can known as parameter to perform actions

    40. index for elements in a array has always the lower value than the lenth of the array, indexes start with zero while length can be known as no of elements in the array.


41.
   let arr= [10,20,30,40];
  
     
   let allEle = (arr) => {
     let max= arr.length -1
      for (let i= max; i>=0 ; i--){
         console.log(arr[i]);
      }
   }
    console.log(allEle([12,43,64]));

    42. let count=(arr)=>{
        let counter = 0;
        for(i=0; i< arr.length; i++){
           counter++;
        }
        return counter;
    }

    43. let first=(arr)=>{
          let intital = arr[0];
          return intital;
        }

    44. let last=(arr)=>{
          let final = arr[arr.length-1];
          return final;
        }

    45. let even = (arr)=>{
          // let result=[];
      for (i=0; i< arr.length; i++){
        if(arr[i]%2 === 0){
            console.log(arr[i]);
            //result.push(arr[i])
        }
      }
      return result;
    }

 46.   
     let odd = (arr)=>{
          // let result=[];
      for (i=0; i< arr.length; i++){
        if(arr[i]%2 !== 0){
            console.log(arr[i]);
            //result.push(arr[i])
        }
      }
      return result;
    }

    47. let evenCount = (arr)=>{
        let counter = 0;
      for (i=0; i< arr.length; i++){
        if(arr[i]%2 === 0){
          counter++;
        }
      }
      return counter;
    }

    48. let odd = (arr)=>{
          let counter = 0;
          for (i=0; i< arr.length; i++){
            if(arr[i]%2 !== 0){
              console.log(arr[i]);
              counter++;
            }
          }
          return result;
        }

    49. let arr = [1,2,3,4];
        for(let i=0; i< arr.length; i++){
          console.log(`${i} is the index of ${arr[i]}`)
        }

    50.  Traversal is the process of going through all elements of an array sequentially.

Purpose: To read, update, or perform operations (like sum, search, filter) on array elements.


51. let sum1 = [1,2,3];
    
   let sum = (arr)=>{
    let counter=0;
        for (let i=0; i< arr.length; i++){
            console.log(arr[i]);
            counter += arr[i]
    }
    return counter;
   }
   console.log(sum([2,43,34]))

   52.  let avg=(arr)=>{
          let counter=0;
            for(i=0; i< arr.length; i++){
               counter += arr[i]
            }
            return counter/arr.length;
        }

   53. let largest=(arr)=>{
        let max=arr[0];
        for (i=1; i<arr.length; i++){
            if (arr[i]>max){
              console.log(arr[i]);
              max = arr[i];

            }
        }
        return max;
   }


   54.let smallest=(arr)=>{
        let small=arr[0];
        for (i=1; i<arr.length; i++){
            if (small > arr[i]){
              small = arr[i];
            }
        }
        return small;
   }





























































































