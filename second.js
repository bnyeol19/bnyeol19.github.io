let click1 = document.getElementById('box1');

array = ['Challenge terlalu susah, tugas rocket pun terlalu banyak, Lucinta pun mulai pusing',
            '"Perasaan tadi pas lecture gampang...."',
            '"wkwkwk!! Kak semmy post IZONE mulu, kenapa gapernah blackpink?"',
            '"padahal aku kan BLINK"',
            'Mitun dan Lucinta pun melanjutkan ghibah dan ngoding hingga larut. Mitun mengantar Lucinta pulang',
            '"siap instruktur...."',
            'Akhirnya kalian selesai mengerjakannya lebih cepat.',
            '"makasih ya untuk hari ini. bye bye~!"']



click1.addEventListener('click', function onOpen() {
    click1.innerHTML = array[0]
    
    
    click1.addEventListener('click', function onOpen() {
        click1.innerHTML = array[1]
        document.getElementById("decision").style.display = "none";
        document.getElementById("chara").style.display = "block";
        document.getElementById("chara").src = "./img/huh.png";
        
        click1.addEventListener('click', function onOpen() {
            document.getElementById("decision").style.display = "block";

        })
    })
})

function decision3() {
    document.getElementById("chara").src = "./img/happy.png";
    document.getElementById("decision").style.display = "none";
    click1.innerHTML = array[2];
    click1.addEventListener('click', function onOpen() {
        document.getElementById("decision").style.display = "none";
        document.getElementById("chara").src = "./img/angry.png";
        click1.innerHTML = array[3];

        click1.addEventListener('click', function onOpen() {
            document.getElementById("decision").style.display = "none";
            document.getElementById("chara").style.display = "none";
            click1.innerHTML = array[4];

            window.location.href = "third.html"
    
        })
    })
}

function decision4() {
    click1.innerHTML = array[5];
    document.getElementById("chara").src = "./img/shy.png";
    document.getElementById("decision").style.display = "none";

    click1.addEventListener('click', function onOpen() {
        document.getElementById("chara").style.display = "none";
        document.getElementById("decision").style.display = "none";
        click1.innerHTML = array[6];

        click1.addEventListener('click', function onOpen() {
            document.getElementById("chara").src = "./img/smile.png";
            document.getElementById("decision").style.display = "none";
            click1.innerHTML = array[7];

            click1.addEventListener('click', function onOpen() {
                document.getElementById("decision").style.display = "none";
                window.alert("ghibah adalah koentji");
                window.location.href = "index.html"
    
            })
        })
    })
    
    
}

