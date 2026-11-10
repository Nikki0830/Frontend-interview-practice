# CI/CD Pipeline — Interview Notes

## 1. What is CI/CD?

CI/CD stands for **Continuous Integration and Continuous Delivery / Continuous Deployment**.

A CI/CD pipeline is an automated sequence of steps used to validate, build, and release software. It helps teams deliver software more reliably, reduce manual work, and identify problems early.

**Interview answer:**

"CI/CD is a software development practice that automates code integration, testing, building, and deployment. It helps developers detect errors early, reduce manual effort, and deliver software faster and more reliably."

### Why do we use CI/CD?

- Automate repetitive development tasks.
- Detect errors early.
- Maintain code quality.
- Reduce manual deployment mistakes.
- Deliver software more frequently.
- Make releases more consistent and reliable.

---

## 2. What is Continuous Integration (CI)?

Continuous Integration means developers regularly integrate their code changes into a shared repository.

Automated checks run on the changes to help detect problems before the code is merged or released.

### Common CI steps

1. Developer writes code.
2. Developer commits and pushes code to GitHub.
3. The CI workflow starts automatically.
4. Dependencies are installed.
5. Code quality checks and automated tests run.
6. The application is built.
7. The workflow reports success or failure.

**Interview answer:**

"Continuous Integration is a practice where developers frequently integrate their code into a shared repository. Automated checks, such as linting, testing, and building, help identify issues early and maintain code quality."

### Example

Suppose I develop a new feature in a React application and push it to GitHub. A CI workflow can automatically check whether the code passes linting, tests, and the production build.

If a check fails, I can review the logs, fix the issue, and push the changes again.

---

## 3. What is Continuous Delivery?

Continuous Delivery means the application is automatically built and tested so that it remains ready for release.

Production deployment may still require manual approval.

**Interview answer:**

"Continuous Delivery ensures that code changes are automatically validated and prepared for release. The application remains in a deployable state, but a team member may need to approve the production deployment."

### Example

A React application passes its automated tests and production build. The application is ready for release, but the team lead approves deployment to production.

---

## 4. What is Continuous Deployment?

Continuous Deployment means changes that pass the required automated checks are automatically deployed to production without a separate manual release approval.

**Interview answer:**

"Continuous Deployment automates the release process so that every qualifying change that passes the required checks can be deployed to production automatically."

### Example

I push a frontend feature to GitHub. The pipeline runs the required checks, builds the application, and automatically deploys the successful change to production.

---

## 5. Difference Between CI, Continuous Delivery, and Continuous Deployment

| Feature | CI | Continuous Delivery | Continuous Deployment |
|---|---|---|---|
| Main purpose | Integrate and validate code | Prepare software for release | Automatically release changes |
| Automated tests | Typically yes | Typically yes | Typically yes |
| Automated build | Usually | Usually | Usually |
| Production deployment | Not required | May require manual approval | Automatic after required checks |
| Main benefit | Detect problems early | Keep releases ready | Release qualifying changes quickly |

**Remember:**

- CI = Integrate and validate.
- Continuous Delivery = Keep the application ready to release.
- Continuous Deployment = Automatically release qualifying changes to production.

---

## 6. What is a CI/CD pipeline?

A pipeline is an automated sequence of steps that moves code from development towards release.

### Typical frontend CI/CD pipeline

1. **Code:** Develop a feature using VS Code.
2. **Version control:** Commit changes using Git.
3. **Push:** Upload changes to GitHub.
4. **CI trigger:** Start a workflow on a push or pull request.
5. **Install:** Install project dependencies.
6. **Lint:** Check code quality.
7. **Test:** Run automated tests.
8. **Build:** Generate the production-ready application.
9. **Review and merge:** Approve changes according to the team's workflow.
10. **Deploy:** Release the application to a hosting environment.

Not every pipeline contains all these steps, and their order depends on the project and deployment strategy.

---

## 7. Important CI/CD terminology

### Repository
A project and its version history managed by Git. GitHub hosts remote repositories.

### Workflow
An automated process defined in a configuration file, commonly YAML when using GitHub Actions.

### Trigger / Event
An event that starts a workflow, such as a push, pull request, or manually triggered run.

### Job
A group of steps executed on a runner. Jobs can run in parallel or depend on other jobs.

### Step
An individual action or command, such as checking out code, installing dependencies, or running tests.

### Runner
A machine or execution environment that runs workflow jobs.

### Build
The process of generating the application output needed for deployment or distribution.

### Deployment
Releasing the application to a hosting environment or server.

### Artifact
A file or collection of files produced by a workflow, such as a build output or test report.

### Environment
A deployment target such as development, staging, or production.

---

## 8. Tools used in a frontend CI/CD workflow

### Git
A version control system used to track code changes locally.

### GitHub
A hosting platform for Git repositories, collaboration, pull requests, and code reviews.

### GitHub Actions
An automation platform that runs workflows in response to configured events.

### Node.js and npm
Node.js runs JavaScript outside the browser. npm manages packages and project scripts for JavaScript applications.

### Hosting platform
A service such as Vercel, Netlify, or another suitable platform that hosts and deploys frontend applications.

---

## 9. How GitHub Actions works

GitHub Actions can automatically run tasks when code is pushed to GitHub or when a pull request is opened.

