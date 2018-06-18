# SPIS TREŚCI
- Spis treści
- Wstępna prezentacja projektu
- Informacje ogólne
- Szum Perlina
- Podsumowanie

# Wstępna prezentacja projektu
Celem projektu jest stworzenie generatora, który z pomocą seed’a wyrysuje na canvie tereny, który swoim wyglądem będzie przypominać średniowieczne tereny. Do stworzenia programu użyję HTML(szkielet), CSS(wygląd), JS(logika gry i wygląd). Wykorzystuję również bibliotekę processingJS. Korzystając z szumu perlina, algorytm generuje już prostą mapę, na której znajdują się rzeki, oceny, wyżyny, i płaskie tereny. Jednym z większych problemów na jakie natrafiłem jest generowanie miasta. Ciężko jest mi wymyślić/znaleźć algorytm, który tworzyłby tereny, które przypominałyby te, które można było spotkać w średniowieczu. W przyszłości będę rysował na canvie również lasy/pola itp. rzeczy, które urealnią mapę. 

![Mapa duża skala](screens/terrainFar.png?raw=true "Mapa duża skala")
Cały widok mapy z większej perspektywy. Tak wygenerowany teren nie przypomina nawet trochę żadnej mapy na ziemi.


Szum perlina w czerni i bieli.
Losowo wygenerowany szum.

# Informacje ogólne
 
Generator świata został stworzony w ramach zajęć „Informatyka 2 projekt”.
Do jego stworzenia zostały użyte następujące technologie:

- HTML – język ten został użyty do opisania szkieletu strony. Umożliwił on też dodanie pól tekstowych i połączenie <buton> z JavaScript.
- CSS  - został użyty do opisania wyglądu strony. Nie wpływa on na wygląd mapy!
- JavaScript – język programowania, który zajmuje się całą logiką kodu. Odpowiada on za programistyczną część projektu tj. generowanie mapy, wyświetlanie poszczególnych jej pól.
- ProcessingJS – biblioteka do JavaScript, której zadaniem jest ułatwienie pracy z grafiką. Użyto jej do wygenerowania szumu Perlina.

# Szum Perlina

Szum ten został zaprojektowany na potrzeby filmu Tron. Perlin, który był odpowiedzialny za efekty specjalne swojego filmu, stanął przed problemem, który polegał na stworzeniu realistycznie wyglądającej aglomeracji. Trudność tego zadania leżała w tym, że aglomeracja ta była bardzo duża, co sprawiło, że jej ręczne projektowanie stało się zbyt czasochłonne.

# Podsumowanie

W projekcie brakuje jeszcze wielu ważnych elementów, które zostaną z czasem dodane.
