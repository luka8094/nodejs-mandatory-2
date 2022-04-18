<script>
	import Navigator from "./components/nav/Navigator.svelte";

	//export let name;
</script>



<main>
	<Navigator />

</main>

<style>
	main {
		text-align: center;
		padding: 0;
		max-width: 240px;
		margin: 0;
		box-sizing: border-box;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
