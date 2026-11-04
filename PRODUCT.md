# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS, no build step, no dependencies. Dev server: `npm run dev` (node server.js). Deployed via GitHub → Vercel; custom domain dongzhecheng.com.

## Users

Primary: film-studies scholars, journal editors, conference organizers, and prospective collaborators evaluating Zhecheng Dong's research. Secondary: visitors from Chinese- and Spanish-speaking academic contexts (hence trilingual UI). Situation: quick credibility check before reading a paper, inviting a talk, or citing the researcher.

## Product Purpose

A personal academic homepage that states who Dong is, what he researches (transitional cinema, China/Spain 1975–2015, embodied urban memory), what he has written, and how to reach him — in Chinese, English, and Spanish.

## Positioning

Not a generic CV page: the doctoral project (comparative transitional-cinema studies) and the founder role at Kinoscholar are the two things a neighbor's page could not truthfully copy.

## Operating Context

Read surface. Visitors arrive from paper PDFs, email signatures, conference programs, Google Scholar. Static site; content edited by hand in `data.js`; i18n via per-field `{zh, en, es}` objects with a persisted language switcher; empty sections auto-hide.

## Capabilities and Constraints

- Trilingual: zh / en / es, language persisted in localStorage, defaults to browser language.
- Name display per language: 中文界面显示「董哲诚」，其他语言显示 "Zhecheng Dong"。
- Publications section currently hidden (all manuscripts under review; user asked not to list them yet).
- Contact: two emails (zhdongdo81@doct.ub.edu, zhecheng.dong@kinoscholar.com), ORCID 0009-0009-3887-580X, LinkedIn linkedin.com/in/zhecheng-dong-862390364, Kinoscholar site.
- Photo: photo.jpg (user-supplied portrait).
- Work experience from the 金味德 group must NOT appear (user instruction).
- Dark mode available; static hosting means zero server features.

## Brand Commitments

User-pinned visual direction: "Anthropic 一点，电影一点" — warm editorial paper, restrained serif, cinematic film-program detailing. This pins the world; everything else in the visual system is derived, not asked.

## Evidence on Hand

Real content: CV PDF and doctoral research proposal PDF (workspace). All papers are under review — none may be presented as published. No invented metrics, affiliations, or awards beyond: CSC fellowship 2026.

## Product Principles

- Truth over polish: under-review means under-review; no inflated claims.
- Three languages are first-class, not an afterthought layer.
- The page is a reading object: typography and pacing carry it.
- Everything editable lives in `data.js` — no build tooling required.
