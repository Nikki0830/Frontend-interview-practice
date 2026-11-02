Git and GitHub — Day 1 practice
============================================

1. Step 1 — Check Git installation
--------------------------------------
Open the VS Code terminal:git --version
git version 2.39.2.windows.1

2. Step 2 — Configure Git
-----------------------------------
If Git isn't already configured:
git config --global user.name "Your Name"

git config --global user.email "your-email@example.com"

Use the email associated with your GitHub account if you want commits linked to your profile.

if not 
=========================================
git config --global user.name "Nikita Patel"
git config --global user.email "your-actual-email@example.com"

Verify both settings
--------------------------------
Run these commands one by one:
git config --global user.name
git config --global user.email

Step 3 — Initialise a repository
Open the frontend-interview-preparation folder in VS Code.
git init

Step 4 — Check repository status
git status

Step 5 — Stage your files
git add .

Step 6 — Commit your work
git commit -m "feat: complete JavaScript fundamentals practice"


Git & GitHub — Complete Revision Notes
Beginner notes · Windows PowerShell · Antigravity · October 2026
1. What is Git and GitHub?

Git

A version control system that tracks changes to files and saves project history on your computer.




GitHub

An online platform where you host Git repositories, back up code, share projects, and collaborate with developers.



Example: You write JavaScript code locally. Git records versions of your code, and GitHub stores the repository online when you push your commits.
2. Your Git setup
Your local folder:
C:\NIKKI 2026 OCTOBER\
└── Frontend-interview-preparation\
    ├── DSA\
    ├── Frontend-projects\
    ├── Javascript\
    ├── ReadmeGit.md
    └── ReadmeJS.md


Your GitHub repository:

Nikki0830/Frontend-interview-practice

Remember: your main local folder and your GitHub repository have different names. That is perfectly fine.

Your Git identity is configured separately from your GitHub login:
git config --global user.name "Nikita Patel"
git config --global user.email "your-github-email@example.com"


Replace the email with the email you use for GitHub.
- user.name identifies the author of your commits.
- user.email identifies the email associated with those commits.
- Git Credential Manager handles authentication with GitHub.
Your Git name does not have to be your GitHub username, Nikki0830.
3. Git configuration commands
Command	Purpose
git --version	Check whether Git is installed
git config --global user.name	Check your configured Git name
git config --global user.email	Check your configured Git email
git config --global --list	View global Git settings
git status	Check repository status

The --global flag applies the setting to your user account across repositories, unless a more specific configuration overrides it.
4. What is git init?
git init initializes a new Git repository in your current folder.
git init


It creates a hidden .git directory that stores Git's repository data, including commit history.

Why did we use it?

Your terminal initially showed:
fatal: not a git repository


That meant your current folder wasn't recognized as a Git repository. We initialized Git in C:\NIKKI 2026 OCTOBER.

After initialization, Git reported:
No commits yet

Untracked files:
    Frontend-interview-preparation/


This meant Git could see your project folder, but the files hadn't been committed.

Important: You don't need to run git init again for a repository that is already initialized.
5. What is git clone?
git clone downloads an existing remote repository to your computer.
git clone https://github.com/USERNAME/REPOSITORY.git


It creates a local copy, including the .git directory, commit history, and remote configuration.
git init vs git clone
git init	git clone
Starts a new local repository	Copies an existing repository
Used when starting Git tracking in an existing folder	Used when downloading an existing project
Does not automatically connect to GitHub	Usually configures the remote as origin

In your situation, we used git init because your code already existed locally and you wanted to upload it to an empty GitHub repository.
6. What is a remote repository?
A remote is a named connection to another Git repository, often on GitHub.

We connected yours using:
git remote add origin https://github.com/Nikki0830/Frontend-interview-practice.git


Breaking it down:
- git remote manages remote connections.
- add adds a connection.
- origin is the conventional name for the remote.
- The URL identifies your GitHub repository.
To verify it:
git remote -v


Expected output:
origin  https://github.com/Nikki0830/Frontend-interview-practice.git (fetch)
origin  https://github.com/Nikki0830/Frontend-interview-practice.git (push)


fetch and push are displayed labels, not commands you type yourself.
7. The Git workflow: Working directory → Staging → Commit → Push
This is the most important concept to understand.
1. Working directory

