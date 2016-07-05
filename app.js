

	var todoapp = angular.module('todoapp', []);
	todoapp.controller('MainCtrl', MainCtrl);
	function MainCtrl(){
		this.name="Hemraj";
		this.users=['Hemraj', 'Shekhar'];
		this.handleclick=function(){
			// alert("Welcome")
			var add=document.getElementById('add').value;

			if (add.length) {
				this.users.push(add);

				
				};

			document.getElementById('add').value='';

			
		}
		this.RemoveItem=function(index){
				this.users.splice(index, 1);
			}

		
	}

	