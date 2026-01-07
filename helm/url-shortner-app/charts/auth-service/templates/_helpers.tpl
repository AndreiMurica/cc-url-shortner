{{- define "auth-service.name" -}}
{{ .Chart.Name }}
{{- end }}

{{- define "auth-service.fullname" -}}
{{ .Chart.Name }}-{{ .Release.Name }}
{{- end }}
