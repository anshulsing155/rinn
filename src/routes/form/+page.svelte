<script>
    import { ButtonData } from "./server.js";
    import "/src/app.css";
    import Footer from "./Footer.svelte";

    let x = "";
    let array = [];
    let values = "";
    let heading = "";
    let content = "";
    for (const key in ButtonData.Start.Data) {
        //console.log(key);
        if (
            ButtonData.Start.Data.hasOwnProperty.call(
                ButtonData.Start.Data,
                key
            )
        ) {
            const element = ButtonData.Start.Data[key];
            //console.log(element);
            array.push(element);
        }
    }
    const entries = ButtonData.Start.Type;
    const h1 = ButtonData.Start;
    const p = ButtonData.Start;

    //console.log(entries);
    //const [type, value] = entries[0];
    values = entries;
    // heading = h1;
    // content = p;

    // for (const item in data.start.name) {
    //     if (data.start.name.hasOwnProperty.call(data.start.name, item)) {
    //         const element = data.start.name[item];
    //         console.log(element);
    //         if (element == "type") {
    //             array = array;
    //         } else {
    //             array.push(element);
    //             array = array;
    //         }
    //     }
    // }
    // const entries = Object.entries(data.start.type);
    // const [type, value] = entries[0];
    // values = value;
    // for (const item in data.start.name) {
    //     console.log();
    //     if (item == "type") {
    //         array = array;
    //     } else {
    //         array.push(item);
    //         array = array;
    //     }
    // }

    function handleClick(e) {
        array = [];
        x = e.target.value;
        for (const item in data[x].name) {
            // if (item == "type") {
            //     array = array;
            // } else {
            if (data[x].name.hasOwnProperty.call(data[x].name, item)) {
                const element = data[x].name[item];
                //console.log(element);
                array.push(element);
            }
            // }
        }
        //     const entries = Object.entries(data[x]);
        //     const [type, value] = entries[0];
        //     values = value;
    }
</script>
<div class=" flex flex-row justify-between w-4/5 m-auto p-5 ">
    <div class="order-last md:hidden" >
        <p>
            <strong>$100 billion</strong> in online home loans
        </p>
    </div>
    <div class="order-1">
        <p>
            <i class="material-icons">perm_phone_msg</i><a href="tel:4155238837" > (415) 523 8837</a><span>Questions?</span> Give
            us a call.
        </p>
    </div>
</div>
<div>
    <h3 class="text-left p-4">
        <span class="text-green-500"> Rinn </span><br /> Mortgage
    </h3>
</div>

<form action="">
    {@html heading}
    {#each array as element, i (element)}
        <input
            type={values}
            id={element}
            value={element}
            name={element.split(" ").join("")}
            on:click={handleClick}
        />
    {/each}
    <div class="content">{@html content}</div>
</form>
<h3 class="sm:text-center lg:text-right">anshul sing</h3>
<Footer />

<!-- <h1 class="text-3xl ">{x}</h1>
<br />
<h1 class="text-3xl  ">{array}</h1> -->

<style>
    /* :global(p) {
    color:pink;
} */
    :global(h1) {
        margin: auto;
        text-align: center;
        font-size: xx-large;
        font-weight: 500;
    }
    input[type="button"] {
        display: block;
        margin: 2% auto;
        padding: 2%;
        border: 2px solid gray;
        width: 30%;
        border-radius: 20px;
        border: 1px solid gray;
    }
    input[type="button"]:hover {
        border: 2px solid rgb(56, 92, 3);
        border-radius: 20px;
        transition: 3ms;
    }
    .content {
        background-color: gray;
        width: 40%;
        margin: auto;
        text-align: left;
        padding: 20px;
    }
    .top-bar {
        background-color: #046b1e;
        color: #fff;
        padding: 10px;
    }
</style>
