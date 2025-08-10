<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          🛠️ Hvad vi tilbyder
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="text-blue-600 mb-4">
            <Icon
              :name="service.icon"
              class="h-8 w-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">
            {{ service.title }}
          </h3>
          <p class="text-gray-600 leading-relaxed">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    icon: 'lucide:globe',
    title: 'Hjemmesider der virker',
    description:
      'Få en flot og brugervenlig side, der viser hvem du er, hvad du tilbyder, og hvordan kunderne kontakter dig.',
  },
  {
    icon: 'lucide:settings',
    title: 'Tilpasset dit fag',
    description:
      "Uanset om du er VVS'er, murer, elektriker, mekaniker, maler eller andet – vi tilpasser siden til netop din virksomhed.",
  },
  {
    icon: 'lucide:clock',
    title: 'Fast pris – hurtig levering',
    description:
      'Ingen overraskelser. Du får en fast pris og en side klar på få dage.',
  },
]
</script>

