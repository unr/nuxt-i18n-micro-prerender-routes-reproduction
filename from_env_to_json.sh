#!/bin/bash

env_file_path=".env"
json_file_path="output.json"

# Initialize the JSON object
json="{"

# Read the .env file line by line
while IFS= read -r line; do
  # Ignore empty lines and comments
  if [[ -n "$line" && ! "$line" =~ ^# ]]; then
    # Split the line into key and value
    IFS='=' read -r key value <<< "$line"
    # Add the key-value pair to the JSON object
    json+="\"$key\":\"$value\","
  fi
done < "$env_file_path"

# Remove the trailing comma and close the JSON object
json="${json%,}}"

# Format the JSON and save to a file
echo "$json" | jq . > "$json_file_path"
