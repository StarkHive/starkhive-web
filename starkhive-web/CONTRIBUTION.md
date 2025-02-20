# Contributing to StarkHive

Welcome, and thank you for considering contributing to **StarkHive**! 🚀
We appreciate all contributions, whether big or small. This guide will help you get started.

## 🛠️ Getting Started

### 1. Fork the Repository

First, fork the **StarkHive** repository to your GitHub account.

- Go to the **main repository** on GitHub.
- Click the **Fork** button (top right).
- This creates a copy under your GitHub account.

### 2. Clone Your Fork

Now, clone the forked repository to your local machine.

```sh
# Replace <your-username> with your GitHub username
git clone https://github.com/<your-username>/starkhive-web.git
```

### 3. Navigate to the Project Directory

```sh
cd starkhive-web
```

### 4. Set Up the Upstream Remote

To keep your fork updated with the main repository:

```sh
git remote add upstream https://github.com/StarkHive/starkhive-web.git
git fetch upstream
```

## 🚀 Setting Up the Development Environment

### 1. Install Dependencies

Ensure you have **Node.js** installed, then run:

```sh
npm install
```

### 2. Start the Development Server

```sh
npm run dev
```

Your local version of StarkHive should now be running.

## 🌟 Contribution Guidelines

### 1. Create a New Branch

Before making any changes, create a new branch:

```sh
git checkout -b feature/your-feature-name
```

Example:

```sh
git checkout -b feature/add-wallet-connect
```

### 2. Make Your Changes

Follow the project’s coding standards and ensure your changes do not break anything.

### 3. Commit Your Changes

Write meaningful commit messages:

```sh
git add .
git commit -m "feat: add wallet connect button"
```

### 4. Push to Your Fork

```sh
git push origin feature/your-feature-name
```

### 5. Submit a Pull Request (PR)

- Go to the **main repository** on GitHub.
- Click **Pull Requests** > **New Pull Request**.
- Select your fork and branch.
- Provide a clear PR title and description.
- Submit for review!

## ✅ Code of Conduct

By contributing, you agree to follow our **[Code of Conduct](CODE_OF_CONDUCT.md)**.

## 🛠️ Need Help?

If you have any questions, reach out in our **community discussions** or open an issue.

Happy coding! 🚀
