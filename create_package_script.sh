#!/bin/bash

echo "Quel nom de package ?"
read module

nest g module packages/$module --no-spec
nest g controller packages/$module --no-spec
nest g service packages/$module --no-spec
nest g class packages/$module/$module.entity --flat --no-spec
nest g class packages/$module/dto/Create$module.dto --flat --no-spec
nest g class packages/$module/dto/Update$module.dto --flat --no-spec
nest g class packages/$module/dto/Delete$module.dto --flat --no-spec

echo "Package créer avec succès"