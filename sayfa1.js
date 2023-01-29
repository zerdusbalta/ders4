const kokEtiket = document.querySelector("#root")

const fotograflar = [ 1, 10, 23, 45, 57, 78, 85 ]

fotograflar.forEach( yeniFotografEkle ) //her bir eleman için yeniFotografEkle fn çalışsın

function yeniFotografEkle( fotografNo ){
  let imgEtketi = document.createElement("img")
  imgEtketi.src = `https://lipsum.app/id/${fotografNo}/300x250`
  kokEtiket.append(imgEtketi)
}

let butonEkle = document.createElement("button")
butonEkle.textContent = "+ Ekle"
//butonEkle.style.display = 'block'
butonEkle.style.width = '100px'
kokEtiket.prepend(butonEkle)

butonEkle.addEventListener( 'click', function(){
    /*
    let imgEtketi = document.createElement("img")
    imgEtketi.src = `https://lipsum.app/id/106/300x250`
    kokEtiket.append(imgEtketi)
    */
   yeniFotografEkle(parseInt(inputFoto.value))
} )

let inputFoto = document.createElement('input')
inputFoto.type = 'text'
butonEkle.after(inputFoto)

inputFoto.after(document.createElement("hr"))


/*
let foto1 = document.createElement("img")
let foto2 = document.createElement("img")
let foto3 = document.createElement("img")
let foto4 = document.createElement("img")
let foto5 = document.createElement("img")
let foto6 = document.createElement("img")

foto1.src = `https://lipsum.app/id/${fotograflar[0]}/300x200`
foto2.src = `https://lipsum.app/id/${fotograflar[1]}/300x200`
foto3.src = `https://lipsum.app/id/${fotograflar[2]}/300x200`
foto4.src = `https://lipsum.app/id/${fotograflar[3]}/300x200`
foto5.src = `https://lipsum.app/id/${fotograflar[4]}/300x200`
foto6.src = `https://lipsum.app/id/${fotograflar[5]}/300x200`

kokEtiket.append(foto1, foto2, foto3, foto4, foto5, foto6)
*/