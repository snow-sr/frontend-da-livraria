import axios from "axios";

export class Authors {
  baseUrl = "http://localhost:4000";

  async fetchAuthors() {
    const response = await axios.get(`${this.baseUrl}/authors`);
    return response.data;
  }

  async searchAuthor(id) {
    const response = await axios.get(`${this.baseUrl}/authors/${id}`);
    return response.data;
  }

  async addAuthor(author) {
    const response = await axios.post(`${this.baseUrl}/authors`, author);
    return response.data;
  }

  async deleteAuthor(id) {
    const response = await axios.delete(`${this.baseUrl}/authors/${id}`);
    return response.data;
  }

  async updateAuthor(author) {
    const response = await axios.put(
      `${this.baseUrl}/authors/${author.id}`,
      author
    );
    return response.data;
  }
}

export class Publishers {
  baseUrl = "http://localhost:4000";

  async fetchPublishers() {
    const response = await axios.get(`${this.baseUrl}/publishers`);
    return response.data;
  }

  async searchPublisher(id) {
    const response = await axios.get(`${this.baseUrl}/publishers/${id}`);
    return response.data;
  }

  async addPublisher(publisher) {
    const response = await axios.post(`${this.baseUrl}/publishers`, publisher);
    return response.data;
  }

  async deletePublisher(id) {
    const response = await axios.delete(`${this.baseUrl}/publishers/${id}`);
    return response.data;
  }

  async updatePublisher(publisher) {
    const response = await axios.put(
      `${this.baseUrl}/publishers/${publisher.id}`,
      publisher
    );
    return response.data;
  }
}

export class Category {
  baseUrl = "http://localhost:4000";

  async fetchCategory() {
    const response = await axios.get(`${this.baseUrl}/categories`);
    return response.data;
  }

  async searchCategory(id) {
    const response = await axios.get(`${this.baseUrl}/categories/${id}`);
    return response.data;
  }

  async addCategory(category) {
    const response = await axios.post(`${this.baseUrl}/categories`, category);
    return response.data;
  }

  async deleteCategory(id) {
    const response = await axios.delete(`${this.baseUrl}/categories/${id}`);
    return response.data;
  }

  async updateCategory(category) {
    const response = await axios.put(
      `${this.baseUrl}/categories/${category.id}`,
      category
    );
    return response.data;
  }
}

export class Book {
  baseUrl = "http://localhost:4000";

  async fetchBooks() {
    const response = await axios.get(`${this.baseUrl}/books`);
    return response.data;
  }

  async searchBook(id) {
    const response = await axios.get(`${this.baseUrl}/books/${id}`);
    return response.data;
  }

  async addBook(Book) {
    const response = await axios.post(`${this.baseUrl}/books`, Book);
    return response.data;
  }

  async deleteBook(id) {
    const response = await axios.delete(`${this.baseUrl}/books/${id}`);
    return response.data;
  }

  async updateBook(Book) {
    const response = await axios.put(`${this.baseUrl}/books/${Book.id}`, Book);
    return response.data;
  }
}
