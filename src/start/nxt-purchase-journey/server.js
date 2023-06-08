import { onMount } from "svelte";
import { goto } from "$app/navigation";




export function handleClick(e) {
    let x = e.target.value;
    if (x == "Signed a purchase agreement") {
        goto('./nxt-purchase-property-address')
    } 
    else if (x == "Making offers") {
        goto('./nxt-purchase-timeline')
    }
    else if (x == "Going to open houses") {
        goto('./nxt-purchase-timeline')
    }
    else if (x == "Just researching") {
        goto('./nxt-purchase-timeline')
    }
}


