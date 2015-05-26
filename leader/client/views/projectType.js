 Template.proType.helpers({
	'proType': function(){
		return projectType.find();
}
})

 Template.proType.events({
	'click .protype': function(){
		var protypeId = this._id
	Session.set('slctProjType', protypeId);
	var slctProjType= Session.get('slctProjType')
	console.log(slctProjType)
	}
})

 