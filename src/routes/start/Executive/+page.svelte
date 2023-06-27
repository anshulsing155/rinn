<script>
    import { goto } from "$app/navigation";
    import "../../../app.css";
    import ProgressBar from "../../components/ProgressBar.svelte";
    let progress = 92.95;
    function onChange(event) {
        event.currentTarget.value;
        if (event.currentTarget.value == "next") {
            goto("../start/Documents");
        }
    }
</script>

<ProgressBar {progress} />
<section class="">
    <main>
        <form class="form-container ">
            <div class=" bg-white flex flex-row flex-wrap ">
                <div class=" m-auto w-1/2">
                    <!-- Profile Card -->
                    <div
                        class="rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased"
                        style="
    background-image: url('https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
    background-repeat: no-repat;
    background-size: cover;
    background-blend-mode: multiply;
  "
                    >
                        <div class="md:w-1/3 w-full">
                            <img
                                class="rounded-lg shadow-lg antialiased"
                                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                            />
                        </div>
                        <div
                            class="md:w-2/3 w-full px-3 flex flex-row flex-wrap"
                        >
                            <div
                                class="w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0"
                            >
                                <div class="text-2xl text-white leading-tight">
                                    Anshul Singh
                                </div>
                                <div
                                    class="text-normal text-gray-300 hover:text-gray-400 cursor-pointer m-1"
                                >
                                    <span
                                        class="border-b border-dashed border-gray-500 pb-1"
                                    >
                                        Executive</span
                                    >
                                </div>
                                <div
                                    class="text-normal text-gray-300 hover:text-gray-400 cursor-pointer m-1"
                                >
                                    <span
                                        class="border-b border-dashed border-gray-500 pb-1"
                                    >
                                        +91-1234567890</span
                                    >
                                </div>
                                <div
                                    class="text-normal text-gray-300 hover:text-gray-400 cursor-pointer m-5"
                                >
                                    <span
                                        class="border rounded border-gray-500 p-1 bg-green-700"
                                    >
                                        Call Now</span
                                    >
                                </div>
                                <!-- <div class="text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0">Last Seen: <b>2 days ago</b></div> -->
                            </div>
                        </div>
                    </div>
                    <!-- End Profile Card -->
                </div>
            </div>

            <!-- component -->

            <div class="flex flex-col justify-center items-center  ">
                <div
                    class="relative flex flex-col items-center rounded-[20px] w-1/3 mt-10 bg-red-100 mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none"
                >
                    <div
                        class="relative flex h-32 w-full justify-center rounded-xl bg-cover"
                    >
                        <img
                            src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png"
                            class="absolute flex h-32 w-full justify-center rounded-xl bg-cover"
                        />
                        <div
                            class="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700"
                        >
                            <img
                                class="h-full w-full rounded-full"
                                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="mt-16 flex flex-col items-center">
                        <h4
                            class="text-xl font-bold text-navy-700 dark:text-white"
                        >
                            Anshul Singh
                        </h4>
                        <p class="text-base font-normal text-gray-600">
                            Advisor
                        </p>
                    </div>
                    <div class="mt-6 mb-3 flex gap-14 md:!gap-14">
                        <div class="flex flex-col items-center justify-center">
                            <p
                                class="text-2xl font-bold text-navy-700 dark:text-white"
                            >
                                +91-1234567890
                            </p>
                            <p
                                class="text-sm font-normal text-gray-600 bg-green-300 m-5 p-3 rounded-xl"
                            >
                                Call Now
                            </p>
                        </div>
                    </div>
                </div>
            </div>

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
</section>

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
    }
    label {
        display: block;
        margin: 1rem 0;
        text-align: left;
        border: 1;
        padding: 0.5em;
        border: 1px solid gray;
        border-radius: 10px;
    }
    input[type="radio"] {
        visibility: hidden;
    }

    .next {
        width: 20%;
        margin: 10px auto;
        text-align: center;
        background-color: rgb(155, 155, 224);
    }
    /* button{
    width: 100%;
    padding: 10px;
} */
</style>
