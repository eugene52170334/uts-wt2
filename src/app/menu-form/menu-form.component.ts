import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { DataService } from '../data.service';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.scss']
})
export class MenuFormComponent implements OnInit {
  menu : Menu = {
    _id: '',
    menuName: '',
    menuDesc: '',
    duration: null,
    price: null
  };
  id = null;
  error = false;
  update = true;

  constructor(
    private ds: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // jika ada parameter id di URL
      if (params.get('id')) {
        this.id = params.get('id');

        this.ds.getMenu(this.id).subscribe(
          response => {
            this.menu = response as Menu;
          },
          err => {
            console.log(err);
            this.error = true;
          }
        );
      } else {
        this.update = false;
      }
    });
  }//end ngOninit

  postMenu() {
    this.ds.postMenu(this.menu).subscribe(response => {
      // tampilkan notifikasi
      this.router.navigate(['/home']);
    });
  }

  deleteMenu() {
    this.ds.deleteMenu(this.menu).subscribe(
      response => {
        // tampilkan notifikasi
        this.router.navigate(['/home']);
      },
      err => {
        console.log(err);
      }
    );
  }

  updateMenu() {
    this.ds.updateMenu(this.menu).subscribe(
      response => {
        // tampilkan notifikasi
        this.router.navigate(['/home']);
      },
      err => {
        console.log(err);
      }
    );
  }




}//end of all
