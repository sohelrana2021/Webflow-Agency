

const acc = document.getElementsByClassName("faq-btn");
let i;

for(i= 0; i<acc.length; i++){
    acc[i].addEventListener('click', function() {
        this.classList.toggle("active");
        let pleen = this.nextElementSibling;
        if(pleen.style.display === "block") {
            pleen.style.display = "none";
        }else{
            pleen.style.display = "block";
        }
        
    });
}
document.getElementById('de').click();
