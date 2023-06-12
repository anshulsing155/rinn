<script>
    import { goto } from "$app/navigation";
    import { balance } from './store.js';
    import ProgressBar from "../components/ProgressBar.svelte";
    let progress = 0;

    function onChange(event) {
        event.currentTarget.value;
        if (event.currentTarget.value == "buy") {
            goto("../start/home-loan"); 
        } else if (event.currentTarget.value == "lap") {
            goto("../start/Property-Location");
        } else if (event.currentTarget.value == "balance") {
            balance.set(true);
            goto("../start/Property-Location");
        }
    }
</script>

<main>
    <ProgressBar {progress} />
    <form class="form-container" action="" method="POST">
        <label>
            <input
                on:change={onChange}
                type="radio"
                name="amount"
                value="buy"
            /> <span> Home Loan</span>
        </label>
        <label>
            <input
            
                on:change={onChange}
                type="radio"
                name="amount"
                value="lap"
            /> LAP
        </label>
        <label>
            <input
                on:change={onChange}
                type="radio"
                name="amount"
                value="balance"
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

main {
    font-family: "Muli", sans-serif;
    overflow: hidden;
    margin: 0;
}
.form-container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow:  0 10px 20px rgba(0, 0, 0, 0.1),  0 6px 6px rgba(0, 0, 0, 0.1);
    padding: 50px 20px;
    text-align: center;
    width: 450px;
    margin: 10% auto;
}
label {
    display:block;
    margin: 1rem 0;
    text-align: left;
    border: 1;
    padding: 1rem;
    border: 1px solid gray;
    border-radius: 10px;
    font-weight: 550;
    font-size: large;
}
input{
    visibility: hidden;
}
</style>