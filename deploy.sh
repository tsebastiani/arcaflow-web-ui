#!/bin/bash

helm upgrade -i console-plugin-template charts/openshift-console-plugin -n console-plugin-template --create-namespace --set plugin.image=quay.io/rh_ee_tsebasti/ocp-plugin-krkn:latest
podman build . -t quay.io/rh_ee_tsebasti/ocp-plugin-krkn:latest