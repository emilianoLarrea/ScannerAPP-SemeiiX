import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController  } from 'ionic-angular';
import { Http } from '@angular/http';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-viernes',
  templateUrl: 'viernes.html',
})
export class ViernesPage {
  options:BarcodeScannerOptions;
  encodText:string='';
  encodedData:any={};
  scannedData:any={};
  data:any={};
  emi:any={};
  evento="";
  constructor(public navCtrl: NavController, public scanner:BarcodeScanner, public http: Http, public toast: ToastController) {
    this.emi.response = '';
    
    this.http = http;
  }

  scan(){
    this.options= {
      prompt: 'Scan you barcode'
    };
    this.emi.response = '';
    this.scanner.scan().then((data) => {
        this.scannedData = data;
        console.log(data.text);
        if(!data.cancelled){
  
          var evento = this.evento;
          var dni = data.text;
          var link = 'https://www.semeiix.prolinesi.com/api.php';
          var myData = JSON.stringify({dni: dni, evento: evento});
    
          this.http.post(link, myData)
          .subscribe(data => {
          this.emi.response = data["_body"];
              
          
          }, error => {
            console.log("Oooops!");
          });
          
          
          
          
        }else{
          console.log("cancelado");
    }
        
        
        
    }, (err) => {
      console.log('Error : ', err);
      this.scan();
    })
  }
}
