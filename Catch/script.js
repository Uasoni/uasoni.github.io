let svg = document.getElementById("svg_elem");
let width = svg.getAttribute("width");
let height = svg.getAttribute("height");

let radius = 300;
let n = 3; // num balls
let m = 5; // num people
let moves = [
    [1, 5, 3, 2, 4, 3, 1, 4, 2],
    [5, 4, 5, 3, 2, 4, 1, 3, 1],
    [2, 3, 2, 4, 1, 5, 3, 2, 5]
];

// draw circles
let circle_rad = 30;
for(let i = 1; i <= m; i++) {
    let angle = (i-1)*(2*Math.PI/m) - Math.PI/2;
    let x = radius * Math.cos(angle) + width/2;
    let y = radius * Math.sin(angle) + height/2;

    let node = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    node.setAttribute("cx", x);
    node.setAttribute("cy", y);
    node.setAttribute("id", i);
    node.setAttribute("r", circle_rad);
    node.setAttribute("fill", "white");
    node.setAttribute("stroke", "black");
    node.setAttribute("stroke-width", 2);

    let node_text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    node_text.setAttribute("x", x);
    node_text.setAttribute("y", y);
    node_text.setAttribute("fill", "black");
    node_text.setAttribute("font-size", 32);
    node_text.setAttribute("font-weight", "bold");
    node_text.setAttribute("text-anchor", "middle");
    node_text.setAttribute("dominant-baseline", "middle");
    node_text.innerHTML = i;

    svg.appendChild(node);
    svg.appendChild(node_text);
}

// draw balls
let ball_rad = 20;
let balls = [];
let air_time = 1000;
for(let i = 0; i < n; i++) {
    let ball = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    let pos = moves[i][0];
    let person = document.getElementById(pos);
    let x = person.getAttribute("cx");
    let y = person.getAttribute("cy");

    ball.setAttribute("cx", x);
    ball.setAttribute("cy", y);
    ball.setAttribute("id", i);
    ball.setAttribute("r", ball_rad);
    // redness depends on i
    ball.setAttribute("fill", "rgba(" + i*255/n + ", 0, 0, 1.0)");
    ball.setAttribute("stroke", "black");
    ball.setAttribute("stroke-width", 2);

    svg.appendChild(ball);
    balls.push(ball);
}

function get_dist(x1, y1, x2, y2) {
    return Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));
}

let explosion_time = 500;

let v = []; // velocity v (px/ms)
let ids = []; // id headed towards
let marked_done = [];
let pos = [];
for(let i = 0; i < n; i++) {
    ids.push(1);
    marked_done.push(false);
    let ptmp = [parseFloat(balls[i].getAttribute("cx")), parseFloat(balls[i].getAttribute("cy"))];
    pos.push(ptmp);
    let target_id = document.getElementById(moves[i][ids[i]]);
    let target_pos = [target_id.getAttribute("cx"), target_id.getAttribute("cy")];
    v.push([(target_pos[0]-ptmp[0])/air_time, (target_pos[1]-ptmp[1])/air_time]);
}

