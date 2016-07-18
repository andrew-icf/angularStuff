## Questions


## UNIT 1

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
