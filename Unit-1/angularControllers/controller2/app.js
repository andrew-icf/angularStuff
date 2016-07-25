var app = angular.module('redditClone',['ngAnimate']);

app.controller('firstController', function($scope) {
    $scope.posts = [
      {
      img:  "https://s-media-cache-ak0.pinimg.com/236x/be/56/ba/be56baeefdff9795c9da53cccaf17e55.jpg",
      title: "Blue Balls",
      author: "Ben Dover",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      comments:[
        {
        author: "Ben",
        comment: "I love blue balls"
        }
      ],
      counter: 1,
      likes: 0
    },
    {
    img:  "http://thoughtfulspot.typepad.com/.a/6a0128760776fb970c0154362f8784970c-600wi",
    title: "Red Balls",
    author: "Amanda Huginkiss",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    comments: [
      {
      author: "Amanda",
      comment: "Oh I really like blue balls but I had this red one laying around and thought that I should add to this amaze-balls post so I did, so there!!!!!!!!!!!!!!!!!"
      }
    ],
    counter: 1,
    likes: 1
  }];
  $scope.date = new Date();
  $scope.showForm = false;
  $scope.addIt = function(){
    $scope.showForm = !$scope.showForm;
  }
  $scope.formz = {};
  $scope.addBall = function(){
    $scope.posts.push({
      title: $scope.formz.title,
      img: $scope.formz.img,
      author: $scope.formz.author,
      description: $scope.formz.description,
      likes: 0
    });
    $scope.formz.title = "";
    $scope.formz.img = "";
    $scope.formz.author = "";
    $scope.formz.description = "";
    $scope.showForm = false;
  }
  $scope.showCommentForm = false;
  $scope.addComment = function(){
    this.post.showCommentForm = !this.post.showCommentForm;
  }
  $scope.seeComments = false;
  $scope.seeingComments = function(){
    this.post.seeComments = !this.post.seeComments; // toggle this bitch
  }
  $scope.commentInput = {};
  $scope.addingComment = function(){
    this.post.comments.push(this.post.commentInput);
    this.post.showCommentForm = false;
    this.post.counter++;
    $scope.clear(this.post);
  }
  $scope.clear = function(post){
    post.commentInput = {};
  }
  $scope.addLike = function(){
    this.post.likes++;
  }
  $scope.subLike = function() {
    this.post.likes--;
  }

});
