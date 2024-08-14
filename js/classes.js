
class Sprite {
    constructor({ position, imageSrc, scale = 1, framesMax = 1, offset = { x: 0, y: 0 } }) {
        this.position = position
        this.width = 50
        this.height = 150
        this.image = new Image()
        this.image.src = imageSrc
        this.scale = scale
        this.framesMax = framesMax
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 5
        this.offset = offset

    }

    draw() {
        C.drawImage(this.image,
            this.framesCurrent * (this.image.width / this.framesMax),
            0,
            this.image.width / this.framesMax,
            this.image.height,
            this.position.x - this.offset.x,
            this.position.y - this.offset.y,
            (this.image.width / this.framesMax) * this.scale,
            this.image.height * this.scale)
    }
    animateFrame() {
        this.framesElapsed++
        if (this.framesElapsed % this.framesHold === 0) {
            if (this.framesCurrent < this.framesMax - 1) {
                this.framesCurrent++
            } else {
                this.framesCurrent = 0
            }
        }
    }

    update() {
        this.draw()
        this.animateFrame()
    }

}

class Fighter extends Sprite {
    constructor({ position,
        velocity,
        color = 'red',
        imageSrc,
        scale = 1,
        framesMax = 1,
        offset = { x: 0, y: 0, },
        sprites,
        attackBox = { offset: {}, width: undefined, health: undefined }

    }) {
        super({
            position,
            imageSrc,
            scale,
            framesMax,
            offset
        }
        )

        this.velocity = velocity
        this.width = 50
        this.height = 150
        this.lastKey
        this.attackBox = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            offset: attackBox.offset,
            width: attackBox.width,
            height: attackBox.health
        }
        this.color = color
        this.isAttacking
        this.health = 100
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 5
        this.sprites = sprites
        this.dead = false

        for (const sprite in this.sprites) {
            sprites[sprite].image = new Image()
            sprites[sprite].image.src = sprites[sprite].imageSrc
        }

    }


    update() {
        this.draw()
        if (!this.dead) this.animateFrame()

        // attack boxes
        this.attackBox.position.x = this.position.x + this.attackBox.offset.x
        this.attackBox.position.y = this.position.y + this.attackBox.offset.y


        //    draw the attack boxes
        //     C.fillRect(
        //         this.attackBox.position.x,
        //         this.attackBox.position.y,
        //          this.attackBox.width, 
        //          this.attackBox.height )

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        // gravity function
        if (this.position.y + this.height + this.velocity.y >= canvas.height - 96) {
            this.velocity.y = 0
            this.position.y = 330
        } else this.velocity.y += gravity
    }
    attack() {
        this.switchSprite('attack1')
        this.isAttacking = true

    }

    takeHit() {

        this.health -= 20

        if (this.health <= 0) {
            this.switchSprite('death')
        } else this.switchSprite('takeHit')
    }
    switchSprite(sprite) {
        if (this.image === this.sprites.death.image) {
            if (this.framesCurrent === this.sprites.death.framesMax - 1)
                this.dead = true
            return}
        // overriding all other animations with the attack animation
        if (
            this.image === this.sprites.attack1.image && this.framesCurrent < this.sprites.attack1.framesMax - 1
        )
            return

        // override when fighter gets hit
        if (this.image === this.sprites.takeHit.image && this.framesCurrent < this.sprites.takeHit.framesMax - 1)
            return


        switch (sprite) {
            case 'idle':
                if (this.image !== this.sprites.idle.image) {
                    this.image = this.sprites.idle.image
                    this.framesMax = this.sprites.idle.framesMax
                    this.framesCurrent = 0
                }
                break
            case 'run':
                if (this.image !== this.sprites.run.image) {
                    this.image = this.sprites.run.image
                    this.framesMax = this.sprites.run.framesMax
                    this.framesCurrent = 0
                }
                break
            case 'jump':
                if (this.image !== this.sprites.jump.image) {
                    this.image = this.sprites.jump.image
                    this.framesMax = this.sprites.jump.framesMax
                    this.framesCurrent = 0
                }
                break

            case 'fall':
                if (this.image !== this.sprites.fall.image) {
                    this.image = this.sprites.fall.image
                    this.framesMax = this.sprites.fall.framesMax
                    this.framesCurrent = 0
                }
                break

            case 'attack1':
                if (this.image !== this.sprites.attack1.image) {
                    this.image = this.sprites.attack1.image
                    this.framesMax = this.sprites.attack1.framesMax
                    this.framesCurrent = 0
                }
                break

            case 'takeHit':

                if (this.image !== this.sprites.takeHit.image) {
                    this.image = this.sprites.takeHit.image
                    this.framesMax = this.sprites.takeHit.framesMax
                    this.framesCurrent = 0
                }
                break

            case 'death':

                if (this.image !== this.sprites.death.image) {
                    this.image = this.sprites.death.image
                    this.framesMax = this.sprites.death.framesMax
                    this.framesCurrent = 0
                }
                break
        }
    }
}
function isColliding(rect1, rect2) {
    return !(rect1.x > rect2.x + rect2.width ||
        rect1.x + rect1.width < rect2.x ||
        rect1.y > rect2.y + rect2.height ||
        rect1.y + rect1.height < rect2.y);
}

