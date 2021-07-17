let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
let wrapper, fileName, dafaultBtn, cancelBtn, img;
wrapper = document.querySelector(`"#(${'wrapper'+item.id}"`);
    fileName = document.querySelector(`"#${'file-name'+item.id}"`);
    defaultBtn = document.querySelector(`"#${"default-btn"+item.id}"`);
    //const customBtn = document.querySelector("#custom-btn");
    cancelBtn = document.querySelector(`"#${'cancel-btn'+item.id}"`);
    img = document.querySelector(`"#${'wrapperImg'+item.id})"`);

let selectImage = () => {
    const file = this.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = function(){
            const result = reader.result;
            img.src = result;
            wrapper.classList.add("active");
        }
        cancelBtn.addEventListener("click", function(){
            img.src = "";
            wrapper.classList.remove("active");
        })
        reader.readAsDataURL(file);
    }
    if(this.value){
        let valueStore = this.value.match(regExp);
        fileName.textContent = valueStore;
    }
    
};

defaultBtn.onclick = selectImage();
