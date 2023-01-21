function createNewUser() {
    let firstName = prompt("Enter your name!")
    let lastName = prompt("Enter your last name!")
    let userBirthday = prompt('Enter youer birthday in format(dd.mm.yyyy),pls')
    let curYear = new Date().getFullYear()
    let newUser = {
        firstName : firstName,
        lastName : lastName,
        birthday : userBirthday,
        getAge(){
            let birthdayYear = this.birthday.split(".")
            let age = curYear - birthdayYear[2]
            return document.write(age)
        },
        getLogin(){
            let login = this.firstName[0] + this.lastName
            return document.write("Login :" + login.toLowerCase())
        },
        getpassword(){
            let birthdayYear = this.birthday.split(".")
            let password = this.firstName[0].toUpperCase() 
            + this.lastName.toLowerCase() +
             birthdayYear[2]
            return document.write('Password : ' + password)
        }
    }
    document.write('Name : ' + newUser.firstName) 
    document.write('LastName : ' + newUser.lastName)
    newUser.getLogin()
    newUser.getAge()
    newUser.getpassword()
}
createNewUser()
