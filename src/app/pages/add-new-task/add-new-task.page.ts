import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { TodoService } from '../../services/todo.service';


@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {

  categories = []

  categorySelectedCategory

  newTaskObj = {}
  itemName
  itemDueDate
  itemPriority
  itemCategory

  constructor(public modalCtlr: ModalController, public todoService: TodoService) {

  }

  ngOnInit() {
    this.categories.push('work')
    this.categories.push('personal')
    this.categories.push('study')
  }

  async add() {

    this.newTaskObj = ({
      itemName: this.itemName,
      itemDueDate: this.itemDueDate,
      itemPriority: this.itemPriority,
      itemCategory: this.categorySelectedCategory,
      userId: localStorage.getItem("userId")
    });

    let uid = this.itemName + this.itemDueDate

    if (uid) {
      await this.todoService.addTask(uid, this.newTaskObj)
    } else {
      console.log("Sorry,You can't save empty task");
    }


    this.dismiss()
  }

  selectCategory(index) {
    this.categorySelectedCategory = this.categories[index]
    console.log(this.categorySelectedCategory);
  }

  async dismiss() {
    await this.modalCtlr.dismiss(this.newTaskObj)
  }

}
