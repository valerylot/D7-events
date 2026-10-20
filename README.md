# Event Notes

## Why the script tag is at the bottom
- The browser reads the file top to bottom and builds the elements as it goes
- A script in the <head> runs before any of the body exists

## Events and Listeners
- An event is something that happens: a click, a keypress, a resize
- element.addEventListener("click", someFunction); (an example of how to call it)

## The Parentheses Mistake
- addEventListener("click", openTruck) <- this is passing the function 
- addEventListener("click", openTruck()) <- this is passing the result of running the function

## Anonymous Functions
- A function with no name, written where it gets handed over 
- addEventListener("click", function( ) { ... });

## Listeners on Elements I Made
- An element created with createElement can have a listener
- Add the listener before appending the element 