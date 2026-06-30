+++
title = "Infoscreen"
date = 2024-11-01
description = "A team-built office display for presence, weather, calendar events, and daily chores."
template = "projects/single.html"

[extra]
thumbnail = "checklist"
role = "Team member"
tags = ["HTML", "JavaScript", "Smarty", "Microsoft Graph"]
nav_prev = "wordle"
nav_next = "swimrun-timer"
+++

<span id="case-study-writeup"></span>

## Context

At work we needed a page that could run all day on a large screen in the office — not a typical website for browsing, but a **living dashboard** everyone could glance at. We built it as a **team project** during my apprenticeship.

## What it shows

The infoscreen pulls together information people used to check in different places:

- **Presence** — who is in the office and who is away
- **Weather** — current conditions and a short forecast
- **Calendar** — upcoming events from Outlook, fetched via the **Microsoft Graph API**
- **Chores** — who is assigned to which tasks for that day

The layout is designed for distance reading: clear typography, simple blocks, and content that refreshes so the screen stays useful without interaction.

## How we built it

We used the same stack as our other web work: **Smarty** templates, **vanilla HTML & JavaScript**, and server-side glue to call external APIs. Weather data comes from a forecast API; calendar data is loaded through Graph after authenticating against Microsoft 365.

We split the work by area (layout, presence, weather, calendar, chores) and integrated each piece into one page that could be opened in full-screen mode on the display machine.

## My contribution

I worked on the front end and parts of the integration — markup and styling for the dashboard sections, wiring data into the templates, and testing how the page looked on the actual screen (not just in a desktop browser). Working in a team meant regular check-ins, dividing tasks, and fitting my pieces into the whole.

## Result

A single URL the office can leave open on a monitor: presence, weather, events, and chores in one place. It replaced a mix of manual checks and made day-to-day coordination a bit easier for the team.