Create or modify your files.

2. Staging area

Choose which changes to include in the next commit.

git add .

3. Local repository

Save a snapshot of staged changes.

git commit -m "message"

4. Remote repository

Upload your commits to GitHub.

git push


A. git status
git status


Shows your current branch, staged changes, unstaged changes, and untracked files.
B. git add .
git add .


Stages changes in the current directory and its subdirectories.

Think of it as selecting the files you want to include in your next snapshot.
C. git commit
git commit -m "Initial commit - frontend interview preparation"


Creates a local snapshot of staged changes.
- commit saves the snapshot.
- -m allows you to provide a commit message.
- The message briefly describes the changes.
A commit does not upload files to GitHub.
D. git push
git push -u origin main


Uploads local commits to the remote repository.
- push uploads commits.
- origin identifies the GitHub remote.
- main identifies the branch to upload.
- -u sets the upstream branch for easier future pushes.
8. What is a Git branch?
A branch is a separate line of development. It lets you work on features without immediately changing another branch.

Check your current branch:
git branch --show-current


List local branches:
git branch


Rename your current branch:
git branch -M main


We used this because your branch was named master, and we wanted it to be named main.

The command renames the current branch; it does not delete your project files or commits.
9. GitHub authentication
When you first tried to push, you received:
Invalid username or token.
Password authentication is not supported for Git operations.


This was an authentication issue, not a problem with your code or Git repository.

We checked GitHub CLI:
gh --version


PowerShell reported that gh wasn't recognized, so GitHub CLI wasn't available.

Then we checked Git Credential Manager:
git credential-manager --version


It returned version 2.0.886+ea93cb5158, confirming that Git Credential Manager was available.

We configured Git to use it:
git config --global credential.helper manager


Then retried:
git push -u origin main


Git Credential Manager can help you authenticate with GitHub through a browser. The push succeeds only when authentication is completed successfully and GitHub accepts the operation.
10. Your everyday Git commands
Once the repository is connected and your first push succeeds, your usual workflow becomes:

# 1. Check your current branch and changes
git status

# 2. Stage your changes
git add .

# 3. Review staged changes
git status

# 4. Save a snapshot
git commit -m "Practice JavaScript concepts"

# 5. Upload commits to GitHub
git push



You generally won't need to run git init, git remote add origin, or git branch -M main every day.

Before running git add ., make sure you aren't staging passwords, API keys, environment secrets, or unnecessary files.
11. Common errors and their meanings
Error or message	Meaning
fatal: not a git repository	You're outside a Git repository, or Git hasn't been initialized there
nothing to commit, working tree clean	No changes need committing
untracked files	Git sees files that aren't yet tracked
remote origin already exists	A remote named origin is already configured
Invalid username or token	GitHub authentication failed
src refspec main does not match any	The specified local branch may not exist, or there may be no commit to push


Part 1: Quick interview revision
1. What is Git?
Git is a distributed version control system used to track changes in files, maintain project history, and collaborate with developers.
2. What is GitHub?
GitHub is an online platform for hosting Git repositories, sharing code, and collaborating with other developers.

Difference: Git tracks changes; GitHub hosts repositories online.
3. What does git init do?
git init initializes a new Git repository in the current folder by creating a hidden .git directory.

We use it when we already have a local project and want to start tracking it with Git.
4. What is the difference between git add and git commit?
- git add . stages changes for the next commit.
- git commit -m "message" saves the staged changes as a snapshot in the local repository.
5. Does git commit upload code to GitHub?
No. A commit saves changes locally. We use git push to upload committed changes to GitHub.
6. What is origin?
origin is the conventional name for a remote repository connection, usually pointing to your GitHub repository.

You can check it with:
git remote -v


7. What is the difference between git pull and git push?
- git push uploads local commits to the remote repository.
- git pull fetches remote changes and integrates them into your current branch.
8. Why do we use git status?
git status shows the current branch and the state of your files, including staged, unstaged, and untracked changes.

Part 2: Your practical task
We'll practise in your existing folder, C:\NIKKI 2026 OCTOBER, which is already connected to your GitHub repository.
Git practice checklist
0 of 7 completed



