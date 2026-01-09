# URL Shortner App

Aplicatia contine urmatoarele componente: 

* Microserviciu autentificare
* Microserviciu pentru business logic
* Frontend
* Baza de date PostgreSQL
* Adminer
* Monitorizare prin Grafana + Prometheus
* Portainer

Fiecare componenta are un folder separat in care se gasesc fisierele yaml pentru service-uri si deployment-uri

## Rulare
Din root folder se ruleaza urmatoarele:

docker pull kindest/node:v1.34.0

kind create cluster --config ./cluster/kind-config.yaml

helm install dev ./helm/url-shortner-app/


