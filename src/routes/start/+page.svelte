<script>
    import { goto } from "$app/navigation";
    import ProgressBar from "../components/ProgressBar.svelte";
    // import "../../app.css";
    import "./start.css";
    let progress = 0;
    let selected = "";

    function onChange(event) {
        event.currentTarget.value;
        if (event.currentTarget.value == "buy") {
            goto("../start/home-loan");
        } else if (event.currentTarget.value == "lap") {
            goto("../start/Property-Location");
        } else if (event.currentTarget.value == "balance") {
            goto("../start/Property-Location");
        }
    }
</script>

<main>
    <ProgressBar {progress} />
    <form class="form-container" action="" method="POST">
        <label>
            <input
                checked={selected === 10}
                on:change={onChange}
                type="radio"
                name="amount"
                value="buy"
            /> <span class="text-4xl"> Home Loan</span>
        </label>
        <label>
            <input
                checked={selected === 20}
                on:change={onChange}
                type="radio"
                name="amount"
                value="lap"
            /> LAP
        </label>
        <label>
            <input
                checked={selected === 30}
                on:change={onChange}
                type="radio"
                name="amount"
                value="balance"
            /> Balance Transfer
        </label>
        <!-- <button type="submit">Submit</button> -->
    </form>
</main>
