const $html = document.querySelector('html');
const $btn = document.querySelector('.btn-mode');
const $text = document.getElementById("default");
const $icon = document.getElementById("icon");
$btn.addEventListener('click',event => {
  $html.classList.toggle('dark-mode');
  $icon.classList.toggle("fa-sun");
  if ($text.innerHTML == "Dark Mode") {
        $text.textContent = "Light Mode";
  } else {
        $text.textContent = "Dark Mode";
  }
});