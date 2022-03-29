import { TaskStatus } from './task.enum';
import {} from 'class-validator';

export class SearchTaskDTO {
  search: string;
  status: TaskStatus;
}
