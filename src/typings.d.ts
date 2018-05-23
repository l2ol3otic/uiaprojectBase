/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
interface JQuery {

  fullCalendar(options?: any, callback?: Function ) : any; 
  datepicker(options?: any, callback?: Function ) : any; 
  modal(options?: any, callback?: Function ) : any; 
  DataTable(options?: any, callback?: Function ) : any; 
  
}
interface Window {
  win: any;
 
}
