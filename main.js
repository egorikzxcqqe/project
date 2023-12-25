var request = indexedDB.open('data', 1.0);

request.onupgradeneeded = function (event) {
    var db = event.target.result;
    var objectStore = db.createObjectStore("database", { keyPath: "id", autoIncrement: true });
    objectStore.createIndex("fio", "fio", { unique: false });
    // Добавьте больше индексов по мере необходимости для других полей
};

request.onsuccess = function (event) {
    var db = event.target.result;

    var but = document.querySelector('.button');
    but.addEventListener('click', () => {
        var transaction = db.transaction(["database"], "readwrite");
        var objectStore = transaction.objectStore("database");

        var fio = document.querySelector('.fio').value;
        var group = document.querySelector('.group').value;
        var number = document.querySelector('.number').value;
        var birth = document.querySelector('.birth').value;
        var gender = document.querySelector('.messageCheckbox').checked ? 'Мужской' : 'Женский';
        var bobage = document.querySelector('.bobage').value;
        console.log('age: ', bobage)
        var form = document.querySelector('.egor').value;
        var data = document.querySelector('.data').value;

        var request = objectStore.add({
            fio: fio,
            group: group,
            course: number,
            birth: birth,
            gender: gender,
            bobage: bobage,
            network: form,
            data: data
        });

        request.onsuccess = function (event) {
            // Данные успешно добавлены
            console.log('Data added successfully');
        };

        request.onerror = function (event) {
            // Обработка ошибок
            console.error('Error adding data');
        };
    });
};