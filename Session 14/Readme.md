Debouncing-
1.if you are typing very fast then difference between two key stroke is very low.While typing very slow the differnce would be high.
2.Just think from the user perpective way-->will the user need to get a suggestion if it is typing fast???..just think of it

In React, debouncing is a technique used to control the frequency at which certain functions are called, particularly in response to user input events such as keystrokes or mouse movements. Debouncing ensures that a function is executed only after a specified period of inactivity, preventing it from being called too frequently and potentially overwhelming system resources

Debouncing with 299ms

- if difference between 2 key strokes is <200ms -DECLINE API calls
- if difference between 2 key strokes is >200ms - make a API calll
- Flipkart debouncing is high while youtube debouncing is very high 
