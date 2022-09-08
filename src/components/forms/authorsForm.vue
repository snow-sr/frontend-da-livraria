<template>
  <section class="dark dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            {{ title }}
          </h1>
          <div class="space-y-4 md:space-y-6">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Nome do autor</label
              >
              <input
                type="text"
                name="email"
                id="email"
                v-model="author.name"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required="true"
              />
            </div>

            <button
              type="submit"
              class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              @click="addAuthor()"
              v-if="this.edit == false"
            >
              Cadastrar autor
            </button>
            <button
              type="submit"
              class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              @click="updateAuthor()"
              v-if="this.edit == true"
            >
              Atualizar autor
            </button>
            <button
              class="text-sm font-light text-gray-500 underline hover:text-fuchsia-500 dark:text-gray-400"
              @click="this.edit = !this.edit"
            >
              Quer editar um autor?
            </button>
            <div v-if="edit">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >Selecione o autor para edição</label
              >
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                v-model="author"
              >
                <option selected disabled>{{ authors }}</option>
                <option
                  v-for="author in authors"
                  v-bind:key="author.id"
                  :value="author"
                >
                  {{ author.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-6"
      >
        <div
          class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
            >
              Lista de autores
            </h1>
            <p class="text-sm text-gray-600">
              Clique em cima do autor para excluir-lo da lista
            </p>
            <div class="space-y-4 md:space-y-6">
              <ul
                class="max-w-md divide-y divide-gray-200 dark:divide-gray-700"
              >
                <li
                  class="text-white pt-3 pb-0 hover:text-red-500 sm:pt-4"
                  v-for="authorFor in authors"
                  @click="deleteAuthor(authorFor.id)"
                  v-bind:key="authorFor.id"
                >
                  <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium truncate">
                        {{ authorFor.name }}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Authors } from "../../services/apiHandler.js";
const authorsApi = new Authors();
export default {
  data() {
    return {
      author: {
        name: "",
        id: "",
      },
      authors: [],
      edit: false,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  async created() {
    this.authors = await authorsApi.fetchAuthors();
  },
  methods: {
    async addAuthor() {
      if (this.name !== "") {
        await authorsApi.addAuthor(this.author);
        this.author.name = "";
        this.authors = await authorsApi.fetchAuthors();
      }
    },
    async updateAuthor() {
      if (this.name !== "" && this.id !== "") {
        await authorsApi.updateAuthor(this.author);
        this.author.name = "";
        this.authors = await authorsApi.fetchAuthors();
      }
    },
    async deleteAuthor(id) {
      await authorsApi.deleteAuthor(id);
      this.authors = await authorsApi.fetchAuthors();
    },
  },
};
</script>
