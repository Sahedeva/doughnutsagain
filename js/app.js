// jQuery Document Ready
$(function() {
  $.ajax({
      url: "http://api.doughnuts.ga/doughnuts",
      dataType: "jsonp",
      method: "GET",
      success: function(data, textStatus, jqXHR) {
      	console.log(data);
      	console.log(data[0]['flavor']);
      	for (var i = 0; i < data.length; i++) {
      	$("#doughnuts").append("<li id='"+data[i]['id']+"'> "+data[i]['style']+" "+data[i]['flavor']+"</li>");
      	}
      }
    });

});