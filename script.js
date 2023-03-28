const menuContainerTag = document.querySelector(".menuContainer");
const line1Tag = document.querySelector(".line1");
const line2Tag = document.querySelector(".line2");
const line3Tag = document.querySelector(".line3");
const overLayMenuTag = document.querySelector(".overLayMenu");
const liTags = document.querySelectorAll("li");
console.log(liTags);

menuContainerTag.addEventListener("click", () => {
  if (line2Tag.classList.contains("hideLine2")) {
    line2Tag.classList.remove("hideLine2");
    line1Tag.classList.remove("plus45Deg");
    line3Tag.classList.remove("minus45Deg");
    overLayMenuTag.classList.remove("opacity1");
    for (let i = 0; i < liTags.length; i++) {
      liTags[i].classList.remove("moveLiTags");
    }
  } else {
    line2Tag.classList.add("hideLine2");
    line1Tag.classList.add("plus45Deg");
    line3Tag.classList.add("minus45Deg");
    overLayMenuTag.classList.add("opacity1");

    for (let i = 0; i < liTags.length; i++) {
      liTags[i].classList.add("moveLiTags");
    }
  }
});
