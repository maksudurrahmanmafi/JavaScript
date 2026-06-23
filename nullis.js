<script>
let name = null;
let text = "missing";
let result = name ?? text;

document.getElementById("demo").innerHTML = "The name is " + result; 
</script>