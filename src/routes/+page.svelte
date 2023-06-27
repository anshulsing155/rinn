<script>
	import "../app.css";
	import Menu from "./menu.svelte";
	import Footer from "./footer.svelte";
	
	
</script>

<Menu />


<section class="bg-green-50 dark:bg-gray-900 px-10">
	<div
		class="w-11/12 grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-5 xl:gap-0 lg:py-16 lg:grid-cols-12"
	>
		<div class=" mr-auto place-self-center lg:col-span-7 gap">
			<p class="bg-yellow-300 p-2 px-3 inline-block rounded-2xl">
				Introducing
			</p>
			<h1
				class="max-w-2xl text-green-900 opacity-90 mb-1 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white"
			>
				One Day Mortgage<sup>1</sup>
			</h1>
			<h1
				class="max-w-2xl text-green-700 mb-4 text-3xl tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white"
			>
				exclusively at Better
			</h1>
			<p
				class="max-w-md mb-2 font-light text-gray-500 lg:mb-3 md:text-lg lg:text-xl dark:text-gray-400"
			>
				Instead of waiting weeks, now you can lock a rate, share some
				financial info, and get a loan Commitment Letter within the next
				24 hours.<sup>1</sup>
			</p>
			<sup class="text-xsm antialiased text-black-100 opacity-50 mb-8"
				>Customers must qualify. Terms apply.</sup
			>
			<a
				href="#"
				class=" mb-8 block w-full items-center justify-center py-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900"
			>
				Buy A Home
			</a>
			<a
				href="#"
				class=" mx-2 p-20 items-center justify-center py-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900"
			>
				Refinancing
			</a>
			<a
				href="#"
				class=" mx-2 p-20 items-center justify-center py-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900"
			>
				LAP
			</a>

			<!-- <a
					href="#"
					class=" bg-green-700 mt-2 inline-flex items-center justify-center px-5 py-5 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-green-800"
				>
					Refinancing
				</a>
				<a
					href="#"
					class=" bg-green-700 mt-2 inline-flex items-center justify-center px-5 py-5 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-green-800"
				>
				Loan Against Property
				</a>
				<a
					href="#"
					class=" bg-green-700 mt-2 inline-flex items-center justify-center px-5 py-5 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-green-800"
				>
					Refinancing
				</a>
				<a
					href="#"
					class=" bg-green-700 mt-2 inline-flex items-center justify-center px-5 py-5 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-green-800"
				>
				Loan Against Property
			</a> -->
		</div>
		<div class="w-4/5 order-1 lg:mt-0 lg:col-span-5 lg:flex m-8 lg:m-2">
			<img src="src/lib/img/one-day-mortgage.svg" alt="mockup" />
		</div>
	</div>
</section>
<!-- Devider section for Get Started  -->
<section>
	<div class="bg-green-950 text-white py-6 text-center">
		<a href="" class="border p-3 rounded-md">Get Started</a>
	</div>
</section>
<!-- Product Details section -->
<section
	class="bg-green-50 dark:bg-gray-900 py-10 block justify-around gap-0 sm:block sm:justify-center md:flex"
