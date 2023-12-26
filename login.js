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
        if ((name == null || name == "") && (email_reg == null || email_reg == "") && (password_reg == null || password_reg == "") || (email_reg == null || email_reg == "") && (password_reg == null || password_reg == "") || (name == null || name == "") && (password_reg == null || password_reg == "") || (name == null || name == "") && (email_reg == null || email_reg == "")) {
            alert('Нужно обязательно указать все поля!')
        }
        else {
            tx.executeSql('INSERT INTO test (name, email, password) VALUES (?, ?, ?)', [name, email_reg, password_reg])
            alert('Вы успешно прошли регистрацию!')
        }
    })
})

// end reg button

// start vhod
vhod.addEventListener('click', () => {
    var email_vhod = document.querySelector('.email_vhod').value
    var password_vhod = document.querySelector('.password_vhod').value
    db.transaction(function (tx) {
        tx.executeSql('SELECT name FROM test WHERE email = ? AND password = ?', [email_vhod, password_vhod], function (tx, results) {
            var len = results.rows.length
            for (var i = 0; i < len; i++) {
                var row = results.rows.item(i)
                if ((email_vhod == null || email_vhod == "") && (password_vhod == null || password_vhod == "")) {
                    alert("Вы что-то забыли!")
                    break
                }
                else {
                    alert(`Добро пожаловать ${row.name}`)
                    window.location = 'index.html'
                }
            }
        }, null)
    })
})

registerBtn.addEventListener('click', () => {
    container.classList.add('active')
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active')
})
