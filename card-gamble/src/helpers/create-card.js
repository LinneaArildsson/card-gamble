export const createCard = ({
    scene,
    x,
    y,
    front_texture,
    card_name
}) => {

    //const back_texture = "PlayingCard";

    const card = scene.add.plane(x, y, front_texture).setName(card_name).setScale(0.4);
}