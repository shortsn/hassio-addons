#!/usr/bin/env bashio

if ! bashio::services.available "mqtt"; then
    bashio::log.error "No internal MQTT service found"
else
    bashio::log.info "MQTT service found, fetching credentials ..."
    export MQTT_HOST=$(bashio::services mqtt "host")
    export MQTT_USER=$(bashio::services mqtt "username")
    export MQTT_PASSWORD=$(bashio::services mqtt "password")
fi

exec node index.js