let gallery_images = document.getElementsByClassName("gallery-images");
let current_id = 0;

for(let i=0; i < gallery_images.length; i++) {
  gallery_images.item(i).addEventListener("click", expand_image);
}

function expand_image() {
  let image_id = this.getAttribute("id");
  current_id = parseInt(image_id.match(/(\d+)/)[0]); // https://www.geeksforgeeks.org/extract-a-number-from-a-string-using-javascript/
  expanded_image.src=this.src;
  expanded_image_container.className = "expanded-image-container";
  document.getElementsByTagName("html")[0].className = "shaded-background";
  console.log(current_id);
}