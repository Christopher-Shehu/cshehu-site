---
layout: post
title: "How I consolidated 108 pipelines into 5"
description: "What a metadata-driven framework is, why it beat one-pipeline-per-source, and what I'd do differently."
tags: [databricks, data-engineering]
---

<!-- DRAFT: files in _drafts/ are NOT published.
     To publish: move this file to _posts/ and rename it with a date prefix,
     e.g. _posts/2026-10-05-pipeline-consolidation.md -->

## The problem

Describe the starting point: how many pipelines, what they did, what broke, what it cost to maintain.

## The idea: metadata instead of code

Explain the framework in plain terms. One generic pipeline, driven by a config table.

```python
# example: a config row drives the ingestion
source = spark.table("config.sources").filter("source_id = 42").first()
df = spark.read.format(source.format).load(source.path)
```

## What changed

- Maintenance:
- Onboarding a new source:
- Failures and reruns:

## What I'd do differently

The honest part. This is what makes people trust the rest.

## Takeaway

One or two sentences someone could repeat in a meeting.
