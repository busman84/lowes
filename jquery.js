$(document).ready(function () {
	var storeNum = 689;
	$("#Save").click(function () {
		$.ajax({
			url: 'http://api.lowes.com/store/location?query='+$('#zip').val()+'&maxResults=5&api_key=pmpn9ygd676cpzsngnwhd68p',
			headers: {
			'Authorization': 'Basic QWRvYmU6ZW9pdWV3ZjA5ZmV3bw=='
			},
			type: 'GET',
			dataType: 'json',
			data: '',
			success: function (data, textStatus, xhr) {
				console.log(data);
				$('#results').html('');
				for (var i = 0; i < 5; i++) {
					$("#results").append("<li>"+ data['storeLocation'][i]['storeName'] + " " + data['storeLocation'][i]['address1'] + ", " + data['storeLocation'][i]['city'] + ', ' + data['storeLocation'][i]['state'] + " " + data['storeLocation'][i]['zip'] + " " + data['storeLocation'][i]['phone'] + "<input type='button' class='my-store close-button' data-dismiss='modal' id=" + data['storeLocation'][i]['storeNumber'] + " value='My Store'" + "</li>");
				};
				$(".my-store").click(function() {
					var storeNum = $(this).attr('id');
					console.log(storeNum);
					$("#product-search").click(function () {
						$.ajax({
							url: "http://api.lowes.com/product/keyword?keyword=" + $('#product').val() + "&storeNumber=" + storeNum + "&maxResults=10&priceFlag=status&api_key=pmpn9ygd676cpzsngnwhd68p",
							headers: {
							'Authorization': 'Basic QWRvYmU6ZW9pdWV3ZjA5ZmV3bw=='
							},
							type: 'GET',
							dataType: 'json',
							data: '',
							success: function (data, textStatus, xhr) {
								console.log(data);
								$('#product-results').html('');
								for (var i = 0; i < 10; i++) {
									$("#product-results").append("<li>"+ data['productList'][i]['brand'] + " " + data['productList'][i]['description'] + ", " + "$" + data['productList'][i]['networkPrice'] +  "<img src='" + data['productList'][i]['imageUrls']['sm'] + "'>" + "</li>");
								}
							},
							error: function (xhr, textStatus, errorThrown) {
							console.log(errorThrown);
							}
						});
					$('#product').val('');
					});

				})

			},
			error: function (xhr, textStatus, errorThrown) {
			console.log(errorThrown);
			}
		});
		$('.close-button').click(function (){
			$('#results').html('');
			$('#zip').val('');
		});
	});
});
