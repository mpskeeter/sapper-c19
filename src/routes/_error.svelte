<script>
	export let status;
	export let error;
	$: errorHeader = (status === 404 ? 'Page Not Found' : 'Error');
</script>

<svelte:head>
	<title>Error = {status}</title>
</svelte:head>

<style>
	.container {
		margin: 40px;
	}
</style>

<div class="container">
	<article
		class="message"
		class:is-warning={status === 404}
		class:is-danger={status !== 404}
	>
		<div class="message-header">
			<p>{errorHeader}</p>
		</div>
		<div class="message-body">
		{#if status === 404}
			<a href="/">Click here</a> to go back home.
		{:else}
			{error.message}
		{/if}
		</div>
	</article>
</div>
