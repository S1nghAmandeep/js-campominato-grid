# Gliglia Campo Minato

- prendere dom element con classe (cell body)
- prendere bottone dal dom (play-btn)
- applicare eventlistner click
    - dare innerHTML = 0 all DOM del (cell body) per eliminare ogni volta che clicchiamo precedenti celle 
    - creare un ciclo for per dare risultato da 1/100
        - creare una stinga per inserire nel dom
        - applicare la classe delle celle
        - cocatenare al elemeto dom il risulato del ciclo for
    - prendere l'elementi dal dom (celle) generato precedentemente
    - creare il ciclo for per ciclare array del elemento cell
        - creare il variablie ed assegnare = array del dom (celle) ciclato
        - assegnare eventlistner al variabile (click)
            - applicare la classe bg-azzuro

# Bonus

- creare una variabile e recuperare elemento(select) dal dom
    - SE è stata selezionato difficolta 3
        - creare ciclo for da 1/81
        - applicare la classe cell-three
    - ALTRIMENTI SE è stata selezionata difficoltò 2
        - creare ciclo for da 1/49
        - applicare la classe cell-two
    - ALTRIMENTI 