#!/usr/bin/env bashio

export MQTT_HOST=$(bashio::config "mqtt.server")
export MQTT_USER=$(bashio::config 'mqtt.user')
export MQTT_PASSWORD=$(bashio::config 'mqtt.password')

exec node index.js