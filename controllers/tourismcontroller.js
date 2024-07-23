const { db } = require('../utils/firebase');

const searchTourism = async (req, res) => {
  const { keyword, category } = req.query;
  let tourismRef = db.collection('tourism');
  if (keyword) {
    tourismRef = tourismRef.where('keywords', 'array-contains', keyword.toLowerCase());
  }
  if (category) {
    tourismRef = tourismRef.where('category', '==', category);
  }
  try {
    const snapshot = await tourismRef.get();
    const results = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.send(results);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getTourismDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await db.collection('tourism').doc(id).get();
    if (!doc.exists) {
      return res.status(404).send({ error: 'Tourism not found' });
    }
    res.send({ id: doc.id, ...doc.data() });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { searchTourism, getTourismDetail };
