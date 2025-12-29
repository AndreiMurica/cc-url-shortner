docker pull kindest/node:v1.34.0

kind create cluster

ruleaza toate comenzile din cluster/cluster.txt

kubectl get all (ca sa vezi serviciile si podurile)

trb facut port forward la podul cu db ul ca sa il poti deschide in DBeaver/ adminer la localhost:5432

kubectl port-forward pod/postgres-db-.... 5432:5432

+ port forward la podul cu adminer (daca vrei sa il folosesti): 
kubectl port-forward pod/adminer-.... 8080

