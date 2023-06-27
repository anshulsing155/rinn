<script>
    import { goto } from "$app/navigation";
        let selected = "";
        import ProgressBar from "../../components/ProgressBar.svelte";
    let progress = 64.35;
    function onChange(event) {
        var inputElement = document.getElementById("myInput1");
        var inputValue1 = inputElement.value;
        document.cookie = "Current ROI="+inputValue1;
        if (event.currentTarget.value == "next") {
            goto("../start/Referral");
        }
    }
</script>
<ProgressBar {progress} />
<main>
    <form class="form-container">
        <label for="state"
            >Current ROI:
            <input type="number"  id="myInput1" placeholder="Enter Your ROI " />
        </label>
        <label class="next">
            <input
                on:change={onChange}
                type="radio"
                value="next"
            />Next
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
 input[type="text"]:hover {
     display: block;
     border: 1;

     border: 2px solid rgb(15, 61, 15);
     border-radius: 10px;
 
 }
     input[type="text"] {
        padding: 0.5rem 0;
        margin-top: 0.5rem;
        border-width: 1px;
        margin: 1rem 0;
        text-align: left;
        border: 1;
        padding: 1em;
        border: 1px solid gray;
        border-radius: 10px;
    }
    input[type="radio"] {
        visibility: hidden;
    }

    .next {
       margin-top: 5%;
        text-align: center;
        background-color: rgb(155, 155, 224);
    }
    /* button{
        width: 100%;
        padding: 10px;
    } */
</style>
