const user = {
    username: "Nandani❤️",
    price : 999,

    WelcomeMessage: function (){
        console.log(`Hello ${this.username} jii, Welcome to Chai with Amit.`);
        console.log(this);
        
        
    }
}

user.WelcomeMessage()