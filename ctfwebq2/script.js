document.getElementById('login').addEventListener('click', function () {
  var username = (document.getElementById('user').value || 'guest').trim();
  document.cookie = "user=" + encodeURIComponent(username) + "; path=/";
  document.getElementById('who').textContent = username;
});
console.info("Inspect styles, images, and attributes. Pieces may be encoded or reversed.");
