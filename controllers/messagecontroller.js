const { db } = require('../utils/firebase');

const sendMessage = async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    await db.collection('messages').add({ name, email, subject, message, timestamp: new Date() });
    res.status(201).send({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { sendMessage };
