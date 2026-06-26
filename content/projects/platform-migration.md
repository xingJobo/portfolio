+++
title = "Platform migration"
date = 2024-06-01
description = "Monolith to services without stopping the business."
template = "projects/single.html"

[extra]
thumbnail = "migration"
role = "Tech lead"
duration = "6 months"
highlight_tags = ["Rust", "K8s"]
tags = ["Rust", "K8s"]
diagram = "platform-migration"
glance_footnote = "NDA-safe summary · metrics verified"
outcome_headline = "40% faster"
outcome_detail = "deploy cycle · zero customer-facing downtime"
github_url = "https://github.com/xingJobo"
nav_next = "ops-checklist"

[[extra.glance]]
label = "Deploy frequency"
value = "3x / week"
accent = true

[[extra.glance]]
label = "Uptime during cutover"
value = "99.95%"
accent = true

[[extra.glance]]
label = "Teams unblocked"
value = "3 squads"

[[extra.glance]]
label = "MTTR improvement"
value = "-40%"
accent_secondary = true
+++

<span id="case-study-writeup"></span>

## The problem

A single deployable blocked three product teams. Releases took days, rollbacks were risky, and on-call fatigue was rising. We needed incremental extraction without a big-bang rewrite.

## Approach

- Strangler pattern with feature flags and shadow traffic validation
- Contract tests at service boundaries before each extraction
- Shared observability: traces from monolith through new services

## Result

Independent deploy paths for three squads, measurable MTTR reduction, and a platform the business could keep shipping on throughout the migration.
