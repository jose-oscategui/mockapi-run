# Skill Registry — mockapi-run

<!-- Auto-generated during sdd-init. -->

Last updated: 2026-05-19

## Sources scanned

- `/Users/joseoscategui/.config/opencode/skills`
- `/Users/joseoscategui/.claude/skills`
- Project conventions checked: `AGENTS.md`, `agents.md`, `CLAUDE.md`, `.cursorrules`, `GEMINI.md`, `copilot-instructions.md` (none found in repo root)

## Compact Rules

### `branch-pr`
Path: `/Users/joseoscategui/.config/opencode/skills/branch-pr/SKILL.md`
- Every PR must link an approved issue.
- Add exactly one `type:*` label.
- Use branch names as `type/description`, lowercase only.
- Use conventional commits only.
- Make sure required validation passes before merge.

### `chained-pr`
Path: `/Users/joseoscategui/.config/opencode/skills/chained-pr/SKILL.md`
- Split PRs above 400 changed lines unless `size:exception` is explicitly accepted.
- Keep one deliverable work unit per PR.
- Declare boundaries, dependencies, and follow-up work in each chained PR.
- Do not mix chain strategies after selection.
- Fix polluted diffs before review.

### `cognitive-doc-design`
Path: `/Users/joseoscategui/.config/opencode/skills/cognitive-doc-design/SKILL.md`
- Lead with the answer or decision.
- Use progressive disclosure: quick path first, details later.
- Prefer small sections, tables, and checklists over dense prose.
- Make review order and out-of-scope areas explicit.

### `comment-writer`
Path: `/Users/joseoscategui/.config/opencode/skills/comment-writer/SKILL.md`
- Start with the actionable point.
- Keep comments short, warm, and direct.
- Explain why when asking for a change.
- Match the recipient language.
- Avoid pile-on feedback.

### `issue-creation`
Path: `/Users/joseoscategui/.config/opencode/skills/issue-creation/SKILL.md`
- Use the repo issue templates, never a blank issue.
- New issues start at `status:needs-review`.
- PRs wait for maintainer `status:approved`.
- Search for duplicates before filing.

### `judgment-day`
Path: `/Users/joseoscategui/.config/opencode/skills/judgment-day/SKILL.md`
- Use only for explicit dual/adversarial review requests.
- Run two blind judges in parallel.
- Treat only overlapping findings as confirmed.
- Re-judge after fixes before terminal actions.

### `work-unit-commits`
Path: `/Users/joseoscategui/.config/opencode/skills/work-unit-commits/SKILL.md`
- Commit by deliverable work unit, not by file type.
- Keep tests and docs with the behavior they verify.
- Each commit should stand alone and support clean rollback.
- Promote work units into chained PRs when the review budget grows.

## User Skills Trigger Table

| Skill | Trigger |
| --- | --- |
| `branch-pr` | Creating, opening, or preparing a PR |
| `chained-pr` | Review slices, stacked PRs, or >400 changed lines |
| `cognitive-doc-design` | READMEs, guides, RFCs, architecture, review-facing docs |
| `comment-writer` | PR comments, issue replies, reviews, async messages |
| `issue-creation` | Bug reports and feature requests |
| `judgment-day` | Explicit adversarial or dual review requests |
| `work-unit-commits` | Implementation planning, commit splitting, reviewable work units |

## Loading Protocol

1. Match task context and target files to the trigger table.
2. Inject only the matching compact rule blocks as `## Project Standards (auto-resolved)`.
3. Pass exact `SKILL.md` paths when the sub-agent must read the full contract.
4. If no skill matches, proceed and report `skill_resolution: none`.
