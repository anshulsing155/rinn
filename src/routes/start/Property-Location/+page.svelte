<script>
    import { goto } from "$app/navigation";

    let selected = "";

    function onChange(event) {
        event.currentTarget.value;
        if (event.currentTarget.value == "next") {
            goto("../start/Working-Location");
        }
    }
</script>

<main>
    <form class="form-container">
        <label for=""
            >Property State:
            <input
                checked={selected === 10}
                type="Text"
                name="amount"
                placeholder="Enter Property State"
            />
        </label>
        <label for=""
            >Property City:

            <input
                checked={selected === 20}
                type="text"
                name="amount"
                placeholder=" Enter Property City"
            />
        </label>
        <label class="next">
            <input
                checked={selected === 10}
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
