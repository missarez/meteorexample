
Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  
Template.body.helpers({ //displays the tasks

  incompleteCount: function () {
  return Tasks.find({checked: {$ne: true}}).count();
},
    tasks: function () {
    if (Session.get("hideCompleted")) {
      // If hide completed is checked, filter tasks
      return Tasks.find({checked: {$ne: true}}, {sort: {createdAt: -1}});
    } else {
      // Otherwise, return all of the tasks
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  },

  hideCompleted: function () {
    return Session.get("hideCompleted");
  }
  });

Template.body.events({

  "change .hide-completed input": function (event) {
  Session.set("hideCompleted", event.target.checked);
},

  "submit .new-task": function (event) { //on submittting the form with the class name new task

    // This function is called when the new task form is submitted

    var text= event.target.texton.value;  // put the input value in the text variable
/*
    Tasks.insert({
      textis: text, //insert it in the db field that we created from the template 
      createdAt: new Date(), // current time
      owner: Meteor.userId(),
      username: Meteor.user().username
    });
*/
Meteor.call("addTask", text);



    // Clear form
   event.target.texton.value = ""; //clear field after submitting

    // Prevent default form submit
    return false; // do not handle anything while we are handling
  }
});

 

 Template.taskTemplate.events({

"click .toggle-checked": function(events) {
Meteor.call("setChecked", this._id, ! this.checked);
},



  "click .delete": function (events) {

    Meteor.call("deleteTask", this._id);
  },



 })

 Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

}

Meteor.methods({
  addTask: function (text) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

      Tasks.insert({
      textis: text, //insert it in the db field that we created from the template 
      createdAt: new Date(), // current time
      owner: Meteor.userId(),
      username: Meteor.user().username
    });

  },
  deleteTask: function (taskId) {
    Tasks.remove(taskId);
  },
  setChecked: function (taskId, setChecked) {
    Tasks.update(taskId, { $set: { checked: setChecked} });
  }
});





if (Meteor.isServer) {


}
