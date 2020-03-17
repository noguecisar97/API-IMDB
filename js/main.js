
function busca(valor){
    const procura = document.querySelector('#search')
    procura.value = ""
    const serviceUrl = `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${valor}`
    axios.defaults.baseURL = 'http://Dominio';
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers['x-rapidapi-host'] = 'imdb-internet-movie-database-unofficial.p.rapidapi.com'
    axios.defaults.headers['x-rapidapi-key'] = 'f72a6b1673mshb4b0130bc4010c3p1eed21jsn3a5f09b4d080'
    axios.get(serviceUrl)
        .then(resp => {
            const dados = resp.data.titles
            const lista = Array.from(dados)
            // delete lista[`${lista.length - 1}`]
            exibe(lista)           
        })
        .catch(error => {
        console.log(error);
        })    
}

function click(){
    const procura = document.querySelector('#search')    
    busca(procura.value)    
}

function exibe(lista){
    lista.map(e => {
        perfil(e)
    })
}

function perfil(e){
    const doc = document.querySelector('#collection')
    const div = document.createElement('div')
    const img = document.createElement('img')
    const h3 = document.createElement('h3')
    div.classList = 'container'
    img.src = e.image
    img.classList = 'imgCc'
    div.append(img)
    h3.innerHTML = e.title
    h3.classList = "tituloF"
    div.append(h3)
    doc.append(div)   
}

const busco = document.querySelector('#buscou')
busco.onclick = function(){
    const doc = document.querySelector('#collection')
    doc.innerHTML = ""
    click()
}

var data = "summonerId=1&apiKey=RGAPI-f27a43b5-bedb-4522-9136-2ef489916538&region=BR";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("POST", "https://leagueoflegendsstefan-skliarovv1.p.rapidapi.com/getAllChampionMasteries");
xhr.setRequestHeader("x-rapidapi-host", "LeagueOfLegendsstefan-skliarovV1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "f72a6b1673mshb4b0130bc4010c3p1eed21jsn3a5f09b4d080");
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

xhr.send(data);
