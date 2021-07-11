	let thumbnails = document.getElementsByClassName('thumbnail')

	let activeImages = document.getElementsByClassName('active')

	for (var i=0; i < thumbnails.length; i++){

		thumbnails[i].addEventListener('click', function(){
			console.log(activeImages)
			
			if (activeImages.length > 0){
				activeImages[0].classList.remove('active')
			}
			

			this.classList.add('active')
			document.getElementById('featured').src = this.src
		})
	}


	let buttonRight = document.getElementById('slideRight');
	let buttonLeft = document.getElementById('slideLeft');

	buttonLeft.addEventListener('click', function(){
		document.getElementById('slider').scrollLeft -= 180
	})

	buttonRight.addEventListener('click', function(){
		document.getElementById('slider').scrollLeft += 180
	})

	// file selection using text
	$("#files").change(function() {
		filename = this.files[0].name
		console.log(filename);
	});

	// File selection using input btn
	$("#get_file").click(function() {
		$("#my_file").click()
	});


	document.getElementById('get_file').onclick = function() {
		document.getElementById('my_file').click();
	};

	function openAttachment() {
		document.getElementById('attachment').click();
	  }
	  
	  function fileSelected(input){
		document.getElementById('btnAttachment').value = "File: " + input.files[0].name
	  }

	// document.getElementById('get_file').onclick = function() {
	// 	document.getElementById('my_file').click();
	// };
