{{- define "adminer.name" -}}
{{ .Chart.Name }}
{{- end }}

{{- define "adminer.fullname" -}}
{{ .Chart.Name }}-{{ .Release.Name }}
{{- end }}
