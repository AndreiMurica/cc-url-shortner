{{- define "business-logic.name" -}}
{{ .Chart.Name }}
{{- end }}

{{- define "business-logic.fullname" -}}
{{ .Chart.Name }}-{{ .Release.Name }}
{{- end }}
