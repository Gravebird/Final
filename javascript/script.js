
function hide_form_elements() {
    var label = document.getElementsByTagName("label")[0];
    var input_area = document.getElementsByTagName("input")[0];
    var button = document.getElementsByTagName("button")[0];

    label.style.display = "none";
    input_area.style.display = "none";
    button.style.display = "none";
}

function create_image_array() {
    var img1 = document.createElement("img");
    var img2 = document.createElement("img");
    var img3 = document.createElement("img");
    var img4 = document.createElement("img");
    var img5 = document.createElement("img");

    img1.src = "images/pic1.jpg";
    img2.src = "images/pic2.jpg";
    img3.src = "images/pic3.jpg";
    img4.src = "images/pic4.jpg";
    img5.src = "images/pic5.jpg";

    return [img1, img2, img3, img4, img5];
}

function add_images_to_thumb_bar() {
    images = create_image_array();
    var thumb_bar = document.getElementById("thumb-bar");

    for (var i = 0; i < images.length; i++) {
        thumb_bar.append(images[i]);
    }
}

function page_load() {
    hide_form_elements();
    add_images_to_thumb_bar();
}