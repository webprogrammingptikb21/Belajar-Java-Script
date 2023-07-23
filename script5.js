// tagged template
const nama = "alwi";
const umur = 20;
const email = "210209501011@student.unm.ac.id";

function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ""}</span>`, "");
}
i;
const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun dan email saya adalah: ${email}`;
document.body.innerHTML = str;
