function cone(r, h) {
    let s = Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2));
    let v = (Math.PI * Math.pow(r, 2) * h) / 3;
    let b = Math.PI * Math.pow(r, 2);
    let l = Math.PI * r * s;
    let a = l + b;

    console.log(`volume = ${v.toFixed(4)}`);
    console.log(`area = ${a.toFixed(4)}`);
    
}

cone(3, 5);