# Security pipeline

Automated checks run on every push and PR to `main` (plus weekly on Mondays at 06:00 UTC) via `.github/workflows/security.yml`.

## What runs

| Job | Tool | Purpose | Fails build on |
| --- | --- | --- | --- |
| `dependency-audit` | `bun audit` + `npm audit` | Known CVEs in npm dependencies | High / Critical |
| `secret-scan` | gitleaks | Leaked API keys, tokens, private keys in git history | Any finding |
| `sast-codeql` | GitHub CodeQL (`security-and-quality`) | Static analysis for JS/TS vulnerabilities (XSS, injection, unsafe sinks, etc.) | Errors surface in the Security tab |
| `filesystem-scan` | Trivy (fs) | Vulnerable dependencies + misconfig in source tree | High / Critical (fixed versions only) |

CodeQL and Trivy upload SARIF results to the repository **Security → Code scanning** tab, so new findings appear inline on PRs.

## Local equivalents

```bash
bun audit --prod --audit-level=high   # dependency CVEs
npx gitleaks detect --no-banner       # secret scan
```

Supabase/database security is covered separately by the in-platform Lovable security scanner (see Security tab in the Lovable editor); it is not part of the GitHub pipeline.

## Triaging a failure

1. Open the failing job; the tool prints the advisory ID and remediation.
2. For dependency CVEs: `bun update <pkg>` to the patched version, or pin a transitive dep.
3. For secret leaks: rotate the secret immediately, then purge from history (`git filter-repo`) before re-pushing.
4. For CodeQL/Trivy: review the SARIF entry in the Security tab; fix or, if a false positive, dismiss with justification.
