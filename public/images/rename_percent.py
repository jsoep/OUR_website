#!/usr/bin/env python3
import os
import subprocess
from pathlib import Path

# Get current directory
images_dir = Path(__file__).parent

# Find all files with % in their names
for root, dirs, files in os.walk(images_dir):
    for filename in files:
        if '%' in filename and filename != 'rename_percent.py':
            old_path = os.path.join(root, filename)
            new_filename = filename.replace('%', '+')
            new_path = os.path.join(root, new_filename)

            # Make path relative to repo root
            rel_old = os.path.relpath(old_path, images_dir.parent.parent)
            rel_new = os.path.relpath(new_path, images_dir.parent.parent)

            print(f"Renaming: {rel_old} -> {rel_new}")

            # Use git mv
            try:
                subprocess.run(['git', 'mv', rel_old, rel_new],
                             cwd=images_dir.parent.parent,
                             check=True)
            except subprocess.CalledProcessError as e:
                print(f"  Error: {e}")
                # Try regular rename if git mv fails
                try:
                    os.rename(old_path, new_path)
                    subprocess.run(['git', 'add', rel_new],
                                 cwd=images_dir.parent.parent)
                    print(f"  Used regular rename instead")
                except Exception as e2:
                    print(f"  Failed: {e2}")

print("Done!")
