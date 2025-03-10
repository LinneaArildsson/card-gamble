import Phaser from "phaser";

export class Preloader extends Phaser.Scene {
    constructor () {
        super({
            key: 'Preloader'
        });
    }

    preload () {
        this.load.image('TestImage', 'src/assets/images/testing.png');
    }

    create () {
        // this.add.image(100, 100, 'TestImage').setOrigin(0);
        this.scene.start('MainMenu');
    }
}