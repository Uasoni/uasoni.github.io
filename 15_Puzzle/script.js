/*
11  6  *  8
15  4 12  7
 5  9  3  2
 1 14 10 13
20
8 7 12 4 6 11 15 5 9 3 10 13 2 12 4 7 1 8 4 12
*/

let grid = 
[
    ["11", "6", "*", "8"],
    ["15", "4", "12", "7"],
    ["5", "9", "3", "2"],
    ["1", "14", "10", "13"]
]
let num_moves = 20;
let moves = ["8", "7", "12", "4", "6", "11", "15", "5", "9", "3", "10", "13", "2", "12", "4", "7", "1", "8", "4", "12"];

let svg = document.getElementById("svg_elem");
let width = svg.getAttribute("width");
let height = svg.getAttribute("height");

let puzzle_rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
puzzle_rect.setAttribute("x", 0);
puzzle_rect.setAttribute("y", 0);
puzzle_rect.setAttribute("width", width);
puzzle_rect.setAttribute("height", height);

svg.appendChild(puzzle_rect);

let n = 4;
let filled = [
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false]
];

// console.log(JSON.parse(JSON.stringify(filled)));
let loc = [];

let puzzle_pieces = {};
for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
        if(grid[i][j] == "*") {
            continue;
        }

        let color = "";
        if(i * n + j + 1 == parseInt(grid[i][j])) {
            color = "#DEE7BE";
        } else {
            color = "#E7CACA";
        }

        let piece = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        piece.setAttribute("id", grid[i][j]);
        piece.setAttribute("width", width / n);
        piece.setAttribute("height", height / n);
        piece.setAttribute("fill", color);
        piece.setAttribute("stroke", "black");
        piece.setAttribute("stroke-width", 2);

        let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", width / n / 2);
        text.setAttribute("y", height / n / 2);
        text.setAttribute("fill", "black");
        text.setAttribute("font-size", "32");
        text.setAttribute("font-weight", "bold");
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("dominant-baseline", "middle");
        text.innerHTML = grid[i][j];

        let g = document.createElementNS("http://www.w3.org/2000/svg", "g");
        g.setAttribute("transform", "translate(" + j * width / n + " " + i * height / n + ")");
        g.appendChild(piece);
        g.appendChild(text);

        svg.appendChild(g);

        puzzle_pieces[grid[i][j]] = g;
        loc[grid[i][j]] = [i, j];

        filled[i][j] = true;
    }
}

function inside(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}
let dx = [0, -1, 0, 1];
let dy = [1, 0, -1, 0];

let delay = 1000;
let time_anim = 400;

let has_moved = false;
for(let i = 0; i < num_moves; i++) {
    has_moved = false;
    let piece = moves[i];
    // console.log(piece);
    // console.log(loc[piece]);
    for(let j = 0; j < 4; j++) {
        let nx = loc[piece][0] + dx[j];
        let ny = loc[piece][1] + dy[j];

        if(inside(nx, ny) && !filled[nx][ny]) {
            // console.log(nx, ny);

            filled[loc[piece][0]][loc[piece][1]] = false;
            filled[nx][ny] = true;
            
            // console.log(JSON.parse(JSON.stringify(filled)));

            let filled_anim = document.createElementNS("http://www.w3.org/2000/svg", "animate");
            filled_anim.setAttribute("attributeName", "fill");
            filled_anim.setAttribute("to", "#FFFF66");
            filled_anim.setAttribute("begin", delay * (i+1) + "ms");
            filled_anim.setAttribute("dur", time_anim + "ms");
            filled_anim.setAttribute("fill", "freeze");
            
            document.getElementById(piece).appendChild(filled_anim);

            let color = "";
            if(ny * n + nx + 1 == parseInt(piece)) {
                color = "#DEE7BE";
            } else {
                color = "#E7CACA";
            }
            let unfilled_anim = document.createElementNS("http://www.w3.org/2000/svg", "animate");
            unfilled_anim.setAttribute("attributeName", "fill");
            unfilled_anim.setAttribute("to", color);
            unfilled_anim.setAttribute("begin", delay * (i+1.5) + "ms");
            unfilled_anim.setAttribute("dur", time_anim + "ms");
            unfilled_anim.setAttribute("fill", "freeze");

            document.getElementById(piece).appendChild(unfilled_anim);

            let move_anim_x = document.createElementNS("http://www.w3.org/2000/svg", "animateTransform");
            move_anim_x.setAttribute("attributeName", "transform");
            move_anim_x.setAttribute("type", "translate");
            move_anim_x.setAttribute("from", loc[piece][1] * width / n + " " + loc[piece][0] * height / n);
            move_anim_x.setAttribute("to", ny * width / n + " " + nx * height / n);
            move_anim_x.setAttribute("begin", delay * (i+1) + "ms");
            move_anim_x.setAttribute("dur", time_anim + "ms");
            move_anim_x.setAttribute("fill", "freeze");

            puzzle_pieces[piece].appendChild(move_anim_x);
            
            loc[piece] = [nx, ny];
            has_moved = true;
            break;
        }
        if(has_moved) break;
    }
    if(!has_moved) {
        console.log("Invalid move");

        let invalid_anim = document.createElementNS("http://www.w3.org/2000/svg", "animate");
        invalid_anim.setAttribute("attributeName", "fill");
        invalid_anim.setAttribute("to", "#F72424");
        invalid_anim.setAttribute("begin", delay * (i+1) + "ms");
        invalid_anim.setAttribute("dur", time_anim + "ms");
        invalid_anim.setAttribute("fill", "freeze");

        document.getElementById(piece).appendChild(invalid_anim);
        break;
    }
}
