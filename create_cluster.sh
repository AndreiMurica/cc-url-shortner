kind create cluster --name cc-url-shortner --config cluster/kind-config.yaml &&

kubectl apply -f postgres/postgres-db-pvc.yaml &&
kubectl apply -f postgres/postgres-configmap.yaml &&
kubectl apply -f postgres/postgres-db-deployment.yaml &&
kubectl apply -f postgres/postgres-db-service.yaml &&
kubectl apply -f postgres/postgres-db-secret.yaml &&

#  adminer
kubectl apply -f postgres/adminer/adminer-service.yaml &&
kubectl apply -f postgres/adminer/adminer-deployment.yaml &&

# auth service
kubectl apply -f auth-service/auth-deployment.yaml &&
kubectl apply -f auth-service/auth-service.yaml &&

# backend
kubectl apply -f business-logic/business-logic-deployment.yaml &&
kubectl apply -f business-logic/business-logic-service.yaml &&

# frontend
kubectl apply -f url-web-app/web-app-deployment.yaml &&
kubectl apply -f url-web-app/web-app-service.yaml &&

#  monitoring + portainer
kubectl apply -f monitoring/portainer.yaml &&
kubectl apply -f monitoring/prometheus-configmap.yaml &&
kubectl apply -f monitoring/prometheus-deployment.yaml &&
kubectl apply -f monitoring/prometheus-service.yaml &&
kubectl apply -f monitoring/grafana-deployment.yaml &&
kubectl apply -f monitoring/grafana-service.yaml
