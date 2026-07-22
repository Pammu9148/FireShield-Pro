import { 
  collection, 
  addDoc, 
  getDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  where, 
  orderBy, 
  limit,
  onSnapshot 
} from 'firebase/firestore'
import { db } from './firebase.config'

// Generic CRUD operations
export const firestoreService = {
  // Add document
  async add(collectionName, data) {
    try {
      const docRef = await addDoc(collection(db, collectionName), {
        ...data,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      })
      return { id: docRef.id, ...data }
    } catch (error) {
      console.error('Error adding document:', error)
      throw error
    }
  },

  // Get document by ID
  async get(collectionName, id) {
    try {
      const docRef = doc(db, collectionName, id)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() }
      }
      return null
    } catch (error) {
      console.error('Error getting document:', error)
      throw error
    }
  },

  // Get all documents from collection
  async getAll(collectionName) {
    try {
      const querySnapshot = await getDocs(collection(db, collectionName))
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    } catch (error) {
      console.error('Error getting documents:', error)
      throw error
    }
  },

  // Update document
  async update(collectionName, id, data) {
    try {
      const docRef = doc(db, collectionName, id)
      await updateDoc(docRef, {
        ...data,
        updatedAt: new Date().toISOString(),
      })
      return { id, ...data }
    } catch (error) {
      console.error('Error updating document:', error)
      throw error
    }
  },

  // Delete document
  async delete(collectionName, id) {
    try {
      const docRef = doc(db, collectionName, id)
      await deleteDoc(docRef)
      return id
    } catch (error) {
      console.error('Error deleting document:', error)
      throw error
    }
  },

  // Query documents
  async query(collectionName, constraints) {
    try {
      const q = query(collection(db, collectionName), ...constraints)
      const querySnapshot = await getDocs(q)
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    } catch (error) {
      console.error('Error querying documents:', error)
      throw error
    }
  },

  // Real-time listener
  onCollectionChange(collectionName, callback, constraints = []) {
    const q = query(collection(db, collectionName), ...constraints)
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const documents = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      callback(documents)
    })
    return unsubscribe
  },
}

// Specific services
export const productService = {
  async getAllProducts() {
    return firestoreService.getAll('products')
  },

  async getProduct(id) {
    return firestoreService.get('products', id)
  },

  async addProduct(productData) {
    return firestoreService.add('products', productData)
  },

  async updateProduct(id, productData) {
    return firestoreService.update('products', id, productData)
  },

  async deleteProduct(id) {
    return firestoreService.delete('products', id)
  },

  onProductsChange(callback) {
    return firestoreService.onCollectionChange('products', callback, [orderBy('createdAt', 'desc')])
  },
}

export const orderService = {
  async getAllOrders() {
    return firestoreService.getAll('orders')
  },

  async getOrder(id) {
    return firestoreService.get('orders', id)
  },

  async createOrder(orderData) {
    return firestoreService.add('orders', orderData)
  },

  async updateOrder(id, orderData) {
    return firestoreService.update('orders', id, orderData)
  },

  async getUserOrders(userId) {
    return firestoreService.query('orders', [where('userId', '==', userId)])
  },

  onOrdersChange(callback) {
    return firestoreService.onCollectionChange('orders', callback, [orderBy('createdAt', 'desc')])
  },
}

export const userService = {
  async getAllUsers() {
    return firestoreService.getAll('users')
  },

  async getUser(id) {
    return firestoreService.get('users', id)
  },

  async updateUser(id, userData) {
    return firestoreService.update('users', id, userData)
  },

  async deleteUser(id) {
    return firestoreService.delete('users', id)
  },

  async searchUsers(searchTerm) {
    return firestoreService.query('users', [
      where('fullName', '>=', searchTerm),
      where('fullName', '<=', searchTerm + '\uf8ff')
    ])
  },
}

export const enquiryService = {
  async getAllEnquiries() {
    return firestoreService.getAll('enquiries')
  },

  async addEnquiry(enquiryData) {
    return firestoreService.add('enquiries', enquiryData)
  },

  async updateEnquiry(id, enquiryData) {
    return firestoreService.update('enquiries', id, enquiryData)
  },

  async deleteEnquiry(id) {
    return firestoreService.delete('enquiries', id)
  },

  onEnquiriesChange(callback) {
    return firestoreService.onCollectionChange('enquiries', callback, [orderBy('createdAt', 'desc')])
  },
}
