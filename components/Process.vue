<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          👣 Sådan foregår det
        </h2>
      </div>
      
      <div class="max-w-4xl mx-auto">
        <div class="grid gap-8">
          <div 
            v-for="(step, index) in steps" 
            :key="index" 
            class="flex items-start gap-6"
          >
            <div class="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
              {{ step.number }}
            </div>
            <div class="flex-1 pt-2">
              <p class="text-lg text-gray-700">{{ step.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    number: "1",
    title: "Du kontakter os og fortæller lidt om din forretning"
  },
  {
    number: "2", 
    title: "Vi sender dig et forslag og fast pris"
  },
  {
    number: "3",
    title: "Du godkender – og vi går i gang"
  },
  {
    number: "4",
    title: "Din nye hjemmeside er klar inden for 3-5 dage"
  }
];
</script>
