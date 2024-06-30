import os
import sys
from collections import defaultdict

def process_files(folder_path):
    try:
        # Ensure the folder exists
        if not os.path.isdir(folder_path):
            print(f"The folder {folder_path} does not exist.")
            return

        # Dictionary to keep track of the sequence for each identifier
        sequence_tracker = defaultdict(int)

        # Iterate over all files in the folder
        for filename in os.listdir(folder_path):
            # Check if the filename contains a space
            if ' ' in filename:
                # Extract the part before the first space
                key_part = filename.split(' ')[0]

                # Increment the sequence number for this key part
                sequence_tracker[key_part] += 1
                sequence_number = sequence_tracker[key_part]

                # Create the new filename with the format "d#n.jpg"
                new_filename = f"w{key_part}{sequence_number}.jpg"

                # Construct full file paths
                old_file_path = os.path.join(folder_path, filename)
                new_file_path = os.path.join(folder_path, new_filename)

                # Rename the file
                os.rename(old_file_path, new_file_path)
                print(f"Renamed: {filename} -> {new_filename}")
            else:
                print(f"Skipping: {filename} (no space found)")

    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python script.py <folder_path>")
    else:
        folder_path = sys.argv[1]
        process_files(folder_path)
