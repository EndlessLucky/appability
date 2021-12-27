export interface UniverseFormat {

  color? : '';
  backgroundColor? : '';
  icons? : {
    icon1? : '',
    icon2? : ''
  };
  bold? : boolean;
  italic? : boolean;
  fontSize? : '';
  active? : boolean;
  blue? : boolean;
  edit_pencil_icon? : boolean;
  check_icon? : boolean;

  getFormatter?(model : any) : any;
  adapt?(): any;

}