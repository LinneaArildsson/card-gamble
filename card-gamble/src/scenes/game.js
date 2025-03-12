import Phaser from "phaser";

//import Card from "../helpers/card";
import { createCard } from "../helpers/create-card";

export class Game extends Phaser.Scene {
    constructor () {
        super({
            key: 'Game'
        });
    }

    card_names = ['ROCK', 'PAPER', 'SCISSORS'];

    cards = [];

    create () {
        this.add.image(0, 0, 'Background').setOrigin(0).setScale(1.2);

        //this.add.image(100, 100, 'TestImage').setOrigin(0);

        //this.card = this.add.image(300, 300, 'PlayingCard').setScale(0.4);

        this.cards = this.createGridCards();

    }

    createGridCards () {
        //const grid_card_names = Phaser.Utils.Array.Shuffle([...this.card_names, ...this.card_names]);
        //const grid_card_names = Phaser.Utils.Array.Shuffle(this.card_names);

        const grid_card_names = this.card_names;
        
        return grid_card_names.map((name, index) => {
            const new_card = createCard({
                scene: this,
                x: 150 + 300 * (index % 3),
                y: 300,
                front_texture: name,
                card_name: name
            });
            return new_card;
        })
    }
}