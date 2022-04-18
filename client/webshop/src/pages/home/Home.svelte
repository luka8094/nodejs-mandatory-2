<script>
    import FirstSection from "../../components/home/FirstSection.svelte";
    import SecondSection from "../../components/home/SecondSection.svelte";
    import ThirdSection from "../../components/home/ThirdSection.svelte";
</script>

<!-- <h1>This is the home page</h1> -->
<div class="splash">
    <h1>SPLASH</h1>
    <div class="cta-news">
        <div class="inner-cta-news">
            <div class="cta-announcement-container">
                <div class="cta-news-button">READ MORE</div>
                <p>NEW ARRIVALS</p>
            </div>
        </div>
    </div>
</div>
<FirstSection />
<SecondSection />
<ThirdSection />

<style>
    h1 {
        display: flex;
        justify-content: center;
        margin: auto 0;
    }

    .splash {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: auto;
        height: 80vh;
        background: cornflowerblue;
    }

    .splash h1 {
        margin: auto;
    }

    .cta-news {
        display: flex;
        width: 100%;
        height: 5em;
        background: rgba(0, 0, 0, 0.5);
    }

    .inner-cta-news {
        display: flex;
        height: 5em;
        width: 80%;
        padding: 5px 5px 0 5px;
        margin: auto;
        overflow: hidden;
        background: rgba(255, 255, 255, 0.5);
    }

    .cta-announcement-container {
        display: flex;
        height: 55px;
        width: calc(100% - 5px);
        align-items: center;
        margin: 0 auto;
        background: rgba(255, 100, 150, 0.5);
    }

    .cta-news-button {
        display: flex;
        height: 50px;
        width: 200px;
        background: aliceblue;
        border: solid 0.1px black;
        justify-content: center;
        align-items: center;
    }

    .cta-announcement-container p {
        width: 30%;
    }

    @media screen and (max-width: 750px) {
        .splash {
            width: calc(100% - 20px);
        }
    }
</style>
