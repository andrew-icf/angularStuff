## Questions


## Intro and Set up

* Why learn Angular JS over other frameworks like Ember, Backbone, Knockout, etc?
* Answer: Angular is very similar but it's simple and takes less lines of code, and it doesn't use setters and getters for data binding.

* People have some very strong opinions about Angular. What are 3 common complaints people have about Angular?
* Answer:  
1. Client based rendering isn’t the best design model for websites that primarily present static content.
2. There is a concern with how AngularJS binds $scope.
3. It’s all changing in AngularJS 2.0

* Is Angular an MVC framework?
* Answer: The core idea behind MVC is that you have clear separation in your code between managing its data (model), the application logic (controller), and presenting the data to the user (view). The view gets data from the model to display to the user. When a user interacts with the application by clicking or typing, the controller responds by changing data in the model. Finally, the model notifies the view that a change has occurred so that it can update what it displays. In Angular applications, the view is the Document Object Model (DOM), the controllers are JavaScript classes, and the model data is stored in object properties.

* Turn to the Angular docs. Find `ng-app`. What is it and what does it do? What does `ng` stand for?
* Answer: The ngApp found in the document will be used to define the root element to auto-bootstrap as an application. "ng" stands for angular.

## Data-Binding
* What does `ng-model` do?
* Answer: Two way binds the value of your variable so that you can place it anywhere within a given $scope.

* [What is "dirty checking"?](http://stackoverflow.com/questions/24698620/dirty-checking-on-angular)
* Answer: It checks whether a value has changed that hasn’t yet been synchronized across the app.

* Find a way to set the initial value of "name" as "BoJack" (without writing a controller).
* Answer: You could use 'ng-init'

* What are those `{{ }}` expressions? Are they Handlebars?
* Answer: No they are not Handlebars. They are bindings usually used for JavaScript-like snippets.

* Explain what two-way data binding is.
* Answer: When properties in the model get updated, so does the UI. When UI elements get updated, the changes get propagated back to the model.

* BONUS: Research the `$digest` loop
* Answer: The Angular context refers specifically to code that runs inside the Angular event loop, referred to as the $digest loop.
Two components:
  The $watch list: watchExpression and objectEquality
  The $evalAsync list

## Expressions and filters

* What are Angular expressions? How do they compare to tags from templating engines you've used before?
Answer: JavaScript-like code snippets that are mainly placed in interpolation bindings, but also used directly in directive attributes. They are pretty similar but use their own "ng" property.

* What happens when you write invalid code in an expression? What type of error do you get?
Answer: You get a Syntax Error
* What are Angular filters? Describe what a filter does and then name four built-in filters, including one that we haven't used yet.
Anser: Filters format the value of an expression for display to the user. Filters are only executed when their inputs have changed and they filter to what you put in, including you're own. JSON, date, limitTo, filter
* What's the syntax for filters?
Answer: {{ expression | filter }} or {{ expression | filter1 | filter2 | ... }}
* Can you use more than one filter?
Answer: YES, {{ expression | filter1 | filter2 | ... }}
* We'll soon see how to create custom filters. What is a use case for a custom filter?
Answer: We can customize most things to what we want like converting numbers to their ordinal values.

## Built-in Directives
* What is the purpose of `ng-init`?
Answer: You can evaluate an expression in the current scope
* Why use `ng-src` and `ng-href`?
Answer: For both of them you can use {{}} inside the source
* What are directives?
Answer: Directives are extended HTML attributes with the 'ng-' prefix
* Does `ng-class` require an object to be passed in?
Answer: It is not required but it can take an Object.
* What order does an ng-repeat display items in?
Answer: JavaScript specification does not define the order of keys returned for an object, so Angular relies on the order returned by the browser, which generally follow the strategy of providing keys in the order in which they were defined.
* How does `ng-repeat` handle duplicate data?
Answer: It uses track by $index
