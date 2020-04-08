import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  menus : Menu[];
displayedColumns : string[] = ['menuName', 'menuDesc', 'duration', 'price']
error:boolean;

  constructor(
    private ds: DataService,
  ) { }

  ngOnInit(): void {
    this.ds.getMenus().subscribe(
      response => {
        this.menus = response as Menu[];
      },
      err => {
        console.log(err);
        this.error = true;
      }
    );
  }

}
