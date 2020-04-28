console.log("hi this is a test");
let stumpjumper ={
    brand:"Specialized",
    type:"Stumpjumper",
    year:"2020",
    description: "This is a trail bike, for a lot of pedaling.",
    src:"./pictures/spec-stumpy.jpg"
}
let enduro ={
    brand:"Specialized",
    type:"Enduro",
    year:"2020",
    description: "This is an enduro bike, for a lot of descending, and it climbs surprisingly well.",
    src:"./pictures/spec-enduro.jpg"
}
let demo ={
    brand:"Specialized",
    type:"Demo",
    year:"2020",
    description: "This is a downhill bike, for a lot of descending, only for descending, it's a csillagromboló",
    src:"./pictures/spec-demo.jpg"
}

let list= [stumpjumper,enduro,demo]

list.forEach(element => {
    $( ".thumbnail" ).append( '<img id='+element.type+' src="/'+element.src+'">' );
});

$("#Stumpjumper").click(function(){
$(".picture img").remove();
$(".picture").append('<img src="./pictures/spec-stumpy.jpg">');
})

