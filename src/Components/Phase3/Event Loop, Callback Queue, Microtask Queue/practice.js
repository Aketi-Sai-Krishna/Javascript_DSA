// 1. Event Loop contionulsy checks whether the call stack is empty or not, if it is empty then it executes all the micro tasks and if micro tasks queue is empty and then it execute the one task from the call back (macro tasks) queue.

// 2. JS is a single threaded language, it runs step by step. Event loops helps to perform the tasks step by step flow.JS cannot control the timer setup but browser does , to take that in control event loops helpful.

// 3. Single threaded language

// 4. Synchronous means execute the code line by line, it goes to nest step once the previous line of code executed

// 5. Asynchronous means execute the code accordingly like while using the steup clock and timer to stop the execution of that black of code for particular time and runs after it

// 6. Call stack defines the execution of code based up on the call or invoke of the function

// 7. After completion of Call back and micro tasks then event loops execute the call backs

// 8. Call back queue stores all the call backs of asynchronous web api of browser until they are ready to execute.

// 9. Macrostack queue

// 10. Micro stack queue stores high priority call backs such as promises, queueMicrotask and continuation after await

// 11. Micro stack has higher priority than call back

// 12. setTimerout(), setInterval(), DOM

// 13. Promise.apply(), Promise.set()

// 14. setTimeout(fn, 0) excutes after the call stacks and micro tasks

// 15. Browser

// 16. A =>Timer starsts =>  C => timer ends => B

// 17. 1 => 3 => Micro tasks 2

// 18. 1 => timer starts  => promise starts => 4 => 3 => timer ends => 2

// 19. Promise call backs are micro taks , micro taks has higher priority than call backs

// 20. Event loop must finish micro tasks and macrotasks and then call backs. No, eVENT LOOP cant move a call back into call stack while the stack is not empty

// 21. Even Microtask Queue keeps receiving new tasks, it follows the flow like, if theres is a empty call stack and then moves to Micro tasks and perform micro tasks like promises and then move on to macros tasks and then perform one call back 

// 22. FIFO means First In First Out, In CALLBACK qUEUE stores all the call backs of asynachronous web apis like that First initialted web api will be execute first.

// 23. FIFO in microstack means, it executes the first high priority call backs as asynchronously first initiated call back will be executed firstly

// 24. Yes

// 25. setTimeout means after the mentioned time then mentioned should be performed 

// 26. A => set timer =>  E => C => => D => set timer closes =>B

// 27. 1=> 2= > 3 => 4

// 28. 3 => 1 => 2

// 29. 1 => 3 => 2

// 30. 1 => 5 => 2 => 3 => 4

// 36. Start => End => Promise 2 => Timeout 1 => Promise 1 => Timeout 2

// 37. 1=> 5 => 2 => 3 => 4

// 38. A => B => C

// problems:

// 1.Start => End => B => A

// 2. 1=> 5=> 3=> 4=> 2

// 3. sync =>Microtask => timeout =>Promise

// 4. A => D => B => C

// 5. 1=> 7 => 5 => 6=>2=> 3=> 4