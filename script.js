const fields = [
  { id: "committee", target: "committeeText", prefix: "" },
  { id: "project", target: "projectText", prefix: "企画名：" },
  { id: "purpose", target: "purposeText", prefix: "" },
  { id: "period", target: "periodText", prefix: "" },
  { id: "who", target: "whoText", prefix: "" },
  { id: "when", target: "whenText", prefix: "" },
  { id: "where", target: "whereText", prefix: "" },
  { id: "how", target: "howText", prefix: "" },
  { id: "comment", target: "commentText", prefix: "" }
];

fields.forEach(field => {
  const input = document.getElementById(field.id);
  input.addEventListener("input", () => {
    const value = input.value.trim();
    document.getElementById(field.target).textContent =
      (field.prefix || "") + (value || input.placeholder);
  });
});

function downloadPoster() {
  const poster = document.getElementById("poster");
  poster.scrollIntoView({ behavior: "instant", block: "center" });

  html2canvas(poster, {
    scale: 2,
    backgroundColor: "#ffffff",
    useCORS: true
  }).then(canvas => {
    const link = document.createElement("a");
    link.download = "poster.png";
    link.href = canvas.toDataURL("image/png");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }).catch(error => {
    alert("画像保存に失敗しました。もう一度お試しください。");
    console.error("html2canvas error:", error);
  });
}
