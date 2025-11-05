# Security Policy

## Supported Versions

Use this section to tell people about which versions of your project are
currently being supported with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 5.1.x   | :white_check_mark: |
| 5.0.x   | :x:                |
| 4.0.x   | :white_check_mark: |
| < 4.0   | :x:                |

## Reporting a Vulnerability

Use this section to tell people how to report a vulnerability.

Tell them where to go, how often they can expect to get an update on a
reported vulnerability, what to expect if the vulnerability is accepted or
declined, etc.


# 🔐 Security Policy

## Supported Versions
We actively maintain and secure the following versions of **TextSpeeder**:

| Version | Supported |
|----------|------------|
| v15.1.x  | ✅ Yes |
| v14.x and below | ❌ No |

Only the latest version receives security updates and patches.

---

## 🧩 Reporting a Vulnerability

If you discover a **security vulnerability**, please **do not create a public issue**.

Instead, report it privately and responsibly:

- 📧 **Email:** security@textspeeder.app (or use your personal email if not configured)
- 🔒 **GitHub Security Advisory:** [Submit privately here](https://github.com/MutluRenegado/text-speederv15-1/security/advisories/new)
- 💬 Optionally, you may contact the maintainer directly via GitHub ([@MutluRenegado](https://github.com/MutluRenegado)).

Please include as much detail as possible:
- Steps to reproduce the issue
- Impact and affected versions
- Any potential mitigations or patches

You can expect a response within **48–72 hours**.

---

## 🧱 Security Best Practices

We follow industry best practices to keep **TextSpeeder** safe:

1. **Firebase Hosting + GitHub Actions** are used for continuous deployment with secure service account credentials.
2. Sensitive data (like Firebase keys, tokens, and API secrets) are never stored in code — only in **GitHub Secrets** or local `.env` files (ignored by Git).
3. All third-party dependencies are regularly scanned via **GitHub Dependabot** and **CodeQL**.
4. The repository supports both **public and private** deployment workflows with least-privilege IAM roles.
5. Security alerts are reviewed weekly in the repository’s **Security → Code scanning** and **Secret scanning** tabs.

---

## 🔒 Environment Variables

For developers:
- Do **not** commit `.env` or JSON key files.
- Always store private credentials using **GitHub Actions Secrets**.

Example of safe `.gitignore` entries:


.env
.json
firebase-adminsdk-.json



---

## 🛠️ Incident Response

If a security incident is confirmed:
1. The affected keys or tokens will be immediately **revoked**.
2. The impacted systems will be temporarily disabled or rolled back.
3. A fix and post-mortem will be shared via the **Security Advisories** page.

---

## ⚙️ Responsible Disclosure

We appreciate responsible disclosure and will credit contributors who report verified security vulnerabilities **privately and responsibly**.

Thank you for helping make **TextSpeeder** safer for everyone! 💙
