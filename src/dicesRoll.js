export function dicesRoll() {
    let dices = 0;
    for (let i = 0; i < 5; i++) {
        dices += (~~(Math.random() * 6) + 1) * Math.pow(10, i)
    }
    return dices
}