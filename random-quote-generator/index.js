class QuoteApp {
  constructor() {
    this.btnEl = document.getElementById("btn");
    this.quoteEl = document.getElementById("quote");
    this.authorEl = document.getElementById("author");
    this.apiURL = "https://api.quotable.io/random";

    this.btnEl.addEventListener("click", () => this.getQuote());
    this.getQuote();
  }

  async getQuote() {
    try {
      this.btnEl.innerText = "Loading...";
      this.btnEl.disabled = true;
      this.quoteEl.innerText = "Updating...";
      this.authorEl.innerText = "Updating...";
      const response = await fetch(this.apiURL);
      const data = await response.json();
      const quoteContent = data.content;
      const quoteAuthor = data.author;
      this.quoteEl.innerText = quoteContent;
      this.authorEl.innerText = "~ " + quoteAuthor;
      this.btnEl.innerText = "Get a quote";
      this.btnEl.disabled = false;
      console.log(data);
    } catch (error) {
      console.log(error);
      this.quoteEl.innerText = "An error happened, try again later";
      this.authorEl.innerText = "An error happened";
      this.btnEl.innerText = "Get a quote";
      this.btnEl.disabled = false;
    }
  }
}

const quoteApp = new QuoteApp();
