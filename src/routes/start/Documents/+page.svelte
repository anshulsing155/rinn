<script>
    import { goto } from "$app/navigation";
    let selected = "";
    import ProgressBar from "../../components/ProgressBar.svelte";
    let progress = 100;
    // function onChange(event) {
    //     event.currentTarget.value;
    //     if (event.currentTarget.value == "buy") {
    //         goto("../start/properties-owned");
    //     } else if (event.currentTarget.value == "lap") {
    //         goto("../start/properties-owned");
    //     } else if (event.currentTarget.value == "balance") {
    //         goto("../start/properties-owned");
    //     }
    // }
    let files;

    $: if (files) {
        // Note that `files` is of type `FileList`, not an Array:
        // https://developer.mozilla.org/en-US/docs/Web/API/FileList
        console.log(files);

        for (const file of files) {
            console.log(`${file.name}: ${file.size} bytes`);
        }
    }
</script>

<ProgressBar {progress} />
<main>
    <form class="form-container" action="" method="POST">
        <label for="avatar">Upload 3 Months Payslips:</label>
        <input
            accept="image/png, image/jpeg"
            bind:files
            id="avatar"
            name="avatar"
            type="file"
        />
        <p class="font-normal">or</p>
        <label for="many">3 years ITR with computation:</label>
        <input bind:files id="many" multiple type="file" />

        <!-- {#if files}
            <h2>Selected files:</h2>
            {#each Array.from(files) as file}
                <p>{file.name} ({file.size} bytes)</p>
            {/each}
        {/if} -->

        <button type="submit" >Submit</button>
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
        width: 50%;
    }
    label {
        display: block;
        font-weight: 400;
        font-size: large;
        text-align: center;
        padding: .5em;
       
    }
    input[type="file"] {
        display: block;
        padding: 0.5rem 0;
        margin-top: 0.5rem;
        border-width: 1px;
        margin: 1rem auto;
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
        width: 100%;
        text-align: center;
        background-color: rgb(155, 155, 224);
    }
    button{
        width: 40%;
        padding: 10px;
        background-color: rgb(155, 155, 224);
        border: yellowgreen;
    }
</style>
