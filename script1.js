function add_display(text){
    s=document.getElementById("text-display").value;
    s=s+text;
    document.getElementById("text-display").value=s;
}
function calculate() {
    try {
        let result = new Function("return " + document.getElementById("text-display").value)();
        document.getElementById("text-display").value = result;
    } catch (error) {
        document.getElementById("body").style="background-color: red;"
        clear_dis();
        document.getElementById("text-display").value="Invalid";
        setTimeout(() => {
            document.getElementById("body").style="background-color: white;"
            clear_dis();
        }, 1000);
    }
}
function clear_dis(){
    document.getElementById("text-display").value='';
}
