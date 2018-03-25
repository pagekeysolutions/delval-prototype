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
];

$(document).ready(function() {
  page = document.location.pathname.match(/[^\/]+$/)[0];
  if (page == "details.html") {
    name = products[$_GET["p"] - 1]["name"]
    $("#product-name").text(name);
  }

  // Search bar functionality
  $("#search").keyup(function() {
    search_text = $("#search input").val().toLowerCase();
    $(".product-box").each(function(index) {
      box = $(this);
      console.log("search: " + search_text + " box: " + box.find("h2").text());
      if (search_text.length < 1 || box.find("h2").text().toLowerCase().indexOf(search_text) >= 0) {
        // Found. Do not hide
        box.css("display", "block");
        console.log("found: " + box.find("h2").val());
      } else {
        box.css("display", "none")
        console.log("hid: " + box.find("h2").val());
      }
    });
  });
  // Order Click dialog
  $(".order-button").click(function() {
    $("#order-dialog").fadeIn(500);
  });
  $("#order-dialog-close").click(function() {
    $("#order-dialog").fadeOut(500);
  });
});
