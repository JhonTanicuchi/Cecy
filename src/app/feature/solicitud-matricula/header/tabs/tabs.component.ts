import { Component, EventEmitter, Output } from '@angular/core';
import { Catalog } from 'src/app/models/catalog.interface';
import { Param } from 'src/app/models/param.interface';
import { CatalogsService } from 'src/app/services/catalogs.service';
@Component({
  selector: 'tabs-solicitud-matriculas',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent {
  selectTab: string = 'ordinaria';
  enrollmentTypes: Catalog[] = [];
  @Output() selected = new EventEmitter<Param>();

  constructor(private catalogsService: CatalogsService) {}

  ngOnInit() {
    this.getEnrollmentTypes();
  }

  getEnrollmentTypes() {
    return this.catalogsService
      .getCatalogsByType('type_enrollment_id')
      .subscribe((enrollmentTypes) => {
        this.enrollmentTypes = enrollmentTypes;
        this.select(this.enrollmentTypes[0]);
      });
  }

  select(enrollmentType: Catalog) {
    this.selectTab = enrollmentType.value.toString();
    const enrollmentTypeParam: Param = {
      type: 'type_enrollment_id',
      term: enrollmentType.id.toString(),
    };
    this.selected.emit(enrollmentTypeParam);
  }
}
