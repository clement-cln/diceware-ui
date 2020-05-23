export function dicesRoll() {
    let dices = 0;
    let dice = new Uint8Array(1);
    for (let i = 0; i < 5; i++) {
        window.crypto.getRandomValues(dice);
        dices += (~~((dice[0] / 255) * 6) + 1) * Math.pow(10, i)
    }
    return dices
}