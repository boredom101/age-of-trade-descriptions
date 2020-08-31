function load() {
  $.getJSON(document.getElementById("url").value, (data) => {
    setDescriptions(data);
  });
}

if (window.location.pathname.startsWith("/game/inventory")) {
  contents = '<label for="url">URL: </label><input type="text" id="url" name="url"><br><br><input type="button" value="Load" class="btn btn-primary btn-info" onclick="loadDesc()">';
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
