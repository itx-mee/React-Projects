import importEnv from "../importEnv";

import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  storage;
  constructor() {
    this.client
      .setEndpoint(importEnv.appwriteEndpointUrl)
      .setProject(importEnv.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        importEnv.appwriteDatabaseId,
        importEnv.appwriteCollectionId,
        slug, // using slug as id
        { title, content, featuredImage, status, userId }
      );
    } catch (e) {
      console.log("appwrite service error in createPost", e);
    }
  }

  //  we are passing slug out of objects to use it directly as ID without deconstructing
  //  we are not taking userId as input because we will give update option to only logged in user
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        importEnv.appwriteDatabaseId,
        importEnv.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status }
      );
    } catch (e) {
      console.log("Appwrite update post error", e);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        importEnv.appwriteDatabaseId,
        importEnv.appwriteCollectionId,
        slug
      );
      // to show yes it is successfully deleted
      return true;
    } catch (e) {
      console.log("Appwrite delete post error", e);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        importEnv.appwriteDatabaseId,
        importEnv.appwriteCollectionId,
        slug
      );
    } catch (e) {
      console.log("Appwrite getDocument error", e);
    }
  }
  // read query from documents
  // we can access status only if its present in indexes of database
  // here we are checking if status is active
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        importEnv.appwriteDatabaseId,
        importEnv.appwriteCollectionId,
        // we could have write [Query.equal("status", "active")] without passing any queries parameter
        queries
      );
    } catch (e) {
      console.log("appwrite getPosts config errror", e);
    }
  }

  //   COMMON MISTAKE
  // we are supposed to pass the whole blog (file) and not just file name as parameter
  async uploadFile(file) {
    try {
      // it returns a file ID here, that we will pass in featuredImage string
      return await this.storage.createFile(
        importEnv.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (e) {
      console.log("appwrite uploadFile config errror", e);
    }
  }

  // using returned fileId from uploadFile
  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(importEnv.appwriteBucketId, fileId);
    } catch (e) {
      console.log("appwrite deleteFile config errror", e);
    }
  }

  getFilePreview(fileId) {
    return this.storage.getFilePreview(importEnv.appwriteBucketId, fileId);
  }
}

const service = new Service();

export default service;
