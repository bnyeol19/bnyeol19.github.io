let click = document.getElementById('box');

let array = ['Namun tak seindah nasib Mitun yang selalu sibuk ngoding hingga menjadi jomblo abadi di umurnya.',
            'Pagi ini Mitun akan mencoba untuk menyatakan perasaannya ke Lucinta dengan modus ngoding bareng. Bantu Mitun untuk mendapatkan cintanya!',
            '"eh Mitun! Iya, aku belum kelar nih challengenya, kamu gimana?"',
            'Ok, kalau gitu, aku kerjain dulu ya. Bye!',
            'Kalau gitu, yuk kerjain bareng nanti sore']



click.addEventListener('click', function onOpen() {
    click.innerHTML = array[0]
    document.getElementById("chara").src = "./img/smilefinal.png"
        
    
    click.addEventListener('click', function onOpen() {
        click.innerHTML = array[1]
        document.getElementById("decision").style.display = "none";
        
        click.addEventListener('click', function onOpen() {
            document.getElementById("chara").style.display = "block";
            click.innerHTML = array[2]
            
            click.addEventListener('click', function onOpen() {
                document.getElementById("decision").style.display = "block";
                
            })
        })
    })
})

function decision1() {
    click.innerHTML = array[3];
    document.getElementById("decision").style.display = "none";

    click.addEventListener('click', function onOpen() {
        document.getElementById("decision").style.display = "none";
        click.innerHTML = array[3];
        window.alert("yaelah tuuun tuunnn");
        window.location.href = "index.html"
        
    })
}

function decision2() {
    click.innerHTML = array[4];
    document.getElementById("chara").src = "./img/final.png"
    document.getElementById("decision").style.display = "none";
    click.addEventListener('click', function onOpen() {
        window.location.href = "second.html"
        
    })
}

