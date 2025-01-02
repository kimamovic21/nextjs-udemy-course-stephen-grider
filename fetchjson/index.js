// import axios from 'axios';
var axios = require('axios');
;
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios.get(url).then(function (response) {
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    console.log("\n    The Todo with ID: ".concat(id, "\n    Has a title of: ").concat(title, "\n    Is it finished? ").concat(completed, "\n  "));
});
