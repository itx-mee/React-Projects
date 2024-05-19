import importEnv from "../importEnv";

import { Client, Account, ID } from "appwrite";

// we need to do these things everytime a account is created
// const client = new Client()
//   .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
//   .setProject("<PROJECT_ID>"); // Your project ID
// const account = new Account(client);

// instead of this we can create a class and construct a account whenever its object is created
class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(importEnv.appwriteEndpointUrl)
      .setProject(importEnv.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // return userAccount;
        // we want to login the user if he created account successfully
        return this.login(email, password);
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("appwrite getUser error", error);
    }
    // just in case if account doesnot exist , return null
    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("appwrite logout error", error);
    }
  }
}

const authService = new AuthService();
export default authService;