// Example usage
let playerA = { x: 50, y: 50, width: 50, height: 50 };
let playerB = { x: 75, y: 75, width: 50, height: 50 };

if (isColliding(playerA, playerB)) {
    console.log('Collision detected!');
} else {
    console.log('No collision.');
}

if (isColliding) {
    a = 10;
    b = 5;

}

animateFrame(){
    thisplayer = 10;
    velocity = 5;

}

# THIS IS AN AUTOGENERATED FILE.DO NOT EDIT THIS FILE DIRECTLY.
# yarn lockfile v1


"@babel/code-frame@^7.16.7":
"integrity" "sha512-iAXqUn8IIeBTNd72xsFlgaXHkMBMt6y4HJp1tIaK465CWLT/fG1aqB7ykr95gHHmlBdGbFeWWfyB4NJJ0nmeIg=="
"resolved" "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.16.7.tgz"
"version" "7.16.7"
dependencies:
"@babel/highlight" "^7.16.7"

"@babel/compat-data@^7.13.11", "@babel/compat-data@^7.16.4":
"integrity" "sha512-1o/jo7D+kC9ZjHX5v+EHrdjl3PhxMrLSOTGsOdHJ+KL8HCaEK6ehrVL2RS6oHDZp+L7xLirLrPmQtEng769J/Q=="
"resolved" "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.16.4.tgz"
"version" "7.16.4"

"@babel/core@^7.0.0", "@babel/core@^7.0.0-0", "@babel/core@^7.12.0", "@babel/core@^7.13.0", "@babel/core@^7.4.0-0", "@babel/core@^7.9.0":
"integrity" "sha512-aeLaqcqThRNZYmbMqtulsetOQZ/5gbR/dWruUCJcpas4Qoyy+QeagfDsPdMrqwsPRDNxJvBlRiZxxX7THO7qtA=="
"resolved" "https://registry.npmjs.org/@babel/core/-/core-7.16.7.tgz"
"version" "7.16.7"
dependencies:
"@babel/code-frame" "^7.16.7"
"@babel/generator" "^7.16.7"
"@babel/helper-compilation-targets" "^7.16.7"
"@babel/helper-module-transforms" "^7.16.7"
"@babel/helpers" "^7.16.7"
"@babel/parser" "^7.16.7"
"@babel/template" "^7.16.7"
"@babel/traverse" "^7.16.7"
"@babel/types" "^7.16.7"
"convert-source-map" "^1.7.0"
"debug" "^4.1.0"
"gensync" "^1.0.0-beta.2"
"json5" "^2.1.2"
"semver" "^6.3.0"
"source-map" "^0.5.0"
