const Name = document.getElementById("name");
const Name2 = document.getElementById("name2");
const Photo = document.getElementById("photo");
const Email = document.getElementById("email");
let num = 1;
let num2 = 0;
let start = {
    Name: Name.innerText,
    Name2: Name2.innerText,
    Photo: Photo.src,
    Email: Email.innerText
    
};
Name.onclick = function(){
    if(num2++%5===0){
        Name.innerText = start.Name;
        Name2.innerText = start.Name2;
        Photo.src = start.Photo;
        Email.innerText = start.Email;
        
        
    }
    else{
        if(num>=12)num = 1; else num++;{
            $ajaxUtils.sendGetRequest("https://izmail-site.herokuapp.com/users/"+num,function(response){
                const json = JSON.parse(response.responseText);
                Name.innerText = json.data.first_name;
                Name2.innerText = json.data.last_name;
                Photo.src = json.data.avatar;
                Email.innerText = json.data.email;
            });
        }
    }
};