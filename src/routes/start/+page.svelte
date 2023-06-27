<script>
   
    import { goto } from "$app/navigation";
    import { balance } from './store.js';
    import { home } from './store.js';
    import ProgressBar from "../components/ProgressBar.svelte";


    let progress = 0;
    function onChange(event) {
        let value = event.currentTarget.value;
        document.cookie = "Requirment="+value;
        
            home.set(value);
        if (event.currentTarget.value == "Home Loan") {
            goto("../start/home-loan");   
        } else if (event.currentTarget.value == "LAP") {
            goto("../start/Property-Location");  
        } else if (event.currentTarget.value == "Balance Transfer") {
            balance.set(true);
            goto("../start/Property-Location");
            
        }
    }
    
    
</script>

<ProgressBar {progress} />
<main>
    
    <form  class="form-container" method="POST">
        <label>
            <input
                on:click={onChange}
                type="radio"
                name="amount"
                value="Home Loan"
            /> <span> Home Loan</span>
        </label>
        <label>
            <input
            
                on:change={onChange}
                type="radio"
                name="amount"
                value="LAP"
            /> LAP
        </label>
        <label>
            <input
                on:change={onChange}
                type="radio"
                name="amount"
                value="Balance Transfer"
            /> Balance Transfer
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