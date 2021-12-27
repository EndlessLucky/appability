#!/bin/bash

# Create a new module based on another one

# Creates a copy of a module
# and replaces all required strings in filenames and in the content of the files

# Configure the variables

MODULE="timetrack"
MODULE_U="timetrack"
MODULE_NAME="Timetrack"
MODULE_CAMEL_CASE="Timetrack"

# base module variables
BASE_MODULE="client-stage"
BASE_MODULE_U="client_stage"
BASE_MODULE_CAMEL_CASE="ClientStage"
BASE_MODULE_NAME="Client Stage"

# feature modules directory
SCRIPTPATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
SOURCE_DIR="$SCRIPTPATH/../src/app/features/$BASE_MODULE"
TARGET_DIR="$SCRIPTPATH/../src/app/features/$MODULE"

# copy the module
cp -r "$SOURCE_DIR" "$TARGET_DIR"

# replace in filenames
find . -name "*$BASE_MODULE*" -exec rename -v "s/$BASE_MODULE/$MODULE/i" {} \;

# replace in file contents
find "$TARGET_DIR" -type f -exec sed -i "s#$BASE_MODULE#$MODULE#g" {} +
find "$TARGET_DIR" -type f -exec sed -i "s#$BASE_MODULE_U#$MODULE_U#g" {} +
find "$TARGET_DIR" -type f -exec sed -i "s#$BASE_MODULE_NAME#$MODULE_NAME#g" {} +
find "$TARGET_DIR" -type f -exec sed -i "s#$BASE_MODULE_CAMEL_CASE#$MODULE_CAMEL_CASE#g" {} +


