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

            case 'historyguessr':
                panelDesc.innerHTML = "Click to navigate to History Guessr!";
                panelDesc.classList.add('show');
                break;
            case 'portfolio':
                panelDesc.innerHTML = "Click to navigate to Portfolio!";
                panelDesc.classList.add('show');
                break;
            case 'swiftrift':
                panelDesc.innerHTML = "Click to navigate to Swift Rift!";
                panelDesc.classList.add('show');
                break;
            case 'notesai':
                panelDesc.innerHTML = "Click to navigate to NotesAI!";
                panelDesc.classList.add('show');
                break;
            case 'florin':
                panelDesc.innerHTML = "Click to navigate to Florin Council!";
                panelDesc.classList.add('show');
                break;
        }
    })

    panel.addEventListener('click', () => {
        const panelId = panel.id;

        switch(panelId){

            case 'historyguessr':
                window.open('https://github.com/Electrolytful/History-Guessr', '_blank');
                break;
            case 'portfolio':
                window.open('https://github.com/Electrolytful/electrolytful.github.io', '_blank');
                break;
            case 'swiftrift':
                window.open('https://github.com/Electrolytful/Swift_Rift', '_blank');
                break;
            case 'notesai':
                window.open('https://github.com/Electrolytful/NotesAI_backend', '_blank');
                break;
            case 'florin':
                window.open('https://github.com/Electrolytful/FlorinCouncil', '_blank');
                break;
        }
    })

    panel.addEventListener('mouseleave', () => {
        panel.classList.remove('active');
        panelDesc.classList.remove('show');
        panelDesc.innerHTML = "";
    })
})
