var contents = {
  "Bronze bar": "when third place has to be good enough",
  "Wooden stick": "brown and sticky",
  "Fishing hook": "Why do they bite this? It doesn't even look delicious!"
};

if (window.location.pathname.startsWith("/game/inventory")) {
  setDescription(contents);
}

function setDescriptions(descriptions) {
  var children = $("tbody")[0].children;
  for (var i = 0; i < children.length; i++) {
    var cell = children[i].children[0];
    var contents = cell.childNodes[0].textContent;
    var name = contents.trim();
    contents = contents;
    if (descriptions.hasOwnProperty(name)) {
      contents += "<br><small>" + descriptions[name] + "</small>";
    }
    cell.innerHTML = contents;
  }
}
