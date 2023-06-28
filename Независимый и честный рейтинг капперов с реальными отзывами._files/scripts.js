const tg = function (user) {
	const aUrl = 'https://' + window.location.hostname + '/wp-admin/admin-ajax.php';
	const data = new FormData();

	const isset = function(x) {
		return typeof x !== 'undefined';
	};

	data.append('action', 'tg');
	data.append('user_id', user.id);
	data.append('user_first_name', user.first_name);
	data.append('user_last_name', user.last_name);
	data.append('user_username', user.username);
	data.append('user_photo_url', user.photo_url);
	data.append('user_hash', user.hash);
	data.append('user_auth_date', user.auth_date);

	$.ajax({
		url: aUrl,
		data: data,
		type: 'POST',
		cache: false,
		dataType: 'JSON',
		contentType: false,
		processData: false,
		success: function(response) {
			if (isset(response.status)) {
				alert(response.status);
			}

			if (isset(response.redirect)) {
				window.location.replace(response.redirect);
			}
		},
		error: function(response) {
			if (isset(response.status)) {
				alert(response.status);
			}
		},
	});
}

"use strict";



	const blocks = document.querySelectorAll('.ratings__elem');

	const blocksArray = Array.from(blocks);

	blocksArray.sort((a, b) => {

	
	
		const valueA = parseFloat(a.querySelector('.ratings__diagram-text span').textContent);
		const valueB = parseFloat(b.querySelector('.ratings__diagram-text span').textContent);

	//  a.querySelector('.ratings__diagram-left').style.transform = 'rotate('+  valueA * 36 +'deg)';

	  return valueB - valueA;
	});
	
	let counterBlocks = 4;

const parent = document.getElementById('main_content_container');

blocksArray.forEach(block =>{
	parent.removeChild(block)
})

blocksArray.forEach((block, index) => {




	if(block.querySelector('.inline_js') != null || block.querySelector('.inline_js') != undefined ){
			let spanElem = block.querySelector('.inline_js');
			spanElem.innerHTML = `№  ${counterBlocks}`;
			parent.appendChild(block);
			counterBlocks++;
	}
	else{
		if(index == 0){
		let imgElem =  block.querySelector('.medal');
		imgElem.src = "./Независимый и честный рейтинг капперов с реальными отзывами._files/medal 1.png";
		parent.appendChild(block);
	}

	if(index == 1){
		let imgElem = block.querySelector('.medal');
		imgElem.src = "./Независимый и честный рейтинг капперов с реальными отзывами._files/medal 2.png";
		parent.appendChild(block);
	}

	if(index == 2){
		let imgElem = block.querySelector('.medal');
		imgElem.src = "Независимый и честный рейтинг капперов с реальными отзывами._files/medal 3.png";
		parent.appendChild(block);
	}
	}
});

