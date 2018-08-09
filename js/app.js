const textOne = document.getElementById("happy");
const textTwo = document.getElementById("friendship");
const textThree = document.getElementById("day");
const textFour = document.getElementById("scholars");
const card = document.getElementById("friends");
const abhimanyu = document.getElementById("abhimanyu");
const aditya = document.getElementById("aditya");
const adityaV = document.getElementById("adityaV");
const arshi = document.getElementById("arshi");
const bharat = document.getElementById("bharat");
const debesh = document.getElementById("debesh");
const geet = document.getElementById("geet");
const goss = document.getElementById("goss");
const pain = document.getElementById("pain");
const pradeep = document.getElementById("pradeep");
const prateek = document.getElementById("prateek");
const ruhan = document.getElementById("ruhan");
const shashank = document.getElementById("shashank");
const shivam = document.getElementById("shivam");
const yash = document.getElementById("yash");


function homeSlide() {
    setTimeout(() => {
        textOne.style.display = "block";
        setTimeout(() => {
            textTwo.style.display = "block";
            setTimeout(() => {
                textThree.style.display = "block";
                setTimeout(() => {
                    textFour.style.display = "block";
                    setTimeout(() => {
                        friend();
                    }, 4000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);;
}

function friend() {
    document.getElementById("myFriends").style.display = "none";
    document.getElementById("wish__text").style.display = "none";
    document.getElementById("friends").style.display = "block";
    document.getElementById("myFriends").style.display = "block";
    setTimeout(() => {
        abhi();
    }, 10);
}

function abhi() {

    abhimanyu.style.display = "block";
    abhimanyu.lastElementChild.style.display = "block";
    setTimeout(() => {
        abhimanyu.firstElementChild.classList.add("bounceOutDown");
        abhimanyu.lastElementChild.classList.add("bounceOutDown");
        adi();
    }, 3000);

}

function adi() {

    setTimeout(() => {
        abhimanyu.style.display = "none";
        abhimanyu.lastElementChild.style.display = "none";
        aditya.style.display = "block";
        aditya.lastElementChild.style.display = "block";
        setTimeout(() => {
            aditya.firstElementChild.classList.add("rollOut");
            aditya.lastElementChild.classList.add("rollOut");
            adiV();
        }, 3000);
    }, 2000);

}

function adiV() {
    setTimeout(() => {
        aditya.style.display = "none";
        aditya.lastElementChild.style.display = "none";
        adityaV.style.display = "block";
        adityaV.lastElementChild.style.display = "block";
        setTimeout(() => {
            adityaV.firstElementChild.classList.add("zoomOut");
            adityaV.lastElementChild.classList.add("zoomOut");
            ars();
        }, 3000);
    }, 2000);
}

function ars() {
    setTimeout(() => {
        adityaV.style.display = "none";
        adityaV.lastElementChild.style.display = "none";
        arshi.style.display = "block";
        arshi.lastElementChild.style.display = "block";
        setTimeout(() => {
            arshi.firstElementChild.classList.add("bounceOut");
            arshi.lastElementChild.classList.add("bounceOut");
            bha();
        }, 3000);
    }, 2000);
}

function bha() {
    setTimeout(() => {
        arshi.style.display = "none";
        arshi.lastElementChild.style.display = "none";
        bharat.style.display = "block";
        bharat.lastElementChild.style.display = "block";
        setTimeout(() => {
            bharat.firstElementChild.classList.add("fadeOut");
            bharat.lastElementChild.classList.add("zoomOut");
            deb();
        }, 3000);
    }, 2000);
}

function deb() {
    setTimeout(() => {
        bharat.style.display = "none";
        bharat.lastElementChild.style.display = "none";
        debesh.style.display = "block";
        debesh.lastElementChild.style.display = "block";
        setTimeout(() => {
            debesh.firstElementChild.classList.add("zoomOutUp");
            debesh.lastElementChild.classList.add("zoomOutUp");
            gee();
        }, 3000);
    }, 2000);
}

function gee() {
    setTimeout(() => {
        debesh.style.display = "none";
        debesh.lastElementChild.style.display = "none";
        geet.style.display = "block";
        geet.lastElementChild.style.display = "block";
        setTimeout(() => {
            geet.firstElementChild.classList.add("zoomOutLeft");
            geet.lastElementChild.classList.add("zoomOutLeft");
            gos();
        }, 3000);
    }, 2000);
}

function gos() {
    setTimeout(() => {
        geet.style.display = "none";
        geet.lastElementChild.style.display = "none";
        goss.style.display = "block";
        goss.lastElementChild.style.display = "block";
        setTimeout(() => {
            goss.firstElementChild.classList.add("flipOutX");
            goss.lastElementChild.classList.add("flipOutX");
            pai();
        }, 3000);
    }, 2000);
}

function pai() {
    setTimeout(() => {
        goss.style.display = "none";
        goss.lastElementChild.style.display = "none";
        pain.style.display = "block";
        pain.lastElementChild.style.display = "block";
        setTimeout(() => {
            pain.firstElementChild.classList.add("rotateOut");
            pain.lastElementChild.classList.add("zoomOut");
            pra();
        }, 3000);
    }, 2000);
}

function pra() {
    setTimeout(() => {
        pain.style.display = "none";
        pain.lastElementChild.style.display = "none";
        pradeep.style.display = "block";
        pradeep.lastElementChild.style.display = "block";
        setTimeout(() => {
            pradeep.firstElementChild.classList.add("rotateOut");
            pradeep.lastElementChild.classList.add("rotateOut");
            prat();
        }, 3000);
    }, 2000);
}

function prat() {
    setTimeout(() => {
        pradeep.style.display = "none";
        pradeep.lastElementChild.style.display = "none";
        prateek.style.display = "block";
        prateek.lastElementChild.style.display = "block";
        setTimeout(() => {
            prateek.firstElementChild.classList.add("slideOutLeft");
            prateek.lastElementChild.classList.add("zoomOut");
            ruh();
        }, 3000);
    }, 2000);
}

function ruh() {
    setTimeout(() => {
        prateek.style.display = "none";
        prateek.lastElementChild.style.display = "none";
        ruhan.style.display = "block";
        ruhan.lastElementChild.style.display = "block";
        setTimeout(() => {
            ruhan.firstElementChild.classList.add("zoomOut");
            ruhan.lastElementChild.classList.add("zoomOut");
            sha();
        }, 3000);
    }, 2000);
}

function sha() {
    setTimeout(() => {
        ruhan.style.display = "none";
        ruhan.lastElementChild.style.display = "none";
        shashank.style.display = "block";
        shashank.lastElementChild.style.display = "block";
        setTimeout(() => {
            shashank.firstElementChild.classList.add("zoomOut");
            shashank.lastElementChild.classList.add("zoomOut");
            shi();
        }, 3000);
    }, 2000);
}

function shi() {
    setTimeout(() => {
        shashank.style.display = "none";
        shashank.lastElementChild.style.display = "none";
        shivam.style.display = "block";
        shivam.lastElementChild.style.display = "block";
        setTimeout(() => {
            shivam.firstElementChild.classList.add("rollOut");
            shivam.lastElementChild.classList.add("rollOut");
            yas();
        }, 3000);
    }, 2000);
}

function yas() {
    setTimeout(() => {
        shivam.style.display = "none";
        shivam.lastElementChild.style.display = "none";
        yash.style.display = "block";
        yash.lastElementChild.style.display = "block";
        setTimeout(() => {
            yash.firstElementChild.classList.add("rollOut");
            yash.lastElementChild.classList.add("rollOut");
            last();
        }, 3000);
    }, 2000);
}

function last() {
    document.getElementById("friends").style.display = "none";
    document.getElementById("last").style.display = "block";
    let ty = document.getElementById("thankYou");
    ty.style.display = "block";
    setTimeout(() => {
        document.getElementById("creator").style.display = "block";

    }, 1500);
}
homeSlide();