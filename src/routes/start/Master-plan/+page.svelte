<script>
    import { goto } from "$app/navigation";
    let selected = "";
    import "./start.css";
    function onChange(event) {
        event.currentTarget.value;
        if (event.currentTarget.value == "buy") {
            goto("../start/Property-Type");
        } else if (event.currentTarget.value == "lap") {
            goto("../start/Property-Type");
        } else if (event.currentTarget.value == "balance") {
            goto("../start/Property-Type");
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
            /> Authorised
        </label>
        <label>
            <input
                checked={selected === 20}
                on:change={onChange}
                type="radio"
                name="amount"
                value="lap"
            /> UnAuthorised
        </label>
        <label>
            <input
                checked={selected === 30}
                on:change={onChange}
                type="radio"
                name="amount"
                value="balance"
            /> Don't Know
        </label>
        <!-- <button type="submit">Submit</button> -->
    </form>
</main>

