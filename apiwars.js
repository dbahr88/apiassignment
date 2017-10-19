$(document).ready(function(){


	$('searchbutton').on('click', function(){
		$('.starwarsresults').empty();
		var starwarsnumber = $('#search-input').val();
		var resultsDiv = $('<div>');
		resultsDiv.addClass('starwarsresults');
		$.ajax({
			method: 'GET',
			url: 'https://swapi.co/api/people/' + starwarsnumber
		}).then(function(response){
			var name = $('<p>');
			name.text(response.name);
			var height = $('<p>');
			height.text(response.height);
			var homeworld = $('<p>');
			homeworld.text(response.homeworld);
			var mass = $('<p>');
			mass.text(response.mass);
			var birth_year = $('<p>');
			birth_year.text(response.birth_year);

			resultsDiv.append("Character name: " + name);
			$('div').eq(1).append(resultsDiv)
			resultsDiv.append("Height in CM: " + name);
			$('div').eq(1).append(resultsDiv)
			resultsDiv.append("Homeworld: " + name);
			$('div').eq(1).append(resultsDiv)
			resultsDiv.append("Mass in KG: " + name);
			$('div').eq(1).append(resultsDiv)
			resultsDiv.append("When were they born in a galaxy far far away?: " + name);
			$('div').eq(1).append(resultsDiv)
		})

	});
})