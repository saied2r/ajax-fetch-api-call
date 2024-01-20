// In this file we will read data form "data.json"

const xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200){
        const data  = this.responseText;
        console.log(JSON.parse(data))
    }
}

xmlHttp.open("GET", "/data.json", true)
xmlHttp.send()