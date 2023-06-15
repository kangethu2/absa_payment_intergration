<template>
	<!-- Payment component -->
	<div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
		<form @submit.prevent="submitForm" class="relative py-3 sm:max-w-xl sm:mx-auto">
			<div class="relative py-3 sm:max-w-xl sm:mx-auto">
				<div
					class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
				</div>
				<div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
					<div class="max-w-md mx-auto">
						<div>
							<h1 class="text-2xl font-semibold">Payment details capture!</h1>
							<!-- <p>Unique ID: {{ signed_field_names }}</p> -->

						</div>
						<div class="divide-y divide-gray-200">
							<div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

								<!-- Hidden fields-->
								<input type="hidden" name="access_key">
								<input type="hidden" name="profile_id">
								<input type="hidden" name="transaction_uuid">
								<input type="hidden" v-model="signed_field_names" name="signed_field_names">
								<input type="hidden" name="unsigned_field_names">
								<input type="hidden" name="signed_date_time">
								<input type="hidden" name="locale">
								<input type="hidden" name="bill_to_address_line1">
								<!-- End of hidden files-->

								<div class="relative">
									<input autocomplete="on" id="transaction_type" v-model="transaction_type" name="text"
										type="text"
										class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
										placeholder="transaction_type" />
									<label for="transaction_type"
										class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">transaction_type</label>
								</div>
								<div class="relative">
									<input autocomplete="off" id="reference_no" v-model="reference_number"
										name="reference_no" type="text"
										class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
										placeholder="reference_no" />
									<label for="reference_no"
										class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">reference_no</label>
								</div>
								<div class="relative">
									<input autocomplete="off" id="amount" v-model="amount" name="amount" type="text"
										class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
										placeholder="amount" />
									<label for="reference_no"
										class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">amount</label>
								</div>
								<div class="relative">
									<input autocomplete="off" id="currency" v-model="currency" name="currency" type="text"
										class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
										placeholder="currency" />
									<label for="reference_no"
										class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">currency</label>
								</div>
								<div class="relative">
									<button type="submit"
										class="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>

								</div>
								<div>
									<!-- <li>
								<router-link to="confirm_payment">Test</router-link>
							</li> -->
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>
  
<script>
import { v4 as uuidv4 } from 'uuid';
//   import { * } from 'vue-router'


export default {
	data() {
		return {
			access_key: 'a22e75eea7cf3ce6b0f601b91dad0109',
			profile_id: '14B8EE96-D2CF-4F5E-93BA-DB4DF59D9FE9',
			transaction_uuid: uuidv4(),
			unsigned_field_names: '',
			signed_date_time: new Date(),
			locale: 'en',
			bill_to_address_line1: 'My Apartment',
			signed_field_names: "access_key,profile_id,transaction_uuid,signed_field_names,unsigned_field_names,signed_date_time,locale,transaction_type,reference_number,amount,currency,bill_to_address_line1",
			transaction_type: '',
			reference_number: '',
			amount: '',
			currency: '',
			submit: 'Submit'
		};
	},

	//concat and build signed field names
	computed: {

	},
	methods: {
		submitForm() {
			//create new payment data object with the form data 
			const formData = {
				access_key: 'a22e75eea7cf3ce6b0f601b91dad0109',
				profile_id: '14B8EE96-D2CF-4F5E-93BA-DB4DF59D9FE9',
				transaction_uuid: this.transaction_uuid,
				unsigned_field_names: this.unsigned_field_names,
				signed_field_names: this.signed_field_names,
				signed_date_time: new Date().toISOString().split('.')[0] + "Z",
				locale: 'en',
				bill_to_address_line1: 'My Apartment',
				transaction_type: "authorization",
				reference_number: Date.now(),
				amount: this.amount,
				currency: this.currency,
				submit: this.submit
			};
			// Navigate to the ConfirmationComponent and pass the form data as a prop
			localStorage.setItem('formData', JSON.stringify(formData))

			this.$router.push({ name: 'confirm_payment' });


			//generates a UTC date and time string in ISO 8601 format	
			{
				this.signed_date_time.toISOString().slice(0, -5) + 'Z';
			}

			function generateUniqueId() {
				let transaction_uuid = '';
				const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
				for (let i = 0; i < 13; i++) { // Generate a 10-character unique ID
					const randomIndex = Math.floor(Math.random());
					transaction_uuid += characters.charAt(randomIndex);
				}
				return transaction_uuid;
			}



			//generate unique ID
			this.transaction_uuid = generateUniqueId();
			//this.transaction_uuid = uuidv4();
			// Handle form submission here
			console.log('Form submitted:\n', 'Access_key:\n', this.access_key, '\n', 'Profile_ID:\n', this.profile_id, '\n', 'transaction_uuid:\n', this.transaction_uuid, '\n', 'signed_date_time:\n', this.signed_date_time, '\n', 'signed_field_names:\n', this.signed_field_names, '\n', 'unsigned_field_names:\n', this.unsigned_field_names, '\n', 'signed_date_time;\n', this.signed_date_time, '\n', 'locale:\n', this.locale, '\n', 'transaction_type:\n', this.transaction_type, '\n', 'reference_number:\n', this.reference_number, '\n', 'amount:\n', this.amount, '\n', 'currency:\n', this.currency, '\n', 'bill_to_address_line1:\n', this.bill_to_address_line1);
		}
	}
};
</script>
  