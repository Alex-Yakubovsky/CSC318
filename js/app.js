App = Ember.Application.create();

App.Router.map(function(){
  this.resource('classroom', function(){
    this.resource('courses');
    this.resource('lectures-courses');
    this.resource('course', {path :'course/:course_id'});
    this.resource('feedback');
    this.resource('grades');
  });

  this.resource('lecture', function(){
    this.resource('lecture-content');
  });
  this.resource('homework');
  this.resource('library');
});



App.CoursesRoute = Ember.Route.extend({
  model: function(){
    return courses;
  }
});

App.CoursesController = Ember.ArrayController.extend({
  queryParams: ['submission'],
  submission: null,
});

App.HomeworkController = Ember.Controller.extend({
  textbook: ",Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae mauris eros. Donec accumsan justo ipsum, ut ultrices ipsum gravida sit amet. Nulla facilisi. Nulla facilisi. Ut vehicula quis sapien sit amet mattis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Integer condimentum, mi eu viverra vestibulum, ipsum sem feugiat dui, ac tristique erat nulla id felis. Etiam mauris ex, rutrum at sagittis non, venenatis vel turpis. Vivamus augue diam, hendrerit a lacus eu, fringilla pretium neque. Sed sed arcu porttitor, aliquam justo id, convallis ligula. Phasellus sit amet ante efficitur, pharetra justo ut, tincidunt neque. Fusce vulputate, nibh vel elementum malesuada, augue elit posuere nulla, id condimentum neque orci vel massa. Pellentesque consectetur orci ex, a malesuada risus sollicitudin ut. Curabitur congue tortor diam, eget lobortis nisl feugiat vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed dapibus eget dolor id congue. Phasellus dignissim erat vitae lacus dignissim hendrerit.,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae mauris eros. Donec accumsan justo ipsum, ut ultrices ipsum gravida sit amet. Nulla facilisi. Nulla facilisi. Ut vehicula quis sapien sit amet mattis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Integer condimentum, mi eu viverra vestibulum, ipsum sem feugiat dui, ac tristique erat nulla id felis. Etiam mauris ex, rutrum at sagittis non, venenatis vel turpis. Vivamus augue diam, hendrerit a lacus eu, fringilla pretium neque. Sed sed arcu porttitor, aliquam justo id, convallis ligula. Phasellus sit amet ante efficitur, pharetra justo ut, tincidunt neque. Fusce vulputate, nibh vel elementum malesuada, augue elit posuere nulla, id condimentum neque orci vel massa. Pellentesque consectetur orci ex, a malesuada risus sollicitudin ut. Curabitur congue tortor diam, eget lobortis nisl feugiat vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed dapibus eget dolor id congue. Phasellus dignissim erat vitae lacus dignissim hendrerit.,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae mauris eros. Donec accumsan justo ipsum, ut ultrices ipsum gravida sit amet. Nulla ",
});


var courses = [{
  id: '1',
  course_name: "Elementary Algebra",
  completed_homework: "5",
  total_homework: "9",
  assignments: [{
    name: "assignment 1",
    complete: true,
  },
  {
    name: "...",
    complete: false,
  }],

 },
 {
   id: '2',
   course_name: "Grade 12 English",
   completed_homework: "7",
   total_homework: "10",
   assignments: [{
    name: "assignment 1",
    complete: true,
  },
  {
    name: "...",
    complete: false,
  }],
 }]


