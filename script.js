let n = 4; // nodes
let m = 4; // edges

// height and width of simulation box
let height = 500;
let width = 500;
// edge_weights[i][j] = prob of node i to node j
let edge_weights = [
    [0, 0.2, 0.5, 0.3],
    [0.3, 0, 0.7, 0],
    [0.5, 0.5, 0, 0],
    [0.6, 0, 0, 0.4]
]
// gets next node - 1st order markov chain
function next_node(i) {
    let r = Math.random();
    let sum = 0;
    for (let j = 0; j < n; j++) {
        sum += edge_weights[i][j];
        if (r < sum) {
            return j;
        }
    }
}

// inits svg elements
let current_node = 0;
let svg_element = document.getElementById("svg_elem");
let nodes = [];
let lines = [];
let radius_node = 40;
let radius_circle = 150;
// creates edges
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (edge_weights[i][j] > 0) {
            let curve = document.createElementNS("http://www.w3.org/2000/svg", "path");
            let x1 = width/2 + radius_circle * Math.cos(2 * Math.PI * i / n);
            x1 -= (radius_node) * Math.cos(2 * Math.PI * i / n);
            let y1 = height/2 + radius_circle * Math.sin(2 * Math.PI * i / n);
            y1 -= (radius_node) * Math.sin(2 * Math.PI * i / n);
            let x2 = width/2 + radius_circle * Math.cos(2 * Math.PI * j / n);
            x2 -= (radius_node) * Math.cos(2 * Math.PI * j / n);
            let y2 = height/2 + radius_circle * Math.sin(2 * Math.PI * j / n);
            y2 -= (radius_node) * Math.sin(2 * Math.PI * j / n);

            if(i == j) {
                let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                circle.setAttribute("cx", x1);
                circle.setAttribute("cy", y1);
                circle.setAttribute("r", radius_node + 5);
                circle.setAttribute("fill", "none");
                circle.setAttribute("stroke", "green");
                circle.setAttribute("stroke-width", 4);
                svg_element.appendChild(circle);
                lines.push(circle);
            } else {
                let dx = x2 - x1;
                let dy = y2 - y1;
                let dr = Math.sqrt(dx * dx + dy * dy);
                curve.setAttribute("d", "M " + x1 + " " + y1 + " A " + dr + " " + dr + " 0 0 0 " + " " + x2 + " " + y2);
                curve.setAttribute("fill", "none");
                curve.setAttribute("stroke", "green");
                curve.setAttribute("stroke-width", 4);
                // curve.setAttribute("marker-end", "url(#arrow)");
                svg_element.appendChild(curve);
                lines.push(curve);
            }
        } else lines.push(null);
    }
}
// creates nodes
for (let i = 0; i < n; i++) {
    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", width/2 + radius_circle * Math.cos(2 * Math.PI * i / n));
    circle.setAttribute("cy", height/2 + radius_circle * Math.sin(2 * Math.PI * i / n));
    circle.setAttribute("r", radius_node);
    circle.setAttribute("fill", "red");
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", 4);
    svg_element.appendChild(circle);
    nodes.push(circle);
    console.log("Node " + i+1 + " is at (" + circle.getAttribute("cx") + ", " + circle.getAttribute("cy") + ")");

    let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", width/2 + radius_circle * Math.cos(2 * Math.PI * i / n) - 5);
    text.setAttribute("y", height/2 + radius_circle * Math.sin(2 * Math.PI * i / n) + 5);
    text.setAttribute("fill", "black");
    text.setAttribute("font-size", "30");
    text.setAttribute("font-weight", "bold");
    text.setAttribute("font-family", "Raleway");
    text.innerHTML = i+1;
    svg_element.appendChild(text);
}

// run simulation
let sim_data = [current_node];
let length_sim = 100;
for (let i = 0; i < 100; i++) {
    let next = next_node(current_node);
    sim_data.push(next);
    current_node = next;
}

