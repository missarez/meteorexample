Template.teammember.helpers({
	'member': function(){
		return TeamMember.find();
},

'selectedClass': function(){
 return "selected";
}
});

Template.teammember.events({
	'click .teammember': function(){
		var memberId = this._id
	Session.set('selectedMember', memberId);
	var selectedMember= Session.get('selectedMember')
	console.log(selectedMember)
	},

'change #nameselect': function(){
	 var memberId = this._id;
	console.log(memberId)
}
})
/******* EVENTS: CLICK, DBLCLICK, CHANGE, MOUSEOVER, FOCUS, BLUR
'click li': function(){
		console.log(this.name)

	},

	'change select': function(){

		console.log('staff name')
	},


	'focus select': function(){

		console.log('I focused')
	},

	'dblclick li': function(){
		console.log('i doubled clicked')

	},

	'mouseover li': function(){
		console.log('over')

	},


	'blur select': function(){
		console.log('left the field')

	},
*/