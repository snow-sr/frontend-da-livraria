<template>
  <section class="py-12 dark dark:bg-gray-900">
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
                >Nome do Livro</label
              >
              <input
                type="text"
                v-model="book.name"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div>
              <label
                for="publisher"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Editora</label
              >
              <select
                id="publisher"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                v-model="book.publisher"
              >
                <option
                  v-for="publisher in lists.publishers"
                  :key="publisher.id"
                  :value="publisher.name"
                >
                  {{ publisher.name }}
                </option>
              </select>
            </div>
            <div>
              <label
                for="author"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Autor</label
              >
              <select
                id="author"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                v-model="book.author"
              >
                <option
                  v-for="author in lists.authors"
                  :key="author.api"
                  :value="author.name"
                >
                  {{ author.name }}
                </option>
              </select>
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Ano de lançamento</label
              >
              <input
                type="number"
                id="email"
                v-model="book.releaseYear"
                max="2022"
                min="1000"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>

            <button
              type="submit"
              class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              @click="addBook()"
              v-if="this.edit == false"
            >
              Cadastrar Livro
            </button>

            <button
              type="submit"
              class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              @click="updateBook()"
              v-if="this.edit == true"
            >
              Atualizar Livro
            </button>

            <button
              class="text-sm font-light text-gray-500 underline hover:text-fuchsia-500 dark:text-gray-400"
              @click="this.edit = !this.edit"
            >
              Quer editar um livro?
            </button>
            <div v-if="edit">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >Selecione o livro para edição</label
              >
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                v-model="book"
              >
                <option selected disabled>{{ lists.books }}</option>
                <option
                  v-for="book in lists.books"
                  v-bind:key="book.id"
                  :value="book"
                >
                  {{ book.name }}
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
              Lista de Livros Cadastrados
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
                  v-for="bookFor in lists.books"
                  @click="deleteBook(bookFor.id)"
                  v-bind:key="bookFor.id"
                >
                  <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium truncate">
                        {{ bookFor.name }}
                      </p>
                      <p class="text-sm font-medium truncate">
                        {{ bookFor.author }}
                      </p>
                      <p class="text-sm text-gray-600 font-medium truncate">
                        {{ bookFor.releaseYear }}
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
import { Authors, Category, Publishers, Book } from "../../services/apiHandler";

const AuthorApi = new Authors();
const PublisherApi = new Publishers();
const CategoryApi = new Category();
const BookApi = new Book();

export default {
  data() {
    return {
      book: {
        name: "",
        publisher: "",
        releaseYear: "",
        author: "",
      },
      lists: {
        authors: [],
        publishers: [],
        categories: [],
        books: [],
      },
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
    this.lists.authors = await AuthorApi.fetchAuthors();
    this.lists.publishers = await PublisherApi.fetchPublishers();
    this.lists.categories = await CategoryApi.fetchCategory();
    this.lists.books = await BookApi.fetchBooks();
  },
  methods: {
    async addBook() {
      this.name = "";
      this.publisher = "";
      this.releaseYear = 0;
      this.author = "";
      await BookApi.addBook(this.book);
      this.lists.books = await BookApi.fetchBooks();
    },
    async deleteBook(id) {
      await BookApi.deleteBook(id);
      this.lists.books = await BookApi.fetchBooks();
    },
    async updateBook() {
      this.name = "";
      this.publisher = "";
      this.releaseYear = "";
      this.author = "";
      await BookApi.updateBook(this.book);
      this.lists.books = await BookApi.fetchBooks();
    },
  },
};
</script>
