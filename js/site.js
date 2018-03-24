function getQueryParams(qs) {
    qs = qs.split("+").join(" ");
    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])]
            = decodeURIComponent(tokens[2]);
    }

    return params;
}
var $_GET = getQueryParams(document.location.search);

products = [
  {"name" : "Joint Base MDL - 87th LRS"},
  {"name" : "First Baptist Church"},
  {"name" : "First Presbyterian Church"},
  {"name" : "St. Andrew's Episcopal Church"},
  {"name" : "Sacred Heart Church Mount Holly"},
  {"name" : "Thrift Shop Children's Home"},
  {"name" : "Grace Baptist Church"},
  {"name" : "South Jersey Cancer Fund"}
]

$(document).ready(function() {
  name = products[$_GET["p"] - 1]["name"]
  $("#product-name").text(name);
});