// draw simulation animations
let delay = 1000;
let hold = delay * 0.8;
for (let i = 0; i < length_sim; i++) {
    let set = document.createElementNS("http://www.w3.org/2000/svg", "set");
    set.setAttribute("attributeName", "fill");
    set.setAttribute("to", "blue");
    set.setAttribute("begin", delay * i + "ms");
    set.setAttribute("dur", hold + "ms");
    set.setAttribute("fill", "freeze");
    nodes[sim_data[i]].appendChild(set);
    let reset = document.createElementNS("http://www.w3.org/2000/svg", "set");
    reset.setAttribute("attributeName", "fill");
    reset.setAttribute("to", "red");
    reset.setAttribute("begin", delay * (i+1) + "ms");
    reset.setAttribute("dur", hold + "ms");
    reset.setAttribute("fill", "freeze");
    nodes[sim_data[i]].appendChild(reset);
}

// draws transition table
let table = document.createElementNS("http://www.w3.org/2000/svg", "rect");
table.setAttribute("x", 500);
table.setAttribute("y", 0);
table.setAttribute("width", 400);
table.setAttribute("height", 300);
table.setAttribute("fill", "gray");
table.setAttribute("stroke", "black");
table.setAttribute("stroke-width", 2);
svg_element.appendChild(table);

let table_title = document.createElementNS("http://www.w3.org/2000/svg", "text");
table_title.setAttribute("x", 550);
table_title.setAttribute("y", 50);
table_title.setAttribute("fill", "black");
table_title.setAttribute("font-size", "30");
table_title.setAttribute("font-weight", "bold");
table_title.setAttribute("font-family", "Raleway");
table_title.innerHTML = "Transition Probabilities";
svg_element.appendChild(table_title);

text_els = [];

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        let table_text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        table_text.setAttribute("x", 550+100 * j);
        table_text.setAttribute("y", 100+50 * i);
        table_text.setAttribute("fill", "black");
        table_text.setAttribute("font-size", "20");
        table_text.setAttribute("font-weight", "bold");
        table_text.setAttribute("font-family", "Raleway");
        table_text.innerHTML = edge_weights[i][j];
        svg_element.appendChild(table_text);
        text_els.push(table_text);
    }
}
// animates table
for (let i = 0; i < length_sim; i++) {
    let set = document.createElementNS("http://www.w3.org/2000/svg", "set");
    set.setAttribute("attributeName", "fill");
    set.setAttribute("to", "yellow");
    set.setAttribute("begin", delay * i + "ms");
    set.setAttribute("dur", hold + "ms");
    set.setAttribute("fill", "freeze");
    text_els[sim_data[i] + sim_data[i+1] * n].appendChild(set);
    let reset = document.createElementNS("http://www.w3.org/2000/svg", "set");
    reset.setAttribute("attributeName", "fill");
    reset.setAttribute("to", "black");
    reset.setAttribute("begin", delay * i + hold + "ms");
    reset.setAttribute("dur", hold + "ms");
    reset.setAttribute("fill", "freeze");
    text_els[sim_data[i] + sim_data[i+1] * n].appendChild(reset);
    let set2 = document.createElementNS("http://www.w3.org/2000/svg", "set");
    set2.setAttribute("attributeName", "stroke");
    set2.setAttribute("to", "yellow");
    set2.setAttribute("begin", delay * i + "ms");
    set2.setAttribute("dur", hold + "ms");
    set2.setAttribute("fill", "freeze");
    lines[sim_data[i] + sim_data[i+1] * n].appendChild(set2);
    let reset2 = document.createElementNS("http://www.w3.org/2000/svg", "set");
    reset2.setAttribute("attributeName", "stroke");
    reset2.setAttribute("to", "green");
    reset2.setAttribute("begin", delay * i + hold + "ms");
    reset2.setAttribute("dur", hold + "ms");
    reset2.setAttribute("fill", "freeze");
    lines[sim_data[i] + sim_data[i+1] * n].appendChild(reset2);
}