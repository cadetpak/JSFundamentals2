		// Sum all numbers between 2 inputs
		function sum_numbers(num1, num2){
			var sum = 0;
			for (var i = num1; i <= num2; i++){
				sum += i;
			}
			return sum;
		};
		console.log(sum_numbers(1, 10)); // output: 55

		// Loop through array to find minimum value
		function minimum(array){
			var minimum = array[0];
			for (var i = 0; i < array.length; i++){
				if (array[i] < minimum){
					minimum = array[i];
				};
			};
			return minimum;
		};
		console.log(minimum([1, 15, 0])); // output: 0

		// Loop through array to find average
		function average(array){
			var sum = 0;
			for (var i = 0; i < array.length; i++){
				sum += array[i];
			};
			return sum / array.length;
		}

		console.log(average([1,2,3,4,5])); // output: 3

	// Create Object
	var new_person = {
		name: 'Heidi',
		distance_traveled: 0,

		say_name: function(){
			console.log(new_person.name);
		},

		say_something: function(quote){
			console.log(new_person.name + " says " + quote);
		}, 

		walk: function(){
			console.log(new_person.name + " is walking!");
			new_person.distance_traveled += 3;
			return new_person;
		}, 

		run: function(){
			console.log(new_person.name + " is running!");
			new_person.distance_traveled += 10;
			return new_person;
		}, 

		crawl: function(){
			console.log(new_person.name + " is crawling!");
			new_person.distance_traveled += 1;
			return new_person;
		}
	};

	new_person.say_name();
	new_person.say_something("YELLO BEES");
	new_person.walk();
	console.log(new_person.distance_traveled); // 3
	new_person.run();
	console.log(new_person.distance_traveled); // 13
	new_person.crawl();
	console.log(new_person.distance_traveled); // 14


