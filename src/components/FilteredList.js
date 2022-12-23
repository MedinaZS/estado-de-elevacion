import React from 'react';

const FilteredList = ({ filter, items }) => items
    .map((item, i) => {

        //Obtiene el indice de donde se ubica el fragmento de palabra que se ingreso por el input
        //EJ: input : om
        //Palabra sombrero
        //Start = 1
        const start = item.indexOf(filter);

        //Se obtiene el final del fragmento de la palabra ingresada por el input
        //EJ: input : om
        //Palabra sombrero
        //Start = 1
        //end = 1 + 2 (length de 'om'), el final es 3 
        const end = start + filter.length;

        return (
            //Retornar las palabras resaltando el fragmento de palabra ingresado en el input
            <p key={i}>
                {/* Fragmento de la palabra antes de la coincidencia ingresada por el input (ejemplo del sombrero) -> s */}
                {item.slice(0, start)}
                {/* Fragmento de la coincidencia ingresada por el input (ejemplo del sombrero) -> om */}
                <em><strong>{item.slice(start, end)}</strong></em>
                {/* Fragmento de la palabra despues de la coincidencia ingresada por el input (ejemplo del sombrero) -> brero */}
                {item.slice(end)}
            </p>
        );
    }
    )

export default FilteredList;
