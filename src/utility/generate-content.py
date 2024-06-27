import petl as etl
import json
import os
import sys

def generate_json_files(csv_file_path):
    # Read the CSV file
    table = etl.fromcsv(csv_file_path)
    
    # Process each row in the CSV file
    for row in etl.dicts(table):
        # Generate the JSON data
        data = {
            "id": row["id"],
            "url": [
                {
                    "path": row["image"],
                    "image": row["image"],
                    "type": "image",
                    "imageAlt": row["imageAlt"]
                }
            ],
            "description": ""
        }

        # Create the description
        if row["artist"]:
            data["description"] = f"Art by {row['artist']}."
        else:
            data["description"] = "Artist unknown."

        if row["business"]:
            data["description"] += f" At or near {row['business']}."

        # Write the JSON data to a file
        json_file_name = f"{row['id']}.json"
        with open(json_file_name, "w") as json_file:
            json.dump(data, json_file, indent=4)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python script.py <csv_file_path>")
        sys.exit(1)

    csv_file_path = sys.argv[1]
    if not os.path.exists(csv_file_path):
        print(f"File not found: {csv_file_path}")
        sys.exit(1)

    generate_json_files(csv_file_path)