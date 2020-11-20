let click1 = document.getElementById('box1');

array = ['"anak anak hakctiv8 pada jago ngereceh semua ya haha. kak fiqi sih luar biasa ngereceh mulu wkwk"',
            '"btw, kamu bisa joke receh kaya kak fiqi ga?"',
            '"......"',
            '"please jangan bilang jawabannya "kucingta padamu"..."',
            '"eww wtf.."',
            '"yaudah aku duluan ya, thanks tun!"',
            '"apa ya...."',
            '"cecak napas!? hahaha receh anj***"',
            '"hahaha aku duluan ya, thanks loh hari ini."',
            '"besok kerjain bareng lagi yuk :)"']



click1.addEventListener('click', function onOpen() {
    click1.innerHTML = array[0]
    document.getElementById("chara").style.display = "block";
    document.getElementById("chara").src = "./img/smile.png";
    
    click1.addEventListener('click', function onOpen() {
        click1.innerHTML = array[1]
        
        click1.addEventListener('click', function onOpen() {
            document.getElementById("decision1").style.display = "block";
            
        })
    })
})

function decision3() {
    document.getElementById("decision1").style.display = "none";
    document.getElementById("chara").src = "./img/huh.png";
    click1.innerHTML = array[2]
    
    click1.addEventListener('click', function onOpen() {
        document.getElementById("decision1").style.display = "none";
        document.getElementById("chara").src = "./img/angry.png";
        click1.innerHTML = array[3];
        
        click1.addEventListener('click', function onOpen() {
            document.getElementById("decision1").style.display = "none";
            document.getElementById("chara").src = "./img/huh.png";
            click1.innerHTML = array[4];

            click1.addEventListener('click', function onOpen() {
                document.getElementById("decision1").style.display = "none";
                document.getElementById("chara").src = "./img/smile.png";
                click1.innerHTML = array[5];

                click1.addEventListener('click', function onOpen() { 
                    window.alert("BAD ENDING : belajar joke receh ya tun");
                    window.location.href = "index.html"
                    
                })
                
            })
            
        })
    })
}

function decision4() {
    document.getElementById("decision1").style.display = "none";
    document.getElementById("chara").src = "./img/shy.png";
    click1.innerHTML = array[6]
    
    click1.addEventListener('click', function onOpen() {
        document.getElementById("decision1").style.display = "none";
        document.getElementById("chara").src = "./img/happy.png";
        click1.innerHTML = array[7];
        
        click1.addEventListener('click', function onOpen() {
            document.getElementById("decision1").style.display = "none";
            document.getElementById("chara").src = "./img/happy.png";
            click1.innerHTML = array[8];

            click1.addEventListener('click', function onOpen() {
                document.getElementById("decision1").style.display = "none";
                document.getElementById("chara").src = "./img/smile.png";
                click1.innerHTML = array[9];

                click1.addEventListener('click', function onOpen() { 
                    window.alert("GOOD ENDING");
                    window.location.href = "index.html"
                })
                
            })
            
        })
    })
}
