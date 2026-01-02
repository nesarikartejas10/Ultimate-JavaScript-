class User {
  // static property
  static id = 1;

  constructor(name, age, income) {
    this.name = name;
    this.age = age;
    this.income = income;
    this.id = User.id++;
  }

  //static methods
  static sortByAge(user1, user2) {
    return user1.age - user2.age;
  }

  static sortByIncome(user1, user2) {
    return user2.income - user1.income;
  }
}

const user1 = new User("Tejas k", 30, 10000);
const user2 = new User("John D", 25, 5000);
const user3 = new User("Jane D", 40, 7000);

const users = [user1, user2, user3];
users.sort(User.sortByAge);
// users.sort(User.sortByIncome);
// console.log(users);
