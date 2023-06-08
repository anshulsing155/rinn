<script lang="ts">
    import { goto , beforeNavigate ,afterNavigate} from "$app/navigation";    
    
    function onChange(event) {
        event.currentTarget.value;
        if (event.currentTarget.value == "next") {
            goto("../start/Master-plan");
        }
    }
    beforeNavigate((navigate) => {
        console.log({route: navigate})
    });
    afterNavigate((navigate) => {
        let route = navigate.from?.route.id;
        console.dir(route);
    });
    import "../start.css"
</script>

<main>
    <form class="form-container">
        <label for=""
            >Your Working State:
            <input type="Text" name="amount" placeholder="Enter State" />
        </label>
        <label for=""
            >Your Working City:

            <input type="text" name="amount" placeholder=" Enter City" />
        </label>
        <label class="next">
            <input
                on:change={onChange}
                type="radio"
                name="amount"
                value="next"
            />Next
        </label>
        <!-- <button on:change={onChange} value="next">Next</button> -->
        <!-- <button type="submit">Submit</button> -->
    </form>
</main>

