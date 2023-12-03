import React from 'react'
import {useNavigate} from 'react-router-dom'
const Conditions = () => {


    const navigate = useNavigate();


  return (
    <section className=' bg-bSdenim text-bSlight nike-container p-[100px] flex flex-col justify-center items-center'>
        <button  onClick={()=> navigate('/')}
        className='bg-gradient-to-t from-bSgreen to-blue-500 p-6 -tracking-tighter text-[30px] rounded-2xl px-[200px] my-[100px]'>Back To Cherti Store </button>
        <p className=' font-normal'>
        <div className='text-[30px] font-semibold'> Conditions générales de vente </div>
Vente en ligne des produits de la marque « Cherti chaussures » par la société Walkwise SARL.
Les présentes conditions générales de vente s'appliquent entre :
La société WALKWISE SARL, au capital de 100 000 Dirhams, ayant son siège avenue Allal Ben abdellah, immeuble El Youbia bureau 28 Fès - Maroc, immatriculée au RC, éditrice du site www.chertichaussures.com

Ci-après : « Cherti chaussures» <br/>
Et :<br/>
Toute personne effectuant un achat sur le site www.chertichaussures.com <br/>
Ci-après : « Le CLIENT »<br/>
Le CLIENT déclare avoir la capacité de conclure le présent contrat c'est-à- dire d'avoir la majorité légale et ne pas être sous tutelle. La commande par le CLIENT implique l'adhésion irrévocable aux présentes conditions générales de vente.

Présentation des produits<br/>

Les produits proposés à la vente sont décrits et présentés avec la plus grande exactitude possible. Toutefois, si des erreurs ou omissions ont pu se produire quant à cette présentation, la responsabilité de Cherti Chaussures ne pourrait être engagée.
Les photos représentant nos produits n'ont qu'une valeur indicative. Ces photos, tout comme les textes illustrant les produits, n'entrent pas dans le champ contractuel.
Cherti Chaussures pourrait, du fait de ses fournisseurs, être amené à livrer au CLIENT un article de composition légèrement différente de celle décrite mais en tout état de cause de qualité égale ou supérieure à l'article commandé.

Prix & Modalité de paiement<br/>

Les prix présentés sur le site ou la boutique en ligne incluent la valeur de la paire de chaussure et les frais de livraison.
Cherti Chaussures offre pour le moyen de paiement suivant : paiement à la livraison (cash on delivery) , c'est-à-dire le client peut essayer et s’assurer de la qualité de la paire de chaussure avant de procéder au paiement de sa commande.

Acceptation de l’offre<br/>

Toute commande vaut acceptation expresse et irrévocable des prix et des descriptions des produits disponibles à la vente. La validation de la commande par le CLIENT vaut acceptation des conditions générales de vente.

Livraison & Transport<br/>

Livraison à domicile gratuite partout au Maroc. Un délai de livraison entre 3 à 5 jours <br/>
Les délais de livraison indiqués sur notre site nous ont été communiqués par le prestataire de transport et ont un caractère purement indicatif. Le dépassement de ces délais ne pourra en aucun cas être retenu contre Cherti Chaussures, ni donner lieu à une résiliation du contrat ou à une quelconque indemnité pour dommages et intérêts.

 Retours & Droit de rétractation<br/>

Si un article ou plusieurs articles ne conviennent pas, le CLIENT dispose d’un délai de 3 jours à compter de la date de livraison de la marchandise, pour exercer le droit de rétractation de sa commande. 
Le remboursement s’effectue sous un délai maximum de 15 jours ouvrables à compter de la réception du retour des marchandises par re-crédit sur le moyen de paiement utilisé lors de l’achat et ce après contrôle du bon état de l'article et de son emballage. Les produits endommagés, retournés incomplets, ou salis ne seront ni repris, ni remboursés. Au-delà du délai de 15 jours à compter de la livraison, les marchandises ne seront ni reprises, ni remboursées.
        </p>
    </section>
  )
}

export default Conditions