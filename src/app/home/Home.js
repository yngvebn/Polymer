(function(){

function Home(){
	this.action = function(dialog){
		    var dialog = document.querySelector('#'+dialog);
      dialog.toggle();
	}
}

angular.module('main').controller('Home',Home);
}());
