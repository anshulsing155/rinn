<script>
    export let progress = 0;
    import '../../app.css';
</script>

<div class="progress-bar">
    <div class="progress" style="width: {progress}%" />
</div>


    <img class="relative rounded-full m-auto  h-[77px] w-[77px] -top-20 " src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar11.1060b63041fdffa5f8ef.png' alt="" />
  
            

<style>
    .progress-bar {
        width: 80%;
        height: 4px;
        background-color: rgb(232, 234, 230);
        border-radius: 4px;
        overflow: hidden;
        margin: 3% auto;
    }

    .progress {
        height: 100%;
        background-color: #007bff;
        transition: width 0.3s ease-in-out;
    }
</style>
