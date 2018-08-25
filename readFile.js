function readFile(pFile)
{
	var xhr = new XMLHttpRequest();

	xhr.open("GET", pFile);
	xhr.addEventListener("readystatechange", function () {
		if ((xhr.readyState === XMLHttpRequest.DONE) && (xhr.status === 200))
			console.log(xhr.responseText);
	});

	xhr.overrideMimeType("text/plain");
	xhr.send(null);
}
