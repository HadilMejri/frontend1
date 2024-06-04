  import { Component, OnInit, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
  import { DxDataGridModule } from 'devextreme-angular';
  import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule, FormArray, FormControl, AbstractControl } from '@angular/forms';
  import { CommonModule } from '@angular/common';
  import { FacturesService } from '../../services/factures.service'; // Importez le service Angular correspondant à votre backend
  import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
  import { FactureDetails } from '../../models/facturedetails.model';
  import { KeyValuePipe } from '@angular/common';

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
    filename: string;
    marchandises: FormArray;
    prestations: FormArray;
    facture: any = [];


    constructor(private fb: FormBuilder, private facturesService: FacturesService, private sanitizer: DomSanitizer) { }
    ngOnInit() {
      this.myForm = this.fb.group({
        marchandises: this.fb.array([this.createMarchandiseFormGroup()]),
        prestations: this.fb.array([this.createPrestationsFormGroup()]),
        num_facture: ['', Validators.required],
        code_client: ['', Validators.required],
        code_fiscal: ['', Validators.required],
        pays: ['', Validators.required],
        ville: ['', Validators.required],
        date_facture: ['', Validators.required],
        nom_navire: ['', Validators.required],
        provenance: ['', Validators.required],
        destination: ['', Validators.required],
        date_navire: ['', Validators.required],
        dossier_num: ['', Validators.required],
        b_l_numero: ['', Validators.required],
        marque_code: ['', Validators.required],

      });
    }
    createMarchandiseFormGroup(): FormGroup {
      return this.fb.group({
        codeMarque: ['', Validators.required],
        designation: ['', Validators.required],
        colMtg: ['', Validators.required],
        poids: ['', Validators.required]
      });
    }
    createPrestationsFormGroup(): FormGroup {
      return this.fb.group({
        Num: ['', Validators.required],
        Rubrique: ['', Validators.required],
        Base: ['', Validators.required],
        Taux: ['', Validators.required],
        Montant: ['', Validators.required],
        TypeRubrique: ['', Validators.required]
      });
    }




    addRowToMarchandises() {
      this.marchandises = this.myForm.get('marchandises') as FormArray;
      this.marchandises.push(this.createMarchandiseFormGroup());
    }

    addRowToPrestations() {
      this.prestations = this.myForm.get('prestations') as FormArray;
      this.prestations.push(this.createPrestationsFormGroup());
    }
    

    onSubmit() {
      console.log(this.myForm.value);
      console.log(this.items);
    }

    onFileSelected(event) {
      const file = event.target.files[0];
      const fullFileName = file.name; // Get the full file name
      const fileNameWithoutExtension = fullFileName.replace(/\.[^/.]+$/, ""); // Remove the file extension
      this.filename = fileNameWithoutExtension; // Store the file name without extension
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.fileContent = event.target.result;
        this.fileType = file.type.split('/')[0];
      };
      reader.readAsDataURL(file);
    }
    //   extractData() {
    //     // Récupérer l'élément HTML input de type file qui contient l'image sélectionnée
    //     const inputElement = document.getElementById('file-input') as HTMLInputElement;
    //     // Récupérer le nom de l'image sélectionnée
    //     const file = inputElement.files[0];
    //     const fileName = file.name.split('.')[0];
    //     // Convertir le nom de l'image en un nombre entier et récupérer les données de la facture à l'aide de la fonction GetFactureDetails()
    //     this.facturesService.getFactureDetails(parseInt(fileName, 10)).subscribe((data: FactureDetails) => {
    //       // Stocker les données de la facture dans des variables locales
    //       const factureNum = data.numFacture;
    //       const clientCode = data.codeClient;
    //       const fiscalCode = data.codeFiscal;
    //       const country = data.pays;
    //       const city = data.ville;
    //       const invoiceDate = data.date;
    //       const shipName = data.nomNavire;
    //       const origin = data.provenance;
    //       const destination = data.destination;
    //       const departureDate = data.dateDepart;
    //       const folderNum = data.dossierNum;
    //       const blNum = data.blNumero;
    //       const brandCode = data.marqueCode;
    //       // Remplir les champs du formulaire avec les données de la facture à l'aide de la méthode patchValue()
    //       this.myForm.patchValue({
    //         numFacture: factureNum,
    //         codeClient: clientCode,
    //         codeFiscal: fiscalCode,
    //         pays: country,
    //         ville: city,
    //         date: invoiceDate,
    //         nomNavire: shipName,
    //         provenance: origin,
    //         destination: destination,
    //         dateDepart: departureDate,
    //         dossierNum: folderNum,
    //         blNumero: blNum,
    //         marqueCode: brandCode
    //       });
    //       // Remplir les tableaux de marchandises et de prestations avec les données récupérées à partir du backend
    //       const marchandisesFormArray = this.myForm.get('marchandises') as FormArray;
    //       const prestationsFormArray = this.myForm.get('prestations') as FormArray;
    //       marchandisesFormArray.clear();
    //       prestationsFormArray.clear();
    //       data.libelleMarchandises.forEach(m => {
    //         marchandisesFormArray.push(this.fb.group({
    //           codeMarque: [m.marqueCode, Validators.required],
    //           designation: [m.designation, Validators.required],
    //           colMtg: [m.colMtg, Validators.required],
    //           poids: [m.poids, Validators.required]
    //         }));
    //       });
    //       data.prestations.forEach(p => {
    //         prestationsFormArray.push(this.fb.group({
    //           num: [p.num, Validators.required],
    //           rubriques: [p.rubrique, Validators.required],
    //           Base: [p.Base, Validators.required],
    //           taux: [p.taux, Validators.required],
    //           montant: [p.montant, Validators.required],
    //           typeRubrique: [p.typeRubrique, Validators.required]
    //         }));
    //       });
    //     });

    // }
    // }

    extractData(fileName: string) {
      const numeroFacture = parseInt(fileName, 10); // Convert the file name to a number
      this.facturesService.getFactureDetails(numeroFacture).subscribe(
        (response: any) => {
          console.log("here response", response);
          
      //   response.data.forEach((e: any) => {
      //     this.facture.push(e);
      //     console.log(this.facture);
      //   });
      // }, (error) => {
      //   console.log('Error', error);
      })
      
    }
  }

  @NgModule({
    imports: [
      CommonModule,
      KeyValuePipe,
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
