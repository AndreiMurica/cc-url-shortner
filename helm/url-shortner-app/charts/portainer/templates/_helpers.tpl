{{- define "portainer.name" -}}
{{ .Chart.Name }}
{{- end }}

{{- define "portainer.fullname" -}}
{{ .Chart.Name }}-{{ .Release.Name }}
{{- end }}
