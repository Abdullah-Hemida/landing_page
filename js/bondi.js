let worklist = document.querySelectorAll(".our-work ul li");
let ourWork = document.querySelectorAll(".works .work");

worklist.forEach((list) => {
    list.addEventListener("click" , managSwicher);
    list.addEventListener("click" , managcontent);
  });
    
    function managSwicher() {
        worklist.forEach((li) => {
            li.classList.remove("active");
            this.classList.add("active");
        })
    }

   function managcontent() {
      ourWork.forEach((w) => {
         w.style.display = "none";
      })
   let targetContent = document.querySelectorAll(`.works ${this.dataset.work}`);
       targetContent.forEach((cont) => {
       cont.style.display = "flex";
    })
}
       
    
