<script>
    import { goto } from "$app/navigation";

    let selected = "";
    import "./start.css";
    function onChange(event) {
        event.currentTarget.value;
        if (event.currentTarget.value == "buy") {
            goto("../start/home-loan");
        } else if (event.currentTarget.value == "lap") {
            goto("/");
        } else if (event.currentTarget.value == "balance") {
            goto("/");
        }
    }
</script>

<main>
    <form class="form-container" action="" method="POST">
        <label>
            <input
                checked={selected === 10}
                on:change={onChange}
                type="radio"
                name="amount"
                value="buy"
            /> Home Loan
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

