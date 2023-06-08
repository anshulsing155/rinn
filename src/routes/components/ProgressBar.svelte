<script>
    export let progress = 0;
</script>

<div class="progress-bar">
    <div class="progress" style="width: {progress}%" />
</div>

<style>
    .progress-bar {
        width: 80%;
        height: 4px;
        background-color: rgb(232, 234, 230);
        border-radius: 4px;
        overflow: hidden;
        margin: 5% auto;
    }

    .progress {
        height: 100%;
        background-color: #007bff;
        transition: width 0.3s ease-in-out;
    }
</style>
