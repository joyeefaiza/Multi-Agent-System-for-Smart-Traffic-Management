# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.

import subprocess  # Importing subprocess for running external processes


def print_hi(name):
    # Use a breakpoint in the code line below to debug your script.
    print(f'Hi, {name}')  # Press Ctrl+F8 to toggle the breakpoint.


def call_human_interface():
    # Function to call the human-interface.tsx file
    subprocess.run(["node", "human-interface.tsx"], check=True)


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    print_hi('PyCharm')
    call_human_interface()  # Call the human-interface.tsx file

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
