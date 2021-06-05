import { Component, Input, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.page.html',
  styleUrls: ['./update-task.page.scss'],
})
export class UpdateTaskPage implements OnInit {

  @Input() task;
  
  categories =[]
  categorySelectedCategory

  newTaskObj = {}
  itemName
  itemDueDate 
  itemPriority
  itemCategory
  deleted

  constructor(public modalCtlr:ModalController, public todoServive:TodoService) { }

  ngOnInit() {
    this.categories.push('work')
    this.categories.push('personal')
    this.categories.push('study')

    this.itemName = this.task.value.itemName
    this.itemDueDate = this.task.value.itemDueDate
    this.itemPriority = this.task.value.itemPriority
    this.categorySelectedCategory = this.task.value.itemCategory
    this.deleted = this.task.value.deleted
    // console.log(this.task);
    
    
  }
  selectCategory(index){
    this.categorySelectedCategory = this.categories[index]
    console.log(this.categorySelectedCategory);
  }

  async dismiss(){
    await this.modalCtlr.dismiss()
  }

  async update(){
    this.newTaskObj = ({
      itemName:this.itemName,
      itemDueDate:this.itemDueDate,
      itemPriority:this.itemPriority,
      itemCategory:this.categorySelectedCategory,
      userId: localStorage.getItem("userId"),
      delted: this.deleted
    });
    let uid = this.task.key
    await this.todoServive.updateTask(uid,this.newTaskObj)
    this.dismiss()
  }
}