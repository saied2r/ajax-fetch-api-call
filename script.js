// loadDataFromJSON function load data form a .json file
// loadDataFromTXT function load data form a .txt  file

const loadDataFromJSON = () =>{ 
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            const data  = this.responseText;
            console.log(JSON.parse(data))
        }
    }
    
    xmlHttp.open("GET", "/data.json", true)
    xmlHttp.send()
}


const loadDataFromTXT = () =>{ 
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/text.txt", true);
    xhr.onload = function(){
        if (this.status === 200){
            console.log(this.responseText)
        }
        else{
            alert("text not found");
        }

    }
    xhr.send();
    }


loadDataFromJSON();
loadDataFromTXT();



