{{- define "postgres-db.name" -}}
{{ .Chart.Name }}
{{- end }}

{{- define "postgres-db.fullname" -}}
{{ .Chart.Name }}-{{ .Release.Name }}
{{- end }}
