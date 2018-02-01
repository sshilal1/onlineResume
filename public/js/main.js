var nameC = document.getElementById('page-title__name');
nameC.textContent = about.firstname + " " + about.lastname;

var taglineC = document.getElementById('page-title__tagline');
taglineC.textContent = about.tagline;

var footername = document.getElementById('footer-name');
footername.innerHTML = `<span class="glyphicon glyphicon-copyright-mark"></span> ${about.firstname} ${about.lastname}`;

var footerdate = document.getElementById('footer-date');
footerdate.innerHTML = new Date().getFullYear();;