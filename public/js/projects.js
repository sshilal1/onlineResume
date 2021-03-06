var pcontainer = document.getElementById('projects-container');
var alternator = 'row even';

for (var project of projects) {

	alternator = alternator == 'row even' ? 'row odd' : 'row even';
	var fragment = document.createDocumentFragment();
	var row = document.createElement('div');
	row.className=alternator;

	// Title of app
	var col12 = document.createElement('div');
	col12.className='col-sm-12';
	var h2 = document.createElement('h2');
	var title = document.createElement('a');
	title.href = project.link;
	title.textContent = project.name;
	h2.appendChild(title);
	col12.appendChild(h2);

	// Row of Image
	var col4a = document.createElement('div');
	col4a.className='col-sm-4';
	col4a.style.cssText='text-align:-webkit-center;';
	var imgbox = document.createElement('div');
	imgbox.className='imgbox';
	var projimg = document.createElement('img');
	projimg.className='project-img';
	projimg.src=project.img;
	imgbox.appendChild(projimg);
	col4a.appendChild(imgbox);

	// Description
	var col4b = document.createElement('div');
	col4b.className='col-sm-4';
	var title = document.createElement('h3');
	title.textContent = project.description.title;
	col4b.appendChild(title);

	for (var paragraph of project.description.paragraphs) {
		var para = document.createElement('p');
		para.textContent = paragraph;
		col4b.appendChild(para);
	}

	// Bars
	var col4c = document.createElement('div');
	col4c.className='col-sm-4';
	var barsbox = document.createElement('div');
	barsbox.id=project.barsid;
	barsbox.className='column-sports';
	col4c.appendChild(barsbox);

	// Append it all
	row.appendChild(col12);
	row.appendChild(col4a);
	row.appendChild(col4b);
	row.appendChild(col4c);
	fragment.appendChild(row);

	pcontainer.appendChild(fragment);
}