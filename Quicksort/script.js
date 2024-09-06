let svg = document.getElementById("svg_elem");
let width = svg.getAttribute("width");
let height = svg.getAttribute("height");

let w_buffer = 100;
let h_buffer = 250;

let n = 30;
let array = [-1];
for(let i = 1; i <= n; i++) {
    array.push(Math.floor(Math.random()*10)+1);
}
let rects = [null];

let unit_height = 50;
for(let i = 1; i <= n; i++) {
    let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("width", (width-2*w_buffer)/n);
    rect.setAttribute("height", array[i]*unit_height);
    rect.setAttribute("x", w_buffer + (width-2*w_buffer)*(i-1)/n);
    rect.setAttribute("y", height-h_buffer-array[i]*unit_height);
    rect.setAttribute("fill", "white");
    rect.setAttribute("stroke", "black");
    rect.setAttribute("stroke-width", 2);

    rects.push(rect);
    svg.appendChild(rect);
}

function calc_x(i) {
    return w_buffer + (width-2*w_buffer)*(i-1)/n;
}

let t = 0;
let timestep = 100;

let iarrow = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
iarrow.setAttribute("points", "-10,0 0,-20 10,0");
iarrow.setAttribute("fill", "red");
iarrow.setAttribute("stroke", "black");
iarrow.setAttribute("stroke-width", 1);
iarrow.setAttribute("transform", "translate(" + (calc_x(1) + (width-2*w_buffer)/n/2) + " " + (height-h_buffer+20) + ")");
svg.appendChild(iarrow);
let jarrow = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
jarrow.setAttribute("points", "-10,0 0,-20 10,0");
jarrow.setAttribute("fill", "blue");
jarrow.setAttribute("stroke", "black");
jarrow.setAttribute("stroke-width", 1);
jarrow.setAttribute("transform", "translate(" + (calc_x(n) + (width-2*w_buffer)/n/2) + " " + (height-h_buffer+20) + ")");
svg.appendChild(jarrow);

let iarrow_pos = 1, jarrow_pos = n;

function update_arrows(arrow, start, end) {
    let arrow_anim = document.createElementNS("http://www.w3.org/2000/svg", "animateTransform");
    arrow_anim.setAttribute("attributeName", "transform");
    arrow_anim.setAttribute("type", "translate");
    arrow_anim.setAttribute("from", (calc_x(start) + (width-2*w_buffer)/n/2) + " " + (height-h_buffer+20));
    arrow_anim.setAttribute("to", (calc_x(end) + (width-2*w_buffer)/n/2) + " " + (height-h_buffer+20));
    arrow_anim.setAttribute("begin", t*timestep + "ms");
    arrow_anim.setAttribute("dur", timestep/2 + "ms");
    arrow_anim.setAttribute("fill", "freeze");
    arrow.appendChild(arrow_anim);
}

function swap(i, j) {
    let tmp = array[i];
    array[i] = array[j], array[j] = tmp;
    let swap_1 = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    swap_1.setAttribute("attributeName", "x");
    swap_1.setAttribute("to", calc_x(j));
    swap_1.setAttribute("begin", t*timestep + "ms");
    swap_1.setAttribute("dur", timestep + "ms");
    swap_1.setAttribute("fill", "freeze");

    let swap_2 = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    swap_2.setAttribute("attributeName", "x");
    swap_2.setAttribute("to", calc_x(i));
    swap_2.setAttribute("begin", t*timestep + "ms");
    swap_2.setAttribute("dur", timestep + "ms");
    swap_2.setAttribute("fill", "freeze");

    rects[i].appendChild(swap_1);
    rects[j].appendChild(swap_2);

    t++;
    let tmpr = rects[i];
    rects[i] = rects[j], rects[j] = tmpr;
}

function partition(l, r) {
    let pivot = array[l];
    // highlight pivot
    let highlight_anim = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    highlight_anim.setAttribute("attributeName", "fill");
    highlight_anim.setAttribute("to", "green");
    highlight_anim.setAttribute("begin", t*timestep + "ms");
    highlight_anim.setAttribute("dur", timestep + "ms");
    highlight_anim.setAttribute("fill", "freeze");

    let ref = rects[l];
    ref.appendChild(highlight_anim);
    t++;

    let i = l-1, j = r+1;
    update_arrows(iarrow, iarrow_pos, l);
    update_arrows(jarrow, jarrow_pos, r);
    iarrow_pos = l, jarrow_pos = r;
    t++;

    while(true) {
        do {
            i++;
            if(iarrow_pos != i) {
                update_arrows(iarrow, iarrow_pos, i);
                iarrow_pos = i;
                t++;
            }
        } while(array[i] < pivot);
        do {
            j--;
            if(jarrow_pos != j) {
                update_arrows(jarrow, jarrow_pos, j);
                jarrow_pos = j;
                t++;
            }
        } while(array[j] > pivot);
        
        if(i >= j) {
            let highlight_anim = document.createElementNS("http://www.w3.org/2000/svg", "animate");
            highlight_anim.setAttribute("attributeName", "fill");
            highlight_anim.setAttribute("to", "white");
            highlight_anim.setAttribute("begin", t*timestep + "ms");
            highlight_anim.setAttribute("dur", timestep + "ms");
            highlight_anim.setAttribute("fill", "freeze");
            ref.appendChild(highlight_anim);
            let part_anim = document.createElementNS("http://www.w3.org/2000/svg", "animate");
            part_anim.setAttribute("attributeName", "fill");
            part_anim.setAttribute("to", "yellow");
            part_anim.setAttribute("begin", t*timestep + "ms");
            part_anim.setAttribute("dur", timestep + "ms");
            part_anim.setAttribute("fill", "freeze");
            rects[j].appendChild(part_anim);
            t++;
            return j;
        }
        swap(i, j);
    }
}

function quicksort(l, r) {
    if(l >= 1 && r >= 1 && l < r) {
        let p = partition(l, r);
        quicksort(l, p);
        quicksort(p+1, r);
    } else if(l == r) {
        let part_anim = document.createElementNS("http://www.w3.org/2000/svg", "animate");
        part_anim.setAttribute("attributeName", "fill");
        part_anim.setAttribute("to", "yellow");
        part_anim.setAttribute("begin", t*timestep + "ms");
        part_anim.setAttribute("dur", timestep + "ms");
        part_anim.setAttribute("fill", "freeze");
        rects[l].appendChild(part_anim);
    }
}

quicksort(1, n);