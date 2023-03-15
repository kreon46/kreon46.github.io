// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

//wczytywanie obrazków
loadSprite("element","element.png")
loadSprite("kartka","całość1.jpg")
loadSound("muzyka","do szopy hej pasterze.mp3")

// add a piece of text at position (120, 80)
add([
    text(""),
    pos(120, 80),
]);

add([
    sprite("kartka"),
    pos(0,0)
])

const element = add([
    sprite("element"),
    pos(450,200)
])
 var xMinus = 1;
onUpdate(()=>{
    if(element.pos.x == 400)
    {
        xMinus =1;
    }
    if(element.pos.x == 550)
    {
        xMinus =-1;
    }
    element.pos.x=element.pos.x +=xMinus;
  
})
onKeyRelease("space",()=>play("muzyka"))

