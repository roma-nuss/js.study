console.log(document.querySelector("#current").parentNode.parentNode);

console.log(document.querySelector('[data-current="3"]').nextSibling);

console.log(document.querySelector("#current").parentElement);

console.log();

for (let node of document.body.childNodes) {
  if (node.nodeName == "#text") {
    continue;
  }
}
