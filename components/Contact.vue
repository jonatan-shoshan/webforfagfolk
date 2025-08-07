<template>
  <section id="kontakt" class="py-20 bg-blue-600 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold mb-4">
          📞 Klar til at komme i gang?
        </h2>
        <p class="text-xl text-blue-100">
          Skriv eller ring – vi vender tilbage inden for 24 timer:
        </p>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div class="space-y-8">
          <div class="flex items-center gap-4 text-lg">
            <Icon name="lucide:mail" class="h-6 w-6 text-blue-200" />
            <span>kontakt@webforfagfolk.dk</span>
          </div>
          <div class="flex items-center gap-4 text-lg">
            <Icon name="lucide:phone" class="h-6 w-6 text-blue-200" />
            <span>22 33 44 55</span>
          </div>
          
          <div class="mt-8 p-6 bg-blue-500 rounded-lg">
            <h3 class="text-lg font-semibold mb-3">Hurtig respons garanteret</h3>
            <p class="text-blue-100">
              Vi svarer på alle henvendelser inden for 24 timer. Ofte meget hurtigere!
            </p>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div class="bg-white text-gray-900 p-8 rounded-xl">
          <h3 class="text-2xl font-bold mb-6">Send os en besked</h3>
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-2">Navn *</label>
              <input
                v-model="formData.name"
                type="text"
                name="name"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium mb-2">Email *</label>
              <input
                v-model="formData.email"
                type="email"
                name="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium mb-2">Telefon</label>
              <input
                v-model="formData.phone"
                type="tel"
                name="phone"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium mb-2">Type virksomhed</label>
              <input
                v-model="formData.business"
                type="text"
                name="business"
                placeholder="F.eks. VVS, tømrer, maler..."
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium mb-2">Besked</label>
              <textarea
                v-model="formData.message"
                name="message"
                rows="4"
                placeholder="Fortæl os lidt om dit projekt..."
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              ></textarea>
            </div>
            
            <button
              type="submit"
              class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Icon name="lucide:send" class="h-5 w-5" />
              Send besked
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const formData = reactive({
  name: '',
  email: '',
  phone: '',
  business: '',
  message: ''
});

const handleSubmit = () => {
  // Handle form submission here
  console.log('Form submitted:', formData);
};
</script>
