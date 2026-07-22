import { 
  ref, 
  uploadBytes, 
  getDownloadURL, 
  deleteObject, 
  listAll 
} from 'firebase/storage'
import { storage } from './firebase.config'

export const storageService = {
  // Upload file
  async uploadFile(file, path) {
    try {
      const storageRef = ref(storage, path)
      const snapshot = await uploadBytes(storageRef, file)
      const downloadURL = await getDownloadURL(snapshot.ref)
      return downloadURL
    } catch (error) {
      console.error('Error uploading file:', error)
      throw error
    }
  },

  // Upload multiple files
  async uploadFiles(files, basePath) {
    try {
      const uploadPromises = files.map((file, index) => {
        const path = `${basePath}/${Date.now()}_${index}_${file.name}`
        return this.uploadFile(file, path)
      })
      const downloadURLs = await Promise.all(uploadPromises)
      return downloadURLs
    } catch (error) {
      console.error('Error uploading files:', error)
      throw error
    }
  },

  // Delete file
  async deleteFile(path) {
    try {
      const storageRef = ref(storage, path)
      await deleteObject(storageRef)
      return true
    } catch (error) {
      console.error('Error deleting file:', error)
      throw error
    }
  },

  // Delete multiple files
  async deleteFiles(paths) {
    try {
      const deletePromises = paths.map(path => this.deleteFile(path))
      await Promise.all(deletePromises)
      return true
    } catch (error) {
      console.error('Error deleting files:', error)
      throw error
    }
  },

  // Get download URL
  async getDownloadURL(path) {
    try {
      const storageRef = ref(storage, path)
      const url = await getDownloadURL(storageRef)
      return url
    } catch (error) {
      console.error('Error getting download URL:', error)
      throw error
    }
  },

  // List all files in a directory
  async listFiles(path) {
    try {
      const storageRef = ref(storage, path)
      const result = await listAll(storageRef)
      const urls = await Promise.all(
        result.items.map(item => getDownloadURL(item))
      )
      return urls
    } catch (error) {
      console.error('Error listing files:', error)
      throw error
    }
  },
}
