 Template.thelists.helpers({
	'listitem': function(){
		return myChecklists.find();
}


})

 Template.thelists.events({
 	"click li": function(e){
 		e.preventDefault();

 		 var x = this._id;
		Session.set("statevalue", x);
		var tre = Session.get("statevalue")
		console.log(tre)
		 
 	} 

 })