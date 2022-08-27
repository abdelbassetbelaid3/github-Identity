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
console.log("aaaaaaa");
console.log(search.innerHTML)
hit.onclick = function(){
    get_repo()
};
function get_repo() {
    if (search.value == ""){
        console.log("no value")
        not_found.innerText ='aaaa'
    }
    else{
        console.log(search.value)
        fetch('https://api.github.com/users/'+search.value).then((response) => response.json()).then((data) =>{
            console.log(data)
            if (data["message"] === "Not Found"){
                not_found.innerText = data["message"]
            }
            else{
                not_found.innerText = ''
                upload_avatar(data["avatar_url"],data["name"],data["login"],data["company"],data["email"],data["twitter_username"],data["bio"],data["location"])
            }
        })
    }
}
function upload_avatar(url,fl_name,usr_name,company_name,mail,twitter_id,description,locate){
    avatar.setAttribute('src',url)
    full_name.innerText = fl_name
    user_name.innerText = usr_name
    company.innerText = company_name
    email.innerText = mail
    twitter.innerText = twitter_id
    bio.innerText = description
    loc.innerText = locate
}