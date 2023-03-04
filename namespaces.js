let namespace = (function () {
    var internal_msg = 'This is an internal msg'; 

    var privateFunction = function () {
        return internal_msg; 
    }; 

    var publicFunction = function () {
        return "Message by private function" + privateFunction(); 
    }

    return {
        Name: "Single global variables", 
        Callable: publicFunction
    }
})

console.log(namespace.Name)
console.log(namespace.Callable())