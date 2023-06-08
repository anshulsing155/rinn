import { onMount } from "svelte";
import { goto } from "$app/navigation";
export function handleClick(e) {
    let x = e.target.value;
    if (x == "Buying a home") {
        goto('/start/nxt-purchase-journey')
    } 
    else if (x == "Refinancing") {
        goto('/start/nxt-cashout')
    }
    else if (x == "Cash out refinance") {
        goto('/start/nxt-subject-property-address')
    }
    else if (x == "Home Equity Line of Credit") {
        goto('/start/nxt-heloc-intro')
    }
}


