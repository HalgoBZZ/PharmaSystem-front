import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import { EmployesService } from 'src/app/services/employes.service';
import { Router } from '@angular/router';
import { ProduitsService } from '../../services/produits.service';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';
import { FacturesService } from '../../services/factures.service';

@Component({
  selector: 'app-caisse',
  templateUrl: './caisse.component.html',
  styleUrls: ['./caisse.component.css']
})
export class CaisseComponent implements OnInit {
  loggedUser;
  nb_piece = 0;
  selected_prod;
  produits;
  achats = [];
  products_names;
  selectedObject;
  total = 0;
  margins = { left: 20, top: 50, width: 100 };
  closeButton = false;
  iframe = document.createElement('iframe');

  constructor(private employeService: EmployesService, private router: Router, private factureService: FacturesService,
    private produitService: ProduitsService) { }

  ngOnInit() {
    const login = localStorage.getItem('login');
    this.employeService.getByLogin(login).subscribe(data => {
      if (data == null) {
        this.router.navigate(['/login']);
      }
      this.loggedUser = data;
    }, error => {
      this.router.navigate(['/login']);
    });
    this.getAllProduits();
  }


  getAllProduits() {
    this.produitService.getAllProduits().subscribe(result => {
      this.produits = result;
      // if (this.produits.length > 0) {
      //   for (const prod of this.produits) {
      //     this.products_names = prod.nom_prod;
      //   }
      // }
    });
  }

  addProdNewElement() {
    const achat = {
      'produit': this.selected_prod,
      'prix': this.selectedObject.prix_prod,
      'tva': this.selectedObject.tva_prod,
      'nb_piece': this.nb_piece,
    };
    this.achats.push(achat);
    this.total += achat.prix * (achat.nb_piece + (achat.tva / 100) * achat.nb_piece);
    this.nb_piece = 0;
  }

  calculerTotal() {
    this.achats.forEach(element => {
      this.total += element.prix * (element.nb_piece + (element.tva / 100));
    });
  }
  onSelectItem(event: TypeaheadMatch): void {
    this.selectedObject = event.item;
  }

  // saveFacture() {
  //   this.factureService.save().subscribe(data => {

  //   })
  // }


  generate() {
    const pdf = new jsPDF();
    pdf.setFontSize(18);
    // pdf.addHTML($('#html-2-pdfwrapper'),
     // this.margins.left, this.margins.top, this.margins, function (dispose) {
        pdf.text(20, 20, 'Facture');
        pdf.text(20, 30, 'Produit | Prix | TVA | Nombre de piéces');
        let i = 20;
        this.achats.forEach(element => {
          i = i + 30;
          const texte = element.produit + ' | ' + element.prix + ' | ' + element.tva + ' | ' + element.nb_piece;
          pdf.text(20, i, texte);
        });
        pdf.text(20, i + 30, 'Total: ' + this.total);
        // this.headerFooterFormatting(pdf);
      // });

    this.iframe.setAttribute('style', 'position:absolute;right:0; top:0; bottom:0; height:100%; width:650px; padding:20px;');
    this.iframe.setAttribute('onmouseout', 'style.display:none');
    document.body.appendChild(this.iframe);

    this.iframe.src = pdf.output('datauristring');
    this.closeButton = true;
  }

  closePdfWindow() {
    this.iframe.setAttribute('style', 'display:none;');
    this.closeButton = false;
  }


  headerFooterFormatting(doc) {
    const totalPages = doc.internal.getNumberOfPages();
    for (let i = totalPages; i >= 1; i--) {
      // doc.addPage();
      doc.text(20, 20, 'Hello world!');
      doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
      // this.header(doc);
      // this.footer(doc, i, totalPages);
    }
  }

  header(doc) {
    doc.setFontSize(30);
    doc.setTextColor(40);
    doc.setFontStyle('normal');
    /*if (base64Img) {
      doc.addImage(base64Img, 'JPEG', margins.left, 10, 40,40);
    } */
    doc.text('Report Header Template'
      , this.margins.left + 50, 40);
    doc.line(3, 70, this.margins.width + 43, 70); // horizontal line
  }
}
