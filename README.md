# Small Web Goggle

A Brave Search Goggle built from (Kagi's Small Web list)[https://github.com/kagisearch/smallweb/blob/main/smallweb.txt].

The generated `smallweb.goggle` keeps only sites that appear in the Small Web list.

## Usage

Build the Goggle:

```sh
deno task build
```

Then submit it to Brave Search:

```sh
deno task submit
```

## Automation

The GitHub Actions workflow in `.github/workflows/update.yaml` runs daily: it rebuilds
`smallweb.goggle`, commits and pushes it when the upstream list has changed, and then
submits the updated Goggle.
