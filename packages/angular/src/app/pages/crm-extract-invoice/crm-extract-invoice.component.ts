import { Component, OnInit, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FacturesService } from '../../services/factures.service'; // Importez le service Angular correspondant à votre backend
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FactureDetails } from '../../models/facturedetails.model';


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
  marchandises: any[] = [];
  prestations: any[] = [];


  constructor(private fb: FormBuilder, private facturesService: FacturesService, private sanitizer: DomSanitizer) {}
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
    this.addRowToMarchandises();
    this.addRowToPrestations();

  }

  addRowToMarchandises() {
    this.marchandises.push({ codeMarque: '', designation: '', colMtg: '', poids: '' });
  }
  
  addRowToPrestations() {
    this.prestations.push({ num: '', rubriques: '', base: '', taux: '',montant: '' , A_D: '' });
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
  extractData() {
    // Récupérer l'élément HTML input de type file qui contient l'image sélectionnée
    const inputElement = document.getElementById('file-input') as HTMLInputElement;
    // Récupérer le nom de l'image sélectionnée
    const file = inputElement.files[0];
    const fileName = file.name.split('.')[0];
    // Convertir le nom de l'image en un nombre entier et récupérer les données de la facture à l'aide de la fonction GetFactureDetails()
    this.facturesService.getFactureDetails(parseInt(fileName, 10)).subscribe((data: FactureDetails) => {
      // Stocker les données de la facture dans des variables locales
      const factureNum = data.numFacture;
      const clientCode = data.codeClient;
      const fiscalCode = data.codeFiscal;
      const country = data.pays;
      const city = data.ville;
      const invoiceDate = data.date;
      const shipName = data.nomNavire;
      const origin = data.provenance;
      const destination = data.destination;
      const departureDate = data.dateDepart;
      const folderNum = data.dossierNum;
      const blNum = data.numPrestation;
      const brandCode = data.marqueCode;
      // Remplir les champs du formulaire avec les données de la facture à l'aide de la méthode patchValue()
      this.myForm.patchValue({
        numFacture: factureNum,
        codeClient: clientCode,
        codeFiscal: fiscalCode,
        pays: country,
        ville: city,
        date: invoiceDate,
        nomNavire: shipName,
        provenance: origin,
        destination: destination,
        dateDepart: departureDate,
        dossierNum: folderNum,
        blNumero: blNum,
        marqueCode: brandCode
      });
      // Remplir les tableaux de marchandises et de prestations avec les données récupérées à partir du backend
      this.marchandises = data.libelleMarchandises.map(m => ({
        codeMarque: m.marqueCode,
        designation: m.designation,
        colMtg: m.colMtg,
        poids: m.poids
      }));
      this.prestations = data.prestations.map(p => ({
        num: p.num,
        rubriques: p.rubrique,
        base: p.base,
        taux: p.taux,
        montant: p.montant,
        A_D: p.typeRubrique
      }));
      
    });
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
