<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          🎁 Vi laver hjemmesider til alle faggrupper
        </h2>
        <p class="text-xl text-gray-600">
          Uanset hvilket fag du arbejder inden for, har vi erfaring med at lave hjemmesider der fungerer
        </p>
      </div>
      
      <div class="flex flex-wrap justify-center gap-4">
        <span 
          v-for="(industry, index) in industries" 
          :key="index"
          class="bg-white px-6 py-3 rounded-full shadow-md text-gray-700 font-medium hover:shadow-lg transition-shadow duration-300"
        >
          {{ industry }}
        </span>
      </div>
      
      <div class="text-center mt-8">
        <p class="text-gray-600">
          Er dit fag ikke på listen? Det gør ikke noget – vi tilpasser os alle typer virksomheder!
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const industries = [
  "Tømrere", "VVS'ere", "Murerfirmaer", "Malere", "Elektrikere", 
  "Mekanikere", "Låsesmede", "Rengøring", "Anlægsgartnere"
];
</script>
