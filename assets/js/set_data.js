function setThumData(){
    var dataSet = localStorage.getItem("data");
    var category = localStorage.getItem("category");
    var str = '';
    var p = JSON.parse(dataSet);
    for (var i = 0; i < p.length; i++) {
      str +='<article><a class="thumbnail" href="https://daviditsolution.in/ditsmarket/click_master/images/'+category+'/fulls/'+p[i].full_url+'" ><img src="https://daviditsolution.in/ditsmarket/click_master/images/'+category+'/thumbs/'+p[i].thumb_url+'" alt="" /></a><h2></h2><p></p></article>';
    }
     document.getElementById("thumbnails").innerHTML = str;  
  }