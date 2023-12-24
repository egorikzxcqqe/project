var name_SQL = 'data'
var ver_SQL = 1.0
var op_SQL = 'save data of form'
var count_SQL = 2*1024*1024
var but = document.querySelector('.button')

var db = openDatabase(name_SQL, ver_SQL, op_SQL, count_SQL);
db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS database (fio, group, course, birth, gender, age, network, data)')
})

but.addEventListener('click', () => {
    var fio = document.querySelector('.fio').value
    var group = document.querySelector('.group').value
    var number = document.querySelector('.number').value
    var birth = document.querySelector('.birth').value
    var gender = document.querySelector('.messageCheckbox').checked
    var age = document.querySelector('.age').value
    var form = document.querySelector('.egor').value
    var data = document.querySelector('.data').value

    if (gender == true) {
        gender = 'Мужской'
    }
    else {
        gender = "Женский"
    }

    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO database (fio, group, course, birth, gender, age, network, data) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [fio, group, number, birth, gender, age, form, data])
    })
    
})