A workflow is usually stored inside:

```text
.github/
└── workflows/
    └── ci.yml
```

### Example: Basic GitHub Actions workflow

```yaml
name: JavaScript CI

on:
  push:
  pull_request:

jobs:
  check:
    runs-on: ubuntu-latest

    steps:
      - name: Get the code
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 24

      - name: Check Node.js version
        run: node --version
```

### Explanation

- `name`: Defines the workflow name.
- `on`: Defines the events that trigger the workflow.
- `push`: Runs the workflow when changes are pushed.
- `pull_request`: Runs the workflow for pull request events.
- `jobs`: Defines the jobs in the workflow.
- `runs-on`: Specifies the runner environment.
- `steps`: Defines the tasks executed by the job.
- `actions/checkout`: Checks out the repository code.
- `actions/setup-node`: Sets up the specified Node.js version.
- `run`: Executes a shell command.

This introductory workflow checks out the code, configures Node.js, and prints the Node.js version. It does not yet run tests, build the application, or deploy it.

---

## 10. CI/CD in a React application

For a React project using npm, a typical workflow may include:

```text
Developer writes React code
            |
            v
      Git commit
            |
            v
      GitHub push
            |
            v
     GitHub Actions
            |
            v
    Install dependencies
            |
            v
      Run lint checks
            |
            v
       Run tests
            |
            v
     Build application
            |
            v
    Review / merge code
            |
            v
    Deploy application
```

The actual steps depend on the project configuration. For example, a project must have the appropriate scripts in `package.json` before the pipeline can run `npm test`, `npm run lint`, or `npm run build`.

---

## 11. What happens if a CI/CD pipeline fails?

**Interview answer:**

"If a pipeline fails, I check the failed job and step logs to identify the cause. I reproduce the problem locally if possible, fix the code or configuration, run the relevant checks again, and push the corrected changes. The pipeline then runs again to validate the fix."

Common reasons include:

- Syntax errors or lint failures.
- Failed automated tests.
- Missing dependencies.
- Incorrect environment variables.
- Build configuration errors.
- Deployment permissions or configuration problems.

---

## 12. Benefits of CI/CD

1. Faster feedback on code changes.
2. Better code quality through automated checks.
3. Fewer manual deployment steps.
4. More consistent releases.
5. Earlier detection of integration issues.
6. Easier collaboration between developers.
7. More repeatable deployment processes.

CI/CD helps reduce risk, but it does not guarantee that every bug will be caught or that every deployment will succeed.

---

## 13. Common CI/CD interview questions

### Q1. What is CI/CD?
CI/CD automates code validation, building, and software delivery or deployment.

### Q2. What is the difference between CI and CD?
CI focuses on integrating and validating changes. CD focuses on preparing releases or automatically deploying qualifying changes.

### Q3. What is a pipeline?
A pipeline is an automated sequence of steps used to validate, build, and release software.

### Q4. What is GitHub Actions?
GitHub Actions is a platform for automating repository workflows, including testing, building, and deployment.

### Q5. What is a runner?
A runner is the machine or environment where a workflow job executes.

### Q6. What is a workflow?
A workflow defines an automated process, including its triggers, jobs, and steps.

### Q7. What is the difference between a job and a step?
A job groups related steps. A step performs an individual action or command within that job.

### Q8. What is a build?
A build generates the application output required for testing, distribution, or deployment.

### Q9. What is deployment?
Deployment releases an application to a target environment where it can be used or accessed.

### Q10. How would you automate a React application's deployment?
I would configure a GitHub Actions workflow to check out the repository, set up Node.js, install dependencies, run linting and tests, build the application, and deploy it to the chosen hosting platform after the required checks and approvals.

### Q11. What is the difference between staging and production?
Staging is an environment used to validate a release before production. Production is the environment serving real users.

### Q12. Why might a pipeline fail?
It might fail because of code errors, failing tests, missing dependencies, incorrect configuration, missing secrets, or deployment problems.

---

## 14. Quick revision

- **CI:** Integrate and validate code changes regularly.
- **Continuous Delivery:** Keep changes ready for release, potentially with manual approval.
- **Continuous Deployment:** Automatically release qualifying changes to production.
- **Pipeline:** An automated sequence of tasks.
- **Workflow:** A configured automated process.
- **Job:** A group of steps executed on a runner.
- **Step:** An individual task or command.
- **Runner:** The environment that executes a job.
- **Git:** Tracks code changes.
- **GitHub:** Hosts repositories and supports collaboration.
- **GitHub Actions:** Automates workflows.
- **Build:** Produces application output.
- **Deployment:** Releases the application to an environment.

## 15. Practical learning roadmap

- [ ] Understand Git and GitHub basics.
- [ ] Create a JavaScript practice repository.
- [ ] Learn `package.json` and npm scripts.
- [ ] Create a GitHub Actions workflow.
- [ ] Automate linting, testing, and builds.
- [ ] Configure a frontend deployment.
- [ ] Learn environment variables and secrets.
- [ ] Practise explaining the pipeline in a mock interview.

**My interview strategy:** First understand the concepts and be able to explain them clearly. Then build one working pipeline so you can discuss a real implementation rather than only theoretical definitions.