>
	<div class="w-full max-w-sm m-10 dark:bg-gray-800">
		<div class="flex items-baseline text-gray-900 dark:text-white">
			<h2 class=" py-3 text-3xl font-bold tracking-tight text-green-950">
				Real Estate Agents
			</h2>
		</div>
		<p class="font-sm text-green-800">
			Partner with a local expert and save big.
		</p>
		<!-- List -->
		<ul role="list" class="space-y-5 my-7">
			<li class="flex space-x-3">
				<!-- Icon -->
				<svg
					aria-hidden="true"
					class="flex-shrink-0 w-5 h-5 text-green-600 opacity-60 dark:text-blue-500"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><title>Check icon</title><path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/></svg
				>
				<span
					class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
					>$2k off Better Mortgage closing costs <sup>3</sup>
				</span>
			</li>
			<li class="flex space-x-3">
				<!-- Icon -->
				<svg
					aria-hidden="true"
					class="flex-shrink-0 w-5 h-5 text-green-600 opacity-60 dark:text-blue-500"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><title>Check icon</title><path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/></svg
				>
				<span
					class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
					>Selling? List your home for 0%<sup>4</sup></span
				>
			</li>
			<li class="flex space-x-3">
				<!-- Icon -->
				<svg
					aria-hidden="true"
					class="flex-shrink-0 w-5 h-5 text-green-600 opacity-60 dark:text-blue-500"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><title>Check icon</title><path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/></svg
				>
				<span
					class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
					>Non-commissioned Agents</span
				>
			</li>
			<li class="flex space-x-3">
				<span
					class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
					><img
						src="src/lib/img/real-estate.jpeg"
						alt=""
						class="rounded-lg mt-10"
					/></span
				>
			</li>
		</ul>
		<button
			type="button"
			class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-3 inline-flex justify-center w-full text-center"
			>Learn More</button
		>
	</div>
	<div class=" my-14 w-0.5 h-auto bg-gray-500" />
	<div class="w-full max-w-sm m-10 dark:bg-gray-800">
		<div class="flex items-baseline text-gray-900 dark:text-white">
			<h2 class=" py-3 text-3xl font-bold tracking-tight text-green-950">
				Digital home loans
			</h2>
		</div>
		<p class="font-sm text-green-800">
			Low rates. Save thousands. Close fast.
		</p>
		<!-- List -->
		<ul role="list" class="space-y-5 my-7">
			<li class="flex space-x-3">
				<!-- Icon -->
				<svg
					aria-hidden="true"
					class="flex-shrink-0 w-5 h-5 text-green-600 opacity-60 dark:text-blue-500"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><title>Check icon</title><path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/></svg
				>
				<span
					class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
					>Apply 100% online, on your schedule.
				</span>
			</li>
			<li class="flex space-x-3">
				<!-- Icon -->
				<svg
					aria-hidden="true"
					class="flex-shrink-0 w-5 h-5 text-green-600 opacity-60 dark:text-blue-500"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><title>Check icon</title><path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/></svg
				>
				<span
					class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
					>No commissions</span
				>
			</li>
			<li class="flex space-x-3">
				<!-- Icon -->
				<svg
					aria-hidden="true"
					class="flex-shrink-0 w-5 h-5 text-green-600 opacity-60 dark:text-blue-500"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><title>Check icon</title><path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/></svg
				>
				<span
					class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
					>Close 17 days faster than industry avg.
				</span>
			</li>
			<li class="flex space-x-3">
				<span
					class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
					><img
						src="src/lib/img/home-loan.jpeg"
						alt=""
						class="rounded-lg mt-10"
					/></span
				>
			</li>
		</ul>
		<button
			type="button"
			class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-3 inline-flex justify-center w-full text-center"
			>Get pre-approved</button
		>
	</div>
	<div class=" my-14 w-0.5 h-auto bg-gray-500" />
	<div class="w-full max-w-sm m-10 dark:bg-gray-800">
		<div class="flex items-baseline text-gray-900 dark:text-white">
			<h2 class=" py-3 text-3xl font-bold tracking-tight text-green-950">
				List your home for 0%
			</h2>
		</div>
		<p class="font-sm text-green-800">
			List your home for 0% Traditional agents charge 3% listing fees -
			that‘s $15,000 on a $500,000 house!¹
		</p>
		<!-- List -->
		<ul role="list" class="space-y-5 my-7">
			<li class="flex space-x-3">
				<!-- Icon -->
				<svg
					aria-hidden="true"
					class="flex-shrink-0 w-5 h-5 text-green-600 opacity-60 dark:text-blue-500"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><title>Check icon</title><path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/></svg
				>
				<span
					class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
					>Buy before you sell</span
				>
			</li>
			<li class="flex space-x-3">
				<!-- Icon -->
				<svg
					aria-hidden="true"
					class="flex-shrink-0 w-5 h-5 text-green-600 opacity-60 dark:text-blue-500"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><title>Check icon</title><path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/></svg
				>
				<span
					class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
					>Stress-free homebuying<sup>4</sup></span
				>
			</li>
			<li class="flex space-x-3">
				<!-- Icon -->
				<svg
					aria-hidden="true"
					class="flex-shrink-0 w-5 h-5 text-green-600 opacity-60 dark:text-blue-500"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><title>Check icon</title><path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/></svg
				>
				<span
					class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
					>Partner with expert local agents</span
				>
			</li>
			<li class="flex space-x-3">
				<span
					class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
					><img
						src="src/lib/img/for-sale.jpeg"
						alt=""
						class="rounded-lg my-3"
					/></span
				>
			</li>
		</ul>
		<button
			type="button"
			class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-3 inline-flex justify-center w-full text-center"
			>Learn More</button
		>
	</div>
