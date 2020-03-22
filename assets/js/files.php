<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
    $category = $_POST['category'];
    $root_dir    = '/home/sr7j54drpzn3/public_html/ditsmarket/click_master/images/'.$category.'/';


    class Item{
        public $thumb_url;
        public $full_url;
    
        public function __construct($thumb_url, $full_url){
            $this->thumb_url = $thumb_url;
            $this->full_url = $full_url;
        }
    }
    $thumb_files = scandir($root_dir.'thumbs/');
    $full_files = scandir($root_dir.'fulls/');
    $items = array();
    $thumbs_array = array();
    $full_array = array();

    for ($z = 0; $z < count($thumb_files); $z++) {
        if($thumb_files[$z]!='.' && $thumb_files[$z]!='..'){
            $thumbs_array[$z-2] = $full_files[$z];
        }
    }

    for ($y = 0; $y < count($full_files); $y++) {
        if($full_files[$y]!='.' && $full_files[$y]!='..'){
            $full_array[$y-2] = $full_files[$y];
        }
    }

    for ($x = 0; $x <  count($full_files)-2; $x++) {
        $myObj = new Item($thumbs_array[$x],$full_array[$x]);
        $items[$x] = $myObj;
    }

    echo json_encode($items);

    
?>