sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    enemy4.setPosition(randint(0, 10), randint(0, 10))
})
function spawn_Get_upppp () {
    Get_upppp = sprites.create(img`
        . . . . . . f f 8 8 8 8 8 8 8 . 
        . . . . f f 2 2 f 8 8 8 8 8 8 . 
        . . . f 2 2 2 2 2 f 8 8 8 8 8 . 
        . . f f 2 2 2 2 f 8 f 8 8 8 8 . 
        . f 1 f 2 2 f f 5 f f f 8 8 8 . 
        . f f f 2 f 5 5 5 5 5 f 8 8 8 . 
        1 1 f f f 5 5 5 5 5 5 f 8 8 8 . 
        1 1 1 f 2 f 5 5 5 5 5 f 8 8 8 . 
        1 1 1 f 2 f 5 5 5 5 5 f 8 8 8 . 
        1 1 1 f 2 2 f 5 5 5 5 f 8 8 8 . 
        f f f f 2 2 f 5 5 5 5 5 8 8 8 . 
        f f f f f 2 2 f f 5 f f 8 8 8 . 
        . . . . f f 2 2 2 f 8 f 8 8 8 . 
        . . . . . . f f 2 2 f f f 8 8 . 
        . . . . . . . . f f 8 f f f 8 . 
        . . . . . . . . . . 8 8 8 8 . . 
        `, SpriteKind.Player)
    controller.moveSprite(Get_upppp)
    Get_upppp.setStayInScreen(true)
}
let Get_upppp: Sprite = null
let enemy4: Sprite = null
info.setLife(3)
spawn_Get_upppp()
enemy4 = sprites.create(img`
    . . . 1 1 . . . . . 1 1 . . . . 
    . . . 1 1 . . . . . 1 1 . . . . 
    . . . 3 3 . . . . . 3 3 . . . . 
    . . . 3 3 3 . . . 3 3 3 . . . . 
    . . . 3 f 3 3 . 3 3 f 3 . . . . 
    . . . 3 f f 3 3 3 f f 3 . . . . 
    . . . 3 f f f f f f f 3 . . . . 
    . . . 3 3 f f f f f f 3 . . . . 
    . . . 3 1 f f f f f f 3 . . . . 
    . . . 3 1 1 f f f f f 3 . . . . 
    . . . 1 f 1 f f f f f 3 . . . . 
    . . . 1 f f f f f f f 3 . . . . 
    . . . 1 1 f 1 f f f f 3 . . . . 
    . . . . 1 f 1 f f f f . . . . . 
    . . . . 1 f f f f f . . . . . . 
    . . . . 1 1 1 1 f f . . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(1)
enemy4.setPosition(66, 61)
enemy4.setVelocity(100, 50)
enemy4.setBounceOnWall(true)
