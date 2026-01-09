{{- define "prometheus.name" -}}
{{ .Chart.Name }}
{{- end }}

{{- define "prometheus.fullname" -}}
{{ .Chart.Name }}-{{ .Release.Name }}
{{- end }}
