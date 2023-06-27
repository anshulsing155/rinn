
import { onMount } from 'svelte';


onMount(() => {
    let cookies = [];
    // Retrieve all cookies
    cookies = document.cookie.split('; ').map(cookieString => {
      const [data] = cookieString.split('=');
      console.log(data);
      return { name, value }; 
    });
  });