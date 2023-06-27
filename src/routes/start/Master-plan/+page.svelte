<script>
    import { goto } from "$app/navigation";
    import ProgressBar from "../../components/ProgressBar.svelte";
    let progress = 35.75;
    let selected = "";
    function onChange(event) {
        let value = event.currentTarget.value;
        document.cookie = "Is it part of Master plan of City ="+value;
        if (event.currentTarget.value == "Property selected is : Authorised") {
            goto("../start/Property-Type");
        } else if (event.currentTarget.value == "Property selected is : UnAuthorised") {
            goto("../start/Property-Type");
        } else if (event.currentTarget.value == "Property selected is : Don't Know") {
            goto("../start/Property-Type");
        }
    }
</script>
<ProgressBar {progress} />
<main>
    <form class="form-container" action="" method="POST">
        <label>
            <input
                checked={selected === 10}
                on:change={onChange}
                type="radio"
               
                value="Property selected is : Authorised"
            /> Authorised
        </label>
        <label>
            <input
                checked={selected === 20}
                on:change={onChange}
                type="radio"
               
                value="Property selected is : UnAuthorised"
            /> UnAuthorised
        </label>
        <label>
            <input
                checked={selected === 30}
                on:change={onChange}
                type="radio"
                
                value="Property selected is : Don't Know"
            /> Don't Know
        </label>
        <!-- <button type="submit">Submit</button> -->
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