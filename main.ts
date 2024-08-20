sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    enemy4.setPosition(randint(0, 10), randint(0, 10))
})
function spanwn_enemy () {
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
    enemy4.setPosition(66, 61)
    enemy4.setVelocity(100, 50)
    enemy4.setBounceOnWall(true)
}
function spawn_Get_upppp () {
    Get_upppp = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 . 2 2 . . . . . . 
        . . . . 2 2 3 3 3 2 2 . . . . . 
        . . . 2 2 3 f 3 f 3 2 2 . . . . 
        . . . 2 . 3 3 3 3 3 . 2 . . . . 
        . . . . . 1 3 3 3 1 . . . . . . 
        . . . . . 3 1 1 1 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(Get_upppp)
    Get_upppp.setStayInScreen(true)
    Get_upppp.setPosition(-3, 117)
}
function mikeistrash () {
    let mySprite: Sprite = null
    enemy5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . 1 2 2 2 2 2 2 1 . . . . 
        . . . 1 2 2 2 2 2 2 2 2 1 . . . 
        . . 4 f f f 2 2 2 2 f f f 4 . . 
        . . 4 4 f f 2 2 2 2 f f 4 4 . . 
        . . . 4 f f 2 2 2 2 f f 4 . . . 
        . . . 4 4 2 2 2 2 2 2 4 4 . . . 
        . . . . 4 1 2 2 2 2 1 4 . . . . 
        . . . . 4 4 1 2 2 1 4 4 . . . . 
        . . . . . 4 2 2 2 2 4 . . . . . 
        . . . . . 4 1 1 1 1 4 . . . . . 
        . . . . . . 4 1 1 4 . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    enemy4.setPosition(66, 61)
    mySprite.setVelocity(100, 90)
    enemy4.setBounceOnWall(true)
}
let enemy5: Sprite = null
let Get_upppp: Sprite = null
let enemy4: Sprite = null
spanwn_enemy()
mikeistrash()
spawn_Get_upppp()
scene.setBackgroundColor(1)
info.setLife(5)
