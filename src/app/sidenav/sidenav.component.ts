import { Component, OnInit} from '@angular/core';
//import {MatSidenav} from '@angular/material/sidenav';
import { Menu } from '../menu';
import { DataService } from '../data.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
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
