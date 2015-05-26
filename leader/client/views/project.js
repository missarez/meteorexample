 Template.project.helpers({
	'vasso': function(){
		return myProject.find();
}
})



 Template.project.events({
  "submit form.newProject": function (event) {
    // This function is called when the new task form is submitted

    var text = event.target.text.value;
  	var selectedTeamMember = Session.get('selectedMember')
    var selectedProjType = Session.get('slctProjType')
    myProject.insert({
      text: text,
      createdAt: new Date(), // current time
      TeamMember:  selectedTeamMember,
      ProjectType: selectedProjType

    });

    // Clear form
    event.target.text.value = "";

    // Prevent default form submit
    return false;
  }
});