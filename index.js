document.body.onload = attachEmbed;

function attachEmbed() {
  const embed = document.createElement("embed", { type: "image/jpg", src: "test.jpg", width: 300, height: 200 });
  document.body.appendChild(embed);
}
