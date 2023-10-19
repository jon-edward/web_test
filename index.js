document.body.onload = attachEmbed;

function attachEmbed() {
  const embed = document.createElement("embed");
  
  embed.setAttribute("type", "image/jpg");
  embed.setAttribute("src", "test.jpg");
  embed.setAttribute("width", 300);
  embed.setAttribute("height", 200);

  document.getElementsByTagName('head')[0].appendChild(embed);
}
