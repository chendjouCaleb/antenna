export const colors = ["#3399FF", "#E80C7A", "#0DFF93", "#E8AE0C", "#1CC4E8", "#282828", "#424242", "#ff6d37",
"#333333", "#6BB700", "#474747", "#107C10", "#A80000", "#FED9CC", "#797673", "#00BCF2", "#0078D4", "#00188F",
"#002050", "#5C2D91", "#A4262C", "#FF8C00", "#D83B01"];

export const defaultBarColor = "#0078D4";

export function randomColor(): string {
    return colors[Math.floor(Math.random() * colors.length)];
}