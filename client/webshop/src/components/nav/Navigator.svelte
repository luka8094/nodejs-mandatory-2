<script>
    import {Router, Link, Route} from "svelte-navigator"
    import {onMount} from "svelte"
    import Home from "../../pages/home/Home.svelte"
    import Products from "../../pages/products/Products.svelte"
    import Profile from "../../pages/profile/Profile.svelte"
    import Logo from "../logo/Logo.svelte"

    import { mainURL } from "../../stores/kernel"

    console.log(mainURL)

    let users = []

    onMount(async () => {
        const response = await fetch(mainURL+"/api/users")
        console.log(await fetch("/api/users"))
        const {data} = await response.json()
        users = data
    })

    console.log(users)

</script>

<Logo/>
<Router>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/account">Account</Link>
    </nav>
    <div>
        <Route path="/" component={Home} />
        <Route path="/shop" component={Products} />
        <Route path="/account" component={Profile} />
    </div>
</Router>

<style>

    nav{
        display: flex;
        height: 2em;
        width: 100%;
        background: lightgrey;
        color: white;
    }

    @media screen and (max-width: 640px) {
		nav{
			max-width: none;
		}
	}
</style>