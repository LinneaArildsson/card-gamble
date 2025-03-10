import './style.css';
import Phaser from 'phaser';

import { Preloader } from './scenes/preloader';
import { MainMenu } from './scenes/main-menu';
import { Game } from './scenes/game';

const game = new Phaser.Game({
    type: Phaser.AUTO,
    scale: {
        parent: 'card-container',
        height: 600,
        width: 900,

    },
    backgroundColor: "#FFFFFF",
    scene: [
        Preloader,
        MainMenu,
        Game
    ]
});

// game.scene.add('Preloader', Preloader);
// game.scene.add('MainMenu', MainMenu);
// game.scene.add('Game', Game);
//game.scene.start('Preloader');
