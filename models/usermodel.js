const { db } = require('../utils/firebase');

class User {
  constructor(id, email, password, name) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.name = name;
  }

  static async findByEmail(email) {
    const usersRef = db.collection('users');
    const snapshot = await usersRef.where('email', '==', email).get();
    if (snapshot.empty) {
      return null;
    } else {
      const userDoc = snapshot.docs[0];
      return new User(userDoc.id, userDoc.data().email, userDoc.data().password, userDoc.data().name);
    }
  }

  static async create(data) {
    const usersRef = db.collection('users');
    const userDoc = await usersRef.add(data);
    return new User(userDoc.id, data.email, data.password, data.name);
  }
}

module.exports = User;
