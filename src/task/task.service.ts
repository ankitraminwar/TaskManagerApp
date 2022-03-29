/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable, NotFoundException } from '@nestjs/common';
import { createTaskDTO } from './create.task.dto';
import { TaskStatus } from './task.enum';
//import * as uuid from 'uuid';
import { SearchTaskDTO } from './search.task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { UserEntity } from 'src/user/user.entity';

@Injectable()
export class TaskService {
  constructor(
    //add the dependency for TaskRepository
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}

  async getTasks(searchTaskDto: SearchTaskDTO, user: UserEntity) {
    //get the search parameter and status value
    return this.taskRepository.getTasks(searchTaskDto, user);
    //start with all tasks
  }

  //create a new task
  async createTask(createTaskDto: createTaskDTO, user: UserEntity) {
    return this.taskRepository.createTask(createTaskDto, user);
  }

  async getTaskById(id: string) {
    const task = await this.taskRepository.findOne(id);

    if (!task) {
      throw new NotFoundException('task not found');
    }
    return task;
  }

  async updateTaskStatus(id: string, status: TaskStatus) {
    //find the task by id
    const task = await this.getTaskById(id);

    //update the status
    task.status = status;

    //save the changes
    await task.save();
    return task;
  }

  async deleteTask(id: string) {
    //try deleting the task with id
    const result = await this.taskRepository.delete(id);

    //if affected rows are > 0 -> success
    if (result.affected == 0) {
      throw new NotFoundException('task not found');
    }
    return result;
  }
}
