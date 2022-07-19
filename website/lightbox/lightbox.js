let req = new XMLHttpRequest;

document.querySelector("#red").addEventListener("click", () => {
	req.open("PUT", "http://colbyreinhart.com:5000/lightbox");
	req.send("255 0 0");
});

document.querySelector("#green").addEventListener("click", () => {
	req.open("PUT", "http://colbyreinhart.com:5000/lightbox");
	req.send("0 255 0");
});

document.querySelector("#blue").addEventListener("click", () => {
	req.open("PUT", "http://colbyreinhart.com:5000/lightbox");
	req.send("0 0 255");
});

document.querySelector("#magenta").addEventListener("click", () => {
	req.open("PUT", "http://colbyreinhart.com:5000/lightbox");
	req.send("255 0 255");
});

document.querySelector("#cyan").addEventListener("click", () => {
	req.open("PUT", "http://colbyreinhart.com:5000/lightbox");
	req.send("0 255 255");
});

document.querySelector("#yellow").addEventListener("click", () => {
	req.open("PUT", "http://colbyreinhart.com:5000/lightbox");
	req.send("255 255 0");
});

document.querySelector("#white").addEventListener("click", () => {
	req.open("PUT", "http://colbyreinhart.com:5000/lightbox");
	req.send("255 255 255");
});