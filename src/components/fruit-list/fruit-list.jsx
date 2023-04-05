
const FruitList = ( { fruits } ) => {

    // Créer une copie des valeurs dans la format JSX
    // Création d'un tableau de donnnées dans le format JSX
    // avec la copie des valeurs du tableau "fruits"
    const fruitsJSX = fruits.map(
        (fruit) => <li key={fruit.id}>{fruit.name}</li>
    );

    // console.log('fruits', fruits);
    // console.log('fruitsJSX', fruitsJSX);

    return (
        <ul>
            {/* ↓ Variable qui contient une collection d'éléments JSX */}
            {fruitsJSX}
        </ul>
    );
};
export default FruitList;