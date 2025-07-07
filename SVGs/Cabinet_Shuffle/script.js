let svg = document.getElementById("svg_elem");
let width = svg.getAttribute("width");
let height = svg.getAttribute("height");

let n = 15, k = 5;

let table = document.createElementNS("http://www.w3.org/2000/svg", "circle");
table.setAttribute("r", width*0.25);
table.setAttribute("cx", width/2);
table.setAttribute("cy", height/2);
table.setAttribute("fill", "white");
table.setAttribute("stroke", "black");
svg.appendChild(table);

let inner_rad = width * 0.2;
for(let i = 1; i <= n; i++) {
    let angle = (i-1)*(2*Math.PI/n);
    let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", width/2 + inner_rad * Math.sin(angle));
    text.setAttribute("y", height/2 - inner_rad * Math.cos(angle));
    text.setAttribute("font-size", 32);
    text.setAttribute("font-weight", "bold");
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.innerHTML = i;
    svg.appendChild(text);
}

let ppos = [0];
let seen = {};
for(let i = 1; i <= k+1; i++) {
    ppos.push(Math.floor(Math.random()*n)+1);
    while(seen[ppos[i]]) {
        ppos[i] = Math.floor(Math.random()*n)+1;
    }
    seen[ppos[i]] = true;
}
let people = [0];
let people_objects = [null];
let chairs = [0];
let person_done = [false]
for(let i = 1; i <= k+1; i++) person_done.push(false);
let chair_done = [false]
for(let i = 1; i <= k; i++) chair_done.push(false);
let cpos = [0]
seen = {};
for(let i = 1; i <= k; i++) {
    cpos.push(Math.floor(Math.random()*n)+1);
    while(seen[cpos[i]]) {
        cpos[i] = Math.floor(Math.random()*n)+1;
    }
    seen[cpos[i]] = true;
}
let chair_rad = 30;
let outer_rad = width * 0.3
for(let i = 1; i <= k; i++) {
    let chair = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    let angle = (cpos[i]-1)*(2*Math.PI/n);
    chair.setAttribute("cx", width/2 + outer_rad * Math.sin(angle));
    chair.setAttribute("cy", height/2 - outer_rad * Math.cos(angle));
    chair.setAttribute("r", chair_rad);
    chair.setAttribute("fill", "white");
    chair.setAttribute("stroke", "black");

    svg.appendChild(chair);
    chairs.push(angle);
}
for(let i = 1; i <= k+1; i++) {
    let person = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    let angle = (ppos[i]-1)*(2*Math.PI/n);
    person.setAttribute("cx", width/2 + outer_rad * Math.sin(angle));
    person.setAttribute("cy", height/2 - outer_rad * Math.cos(angle));
    person.setAttribute("r", chair_rad*0.8);
    person.setAttribute("fill", "black");
    person.setAttribute("stroke", "black");

    svg.appendChild(person);
    people.push(angle);
    people_objects.push(person);
}

let t = 0;
let dt = 1;
let EPS = 0.001;
let v = 2*Math.PI/5000; // radians/ms
let finished = 0;
let special = -1;
for(t = 0; finished < k; t += dt) {
    for(let i = 1; i <= k+1; i++) {
        if(person_done[i]) continue;
        for(let j = 1; j <= k; j++) {
            // finished++; // dbg
            if(chair_done[j]) continue;

            if(Math.abs(people[i]-chairs[j]) <= EPS) {
                // arrived at chair
                chair_done[j] = true;
                person_done[i] = true;
                finished++;
                if(finished == 1) special = i;
                break;
            }
        }
        people[i] += v*dt;
        people[i] %= 2*Math.PI;

        let move_x = document.createElementNS("http://www.w3.org/2000/svg", "animate");
        move_x.setAttribute("attributeName", "cx");
        move_x.setAttribute("to", width/2 + outer_rad*Math.sin(people[i]));
        move_x.setAttribute("begin", t + "ms");
        move_x.setAttribute("dur", dt + "ms");
        move_x.setAttribute("fill", "freeze");

        let move_y = document.createElementNS("http://www.w3.org/2000/svg", "animate");
        move_y.setAttribute("attributeName", "cy");
        move_y.setAttribute("to", width/2 - outer_rad*Math.cos(people[i]));
        move_y.setAttribute("begin", t + "ms");
        move_y.setAttribute("dur", dt + "ms");
        move_y.setAttribute("fill", "freeze");

        people_objects[i].appendChild(move_x);
        people_objects[i].appendChild(move_y);
    }
}

for(let i = 1; i <= k+1; i++) {
    if(!person_done[i]) {
        let change_color = document.createElementNS("http://www.w3.org/2000/svg", "animate");
        change_color.setAttribute("attributeName", "fill");
        change_color.setAttribute("to", "red");
        change_color.setAttribute("begin", t + "ms");
        change_color.setAttribute("dur", 1000 + "ms");
        change_color.setAttribute("fill", "freeze");
        people_objects[i].appendChild(change_color);
    }
    if(i == special) {
        let change_color = document.createElementNS("http://www.w3.org/2000/svg", "animate");
        change_color.setAttribute("attributeName", "fill");
        change_color.setAttribute("to", "green");
        change_color.setAttribute("begin", t + "ms");
        change_color.setAttribute("dur", 1000 + "ms");
        change_color.setAttribute("fill", "freeze");
        people_objects[i].appendChild(change_color);
    }
}
