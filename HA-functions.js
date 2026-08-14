function userProfile(name) {
    console.log("Hello, " + name + "!");
}
userProfile("Vishal Aadhithiya")


const double = (number) => {
    return number * 2;
};

console.log(double(24));

setTimeout(function() {
    console.log("This message is displayed after 2 seconds.");
}, 2000);

function getUserData(callback) {
    setTimeout(function() {
        let user = {
            name: "Vishal Aadhithiya",
            age: 21
        };

        callback(user);
    }, 3000);
}

getUserData(function(user) {
    console.log("Name:", user.name);
    console.log("Age:", user.age);
});