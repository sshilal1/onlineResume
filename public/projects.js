var pcontainer = document.getElementById('projects-container');
var fragment = document.createDocumentFragment();

var roweven = document.createElement('div');
roweven.className='row even';

var col12 = document.createElement('div');
col12.className='col-sm-12';

var h2 = document.createElement('h2');
var title = document.createElement('a');
title.href = "http://www.fantasydraftkit.org";
title.textContent = 'Fantasy Football Draft Kit';

h2.appendChild(title);
col12.appendChild(h2);
roweven.appendChild(col12);
fragment.appendChild(roweven);

//pcontainer.appendChild(fragment);