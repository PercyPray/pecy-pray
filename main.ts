namespace SpriteKind {
    export const boss = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.boss, function (sprite, otherSprite) {
    info.changeLifeBy(-5)
    enemy5.setPosition(randint(0, 160), randint(0, 120))
})
function collectable () {
    Collectable = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . e e . . . . . 
        . . . . . . . . e e e . . . . . 
        . . . . . . . e e e . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . e e e e . . . . . . 
        . . . . . e e f e e e . . . . . 
        . . . . e e f f f e e e . . . . 
        . . . e e e f f f e e e e . . . 
        . . e e e e e f f e e e e e . . 
        . . . e e e f f f e e e e . . . 
        . . . . e e f f e e e e . . . . 
        . . . . . e f f f e e . . . . . 
        . . . . . . e f e e . . . . . . 
        . . . . . . e e e e . . . . . . 
        . . . . . . . e e . . . . . . . 
        `, SpriteKind.Food)
    Collectable.setPosition(randint(0, 160), randint(0, 120))
}
info.onCountdownEnd(function () {
    game.setGameOverMessage(true, "GAME OVER!")
    game.gameOver(true)
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
        `, SpriteKind.Enemy)
    enemy4.setPosition(66, 61)
    enemy4.setVelocity(100, 50)
    enemy4.setBounceOnWall(true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
    collectable()
})
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
        `, SpriteKind.boss)
    enemy5.setPosition(66, 61)
    enemy5.setVelocity(50, 50)
    enemy5.setBounceOnWall(true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.setPosition(randint(0, 160), randint(0, 120))
})
let Get_upppp: Sprite = null
let enemy4: Sprite = null
let Collectable: Sprite = null
let enemy5: Sprite = null
collectable()
spanwn_enemy()
mikeistrash()
spawn_Get_upppp()
scene.setBackgroundColor(1)
info.setLife(5)
info.setScore(0)
game.setGameOverScoringType(game.ScoringType.HighScore)
