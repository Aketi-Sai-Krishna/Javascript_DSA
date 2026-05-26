1.Data types means the type of data which are store in the variable. In JavaScript there are              	7 data types. String, Number, Boolean, Null, Undefined, Symbol, bigint, Object.

2.Data types are important to know that which type of data is stored in the variable and how can we use it in further operations and calculations.

3.Primitive data types are :  String, Number, Boolean, Null, Undefined, Symbol

4. NON Primitive data types are : array, object, functions

5. let number = 25;

6. let name = 'sai';

7. let isLogged = true;

8. let a;
   console.log(a);

9. let b = null;
   console.log(b);

10. let name = 'sai';
    typeof(name)
    let number = 25;
    typeof(number)
    let isLogged = true;
    typeof(isLogged)
    let a;
    typeof(a)
    let b = null;
    typeof(b)
    let c = 0;
    typeof(c)

11.Number Data type is a data type where variable is assigned to integer numbers to store the values
    
12. String Data type is a data type where variable is assigned to string basically they are  inserted between the ''.

13. Boolean Data type is a data type where variable is assigned either true or false.

14. undefined mean where variables are declared but not assigned the value.

15. Null means where variable value or assigned to null.

16. undefined : where variables are declared but not assigned the value.
    let a;
   console.log(a);
    
    null :  where variable assigned to null
    let b = null;
   console.log(b);

17. BigInt : BigInt is the primitive data type, where variable assigned to the big integer,     for example 
    const pi = 3.1456984516548561654165435;

18. Symbol : Symbol is the primitive data type, it used to create the unique identifiers that cannot clash with other property keys. even if they have the same name. for example let sym1 = Symbol("id");

19.primitive values are immutable. They cannot be replaced, they always create the new variale

20. primitive values stored stack memory

21. object data type are non primitive data types, where data stored in objects, for example let details = {name: "sai", age= 25}

22. Array data type are non primitive data types, where data stored in arrays, for example let details = ['name', 'age']

23. Funtions data type are non primitive data types, where data stored in functions, for example function num(){
   let a=1;
   let b=2;
   let c= a+b;
}

24. Array of Objects : let studentDetails = [{name: "sai"}, {class: 10}, {age: 15}]

25. functions objects: where variables can perform loop type of function and ae helpful to do iterations


26. yes, objects are mutable, they can be replaced with out effecting the existing values.

27. objects are stored in reference storage

28. reference storage: is a storage, where arrays, function, objects are stored.

29. primitive types: string, Boolean, number, bigInt, null, undefined variables. They are immutable.
    reference types: objects, functions, arrays. They are mutable

30. mutable: their values can be replaced and we usaually we see in objects, functions, arrays.
   immutable : their values or strings cannot be replaced and they form new values or string when they are replaced with new value. Strings are best example.

31. typeof explain what type of data was stored in the variable.

32. string

33. number

34. Boolean

35. undefined

36. object

37. Why does typeof null return "object"? Objects are reference storage and basically it is a bug in the previous version of JS, it was removed by the ES6 update in JS

38. object, in js arrays are technically are objects

39. object, it is literal object with null key values pairs

40. function

41. pass by value: primitive values are copied

42. pass by reference: objects share the reference

43. 10

44. Krishna, due to user1 and user2 are objects and they share the references

45. shallow copy: only copies the first level, const copy = {...users}

46. Deep copy: it creates, full independent copy

47. Objects are reference data types, objects properties can be updated or changed after it was created

48. Arrays are reference data types, arrays elements can be updated or changed after it was created


49.Objects are reference types.

When you assign an object to a variable, the variable stores a reference (pointer) to the object in memory, not the actual value.

50. Difference between:
copying primitives
copying objects

51. stack memory : primitive data types are stored in stack memory. store values directly. Execution context. Immutable.

52. Heap memory : Non primitive data types are stored in Heap memory. Objects, arrays, functions, they are mutable.

53. primitive values stored internally, because it run on execution context concept. primitive values stored in stack memory

54.objects stored in heap memory

55. A variable can not be able to store the whole object right!. So it uses the reference pointers. one or more variables store the same objects because objects are mutable. 

56. Garbage collection is the process which runs in the background which clears the meomory by clearing the unused objects, variable in the engine. If no active part of the code does not reach the object then it become the garbage

57. Global objects are declared globally and they can be used in multiple parts of the code and they can be accessed and modified anywhere, then it becomes impossible to debug it and it also consumes large memory.

58. Memory leaks means memory which is no longer needed is not released causing the application to consume the more memory over time

59. Immutable Programming is type of programming where data structures are not able to change once they were created and they can be new versions with modifications but not re written.

60. React relies on immutability for better performance, Easier debugging and testing and efficient rendering
