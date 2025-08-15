let friends = [];

function addFriend(){

    let friend = document.getElementById("friend").value;

    document.getElementById("friend").value = "";

    if(friend.trim() === "") {
        alert("Por favor, insira um nome.");
        return;
    }else if(friends.includes(friend)){
        alert("Esse nome já foi adicionado.");
        return;
    }else{
    friends.push(friend);
    }
    
   // alert(friends);
}

function listFriends() {
    let list = document.getElementById("friendList");

    list.innerHTML = "";

    if(friends.length === 0) {
        list.innerHTML = "Nenhum amigo adicionado.";
        return;
    }

    friends.forEach(function(friend, index) {
        let li = document.createElement("li");
        li.textContent = friend;
        li.setAttribute("data-index", index);
        li.addEventListener("click", function() {
            removeFriend(index);
        });
        list.appendChild(li);
    });
}

function drawFriends(){
    
}

