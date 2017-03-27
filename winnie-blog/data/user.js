function user(id,name){
    this.id=id;
    this.name = name;
}

var userArr = [
    new user(1,"Helen"),
    new user(2,"Gordon"),
    new user(3,"Li")
];

function getUserById(id) {
    for(var i = 0;i<userArr.length;i++){
        if(id == userArr[i].id){
            return userArr[i];
            break;
        }
    }
}