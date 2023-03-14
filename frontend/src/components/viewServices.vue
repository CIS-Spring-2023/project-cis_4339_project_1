<script>
import { useLoggedInUserStore } from '@/store/loginuser'
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import axios from 'axios'
const apiURL = import.meta.env.VITE_ROOT_API
let id = 0

export default {
  setup()  {
    const user = useLoggedInUserStore();     return { user };
    return { v$: useVuelidate({ $autoDirty: true }) }
  },
  data() {
    return {
      // removed unnecessary extra array to track services
      event: {
        name: '',
        services: [],
        date: '',
        address: {
          line1: '',
          line2: '',
          city: '',
          county: '',
          zip: ''
        },
        description: '',
      },
      serviceOp: [
          {id: id++, serviceName: 'Grill Out', deactivated: false},
          {id: id++, serviceName: 'Hide &', deactivated: true},
          {id: id++, serviceName: 'Seek', deactivated: false}
        ],
      hidede: true,
      newser: '',
      editing: false
    }
  },
  methods: {
    async handleSubmitForm() {
      // Checks to see if there are any errors in validation
      const isFormCorrect = await this.v$.$validate()
      // If no errors found. isFormCorrect = True then the form is submitted
      if (isFormCorrect) {
        axios
          .post(`${apiURL}/events`, this.event)
          .then(() => {
            alert('Event has been added.')
            this.$router.push({ name: 'findevents' })
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },
    removeServicel(removeServicel) {
      this.serviceOp = this.serviceOp.filter((t) => t !== removeServicel)
    },
    editServicel(removeServicel) {
      this.serviceOp = this.serviceOp.filter((t) => t !== removeServicel)
    },
    addser(){
      this.serviceOp.push({ id: id++, serviceName: this.newser , deactivated: false})
      this.newser = ''
    }
  },
  // sets validations for the various data properties
  validations() {
    return {
      event: {
        name: { required },
        date: { required }
      }
    }
  },
  computed: {
    filteredActive() {
      return this.hidede
        ? this.serviceOp.filter((t) => !t.deactivated)
        : this.serviceOp
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
        View Current Services
      </h1>
    </div>
    <div class="px-10 py-20">
      <!-- @submit.prevent stops the submit event from reloading the page-->
      <form @submit.prevent="handleSubmitForm">
        <!-- grid container -->
 
          <div></div>
          <div></div>
          <div></div>
          <!-- form field -->
          <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"
        >
          <h2 class="text-2xl font-bold">Services Offered</h2>
          
          <div class="flex flex-col">
            <label class="block"></label>
           <ul>
              <li v-for="servicel in filteredActive" :key="servicel.id">
                <input 
                  type= "checkbox"
                  :id=  servicel.serviceName
                  :value= servicel.serviceName
                  v-model="event.services"
                  class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
                  notchecked
                />
                <span :class="{ deactive: servicel.deactivated }">{{ servicel.serviceName }}</span>
              <!-- this is where a v if logged in is needed all below this  -->

              <button class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" 
             @click.prevent="servicel.deactivated = !servicel.deactivated">
            {{ servicel.deactivated ? 'Inactive' : 'Active' }}
             </button>
              <!-- thi sis the button that will be used to deactivate a  -->

            
              <input type = text  
                     class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                     v-model=" servicel.serviceName " v-if="editing">
              <button
               class="bg-red-700 text-white rounded"
              @click="removeServicel(servicel)">X</button>

              <!-- that should be all the things that are needed -->
              </li>
            </ul>
            <!-- SHOW DEACTIVATED BUTTON  -->
            <button class="bg-red-700 text-white rounded"
            @click.prevent="hidede = !hidede">
            {{ hidede ? 'Show Deactivated' : 'Hide Deactivated' }}
             </button>

             <!-- EDIT AND UPDATE BUTTON -->
             <button class="bg-red-700 text-white rounded"
             @click.prevent="editing = !editing">
            {{ editing ? 'Update' : 'Edit' }}
             </button>
             
             <!-- ADD SERVICE BUTTON -->
             <div class="flex justify-between mt-10 mr-20">
              <form @submit.prevent="addser" v-if = "user.isEditor">
              <input class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    v-model="newser">
              <button class="bg-red-700 text-white rounded">Add Service</button>
              </form>
             
            </div>
        </div>
          </div>    
      </form>
    </div>
  </main>
</template>


<style>
input{
  border: 1px solid black
}
button{
  border: 1px solid black
}
.deactive {
  text-decoration: line-through;
}
</style>