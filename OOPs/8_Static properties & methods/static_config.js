class Config {
  static apiKey;
  static baseUrl;

  //note: in static=> this keyword only works when we call static inside staic.
  static {
    // This block runs once when the class is loaded
    this.apiKey = "ABC123";
    this.baseUrl = "https://api.example.com";
    console.log("Static block executed!");
  }

  static connectDB() {
    console.log(`${this.baseUrl}/${this.apiKey}`);
  }
}

Config.connectDB();

Config.connectDB();
