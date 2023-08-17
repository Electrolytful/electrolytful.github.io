export function cardHandler() {
  const card = document.getElementsByClassName("card");
  let i;

  // for loop to check whether a card has been clicked and to open and close the card
  for (i = 0; i < card.length; i++) {
    card[i].addEventListener("click", function () {
      // checking if the card is closed or open, then altering the css values to open or close card
      if (this.style.minHeight === "400px") {
        this.style.minHeight = "550px";
        this.children[1].children[1].children[0].style.display = "inline";
        this.children[1].children[1].children[0].style.opacity = "1";

        this.children[1].children[0].style.bottom = "58%";
        this.children[1].children[0].style.transition = "all .3s";
        this.children[1].children[0].style.opacity = "1";

        this.children[1].children[1].style.bottom = "25%";
        this.children[1].children[1].style.transition = "all .5s";
        this.children[1].children[1].style.opacity = "1";

        this.children[1].children[2].className = "bx bx-chevron-up";
      } else {
        this.style.minHeight = "400px";
        this.children[1].children[1].children[0].style.display = "none";
        this.children[1].children[1].children[0].style.removeProperty(
          "opacity"
        );

        this.children[1].children[0].style.removeProperty("bottom");
        this.children[1].children[1].style.removeProperty("bottom");

        this.children[1].children[0].style.removeProperty("transition");
        this.children[1].children[1].style.removeProperty("transition");

        this.children[1].children[0].style.removeProperty("opacity");
        this.children[1].children[1].style.removeProperty("opacity");

        this.children[1].children[2].className = "bx bx-chevron-down";
      }
    });
  }
}
