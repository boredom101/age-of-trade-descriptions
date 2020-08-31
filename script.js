var content = {
  "Bronze bar": "when third place has to be good enough",
  "Wooden stick": "brown and sticky",
  "Fishing hook": "Why do they bite this? It doesn't even look delicious!"
};

function load() {
  $.getJSON(document.getElementById("url").value, (data) => {
    setDescriptions(data);
  });
}

if (window.location.pathname.startsWith("/game/inventory")) {
  contents = '<label for="url">URL: </label><input type="text" id="url" name="url"><br><input type="button" value="Load" onclick="loadDesc()">';
  addCard(4, "Description Loader", contents);
}

function addCard(loc, title, contents) {
  $(".col-md-" + loc).append(`<div class="card"><div class="card-header">${title}</div><div class="card-body">${contents}</div></div>`);
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
