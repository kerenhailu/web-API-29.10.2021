function printDitels(array) {
    array.forEach(object => {
for (const key in object.show) { 
}
sectionDitels.innerHTML+= `<div class="card"${object.show.name}<br>
${object.show.type}<br>
${object.show.language}<br>
${object.show.runtime}<br>
<img class="imgMovie" src="${object.show.image.medium}"><br>
<a href=${object.show.url}>link to ${object.show.name}</a><br>
<span>${object.show.summary}</span><br>
</div>`
 });
}
function showGif() {
    sectionDitels.innerHTML=`<img id="imgGif" src="https://i.gifer.com/RNSD.gif">`
}
function haidGif() {
    imgGif.style.display="none" 
}

let search=input.value
async function moviesPromise(search) {
    try{
        showGif()
        return await fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
        .then(res=>res.json())
        // .then(res=>console.log(res))   
    }
    catch(error){
        return error
    }
    finally{
        haidGif() 
    }
}
btn.onclick=()=>{
moviesPromise(input.value)
.then(res=>printDitels(res))    
}
