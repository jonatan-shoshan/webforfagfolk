<template>
  <section class="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[size:50px_50px]"></div>
    </div>
    
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
      <div class="text-center max-w-4xl mx-auto">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Få en professionel hjemmeside – 
          <span class="text-blue-200"> hurtigt og nemt</span>
        </h1>
        
        <p class="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto">
          Vi laver simple, effektive hjemmesider til fagfolk og små erhverv. 
          Ingen bøvl, ingen smarte ord – bare noget der virker og skaffer dig kunder.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a 
            href="#kontakt" 
            class="inline-flex items-center bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            👉 Kontakt os og få et uforpligtende tilbud i dag
            <Icon name="lucide:arrow-right" class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center text-blue-100">
          <div class="flex items-center gap-2">
            <Icon name="lucide:phone" class="h-5 w-5" />
            <span>22 33 44 55</span>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="lucide:mail" class="h-5 w-5" />
            <span>kontakt@webforfagfolk.dk</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
