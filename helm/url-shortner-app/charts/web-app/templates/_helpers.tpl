{{- define "web-app.name" -}}
{{ .Chart.Name }}
{{- end }}

{{- define "web-app.fullname" -}}
{{ .Chart.Name }}-{{ .Release.Name }}
{{- end }}
