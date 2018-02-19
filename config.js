(function() {

	angular
		.module("app")
		.config(function($routeProvider) {
			$routeProvider
			.when("/welcome", {
				template: "<welcome></welcome>"
			})
			.when("/taskForm", {
				template: "<task-form></task-form>"
			})
		});
})();