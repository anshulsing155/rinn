<!-- <script>
  import { getCookie } from '@sveltejs/kit-cookie';

  let cookies = {};

  function getCookies() {
    const cookieString = getCookie();
    const cookieArray = cookieString.split(';');

    for (let i = 0; i < cookieArray.length; i++) {
      const cookie = cookieArray[i].trim().split('=');
      const name = cookie[0];
      const value = cookie[1];
      cookies[name] = value;
    }
  }

  // Call the function to get cookies on component initialization
  getCookies();
</script>

<p>Available cookies:</p>
<ul>
  {#each Object.keys(cookies) as cookieName}
    <li>{cookieName}: {cookies[cookieName]}</li>
  {/each}
</ul> -->
<script>
  import { onMount } from "svelte";
  import "../../app.css";
  let cookies = [];
  
  onMount(() => {
    cookies = document.cookie.split("; ").map((cookieString) => {
      const [name , value] = cookieString.split("=");
      // console.log([name , value])
      
      return { name, value };
    });
  });
</script>

<main class="text-center font-mono text-xl">
<div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-left text-sm font-light">
          <thead class="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" class="px-6 py-4 text-center">All Saved User Data</th>
            </tr>
          </thead>
          <tbody>
            {#each cookies as cookie}
            <tr class="border-b dark:border-neutral-500"></tr>
              <td class="whitespace-nowrap px-6 py-4 text-xl">{cookie.name}</td>
              <td class="whitespace-nowrap px-6 py-4 text-xl">{cookie.value}</td>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</main>


<!-- <form action="" method="POST">
  {#each cookies as cookie}
    <input type="text" name={cookie.name} value={cookie.value} />
  {/each}
 <input type="text" name="Requirment" value="HomeLoan" class="s-7rWotIBe7yq4"> 
  <button type="submit">Submit</button>
</form> -->

<style>
  input {
    display: block;
    /* visibility: hidden; */
  }
  button {
    display: block;
    padding: 10px;
    margin: 10px;
    border: 2px dashed gray;
    border-radius: 5px;
    background-color: aquamarine;
  }
</style>
