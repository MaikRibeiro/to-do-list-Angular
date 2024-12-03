import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from "./item";
import { ItemComponent } from './item/item.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule],
})

export class AppComponent {

  componentTitle = "My To Do List";

  filter: "all" | "active" | "done" = "all";

  allItems = [
    { description: "Work out", done: true },
    { description: "Job", done: true },
    { description: "Sleep", done: false },
    { description: "Have dinner", done: false },
  ];

  addItem(description: string) {
    if (!description || description.trim() === '')
      return;

    // unshift method adds new item to the beginning of the array and the top of list 'allItems'
    this.allItems.unshift({
      description,
      done: false
    });
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

  get items() {
    if (this.filter === "all")
      return this.allItems;

    return this.allItems.filter((item) => 
      this.filter === "done" ? item.done : !item.done
    );
  }
}