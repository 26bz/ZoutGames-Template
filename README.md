# ZoutGames Hosting Template Setup Guide

## Prerequisites

Before starting, ensure you have installed:

- Visual Studio Code (VS Code)
- Node.js and npm (Node Package Manager)

## Step-by-Step Setup Instructions

### 1. Open Project in VS Code

1. Open VS Code
2. Go to File > Open Folder
3. Navigate to and select your ZoutGames template folder
4. Click "Select Folder"

### 2. Install Dependencies

1. Open VS Code's integrated terminal:
   - Press `Ctrl + ` (Windows/Linux) or `Cmd + ` (Mac), OR
   - Go to View > Terminal
2. In the terminal, enter:
   ```bash
   npm install
   ```
3. Wait for the installation to complete (this may take a few minutes)

### 3. Start the Development Server

1. In the same terminal, enter:
   ```bash
   npm start
   ```
2. Your default web browser will automatically open with your website
3. The site will be running at `http://localhost:3000` by default if your using npm

## What to Expect

- After `npm install`: You'll see a progress bar and package installation messages
- After `npm start`:
  - Terminal will show compilation progress
  - Browser will open automatically
  - Any code changes will trigger automatic page updates

## Building for Production

When you're ready to deploy your website:

1. In the terminal, run:
   ```bash
   npm run build
   ```
2. This will create a `dist` or `build` folder containing your production-ready website files
3. Upload the entire contents of this folder to your web hosting provider's root directory

### Important Build Tips:

- Always create a backup of your source code before building
- Keep a copy of each production build in case you need to revert changes
- Store builds in separate dated folders (e.g., `builds/2024-05-11/`)
- Test the built website thoroughly before deploying
- Consider using version control (like Git) to track changes

## Troubleshooting

If you encounter any issues:

1. Ensure you're in the correct folder in the terminal
2. Try closing VS Code and reopening it
3. Check if Node.js is properly installed by running `node --version`
4. If packages fail to install, try deleting the `node_modules` folder and running `npm install` again

## Notes

- If installing on a web server, you'll need to create an `.htaccess` file.
- If installing on a VPS, ensure your Nginx configuration for the site is set to direct requests to `index.html`.

## License

This project is licensed under the GNU General Public License v3.0 (GPLv3).

- You may use, modify, and redistribute this module freely.
- Any distributed modifications must remain under GPLv3.
- Commercial resale of closed-source versions is not allowed.

Full license text is in the `LICENSE` file.

### Contact

- Website: https://26bz.online
- Discord: https://26bz.online/discord
