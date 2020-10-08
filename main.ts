namespace SpriteKind {
    export const npc = SpriteKind.create()
    export const spier = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Enemy, myTiles.tile22, function (sprite, location) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        if (sprite.y > otherSprite.y) {
            sprite.y += 1
            otherSprite.y += -1
        } else if (sprite.y < otherSprite.y) {
            sprite.y += -1
            otherSprite.y += 1
        }
        if (sprite.x > otherSprite.x) {
            sprite.x += 1
            otherSprite.x += -1
        } else if (sprite.x < otherSprite.x) {
            sprite.x += -1
            otherSprite.x += 1
        }
    }
    timer.background(function () {
        if (sprite.y < otherSprite.y && (controller.A.isPressed() && !(sprite.vy >= 100))) {
            sprite.vy += -10
            pause(2000)
        }
    })
})
function doSomething3 () {
    if (rond == 3) {
        tiles.destroySpritesOfKind(SpriteKind.npc)
        for (let index = 0; index < 5; index++) {
            quofid = 0
            info.setScore(0)
            npc = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . 3 3 3 3 3 3 3 3 3 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . . 3 . . . 3 . . . . . . . 
                `, SpriteKind.npc)
            npc.vx = randint(45, 80)
        }
    }
    if (rond == 4) {
        tiles.destroySpritesOfKind(SpriteKind.npc)
        for (let index = 0; index < 2; index++) {
            quofid = 0
            info.setScore(0)
            npc = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . 3 3 3 3 3 3 3 3 3 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . . 3 . . . 3 . . . . . . . 
                `, SpriteKind.npc)
            npc.vx = randint(45, 80)
        }
    }
    if (rond == 5) {
        tiles.destroySpritesOfKind(SpriteKind.npc)
        for (let index = 0; index < 1; index++) {
            quofid = 0
            info.setScore(0)
            npc = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . 3 3 3 3 3 3 3 3 3 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . . 3 . . . 3 . . . . . . . 
                `, SpriteKind.npc)
            npc.vx = randint(45, 80)
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile22, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.npc, myTiles.tile10, function (sprite, location) {
    tiles.setTileAt(location, myTiles.transparency16)
    timer.after(500, function () {
        tiles.setWallAt(tiles.locationInDirection(location, CollisionDirection.Bottom), false)
        tiles.setTileAt(tiles.locationInDirection(location, CollisionDirection.Bottom), myTiles.transparency16)
    })
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.tileKindAt(TileDirection.Center, myTiles.tile17)) {
        gg = 9
        _66 = 9
    }
    if (mySprite.tileKindAt(TileDirection.Center, myTiles.tile1)) {
        if (look == blockSettings.readNumber("list")) {
            look = 0
        } else {
            look += 1
        }
        mySprite.setImage(list1[look])
    }
    if (mySprite.tileKindAt(TileDirection.Center, myTiles.tile2)) {
        controller.moveSprite(mySprite, 0, 0)
        mySprite.ay = 100
        pause(1000)
        leve2 = randint(_66, gg)
        level = list2[leve2]
        tiles.loadMap(level)
        scene.cameraFollowSprite(mySprite)
        controller.moveSprite(mySprite, 100, 0)
        scene.setBackgroundColor(8)
        tiles.placeOnRandomTile(mySprite, myTiles.tile6)
        tiles.placeOnRandomTile(mySprite, myTiles.tile13)
        for (let index = 0; index < 51; index++) {
            npc = sprites.create(list1[randint(0, l)], SpriteKind.npc)
            if (Math.percentChance(50)) {
                sprites.setDataNumber(npc, "r", 1)
            } else {
                sprites.setDataNumber(npc, "r", -1)
            }
            count += 1
            tiles.placeOnRandomTile(npc, myTiles.tile6)
            sprites.setDataBoolean(mySprite, "q", false)
        }
    }
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy += -100
    }
})
scene.onOverlapTile(SpriteKind.Enemy, myTiles.tile16, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Food, myTiles.tile20, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Food, myTiles.tile9, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile9, function (sprite, location) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.npc, SpriteKind.npc, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        if (sprite.y > otherSprite.y) {
            sprite.y += 1
            otherSprite.y += -1
        } else if (sprite.y < otherSprite.y) {
            sprite.y += -1
            otherSprite.y += 1
        }
        if (sprite.x > otherSprite.x) {
            sprite.x += 1
        } else if (sprite.x < otherSprite.x) {
            sprite.x += -1
            otherSprite.x += 1
        } else if (otherSprite.isHittingTile(CollisionDirection.Bottom)) {
            otherSprite.vy += -100
        } else if (sprite.isHittingTile(CollisionDirection.Bottom)) {
            sprite.vy += -100
        }
    }
})
function doSomething (mySprite: Sprite, mySprite2: Sprite) {
    rond += 1
    mySprite.destroy()
    tiles.destroySpritesOfKind(SpriteKind.npc)
    game.splash("qualify")
    tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 4))
    controller.moveSprite(mySprite, 0, 0)
    quofid = 0
    mySprite.ay = 100
    pause(1000)
    level = list2[randint(0, 2)]
    tiles.loadMap(level)
    for (let index = 0; index < 40; index++) {
        quofid = 0
        info.setScore(0)
        npc = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 3 3 3 3 3 3 3 . . . . . . 
            . . . 3 1 1 1 1 1 3 . . . . . . 
            . . . 3 1 f 1 f 1 3 . . . . . . 
            . . . 3 1 f 1 f 1 3 . . . . . . 
            . . . 3 1 1 1 1 1 3 . . . . . . 
            . . 3 3 3 3 3 3 3 3 3 3 . . . . 
            . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
            . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
            . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
            . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
            . . . 3 3 3 3 3 3 3 . . . . . . 
            . . . 3 3 3 3 3 3 3 . . . . . . 
            . . . . 3 . . . 3 . . . . . . . 
            `, SpriteKind.npc)
        npc.vx = randint(45, 80)
    }
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite, 100, 0)
    scene.setBackgroundColor(8)
    if (rond == 3) {
        tiles.destroySpritesOfKind(SpriteKind.npc)
        for (let index = 0; index < 30; index++) {
            quofid = 0
            info.setScore(0)
            npc = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . 3 3 3 3 3 3 3 3 3 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . . 3 . . . 3 . . . . . . . 
                `, SpriteKind.npc)
            npc.vx = randint(45, 80)
        }
    }
    if (rond == 4) {
        tiles.destroySpritesOfKind(SpriteKind.npc)
        for (let index = 0; index < 20; index++) {
            quofid = 0
            info.setScore(0)
            npc = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . 3 3 3 3 3 3 3 3 3 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . . 3 . . . 3 . . . . . . . 
                `, SpriteKind.npc)
            npc.vx = randint(45, 80)
        }
    }
    if (rond == 5) {
        tiles.destroySpritesOfKind(SpriteKind.npc)
        for (let index = 0; index < 10; index++) {
            quofid = 0
            info.setScore(0)
            npc = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . 3 3 3 3 3 3 3 3 3 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . . 3 . . . 3 . . . . . . . 
                `, SpriteKind.npc)
            npc.vx = randint(45, 80)
        }
    }
    if (rond == 6) {
        game.over(true)
    }
}
sprites.onOverlap(SpriteKind.npc, SpriteKind.Enemy, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        if (sprite.x > otherSprite.x) {
            sprite.x += 1
        } else if (sprite.x < otherSprite.x) {
            sprite.x += -1
        } else {
            if (sprite.y > otherSprite.y) {
                sprite.y += 1
            } else if (sprite.y < otherSprite.y) {
                sprite.y += -1
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile7, function (sprite, location) {
    info.changeScoreBy(1)
    sprite.setFlag(SpriteFlag.Invisible, true)
    sprite.setFlag(SpriteFlag.Ghost, true)
    controller.moveSprite(sprite)
    player_quofid += 1
    quofid += 1
    rond += 1
    game.splash("qualify")
    sprites.setDataBoolean(sprite, "q", true)
    mySprite.ay = 0
    spetate = true
})
sprites.onOverlap(SpriteKind.npc, SpriteKind.spier, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        if (sprite.y > otherSprite.y) {
            sprite.y += 1
        } else if (sprite.y < otherSprite.y) {
            sprite.y += -1
        }
        if (sprite.x > otherSprite.x) {
            sprite.x += 1
        } else if (sprite.x < otherSprite.x) {
            sprite.x += -1
        } else if (sprite.isHittingTile(CollisionDirection.Bottom)) {
            sprite.vy += -100
        }
    }
})
scene.onOverlapTile(SpriteKind.npc, myTiles.tile7, function (sprite, location) {
    sprite.destroy()
    npclist.push(sprite.image)
    quofid += 1
    if (Math.percentChance(100)) {
        info.changeScoreBy(1)
    }
    if (quofid == count - 10) {
        if (sprites.readDataBoolean(mySprite, "q")) {
            tiles.destroySpritesOfKind(SpriteKind.spier)
            tiles.destroySpritesOfKind(SpriteKind.Food)
            tiles.destroySpritesOfKind(SpriteKind.npc)
            spetate = false
            sprites.setDataBoolean(mySprite, "q", false)
            mySprite.setFlag(SpriteFlag.Ghost, false)
            mySprite.setFlag(SpriteFlag.Invisible, false)
            count = count - 10
            controller.moveSprite(mySprite, 100, 0)
            mySprite.ay = 100
            leve2 = randint(_66, gg)
            level = list2[leve2]
            tiles.loadMap(level)
            tiles.placeOnRandomTile(mySprite, myTiles.tile6)
            tiles.placeOnRandomTile(mySprite, myTiles.tile13)
            info.setScore(0)
            for (let value of npclist) {
                quofid = 0
                info.setScore(0)
                npc = sprites.create(value, SpriteKind.npc)
                if (Math.percentChance(50)) {
                    sprites.setDataNumber(npc, "r", 1)
                } else {
                    sprites.setDataNumber(npc, "r", -1)
                }
                npc.vx = randint(45, 75)
                tiles.placeOnRandomTile(npc, myTiles.tile6)
            }
            npclist = []
            scene.cameraFollowSprite(mySprite)
            if (rond == 4 && player_quofid == 1) {
                blockSettings.writeNumber("list", 1 + blockSettings.readNumber("list"))
                game.over(true, effects.slash)
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.npc, myTiles.tile9, function (sprite, location) {
    sprite.destroy()
    info.changeScoreBy(1)
    if (info.score() == 10) {
        for (let value of sprites.allOfKind(SpriteKind.npc)) {
            npclist.push(value.image)
        }
        sprites.setDataBoolean(mySprite, "q", false)
        count = count - 10
        tiles.destroySpritesOfKind(SpriteKind.npc)
        tiles.destroySpritesOfKind(SpriteKind.Food)
        tiles.destroySpritesOfKind(SpriteKind.Enemy)
        game.splash("qualify")
        if (count == 10) {
            leve2 = randint(10, 10)
        } else {
            leve2 = randint(_66, gg)
        }
        controller.moveSprite(mySprite, 0, 0)
        quofid = 0
        mySprite.ay = 100
        level = list2[leve2]
        tiles.loadMap(level)
        tiles.placeOnRandomTile(mySprite, myTiles.tile6)
        tiles.placeOnRandomTile(mySprite, myTiles.tile13)
        info.setScore(0)
        for (let value of npclist) {
            quofid = 0
            info.setScore(0)
            npc = sprites.create(value, SpriteKind.npc)
            npc.vx = randint(45, 75)
            tiles.placeOnRandomTile(npc, myTiles.tile6)
            if (Math.percentChance(50)) {
                sprites.setDataNumber(npc, "r", 1)
            } else {
                sprites.setDataNumber(npc, "r", -1)
            }
        }
        npclist = []
        scene.cameraFollowSprite(mySprite)
        controller.moveSprite(mySprite, 100, 0)
        scene.setBackgroundColor(8)
        if (rond == 4 && player_quofid == 1) {
            blockSettings.writeNumber("list", 1 + blockSettings.readNumber("list"))
            game.over(true)
        }
    }
})
sprites.onOverlap(SpriteKind.npc, SpriteKind.Food, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        if (sprite.y > otherSprite.y) {
            sprite.y += 1
        } else if (sprite.y < otherSprite.y) {
            sprite.y += -1
        }
        if (sprite.x > otherSprite.x) {
            sprite.x += 1
        } else if (sprite.x < otherSprite.x) {
            sprite.x += -1
        } else if (sprite.isHittingTile(CollisionDirection.Bottom)) {
            sprite.vy += -100
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        if (sprite.y > otherSprite.y) {
            sprite.y += 1
        } else if (sprite.y < otherSprite.y) {
            sprite.y += -1
        }
        if (sprite.x > otherSprite.x) {
            sprite.x += 1
        } else if (sprite.x < otherSprite.x) {
            sprite.x += -1
        } else if (sprite.isHittingTile(CollisionDirection.Bottom)) {
            sprite.vy += -100
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile10, function (sprite, location) {
    tiles.setTileAt(location, myTiles.transparency16)
    timer.after(500, function () {
        tiles.setWallAt(tiles.locationInDirection(location, CollisionDirection.Bottom), false)
        tiles.setTileAt(tiles.locationInDirection(location, CollisionDirection.Bottom), myTiles.transparency16)
    })
})
function doSomething2 (mySprite: Sprite, mySprite2: Sprite) {
    mySprite.destroy()
    for (let index = 0; index < 1; index++) {
        quofid += 1
        info.changeScoreBy(1)
    }
    if (rond == 2 && quofid == 15) {
        game.splash("emulated")
        mySprite.destroy()
        spetate2 = 1
    }
    if (rond == 1 && quofid == 25) {
        game.splash("emulated")
        mySprite.destroy()
        spetate2 = 1
    }
    if (rond == 3 && quofid == 5) {
        game.splash("emulated")
        mySprite.destroy()
        spetate2 = 1
    }
    if (rond == 4 && quofid == 2) {
        game.splash("emulated")
        mySprite.destroy()
        spetate2 = 1
    }
    if (rond == 5 && quofid == 1) {
        game.splash("emulated")
        mySprite.destroy()
        spetate2 = 1
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.spier, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        if (sprite.y > otherSprite.y) {
            sprite.y += 1
        } else if (sprite.y < otherSprite.y) {
            sprite.y += -1
        }
        if (sprite.x > otherSprite.x) {
            sprite.x += 1
        } else if (sprite.x < otherSprite.x) {
            sprite.x += -1
        } else if (sprite.isHittingTile(CollisionDirection.Bottom)) {
            sprite.vy += -100
        }
    }
})
function doSomething4 () {
	
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    controller.moveSprite(sprite, 0, 0)
    for (let index = 0; index < 17; index++) {
        if (sprite.x > otherSprite.x) {
            sprite.x += 1
        } else if (sprite.x < otherSprite.x) {
            sprite.x += -1
        } else {
            if (sprite.y > otherSprite.y) {
                sprite.y += 1
            } else if (sprite.y < otherSprite.y) {
                sprite.y += -1
            }
        }
        pause(1)
    }
    controller.moveSprite(sprite, 100, 0)
})
let list55: Image[] = []
let mySprite2: Sprite = null
let spiner: Sprite = null
let spetate2 = 0
let count = 0
let level: tiles.WorldMap = null
let leve2 = 0
let npc: Sprite = null
let quofid = 0
let npclist: Image[] = []
let spetate = false
let rond = 0
let look = 0
let player_quofid = 0
let list2: tiles.WorldMap[] = []
let l = 0
let list1: Image[] = []
let mySprite: Sprite = null
let gg = 0
let _66 = 0
if (blockSettings.exists("list")) {
    info.setScore(0)
} else {
    blockSettings.writeNumber("list", 12)
}
gg = 5
_66 = 0
gg = 9
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 3 . . . . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . . 3 1 1 1 1 1 3 . . . . . . 
    . . . 3 1 f 1 f 1 3 . . . . . . 
    . . . 3 1 f 1 f 1 3 . . . . . . 
    . . . 3 1 1 1 1 1 3 . . . . . . 
    . . 3 3 3 3 3 3 3 3 3 3 . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . . . 3 . . . 3 . . . . . . . 
    `, SpriteKind.Player)
sprites.setDataBoolean(mySprite, "q", false)
list1 = [
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 . . . . . . . 
    . . . 2 2 2 2 2 2 2 . . . . . . 
    . . . 5 1 1 1 1 1 5 . . . . . . 
    . . . 2 1 f 1 f 1 2 . . . . . . 
    . . . 5 1 f 1 f 1 5 . . . . . . 
    . . . 2 1 1 1 1 1 2 . . . . . . 
    . . 5 5 5 5 5 5 5 5 5 . . . . . 
    . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
    . 5 . 5 5 5 5 5 5 5 . 5 . . . . 
    . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
    . 5 . 5 5 5 5 5 5 5 . 5 . . . . 
    . . . 2 2 2 2 2 2 2 . . . . . . 
    . . . 5 5 5 5 5 5 5 . . . . . . 
    . . . . 2 . . . 2 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 3 . . . . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . . 3 1 1 1 1 1 3 . . . . . . 
    . . . 3 1 f 1 f 1 3 . . . . . . 
    . . . 3 1 f 1 f 1 3 . . . . . . 
    . . . 3 1 1 1 1 1 3 . . . . . . 
    . . 3 3 3 3 3 3 3 3 3 . . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . . . 3 . . . 3 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . 2 2 2 2 2 2 2 . . . . . . 
    . . . 2 1 1 1 1 1 2 . . . . . . 
    . . . 2 1 f 1 f 1 2 . . . . . . 
    . . . 2 1 f 1 f 1 2 . . . . . . 
    . . . 2 1 1 1 1 1 2 . . . . . . 
    . . 2 2 2 2 2 2 2 2 2 . . . . . 
    . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
    . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
    . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
    . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
    . . . 2 2 2 2 2 2 2 . . . . . . 
    . . . 2 2 2 2 2 2 2 . . . . . . 
    . . . . 2 . . . 2 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 9 9 9 9 9 . . . . . . . 
    . . . 9 9 9 9 9 9 9 . . . . . . 
    . . . 9 1 1 1 1 1 9 . . . . . . 
    . . . 9 1 f 1 f 1 9 . . . . . . 
    . . . 9 1 f 1 f 1 9 . . . . . . 
    . . . 9 1 1 1 1 1 9 . . . . . . 
    . . 9 9 9 9 9 9 9 9 9 . . . . . 
    . 9 . 9 9 9 9 9 9 9 . 9 . . . . 
    . 9 . 9 9 9 9 9 9 9 . 9 . . . . 
    . 9 . 9 9 9 9 9 9 9 . 9 . . . . 
    . 9 . 9 9 9 9 9 9 9 . 9 . . . . 
    . . . 9 9 9 9 9 9 9 . . . . . . 
    . . . 9 9 9 9 9 9 9 . . . . . . 
    . . . . 9 . . . 9 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . a a a a a . . . . . . . 
    . . . a a a a a a a . . . . . . 
    . . . a 1 1 1 1 1 a . . . . . . 
    . . . a 1 f 1 f 1 a . . . . . . 
    . . . a 1 f 1 f 1 a . . . . . . 
    . . . a 1 1 1 1 1 a . . . . . . 
    . . a a a a a a a a a . . . . . 
    . a . a a a a a a a . a . . . . 
    . a . a a a a a a a . a . . . . 
    . a . a a a a a a a . a . . . . 
    . a . a a a a a a a . a . . . . 
    . . . a a a a a a a . . . . . . 
    . . . a a a a a a a . . . . . . 
    . . . . a . . . a . . . . . . . 
    `,
img`
    . . . . . 2 2 2 . . . . . . . . 
    . . . . d 2 2 2 d . . . . . . . 
    . . . d d 2 2 2 d d . . . . . . 
    . . . d 1 1 1 1 1 d . . . . . . 
    . . . d 1 f 1 f 1 d . . . . . . 
    . . . d 1 f 1 f 1 d . . . . . . 
    . . . d 1 1 1 1 1 d . . . . . . 
    . . d d d 2 2 2 d d d . . . . . 
    . d . d d 2 2 2 d d . d . . . . 
    . d . d d 2 2 2 d d . d . . . . 
    . d . d d 2 2 2 d d . d . . . . 
    . d . d d 2 2 2 d d . d . . . . 
    . . . d d 2 2 2 d d . . . . . . 
    . . . d d 2 2 2 d d . . . . . . 
    . . . . d 2 2 2 d . . . . . . . 
    . . . . d . . . d . . . . . . . 
    `,
img`
    . . . . 1 1 1 1 1 . . . . . . . 
    . f 5 1 1 5 5 5 1 1 5 f . . . . 
    . f 5 1 1 2 5 1 1 1 5 f . . . . 
    . 5 5 1 1 1 2 1 1 1 5 5 . . . . 
    . . . 1 d d 2 d d 1 . . . . . . 
    . . . 1 d f d f d 1 . . . . . . 
    . . . 1 d f d f d 1 . . . . . . 
    . . . 1 d d d d d 1 . . . . . . 
    . . 1 1 1 1 1 1 1 1 1 . . . . . 
    . 1 . 1 1 1 1 1 1 1 . 1 . . . . 
    . 1 . 1 e 1 1 1 e 1 . 1 . . . . 
    . 1 . e e e 1 e e e . 1 . . . . 
    . 1 . e e e e e e e . 1 . . . . 
    . . . e e e e e e e . . . . . . 
    . . . e e e e e e e . . . . . . 
    . . . . e . . . e . . . . . . . 
    `,
img`
    . . . . a a a a a . . . . . . . 
    . . . a a a a a a a . . . . . . 
    . . . 1 f a a a f 1 . . . . . . 
    . . . 1 f a a a f 1 . . . . . . 
    . . . a a 5 5 5 a a . . . . . . 
    . . . a a a 5 a a a . . . . . . 
    . . . a 1 1 1 1 1 a . . . . . . 
    . . . a 1 f 1 f 1 a . . . . . . 
    . . . a 1 f 1 f 1 a . . . . . . 
    . . . a 1 1 1 1 1 a . . . . . . 
    . . a a a a a a a a a . . . . . 
    . a . a a a a a a a . a . . . . 
    . a . a a a a a a a . a . . . . 
    . a . a a a a a a a . a . . . . 
    . a . a a a a a a a . a . . . . 
    . . . . a . . . a . . . . . . . 
    `,
img`
    . . . . . a a a a a . . . . . . 
    . . . . 1 f a a a f 1 . . . . . 
    . . . . 1 f a a a f 1 . . . . . 
    . . . . a a a a a a a . . . . . 
    . . . . a f f f f f a . . . . . 
    . . . . a d a a a d a . . . . . 
    . . . . a 1 1 1 1 1 a . . . . . 
    . . . . a 1 f 1 f 1 a . . . . . 
    . . . . a 1 f 1 f 1 a . . . . . 
    . . . . a 1 1 1 1 1 a . . . . . 
    . . . . a a 7 7 7 a a . . . . . 
    . . . a a 7 7 7 7 7 a a . . . . 
    . . a . a 7 7 7 7 7 a . a . . . 
    . . a . a 7 7 7 7 7 a . a . . . 
    . . a . a a 7 7 7 a a . a . . . 
    . . . . . a . . . a . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 3 . . . . . . . 
    . . . a a a a a a a . . . . . . 
    . . . 3 1 1 1 1 1 3 . . . . . . 
    . . . 3 1 f 1 f 1 3 . . . . . . 
    . . . 3 1 f 1 f 1 3 . . . . . . 
    . . . 3 1 1 1 1 1 3 . . . . . . 
    . . 3 3 3 3 3 3 3 3 3 . . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . 3 . a f a a a f a . 3 . . . . 
    . 3 . f a a a a a f . 3 . . . . 
    . . . a a a a a a a . . . . . . 
    . . . a a a a a a a . . . . . . 
    . . . . 3 . . . 3 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 . . . . . . . 
    . . . 4 4 4 4 4 4 4 . . . . . . 
    . . . 5 1 1 1 1 1 5 . . . . . . 
    . . . 5 1 f 1 f 1 5 . . . . . . 
    . . . 5 1 f 1 f 1 5 . . . . . . 
    . . . 5 1 1 1 1 1 5 . . . . . . 
    . . 5 5 5 5 5 5 5 5 5 . . . . . 
    . 5 . 5 5 5 5 5 5 5 . 5 . . . . 
    . 5 . 5 5 5 5 5 5 5 . 5 . . . . 
    . 5 . 4 2 4 4 4 2 4 . 5 . . . . 
    . 5 . 2 4 4 4 4 4 2 . 5 . . . . 
    . . . 4 4 4 4 4 4 4 . . . . . . 
    . . . 4 4 4 4 4 4 4 . . . . . . 
    . . . . 5 . . . 5 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 9 9 9 9 9 . . . . . . . 
    . . . 8 8 8 8 8 8 8 . . . . . . 
    . . . 9 1 1 1 1 1 9 . . . . . . 
    . . . 9 1 f 1 f 1 9 . . . . . . 
    . . . 9 1 f 1 f 1 9 . . . . . . 
    . . . 9 1 1 1 1 1 9 . . . . . . 
    . . 9 9 9 9 9 9 9 9 9 . . . . . 
    . 9 . 9 9 9 9 9 9 9 . 9 . . . . 
    . 9 . 9 9 9 9 9 9 9 . 9 . . . . 
    . 9 . 8 f 8 8 8 f 8 . 9 . . . . 
    . 9 . f 8 8 8 8 8 f . 9 . . . . 
    . . . 8 8 8 8 8 8 8 . . . . . . 
    . . . 8 8 8 8 8 8 8 . . . . . . 
    . . . . 9 . . . 9 . . . . . . . 
    `,
img`
    . . . . 1 1 1 1 1 . . . . . . . 
    . . . 1 1 1 1 1 1 1 . . . . . . 
    . . . d f 1 1 1 f d . . . . . . 
    . . . d f 1 1 1 f d . . . . . . 
    . . . 1 1 5 5 5 1 1 . . . . . . 
    . . . 1 1 1 5 1 1 1 . . . . . . 
    . . . 1 d d d d d 1 . . . . . . 
    . . . 1 d f d f d 1 . . . . . . 
    . . . 1 d f d f d 1 . . . . . . 
    . . . 1 d d d d d 1 . . . . . . 
    . . 1 1 1 1 1 1 1 1 1 . . . . . 
    . 1 . 1 1 1 1 1 1 1 . 1 . . . . 
    . 1 . 1 1 1 1 1 1 1 . 1 . . . . 
    . 1 . 1 1 1 1 1 1 1 . 1 . . . . 
    . 1 . 1 1 1 1 1 1 1 . 1 . . . . 
    . . . . 1 . . . 1 . . . . . . . 
    `,
img`
    . . . . . 6 6 6 6 6 . . . . . . 
    . . . . 1 f 6 6 6 f 1 . . . . . 
    . . . . 1 f 6 6 6 f 1 . . . . . 
    . . . . 6 6 6 6 6 6 6 . . . . . 
    . . . . 6 f f f f f 6 . . . . . 
    . . . . 6 d 6 6 6 d 6 . . . . . 
    . . . . 6 1 1 1 1 1 6 . . . . . 
    . . . . 6 1 f 1 f 1 6 . . . . . 
    . . . . 6 1 f 1 f 1 6 . . . . . 
    . . . . 6 1 1 1 1 1 6 . . . . . 
    . . . . 6 6 7 7 7 6 6 . . . . . 
    . . . 6 6 7 7 7 7 7 6 6 . . . . 
    . . 6 . 6 7 7 7 7 7 6 . 6 . . . 
    . . 6 . 6 7 7 7 7 7 6 . 6 . . . 
    . . 6 . 6 6 7 7 7 6 6 . 6 . . . 
    . . . . . 6 . . . 6 . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . 2 2 2 2 2 2 2 . . . . . . 
    . . 2 f 1 1 1 1 1 f . . . . . . 
    . . 2 f 1 f 1 f 1 f . . . . . . 
    . . 2 f 1 f 1 f 1 f . . . . . . 
    . . . f 1 1 1 1 1 f . . . . . . 
    . . f f f f f f f f f . . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . f . . . f . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . a a a a a a a . . . . . . 
    . . a f d d d d d f . . . . . . 
    . . a f d f d f d f . . . . . . 
    . . a f d f d f d f . . . . . . 
    . . . f d d d d d f . . . . . . 
    . . f f f f f f f f f . . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . f . . . f . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . 5 2 5 2 5 2 5 . . . . . . 
    . . 5 f 1 1 1 1 1 f . . . . . . 
    . . 2 f b f b f b f . . . . . . 
    . . 5 f b f b f b f . . . . . . 
    . . . f 1 1 1 1 1 f . . . . . . 
    . . f f f f f f f f f . . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . f . . . f . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . 3 f 1 1 1 1 1 f . . . . . . 
    . . 3 f 1 f 1 f 1 f . . . . . . 
    . . 3 f 1 f 1 f 1 f . . . . . . 
    . . . f 1 1 1 1 1 f . . . . . . 
    . . f f f f f f f f f . . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . f . . . f . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . 4 4 4 4 4 4 4 . . . . . . 
    . . 4 2 5 5 5 5 5 2 . . . . . . 
    . . 4 2 5 f 5 f 5 2 . . . . . . 
    . . 4 2 5 f 5 f 5 2 . . . . . . 
    . . . 2 5 5 5 5 5 2 . . . . . . 
    . . 2 2 2 2 2 2 2 2 2 . . . . . 
    . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
    . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
    . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
    . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
    . . . 2 2 2 2 2 2 2 . . . . . . 
    . . . 2 2 2 2 2 2 2 . . . . . . 
    . . . . 2 . . . 2 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . a a a a a . . . . . . . 
    . . . c c c c c c c . . . . . . 
    . . . a 1 1 1 1 1 a . . . . . . 
    . . . c 1 f 1 f 1 c . . . . . . 
    . . . a 1 f 1 f 1 a . . . . . . 
    . . . c 1 1 1 1 1 c . . . . . . 
    . . a a a a a a a a a . . . . . 
    . c . c c c c c c c . c . . . . 
    . a . a a a a a a a . a . . . . 
    . c . c c c c c c c . c . . . . 
    . a . a a a a a a a . a . . . . 
    . . . c c c c c c c . . . . . . 
    . . . a a a a a a a . . . . . . 
    . . . . c . . . c . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 6 6 6 6 6 . . . . . . . 
    . . . 9 9 9 9 9 9 9 . . . . . . 
    . . . 6 1 1 1 1 1 6 . . . . . . 
    . . . 9 1 f 1 f 1 9 . . . . . . 
    . . . 6 1 f 1 f 1 6 . . . . . . 
    . . . 9 1 1 1 1 1 9 . . . . . . 
    . . 6 6 6 6 6 6 6 6 6 . . . . . 
    . 9 . 9 9 9 9 9 9 9 . 9 . . . . 
    . 6 . 6 6 6 6 6 6 6 . 6 . . . . 
    . 9 . 9 9 9 9 9 9 9 . 9 . . . . 
    . 6 . 6 6 6 6 6 6 6 . 6 . . . . 
    . . . 9 9 9 9 9 9 9 . . . . . . 
    . . . 6 6 6 6 6 6 6 . . . . . . 
    . . . . 9 . . . 9 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
    . . 9 9 9 9 9 9 9 1 1 1 9 . . . 
    . . 9 9 9 9 9 9 9 9 9 1 9 . . . 
    . . 9 9 9 1 1 1 1 1 9 1 9 . . . 
    . . 9 9 9 1 f 1 f 1 9 9 9 . . . 
    . 6 9 9 9 1 f 1 f 1 9 9 9 6 . . 
    6 . 9 9 9 1 1 1 1 1 9 9 9 . 6 . 
    6 . 9 9 9 9 9 9 9 9 9 9 9 . 6 . 
    6 . 9 1 9 9 9 9 9 9 9 9 9 . 6 . 
    . . 9 1 9 9 9 9 9 9 9 9 9 . . . 
    . . 9 1 1 1 9 9 9 9 9 9 9 . . . 
    . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
    . . . . 6 6 6 6 6 6 6 . . . . . 
    . . . . . 6 . . . 6 . . . . . . 
    `,
img`
    . . . . . . . . 5 5 . . . . . . 
    . . . . . . . . 5 . . . . . . . 
    . . . 9 9 5 9 5 9 9 . . . . . . 
    . . . 5 5 9 9 9 5 9 . . . . . . 
    . . . 9 1 1 1 1 1 5 . . . . . . 
    . . . 5 1 f 1 f 1 5 . . . . . . 
    . . . 5 1 f 1 f 1 5 . . . . . . 
    . . . 5 1 1 1 1 1 5 . . . . . . 
    . . 6 5 9 9 9 9 5 9 6 . . . . . 
    . 6 . 9 5 9 9 5 9 9 . 6 . . . . 
    . 6 . 9 9 5 5 9 5 9 . 6 . . . . 
    . 6 . 9 9 5 9 5 9 5 . 6 . . . . 
    . 6 . 9 5 9 5 9 5 9 . 6 . . . . 
    . . . 5 9 9 9 9 5 9 . . . . . . 
    . . . b b b b b b b . . . . . . 
    . . . . 6 . . . 6 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 4 4 4 4 4 4 4 4 4 4 4 . . . 
    . . 4 4 4 4 4 4 4 5 5 5 4 . . . 
    . . 4 4 4 4 4 4 4 4 4 5 4 . . . 
    . . 4 4 4 1 1 1 1 1 4 5 4 . . . 
    . . 4 4 4 1 f 1 f 1 4 4 4 . . . 
    . 2 4 4 4 1 f 1 f 1 4 4 4 2 . . 
    2 . 4 4 4 1 1 1 1 1 4 4 4 . 2 . 
    2 . 4 4 4 4 4 4 4 4 4 4 4 . 2 . 
    2 . 4 5 4 4 4 4 4 4 4 4 4 . 2 . 
    . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
    . . 4 5 5 5 4 4 4 4 4 4 4 . . . 
    . . 4 4 4 4 4 4 4 4 4 4 4 . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . . 2 . . . 2 . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . a a a a a . . . . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . . a 1 1 1 1 1 a . . . . . . 
    . . . 3 1 f 1 f 1 3 . . . . . . 
    . . . a 1 f 1 f 1 a . . . . . . 
    . . . 3 1 1 1 1 1 3 . . . . . . 
    . . a a a a a a a a a . . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . a . a a a a a a a . a . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . a . a a a a a a a . a . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . . a a a a a a a . . . . . . 
    . . . . 3 . . . 3 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . e e e e e . . . . . . . 
    . . . e e e e e e e . . . . . . 
    . . . e 1 1 1 1 1 e . . . . . . 
    . . . e 1 f 1 f 1 e . . . . . . 
    . . . e 1 f 1 f 1 e . . . . . . 
    . . . e 1 1 1 1 1 e . . . . . . 
    . . e e e e e e e e e . . . . . 
    . e . e e e e e e e . e . . . . 
    . e . e e e e e e e . e . . . . 
    . e . e e e e e e e . e . . . . 
    . e . e e e e e e e . e . . . . 
    . . . e e e e e e e . . . . . . 
    . . . e e e e e e e . . . . . . 
    . . . . e . . . e . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . d d d d d d d . . . . . . 
    . . d d d d d d d d d . . . . . 
    . . d d d d d d d d d . . . . . 
    . . . e e e e e e e . . . . . . 
    . . . e e f e f e e . . . . . . 
    . . . e e f e f e e . . . . . . 
    . . . e e e e e e e . . . . . . 
    . . d d d d d d d d d . . . . . 
    . e d d d d d d d d d e . . . . 
    e . . d d d d d d d . . e . . . 
    e . . 1 2 1 2 1 2 1 . . e . . . 
    e . . 2 1 2 1 2 1 2 . . e . . . 
    . . . 1 2 1 2 1 2 1 . . . . . . 
    . . . 2 1 2 1 2 1 2 . . . . . . 
    . . . . 2 . . . 2 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . b b b b b . . . . . . . 
    . . . . b 2 2 2 b . . . . . . . 
    . . . . b 2 2 2 b . . . . . . . 
    . . . . b b b b b . . . . . . . 
    . . . . b 5 5 5 b . . . . . . . 
    . . . . b f 5 f b . . . . . . . 
    . . . d b f 5 f b d . . . . . . 
    . . d . b 5 5 5 b . d . . . . . 
    . . d . b b b b b . d . . . . . 
    . . d . b 7 7 7 b . d . . . . . 
    . . d . b 7 7 7 b . d . . . . . 
    . . . . b b b b b . . . . . . . 
    . . . . d d d d d . . . . . . . 
    . . . . . d . d . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . f f f f f f f f f . . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . f . . . f . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f 1 f f f . . . . . . 
    . . f f f f 1 f f f f . . . . . 
    . f . f f f 1 f f f . f . . . . 
    . f . f f f 1 f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f 1 f f f . f . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . f . . . f . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f 1 f f f . . . . . . 
    . . . f f 1 f 1 f f . . . . . . 
    . . f f f 1 f 1 f f f . . . . . 
    . f . f f f f 1 f f . f . . . . 
    . f . f f f 1 f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f 1 f f f . f . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . f . . . f . . . . . . . 
    `,
img`
    . . . . . . . 5 . . . . . . . . 
    . . . . 5 . 5 4 . . 5 . . . . . 
    . . 5 . 4 5 4 2 5 5 4 . . . . . 
    . . 4 5 2 4 2 2 4 4 2 5 5 . . . 
    . 5 2 4 2 2 2 2 2 2 2 4 4 5 . . 
    . 4 2 2 2 2 2 2 2 2 2 2 2 4 . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . 2 2 2 1 1 1 1 1 1 2 2 2 2 . . 
    . 2 2 2 1 f 1 1 f 1 2 2 2 2 . . 
    . 4 2 2 1 f 1 1 f 1 2 2 2 4 . . 
    . 4 2 2 1 1 1 1 1 1 2 2 2 4 . . 
    . 4 2 2 2 2 2 2 2 2 2 2 2 4 . . 
    . 4 2 2 2 2 2 2 2 2 2 2 2 4 . . 
    . 4 2 2 2 2 2 2 2 2 2 2 2 4 . . 
    . 4 . 2 2 2 2 2 2 2 2 2 . 4 . . 
    . . . . . 4 . . . 4 . . . . . . 
    `,
img`
    . . . 5 . 5 . 5 . 5 . . . . . . 
    . . . 5 5 5 . 5 5 5 . 5 . . . . 
    . . . 4 4 4 4 4 4 4 4 4 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 1 1 1 1 1 1 2 2 . . . . 
    . . . 2 1 f 1 1 f 1 2 2 . . . . 
    . . 1 2 1 f 1 1 f 1 2 2 1 . . . 
    . 1 . 2 1 1 1 1 1 1 2 2 . 1 . . 
    . 1 . 2 2 2 2 2 2 2 2 2 . 1 . . 
    . 1 . 2 2 2 2 2 2 2 2 2 . 1 . . 
    . . . 2 2 2 2 2 2 2 2 2 . 1 . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . . . 4 . . . 4 . . . . . . 
    `,
img`
    . . . . 5 5 . 5 5 . . . . . . . 
    . . . 5 . 5 5 5 . 5 . . . . . . 
    . . . . . . 5 . . . . . . . . . 
    . . . . e e e e e . . . . . . . 
    . . . e 1 1 1 1 1 e . . . . . . 
    . . . e 1 f 1 f 1 e . . . . . . 
    . . . e 1 f 1 f 1 e . . . . . . 
    . . . e 1 1 1 1 1 e . . . . . . 
    . . 6 e e e e e e e 6 . . . . . 
    . 6 . e e e e e e e . 6 . . . . 
    . 6 . e e e e e e e . 6 . . . . 
    . 6 . e e e e e e e . 6 . . . . 
    . 6 . e e e e e e e . 6 . . . . 
    . . . e e e e e e e . . . . . . 
    . . . e e e e e e e . . . . . . 
    . . . . 6 . . . 6 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . e e 6 e e . . . . . . . 
    . . . e 1 1 1 1 1 e . . . . . . 
    . . . e 1 f 1 f 1 6 . . . . . . 
    . . . e 1 f 1 f 1 e . . . . . . 
    . . . 6 1 1 1 1 1 e . . . . . . 
    . . 6 e e e e e e 6 6 . . . . . 
    . 6 . e e e e e e e . 6 . . . . 
    . 6 . e 6 e e e 6 e . 6 . . . . 
    . 6 . e e e e e e e . 6 . . . . 
    . 6 . 6 e e 6 e e 6 . 6 . . . . 
    . . . b b b b b b b . . . . . . 
    . . . e e e e e e e . . . . . . 
    . . . . 6 . . . 6 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 . . . . . . . . . 
    . . . . . 3 3 3 . . . . . . . . 
    . . . . 3 3 3 3 3 . . . . . . . 
    . . . 3 1 1 1 1 1 3 . . . . . . 
    . . . 3 1 f 1 f 1 3 . . . . . . 
    . . . 3 1 f 1 f 1 3 . . . . . . 
    . . . 3 1 1 1 1 1 3 . . . . . . 
    . . 6 3 3 3 3 3 3 3 6 . . . . . 
    . 6 . 3 3 3 3 3 3 3 . 6 . . . . 
    . 6 . b 3 3 3 3 3 b . 6 . . . . 
    . 6 . b b b b b b b . 6 . . . . 
    . 6 . b b b b b b b . 6 . . b . 
    . . . b b b b b b b b b b b b b 
    . . . b b b b b b b . . . . b . 
    . . . . 6 . . . 6 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 5 . . . . . . . . . 
    . . . . . 5 5 5 . . . . . . . . 
    . . . . 5 5 5 5 5 . . . . . . . 
    . . . 5 1 1 1 1 1 5 . . . . . . 
    . . . 5 1 f 1 f 1 5 . . . . . . 
    . . . 5 1 f 1 f 1 5 . . . . . . 
    . . . 5 1 1 1 1 1 5 . . . . . . 
    . . 6 5 5 5 5 5 5 5 6 . . . . . 
    . 6 . 5 5 5 5 5 5 5 . 6 . . . . 
    . 6 . b 5 5 5 5 5 b . 6 . . . . 
    . 6 . b b b b b b b . 6 . . . . 
    . 6 . b b b b b b b . 6 . . b . 
    . . . b b b b b b b b b b b b b 
    . . . b b b b b b b . . . . b . 
    . . . . 6 . . . 6 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 9 . . . . . . . . . 
    . . . . . 9 9 9 . . . . . . . . 
    . . . . 9 9 9 9 9 . . . . . . . 
    . . . 9 1 1 1 1 1 9 . . . . . . 
    . . . 9 1 f 1 f 1 9 . . . . . . 
    . . . 9 1 f 1 f 1 9 . . . . . . 
    . . . 9 1 1 1 1 1 9 . . . . . . 
    . . 6 9 9 9 9 9 9 9 6 . . . . . 
    . 6 . 9 9 9 9 9 9 9 . 6 . . . . 
    . 6 . b 9 9 9 9 9 b . 6 . . . . 
    . 6 . b b b b b b b . 6 . . . . 
    . 6 . b b b b b b b . 6 . . b . 
    . . . b b b b b b b b b b b b b 
    . . . b b b b b b b . . . . b . 
    . . . . 6 . . . 6 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 9 . . . . . . . . . 
    . . . . . 9 9 9 . . . . . . . . 
    . . . . 9 9 4 9 9 . . . . . . . 
    . . . 9 1 1 1 1 1 9 . . . . . . 
    . . . 9 1 f 1 f 1 7 . . . . . . 
    . . . 9 1 f 1 f 1 9 . . . . . . 
    . . . 2 1 1 1 1 1 9 . . . . . . 
    . . 6 9 9 9 9 9 9 9 6 . . . . . 
    . 6 . 9 5 9 9 4 9 9 . 6 . . . . 
    . 6 . b 9 9 9 9 9 b . 6 . . . . 
    . 6 . b b b b b b b . 6 . . . . 
    . 6 . b b b b b b b . 6 . . b . 
    . . . b b b b b b b b b b b b b 
    . . . b b b b b b b . . . . b . 
    . . . . 6 . . . 6 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 1 . . . . . . . 
    . . . 1 1 1 1 1 1 1 . . . . . . 
    . . . 1 1 1 1 1 1 1 . . . . . . 
    . . . 1 1 1 1 1 1 1 . . . . . . 
    . . . 1 1 1 1 1 1 1 . . . . . . 
    . . . 1 1 1 1 1 1 1 . . . . . . 
    . . 1 1 1 1 1 1 1 1 1 . . . . . 
    . 1 . 1 1 1 1 1 1 1 . 1 . . . . 
    . 1 . 1 1 1 1 1 1 1 . 1 . . . . 
    . 1 . 1 1 1 1 1 1 1 . 1 . . . . 
    . 1 . 1 1 1 1 1 1 1 . 1 . . . . 
    . . . 1 1 1 1 1 1 1 . . . . . . 
    . . . 1 1 1 1 1 1 1 . . . . . . 
    . . . . 1 . . . 1 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 9 9 9 9 9 . . . . . . . 
    . . . 9 9 9 9 9 9 9 . . . . . . 
    . . . 9 9 9 9 9 9 9 . . . . . . 
    . . . 9 9 9 9 9 9 9 . . . . . . 
    . . . 9 9 9 9 9 9 9 . . . . . . 
    . . . 9 9 9 9 9 9 9 . . . . . . 
    . . 9 9 9 9 9 9 9 9 9 . . . . . 
    . 9 . 9 9 9 9 9 9 9 . 9 . . . . 
    . 9 . 9 9 9 9 9 9 9 . 9 . . . . 
    . 9 . 9 9 9 9 9 9 9 . 9 . . . . 
    . 9 . 9 9 9 9 9 9 9 . 9 . . . . 
    . . . 9 9 9 9 9 9 9 . . . . . . 
    . . . 9 9 9 9 9 9 9 . . . . . . 
    . . . . 9 . . . 9 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 7 7 7 7 7 . . . . . . . 
    . . . 7 7 7 7 7 7 7 . . . . . . 
    . . . 7 7 7 7 7 7 7 . . . . . . 
    . . . 7 7 7 7 7 7 7 . . . . . . 
    . . . 7 7 7 7 7 7 7 . . . . . . 
    . . . 7 7 7 7 7 7 7 . . . . . . 
    . . 7 7 7 7 7 7 7 7 7 . . . . . 
    . 7 . 7 7 7 7 7 7 7 . 7 . . . . 
    . 7 . 7 7 7 7 7 7 7 . 7 . . . . 
    . 7 . 7 7 7 7 7 7 7 . 7 . . . . 
    . 7 . 7 7 7 7 7 7 7 . 7 . . . . 
    . . . 7 7 7 7 7 7 7 . . . . . . 
    . . . 7 7 7 7 7 7 7 . . . . . . 
    . . . . 7 . . . 7 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 7 7 7 7 7 . . . . . . . 
    . . . 7 7 7 7 7 7 7 . . . . . . 
    . . . 7 7 7 7 7 7 7 . . . . . . 
    . . . 7 7 7 7 7 7 7 . . . . . . 
    . . . 7 7 7 7 7 7 7 . . . . . . 
    . . . 7 7 7 f 7 7 7 . . . . . . 
    . . 7 7 7 f f 7 7 7 7 . . . . . 
    . 7 . 7 7 7 f 7 7 7 . 7 . . . . 
    . 7 . 7 7 7 f 7 7 7 . 7 . . . . 
    . 7 . 7 7 7 f 7 7 7 . 7 . . . . 
    . 7 . 7 7 f f f 7 7 . 7 . . . . 
    . . . 7 7 7 7 7 7 7 . . . . . . 
    . . . 7 7 7 7 7 7 7 . . . . . . 
    . . . . 7 . . . 7 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . 4 4 4 4 4 4 4 . . . . . . 
    . . . 5 1 1 1 1 1 5 . . . . . . 
    . . . 7 1 f 1 f 1 7 . . . . . . 
    . . . 8 1 f 1 f 1 8 . . . . . . 
    . . . a 1 1 1 1 1 a . . . . . . 
    . . 2 2 2 2 2 2 2 2 2 . . . . . 
    . 4 . 4 4 4 4 4 4 4 . 4 . . . . 
    . 5 . 5 5 5 5 5 5 5 . 5 . . . . 
    . 7 . 7 7 7 7 7 7 7 . 7 . . . . 
    . 8 . 8 8 8 8 8 8 8 . 8 . . . . 
    . . . a a a a a a a . . . . . . 
    . . . 2 2 2 2 2 2 2 . . . . . . 
    . . . . 4 . . . 4 . . . . . . . 
    `,
img`
    . . . . f 1 1 1 f . . . . . . . 
    . . . f f f 1 f f f . . . . . . 
    . . . f f 1 1 1 f f . . . . . . 
    . . f f 1 f f f 1 f f . . . . . 
    . . . e 1 1 1 1 1 e . . . . . . 
    . . . e 1 f 1 f 1 e . . . . . . 
    . . . e 1 f 1 f 1 e . . . . . . 
    . . . e 1 1 1 1 1 e . . . . . . 
    . . e e e e e e e e e . . . . . 
    . e . e e e e e e e . e . . . . 
    . e . b b b b b b b . e . . . . 
    . b . e e e e e e e . e . . . . 
    . b . e e e e e e e . e . . . . 
    b . . e e e e e e e . . . . . . 
    . b . e e e e e e e . . . . . . 
    . . . . f . . . e . . . . . . . 
    `
]
l = 44
list2 = [
tiles.createMap(tiles.createTilemap(hex`64000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000020000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000200000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000002000000000000000000000000000400000000000000000000000000000000010101000001010100000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000010101000000000000000000000004030000000000000000000000000000000002000000000200000000000000000000000101010100000000000000000000000000000000000000000002020202020200000000000000000000000000000000000000000002000000000000020000000000040101010101010101010000010101000000020000000000000001010101010101000002020202000101010000000000000000000000000000000000020000000002000000000000000000000000000000010000000000020000000000000100000000000402020202020202020200000202020000000200000000020000000000000000000002020202020002020200000000000000000000000000000000000200000000020000000002020202020202020200020000000000000000000000000200000000000004020202020202020202000202020200000002000000000200000000000000000002020202020200020202000000000000000000000000000002000002000002000002020202000000000000000000000200000000000002000000000002000000000000040202020202020202020002020202000000000000000002000002020202020202020202020202020202020000000000000000000000000000020000020000020000000000000000000000000000000002000002020202020202020200020000000000000402020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020200000000000200000000000000020202020202020202020202020202020202020202020202020202020202`, img`
    ...........................................................2.........................2..............
    ...........................................................2.........................2..............
    ...........................................................2.........................2..............
    ................222..222...................................2.........................222............
    .................2....2...........2222.....................222222.....................2......2......
    222222222..222...2.......2222222..2222.222.................2....2...............2.....2......2......
    222222222..222...2....2..........22222.222.................2....2....222222222.2............2.......
    222222222.2222...2....2.........222222.222..............2..2..2..2222..........2......2.....2.......
    222222222.2222........2..22222222222222222..............2..2..2................2..222222222.2.......
    222222222222222222222222222222222222222222222222222222222.....2.......222222222222222222222222222222
    `, [myTiles.transparency16,myTiles.tile3,myTiles.tile5,myTiles.tile6,myTiles.tile7], TileScale.Sixteen)),
tiles.createMap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060606060606060606060606060606060101010101010101010101010101010100000000000000000000000000000000000000000000000000000000000000000606060606060606060606060606060603030303030303030303030303030303000000000000000000000000000000000000000000000000000000000000000006060606060606060606060606060606020202020202020202020202020202020000000000000000000000000000000005050505050505050505050505050505`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile9,myTiles.tile10], TileScale.Sixteen)),
tiles.createMap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16], TileScale.Sixteen)),
tiles.createMap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16], TileScale.Sixteen)),
tiles.createMap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16], TileScale.Sixteen)),
tiles.createMap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16], TileScale.Sixteen))
]
player_quofid += 1
tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000002010300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile17], TileScale.Sixteen)))
controller.moveSprite(mySprite)
look = 0
rond = 1
player_quofid = 1
spetate = false
let sprite_list = sprites.allOfKind(SpriteKind.npc)
npclist = []
game.onUpdateInterval(1000, function () {
    for (let value of tiles.getTilesByType(myTiles.tile21)) {
        spiner = sprites.create(myTiles.tile21, SpriteKind.spier)
        animation.runImageAnimation(
        spiner,
        [img`
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ...............3..............
            ..............3...............
            .............3................
            ............3.................
            ...........3..................
            ..........3...................
            .........3....................
            ........3.....................
            .......3......................
            ......3.......................
            .....3........................
            ....3.........................
            ...3..........................
            ..3...........................
            .3............................
            `,img`
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ...............3..............
            ...............3..............
            ...............3..............
            ...............3..............
            ...............3..............
            ...............3..............
            ...............3..............
            ...............3..............
            ...............3..............
            ...............3..............
            ...............3..............
            ...............3..............
            ...............3..............
            ...............3..............
            ...............3..............
            `,img`
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ...............3..............
            ................3.............
            .................3............
            ..................3...........
            ...................3..........
            ....................3.........
            .....................3........
            ......................3.......
            .......................3......
            ........................3.....
            .........................3....
            ..........................3...
            ...........................3..
            ............................3.
            .............................3
            `,img`
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ...............333333333333333
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            `,img`
            ..............................
            .............................3
            ............................3.
            ...........................3..
            ..........................3...
            .........................3....
            ........................3.....
            .......................3......
            ......................3.......
            .....................3........
            ....................3.........
            ...................3..........
            ..................3...........
            .................3............
            ................3.............
            ...............3..............
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            `,img`
            ................3.............
            ................3.............
            ................3.............
            ................3.............
            ................3.............
            ................3.............
            ................3.............
            ................3.............
            ................3.............
            ................3.............
            ................3.............
            ................3.............
            ................3.............
            ................3.............
            ................3.............
            ................3.............
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            `,img`
            3.............................
            .3............................
            ..3...........................
            ...3..........................
            ....3.........................
            .....3........................
            ......3.......................
            .......3......................
            ........3.....................
            .........3....................
            ..........3...................
            ...........3..................
            ............3.................
            .............3................
            ..............3...............
            ...............3..............
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            `,img`
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            3333333333333333..............
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            `],
        100,
        false
        )
        tiles.placeOnTile(spiner, value)
    }
})
forever(function () {
    if (rond == 1 || (rond == 2 || rond == 3)) {
        list2 = [
        tiles.createMap(tiles.createTilemap(hex`64000b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101000002000202000200000000000000000000000000000000000000020200000000020000020000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000002000000000000000000000000000000000000020002000000000200000000000000000400000000000000000000000000000000010101000001010100000000000000000000000000000000000000000101010100010101000000000000000200000000020000000000000000000000000000000000020000010102020202000000000000000004030000000000000000000000050000000002000000000200000000000000000000000101010100000000000000000000000000000000000000000002020202020200000000000000000000000000000000000000000002000000000000020000000000040101010101010101010000010101000000020000000000000000010101010100000002020202000101010000000000000000000000000000000000020000000002000000000000000000000000000000010000000000020000000000000100000000000402020102020202020200000202020000000200000000000000000000000000000002020202020002020200000000000000000000000000000000000200000000020000000002020202020202020200020000000000000000000000000200000000000004020202020202020202000202020200000002000000000200000000000000000002020202020200020202000000000000000000000000000002000002000002000002020202000000000000000000000200000000000000000000000002000000000000040202020202020202020002020202000000000000000002000002020202020202020202020202020202020000000000000000000000000000020000020000020000000000000000000000000000000002000002020202020202020202010000000000000202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020200000000000200000000000000020202020202020202020202020202020202020202020202020202020200`, img`
            .............................................................................................2......
            .............................................................................................2......
            ......................................................222..2.22.2...................22....2..2......
            ...........................................................2....2..................2.2....2.........
            ................222..222....................2222.222.......2....2.................2..222222.........
            .................2....2...........2222.....................222222.....................2......2......
            222222222..222...2........22222...2222.222.................2....2...............2.....2......2......
            222222222..222...2...............22222.222.................2....2....222222222.2............2.......
            222222222.2222...2....2.........222222.222..............2..2..2..2222..........2............2.......
            222222222.2222........2..22222222222222222..............2..2..2................2..22222222222......2
            222222222222222222222222222222222222222222222222222222222.....2.......22222222222222222222222222222.
            `, [myTiles.transparency16,myTiles.tile3,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile13], TileScale.Sixteen)),
        tiles.createMap(tiles.createTilemap(hex`10003c00000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000606060606060606060606060606060601010101010101010101010101010101000000000000000000000000000000000000000000000000000000000000000006060606060606060606060606060606030303030303030303030303030303030000000000000000000000000000000000000000000000000000000000000000060606060606060606060606060606060202020202020202020202020202020200000000000000000000000000000000000000000000000000000000000000000606060606060606060606060606060603030303030303030303030303030303000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060606060606060606060606060606060101010101010101010101010101010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006060606060606060606060606060606020202020202020202020202020202020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060606060606060606060606060606060303030303030303030303030303030300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006060606060606060606060606060606010101010101010101010101010101010000000000000000000000000000000000000000000000000000000000000000060606060606060606060606060606060202020202020202020202020202020200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006060606060606060606060606060606030303030303030303030303030303030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000606060606060606060606060606060601010101010101010101010101010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005050505050505050505050505050505`, img`
            ................
            ................
            ................
            ................
            ................
            2222222222222222
            ................
            ................
            ................
            2222222222222222
            ................
            ................
            ................
            2222222222222222
            ................
            ................
            ................
            2222222222222222
            ................
            ................
            ................
            ................
            2222222222222222
            ................
            ................
            ................
            ................
            2222222222222222
            ................
            ................
            ................
            ................
            ................
            ................
            2222222222222222
            ................
            ................
            ................
            ................
            2222222222222222
            ................
            ................
            ................
            2222222222222222
            ................
            ................
            ................
            ................
            2222222222222222
            ................
            ................
            ................
            ................
            2222222222222222
            ................
            ................
            ................
            ................
            ................
            ................
            `, [myTiles.transparency16,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile9,myTiles.tile10], TileScale.Sixteen)),
        tiles.createMap(tiles.createTilemap(hex`3c001000000000000000000000000402020202020402020202020204020202020202020202020202040202020202020202040202020202020400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000010104000000040000000000000400000000000000000004000000000000000000000004000000000004010100000000000000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303`, img`
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ..........2........................................2........
            .........222...2......2.........2...........2.....222.......
            ........222222222222222222222222222222222222222222222222....
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            `, [myTiles.transparency16,myTiles.tile3,myTiles.tile6,myTiles.tile9,myTiles.tile12], TileScale.Sixteen)),
        tiles.createMap(tiles.createTilemap(hex`3200110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040300000000000000000500000000000000000000000000000000000000000000000000000000000000000000000000000004020202020202020202020200020200000000000000000000000000000000000000000000020202020202020202020202020200000000000000000000000000000000000000000101010000000000000000000000000202020202020202020202020202020000000000000000000000000000000001010100000000000000000000000000000002020202020202020202020202020202030000000000000000000500000000000000000000000000000000000000000000020202020202020202020202020202020202020202020202020202020002020000000000000000000000000000000000000202020202020202020202020202020202020202020202020202020202000000000000000000010101000000000000000002020202020202020202020202020202020202000000000000000000000000000000000106010000000000000000000000020202020202020202020202020202020202020200000000000000000000000000000000000000000000000000000000000202020202020202020202020202020202020202020000000000000000000000000000000000000000000000000000000002020202020202020202020202020202020202020202030000000000000000000000000000000000000001010100000000020202020202020202020202020202020202020202020202020202020202020202020002020000000000000000000000000202020202020202020202020202020202020202020202020202020202020202020202000000000001010100000000000002020202020202020202020202020202020202020202020202000000000000000000000000000000000000000000000000020202020202020202020202020202020202020202020202020203000000000000000000000000000000000000000000000202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202`, img`
            ..................................................
            ..................................................
            22222222222.22......................22222222222222
            ....................222............222222222222222
            ................222...............2222222222222222
            .................................22222222222222222
            22222222222.22..................222222222222222222
            22222222222.........222........2222222222222222222
            ................222...........22222222222222222222
            .............................222222222222222222222
            ............................2222222222222222222222
            ....................222....22222222222222222222222
            22222222222.22............222222222222222222222222
            22222222222.....222......2222222222222222222222222
            ........................22222222222222222222222222
            .......................222222222222222222222222222
            22222222222222222222222222222222222222222222222222
            `, [myTiles.transparency16,myTiles.tile3,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile13,myTiles.tile12], TileScale.Sixteen)),
        tiles.createMap(tiles.createTilemap(hex`32001200000000000000000000000006000000000000000000000000000000000000000000000000000000000000000000000000040400000000000000000000000600000000000000000000000000000000000000000000000000000000000000000000000004040200000000000003000000060000000000000000000000000000000000000000000000000000000000000000000000000404010101010101010100000006000000000000000000000000000606060606060606060606060606060606060101010101010101010101010101000000000600000000000000000000000000060606060600000000000000000000000000000000000004040101010101010000000000060000000000000000000000000606060606000000000000000000000000000000000000000404010101010100000000000006000000000000000000000000060606060000000000000000000000000000000000000000040401010100000000000000000600000000000000000000000606060600000000000001010101010101010101010101010101010101000000000000000000060000000000000000000000060606000000000000010101010101010101010101010101010101010000000000000000000006000000000000000000000606060000000000000101010101010101010101010101010101010100000000000000000000000000000000000000000006060600000000000001010101010101010101010101010101010101010000000000000000000000000000000000000000000606000000000000010101010101010101010101010101010101010101000000000000000000000707070707070707070706060000000000000101010101010101010101010101010101010101010107070707070707070707050505050505050505050600000000000001010101010101010101010101010101010101010101010505050505050505050500000000000000000005000000000000010101010101010101010101010101010101010101010101000000000000000000000000000000000000000000000000000101010101010101010101010101010101010101010101010100000000000000000000000000000000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
            ...........2......................................
            ...........2......................................
            ...........2......................................
            22222222...2.............2222222222222222222222222
            2222222....2.............22222....................
            222222.....2............22222.....................
            22222......2............2222......................
            222........2...........2222......22222222222222222
            22.........2...........222......222222222222222222
            2..........2..........222......2222222222222222222
            .....................222......22222222222222222222
            .....................22......222222222222222222222
            ....................22......2222222222222222222222
            ..........22222222222......22222222222222222222222
            2222222222.........2......222222222222222222222222
            .........................2222222222222222222222222
            ........................22222222222222222222222222
            22222222222222222222222222222222222222222222222222
            `, [myTiles.transparency16,myTiles.tile3,myTiles.tile6,myTiles.tile13,myTiles.tile7,myTiles.tile4,myTiles.tile5,myTiles.tile10], TileScale.Sixteen)),
        tiles.createMap(tiles.createTilemap(hex`6400100006000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004010000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040100000000000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050101010101000000000000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000501010101010000000000000000000000000000000000000000000000000000000000000000000000000600010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000101010101010001010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303`, img`
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ...............................................................2....................................
            ...............................................................2....................................
            ...........................................................22222....................................
            ...........................................................22222....................................
            ..22222222222222222222222222222222222222222222222222222222222222....................................
            ................................222222.22...........................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            `, [myTiles.transparency16,myTiles.tile3,myTiles.tile6,myTiles.tile9,myTiles.tile14,myTiles.tile15,myTiles.tile16], TileScale.Sixteen)),
        tiles.createMap(tiles.createTilemap(hex`6400320002020202020202020202000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020202020202020202000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020202020202020202000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020202020202020202000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020202020202020202000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101010101010101000000000a000000000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010101010101010101010101010000000000000000000000000000000000000000000000000000000404040404090905090907070707070707070909090606060606060606060900000000000000000000000000000000000000000000000000000001010101010101010101010101010101010101010000000000000000000000000000000005050505050904040404040000050000070707070707070700000006060606060606060609000000000100000000000000000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101000000000000050505050500040404040400000500000707070707070707000000060606060606060606090004000101010000050505050505000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101090505050505000404040404000005000007070707070707070000000606060606060606060900000001010100000505050505050000000000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010005050505050004040404040000050000070707070707070700000006060606060606060601010101010101000005050505050500000000000000000000000000010101010101010101010101010101010101010101010101010101010101010101010100050505050500000000000000000000000707070707070707000000000006060606060606010101010101010000050505050505000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101000000000000000000000000000000000000000000000000000000000000060606060606010101010101010100000005050505050000000000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010000000000000000000000000000000000000000000000000000000000000000000000010101010101010101000000000000000000040404040404040404040404010101010101010101010101010101010101010101010101010101010101010101010100000000000000000000000003010300000000000000000000000000000000000000000101010101010101010000000000000000000404040404040404040404040101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010909090901010101010101010100000000000000000004040404040404040404040401010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000010101010101010101000000000000000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000101010101010101010000000000000000000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000001010101010101010100000000000000000000000000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000010101010101010101000000000000000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000101010101010101010000000000000000000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000001010101010101010100000000000000000000000000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010103000000010101010101010101000000000000000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000101010101010101010000000000000000000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000001010101010101010100000000000000000000000000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000010101010101010101000000000000000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000101010101010101010000000000000000000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000001010101010101010100040404040404040404040404040404040400000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000010101010101010101000404040404040404040404040404040404000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000101010101010101010004040404040404040404040404040404040000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000001010101010101010100040404040404040404040404040404040400000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000010101010101010101000101010101010101010101010101010101000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010001000001010101010101010001010101010101010101010101010101010000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000010101010101010100010101010101010101010101010101010100000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000101010101010101000101010101010101010101010101010101000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100010001010101010101010001010101010101010101010101010101000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000010101010101010100010101010101010101010101010101010000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000100000101010101010101000101010101010101010101010101010100000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000001010101010101010001010101010101010101010101010101000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000100010101010101010100010101010101010101010101010101010000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000101010101010101000101010101010101010101010101010100000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010001000001010101010101010001010101010101010101010101010101000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000010101010101010100010101010101010101010101010101010000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000101010101010101000101010101010101010101010101010100000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000000000000000000090000000000000000000000000000000909080808080101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000000000000000000900000000000000000000000000000000090808080801010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000000000000000009000000000000000000000000000000000908080808010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            2222222222.......................................2..................................................
            222222222222222...........................22222..2..22222222...222222222............................
            22222222222222222222................22222.22222..2..22222222...222222222.....2......................
            222222222222222222222222222222......22222.22222..2..22222222...222222222..2.222..222222.............
            22222222222222222222222222222222222.22222.22222..2..22222222...222222222....222..222222.............
            22222222222222222222222222222222222.22222.22222..2..22222222...2222222222222222..222222.............
            22222222222222222222222222222222222.22222...........22222222.....22222222222222..222222.............
            22222222222222222222222222222222222..............................22222222222222...22222.............
            22222222222222222222222222222222222...................................222222222.........222222222222
            22222222222222222222222222222222222............222....................222222222.........222222222222
            222222222222222222222222222222222222222222222222222222222222222222....222222222.........222222222222
            222222222222222222222222222222222222222222222222222222222222222222....222222222.....................
            222222222222222222222222222222222222222222222222222222222222222222....222222222.....................
            222222222222222222222222222222222222222222222222222222222222222222....222222222.....................
            222222222222222222222222222222222222222222222222222222222222222222....222222222.....................
            222222222222222222222222222222222222222222222222222222222222222222....222222222.....................
            222222222222222222222222222222222222222222222222222222222222222222....222222222.....................
            222222222222222222222222222222222222222222222222222222222222222222....222222222.....................
            2222222222222222222222222222222222222222222222222222222222222222222...222222222.....................
            2222222222222222222222222222222222222222222222222222222222222222222...222222222.....................
            2222222222222222222222222222222222222222222222222222222222222222222...222222222.....................
            2222222222222222222222222222222222222222222222222222222222222222222...222222222.....................
            2222222222222222222222222222222222222222222222222222222222222222222...222222222.22222222222222222...
            2222222222222222222222222222222222222222222222222222222222222222222...222222222.22222222222222222...
            2222222222222222222222222222222222222222222222222222222222222222222...222222222.22222222222222222...
            222222222222222222222222222222222222222222222222222222222222222222....222222222.22222222222222222...
            2222222222222222222222222222222222222222222222222222222222222222222...222222222.22222222222222222...
            2222222222222222222222222222222222222222222222222222222222222222222.2..22222222.22222222222222222...
            2222222222222222222222222222222222222222222222222222222222222222222....22222222.22222222222222222...
            2222222222222222222222222222222222222222222222222222222222222222222....22222222.22222222222222222...
            22222222222222222222222222222222222222222222222222222222222222222222.2.22222222.2222222222222222....
            2222222222222222222222222222222222222222222222222222222222222222222....22222222.2222222222222222....
            2222222222222222222222222222222222222222222222222222222222222222222.2..22222222.2222222222222222....
            2222222222222222222222222222222222222222222222222222222222222222222....22222222.2222222222222222....
            22222222222222222222222222222222222222222222222222222222222222222222.2.22222222.2222222222222222....
            2222222222222222222222222222222222222222222222222222222222222222222....22222222.2222222222222222....
            2222222222222222222222222222222222222222222222222222222222222222222.2..22222222.2222222222222222....
            2222222222222222222222222222222222222222222222222222222222222222222....22222222.2222222222222222....
            2222222222222222222222222222222222222222222222222222222222222222222....22222222.2222222222222222....
            2222222222222222222222222222222222222222222222222222222222222222222.................................
            2222222222222222222222222222222222222222222222222222222222222222222.................................
            2222222222222222222222222222222222222222222222222222222222222222222.................................
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            `, [myTiles.transparency16,myTiles.tile3,myTiles.tile6,myTiles.tile12,myTiles.tile4,myTiles.tile5,myTiles.tile18,myTiles.tile19,myTiles.tile7,myTiles.tile20,myTiles.tile13], TileScale.Sixteen)),
        tiles.createMap(tiles.createTilemap(hex`640050000101010101010101010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101010101010101010101010101010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101010101010101010101010101010101010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010101010101010101010101010101010101010101010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000505050505050500000101010101010101010101010101010101010101010101010101010101010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000505050505050005050500000001010101010101010101010101010101010101010101010101010101010101010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005050505050505050505000000000001010101010101010101010101010101010101010101010101010101010101010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101010105050505000000000006000000040000010101010101010101010101010101010101010101010101010101010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010101000505050500000000060000000400000000000000000000000101010101010101010101010101010101010101010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101010000000005050000000600000004000000000000000000000000000000040404000101010101010101010101010101010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101010101010000000000000006000000040000000000000000000000000000000404040000000001010101010101010101010101010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010101010101010000000000060000000400000000000000000000000000000004040400000000000000010101010101010101010101010000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101010101010101010000000600000004000101010101010000000003000000040404000000000000000001010101010101010101010101010000000000000000000000000000000000000000000000000000000000000000000000000000000000010101010101010101010101000006000000040001010101010100000000000000000404040000000000000000000001010101010101010101010101000000000000000000000000000000000000000000000000000000000000000000000000000000000101010101010101010101010100060000000400010101010101000000000300000004040400000000000000000000000001010101010101010101010100000000000000000000000000000000000000000000000000000000000000000000000000000001010101010101010101010101010100000004000000000000000000000000000000040404000000000000000000000000000001010101010101010101000000000000000000000000000000000000000000000000000000000000000000000000000000010101010101010101010101010101010000040000000100000000000100000000000404040000010000000000000000000000000001010101010101010101010000000000000000000000000000000000000000000000000000000000000000000000000101010101010101010101010101010101010100000000000000000000000000000004040400000000000000000000000000000000000101010101010101010101000000000000000000000000000000000000000000000000000000000000000000000001010101010101010101010101010101010101000000000000000001010101010000040404000000000000000000000000000000000000010101010101010101010100000000000000000000000000000000000000000000000000000000000000000000010101010101010101010101010101010101010100000000000000010101010100000404040000000000000000000000000000000004040401010101010101010101010000000000000000000000000000000000000000000000000000000000000000000101010101010101010101010101010101010101010101000000000101010101000004040400010000000000000000010101000000040404040101010101010101010101000000000000000000000000000000000000000000000000000000000000000001010101010101010101010101010101010101010101010101010001010101010000040404000000000000000000000101010000000404040400000101010101010101010100000000000000000000000000000000000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101010100000404040000000101010101000001010100000004040404000000010101010101010101010100000000000000000000000000000000000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010004040400000001010101010000000000000000040404040000000001010101010101010101000000000000000000000000000000000000000000000000000000000001010101010101010101010101010101010101010101010101010101010101010100040404000000010101010100000000010000000404040000000000000101010101010101010100000000000000000000000000000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101010101000404040000000101010101000000000000000004040400000000000001010101010101010101010000000000000000000000000000000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000000000000040404000000000000010101010101010101010101000000000000000000000000000000000000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000000000000000404040000000000000101010101010101010101010100000000000000000000000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000000000404040400000000000001010101010101010101010101010000000000000000000000000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000000004040404000001000000010101010100010101010101010100000000000000000000000000000000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000040404000000000000000101010101000001010101010101010100000000000000000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000404040000000000000001010101010000000101010101010101000000000000000000000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010104040400000001000000010101010100000000010101010101010100000000000000000000000000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101040404000000000000000101010101000000000101010101010101010000000000000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000000000000000000000000000010101010101010101000000000000000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000101010000000000000001000001010101010101010100000000000000000000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010001010100000001000000000000000101010101010101010100000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000000000000000001010101010101010101000000000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000808080808080808080808000101010101010101010101000000000000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010107070707070707070707070707010101010101010101010100000000000000000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000000000000000000000000010101010101010101010000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000000000000000000000000001010101010101010101000000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000000000000000000000000000101010101010101010100000000000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000010000010000000100000000010101010101010101010000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000000000000000000000000000010101010101010101000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000000000000000000000000000001010101010101010100000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000000000000000000000000000000101010101010101010000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010008080808080808080800000000000000010101010101010101000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101070707070707070707000808080808080808010101010101010000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000000000000070707070707070707070101010101010101000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000000000000000000000000000000000010101010101010000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000000000000000000000000000101010101010101010000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000000000000000000000000000000000010101010101000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000000000000000101010000000000000101010101010001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000001010100000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000010101000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000000000000010000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000001000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000000000000000000040000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000000000000000402020202010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000000000004020202020101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000000000040202020201010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000003030402020202010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000000004020202020101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000000040202020201010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000000402020202010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000004020202020101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000040202020201010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000402020202010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010104020202020101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010202020201010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010102020202010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101020202020101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
            2222222222..........................................................................................
            22222222222222222...................................................................................
            22222222222222222222................................................................................
            2222222222222222222222222...........................................................................
            22222222222222222222222222222222222.................................................................
            ..........22222222222222222222222222222222..........................................................
            .............22222222222222222222222222222222.......................................................
            ...............222222222222222222222222222222222....................................................
            22222................2222222222222222222222222222...................................................
            22222.........................222222222222222222222.................................................
            22222.................................222222222222222...............................................
            2222222..................................22222222222222.............................................
            222222222...................................2222222222222...........................................
            22222222222.........222222...................22222222222222.........................................
            222222222222........222222.....................2222222222222........................................
            2222222222222.......222222.......................222222222222.......................................
            222222222222222....................................2222222222.......................................
            2222222222222222......2.....2..........2.............22222222222....................................
            2222222222222222222...................................22222222222...................................
            2222222222222222222........22222.......................22222222222..................................
            22222222222222222222.......22222........................22222222222.................................
            22222222222222222222222....22222......2........222.......22222222222................................
            22222222222222222222222222.22222...............222.........2222222222...............................
            22222222222222222222222222222222........22222..222..........22222222222.............................
            222222222222222222222222222222222.......22222................2222222222.............................
            222222222222222222222222222222222.......22222....2............2222222222............................
            222222222222222222222222222222222.......22222.................22222222222...........................
            222222222222222222222222222222222222222222222.................222222222222..........................
            22222222222222222222222222222222222222222222..................2222222222222.........................
            222222222222222222222222222222222222222222222.................22222222222222........................
            2222222222222222222222222222222222222222222222............2...22222.22222222........................
            222222222222222222222222222222222222222222222222..............22222..222222222......................
            2222222222222222222222222222222222222222222222222.............22222...22222222......................
            2222222222222222222222222222222222222222222222222222......2...22222....22222222.....................
            22222222222222222222222222222222222222222222222222222.........22222....222222222....................
            22222222222222222222222222222222222222222222222222222222................222222222...................
            2222222222222222222222222222222222222222222222222222222222..222.......2..222222222..................
            22222222222222222222222222222222222222222222222222222222222.222...2.......2222222222................
            222222222222222222222222222222222222222222222222222222222222222...........2222222222................
            2222222222222222222222222222222222222222222222222222222222222..............22222222222..............
            222222222222222222222222222222222222222222222222222222222222222222222222222222222222222.............
            222222222222222222222222222222222222222222222222222222222222222...............2222222222............
            2222222222222222222222222222222222222222222222222222222222222222...............2222222222...........
            22222222222222222222222222222222222222222222222222222222222222222...............2222222222..........
            222222222222222222222222222222222222222222222222222222222222222222...2..2...2....2222222222.........
            2222222222222222222222222222222222222222222222222222222222222222222................222222222........
            2222222222222222222222222222222222222222222222222222222222222222222.................222222222.......
            22222222222222222222222222222222222222222222222222222222222222222222.................222222222......
            222222222222222222222222222222222222222222222222222222222222222222222.................222222222.....
            2222222222222222222222222222222222222222222222222222222222222222222222222222222........22222222.....
            2222222222222222222222222222222222222222222222222222222222222222222222........222222222222222222....
            2222222222222222222222222222222222222222222222222222222222222222222222...................2222222....
            22222222222222222222222222222222222222222222222222222222222222222222222222...............222222222..
            22222222222222222222222222222222222222222222222222222222222222222222222222...................222222.
            22222222222222222222222222222222222222222222222222222222222222222222222222..........222......222222.
            2222222222222222222222222222222222222222222222222222222222222222222222222222222.....222......2222222
            22222222222222222222222222222222222222222222222222222222222222222222222222222222....222........22222
            222222222222222222222222222222222222222222222222222222222222222222222222222222222........2.....22222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222.............22222
            22222222222222222222222222222222222222222222222222222222222222222222222222222222222...2........22222
            222222222222222222222222222222222222222222222222222222222222222222222222222222222222................
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222...............
            222222222222222222222222222222222222222222222222222222222222222222222222222222222222222.............
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222............
            22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222...........
            22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222...........
            222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222..........
            222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222..........
            22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222........
            222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222.......
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222......
            22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222.....
            222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222....
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222...
            22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222..
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            `, [myTiles.transparency16,myTiles.tile3,myTiles.tile7,myTiles.tile12,myTiles.tile20,myTiles.tile6,myTiles.tile13,myTiles.tile4,myTiles.tile10], TileScale.Sixteen)),
        tiles.createMap(tiles.createTilemap(hex`2000200005050505030505050305050305050505050505050505050505050505050505050101010101010101010101010101010101010101010101010101010101010101050505050505050505050505050505050505050505050505050505050505050501010101010101010101010101010101010101010101010101010101010101010000000000000000000000000000000900000000000000000000000000000000050505050505050505050505050505050505050505050505050505050505050501010101010101010101010101010101010101010101010101010101010101010000000000000000000000000000000000000000000000000000000000000000050505050505050505050505050505050505050505050505050505050505050501010101010101010101010101010101010101010101010101010101010101010000000000000000000000000000000000000000000000000000000000000000050505050505050505050505050505050505050505050505050505050505050501010101010101010101010101010101010101010101010101010101010101010000000000000000000000000000000000000000000000000000000000000000050505050505050505050505050505050505050505050505050505050505050501010101010101010101010101010101010101010101010101010101010101010808080808080808080808080808080808080808080808080808080808080808000005000000000005000000000000000000000000000000000000000800050000000200000000000100000000000000000000050000000000000000000002000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000500000000000000000000000005000000000500000000000000000000000000010000000000000000000000000100000000010000000000000005000000000000000000000500000000000000000000000000000000050000000100000000000000000000010005000000000000000006000000060001000000000000000000000000000000000700000000000000000000000000000000000000000000050000000000000000050000000000050000000000000000000000000000000001000000000606000007000000000001000000000005050505050505050505050505050505050505050505050505050505050505050707070707070707070707070707070707070707070707070707070707070707000000000000000000000000000000000000000000000000000000000000000004040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404`, img`
            ................................
            22222222222222222222222222222222
            ................................
            22222222222222222222222222222222
            ................................
            ................................
            22222222222222222222222222222222
            ................................
            ................................
            22222222222222222222222222222222
            ................................
            ................................
            22222222222222222222222222222222
            ................................
            ................................
            22222222222222222222222222222222
            ................................
            ................................
            ..2.....2.....................2.
            ...................2............
            ................................
            .............2............2....2
            ................................
            .......2..........2.............
            ...2................2...........
            ................................
            ...........2........2.....2.....
            ................................
            22222222222222222222222222222222
            ................................
            ................................
            ................................
            `, [myTiles.transparency16,myTiles.tile3,myTiles.tile4,myTiles.tile6,myTiles.tile9,myTiles.tile10,myTiles.tile12,myTiles.tile18,myTiles.tile20,myTiles.tile13], TileScale.Sixteen)),
        tiles.createMap(tiles.createTilemap(hex`320010000000000000000000000000000000000000060600000000000000000000000600000000000000000000000000000000000004000000000000000000000000000000000006060000000000000000000000060000000000000000000000000000000000000400000000000000000000000000000000000606000000000000000000000006000000000000000000000000000000000000040000000000000000000000000000000000060600000000000000000000000600000000000000000000000000000000000004000000000000000000000000000000000006060000000000000000000000060000000000000000000000000000000000000400000000000000000000000000000000000606000000000000000000000006000606060606000000000000000000000000040000000000000000000000000000000000060600000000000000000000000606060606060606060606060606060606060604030000000000000000000000000000000006060000000000000000000000060606010606060606060606060606060606060403000000000000000000000000000000000606000000000000000000000006060000000001000000000100000000000000040300000000000000000000000000000000060600000600000000000000000606000000000000000000000000000100000004000000000000000000000000000000000006060000060000000000000000000000000000010000000001000000000000000400000000000000000000000000000000050000000006060606060606060606060606060606060606060606060606060606040202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
            .................22...........2...................
            .................22...........2...................
            .................22...........2...................
            .................22...........2...................
            .................22...........2...................
            .................22...........2.22222.............
            .................22...........2222222222222222222.
            .................22...........2222222222222222222.
            .................22...........22..................
            .................22..2........22..................
            .................2...2............................
            .....................2222222222222222222222222222.
            22222222222222222222222222222222222222222222222222
            ..................................................
            ..................................................
            ..................................................
            `, [myTiles.transparency16,myTiles.tile21,myTiles.tile3,myTiles.tile6,myTiles.tile7,myTiles.tile13,myTiles.tile18], TileScale.Sixteen)),
        tiles.createMap(tiles.createTilemap(hex`2000200000000000000000000000000000010101010101010101010101010101010101010000000000000000000000000001010101010101010101010101010101010101000000000000000000000000000101010101010101010101010101010101010100000000000000000000000000010101010101010101010101010101010101010000000000000000000000000001010101010101010101010101010101010101000000000000000000000000000101010101010101010101010101010101010100000000000000000000000000010101010101010101010101010101010101010000000000000100000000000001010101010101010101010101010101010101010100000000010000000000000101010101010101010101010101010101010101010100000001000000000000010101010101010101010101010101010101010000010101010101010101010101010101010101010101010101010101010101020001010101010101010101010101010101010101010101010101010101010600000101010101010101010101010101010101010101010101010101010506060000010101010101010101010101010101010101010101010101010000050606040001010101010101010101010101010101010101010101010000000005060600000101010101010101010101010101010101010101010000000303000506060000010101010101010101010101010101010101010000000000000000050601000001010101010101010101010101010101010000000000000000000005010100000101010101010101010101010101010000000000000000000000000101010000010101010101010101010101010000000000000303000000000001010101000001010101010101010101010000000000000000000000000000010101010100000101010101010101010000000303000000000000000000000101010101010000010101010101010000000000000000000000000000000001010101010101000001010101010000000000000001010101010101010101010101010101010105050101010000000000000000010101010101010101010101010101010101010000010000000000000000000101010101010101010101010101010101010101000005000000000000000001010101010101010101010101010101010101010100000500000000000000010101010101010101010101010101010101010101010000050000000000000101010101010101010101010101010101010101010101000005000000000001010101010101010101010101010101010101010101010100000500000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
            .............2222222222222222222
            .............2222222222222222222
            .............2222222222222222222
            .............2222222222222222222
            .............2222222222222222222
            .............2222222222222222222
            .............2222222222222222222
            ......2......2222222222222222222
            22....2......2222222222222222222
            222...2......2222222222222222222
            ..222222222222222222222222222222
            ..22222222222222222222222222222.
            ..222222222222222222222222222...
            ..2222222222222222222222222.....
            ..22222222222222222222222.......
            ..222222222222222222222.........
            ..2222222222222222222..........2
            ..22222222222222222...........22
            ..222222222222222............222
            ..2222222222222.............2222
            ..22222222222..............22222
            ..222222222...............222222
            ..2222222................2222222
            ..22222.......222222222222222222
            ..222........2222222222222222222
            ..2.........22222222222222222222
            ...........222222222222222222222
            ..........2222222222222222222222
            .........22222222222222222222222
            ........222222222222222222222222
            .......2222222222222222222222222
            22222222222222222222222222222222
            `, [myTiles.transparency16,myTiles.tile3,myTiles.tile6,myTiles.tile12,myTiles.tile13,myTiles.tile20,myTiles.tile22], TileScale.Sixteen))
        ]
    }
})
forever(function () {
	
})
forever(function () {
    if (spetate2 == 1 && (!(sprite_list.length <= 0) && controller.A.isPressed())) {
        scene.cameraFollowSprite(sprite_list.pop())
        pause(200)
    } else {
        sprite_list = sprites.allOfKind(SpriteKind.npc)
    }
})
forever(function () {
    if (leve2 == 0) {
        for (let value of sprites.allOfKind(SpriteKind.npc)) {
            if (value.isHittingTile(CollisionDirection.Bottom)) {
                if (value.isHittingTile(CollisionDirection.Left)) {
                    value.vy += -100
                } else if (value.isHittingTile(CollisionDirection.Right)) {
                    value.vy += -100
                }
            }
        }
    } else if (leve2 >= 2) {
        for (let value of sprites.allOfKind(SpriteKind.npc)) {
            if (value.isHittingTile(CollisionDirection.Bottom)) {
                if (value.isHittingTile(CollisionDirection.Left)) {
                    value.vy += -100
                } else if (value.isHittingTile(CollisionDirection.Right)) {
                    value.vy += -100
                }
            }
        }
    }
})
forever(function () {
    pause(2000)
    for (let value of tiles.getTilesByType(myTiles.tile15)) {
        mySprite2 = sprites.create(myTiles.tile15, SpriteKind.Enemy)
        mySprite2.vx += -60
        tiles.placeOnTile(mySprite2, value)
    }
    for (let value of tiles.getTilesByType(myTiles.tile14)) {
        mySprite2 = sprites.create(myTiles.tile14, SpriteKind.Enemy)
        mySprite2.vx += -60
        tiles.placeOnTile(mySprite2, value)
    }
})
game.onUpdateInterval(500, function () {
    if (leve2 == 1 || leve2 == 8) {
        for (let value of sprites.allOfKind(SpriteKind.npc)) {
            if (Math.percentChance(50)) {
                if (sprites.readDataNumber(value, "r") == 1) {
                    value.vx = randint(90, 130)
                    value.ay = 100
                } else {
                    value.vx = randint(-90, -130)
                    value.ay = 100
                }
            } else {
                if (Math.percentChance(50)) {
                    sprites.setDataNumber(value, "r", 2)
                } else {
                    sprites.setDataNumber(value, "r", 1)
                }
            }
        }
    } else if (leve2 == 2) {
        for (let value of sprites.allOfKind(SpriteKind.npc)) {
            if (sprites.readDataNumber(value, "r") == 2) {
                value.vx = randint(90, 130)
                value.ay = 100
            } else {
                value.vx = randint(-90, -130)
                value.ay = 100
            }
            if (tiles.tileIs(tiles.locationInDirection(tiles.locationInDirection(tiles.locationOfSprite(value), CollisionDirection.Left), CollisionDirection.Bottom), myTiles.transparency16)) {
                sprites.setDataNumber(value, "r", 1)
            } else if (tiles.tileIs(tiles.locationInDirection(tiles.locationInDirection(tiles.locationOfSprite(value), CollisionDirection.Right), CollisionDirection.Bottom), myTiles.transparency16)) {
                sprites.setDataNumber(value, "r", -1)
            }
        }
    } else if (leve2 == 5) {
        for (let value of sprites.allOfKind(SpriteKind.npc)) {
            if (Math.percentChance(50)) {
                if (sprites.readDataNumber(value, "r") == 1) {
                    value.vx = randint(90, 130)
                    value.ay = 100
                } else {
                    value.vx = randint(-90, -130)
                    value.ay = 100
                }
            } else {
                if (Math.percentChance(50)) {
                    sprites.setDataNumber(value, "r", 2)
                } else {
                    sprites.setDataNumber(value, "r", 1)
                }
            }
        }
    } else {
        for (let value of sprites.allOfKind(SpriteKind.npc)) {
            value.vx = randint(90, 130)
            value.ay = 100
        }
    }
})
game.onUpdateInterval(500, function () {
    for (let value of tiles.getTilesByType(myTiles.tile12)) {
        list55 = [img`
            . . . . . . . e c 7 . . . . . . 
            . . . . e e e c 7 7 e e . . . . 
            . . c e e e e c 7 e 2 2 e e . . 
            . c e e e e e c 6 e e 2 2 2 e . 
            . c e e e 2 e c c 2 4 5 4 2 e . 
            c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
            c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
            . e e e 2 2 2 2 2 2 2 2 2 4 e . 
            . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
            . . 2 e e 2 2 2 2 2 4 4 2 e . . 
            . . . 2 2 e e 4 4 4 2 e e . . . 
            . . . . . 2 2 e e e e . . . . . 
            `, img`
            4 4 4 . . 4 4 4 4 4 . . . . . . 
            4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
            b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
            . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
            . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
            b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
            c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
            c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
            c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
            c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
            . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
            . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
            . . c 4 4 d 4 4 4 4 4 d d 5 d c 
            . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
            . . . . c c b 4 4 4 b b 4 5 4 4 
            . . . . . . c c c c c c b b 4 . 
            `, img`
            . . . . . . . 6 . . . . . . . . 
            . . . . . . 8 6 6 . . . 6 8 . . 
            . . . e e e 8 8 6 6 . 6 7 8 . . 
            . . e 2 2 2 2 e 8 6 6 7 6 . . . 
            . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
            . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
            e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
            e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
            e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
            e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
            e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
            e 2 2 2 2 2 2 2 4 e 2 e e c . . 
            e e 2 e 2 2 4 2 2 e e e c . . . 
            e e e e 2 e 2 2 e e e c . . . . 
            e e e 2 e e c e c c c . . . . . 
            . c c c c c c c . . . . . . . . 
            `, img`
            . . . . . . . . . . . 6 6 6 6 6 
            . . . . . . . . . 6 6 7 7 7 7 8 
            . . . . . . 8 8 8 7 7 8 8 6 8 8 
            . . e e e e c 6 6 8 8 . 8 7 8 . 
            . e 2 5 4 2 e c 8 . . . 6 7 8 . 
            e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
            e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
            e 2 e e 2 2 2 2 e e e e c 6 8 . 
            c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
            . c 2 e e e 2 e 2 4 2 2 2 2 c . 
            . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
            . . . e c c e c 2 2 2 2 2 2 2 e 
            . . . . . . . c 2 e e 2 2 e 2 c 
            . . . . . . . c e e e e e e 2 c 
            . . . . . . . . c e 2 2 2 2 c . 
            . . . . . . . . . c c c c c . . 
            `, img`
            . . . . . . . . . . . . . . . . 
            . . . . 5 5 5 6 5 5 5 . . . . . 
            . . . 5 4 4 4 4 4 4 4 5 . . . . 
            . . 5 4 4 5 5 4 4 4 4 4 5 . . . 
            . 5 4 4 5 5 4 4 4 4 4 4 4 5 . . 
            . 5 4 5 5 4 4 4 4 4 4 4 4 5 . . 
            . 5 4 5 5 4 4 4 4 4 4 4 4 5 . . 
            . 5 4 4 4 4 4 4 4 4 4 4 4 5 . . 
            . 5 4 4 4 4 4 4 4 4 4 4 4 5 . . 
            . 5 4 4 4 4 4 4 4 4 4 4 4 5 . . 
            . 5 4 4 4 4 4 4 4 4 4 4 4 5 . . 
            . . 5 4 4 4 4 4 4 4 4 4 5 . . . 
            . . . 5 4 4 4 4 4 4 4 5 . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `]
        mySprite2 = sprites.create(list55[randint(0, 4)], SpriteKind.Food)
        if (mySprite.x < mySprite2.x) {
            mySprite2.ax += 60
        } else {
            mySprite2.ax += -60
        }
        if (!(tiles.tileIsWall(tiles.locationInDirection(value, CollisionDirection.Bottom)))) {
            mySprite2.ay += 100
        } else {
            mySprite2.ay += -100
        }
        mySprite2.setFlag(SpriteFlag.BounceOnWall, true)
        tiles.placeOnTile(mySprite2, value)
    }
})
game.onUpdateInterval(500, function () {
	
})
