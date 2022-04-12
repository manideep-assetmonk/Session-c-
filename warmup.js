function ab(){
    
    console.log('TIMED OUT!');
}
function ac(){
    /**
     * using a setTimeout() setting a time of 300ms
     * after 300ms has elapsed,print output 'TIMED OUT!'.
     */
    setTimeout(ab,300);
}
ac();