<script>
import NavbarComp from "../components/ui/navbarComp.vue";
import authorForm from "../components/forms/authorsForm.vue";
import bookForm from "../components/forms/booksForm.vue";
import publisherForm from "../components/forms/publishersForm.vue";
import CategoryForm from "../components/forms/categoriesForm.vue";
export default {
  components: {
    NavbarComp,
    authorForm,
    bookForm,
    publisherForm,
    CategoryForm,
  },
  data() {
    return {
      selected: "",
    };
  },
  methods: {},
  created() {
    console.log("cadastrarView");
    this.selected = this.$route.params.option;
  },
};
</script>

<template>
  <main class="bg-neutral-800 h-full min-h-screen w-full font-mono">
    <header>
      <NavbarComp />
    </header>
    <div>
      <authorForm
        title="Cadastro de Autores"
        v-if="this.selected == 'author'"
      />
    </div>
    <div>
      <bookForm title="Cadastro de Livros" v-if="this.selected == 'book'" />
    </div>
    <div>
      <publisherForm
        title="Cadastro de Editoras"
        v-if="this.selected == 'publisher'"
      />
    </div>
    <div>
      <CategoryForm
        title="Cadastro de categorias"
        v-if="this.selected == 'category'"
      />
    </div>
  </main>
</template>
