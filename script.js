function openCity(evt, Name) {
  var i, post, button;
  post = document.getElementsByClassName("post");
  for (i = 0; i < post.length; i++) {
    post[i].style.display = "none";
  }
  button = document.getElementsByClassName("button");
  for (i = 0; i < button.length; i++) {
    button[i].className = button[i].className.replace(" active", "");
  }
  document.getElementById(Name).style.display = "block";
  evt.currentTarget.className += " active";
}
