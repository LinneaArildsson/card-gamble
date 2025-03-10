import Phaser from "phaser";

export class Game extends Phaser.Scene {
    constructor () {
        super({
            key: 'Game'
        });
    }

    create () {
        this.add.image(100, 100, 'TestImage').setOrigin(0);
    }
}