let dataSet = '';
let category = '';
function myFunction() {
  category = event.srcElement.id;
  $.ajax({
  type: 'POST',
  url: 'https://daviditsolution.in/ditsmarket/click_master/assets/js/files.php',
  data: {'category': category},
  success: function(data) {
    dataSet = data;
    localStorage.setItem("data", data);
    localStorage.setItem("category", category);
    location.href = "photo_app.html";
    // setThumData();
    }
  });
  
}

// function setThumData(){
//   var str = '';
//   var p = JSON.parse(dataSet);
//   for (var i = 0; i < p.length; i++) {
//     str +='<article><a class="thumbnail" href="https://daviditsolution.in/ditsmarket/click_master/images/'+category+'/fulls/'+p[i].full_url+'" ><img src="https://daviditsolution.in/ditsmarket/click_master/images/'+category+'/thumbs/'+p[i].thumb_url+'" alt="" /></a><h2></h2><p></p></article>';
//   }
//   // document.getElementById("thumbnails").innerHTML = str;

//   console.log(str);

// }