</section>
<!-- Today’s mortgage rates section start -->

<div class="p-20 block justify-around gap-0 sm:block sm:justify-center md:flex">
	<div class="">
		<h3 class="text-6xl font-bold my-10">Today’s <br /> mortgage rates</h3>
		<p class="mb-10 w-1/2 text-gray-700">
			Tap that green button to see your personalized mortgage rates and
			custom mortgage recommendation.
		</p>
		<button
			type="button"
			class=" text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-lg px-10 py-5 inline-flex justify-center text-center"
			>See Your Rates</button
		>
	</div>
	<div class="w-2/3 bg-gray-100 rounded-2xl">
		<h3 class="m-auto p-10 text-2xl opacity-60 font-semibold">
			Hey, we currently don’t have service in your area. We will notify
			you when we are there.
		</h3>
		<input
			type="text"
			placeholder="Email"
			class=" w-4/5 block px-10 py-5 m-auto border border-slate-400 bg-gray-100 rounded-lg"
		/>
		<button
			type="submit"
			class="block m-auto border w-4/5 py-5 mt-3 bg-green-800 text-white rounded-xl"
			>Add Email</button
		>
	</div>
</div>

<!-- Container for demo purpose -->

<!-- Section: Design Block -->
<section
	class=" text-gray-800 text-center lg:text-left background-radial-gradient"
>
	<div
		class=" opacity-90 relative w-full overflow-hidden bg-no-repeat bg-cover"
		style="
            background-position: 50%;
            background-image: url('src/lib/img/customers.jpeg');
            height: 550px;
          "
	>
		<div
			class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
			style="background-color: rgba(0, 0, 0, 0.75)"
		>
			<div class="flex justify-left items-left h-full">
				<div
					class="text-justify text-white px-6 py-6 md:py-0 md:px-12 max-w-[800px] md:align-middle"
				>
					<h2
						class="text-2xl md:text-4xl xl:text-6xl font-thin leading-3 md:align-middle py-20"
					>
						<!-- Are you ready <br /><span>for an adventure</span> -->
						<blockquote>
							<q
								><br />We needed to make an offer the next day.
								Better made it happen.&nbsp;</q
							>
						</blockquote>
					</h2>
					<p class="text-lg font-thin">
						Shaina & Tessa | Better Mortgage customers
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- Section: Design Block -->
<!-- Container for demo purpose -->
<!-- Today’s mortgage rates section start -->

<div
	class="p-20 bg-orange-50 block justify-around gap-0 mt-0 sm:block sm:justify-center md:flex"
>
	<div class="bg-green-950 md:flex m-5 p-20 rounded-2xl">
		<div class="">
			<h3 class="w-3/5 text-4xl font-bold text-white my-8">
				The tools you need to make that next step
			</h3>
			<p class="mb-8 text-white w-2/3 text-justify">
				How much home can I afford? Should I pay points to get a lower
				rate? Should I refinance? Tap to find out.
			</p>
			<button
				type="button"
				class=" text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-lg px-10 py-5 inline-flex justify-center text-center"
				>See Your Rates</button
			>
		</div>
		<div class=" rounded-2xl">
			<img src="src/lib/img/mortgage-calculator.jpeg" alt="" srcset="" />
			<small style="font-size: 10px;color:white;"
				>Image is for example purposes only. Your actual rates, monthly
				payment, and loan amount will vary.</small
			>
		</div>
	</div>
</div>

<!-- Container for demo purpose -->
<section>
	<div class="bg-green-200">
		<h3 class="text-center">Ready to get started?</h3>
		<p class="text-center">
			Get pre-approved with Better Mortgage in as little as 3 minutes.
		</p>
		<button type="button" class=" text-center border px-10 py-5 bg-green-800 text-white rounded-xl m-auto">Get Started</button>
	</div>
</section>
<Footer />
<!-- <a href="/start">Get Started</a>
<h1 class="text-3xl font-bold underline">Hello world!</h1>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style> -->
