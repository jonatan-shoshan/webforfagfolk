<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          📦 Priser
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div
          v-for="(pkg, index) in packages"
          :key="index"
          :class="[
            'relative bg-white p-8 rounded-xl shadow-lg',
            pkg.popular ? 'ring-2 ring-blue-600' : '',
          ]">
          <div
            v-if="pkg.popular"
            class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span
              class="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Mest populær
            </span>
          </div>

          <div class="text-center mb-6">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">
              {{ pkg.name }}
            </h3>
            <p class="text-4xl font-bold text-blue-600 mb-2">{{ pkg.price }}</p>
            <p class="text-gray-600">{{ pkg.description }}</p>
          </div>

          <div class="space-y-3 mb-8">
            <div
              v-for="(feature, featureIndex) in pkg.features"
              :key="featureIndex"
              class="flex items-start gap-3">
              <Icon
                name="lucide:check"
                class="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span class="text-gray-700">{{ feature }}</span>
            </div>
          </div>

          <a
            href="#kontakt"
            :class="[
              'block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-300',
              pkg.popular
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200',
            ]">
            Vælg denne pakke
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const packages = [
  {
    name: 'Basis-pakke',
    price: '5.000 kr.',
    description: 'Enkel 1-sides hjemmeside',
    features: [
      'Kontaktformular og Google Maps',
      'Hostingvejledning eller vi klarer det for dig',
    ],
    popular: false,
  },
  {
    name: 'Standard-pakke',
    price: '8.500 kr.',
    description: 'Flere sider (f.eks. om os, services, kontakt, anmeldelser)',
    features: [
      'Opsætning på eget domæne',
      'Op til 5 sektioner + ekstra support',
    ],
    popular: true,
  },
]
</script>

