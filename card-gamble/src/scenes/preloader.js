import Phaser from "phaser";

export class Preloader extends Phaser.Scene {
    constructor () {
        super({
            key: 'Preloader'
        });
    }

    preload () {
        this.load.image('TestImage', 'src/assets/images/testing.png');
        this.load.image('Background', '/src/assets/images/background.jpg');
        this.load.image('MenuBackground', 'src/assets/images/menu-background.jpg');
        this.load.image('PlayingCard', 'src/assets/images/playing-card.jpg');
        // this.load.image('ROCK', 'src/assets/images/rock-card.png');
        // this.load.image('PAPER', 'src/assets/images/paper-card.png');
        // this.load.image('SCISSORS', 'src/assets/images/scissors-card.png');

        this.load.image('ROCK', 'src/assets/images/output.jpg');
        this.load.image('PAPER', 'src/assets/images/output (1).jpg');
        this.load.image('SCISSORS', 'src/assets/images/output (2).jpg');
    }

    create () {
        // this.add.image(100, 100, 'TestImage').setOrigin(0);
        this.scene.start('MainMenu');
    }
}