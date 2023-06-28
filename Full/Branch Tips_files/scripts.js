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