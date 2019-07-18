import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';

@Component({
  selector: 'app-progress-detail',
  templateUrl: './progress-detail.component.html',
  styleUrls: ['./progress-detail.component.css']
})
export class ProgressDetailComponent implements OnInit {
  defaultBindingsList: any[];
  inProgressTable: any[];
  CheckboxA = false;
  CheckboxB = false;
  CheckboxC = false;

  

  selectedActivity = null;

  constructor() { }

  ngOnInit() {
  	this.defaultBindingsList = [
        { value: 'SPL', label: 'SPL' },
        { value: '#rods', label: '#rods' },
        { value: 'BS', label: 'BS' },
        { value: 'Browm', label: 'Browm' },
        { value: 'Care of', label: 'Care of' },
        { value: 'Canada', label: 'Canada' }
    ];
    this.inProgressTable = [];
    //console.log(this.inProgressTable.length;)
  }

  addSelect(selectedActivity) {
    for(let x=0;x<this.inProgressTable.length;x++){
      if (this.inProgressTable[x].label==selectedActivity.label)
      {
        alert("That's activity is already in the table In Progress");
        return;
      }        
    }
    this.inProgressTable.push({value: selectedActivity.label, label:selectedActivity.label});
  }

  borrarRow(rowActivity) {
    for(let x=0;x<this.inProgressTable.length;x++){
      if (this.inProgressTable[x].label==rowActivity)
      {
        this.inProgressTable.splice(x,1);
        return;
      }
    }
  }


}
