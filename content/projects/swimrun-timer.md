+++
title = "Swimrun timing app"
date = 2025-05-01
description = "Customer app to create races, time swimmers per lane, and track member progress over time."
template = "projects/single.html"

[extra]
thumbnail = "migration"
role = "Developer (apprenticeship)"
tags = ["Python", "HTML", "JavaScript", "SQL"]
nav_prev = "infoscreen"
outcome_headline = "Live race timing"
outcome_detail = "per swimmer and lane · member history and stats"

[[extra.glance]]
label = "Users"
value = "Active members"
accent = true

[[extra.glance]]
label = "Races"
value = "Create & manage"
accent = true

[[extra.glance]]
label = "Timing"
value = "Per lane"
accent_secondary = true

[[extra.glance]]
label = "History"
value = "Runs & stats"
+++

<span id="case-study-writeup"></span>

## Context

A customer needed a way to **time swimrun events** and keep results for their members — not a one-off spreadsheet, but an app coaches and participants could return to after each race.

## What the app does

**For members (login required)**

- Sign in as an active member
- View **history** of past runs
- See **statistics** and progress over time

**For organisers**

- **Create races** and add members to them
- **Time each swimmer and lane** during a live race
- Store results so they appear in member history and stats

## How we approached it

We started from the real workflow at an event: set up the race, assign people to lanes, start and record times, then publish results members can look up later. The UI had to work under pressure — few clicks, clear state for “race in progress” vs “finished”.

On the technical side we used our usual web stack (**Python** backend, **HTML & JavaScript** front end, **SQL** for persistence). Authentication gates member-only views; race management and timing flows are separate from the public-facing login path.

## My contribution

I worked on features across the stack: forms and pages for race setup, wiring the timing flow to the backend, and queries that feed the history and statistics views. A lot of the work was getting **data model and UI aligned** — a race has lanes, lanes have swimmers, times must attach to the right member and show up correctly in their profile later.

## Result

An app the customer can use to run events and give members a lasting record of their performances — replacing manual timing and scattered notes with one place for **live timing**, **results**, and **progress tracking**.
