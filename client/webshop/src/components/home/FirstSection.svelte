<div class="outer-container">
    <div class="inner-container-one">
        <div class="spotlight-container">
            <div class="spotlight-item"><h1>SPOTLIGHT ITEM/BRAND</h1></div>
            <div class="spotlight-item"><h1>SPOTLIGHT ITEM/BRAND</h1></div>
        </div>
    </div>
    <div class="inner-container-two">
        <div class="spotlight-item">
            <h1>SPOTLIGHT ITEM/BRAND</h1>
        </div>
    </div>
</div>

<style>
    .outer-container {
        display: flex;
        flex-direction: column;
        height: 75vh;
        width: 100%;
        background: rgba(0, 255, 0, 0.5);
        justify-content: center;
    }

    .inner-container-one,
    .inner-container-two {
        display: flex;
        height: calc(70vh / 2);
        width: 100%;
    }

    .inner-container-one {
        background: rgba(238, 255, 0, 0.7);
    }

    .inner-container-two {
        background: rgba(255, 145, 0, 0.5);
    }

    .spotlight-container {
        display: flex;
        width: 85%;
        background: rgba(255, 20, 100, 0.7);
        margin: 0 auto;
    }

    .spotlight-item{
        justify-content: center;
        align-items: center;
    }

    .inner-container-one .spotlight-container > .spotlight-item:nth-child(1),
    .inner-container-one .spotlight-container > .spotlight-item:nth-child(2) {
        display: flex;
        height: 225px;
        width: 590px;
        margin: auto;
        border: solid 3px black;
    }

    .inner-container-two .spotlight-item {
        display: flex;
        height: 225px;
        width: 81.3%;
        margin: auto;
        border: solid 3px black;
    }

    @media screen and (max-width: 640px) {
    }

    @media screen and (max-width: 750px) {
        .spotlight-container {
            width: 100%;
        }

        .inner-container-one
            .spotlight-container
            > .spotlight-item:nth-child(1),
        .inner-container-one
            .spotlight-container
            > .spotlight-item:nth-child(2) {
            display: flex;
            height: 170px;
            width: 330px;
            margin: auto;
            border: solid 3px black;
        }

        .inner-container-two .spotlight-item {
            display: flex;
            height: 170px;
            width: 94%;
            margin: auto;
            border: solid 3px black;
        }
    }
</style>
