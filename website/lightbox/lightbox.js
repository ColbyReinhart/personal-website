let req = new XMLHttpRequest;

document.querySelector("#red").addEventListener("click", () => {
	req.open("PUT", "http://colbyreinhart.com:5000/lightbox");
	req.send("DATA 255 0 0");
});

document.querySelector("#green").addEventListener("click", () => {
	req.open("PUT", "http://colbyreinhart.com:5000/lightbox");
	req.send("DATA 0 255 0");
});

document.querySelector("#red").addEventListener("click", () => {
	req.open("PUT", "http://colbyreinhart.com:5000/lightbox");
	req.send("DATA 0 0 255");
});