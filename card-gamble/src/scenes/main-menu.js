import Phaser from "phaser";

export class MainMenu extends Phaser.Scene {
    constructor () {
        super({
            key: 'MainMenu'
        });
    }

    create () {
        //this.add.image(100, 100, 'TestImage').setOrigin(0);

        const menu_text = this.add.text(
            this.sys.game.scale.width / 2, 
            this.sys.game.scale.height / 2,
            'Start Game', {
                align: 'center',
                fontSize: '40px',
                fontStyle: 'bold',
                color: '#481a97',
            }
        ).setOrigin(0.5).setDepth(3).setInteractive();

        menu_text.on(Phaser.Input.Events.POINTER_OVER, () => {
            menu_text.setColor('#7228ee');
            this.input.setDefaultCursor('pointer');
        });

        menu_text.on(Phaser.Input.Events.POINTER_OUT, () => {
            menu_text.setColor('#481a97');
            this.input.setDefaultCursor('default');
        });

        menu_text.on(Phaser.Input.Events.POINTER_DOWN, () => {
            this.scene.start('Game');
        })
    }
}