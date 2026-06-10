1. An object is an collection of relation data stored in key-values pairs.

2. It is hard store the relation data indivividually and use them.An

3. const object= {};

4. const object= {
  name: "sai",
  age:20
};

5. console.log(object.keys(object)); key in above object is name,age.

6. console.log(object.values(object)); value in above object is sai,20 .

7. console.log(object.entries(object));

8. console.log(object.name);

9. console.log(object["name"]);

10. Sai

11.Sai

12. when the key is in dynamic nature, we can use the bracket notation. 

13. undefined

14.{}

15. yes, object keys can contain spaces but when we do that key is noted as a string

16. when we are accessing the key with spaces we can use only the bracket notation

17. yes

18. yes

19.yes

20. can store relation data in a same place, can store different data types in same store, can be used in DSA and functions, react applications as well .

21. const object= {
  name: "sai",
  age:20
};

object.class = 10;

22. object.age = 16;

23.delete object.age;

24. name = "Sai";
    age = 25;

25. name = "Sai";

26. mutable

27. they can be modified even after there declaration 

28. Krishna

29. yes, we can modify the properties of the object but cannot re assign the variable itself to a new object. 


30. const makes the user (variable) can be immutable and it can not be able to immute the properties of the object beacuse object is itself is immutable. 

31. const cannot allow to do the reassign the same variable to another object

32. modifying the object means the changing the properties and reassigning them but reassigning the object means changing the variable of the object which cannot be done for const variable

33. Type Error becasue reassign to const variable 


34. becasue its trying to reassign to const variable 


35.const user = { name: "Sai" };

user.name = "Krishna";
user.age = 20;

console.log(user);

user = { name: "New" }; // Error

36. reference

37. heap

38. variable is stored as a reference to an object to the memory allocation heap memory 

39. Krishna

40. user1 and user2 point to the same object in the memory 

41. object references are the memory location which are severd as a references pointers for the variables in the memory

42. when two or more variables points to same object in the memory 

43. if one variable modifies the obejct then the other variable see the changes as well, in large application it would be problemetic as well 

44. shallow copy creates the new object with existing object properties 
45.const user = { name: "Sai" };
    const leg = {...user}
here user and leg are different variables, but leg has the same user properties

46. Sai 

47. assignment means the assigning of the variables to the object , 
shallow copy means the creating the copy of the existing object with different variable name but with same properties

48. shallow copy is important in the react beacuse react relies on the immutability and reference changes detect the state updates and trigger re-renders 
 with out creating the shallow copy react doesnot understand the state has chnaged and doesnot update the UI 

 49.Garbage collection in JS means JS engine automatically frees up the memory that is no longer in use.

 50. Objects are stored in the heap memory, if objects are no longer referneced to the variable , that variable is considered as a garbage because there is no reference to it and then garbage collector frees up that memoery because there is no reference to it 