let t = 0;
let dt = 10;
let EPS = 1;
let finished = 0;
for(t = 0; finished < n; t += dt) {
    for(let i = 0; i < n; i++) {
        if(marked_done[i]) continue;
        // step sim the ith ball
        let target_id = document.getElementById(moves[i][ids[i]]);
        let target_pos = [parseFloat(target_id.getAttribute("cx")), parseFloat(target_id.getAttribute("cy"))];

        let step = [v[i][0] * dt, v[i][1] * dt];
        
        pos[i][0] += step[0], pos[i][1] += step[1];
        let anim_x = document.createElementNS("http://www.w3.org/2000/svg", "animate");
        anim_x.setAttribute("attributeName", "cx");
        anim_x.setAttribute("to", pos[i][0]);
        anim_x.setAttribute("begin", t + "ms");
        anim_x.setAttribute("dur", dt + "ms");
        anim_x.setAttribute("fill", "freeze");
        
        let anim_y = document.createElementNS("http://www.w3.org/2000/svg", "animate");
        anim_y.setAttribute("attributeName", "cy");
        anim_y.setAttribute("to", pos[i][1]);
        anim_y.setAttribute("begin", t + "ms");
        anim_y.setAttribute("dur", dt + "ms");
        anim_y.setAttribute("fill", "freeze");

        balls[i].appendChild(anim_x);
        balls[i].appendChild(anim_y);

        let time_left = get_dist(pos[i][0], pos[i][1], target_pos[0], target_pos[1])/get_dist(0, 0, v[i][0], v[i][1]);
        
        // 1 - are we there yet
        if(time_left < dt || get_dist(pos[i][0], pos[i][1], target_pos[0], target_pos[1]) < EPS) {
            // effectively there i guess
            pos[i] = target_pos;
            
            if(ids[i] >= moves[i].length) {
                marked_done[i] = true;
                finished++;
                continue;
            }

            ids[i]++;
            let new_target_id = document.getElementById(moves[i][ids[i]]);
            if(new_target_id == null) {
                marked_done[i] = true;
                finished++;
                continue;
            }
            let new_target_pos = [parseFloat(new_target_id.getAttribute("cx")), parseFloat(new_target_id.getAttribute("cy"))];
            // update v
            v[i][0] = (new_target_pos[0]-pos[i][0])/air_time;
            v[i][1] = (new_target_pos[1]-pos[i][1])/air_time;
        }

        // 2 - check all collisions
        for(let j = 0; j < n; j++) {
            if(j >= i) continue;
            if(get_dist(pos[i][0], pos[i][1], pos[j][0], pos[j][1]) < circle_rad * 2) {
                let image_explosion = document.createElementNS("http://www.w3.org/2000/svg", "image");
                image_explosion.setAttribute("href", "explosion.png");
                let x = (pos[i][0] + pos[j][0])/2;
                let y = (pos[i][1] + pos[j][1])/2;
                image_explosion.setAttribute("x", x - ball_rad);
                image_explosion.setAttribute("y", y - ball_rad);
                image_explosion.setAttribute("width", 2*ball_rad);
                image_explosion.setAttribute("height", 2*ball_rad);
                image_explosion.setAttribute("opacity", 0);
                
                let anim_explosion = document.createElementNS("http://www.w3.org/2000/svg", "animate");
                anim_explosion.setAttribute("attributeName", "opacity");
                anim_explosion.setAttribute("to", 1);
                anim_explosion.setAttribute("begin", t + "ms");
                anim_explosion.setAttribute("dur", dt + "ms");
                anim_explosion.setAttribute("fill", "freeze");

                let anim_fade = document.createElementNS("http://www.w3.org/2000/svg", "animate");
                anim_fade.setAttribute("attributeName", "opacity");
                anim_fade.setAttribute("to", 0);
                anim_fade.setAttribute("begin", t + dt + "ms");
                anim_fade.setAttribute("dur", explosion_time - dt + "ms");
                anim_fade.setAttribute("fill", "freeze");

                image_explosion.appendChild(anim_explosion);
                image_explosion.appendChild(anim_fade);
                svg.appendChild(image_explosion);
            }
        }
    }
}

for(let i = 0; i < n; i++) {
    let set_x = document.createElementNS("http://www.w3.org/2000/svg", "set");
    set_x.setAttribute("attributeName", "cx");
    set_x.setAttribute("to", pos[i][0]);
    set_x.setAttribute("begin", t+dt + "ms");
    set_x.setAttribute("dur", dt + "ms");
    set_x.setAttribute("fill", "freeze");
    let set_y = document.createElementNS("http://www.w3.org/2000/svg", "set");
    set_y.setAttribute("attributeName", "cy");
    set_y.setAttribute("to", pos[i][1]);
    set_y.setAttribute("begin", t+dt + "ms");
    set_y.setAttribute("dur", dt + "ms");
    set_y.setAttribute("fill", "freeze");

    balls[i].appendChild(set_x);
    balls[i].appendChild(set_y);
}