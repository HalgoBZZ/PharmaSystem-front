import { Categorie } from './categorie';
import { Fournisseur } from './fournisseur';

export class Produit {
    id_prod;
    nom_prod;
    ref_prod;
    forme_prod;
    dosage_prod;
    qte_prod;
    expiration;
    prix_prod;
    tva_prod;
    date_ajout;
    date_modification;
    production_prod;
    fournisseur: Fournisseur;
    categorie: Categorie;
}
