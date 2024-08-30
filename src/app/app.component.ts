import { Component } from "@angular/core";
import { User } from "./Model/user";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  users: User[];
  user: User | any;
  isEdit: boolean;

  constructor() {
    this.users = [
      { userId: 101, name: "Mohan", city: "Noida" },
      { userId: 102, name: "Rahul", city: "New Delhi" },
      { userId: 103, name: "Raman", city: "Pune" }
    ];
    this.user = new User();
    this.isEdit = false;
  }

  AddUser() {
    if (!this.user.userId || !this.user.name || !this.user.city) {
      alert(`UserId, Name, and City cannot be empty`);
    } else if (this.users.find(u => u.userId === this.user.userId)) {
      alert(`User with ID ${this.user.userId} already exists.`);
    } else {
      this.users.push(this.user);
      alert(`${this.user.name} added successfully.`);
      this.user = new User();
    }
  }

  UpdateUser() {
    const index = this.users.findIndex(u => u.userId === this.user.userId);
    if (index !== -1) {
      this.users[index] = { ...this.user };
      this.user = new User();
      this.isEdit = false;
    }
  }

  EditUser(id: number) {
    const existingUser = this.users.find(u => u.userId === id);
    if (existingUser) {
      this.user = { ...existingUser }; // Deep copy
      this.isEdit = true;
    }
  }

  DeleteUser(id: number, name: string) {
    if (confirm(`Do you want to delete user "${name}"?`)) {
      this.users = this.users.filter(u => u.userId !== id);
      alert(`The user "${name}" has been deleted successfully.`);
    }
  }
}
