export const colors = ["#3399FF", "#E80C7A", "#0DFF93", "#E8AE0C", "#1CC4E8", "#282828", "#424242", "#ff6d37"];

export function randomColor(): string {
    return colors[Math.floor(Math.random() * colors.length)];
}