<script>
    import { goto } from "$app/navigation";
    import { balance } from "../store";
    let selected = "";
    import ProgressBar from "../../components/ProgressBar.svelte";
    let progress = 50.05;
    let countValue;

	balance.subscribe(value => {
		countValue = value;
	});
    function onChange(event) {
        event.currentTarget.value;
        if (countValue == true )
        goto("../start/Financial-Institution")
        else if (event.currentTarget.value == "buy" && countValue == false ) {
            goto("../start/Referral");
        }
        else if (event.currentTarget.value == "lap" && countValue == false ) {
            goto("../start/Referral");
        }
        else if (event.currentTarget.value == "balance" && countValue == false ) {
            goto("../start/Referral");
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
                name="amount"
                value="buy"
            /> 0 Property
        </label>
        <label>
            <input
                checked={selected === 20}
                on:change={onChange}
                type="radio"
                name="amount"
                value="lap"
            /> 1-2 Property
        </label>
        <label>
            <input
                checked={selected === 30}
                on:change={onChange}
                type="radio"
                name="amount"
                value="balance"
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

    main {
        font-family: "Muli", sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        overflow: hidden;
        margin: 0;
    }
    .form-container {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
        padding: 50px 20px;
        text-align: center;
        max-width: 100%;
        width: 350px;
    }
    label {
        display: block;
        margin: 1rem 0;
        text-align: left;
        border: 1;
        padding: 1em;
        border: 1px solid gray;
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
    
.next{
    width: 100%;
    text-align: center;
    background-color: rgb(155, 155, 224);
}
    /* button{
        width: 100%;
        padding: 10px;
    } */
</style>