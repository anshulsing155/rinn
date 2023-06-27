<script>
    import { goto } from "$app/navigation";
    import { path } from "../store";
    // import { home } from "../store";
    import ProgressBar from "../../components/ProgressBar.svelte";
    let progress = 7.15;
        // function pathVal(){
    //     pathValue = true;
    // }
    function onChange(event) {
        let value = event.currentTarget.value;
        document.cookie = "Stage of Property purchase="+value;
        event.currentTarget.value;
        if (event.currentTarget.value == "Signed the Agreement with Builder or Seller") {
            goto("../start/Property-Location");
        } else if (event.currentTarget.value == "Property Finalised but Agreement is not signed. Need Sanction Letter to see eligiblity ( Validity 3 months)") {
            goto("../start/Property-Location");
        } else if (event.currentTarget.value == "Need only Sanction letter (Validity 3 months)") {
            path.set(true);
            goto("../start/Working-Location");
        }
    }
    // let countValue;

	// home.subscribe(value => {
	// 	countValue = value;
	// });

	
</script>
<!-- {countValue} -->

<ProgressBar {progress} />

<main>
    <form class="form-container" action="" method="POST">
        <label>
            <input
                
                on:change={onChange}
                type="radio"
                name="amount"
                value="Signed the Agreement with Builder or Seller"
            />Signed the Agreement with Builder or Seller
        </label>
        <label>
            <input
                
                on:change={onChange}
                type="radio"
                name="amount"
                value="Property Finalised but Agreement is not signed. Need Sanction Letter to see eligiblity ( Validity 3 months)"
            />Property Finalised but Agreement is not signed. Need Sanction Letter to see eligiblity ( Validity 3 months)
        </label>
        <label>
            <input
                
                on:change={onChange}
                type="radio"
                name="amount"
                value="Need only Sanction letter (Validity 3 months)"
            />Need only Sanction letter (Validity 3 months)
        </label>
        <!-- <button type="submit">Submit</button> -->
    </form>
</main>
<style>
    @import url("https://fonts.googleapis.com/css?family=Muli&display=swap");
 
 * {
     box-sizing: border-box;
 }
 
 main{
     font-family: "Muli", sans-serif;
     display: flex;
     align-items: center;
     justify-content: center;
    
     overflow: hidden;
     margin: 0;
 }.form-container {
     background-color: #ffffff;
     /* border-radius: 10px; */
     /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1); */
     padding-bottom: 100px;
     text-align: center;
     max-width: 100%;
     width: 60%;
 }
 label {
     display: block;
     
     text-align: justify;
  text-justify: inter-word;
     border: 1;
     padding: 1.5rem;
 
     box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
     border-radius: 10px;
     width: 40%;
     margin: 10px auto;
 
 }
 label:hover {
     display: block;
     text-align: left;
     border: 1;
     padding: 1.5rem;
     border: 2px solid rgb(15, 61, 15);
     border-radius: 10px;
     width: 40%;
     margin: 10px auto;
 
 }
 input { 
     visibility: hidden;
 }
 </style>