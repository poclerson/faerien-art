export const url = 'https://faerienart.com';

export const cheminsFournisseurs = {
  hcms: "/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer",
  wp: "/wp-json/better-rest-endpoints/v1%%cheminFinal%%?per_page=100"
};

/**
 * Prend des paramètres et retourne 
 * @param {string} chemin Chemin WP ou route React à charger
 * @param {string} fournisseur Fournisseur de REST à utiliser (wp, hcms ou bre)
 * @param {string} parametres Paramètres de la requête
 * @returns {string} URL modifiée selon les paramètres de la fonction
 */
export const traiterRequete = (chemin, fournisseur, parametres) => {
  if (parametres === undefined)
    return url + cheminsFournisseurs[fournisseur].replace("%%cheminFinal%%", chemin);

  else
    return url + cheminsFournisseurs[fournisseur].replace("%%cheminFinal%%", chemin) + parametres;
}