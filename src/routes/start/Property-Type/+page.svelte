<script>
    import { goto } from "$app/navigation";

    import ProgressBar from "../../components/ProgressBar.svelte";
    let progress = 42.9;
    function onChange(event) {
        let value = event.currentTarget.value;
        document.cookie = "Type of Property=" + value;
        event.currentTarget.value;
        if (event.currentTarget.value == "Row House") {
            goto("../start/properties-owned");
        } else if (event.currentTarget.value == "Flat") {
            goto("../start/properties-owned");
        } else if (event.currentTarget.value == "Floor") {
            goto("../start/properties-owned");
        }
         else if (event.currentTarget.value == "Plot") {
            goto("../start/properties-owned");
        }
    }
</script>

<ProgressBar {progress} />
<main>
    <form class="form-container" action="" method="POST">
        <label>
            <input on:change={onChange} type="radio" value="Row House" /> Row House
        </label>
        <label>
            <input on:change={onChange} type="radio" value="Flat" /> Flat
        </label>
        <label>
            <input on:change={onChange} type="radio" value="Floor" /> Floor
        </label>
        <label>
            <input on:change={onChange} type="radio" value="Plot" /> Plot
        </label>
    </form>
</main>
<style>
    @import url("https://fonts.googleapis.com/css?family=Muli&display=swap");
 
 * {
     box-sizing: border-box;
 }
 
 main{
     font-family: "Muli", sans-serif;
     display: flex;
     align-items: center;
     justify-content: center;
    
     overflow: hidden;
     margin: 0;
 }.form-container {
     background-color: #ffffff;
     /* border-radius: 10px; */
     /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1); */
     padding-bottom: 100px;
     text-align: center;
     max-width: 100%;
     width: 60%;
 }
 label {
     display: block;
     text-align: left;
     border: 1;
     padding: 1.5rem;
 
     box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
     border-radius: 10px;
     width: 40%;
     margin: 10px auto;
 
 }
 label:hover {
     display: block;
     text-align: left;
     border: 1;
     padding: 1.5rem;
     border: 2px solid rgb(15, 61, 15);
     border-radius: 10px;
     width: 40%;
     margin: 10px auto;
 
 }
 input { 
     visibility: hidden;
 }
 </style>