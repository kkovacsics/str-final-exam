import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: BehaviorSubject<User[]> = this.userService.userList;

  cols: string[] = Object.getOwnPropertyNames( new User());

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getAll();
  }

  // delete
  user:User = new User();
  setUserToDelete(user: User): void {
    this.user = user;
  }
  onDelete(user: User): void {
    this.userService.remove(user);
  }

  //filter
  column: string = 'id';
  phrase: string = '';
  onChangePhrase(event: Event):void {
    this.phrase = (event.target as HTMLInputElement).value;
  }
  onChangeColumn(event: Event): void {
    this.column = (event.target as HTMLInputElement).value;
    this.phrase = '';
  }

  //order
  orderColumn: string = '';
  orderDirectionAsc: boolean = true;
  onChangeOrderColumn(column: string): void {
    if(this.orderColumn === column){
      this.orderDirectionAsc = !this.orderDirectionAsc;
    } else {
      this.orderColumn = column;
      this.orderDirectionAsc = true;
    }
  }

  
}
