seq 1000 | xargs -I % -P 50 curl --location 'http://localhost:30001/createShortUrl' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' \
--data '{"url": "https://helm.sh/docs/chart_template_guide/named_templates/"}'