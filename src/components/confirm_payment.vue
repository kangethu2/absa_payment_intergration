<template>
    <!-- Payment component -->
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <form action="https://testsecureacceptance.cybersource.com/pay" class="relative py-3 sm:max-w-xl sm:mx-auto"
            method="post">
            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                    class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div class="max-w-md mx-auto">
                        <div>
                            <h1 class="text-2xl font-semibold">Confirm payment details!</h1>

                        </div>
                        <div class="divide-y divide-gray-200">
                            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">


                                <div class="relative">
                                    <input autocomplete="off" :value="formData.access_key" id="access_key" name="access_key"
                                        type="text"
                                        class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                        placeholder="access_key" :readonly="access_key_readOnly" />
                                    <label for="access_key"
                                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">access_key</label>
                                </div>
                                <div class="relative">
                                    <input autocomplete="off" :value="formData.profile_id" id="profile_id" name="profile_id"
                                        type="text"
                                        class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                        placeholder="profile_id" :readonly="profile_id_readOnly" />
                                    <label for="profile_id"
                                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">profile_id</label>
                                </div>
                                <div class="relative">
                                    <input autocomplete="off" :value="formData.signature" id="signature" name="signature"
                                        type="text"
                                        class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                        placeholder="" />
                                    <label for="signature"
                                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">signature</label>
                                </div>
                                <div class="relative">
                                    <input autocomplete="off" :value="formData.transaction_uuid" id="transaction_uuid"
                                        name="transaction_uuid" type="text"
                                        class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                        placeholder="transaction_uuid" :readonly="transaction_uuid_readOnly" />
                                    <label for="transaction_uuid"
                                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">transaction_uuid</label>
                                </div>
                                <div class="relative">
                                    <input autocomplete="off" :value="formData.signed_field_names" id="signed_field_names"
                                        name="signed_field_names" type="text"
                                        class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                        placeholder="signed_field_names" :readonly="signed_field_names_readOnly" />
                                    <label for="signed_field_names"
                                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">signed_field_names</label>
                                </div>
                                <div class="relative">
                                    <input autocomplete="on" :value="formData.unsigned_field_names"
                                        id="unsigned_field_names" name="unsigned_field_names" type="text"
                                        class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                        placeholder="unsigned_field_names" :readonly="unsigned_field_names_readOnly" />
                                    <label for="unsigned_field_names"
                                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">unsigned_field_names</label>
                                </div>
                                <div class="relative">
                                    <input autocomplete="on" :value="formData.signed_date_time" id="signed_date_time"
                                        name="signed_date_time" type="text"
                                        class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                        placeholder="signed_date_time" :readonly="signed_date_time_readOnly" />
                                    <label for="signed_date_time"
                                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">signed_date_time</label>
                                </div>
                                <div class="relative">
                                    <input autocomplete="on" :value="formData.locale" id="locale" name="locale" type="text"
                                        class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                        placeholder="locale" :readonly="locale_readOnly" />
                                    <label for="locale"
                                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">locale</label>
                                </div>
                                <div class="relative">
                                    <input autocomplete="on" :value="formData.bill_to_address_line1"
                                        id="bill_to_address_line1" name="bill_to_address_line1" type="text"
                                        class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                        placeholder="bill_to_address_line1" :readonly="bill_to_address_line1_readOnly" />
                                    <label for="bill_to_address_line1"
                                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">bill_to_address_line1</label>
                                </div>
                                <div class="relative">
                                    <input autocomplete="on" :value="formData.transaction_type" id="transaction_type"
                                        name="transaction_type" type="text"
                                        class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                        placeholder="transaction_type" :readonly="transaction_type_readOnly" />
                                    <label for="transaction_type"
                                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">transaction_type</label>
                                </div>
                                <div class="relative">
                                    <input autocomplete="on" :value="formData.reference_number" id="reference_number"
                                        name="reference_number" type="text"
                                        class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                        placeholder="reference_number" :readonly="reference_number_readOnly" />
                                    <label for="reference_number"
                                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">reference_number</label>
                                </div>
                                <div class="relative">
                                    <input autocomplete="on" :value="formData.amount" id="amount" name="amount" type="text"
                                        class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                        placeholder="amount" :readonly="amount_readOnly" />
                                    <label for="amount"
                                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">amount</label>
                                </div>
                                <div class="relative">
                                    <input autocomplete="on" :value="formData.currency" id="currency" name="currency"
                                        type="text"
                                        class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                        placeholder="currency" :readonly="currency_readOnly" />
                                    <label for="currency"
                                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">currency</label>
                                </div>

                                <div class="relative">
                                    <input type="submit" class="bg-blue-500 text-white rounded-md px-2 py-1"
                                        value="Submit" />
                                </div>
                                <div> <!-- other properties of the formData object -->
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
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { sign, buildDataToSign } from "@/utils";


export default {

    data() {
        return {
            access_key: 'a22e75eea7cf3ce6b0f601b91dad0109',
            profile_id: '14B8EE96-D2CF-4F5E-93BA-DB4DF59D9FE9',
            transaction_uuid: '',
            unsigned_field_names: '',
            signed_date_time: new Date(),
            locale: 'en',
            bill_to_address_line1: 'My Apartment',

            transaction_type: '',
            reference_number: '',
            amount: '',
            currency: '',
            submit: 'Submit',
            access_key_readOnly: true,
            profile_id_readOnly: true,
            transaction_uuid_readOnly: true,
            signed_field_names_readOnly: true,
            unsigned_field_names_readOnly: true,
            signed_date_time_readOnly: true,
            locale_readOnly: true,
            bill_to_address_line1_readOnly: true,
            transaction_type_readOnly: true,
            reference_number_readOnly: true,
            amount_readOnly: true,
            currency_readOnly: true,

            formData:
            {

            }
        };

    },
    created() {
        const data = localStorage.getItem('formData')
        this.formData = JSON.parse(data)
        //console.log(this.formData)
        this.getSignature()
        // this.simulate()
    },
    computed: {
        signed_field_names() {
            return this.access_key + this.profile_id + this.transaction_uuid + this.signed_field_names + this.unsigned_field_names + this.signed_date_time + this.locale + this.transaction_type + this.reference_number + this.amount + this.currency + this.bill_to_address_line1;
        }
    },
    methods: {
        async getSignature() {
            //       const { data } = await axios.post('/api/v1/signature', this.formData)
            //       this.formData.signature = data.signature
            const dataToSign = buildDataToSign(this.formData)
            const signature = sign(dataToSign)
            this.formData.signature = signature
            // console.log (signature, this.formData.signature)

        },
        // simulate() {
        //     const dataToSign = buildDataToSign(simFormData())
        //     const signature = sign(dataToSign)
        //     console.log({ signature })
        // },
        submitForm() {
            const formData = this.formData;
            // Call build to sign 
            const dataToSign = buildDataToSign(formData)
            const signature = sign(dataToSign)
            console.log(signature, this.formData.signature)

            axios.post('/api/v1/payment', formData)
                .then(response => {
                    // Handle successful response
                    console.log('Details submitted successfuly:', response.data);
                })
                .catch(error => {
                    // Handle error response
                    console.error('Error error submitting details:', error);
                });


            //generates a UTC date and time string in ISO 8601 format	
            {
                this.signed_date_time.toISOString();
            }


            this.transaction_type = '';
            this.currency = '';
            this.formData = {}
            localStorage.setItem('formData', "")
        }
    }
};
</script>
      