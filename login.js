const container = document.getElementById('container')
const registerBtn = document.getElementById('register')
const loginBtn = document.getElementById('login')
const reg = document.querySelector('.reg')
const vhod = document.querySelector('.vhod')

// reg button

var name_SQL = 'registration'
var ver_SQL = 1.0
var op_SQL = 'save your password and email, name'
var count_SQL = 2*1024*1024

var db = openDatabase(name_SQL, ver_SQL, op_SQL, count_SQL);   
db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS test (name, email, password)')
})

reg.addEventListener('click', () => {
    var name = document.querySelector('.name').value
    var email_reg = document.querySelector('.email_reg').value
    var password_reg = document.querySelector('.password_reg').value
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO test (name, email, password) VALUES (?, ?, ?)', [name, email_reg, password_reg])
    })
})

// end reg button

// start vhod


registerBtn.addEventListener('click', () => {
    container.classList.add('active')
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active')
})



