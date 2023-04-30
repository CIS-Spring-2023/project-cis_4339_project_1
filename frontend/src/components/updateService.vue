<!-- used client intake form as reference -->


<script>
import useVuelidate from '@vuelidate/core'
import { required, alpha } from '@vuelidate/validators'
import axios from 'axios'
const apiURL = import.meta.env.VITE_ROOT_API

export default {
  props: ['id'],
  setup() {
    return { v$: useVuelidate({ $autoDirty: true }) }
  },
  data() {
    return {
      // removed unnecessary extra array to track services
      services: [],
      Service: {
        name: '',
        status: '',
        description: ''
      }
    }
  },
  created() {
    axios.get(`${apiURL}/services/id/${this.$route.params.id}`).then((res) => {
      // simplified setting client
      this.Service = res.data
    })
  },
   methods: {
    handleServiceUpdate() {
      // using the parameter from the page before 
      axios.put(`${apiURL}/services/update/${this.$route.params.id}`, this.Service).then(() => {
        alert('Update has been saved.')
        this.$router.back()
      })
    },
    serviceDeactivate() {
      // using the parameter from the page before 
      axios.delete(`${apiURL}/services/${this.$route.params.id}`).then(() => {
        alert('Service has been deactivated.')
        this.$router.push({ name: 'findservices' })
      })
    }
      },
  // sets validations for the various data properties
  validations() {
    return {
      Service: {
        name: { required },
        status: { required }
      }
    }
  }
}
</script>
<template>
  <main>
    <div>
      <h1
        class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10"
      >
        Create New Service
      </h1>
    </div>
    <div class="px-10 py-20">
      <!-- @submit.prService stops the submit Service from reloading the page-->
      <form @submit.prevent="handleSubmitForm">
        <!-- grid container -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"
        >
          <h2 class="text-2xl font-bold">Service Details</h2>

          <!-- form field -->
          <div class="flex flex-col">
            <label class="block">
              <span class="text-gray-700">Service Name</span>
              <span style="color: #ff0000">*</span>
              <input
                type="text"
                class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                v-model="Service.name"
              />
              <span class="text-black" v-if="v$.Service.name.$error">
                <p
                  class="text-red-700"
                  v-for="error of v$.Service.name.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}!
                </p>
              </span>
            </label>
          </div>

          <!-- form field -->
          <div class="flex flex-col">
            <label class="block">
              <span class="text-gray-700">Status</span>
              <span style="color: #ff0000">*</span>
              <select
                class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                v-model="Service.status">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <span class="text-black" v-if="v$.Service.status.$error">
                <p
                  class="text-red-700"
                  v-for="error of v$.Service.status.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}!
                </p>
              </span>
            </label>
          </div>

          

          <div></div>
          <div></div>
          <!-- form field -->
          <div class="flex flex-col">
            <label class="block">
              <span class="text-gray-700">Description</span>
              <textarea
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                rows="2"
                v-model="Service.description"
              ></textarea>
            </label>
          </div>
        </div>

        <!--grid container -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"
        >
          <div class="flex justify-between mt-10 mr-20">
            <button
              @click="handleServiceUpdate"
              type="submit"
              class="bg-green-700 text-white rounded"
            >
              Update Service
            </button>
          </div>
          <div class="flex justify-between mt-10 mr-20">
            <button
              @click="serviceDeactivate"
              type="submit"
              class="bg-red-700 text-white rounded"
            >
              Deactivate Service
            </button>
          </div>
          <div class="flex justify-between mt-10 mr-20">
            <button
              type="reset"
              class="border border-red-700 bg-white text-red-700 rounded"
              @click="$router.back()"
            >
              Go back
            </button>
          </div>
        </div>
      </form>
    </div>
  </main>
</template>