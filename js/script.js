// 
const card = document.getElementsByClassName("card");
const panels = document.querySelectorAll('.panel');
const panelDesc = document.querySelector('.panel-desc');
let i;

// 
for(i = 0; i < card.length; i++){                        
    card[i].addEventListener("click", function(){
        // console.log("clicked");
        // console.log(this.children[1].children[2].className);
        
        // 
        if(this.style.minHeight === "400px"){
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
        }
        else{
            this.style.minHeight = "400px";
            this.children[1].children[1].children[0].style.display = "none";
            this.children[1].children[1].children[0].style.removeProperty("opacity");

            this.children[1].children[0].style.removeProperty("bottom");
            this.children[1].children[1].style.removeProperty("bottom");

            this.children[1].children[0].style.removeProperty("transition");
            this.children[1].children[1].style.removeProperty("transition");

            this.children[1].children[0].style.removeProperty("opacity");
            this.children[1].children[1].style.removeProperty("opacity");

            this.children[1].children[2].className = "bx bx-chevron-down";
        }

    })
}

// 
panels.forEach((panel) => {
    panel.addEventListener('mouseenter', () => {
        panel.classList.add('active') ;
        const panelId = panel.id;

        switch(panelId){

            case 'swiftrift':
                panelDesc.innerHTML = "This is Swift Rift!";
                panelDesc.classList.add('show');
                break;
            case 'javagame':
                panelDesc.innerHTML = "This is Java Game!";
                panelDesc.classList.add('show');
                break;
            case 'portfolio':
                panelDesc.innerHTML = "This is Portfolio!";
                panelDesc.classList.add('show');
                break;
            case 'future1':
                panelDesc.innerHTML = "This is Future Project!";
                panelDesc.classList.add('show');
                break;
            case 'future2':
                panelDesc.innerHTML = "This is Future Project!";
                panelDesc.classList.add('show');
                break;
        }
    })
    panel.addEventListener('mouseleave', () => {
        panel.classList.remove('active');
        panelDesc.classList.remove('show');
        panelDesc.innerHTML = "This is a placeholder";
    })
})
