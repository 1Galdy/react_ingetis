// Écouteur d'événements et gestionnaires d'événements dans un composant

// import React from "react";

// Vos composants de fonction peuvent inclure des gestionnaires d’événements. 
// Avec les gestionnaires d'événements, nous pouvons exécuter du code en réponse aux interactions avec l'interface, 
// comme un clic.

function SubmitButton() {
    
    
    //Cette fonction affiche une alerte avec le message 'Submission Successful.' quand elle est appelée
      function handleClick() {
        alert('Submission Successful.');
      }
    return (
        <button onClick={handleClick}>
            Submit
        </button>
    );
}

ReactDOM.render(
    <SubmitButton />,
    document.getElementById('root2')
);
