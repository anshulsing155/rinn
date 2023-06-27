<script>
    import { goto } from "$app/navigation";
    import { balance } from "../store";
    let selected = "";
    import ProgressBar from "../../components/ProgressBar.svelte";
    let progress = 50.05;
    let countValue;

    balance.subscribe((value) => {
        countValue = value;
    });
    function onChange(event) {
        let value = event.currentTarget.value;
        document.cookie = "No. of properties already owned=" + value;
        if (countValue == true) goto("../start/Financial-Institution");
        else if (
            event.currentTarget.value == "0 Property" &&
            countValue == false
        ) {
            goto("../start/Referral");
        } else if (
            event.currentTarget.value == "1-2 Property" &&
            countValue == false
        ) {
            goto("../start/Referral");
        } else if (
            event.currentTarget.value == "More then 2 Property" &&
            countValue == false
        ) {
            goto("../start/Referral");
        }
    }
</script>

<ProgressBar {progress} />
<main>
    <form class="form-container" action="" method="POST">
        <label>
            <input on:change={onChange} type="radio" value="0 Property" /> 0 Property
        </label>
        <label>
            <input on:change={onChange} type="radio" value="1-2 Property" /> 1-2
            Property
        </label>
        <label>
            <input
                on:change={onChange}
                type="radio"
                value="More then 2 Property"
            /> More then 2 Property
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