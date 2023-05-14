document.querySelector('.btn-thi').onclick = function() {
    const target = document.querySelector('.t3');
    console.log('aa');
    target.scrollIntoView({ behavior: 'smooth' });
}

document.querySelector('.btn-fir').onclick = function() {
    const target = document.querySelector('.t1');
    target.scrollIntoView({ behavior: 'smooth' });
}

// document.querySelector('.btn-sec').onclick = function() {
//     const target = document.querySelector('.t2');
//     target.scrollIntoView({ behavior: 'smooth' });
// }