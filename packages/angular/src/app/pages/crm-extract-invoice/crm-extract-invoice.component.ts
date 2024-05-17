
import { Component, OnInit, NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-crm-extract-invoice',
  templateUrl: './crm-extract-invoice.component.html',
  styleUrls: ['./crm-extract-invoice.component.scss']
})
export class CrmExtractInvoiceComponent implements OnInit {
 
  items: any[] = [];
  rowData: any; // ajoutez cette ligne
  myForm: FormGroup;
  fileContent: string;
  fileType: string;
  

  

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      raison_sociale: ['', Validators.required],
      matricule_fiscale: ['', Validators.required],
      facture_num: ['', Validators.required],
      date_facture: ['', Validators.required],
      date_navire: ['', Validators.required],
      provenance: ['', Validators.required],
      destination: ['', Validators.required],
      bl_numero: ['', Validators.required],
      dossier_num: ['', Validators.required],
      num: ['', Validators.required],
      libelle: ['', Validators.required],
      poids: ['', Validators.required],
    });
    this.addRow();
  }

  addRow() {
    this.items.push({ quantite: '', libelle_prod: '', prix_unitaire: '', montant: '' });
  }

  onSubmit() {
    console.log(this.myForm.value);
    console.log(this.items);
  }

  onFileSelected(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.fileContent = event.target.result;
      this.fileType = file.type.split('/')[0];
    };
    reader.readAsDataURL(file);
  }
}

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, // Ajoutez cette ligne
    DxDataGridModule, // Ajoutez cette ligne
    FormsModule
  ],  
  providers: [],
  exports: [],
  declarations: [CrmExtractInvoiceComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CrmExtractInvoiceModule { }

