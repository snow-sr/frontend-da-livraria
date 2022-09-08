<script setup>
import NavbarComp from "../components/ui/navbarComp.vue";
import Card from "../components/cards/genericCard.vue";
</script>

<template>
  <main class="bg-neutral-800 h-full min-h-screen w-full font-mono">
    <header>
      <NavbarComp />
    </header>
    <div
      class="dark grid grid-cols-2 grid-rows-2 gap-4 place-content-center place-items-center min-h-screen"
    >
      <div>
        <Card
          title="Livros"
          description="Acesse aqui os livros já cadastrados"
          redirect="book"
        />
      </div>
      <div>
        <Card
          title="Categorias"
          description="Acesse aqui as categorias já cadastradas"
          redirect="category"
        />
      </div>
      <div>
        <Card
          title="Autores"
          description="Acesse aqui os autores já cadastrados"
          redirect="author"
        />
      </div>
      <div>
        <Card
          title="Editoras"
          description="Acesse aqui as editoras já cadastradas"
          redirect="publisher"
        />
      </div>
    </div>
  </main>
</template>
