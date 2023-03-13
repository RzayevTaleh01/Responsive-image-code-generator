const htmlEditor = CodeMirror(document.getElementById("code-container-html"), {
  mode: "htmlmixed",
  lineNumbers: true,
  mode: "css",
  theme: "dracula",
  fullscreen: true,
});
const cssEditor = CodeMirror(document.getElementById("code-container-css"), {
  mode: "css",
  lineNumbers: true,
  mode: "css",
  theme: "dracula",
  fullscreen: true,
});

const form = document.querySelector(".generator-form");

form.addEventListener("submit", generateImage);


function generateImage(e) {
  e.preventDefault();
  const imageUrl = document.getElementById('image-url').value;
  const imageWidth = document.getElementById('image-width').value;
  const imageHeight = document.getElementById('image-height').value;

  const imageHTML = `
  <div class="box">
    <div class="box-resize">
      <img src="${imageUrl}" class="resposive-img" width="${imageWidth}" height="${imageHeight}" />
    </div>
  </div>`;

  document.getElementById('image-container').innerHTML = imageHTML;

  const codeHTML = `
<div class="box">
  <div class="box-resize">
    <img src="${imageUrl}" class="resposive-img" width="${imageWidth}" height="${imageHeight}" />
  </div>
</div>
  `;

  const codeCSS = `
.box {
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  padding: ${(imageHeight / imageWidth) * 100}% 0 0 0; // Main Part - width:height% (padding-top)
}
.box-resize {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.responsive-img {
  min-width: 100%;
  min-height: 100%;
}`;

  htmlEditor.setValue(codeHTML);
  cssEditor.setValue(codeCSS);
}