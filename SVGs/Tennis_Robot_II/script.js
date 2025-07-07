let svg = document.getElementById("svg_elem");
let width = svg.getAttribute("width");
let height = svg.getAttribute("height");

let n = 5, m = 4;
let num = [-1, 3, 2, 6, 4, 5];
let moves = [
    [1, 5],
    [4, 3],
    [2, 3],
    [4, 2]
];

let positions = [null];
for(let i = 1; i <= n; i++) {
    let bin = document.createElementNS("http://www.w3.org/2000/svg", "path");
    // <path d='M-37 5 v10 h74 v-10' fill='none'/>
    bin.setAttribute("d", "M-37 5 v10 h74 v-10");
    bin.setAttribute("fill", "none");
    bin.setAttribute("stroke", "black");
    bin.setAttribute("stroke-width", 2);
    bin.setAttribute("transform", "translate(" + i*(width/(n+1)) + " " + (height-100) + ")");
    bin.setAttribute("id", i);

    svg.appendChild(bin);
    positions.push([i*(width/(n+1)), (height-100)]);
}

let balls = [];
let ball_radius = 20, ball_buffer = 10;
for(let i = 0; i <= n; i++) balls.push([]);

function calc_height(x) {
    // place x+1th ball
    return 2*x*ball_radius + (x+1)*ball_buffer;
}

let num_tmp = [0, 0, 0, 0, 0, 0];
for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= num[i]; j++) {
        let ball = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        ball.setAttribute("fill", "black");
        ball.setAttribute("r", ball_radius);
        ball.setAttribute("cy", - calc_height(num_tmp[i]) + positions[i][1]);
        ball.setAttribute("cx", positions[i][0]);

        num_tmp[i]++;
        balls[i].push(ball);
        svg.appendChild(ball);
    }
}

let t = 0;
let duration = 500;

function move_ball(i, j) {
    let ball = balls[i].pop();
    // animate
    let lift_up = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    lift_up.setAttribute("attributeName", "cy");
    lift_up.setAttribute("to", ball_radius*2+ball_buffer);
    lift_up.setAttribute("begin", t*duration + "ms");
    lift_up.setAttribute("dur", duration + "ms");
    lift_up.setAttribute("fill", "freeze");

    ball.appendChild(lift_up); t++;

    let move_over = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    move_over.setAttribute("attributeName", "cx");
    move_over.setAttribute("to", positions[j][0]);
    move_over.setAttribute("begin", t*duration + "ms");
    move_over.setAttribute("dur", duration + "ms");
    move_over.setAttribute("fill", "freeze");

    ball.appendChild(move_over); t++;

    let drop_down = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    drop_down.setAttribute("attributeName", "cy");
    drop_down.setAttribute("to", positions[j][1] - calc_height(num[j]));
    drop_down.setAttribute("begin", t*duration + "ms");
    drop_down.setAttribute("dur", duration + "ms");
    drop_down.setAttribute("fill", "freeze");

    ball.appendChild(drop_down); t++;

    balls[j].push(ball);
    num[i]--;
    num[j]++;
}

let move_num = -1;
for(let i = 0; i <= 10000; i++) {
    move_num++;
    if(move_num >= m) move_num = 0;

    if(num[moves[move_num][0]] == 0) {
        break;
    }
    move_ball(moves[move_num][0], moves[move_num][1]);
}

let last_bin = moves[move_num][0];
let turn_red = document.createElementNS("http://www.w3.org/2000/svg", "animate");
turn_red.setAttribute("attributeName", "stroke");
turn_red.setAttribute("to", "red");
turn_red.setAttribute("begin", t*duration + "ms");
turn_red.setAttribute("dur", duration + "ms");
turn_red.setAttribute("fill", "freeze");

document.getElementById(last_bin).appendChild(turn_red);
