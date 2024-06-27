#!/bin/bash
#
# Shellscript list all current specfiles in their respective folders
# Execute script with the specfolder as argument e.g. bash list-specfiles.sh cypress/e2e/product_configuration
# 
# Example output in cypress/e2e/product_configuration/serviceprodukt/speclist.txt:
#
# cypress/e2e/product_configuration/Serviceprodukte/configure_serviceprodukt_aenderung_breite.spec.js
# cypress/e2e/product_configuration/Serviceprodukte/configure_serviceprodukt_aenderung_schnurlaenge.spec.js
# cypress/e2e/product_configuration/Serviceprodukte/configure_serviceprodukt_laengere_fuehrungsschnuere.spec.js
# cypress/e2e/product_configuration/Serviceprodukte/configure_serviceprodukt_schnur_ersetzen.spec.js


#set -x

counter(){
   for file in "$1"/*
    do
    if [ -d "$file" ]
    then
           
            echo "$file"
            ls -p "$file" | grep -v / | grep js | sed "s|^|"$file"/|" | sort > "$file"/speclist.txt

            counter "$file"
    fi
    done
}

counter "$1"
