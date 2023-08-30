import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Career } from 'src/app/models/career.interface';
import { Param } from 'src/app/models/param.interface';
import { CareersService } from 'src/app/services/careers.service';

@Component({
  selector: 'combobox-careers',
  templateUrl: './careers.combobox.component.html',
})
export class CareersComboboxComponent implements OnInit {
  careers: Career[] = [];
  @Output() selected = new EventEmitter<Param>();

  constructor(private careerService: CareersService) {}

  ngOnInit() {
    this.getCareers();
  }

  getCareers() {
    return this.careerService
      .getCareers()
      .subscribe((careers) => (this.careers = careers));
  }

  select(career: Career) {
    const careerParam: Param = {
      type: 'career_id',
      term: career.id.toString(),
    };
    this.selected.emit(careerParam);
  }
}