[ ] 1. Check the current branch

git branch --show-current


[ ] 2. Check repository status

git status


[ ] 3. Create or edit a JavaScript file

Create practice.js inside Frontend-interview-preparation/Javascript


[ ] 4. Stage the changes

git add .


[ ] 5. Commit the changes

git commit -m "Added JavaScript practice"


[ ] 6. Push to GitHub

git push


[ ] 7. Verify on GitHub

Open your repository and check that the file appearsely decide to reorganize the repository.



one important difference:
============================
 git init creates a local Git repository, while creating a repository on GitHub creates a remote repository. They are two separate things.

There are three common scenarios.
Scenario 1: You already have a local project and created an empty GitHub repository
This is what we did together.

Example: You have your code in C:\NIKKI 2026 OCTOBER and created Frontend-interview-practice on GitHub.
Step	Command	Why?
1	git init	Initialize Git in your existing local folder
2	git remote add origin <URL>	Connect your local repository to GitHub
3	git add .	Stage your files
4	git commit -m "Initial commit"	Save a snapshot locally
5	git push -u origin main	Upload your commit to GitHub

Scenario 2: You have a local project but haven't created a GitHub repository
You can still start working with Git locally.
git init
git add .
git commit -m "Initial commit"


These commands create a local repository and save your first snapshot. When you're ready to upload it, create an empty repository on GitHub, connect it using git remote add origin <URL>, and push.

You don't need a GitHub repository to use git init.
Scenario 3: A repository already exists on GitHub and you want to download it
Use git clone:
git clone https://github.com/USERNAME/REPOSITORY.git


Git automatically creates the local repository, downloads the files and history, and configures the remote connection. You generally don't need git init afterward.
Remember this simple rule
git init

You already have a local folder and want to start tracking it with Git.



git clone

A repository already exists remotely, and you want a local copy.



git push

You want to upload your local commits to a remote repository.



Interview answer: "git init initializes a local Git repository. We can connect it to a GitHub repository using git remote add origin. If the remote repository already exists and we want to download it, we use git clone instead."


////////////////////////////////////////////
# 1. Go to the root workspace folder (so the folder structure matches GitHub)
cd "C:\NIKKI 2026 OCTOBER"

# 2. Re-initialize Git and connect to your GitHub repo
git init
git remote add origin https://github.com/Nikki0830/Frontend-interview-practice.git

# 3. Pull the existing commit history from GitHub so you don't get a conflict
git pull origin main

# 4. (Optional) Add a placeholder file inside DSA so Git tracks the folder
New-Item -ItemType File -Path "Frontend-interview-preparation\DSA\.gitkeep"

# 5. Stage, commit, and push all your new projects and notes
git add .
git commit -m "feat: add Employee-profile-card project, review notes, and CI/CD notes"
git branch -M main
git push -u origin main

///////////////////////////////////////////////
To https://github.com/Nikki0830/Frontend-interview-practice.git
 ! [rejected]        main -> main (non-fast-forward)
error: failed to push some refs to 'https://github.com/Nikki0830/Frontend-interview-practice.git'   
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
Why that error happened

When you ran git pull origin main, Git fetched GitHub's commit (1f3f10f), but refused to check it out because files with the same names (ReadmeGit.md, ReadmeJS.md, etc.) already existed as untracked files on your computer.

Because of that, when you ran git commit, Git created a brand-new, separate root commit (bf0857d) with no connection to GitHub's original commit (1f3f10f). When you tried to push, GitHub rejected it (non-fast-forward) because your local branch didn't have 1f3f10f in its history.

I just fixed the commit history for you!

I linked your local main branch directly on top of GitHub's origin/main (1f3f10f) using git reset --soft origin/main and re-committed all your new and modified files (including a .gitkeep inside DSA so the DSA folder shows up on GitHub too):

text
* c229d6d (HEAD -> main) feat: add Employee-profile-card project, review notes, and CI/CD notes
* 1f3f10f (origin/main) Initial commit - frontend interview preparation
All you need to do now:

Run this single command in your VS Code terminal:

powershell
git push -u origin main

Then refresh your GitHub page—all your folders (DSA, Frontend-projects, Javascript, and all your Readme*.md files) will appear!




