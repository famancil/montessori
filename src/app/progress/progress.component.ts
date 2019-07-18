import { Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent implements OnInit {

  str: string;
  public href: string = "";

  constructor(private modalService: NgbModal, private router: Router) {}

  open(content,name) {
  	//console.log(name)
    this.modalService.open(content);
  }

  openComment(contenido,name) {
  	//console.log(name)
    this.modalService.open(contenido);
  }

  ngOnInit() {
  	this.href = this.router.url;
  	console.log(this.href)
  }

}
