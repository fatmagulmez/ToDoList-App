let ekleDOM = document.querySelector('#addbutton');
let inputDOM = document.querySelector('#input');
let listeDOM = document.querySelector('#listbox');
let temizleDOM = document.querySelector('#clearbutton');
let silBtn = document.querySelectorAll('.fa-times');


ekleDOM.addEventListener('click', elemanEkle);
temizleDOM.addEventListener('click', tumunuSil);

function elemanEkle(event){
    event.preventDefault();    //girilen görev kaydedildiğinde tarayıcının yenilenmesini önleyen fonksiyon

    if(inputDOM.value == ""){
        alert("Lütfen Görev Giriniz!");
    }else{
        var li = document.createElement("li");
        li.innerText = inputDOM.value;         // Lİ DEĞİŞKENİNİN AÇILAMSINI İNPUTA YAZILANA  EŞİTLEDİM
        var sil = document.createElement("sil");
        sil.classList = "fas fa-times";  // ÇARPI BUTONUNU CLASS A EKLEDİK
        li.append(sil);
        listeDOM.append(li);
        inputDOM.value = "";
       ;

        silBtn = document.querySelectorAll('.fa-times');
        for( let i = 0; i < silBtn.length; i++){
            silBtn[i].addEventListener('click', elemansil);
        }
    }
}

function elemansil(){
    let secim = confirm("Emin misiniz?");
    if (secim == true){
        let clear = this.parentElement;
        clear.remove();
    }
} 


function tumunuSil(){
    let secim = confirm("Hepsini silmek istediğinden emin misin?");
    if (secim == true){
        let clearall = document.querySelectorAll('li');
        for(
            let j = 0; j < clearall.length; j++
        ){
            clearall[j].remove();
        }
        
    }

}