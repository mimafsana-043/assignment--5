## Question 1:  What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
getElementById:
helps  to select a particular Id of HTML file

getElementsByClassName:
helps to select the class elements with same class name 

querySelector:
that returns the first element that matches a CSS selector.

querySelectorAll
that returns the static nodeList of all elements that matches the CSS selector.

## Question 2: How do you **create and insert a new element into the DOM**?
At first command for createning a div
const newDiv = document.creatElement("div");
then append the child to its parent, lets assume the parent is container
container.appenChild(newDiv);

## Question 3: What is **Event Bubbling** and how does it work?
Event Bubbling :  Event Bubbling is when an event triggered on a child element propagates up to its parent elements in the DOM tree.
lets assume

let assume,
clicking a button inside a div
1.Fisrt the button clicked event happens
2.Then the Clicked Event Bubbles Up to the Parent div

## Question 4: What is **Event Delegation** in JavaScript? Why is it useful?
It is a way in Javascript where a multiple EventListener are not used for Child Elements but EventListener are used in parent element and by the help of Event Bubbling the child elements are handled.

Reason of usefullness:
1.Less Code
2.Good Perfomance
3.works even new child element are added later

## Question 5: What is the difference between **preventDefault() and stopPropagation()** methods?

preventDefault() :stops default behavior
stopPropagation():stops Event Bubbling

