{{- define "grafana.name" -}}
{{ .Chart.Name }}
{{- end }}

{{- define "grafana.fullname" -}}
{{ .Chart.Name }}-{{ .Release.Name }}
{{- end }}
