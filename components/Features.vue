<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          💼 Hvad får du med
        </h2>
      </div>
      
      <div class="max-w-3xl mx-auto">
        <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
          <div class="grid gap-4">
            <div 
              v-for="(feature, index) in features" 
              :key="index" 
              class="flex items-start gap-3"
            >
              <Icon name="lucide:check" class="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
              <span class="text-gray-700 text-lg">{{ feature }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  "En komplet hjemmeside (mobilvenlig og hurtig)",
  "Dit logo, farver og billeder",
  "En kontaktformular og Google Maps integration",
  "Klar til Google (SEO-optimeret)",
  "Gratis support de første 30 dage",
  "Mulighed for billig vedligeholdelse"
];
</script>
