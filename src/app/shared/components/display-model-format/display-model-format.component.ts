import { Component, OnInit, Input, ComponentFactoryResolver, ViewContainerRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ModelFormatService } from '../../services/model-format.service';
import { RestApiService } from '../../../shared/grid/services/rest-api.service';

@Component({
  selector: 'app-display-model-format',
  templateUrl: './display-model-format.component.html',
  styleUrls: ['./display-model-format.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class DisplayModelFormatComponent implements OnInit {

  @Input() model : any;
  @Input() text : string;
  @Input() colName : string;
  @Input() limit : number;

  suffix = '…';
  currentText: string;
  isCollapsed = true;
  completeWords = true;

  
  @ViewChild('dynamicInsert', { read: ViewContainerRef }) dynamicInsert: ViewContainerRef;
  componentFactory : any;
  componentRef : any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private modelService : ModelFormatService,
    private restService : RestApiService
  ) { }

  ngOnInit(): void {
    this.dynamicInsert = this.viewContainerRef;
    this.dynamicInsert.clear();
    const model_type = this.restService.getModelString();
    this.componentFactory = this.resolver.resolveComponentFactory(this.modelService.getComponent(model_type));
    this.componentRef = this.dynamicInsert.createComponent(this.componentFactory);
    this.determineView();
    this.componentRef.instance.text = this.currentText;
    this.componentRef.instance.model = this.model;
    this.componentRef.instance.colName = this.colName;
  }

  toggleView() {
    this.isCollapsed = !this.isCollapsed;
    this.determineView();
  }

  determineView() {
    if (this.isCollapsed) {
      this.currentText = this.truncate(this.text, this.limit, this.completeWords, this.suffix);
    } else {
      this.currentText = this.text;
    }
  }

  ngOnChanges() {
    this.determineView();
  }

  truncate(value: string, limit = 25, completeWords = false, suffix = '…') {
    if (!value || !value.length) {
      return value;
    }
    if (completeWords) {
      if (value.length > limit) {
        limit = value.substr(0, limit).lastIndexOf(' ');
      }
    }
    return value.length > limit ? value.substr(0, limit) + suffix : value;
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }

}
