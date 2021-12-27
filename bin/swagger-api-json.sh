#!/bin/bash

# Downloads API schema in JSON format
# Usage: swagger-api-json.sh <http://path-to-swagger-api-url>

# Pretty print JSON? (requires json_pp executable)
format_output=true

# Swagger API URL
api_url=$1

if [ -z "$1" ]; then
  echo "ERROR: Required parameter <swagger_api_url> is missing."
  echo "Usage: swagger-api-json.sh <http://path-to-swagger-api-url>"
  exit 123
fi

output_file=../src/api/schema.json

script_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
output_path=`readlink -f "$script_path/$output_file"`

echo "Downloading Swagger schema from: ${api_url}..."

if [ "$format_output" = true ]; then
    curl -s -H "accept: application/vnd.swagger+json" $api_url | json_pp > "$output_path"
else
    curl -s -H "accept: application/vnd.swagger+json" $api_url > "$output_path"
fi

echo "Done."
echo "API schema saved to: $output_path"

