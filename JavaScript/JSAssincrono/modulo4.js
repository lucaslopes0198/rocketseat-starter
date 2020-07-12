function adicionar() {
    var inputElement = document.querySelector("#container input")
    var ulElement = document.querySelector("#container ul")
    
    var url = "https://api.github.com/users/" + inputElement.value + "/repos"
    
    axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        document.getElementById("loading").style.visibility = "visible";
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    axios.get(url)
        .then(function (response) {
            for (data of response["data"]) {
                var liElement = document.createElement("li")
                var node = document.createTextNode(data["name"])

                liElement.appendChild(node)
                ulElement.appendChild(liElement)
            }
            document.getElementById("loading").style.visibility = "hidden";
        })
        .catch(function (error) {
            if (error.response.status == 404) {
                alert("Usuário não encontrado.");
            } else {    
                console.log(error);
            }
            document.getElementById("loading").style.visibility = "hidden";
        })
    
    inputElement.value = ""
}
