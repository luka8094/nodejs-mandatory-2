<script>
</script>

<div class="season-news">
    <div class="inner-container">
        <div class="split">
            <div class="fashion-mood-photo">
                <h1>MOOD FASHION PHOTO</h1>
            </div>
        </div>
        <div class="split">
            <div class="fashion-mood-tagline-container">
                <div class="fashion-mood-tagline">

                </div>
            </div>
        </div>
    </div>
    <div class="description"></div>
</div>

<style>
    .season-news {
        display: flex;
        position: relative;
        height: 120vh;
        width: 100%;
        background: rgba(0, 0, 0, 0.05);
    }

    .inner-container {
        display: flex;
        position: relative;
        width: 100%;
        height: 95vh;
        margin: 2em 0 0 0;
        background: rgba(0, 0, 0, 0.7);
        z-index: -1;
    }

    .description{
        display: flex;
        position: absolute;
        height: 250px;
        width: 70%;
        border: solid 2px black;
        background: rgba(255,255,255,0.5);
        z-index: 1;
        top: 69%;
        left: 15%;
    }

    .split {
        display: flex;
        height: 100%;
        width: 50%;
        border: dashed;
    }

    .fashion-mood-photo{
        display: flex;
        height: inherit;
        margin-left: auto;
        width: 600px;
        background: rgba(0,0,10,0.1);
        align-items: center;
        justify-content: center;
    }

    .fashion-mood-tagline-container{
        display: flex;
        height: inherit;
        margin-right: auto;
        width: 600px;
        background: rgba(0,0,10,0.2);
        align-items: center;
        justify-content: center;
    }

    .fashion-mood-tagline{
        display: flex;
        position: relative;
        height: 500px;
        width: 400px;
        border: solid 2px black;
        background: rgba(0,0,0,0.3);
        top: -7%;
    }

    .inner-container .split:nth-child(1) {
        background: rgba(0, 150, 20, 0.5);
    }

    .inner-container .split:nth-child(2) {
        background: rgba(67, 243, 90, 0.5);
    }

    @media screen and (max-width: 750px) {
        .inner-container {
            display: flex;
            width: 100%;
            height: 90%;
            margin-top: auto;
            background: rgba(0, 0, 0, 0.7);
        }

        .split {
            display: flex;
            height: 100%;
            width: 50%;
            border: dashed;
        }
    }
</style>
