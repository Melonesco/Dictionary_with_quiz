export class LocalStorageService {
  static setResults(data) {
    localStorage.setItem(
      "Results",
      JSON.stringify([...this.getResults(), data])
    );
  }

  static getResults() {
    return JSON.parse(localStorage.getItem("Results")) || [];
  }

  static setCurrentPage(data) {
    localStorage.setItem("CurrentPage", data);
  }

  static getCurrentPage() {
    return localStorage.getItem("CurrentPage");
  }
}
