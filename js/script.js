$(document).ready(function(){
    var newArrivalArr = [
        ["KING Platinum 21 FG/AG", "Men's Soccer Cleats","new_01_01.jpg"],
        ["FUSE", "Training Shoes","new_02_01.jpg"],
        ["Suede RE.GEN", "Sneakers","new_03_01.jpg"],
        ["Leadcat", "G Sandals","new_04_01.jpg"],
        ["COOLADAPT", "Men's Soccer Cleats","new_05_01.jpg"],
        ["KING Platinum 21 FG/AG", "Women’s Running Tank Top","new_06_01.jpg"],
        ["Sonora Waist", "BAG 2.0","new_07_01.jpg"],
        ["High Court Regal Mid", "Women's Sneakers","new_08_01.jpg"],
        ["RS-Z Red", "CAMPUS","new_09_01.jpg"],
        ["MB.01", "BUZZ CITY","new_10_01.jpg"],
    ];

    for(i in newArrivalArr){
        $(".box").append(`
        <div class="boxSec">
            <div class="content" style="background-image: url(./images/products/${newArrivalArr[i][2]});">
                <div class="dark">
                    <div class="subTitle">
                        <h3>${newArrivalArr[i][0]}</h3>
                        <p>${newArrivalArr[i][1]}</p>
                        <button>More</button>
                    </div>
                    
                </div>
            </div>
        </div>
        `);
    }

    var MatchArr = [
        ["category_01.jpg","EVERYDAY", "BEST FOR: A RUN HERE AND THERE."],
        ["category_02.jpg", "COMPETITIVE", "BEST FOR: CHASING THE NEXT RACE."],
        ["category_03.jpg", "LONG DISTANCE", "BEST FOR: RACKING UP THE MILES."],
    ];

    for(i in MatchArr){
        $(".En_Box").append(`
             <div class="cont">
                <div class="topbox">
                    <img src="./images/${MatchArr[i][0]}" alt="">
                </div>
                <div class="bottomBox">
                    <h3>${MatchArr[i][1]}</h3>
                    <p>${MatchArr[i][2]}</p>
                    <button>Shop Now</button>
                </div>
                
            </div>
        `);
    }

    var NewYearArr = [
        [ "collection_01.jpg","SOFT ON ANOTHER LEVEL", "CLOUDSPUN"],
        [ "collection_02.jpg", "ESCAPE FROM ROUTINE",  "PUMA x HELLY HANSEN"],
        [ "collection_03.jpg","EMPOWERED PEOPLE. CLEANER PLANET.", "PUMA x FIRST MILE"],
    ];

    for(i in NewYearArr){
        $(".En_Box2").append(`
        <div class="cont">
                <div class="topbox">
                    <img src="./images/${NewYearArr[i][0]}" alt="">
                </div>
                <div class="bottomBox">
                    <h3>${NewYearArr[i][1]}</h3>
                    <p>${NewYearArr[i][2]}</p>
                    <button>Shop Now</button>
                </div>
                
            </div>
        `);
    }

});

var hamIcon = document.querySelector(".my_page ul li:last-child");
var hamIconImg = document.querySelector(".my_page ul li:last-child img")
var $nav = document.querySelector("header nav");
hamIcon.addEventListener("click",function(e){
    e.preventDefault();
    var navConfim = $nav.classList.contains("active");

    if(!navConfim){
        $nav.classList.add("active");
        hamIconImg.src = "./images/x.svg"
    }else{
        $nav.classList.remove("active");
        hamIconImg.src = "./images/hamIcon.svg"
    } 
});