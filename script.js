const AS_URL_BASE =
  "https://script.google.com/macros/s/AKfycbzyd5-Cp-zpG1VUdUZfYL1AzOA1cHprhOf__507xqvs-Z6i869xi-v8PvGf6bFUoAtdlA/exec";

var url = document.location.href;
var k = url.substr(url.lastIndexOf("k=") + 2);

if (k) {
  fetch(AS_URL_BASE + "?k=" + k)
    .then((r) => r.text())
    .then((r) => {
      console.log(r);
      //document.write(r);
      if (r) {
        document.location.replace(r);
      }
    })
    .catch((err) => console.log(err));
}
