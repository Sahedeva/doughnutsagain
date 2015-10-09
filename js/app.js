// jQuery Document Ready
$(function() {
 doughnut_array = [];
  $.ajax({
      url: "http://api.doughnuts.ga/doughnuts",
      dataType: "jsonp",
      method: "GET",
      success: function(data, textStatus, jqXHR) {
        doughnut_array = data;
      	for (var i = 0; i < data.length; i++) {
        	$("#doughnuts").append("<li id='"+data[i]['id']+"'> "+data[i]['style']+" "+data[i]['flavor']+" flavored <button class='up' value='"+data[i]['id']+"'>Update</button>   <button class='del' value='"+data[i]['id']+"'>Delete </button></li>");
        }
        $('.up').on('click', function(){
          console.log('Update');
          var but_id = $(this).val();
          console.log(but_id);
        });
        $('.del').on('click', function(){
          console.log('Destroy');
          var but_id = $(this).val();
          console.log(but_id);
          var targeter = "#"+but_id
          console.log(but_id);
          doughnut_array[(but_id-1)]=""
          console.log(doughnut_array);
          $(targeter).html("");
        });
      }
    });

  
  $('#save-button').on('click', function(evt){
    var style = $('#doughnut-style').val();
    var flavor = $('#doughnut-flavor').val();
    console.log('style: ', style);
    console.log('flavor: ', flavor);
    console.log(doughnut_array);
    var length_array = doughnut_array.length
    doughnut_array.push({style: style, id: length_array+1, flavor: flavor}),
    console.log(doughnut_array);
    $("#doughnuts").append("<li id='"+doughnut_array[length_array]['id']+"'>"+ doughnut_array[length_array]['style'] + " " +doughnut_array[length_array]['flavor']+" flavored <button class='up' value='"+doughnut_array[length_array]['id']+"'>Update</button>   <button class='del' id='"+doughnut_array[length_array]['id']+"'>Delete </button></li>");
    $('.up').on('click', function(){
      console.log('Update');
      var but_id = $(this).val();
      console.log(but_id);
    });
    $('.del').on('click', function(){
      console.log('Destroy');
      var but_id = $(this).val();
      var targeter = "#"+but_id
      console.log(but_id);
      doughnut_array[(but_id-1)]=""
      console.log(doughnut_array);
      $(targeter).html("");
    });
    return false;
    });

 
});