<svelte:head>
	<title>contact | jacksonsalopek.com</title>
	<meta name="description" content="Contact Jackson Salopek" />
</svelte:head>
<div class="js-contact">
	<form action="https://api.web3forms.com/submit" method="POST">
		<input type="hidden" name="access_key" value="d54910cc-c39e-4ab9-9198-cbc164b774b2" />
		<div class="js-contact-row">
			<h3>Name</h3>
			<input type="text" name="name" placeholder="John Doe" required />
		</div>
		<div class="js-contact-row">
			<h3>Email</h3>
			<input type="email" name="email" placeholder="john.doe@email.com" required />
		</div>
		<div class="js-contact-row">
			<h3>Message</h3>
			<textarea name="message" placeholder="Your message" required />
		</div>
		<input type="hidden" name="redirect" value="https://web3forms.com/success" />
		<br />
		<button class="js-contact-button submit" type="submit"><h4>Submit</h4></button>
	</form>
</div>
