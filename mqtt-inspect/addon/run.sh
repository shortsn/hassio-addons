#!/usr/bin/env bashio

bashio::log.info "Starting application..."

if bashio::services.available "mqtt"; then
    export MQTT_HOST=$(bashio::services "mqtt" "host")
    export MQTT_USER=$(bashio::services "mqtt" "username")
    export MQTT_PASSWORD=$(bashio::services "mqtt" "password")
else
    bashio::log.info "The mqtt addon is not available."
fi

exec node index.js