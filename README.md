1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer : in this question there 4 elements is four different things. example:-
        1.getElementById is only one element. we cannot use class or tag names with this.
        2.getElementsByClassName this element can select all elements in specific class name. it's not an array, but you can loop over it with for and of
        3.querySelector it select the first element is match any css. we can use any css selector
        4.querySelectorAll it select the all element is match any css. support complex css selector



2.How do you create and insert a new element into the DOM?  

Answer : first of all creaate the element and then add content or attributes in the end insert into the DOM



3.What is Event Bubbling and how does it work?

Answer :event bubbling means that the event starts from the target element and then bubbles up through the all element until it reaches the final root.



4.What is Event Delegation in JavaScript? Why is it useful?

Answer : event delegation is a technique where we use multiple child elements attach in a single event listener to a parent element and use event bubbling to catch events from the children.



5.What is the difference between preventDefault() and stopPropagation() methods?

Answer : preventDefault() it stop default and stopPropagation() it stop event bubbling
