let search = document.getElementById("search");
let hit = document.getElementById('hit');
let not_found = document.getElementById('not-found')
let avatar = document.getElementById('avatar')
let full_name = document.getElementById('name')
let email = document.getElementById("mail")
let user_name = document.getElementById("user-name")
let company = document.getElementById("company")
let loc = document.getElementById("location")
let twitter = document.getElementById("twitter")
let bio = document.getElementById("bio")
let card = document.getElementsByClassName('card')[0]

console.log(search.innerHTML)
hit.onclick = function(){
    get_repo()
};
function get_repo() {
    if (search.value == ""){
        not_found.innerText ='Please Enter The User-name'
    }
    else{
        console.log(search.value)
        fetch('https://api.github.com/users/'+search.value).then((response) => response.json()).then((data) =>{
            console.log(data)
            if (data["message"] === "Not Found"){
                not_found.innerText = data["message"]
                card.style.display = "none";
            }
            else{
                not_found.innerText = ''
                card.style.display = "flex";
                upload_avatar(data["avatar_url"],data["name"],data["login"],data["company"],data["email"],data["twitter_username"],data["bio"],data["location"])
            }
        })
    }
}
function upload_avatar(url,fl_name,usr_name,company_name,mail,twitter_id,description,locate){
    avatar.setAttribute('src',url)
    full_name.innerText = fl_name || '/'
    user_name.innerText = usr_name || '/'
    company.innerText = company_name || '/'
    company.setAttribute('href','https://github.com/'+company_name.replace("@",""))
    email.innerText = mail || '/'
    if (twitter_id != null){
        twitter.innerText = "@"+twitter_id
        twitter.setAttribute('href',"https://twitter.com/"+twitter_id)
    }
    else{
        twitter.innerText ='/'
    }
    bio.innerText = description || "/"
    loc.innerText = locate || "/"
}